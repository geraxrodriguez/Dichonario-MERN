import React, { useState } from 'react';
import SearchResultsList from './SearchResultsList';

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const fetchData = (value) => {
    // fetch('https://dichonario.cyclic.app/dichos')
    fetch('http://localhost:2222/dichos')
      .then((response) => response.json())
      .then((json) => {
        const dichos = json.dichos;
        const results = dichos.filter(dicho => {
          return (
            value &&                                  // if user has typed in a value
            dicho &&                                  // if anything in our dichos 
            dicho.dicho &&                            // if dicho has dicho property
            dicho.dicho.toLowerCase().includes(value.toLowerCase()) // wouldn't we need to make the value lowercase too?
          );
        });
        setResults(results);
      })
  };

  const handleChange = value => {
    setInput(value);
    fetchData(value);
  };
  
  const handleSelectSearchResult = result => {
    setInput(result);
    setResults([]);
  };

  return (
    <form action='' className=''>
  
      {/* INPUT FIELD */}
      <input
        className="border rounded-lg w-full py-1 px-5 mb-1 text-2xl required"
        placeholder="Search dichos..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
  
      {/* SEARCH RESULTS LIST */}
      { results && 
        results.length > 0 && 
        <SearchResultsList results={results} onSelectResult={handleSelectSearchResult} />
      }
  
      {/* BUTTONS */}
      <div className="w-full flex space-x-2 justify-center mt-3">
        <button type="submit" className="bg-indigo-500 text-white rounded-md px-3 py-2">
          Search
        </button>
        {/* <button className="bg-indigo-500 text-white rounded-md px-3 py-2">
          Dicho of the Day
        </button> */}
      </div>
  
    </form>
  
  )
};


export default SearchBar;
