import React  from 'react';
import SearchResult from './SearchResult';

const SearchResultsList = ({ results, onSelectResult }) => {
    return (
    <div className="bg-white flex flex-col max-h-80 rounded-lg overflow-y-auto mt- max-h-64">
        {results.map((result, id) => {
            return <SearchResult key={id} result={result.dicho} onSelect={onSelectResult} />;
        })}
    </div>
    )
}

export default SearchResultsList
