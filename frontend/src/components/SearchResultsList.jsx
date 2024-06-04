import React  from 'react';
import SearchResult from './SearchResult';

const SearchResultsList = ({ results }) => {
    return (
    <div className="bg-white flex flex-col max-h-80 rounded-lg overflow-y-auto mt- max-h-64">
        {results.map((result, id) => {
            return <SearchResult result={result.name} key={id} />;
        })}
    </div>
    )
}

export default SearchResultsList
