import './Quotes.css';
function ListOfQuotes ({quotes}) {
    return (
    <div className="main-container">
        {
            quotes.map(quote => (
            <div key={quote.character} className="yellow-container">
                <div key={quote.character} className="white-container">  
                <p>{quote.quote}</p>
                <img src={quote.image} alt={quote.character}/>
                </div>
                <p className='bold-text'>{quote.character}</p>
            </div>))
        }
    </div>
    )
}

function NoQuotes() {
    return (
        <div className="main-container">
        {
            <div className="yellow-container">
                <div className="white-container">  
                <p>No se encontraron quotes para esta busqueda</p>
                </div>
            </div>
        }
    </div>
    )
}

export function Quotes({quotes}) {
    const hasQuotes = quotes?.length > 0;
    return (
    hasQuotes ?  <ListOfQuotes quotes={quotes}/> : <NoQuotes/>
    )
}