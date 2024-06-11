import React from 'react'

const SearchResult = ({ result, onSelect }) => {
  return (
    <div 
        className='px-1 py-2 hover:bg-gray-200 hover:cursor-pointer'
        onClick={() => onSelect(result)}    
    >
        {result.dicho}
    </div>
  )
}

export default SearchResult
