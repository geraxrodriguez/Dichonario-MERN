import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DichoComponent from '../components/DichoComponent';

const Dichos = () => {
  const [dichos, setDichos] = useState([]);

  useEffect(() => {
    const getDichos = async () => {
      try {
        // const res = await axios.get('https://dichonario.cyclic.app/dichos');
        const res = await axios.get('http://localhost:2222/dichos');
        console.log(res.data.dichos)
        setDichos(res.data.dichos);
      } catch (error) {
        console.log('Error fetching data', error);
      }
    };
    getDichos();
  }, []); // ends useEffect()

  return (
    <section className="bg-blue-50 px-4 py-6 h-5/6">
      <section className="bg-blue-50 px-4 pb-10">
        <div className="container-xl lg:container m-auto px-4">

          <h2 className="text-3xl font-bold mb-6 text-center">
            Los Dichos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* {dichos.map((dicho) => (
              <DichoComponent  key={dicho._id} dicho={dicho} />
            ))} */}
            < DichoComponent />
          </div>

        </div>
      </section>
    </section>
  )
}

export default Dichos;
