// import { useState } from "react";
import { Link } from 'react-router-dom';

const DichoComponent = ({ dicho }) => {
  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        {/* <div className="mb-6"> */}
          {/* <h3 className="text-2xl font-bold">{dicho.dicho}</h3>
          <p className="mt-2 text-sm">"{dicho.meaning}"</p> */}
        {/* </div> */}

        <Link to={'/dichos/mochate'}>
          <h3 className="text-2xl font-bold">Mochate</h3>
          <p className="mt-2 text-sm">Chop yourself (in half)</p>
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