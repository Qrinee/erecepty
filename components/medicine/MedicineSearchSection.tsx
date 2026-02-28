"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { Search, Pill, Activity, ChevronRight, X } from "lucide-react";
import { debounce } from '@/app/utils/debounce';
import { searchAutocomplete } from '@/app/utils/api';
import { SearchResult } from '@/app/types/medicine';

interface MedicineSearchSectionProps {
  onMedicineSelect: (result: SearchResult) => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function MedicineSearchSection({ 
  onMedicineSelect, 
  isOpen, 
  onClose 
}: MedicineSearchSectionProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Funkcja wyszukująca z debouncingiem
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

  // Obsługa zmiany inputu
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

  // Obsługa klawiatury
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
        }
        break;
      
      case 'Escape':
        setShowSuggestions(false);
        setActiveIndex(-1);
        break;
    }
  };

  // Wybór wyniku z dropdown
  const handleSelectResult = (result: SearchResult) => {
    setQuery('');
    setShowSuggestions(false);
    setResults([]);
    onMedicineSelect(result);
  };

  // Ukryj dropdown po kliknięciu na zewnątrz
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/50">
      {/* Modal backdrop */}
      <div 
        className="absolute inset-0" 
        onClick={onClose}
      />
      
      {/* Modal content */}
      <div 
        ref={dropdownRef}
        className="relative w-full max-w-xl mx-4 bg-white rounded-xl shadow-2xl animate-fadeIn"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">
            Wyszukaj lek
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Search input */}
        <div className="p-4 border-b border-gray-100">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 stroke-[1.5] text-slate-400"
            />

            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Wpisz nazwę leku..."
              className="
                w-full h-12
                pl-12 pr-4
                rounded-lg
                bg-gray-50
                border border-gray-200
                text-sm
                outline-none
                focus:border-blue-500
                focus:ring-2 focus:ring-blue-100
                transition-colors
              "
              autoComplete="off"
            />

            {/* Loading indicator */}
            {isLoading && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <div className="w-5 h-5 border-2 border-blue-100 border-t-blue-600 rounded-full animate-spin" />
              </div>
            )}
          </div>
        </div>

        {/* Suggestions dropdown */}
        {showSuggestions && results.length > 0 && (
          <div className="max-h-80 overflow-y-auto">
            <div className="p-3 border-b border-gray-100 bg-gray-50">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-gray-600">
                  Znaleziono {results.length} leków
                </span>
                <span className="text-xs text-gray-400">
                  Użyj ↑↓ klawiszy, Enter do wyboru
                </span>
              </div>
            </div>

            <ul className="divide-y divide-gray-100">
              {results.map((result, index) => (
                <li key={result.id}>
                  <button
                    type="button"
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
                  >
                    <div className="flex items-start gap-3">
                      {/* Icon */}
                      <div className="
                        flex-shrink-0 w-10 h-10
                        rounded-lg
                        bg-blue-100
                        flex items-center justify-center
                      ">
                        <Pill className="w-5 h-5 text-blue-600" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className="text-sm font-semibold text-gray-900 truncate">
                            {result.nazwa}
                          </h4>
                        </div>

                        {/* Details */}
                        <div className="space-y-1">
                          {result.suggestion && (
                            <p className="text-xs text-gray-600">
                              {result.suggestion}
                            </p>
                          )}
                          
                          <div className="flex flex-wrap gap-x-3 gap-y-1">
                            {result.substancjaCzynna && (
                              <span className="text-xs text-gray-500 flex items-center gap-1">
                                <Activity className="w-3 h-3" />
                                {result.substancjaCzynna}
                              </span>
                            )}
                            {result.postacFarmaceutyczna && (
                              <span className="text-xs text-gray-500">
                                {result.postacFarmaceutyczna}
                              </span>
                            )}
                            {result.moc && (
                              <span className="text-xs text-gray-500">
                                {result.moc}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Chevron */}
                      <ChevronRight className="
                        flex-shrink-0
                        w-5 h-5
                        text-gray-400
                        ml-2
                      " />
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* No results message */}
        {showSuggestions && query.length >= 2 && !isLoading && results.length === 0 && (
          <div className="p-8 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gray-100 flex items-center justify-center">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <h4 className="text-sm font-semibold text-gray-900 mb-1">
              Nie znaleziono leków
            </h4>
            <p className="text-sm text-gray-600">
              Brak wyników dla "{query}"
            </p>
          </div>
        )}

        {/* Empty state */}
        {showSuggestions && query.length < 2 && (
          <div className="p-8 text-center">
            <p className="text-sm text-gray-500">
              Wpisz co najmniej 2 znaki, aby wyszukać lek
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
