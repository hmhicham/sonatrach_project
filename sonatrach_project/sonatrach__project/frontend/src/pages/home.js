// import React from 'react';
// import './Home.css';

// function Home() {
//   return (
//     <div className="home">
//       <h1>Bienvenue sur la plateforme Sonatrach</h1>
//       <div className="toolbar">
//         <input type="text" placeholder="Rechercher..." />
//         <select>
//           <option>Filtrer par</option>
//           <option>Date</option>
//           <option>Type</option>
//         </select>
//       </div>
//       <div className="map-toolbar">
//         <button>Zoom +</button>
//         <button>Zoom -</button>
//         <button>Centrer la carte</button>
//       </div>
//       <div className="content">
//         <p>Contenu principal ici...</p>
//       </div>
//     </div>
//   );
// }
// --------------------------------------------------------------


// export default Home;
import React, { useEffect, Suspense } from 'react';

const MapComponent = React.lazy(() => import('./MapComponent'));
const styles = `
  .home-container {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .home-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .map-container {
    height: 600px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-top: 2rem;
  }
`;


function Home() {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1 className="text-4xl font-bold mb-4">Bienvenue sur le Système de Suivi des Opérations</h1>
        <p className="text-xl text-gray-600 mb-8">Visualisation des activités pétrolières en Algérie</p>
      </div>
      <Suspense fallback={<div>Loading map...</div>}>
        <MapComponent />
      </Suspense>
    </div>
  );
}

export default Home;



// import React, { useState, useRef } from 'react';
// import { MapContainer, TileLayer, Polygon, Marker, Popup, useMapEvents } from 'react-leaflet';
// import L from 'leaflet';
// import './Home.css';

// function Home() {
//   const [layers, setLayers] = useState({
//     perimetres: false,
//     bassinsGeologiques: false,
//     surfacesRendues: false,
//     departements: false,
//     wilaya: false,
//     blocs: false,
//     puits: false,
//     sismique2D: false,
//     sismique3D: false,
//     volumes: false,
//     pipelines: false,
//     champsCollecteurs: false,
//   });

//   const [showLegend, setShowLegend] = useState(false);
//   const [measureDistance, setMeasureDistance] = useState(false);
//   const [selectZone, setSelectZone] = useState(false);
//   const [coordinates, setCoordinates] = useState([]);
//   const [showCoordinateInput, setShowCoordinateInput] = useState(false);
//   const [lat, setLat] = useState('');
//   const [lng, setLng] = useState('');
//   const [drawnShapes, setDrawnShapes] = useState([]);

//   const mapRef = useRef();

//   const perimeters = [
//     { name: 'Perimeter 1', positions: [[36.5, 3], [36.5, 4], [35.5, 4], [35.5, 3]] },
//     { name: 'Perimeter 2', positions: [[34.5, 2], [34.5, 3], [33.5, 3], [33.5, 2]] },
//   ];

//   const toggleLayer = (layer) => {
//     setLayers({ ...layers, [layer]: !layers[layer] });
//   };

//   const MeasureDistance = () => {
//     const map = useMapEvents({
//       click(e) {
//         if (measureDistance) {
//           const newCoords = [...coordinates, [e.latlng.lat, e.latlng.lng]];
//           if (newCoords.length === 2) {
//             setMeasureDistance(false);
//           }
//           setCoordinates(newCoords);
//         }
//       },
//     });
//     return null;
//   };

//   const SelectZone = () => {
//     const map = useMapEvents({
//       click(e) {
//         if (selectZone) {
//           const newCoords = [...coordinates, [e.latlng.lat, e.latlng.lng]];
//           if (newCoords.length === 4) {
//             setSelectZone(false);
//             setDrawnShapes([...drawnShapes, newCoords]);
//           }
//           setCoordinates(newCoords);
//         }
//       },
//     });
//     return null;
//   };

//   const calculateDistance = (coords) => {
//     if (coords.length !== 2) return 0;
//     const [lat1, lon1] = coords[0];
//     const [lat2, lon2] = coords[1];
//     const R = 6371;
//     const dLat = ((lat2 - lat1) * Math.PI) / 180;
//     const dLon = ((lon2 - lon1) * Math.PI) / 180;
//     const a =
//       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//       Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     return (R * c).toFixed(2);
//   };

