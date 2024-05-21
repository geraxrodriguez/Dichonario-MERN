import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {dichos.map((dicho) => (
        <div key={dicho._id}>
          <h1>{dicho.dicho}</h1>
          <h1>{dicho.meaning}</h1>
          <h1>{dicho.example}</h1>
        </div>
      ))}
    </div>
  )
}

export default Dichos;
