import React from 'react'

const SearchResult = ({ result }) => {
  return (
    <div className='px-1 py-2 hover:bg-gray-200 hover:cursor-pointer'>
        {result}
    </div>
  )
}

export default SearchResult