//   const addShapeFromCoordinates = () => {
//     if (lat && lng) {
//       const newCoord = [parseFloat(lat), parseFloat(lng)];
//       const newCoords = [...coordinates, newCoord];
//       if (newCoords.length === 4) {
//         setDrawnShapes([...drawnShapes, newCoords]);
//         setCoordinates([]);
//         setShowCoordinateInput(false);
//       } else {
//         setCoordinates(newCoords);
//       }
//       setLat('');
//       setLng('');
//     }
//   };

//   return (
//     <div className="home-container">
//       <div className="sidebar">
//         <h2>Couches</h2>
//         {Object.keys(layers).map((layer) => (
//           <div key={layer} className="layer-item">
//             <input
//               type="checkbox"
//               checked={layers[layer]}
//               onChange={() => toggleLayer(layer)}
//             />
//             <span>{layer.charAt(0).toUpperCase() + layer.slice(1)}</span>
//           </div>
//         ))}
//       </div>

//       <div className="map-container">
//         <MapContainer
//           center={[36, 3]}
//           zoom={5}
//           style={{ height: '100%', width: '100%' }}
//           ref={mapRef}
//         >
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           />

//           {layers.perimetres &&
//             perimeters.map((perimeter, index) => (
//               <Polygon key={index} positions={perimeter.positions} color="#006633">
//                 <Popup>{perimeter.name}</Popup>
//               </Polygon>
//             ))}

//           {measureDistance && <MeasureDistance />}
//           {coordinates.length === 2 && (
//             <>
//               <Marker position={coordinates[0]} />
//               <Marker position={coordinates[1]}>
//                 <Popup>{`Distance: ${calculateDistance(coordinates)} km`}</Popup>
//               </Marker>
//               <Polygon positions={coordinates} color="green" />
//             </>
//           )}

//           {selectZone && <SelectZone />}
//           {drawnShapes.map((shape, index) => (
//             <Polygon key={index} positions={shape} color="cyan" />
//           ))}

//           <div className="tools">
//             <button
//               onClick={() => {
//                 setSelectZone(true);
//                 setMeasureDistance(false);
//                 setCoordinates([]);
//               }}
//               className="tool-button"
//               title="Sélectionner une zone"
//             >
//               🖌️
//             </button>
//             <button
//               onClick={() => {
//                 setMeasureDistance(true);
//                 setSelectZone(false);
//                 setCoordinates([]);
//               }}
//               className="tool-button"
//               title="Mesurer une distance"
//             >
//               📏
//             </button>
//             <button
//               onClick={() => setShowLegend(!showLegend)}
//               className="tool-button"
//               title="Afficher la légende"
//             >
//               🗺️
//             </button>
//             <button
//               onClick={() => setShowCoordinateInput(true)}
//               className="tool-button"
//               title="Entrer des coordonnées"
//             >
//               ✅
//             </button>
//           </div>

//           {showLegend && (
//             <div className="legend-panel">
//               <h3>Légende</h3>
//               <ul>
//                 <li>PRM: &lt;nom prm&gt; - pour rechercher un périmètre. e.g: PRM_AHARA</li>
//                 <li>BLC: &lt;numéro&gt; - pour rechercher un bloc</li>
//                 <li>WELL: &lt;nom du puits&gt; - pour rechercher un puits</li>
//                 <li>2D: &lt;nom de l’étude&gt; - pour rechercher une activité sismique 2D</li>
//                 <li>3D: &lt;nom de l’étude&gt; - pour rechercher une activité sismique 3D</li>
//                 <li>D: &lt;nom du département&gt; - pour rechercher un département</li>
//               </ul>
//             </div>
//           )}

//           {showCoordinateInput && (
//             <div className="coordinate-modal">
//               <div className="modal-content">
//                 <div className="modal-header">
//                   <h2>Entrer des coordonnées</h2>
//                   <button onClick={() => setShowCoordinateInput(false)}>✕</button>
//                 </div>
//                 <div className="form-group">
//                   <label>Latitude</label>
//                   <input
//                     type="number"
//                     value={lat}
//                     onChange={(e) => setLat(e.target.value)}
//                     placeholder="e.g., 36.5"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Longitude</label>
//                   <input
//                     type="number"
//                     value={lng}
//                     onChange={(e) => setLng(e.target.value)}
//                     placeholder="e.g., 3.0"
//                   />
//                 </div>
//                 <button onClick={addShapeFromCoordinates} className="add-button">
//                   Ajouter le point
//                 </button>
//               </div>
//             </div>
//           )}
//         </MapContainer>
//       </div>
//     </div>
//   );
// }

// export default Home;