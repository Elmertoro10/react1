import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import React from 'react';

function App() {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4 fw-bold text-primary">¡Hola Mundo en React! 🌍</h1>
      <p className="lead">Soy <strong>E. Guillermo Gutierrez Cajas</strong>, desarrollador web en formación 💻</p>
      <hr />
      <p>Este es mi primer proyecto usando React + Bootstrap 🚀</p>
      <a className="btn btn-outline-primary btn-lg mt-3" href="https://react.dev" target="_blank">
        Conoce más sobre React
      </a>
    </div>
  );
}
export default App;
