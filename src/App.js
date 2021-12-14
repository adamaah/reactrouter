import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from "./Components/Movie";
import Rag from "./Components/Rag";
import Ultron from "./Components/Ultron";
import Endgame from "./Components/Endgame";
import Navigation from "./Components/Navigation";
import React from 'react';
import rag from './rag.jpeg';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {

  return (

    <div>
      
      <BrowserRouter>
      <Navigation />
      <Routes>
        
        <Route path="/" exact element={<Movie />} />
        <Route path="/Rag" exact element={<Rag />} />
        <Route path="/Ultron" exact element={<Ultron />} />
        <Route path="/Endgame" exact element={<Endgame />} />
      </Routes>
      </BrowserRouter>
    </div>
    
  );

}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
