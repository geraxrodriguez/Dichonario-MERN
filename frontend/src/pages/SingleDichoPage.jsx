import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleDichoPage = () => {
    const [dicho, setDicho] = useState({});
    const [suggestions, setSuggestions] = useState('')
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

    const submitSuggestions = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:2222/dichos/${id}/suggestions`, suggestions)
            console.log(res.data)
        } catch (error) {
            console.log('Error submitting form', error)
        }
    };

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

                        <form className="text-lg/6" onSubmit={submitSuggestions}>
                            <label
                                htmlFor="suggestions"
                                className="block text-gray-700"
                            >Have any suggestions for this dicho? Please let us know.</label
                            >
                            <textarea
                                id="suggestions"
                                name="suggestions"
                                className="border border-gray-500 rounded w-full py-1 px-1 resize-none"
                                rows="2"
                                required
                                value={suggestions}
                                onChange={(e) => setSuggestions(e.target.value)}
                            ></textarea>
                            <button
                                className="bg-indigo-500 hover:bg-amber-500 text-white text-base px-1"
                                type="submit"
                            >
                                Submit
                            </button>
                        </form>

                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleDichoPage
