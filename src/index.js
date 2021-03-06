import React from 'react';
import ReactDOM from 'react-dom';
import Providers from "./providers";
import dotenv from 'dotenv';

dotenv.config();

ReactDOM.render(
  <React.StrictMode>
    <Providers mockData={false}/>
  </React.StrictMode>,
  document.getElementById("root")
);