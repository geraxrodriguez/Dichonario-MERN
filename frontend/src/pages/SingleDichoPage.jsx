import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
// import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';

const SingleDichoPage = () => {
    const [dicho, setDicho] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const getDicho = async () => {
            try {
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
            <section className="bg-indigo-50 h-5/6 overflow-auto">
                <div className="container m-auto py-10 px-6 border border-black">
                    <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6 border border-black ">

                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h1 className="text-3xl font-bold">
                                {dicho.dicho}
                            </h1>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md mt-6 text-left">
                            <h3 className="text-indigo-800 text-lg font-bold mb-1">
                                Literal Translation:
                            </h3>
                            <p className="mb-6">
                                {dicho.meaning}
                            </p>

                            <h3 className="text-indigo-800 text-lg font-bold mb-1">
                                Actually Means:
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

                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleDichoPage
