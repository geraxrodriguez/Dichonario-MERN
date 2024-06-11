import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
// import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';

const SingleDichoPage = () => {
    // pull id parameter from request
    // use id to make get request to server for our specific dicho
    const [dicho, setDicho] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const getDicho = async () => {
            try {
                // const res = await axios.get('https://dichonario.cyclic.app/dichos/${id}');
                const res = await axios.get(`http://localhost:2222/dichos/${id}`);
                setDicho(res.data);
            } catch (error) {
                console.log('Error fetching data', error);
            }
        };
        getDicho();
    }, []); // ends useEffect()

    return (
        <>
            <section>
                <div className="container m-auto py-6 px-6">
                    <Link to="/dichos" className="text-indigo-300 hover:text-indigo-600 flex items-center" >
                        {/* < FaArrowLeft className='mr-2' />  */}
                        Back to Dichos
                    </Link>
                </div>
            </section>

            <section className="bg-indigo-50">
                <div className="container m-auto py-10 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                        <main>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md text-center"
                            >
                                {/* <div className="text-gray-500 mb-4">{job.type}</div> */}
                                <h1 className="text-3xl font-bold">
                                    {dicho.dicho}
                                </h1>
                                {/* <div
                                    className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
                                > */}
                                {/* < FaMapMarker className='text-orange-700 mr-1' /> */}
                                {/* <p className="text-orange-700">Chicago</p> */}
                                {/* </div> */}
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mt-6 text-left">
                                <h3 className="text-indigo-800 text-lg font-bold mb-1">
                                    Literally Means...
                                </h3>
                                <p className="mb-6">
                                    {dicho.meaning}
                                </p>

                                <h3 className="text-indigo-800 text-lg font-bold mb-1">
                                    example
                                </h3>
                                <p className="mb-6">
                                    {dicho.example}
                                </p>

                            </div>
                        </main>


                        <aside>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-6">Company Info</h3>

                                <h2 className="text-2xl">Here goes company info</h2>

                                <p className="my-2">
                                    here goes company description
                                </p>

                                <hr className="my-4" />

                                <h3 className="text-xl">Contact Email:</h3>

                                <p className="my-2 bg-indigo-100 p-2 font-bold truncate">
                                    here goes contact email
                                </p>

                                <h3 className="text-xl">Contact Phone:</h3>

                                <p className="my-2 bg-indigo-100 p-2 font-bold">job.company.description</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                                <Link
                                    // to={}
                                    className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                >Edit Job</Link
                                >
                                <button
                                    // onClick={() => onDeleteClick(job.id)}
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                >
                                    Delete Job
                                </button>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleDichoPage
