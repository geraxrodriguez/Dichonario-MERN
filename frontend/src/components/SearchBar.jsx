import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchResultsList from './SearchResultsList';

const SearchBar = () => {
  const [ input, setInput ] = useState("");
  const [ searchResults, setSearchResults ] = useState([]);
  // const [ selectedDicho, setSelectedDicho ] = useState({})
  const navigate = useNavigate();

  const fetchData = (input) => {
    fetch('http://localhost:2222/dichos')
      .then((response) => response.json())
      .then((json) => {
        const dichos = json.dichos;
        const searchResults = dichos.filter(dicho => {
          return (
            input &&                                  // if user has typed in a value
            dicho &&                                  // if anything in our dichos 
            dicho.dicho &&                            // if dicho has dicho property
            dicho.dicho.toLowerCase().includes(input.toLowerCase()) // wouldn't we need to make the value lowercase too?
          );
        });
        setSearchResults(searchResults);
      })
  };

  // This functions does two things:
  // 1. Sets our input variable, which then updates our 'value' attribute within the form.
  // 2. Uses our input variable to fetch data from API after every change. 
  const handleChange = eTargetValue => {
    setInput(eTargetValue);
    fetchData(input);
  };
  
  const selectSearchResult = selectedSearchResult => {
    // setSelectedDicho(result);
    // setResults([]);
    // setInput(result);
    // console.log(selectedSearchResult)
    const id = selectedSearchResult._id
    navigate(`/dichos/${id}`)
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(input)
    // const id = selectedDicho._id
    // if (!input){
    //   navigate('/dichos')
    // }
    // else if (id){
    //   navigate(`/dichos/${id}`)
    // } 
    // else {
    //   console.log(input)
    // }
  };

  return (
    <form onSubmit={submit} className=''>
  
      {/* INPUT FIELD */}
      <input
        className="border rounded-lg w-full py-1 px-5 mb-1 text-2xl required"
        placeholder="Search dichos..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
  
      {/* SEARCH RESULTS LIST */}
      { searchResults && 
        searchResults.length > 0 && 
        <SearchResultsList searchResults={searchResults} selectSearchResult={selectSearchResult} />
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
