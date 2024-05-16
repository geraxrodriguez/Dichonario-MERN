// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import MainLayout from './layouts/MainLayout';
// import Home from './pages/Home'
// import './App.css'

// const App = () => {
//   return (
//     <Routes>
//       <Route path='/' element={< MainLayout />}>
//         <Route path='/' element={< Home />} />
//       </Route>
//     </Routes>
//   )
// };

// export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;