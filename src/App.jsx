

import './App.css'


import Vehicle from './components/Vehicle'
import 'leaflet/dist/leaflet.css';


function App() {
 
  return (
    <>
    <div className='app-container'>
    <div className='App-header'>
    <p className='highlight'>Vehicle Map</p>
    
    </div>
    
      
      <div className='content'>
       <Vehicle/>
       </div>
       <div className='Map'></div>
       
       </div>
     
    </>
  )
}

export default App;

