import { useState } from 'react';
import { searchQuotes } from '../services/quotes';

export function useSimpsonsQuotes ({search}) {
    const [responseQuotes, setResponseQuotes] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const getQuotes = async() => {
        try {
            setError(null);
            setLoading(true);
            const newQuotes = await searchQuotes({search});
            setResponseQuotes(newQuotes);
        }
        catch(e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }

    }

    return { quotes: responseQuotes, getQuotes, loading };
}