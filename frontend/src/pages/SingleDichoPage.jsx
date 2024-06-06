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
            <section className="bg-indigo-50 flex flex-1 justify-center">
                <div className="container py-10 px-6 max-w-screen-md">

                        <div className="bg-white p-5 rounded-xl shadow-md text-center">
                            <h1 className="text-3xl font-bold">
                                {dicho.dicho}
                            </h1>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md mt-4 text-left text-xl md:text-2xl">
                            <h3 className="text-indigo-800 font-bold mb-1">
                                Literal Translation:
                            </h3>
                            <p className="text-lg mb-6">
                                {dicho.meaning}
                            </p>

                            <h3 className="text-indigo-800 font-bold mb-1">
                                Actually Means:
                            </h3>
                            <p className="text-lg mb-6">
                                {dicho.meaning}
                            </p>

                            <h3 className="text-indigo-800 font-bold mb-1">
                                Example
                            </h3>
                            <p className="text-lg mb-6">
                                {dicho.example}
                            </p>
                        </div>
                       
                </div>
            </section>
        </>
    )
}

export default SingleDichoPage
