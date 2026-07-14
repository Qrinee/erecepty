const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL + '/api';

export const searchAutocomplete = async (
  query: string,
): Promise<any> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/search/autocomplete?query=${encodeURIComponent(query)}`
    );

        if (!response.ok) {
      throw new Error('Błąd wyszukiwania');
    }

        return await response.json();
  } catch (error) {
    console.error('Search error:', error);
    throw error;
  }
};