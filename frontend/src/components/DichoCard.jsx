import { useState } from 'react';
import { Link } from 'react-router-dom';

const DichoComponent = ({ dicho }) => {
  const [ showFullDescription, setShowFullDescription ] = useState(false);
  const meaning = dicho.meaning.length > 90 ? dicho.meaning.substring(0, 40) + '...' : dicho.meaning ;
  dicho = dicho.dicho.length > 30 ? dicho.dicho.substring (0, 30) + '...' : dicho.dicho ;
  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <Link to={`/dichos/${dicho._id}`}>
          <h3 className="text-2xl font-bold">{dicho}</h3>
          <p className="mt-2 text-sm">{meaning}</p>
        </Link>

        {/* <div className="mb-5">
          {dicho.meaning}
        </div> */}

        {/* <button onClick={() => setShowFullDescription((prevState) => !prevState)} className="text-indigo-500 mb-5 hover:text-indigo-600">
          {showFullDescription ? 'Less' : 'More'}
        </button> */}

        {/* <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3> */}

        {/* <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            < FaMapMarker className="inline text-lg mb-1" />
            {job.location}
          </div> */}
          {/* <Link
            to={`/dichos/${dicho.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link> */}
        {/* </div> */}
        
      </div>
    </div>
  )
}

export default DichoComponent
