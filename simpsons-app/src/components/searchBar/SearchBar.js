import { useEffect, useState } from 'react';
import { useSimpsonsQuotes } from '../../hooks/useSimpsonsQuotes.js';
import './SearchBar.css';
import { Quotes } from '../../components/Quotes/Quotes.js';
import { useNavigate } from 'react-router-dom';
import simpsons_logo from '../../images/logo.svg';
import menu_logo from '../../images/menu.svg';

function SearchBar() {
  const [error, setError] = useState(null);
  const [search, updateSearch] = useState('');
  const {quotes, getQuotes, loading} = useSimpsonsQuotes({search});
  const navigate = useNavigate();

  const handleSubmit = (event)=> {
    event.preventDefault();
    const field = new FormData(event.target);
    updateSearch(field.get('search'));
    getQuotes(search);
  }

  const handleChange = (event) => {
    updateSearch(event.target.value);
  }

  useEffect(() => {
    if(search === '') {
      setError('Debe poner un texto');
    } else {
      setError('');
    }
  }, [search]);

  const handleClick = () => {
    navigate('/notfound')
  }

    return (
      <div className='search_page'>
        <header className="App-header">
          <div className='images-header'>
            <img src={simpsons_logo} className="simpsons-logo" alt="simpsons-logo" />
            <img src={menu_logo} className="menu-logo" alt="menu-logo" />
          </div>
        </header>
        <main>
          <h1 className='title'>Discover some Simpsons quotes</h1>
          <section className='search–section'>
            <form onSubmit={handleSubmit}>
              <input placeholder="Search" className='searchBar' name="search" onChange={handleChange} autoComplete='off'/>
            </form>
            {error && <p className='error-text'><i>{error}</i></p>}
            </section>
            <section>
              {loading ? <p className='loading-text'>Cargando...</p> : <Quotes quotes={quotes}/>}
            </section>
            <aside>
            <button className='yellow-button' onClick={handleClick}>Show me more</button>
            </aside>
        </main>
      </div>
    );
  }

  export default SearchBar;