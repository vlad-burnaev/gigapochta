import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { createBrowserHistory } from "history";

import Registration from "./containers/Registration";
import Login from "./containers/Login";
import ForgotPass from "./containers/ForgotPass";
import Contacts from "./containers/Contacts";
import Questions from "./containers/Questions";
import LayerDocuments from "./containers/LayerDocuments";

import "./styles/common.scss";

// import * as serviceWorker from "./serviceWorker";

// const history = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="signup" element={<Registration />} />
      <Route path="forgot" element={<ForgotPass />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="questions" element={<Questions />} />
      <Route path="layerDocuments" element={<LayerDocuments />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
