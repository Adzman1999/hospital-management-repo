import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import MainLayout from "./scenes/layout/main_layout";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/home' element={<MainLayout />} />
      </Routes>
    </Fragment>
  );
};

export default App;
