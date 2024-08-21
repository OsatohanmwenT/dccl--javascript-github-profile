import { useState, useEffect } from "react";

const useSearch = (search) => {
    const [suggestions, setSuggestions] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!search) {
            setSuggestions([]);
            return;
        }

        const debounceFetch = setTimeout(() => {
            const fetchSuggestions = async () => {
                setLoading(true);
                try {
                    const response = await fetch(`https://api.github.com/users/${search}`);
                    if (!response.ok) {
                        throw new Error(`HTTP Status error: ${response.status}`);
                    }
                    const data = await response.json();
                    setSuggestions(data);
                    console.log
                } catch (error) {
                    setError("Failed to fetch suggestions");
                    console.error(error);
                } finally {
                    setLoading(false);
                }
            };

            fetchSuggestions();
        }, 1000);

        return () => clearTimeout(debounceFetch);
    }, [search]);

    return { suggestions, error, loading };
};

export default useSearch;