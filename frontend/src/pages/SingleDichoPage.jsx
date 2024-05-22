import React from 'react'
// import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleDichoPage = () => {
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
                                    Mochate
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
                                    To cut yourself in half. 
                                </p>

                                <h3 className="text-indigo-800 text-lg font-bold mb-1">
                                    Actually Means...
                                </h3>
                                <p className="mb-6">
                                    When we say "mochate!", we aren't telling you to chop yourself in half. We're telling you to pitch in.
                                    Suppose you're out and just finished eating with a friend. The bill comes and you're friend looks at you
                                    and says, "Mochate!"<br />
                                    They're telling you to cooperate financially.
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
