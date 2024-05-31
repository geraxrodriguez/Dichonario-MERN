import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SubmitDichoPage = () => {
    const [dicho, setDicho] = useState('');
    const [literalMeaning, setLiteralMeaning] = useState('');
    const [actualMeaning, setActualMeaning] = useState('');
    const [examples, setExamples] = useState('');
    const [related, setRelated] = useState('');
    const [comments, setComments] = useState('');

    // navigate use to redirect after submitting Dicho
    const navigate = useNavigate();

    // FUNCTION FOR SUBMITTING DICHO
    const submitDicho = (e) => {
        e.preventDefault(); // prevent default form submission
        console.log('submitting dicho')
        const newDicho = {
            dicho,
            literalMeaning,
            actualMeaning,
            examples,
            related,
            comments,
        };
        console.log("New Dicho:", newDicho)
        axios
            .post('http://localhost:2222/submit-dicho', newDicho)
            .then(() => {
                console.log('Dicho submitted successfully.')
                navigate('/success');
                // window.location.reload()
            })
            .catch((error) => {
                console.log(error);
            })
    };
    return (
        <>
            <section className="bg-indigo-50">
                <div className="container m-auto max-w-2xl py-8">
                    <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                        <form onSubmit={submitDicho}>
                            <h2 className="text-3xl text-center font-semibold mb-6">Submit a Dicho</h2>

                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2"
                                >Dicho</label
                                >
                                <input
                                    type="text"
                                    id="dicho"
                                    name="dicho"
                                    className="border rounded w-full py-2 px-3 mb-2"
                                    placeholder='"Se me fue el avion"'
                                    required
                                    value={dicho}
                                    onChange={(e) => setDicho(e.target.value)}
                                />
                            </div>

                            {/* Literal Meaning */}
                            <div className="mb-4">
                                <label
                                    htmlFor="literalMeaning"
                                    className="block text-gray-700 font-bold mb-2"
                                >Literal Meaning</label
                                >
                                <textarea
                                    id="literalMeaning"
                                    name="literalMeaning"
                                    className="border rounded w-full py-2 px-3"
                                    rows="3"
                                    placeholder='"The plane without left me"'
                                    required
                                    value={literalMeaning}
                                    onChange={(e) => setLiteralMeaning(e.target.value)}
                                ></textarea>
                            </div>

                            {/* Actual Meaning */}
                            <div className="mb-4">
                                <label
                                    htmlFor="actualMeaning"
                                    className="block text-gray-700 font-bold mb-2"
                                >Actual Meaning</label
                                >
                                <textarea
                                    id="actualMeaning"
                                    name="actualMeaning"
                                    className="border rounded w-full py-2 px-3"
                                    rows="3"
                                    placeholder='"I missed it. I was not paying attention"'
                                    required
                                    value={actualMeaning}
                                    onChange={(e) => setActualMeaning(e.target.value)}
                                ></textarea>
                            </div>

                            {/* Examples  */}
                            <div className="mb-4">
                                <label
                                    htmlFor="examples"
                                    className="block text-gray-700 font-bold mb-2"
                                >Example(s)</label
                                >
                                <textarea
                                    id="examples"
                                    name="examples"
                                    className="border rounded w-full py-2 px-3"
                                    rows="3"
                                    placeholder='"Me olvide de los frijoles. Estaba viendo la tele y se me fue el avion."'
                                    required
                                    value={examples}
                                    onChange={(e) => setExamples(e.target.value)}
                                ></textarea>
                            </div>

                            {/* Related */}
                            <div className="mb-4">
                                <label
                                    htmlFor="related"
                                    className="block text-gray-700 font-bold mb-2"
                                >Related Dichos</label
                                >
                                <textarea
                                    id="related"
                                    name="related"
                                    className="border rounded w-full py-2 px-3"
                                    rows="3"
                                    placeholder='"se me fue el avion" = "se me durmio el gallo"'
                                    value={related}
                                    onChange={(e) => setRelated(e.target.value)}
                                ></textarea>
                            </div>

                            {/* Comments */}
                            <div className="mb-4">
                                <label
                                    htmlFor="comments"
                                    className="block text-gray-700 font-bold mb-2"
                                >Other Comments</label
                                >
                                <textarea
                                    id="comments"
                                    name="comments"
                                    className="border rounded w-full py-2 px-3"
                                    rows="3"
                                    placeholder=''
                                    value={comments}
                                    onChange={(e) => setComments(e.target.value)}
                                ></textarea>
                            </div>

                            <div>
                                <button
                                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Submit Dicho
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}
export default SubmitDichoPage;