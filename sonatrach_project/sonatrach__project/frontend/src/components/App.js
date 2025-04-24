// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import  NavigationBar  from "./NavigationBar";
// import  HorizontalMenu  from "./HorizontalMenu";
// import  ToolPaletteSearch  from "./ToolPaletteSearch";
// import  ToolPaletteMap  from "./ToolPaletteMap";
// import { Accueil } from "../pages/Accueil";
// import { Perimetres } from "../pages/Perimetres";
// import { Planning } from "../pages/Planning";
// import { Programmes } from "../pages/Programmes";
// import { Surfaces } from "../pages/Surfaces";
// import { Avenants } from "../pages/Avenants";

// import "./App.css";

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-white text-black">
//         <NavigationBar />
//         <HorizontalMenu />
//         <div className="grid grid-cols-4 gap-4 p-4">
//           <div className="col-span-1">
//             <ToolPaletteSearch />
//           </div>
//           <div className="col-span-3">
//             <main>
//             <Routes>
//               <Route path="/" element={<Accueil />} />
//               <Route path="/perimetres" element={<Perimetres />} />
//               <Route path="/planning" element={<Planning />} />
//               <Route path="/programmes" element={<Programmes />} />
//               <Route path="/surfaces" element={<Surfaces />} />
//               <Route path="/avenants" element={<Avenants />} />
//             </Routes>
//             </main>
//             <ToolPaletteMap />
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './NavigationBar';
import HorizontalMenu from './HorizontalMenu';
import  Home  from '../pages/home';
import  Perimetres from '../pages/Perimetres';
// import Planning from '../pages/Planning';
// import Programs from '../pages/Programs';
import Surfaces from '../pages/Surfaces';
import Avenants from '../pages/Avenants';
import PerimeterList from '../pages/PerimeterList';
import Dashboard from '../pages/Dashboard';
import Programmes from '../pages/Programmes';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Navbar />
        <HorizontalMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PerimetreList" element={<PerimeterList />} />
          <Route path="/Perimetres/:name" element={<Perimetres />} />
          <Route path="/Surfaces" element={<Surfaces />} />
          <Route path="/Avenants" element={<Avenants />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/programs/P_sismiques" element={<Programmes initialTab="ASO" />} />
          <Route path="/programs/P_puits" element={<Programmes initialTab="ASE" />} />
          <Route path="/programs/P_Etude_GG" element={<Programmes initialTab="ASC" />} />
          <Route path="/programs/P_F_Hydraulique" element={<Programmes initialTab="ASN" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;