import React, { useState } from 'react';

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&                               // if user has typed in a value
            user &&                                //  
            user.name &&                           // if user has a name property 
            user.name.toLowerCase().includes(value) // wouldn't we need to make the value lowercase too?
          );
        });
        setResults(results);
      })
    };

  const handleChange = value => {
    setInput(value);
    fetchData(value);
  };

  return (
    <form action='' className=''>

      <input
        className="border rounded-3xl w-full py-1 px-5 mb-4 text-2xl required"
        placeholder="Search dichos..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />

      <div className="w-full flex space-x-2 justify-center">
        <button type="submit" className="bg-indigo-500 text-white rounded-md px-3 py-2">
          Search
        </button>
        <button className="bg-indigo-500 text-white rounded-md px-3 py-2">
          Dicho of the Day
        </button>
      </div>
    </form>

  )
}

export default SearchBar
