import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import DichosPage from './pages/DichosPage'
import SingleDichoPage from './pages/SingleDichoPage';
import SubmitDichoPage from './pages/SubmitDichoPage';
import SuccessPage from './pages/SuccessPage';
import SearchResultsPage from './pages/SearchResultsPage';
import Test from './pages/Test';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={< MainLayout />}>
        <Route index element={< Home />} />
        <Route path="/dichos" element={< DichosPage />} />
        <Route path="/dichos/:id" element={< SingleDichoPage />} />
        <Route path="/submit-dicho" element={< SubmitDichoPage />} />
        <Route path="/success" element={< SuccessPage />} />
        <Route path="/search" element={<SearchResultsPage />} />
      </Route>
      <Route path="/test" element={<Test />} />
    </Routes>
  );
};

export default App;