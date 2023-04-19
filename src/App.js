import logo from './logo.svg';
import './App.css';

import React,{useState} from 'react';

function App() {

  const [valores,setValor]=useState('')
  const [hdose,setHdose]=useState('')
  const [periodo,setPeriodo]=useState('')


  return (
    <div className="App">

      <ul>
        <li>
          <label htmlFor=""> Digite o nome do Remédio</label>
          <br />
          <input type="text" name="remedio" id="remedio" value={valores}
          onChange={(e)=>setValor(e.target.value)}/>
          
        </li>
        <li>
          <label htmlFor=""> Digite o horário da primeira dose</label>
          <br />
          <input type="text" name="hdose" id="hdose" value={hdose} onChange={(e)=>setHdose(e.target.value)}   />
          <br />
          <label htmlFor=""> Periodo</label>
          <br />
          <input type="checkbox" name="periodo" id="periodo" value={periodo} onChange={(e)=>setPeriodo(e.target.value)}  />
          <label htmlFor="periodo">6/6h</label>
          <br />
          <input type="checkbox" name="periodo" id="periodo" value={periodo} onChange={(e)=>setPeriodo(e.target.value)}  />
          <label htmlFor="periodo">8/8h</label>
          <br />
          <input type="checkbox" name="periodo" id="periodo" value={periodo} onChange={(e)=>setPeriodo(e.target.value)}  />
          <label htmlFor="periodo">24/24h</label>
          
        </li>
        <li>
          <label htmlFor=""> Informe quantas doses ao dia</label>
          <br />
          <select name="doses" id="doses">
          <option value="item01">1X por Dia</option>
          <option value="item02">2X por Dia</option>
          <option value="item03">3X por Dia</option>
          <option value="item04">4X por Dia</option>
          <option value="item04">5X por Dia</option>
          <option value="item04">6X por Dia</option>
          </select>
        </li>
        <li>
          <label htmlFor=""> tempo de tratamento</label>
          <br />
          <input type="number" name="tratamento" id="tratamento" />
          
        </li>
      </ul>
      <div id="valores informados">Tratamento: 
      <ul>
        <li> medicamento :{valores}</li>
        <li>primeira dose às {hdose} h</li>
        <li> Tomar de{periodo}</li>
        <li></li>
        <li></li>
      </ul>
      </div>
      
    </div>

  );
}

export default App;
