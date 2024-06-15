import React, { useState } from 'react';

const SuggestionsForm = () => {
  const [suggestions, setSuggestions] = useState(['']); // Initialize with one suggestion

  const handleAddSuggestion = () => {
    setSuggestions([...suggestions, '']); // Add a new empty suggestion
  };

  const handleSuggestionChange = (index, value) => {
    const newSuggestions = [...suggestions];
    newSuggestions[index] = value;
    setSuggestions(newSuggestions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send suggestions to a server
    console.log(suggestions);
  };

  return (
    <form onSubmit={handleSubmit} className="suggestions-form">
      {suggestions.map((suggestion, index) => (
        <div key={index} className="suggestion-field">
          <input
            type="text"
            value={suggestion}
            onChange={(e) => handleSuggestionChange(index, e.target.value)}
            className="suggestion-input"
            placeholder={`Suggestion ${index + 1}`}
          />
        </div>
      ))}
      <button type="button" onClick={handleAddSuggestion} className="add-suggestion-btn">
        +
      </button>
      <div className="w-full flex space-x-2 justify-center mt-3">
        <button type="submit" className="bg-indigo-500 text-white rounded-md px-3 py-2">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SuggestionsForm;
