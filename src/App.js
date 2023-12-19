import React from 'react';
import { useSelector } from 'react-redux';
import Carrousel from './Components/Carrousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Configurator from './Components/Configurator';


const App = () => {


  return (
    <div>
      <h1>Configuration de la voiture</h1>
      <Configurator />
    </div>
  );
};

export default App;
