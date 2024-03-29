import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Layout from '../components/Layout';
import NotFound from '../containers/NotFound';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route
          exact
          path="/platzi-store-jest-02-jest-mocks/"
          element={<Home />}
        />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
