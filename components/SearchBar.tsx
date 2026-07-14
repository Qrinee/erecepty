
"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { Search, Pill, Activity, ChevronRight } from "lucide-react";
import { useRouter } from 'next/navigation';
import { debounce } from '@/app/utils/debounce';
import { searchAutocomplete } from '@/app/utils/api';

interface SearchResult {
  id: string;
  nazwa: string;
  nazwaPowszechnieStosowana: string;
  moc: string;
  postacFarmaceutyczna: string;
  substancjaCzynna: string;
  kodATC: string;
  katDost: string;
  suggestion: string;
}

export default function SearchBar() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  
  const performSearch = useCallback(
    debounce(async (searchTerm: string) => {
      if (searchTerm.length < 2) {
        setResults([]);
        return;
      }

      setIsLoading(true);
      try {
        const data = await searchAutocomplete(searchTerm);
        
        if (data.success) {
          setResults(data.results || []);
        } else {
          setResults([]);
        }
      } catch (error) {
        console.error('Search failed:', error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 300),
    []
  );

  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setActiveIndex(-1);
    
    if (value.trim()) {
      performSearch(value);
      setShowSuggestions(true);
    } else {
      setResults([]);
      setShowSuggestions(false);
    }
  };

  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!results.length) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex(prev => 
          prev < results.length - 1 ? prev + 1 : 0
        );
        break;
      
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex(prev => prev > 0 ? prev - 1 : results.length - 1);
        break;
      
      case 'Enter':
        e.preventDefault();
        if (activeIndex >= 0 && results[activeIndex]) {
          handleSelectResult(results[activeIndex]);
        } else if (query.trim()) {
          handleSearch();
        }
        break;
      
      case 'Escape':
        setShowSuggestions(false);
        setActiveIndex(-1);
        break;
    }
  };

  
  const handleSelectResult = (result: SearchResult) => {
    setQuery(result.nazwa);
    setShowSuggestions(false);
    
    
    router.push(`/add-medicine/${result.id}`);
  };

  
  const handleSearch = () => {
    const trimmedQuery = query.trim();
    
    if (!trimmedQuery) {
      inputRef.current?.focus();
      return;
    }

    setShowSuggestions(false);
    
    router.push(`/add-medicine/${encodeURIComponent(trimmedQuery)}`);
  };

  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
        setActiveIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  
  const handleInputFocus = () => {
    if (query.length >= 2 && results.length > 0) {
      setShowSuggestions(true);
    }
  };

  return (
    <div className="relative max-w-xl mx-auto mb-6">
      {}
      <div className="relative">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 stroke-[1.5] text-slate-400"
          aria-hidden="true"
        />

        <label htmlFor="medicine-search" className="sr-only">
          Wyszukaj lek po nazwie
        </label>
        <input
          ref={inputRef}
          id="medicine-search"
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleInputFocus}
          placeholder="Wpisz nazwę leku, aby rozpocząć..."
          className="
            w-full h-12
            pl-11 pr-28
            rounded-full
            bg-white
            border border-slate-200
            text-sm
            outline-none
            focus:border-blue-500
            focus:ring-2 focus:ring-blue-100
            transition-colors
          "
          autoComplete="off"
          aria-describedby="search-hint"
          aria-expanded={showSuggestions && results.length > 0}
          aria-controls="search-results"
          aria-activedescendant={activeIndex >= 0 ? `result-${activeIndex}` : undefined}
          role="combobox"
          aria-autocomplete="list"
        />

        {}
        <div className="absolute right-1 top-1/2 -translate-y-1/2 flex gap-2">
          <button
            onClick={handleSearch}
            type="button"
            className="
              cursor-pointer
              h-10 px-6
              bg-blue-600 text-white
              rounded-full
              text-sm font-medium
              hover:bg-blue-700
              transition-colors
              focus:outline-none focus:ring-2 focus:ring-blue-300
              disabled:opacity-50 disabled:cursor-not-allowed
            "
            disabled={isLoading}
            aria-label="Szukaj leków"
          >
            {isLoading ? '...' : 'Szukaj'}
          </button>

          <button
            type="button"
            onClick={() => router.push('/wypelnij-formularz?service=L4+online')}
            className="
              h-10 px-4
              bg-indigo-600 text-white
              rounded-full
              text-sm font-medium
              hover:bg-indigo-700
              transition-colors
              focus:outline-none focus:ring-2 focus:ring-indigo-300
              shadow-sm
            "
            aria-label="Zwolnienie lekarskie"
          >
            Zwolnienie
          </button>
        </div>

        {}
        {isLoading && (
          <div className="absolute right-24 top-1/2 -translate-y-1/2" aria-live="polite">
            <div className="w-4 h-4 border-2 border-blue-100 border-t-blue-600 rounded-full animate-spin" />
          </div>
        )}
      </div>

      <p id="search-hint" className="sr-only">
        Wpisz co najmniej 2 znaki, aby rozpocząć wyszukiwanie. Użyj strzałek góra/dół do nawigacji po wynikach, Enter do wyboru, Escape do zamknięcia.
      </p>

      {}
      {showSuggestions && results.length > 0 && (
        <div
          ref={dropdownRef}
          id="search-results"
          className="
            absolute top-full left-0 right-0 mt-2
            bg-white
            rounded-xl

            border border-slate-200
            shadow-lg
            z-50
            overflow-hidden
            animate-fadeIn
          "
          role="listbox"
          aria-label="Wyniki wyszukiwania"
        >
          <div className="max-h-80 overflow-y-auto">
            {}
            <div className="p-3 border-b border-slate-100 bg-slate-50">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-600">
                  Znaleziono {results.length} leków
                </span>
                <span className="text-xs text-slate-400">
                  Użyj ↑↓ klawiszy, Enter do wyboru
                </span>
              </div>
            </div>

            {}
            <ul className="divide-y divide-slate-100">
              {results.map((result, index) => (
                <li key={result.id}>
                  <button
                    type="button"
                    id={`result-${index}`}
                    onClick={() => handleSelectResult(result)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`
                      w-full text-left p-4
                      hover:bg-blue-50
                      transition-colors
                      cursor-pointer
                      focus:outline-none focus:bg-blue-50
                      ${activeIndex === index ? 'bg-blue-50' : ''}
                    `}
                    role="option"
                    aria-selected={activeIndex === index}
                  >
                    <div className="flex items-start gap-3">
                      {}
                      <div className="
                        flex-shrink-0 w-8 h-8
                        rounded-lg
                        bg-blue-100
                        flex items-center justify-center
                      " aria-hidden="true">
                        <Pill className="w-4 h-4 text-blue-600" />
                      </div>

                      {}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className="text-sm font-semibold text-slate-900 truncate">
                            {result.nazwa}
                          </h4>
                        </div>

                        {}
                        <div className="space-y-1">
                          {result.suggestion && (
                            <p className="text-xs text-slate-600">
                              {result.suggestion}
                            </p>
                          )}
                          
                          <div className="flex flex-wrap gap-x-3 gap-y-1">
                            {result.substancjaCzynna && (
                              <span className="text-xs text-slate-500 flex items-center gap-1">
                                <Activity className="w-3 h-3" aria-hidden="true" />
                                {result.substancjaCzynna}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {}
                      <ChevronRight className="
                        flex-shrink-0
                        w-4 h-4
                        text-slate-400
                        ml-2
                      " aria-hidden="true" />
                    </div>
                  </button>
                </li>
              ))}
            </ul>

            {}
            <div className="p-3 border-t border-slate-100 bg-slate-50">
              <button
                type="button"
                onClick={handleSearch}
                className="
                  w-full
                  py-2 px-4
                  text-sm font-medium text-blue-600
                  hover:text-blue-700
                  hover:bg-blue-100
                  rounded-lg
                  transition-colors
                  flex items-center justify-center gap-2
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                "
              >
                <span>Zobacz wszystkie wyniki dla "{query}"</span>
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}

      {}
      {showSuggestions && query.length >= 2 && !isLoading && results.length === 0 && (
        <div
          ref={dropdownRef}
          className="
            absolute top-full left-0 right-0 mt-2
            bg-white
            rounded-xl
            border border-slate-200
            shadow-lg
            z-50
            p-6
            text-center
          "
          role="status"
        >
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-slate-100 flex items-center justify-center" aria-hidden="true">
            <Search className="w-5 h-5 text-slate-400" />
          </div>
          <h4 className="text-sm font-semibold text-slate-900 mb-1">
            Nie znaleziono leków
          </h4>
          <p className="text-sm text-slate-600">
            Brak wyników dla "{query}"
          </p>
          <p className="text-xs text-slate-500 mt-2">
            Spróbuj użyć innej nazwy lub sprawdź pisownię
          </p>
        </div>
      )}
    </div>
  );
}