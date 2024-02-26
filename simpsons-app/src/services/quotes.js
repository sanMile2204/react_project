export const searchQuotes = async({search}) => {
    if (search === '') return null;
    try {
        const response = await fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?character=${search}`);
        const json = await response.json();
        const quotes = json;
        return quotes;
    }
    catch(e) {
        throw new Error('Error searching quotes');
    }  
}