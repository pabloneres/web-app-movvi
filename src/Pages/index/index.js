import React, {useState, useEffect} from 'react';
import { Route, Link} from 'react-router-dom';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps'
import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel"
import MaterialIcon, {colorPalette} from 'material-icons-react';
import axios from 'axios'


import './index.css'
import car from './assets/car.svg'
import location from './assets/location.svg'
import logo from './assets/logo.png'

function SetLat(latitude){
    const [centerlat, setCenterlat] = useState(latitude)
    
    //setCenterlat(latitude)

    return centerlat
}
function SetLon(longitude){
    const [centerlon, setCenterlon] = useState(longitude)
    
    //setCenterlon(longitude)

    return centerlon
}


const centro = {center: {
  lat: -23.5145655,
  lng: -46.6014687
}}

function Map(){
  const [motos, setMotos] = useState([])
  const [select, setSelect] = useState(null)
  const [latitude, setLatitude] = useState(-23.5145655)
  const [longitude, setLongitude] = useState(-46.6014687)
  

  

  useEffect(() => {
    
    async function load(){
      const {data} = await axios.get('https://maps-movvi.herokuapp.com/motorista')
      //const {coords} = data
      setMotos(data)
      
    }

      setInterval(() => {
        load()
      }, 5000);

  }, [])

  return (
    <GoogleMap defaultZoom={10} center={{lat: latitude, lng: longitude}}>
      
      <MarkerWithLabel
      position={{ lat: -23.5145655, lng: -46.6014687 }}
      labelAnchor={new window.google.maps.Point(20, 0)}
      labelStyle={{fontSize: "16px", color: '#ED5100', fontWeight: 'bold' }}
      icon={{
        url: location,
        scaledSize: new window.google.maps.Size(40, 40)
      }}
    >
      <div>FILIAL</div>
    </MarkerWithLabel>

     {
        motos.map(moto => (
          <MarkerWithLabel 
          key={moto._id}
          position={{
          lat: Number(moto.coords[0]),
          lng: Number(moto.coords[1])}}
          labelAnchor={new window.google.maps.Point(20, 0)}
          labelStyle={{fontSize: "18px", color: '#ED5100', fontWeight: 'bold' }}
          icon={{
              url: car,
              scaledSize: new window.google.maps.Size(25, 25)
          }}
          
          onClick={()=>{
            setSelect(moto)
            setLatitude(moto.coords.latitude)
            setLongitude(moto.coords.longitude)
          }}
          >
            <div>{moto.nome}</div>
          </MarkerWithLabel>
          ))}

      {select && (
          <InfoWindow onCloseClick={()=>{setSelect(null)}}
          position={{lat: Number(select.coords[0]), lng: Number(select.coords[1])}}
          
          >
            <div style={{padding: 10}}>
              <p style={{color: 'black', fontWeight: 'bold', fontSize: 12,}} >Nome: {select.nome}</p>
              <p style={{color: 'black', fontWeight: 'bold', fontSize: 12,}} >Cargo: {select.cargo}</p>
              <p style={{color: 'black', fontWeight: 'bold', fontSize: 12,}} >Coletor: {select.coletor}</p>
            </div>
          </InfoWindow>
        )}

    </GoogleMap>
  )
}



const WrappedMap = withScriptjs(withGoogleMap(Map))



function App() {
  const [motos, setMotos] = useState([])
  const [close, setClose] = useState('')
  const [nome, setNome] = useState('')
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [coletor, setColetor] = useState('')
  const [cargo, setCargo] = useState('')
  const [response, setResponse] = useState('')
  const [latitude, setLatitude] = useState(-23.5144905)
  const [longitude, setLongitude] = useState(-46.5991377)
  

  function Dispo(){



    return (
        <nav>
          <ul>
            {
              motos.map(motorista => (
                <li 
                onClick={()=>{
                }}>{motorista.nome}
                </li>
              ))
            }

          </ul>
        </nav>
    )
  }

  useEffect(()=>{
    setClose('<')

    async function load(){
      const {data} = await axios.get('https://maps-movvi.herokuapp.com/motorista')
      //const {coords} = data
      setMotos(data)
    }
    load()
    
  },[])

  
    
  function close_menu(){
    if(close === '<'){
      document.querySelector('aside').classList.add('cad-hidden')
      document.querySelector('nav').classList.add('close')
      setClose('>')
    } else {
      document.querySelector('aside').classList.remove('hidden')
      document.querySelector('nav').classList.remove('close')
      setClose('<')
    }
    
  }
  
  function cadastrar(){
    if (document.querySelector('aside').classList.contains('cad-hidden')){
      document.querySelector('aside').classList.remove('cad-hidden')
      document.querySelector('section.form').classList.remove('cad-hidden')
      document.querySelector('.dispo-list').classList.add('cad-hidden') 
    } else {
      document.querySelector('aside').classList.add('cad-hidden')
      document.querySelector('section.form').classList.add('cad-hidden')
    }
  }
  
  function rastreamento(){
    document.querySelector('aside').classList.add('cad-hidden')
    document.querySelector('.cad-el').classList.add('cad-hidden')
  }
  
  function dispositivos(){
    if (document.querySelector('aside').classList.contains('cad-hidden')){
      document.querySelector('aside').classList.remove('cad-hidden')
      document.querySelector('.dispo-list').classList.remove('cad-hidden') 
    } else {
      document.querySelector('aside').classList.add('cad-hidden')
      document.querySelector('.dispo-list').classList.add('cad-hidden')
      document.querySelector('section.form').classList.add('cad-hidden')

    }
  }

  async function singup(e){
    e.preventDefault()
    
    const response = await axios.post('https://maps-movvi.herokuapp.com/motorista/new', {
      nome,
      usuario,
      senha,
      coletor,
      cargo,
      coords: []
    } )
    setResponse(response.data)
    setNome('')
    setUsuario('')
    setSenha('')
    setColetor('')
    setCargo('')
  }


  function close_disp(){
    document.querySelector('.disp-menu').classList.add('cad-hidden')
    document.querySelector('.nav-menu').classList.remove('cad-hidden')
  }


  return (
  <div id="app">
    <header>
        <div className="logo"><img src={logo} alt="" srcset=""/></div>
        <div className="title">
          <nav>
            <ul>
              <li onClick={rastreamento} >RASTREAMENTO</li>
              <li onClick={dispositivos} >DISPOSITIVOS</li>
              <li onClick={cadastrar} >CADASTRAR</li>
            </ul>
          </nav>
        </div>
        <div className="logout">
          <select>
            <option value="">SAO</option>
          </select>
          <img src="/power.svg" alt="" srcset=""/>
        </div>
    </header>
    <div className="content">

    <aside className="cad-hidden" >
    <section className="form cad-hidden">

        <form onSubmit={singup}>
        <h1>Cadastrar Motorista</h1>
        <input placeholder="Nome" name='nome' required value={nome} onChange={e => setNome(e.target.value)} />   
        <input placeholder="Usuario" name='usuario' required value={usuario} onChange={e => setUsuario(e.target.value)}/>   
        <input placeholder="Senha" name='senha' type="password" required value={senha} onChange={e => setSenha(e.target.value)}/>   
        <input placeholder="Coletor" name='coletor' type="number" required value={coletor} onChange={e => setColetor(e.target.value)} />   
        <input placeholder="Cargo" name='cargo' required value={cargo} onChange={e => setCargo(e.target.value)} /> 
        <button type="submit">Cadastrar</button>
        </form>
      </section>

      <section className="dispo-list cad-hidden">
      <Dispo/>
      </section>
    </aside>
    <main>
    <div className="map-el" style={{ height: '100%', width: '100%' }}>
        <WrappedMap     
          googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDVFCMmcXP0idBMRYaGW_2Lqq2Zo93QrFg"}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          center={{lat: latitude, lgn: longitude}}
          defaultCenter={{lat: latitude, lgn: longitude}}
        />
      </div>
     <div className="cad-el cad-hidden">
        <section className="form">
        <form onSubmit={singup}>
        <h1>Cadastrar Motorista</h1>
        <input placeholder="Nome" name='nome' required value={nome} onChange={e => setNome(e.target.value)} />   
        <input placeholder="Usuario" name='usuario' required value={usuario} onChange={e => setUsuario(e.target.value)}/>   
        <input placeholder="Senha" name='senha' type="password" required value={senha} onChange={e => setSenha(e.target.value)}/>   
        <input placeholder="Coletor" name='coletor' type="number" required value={coletor} onChange={e => setColetor(e.target.value)} />   
        <input placeholder="Cargo" name='cargo' required value={cargo} onChange={e => setCargo(e.target.value)} /> 
        <button type="submit">Cadastrar</button>
        </form>
        </section>
    </div> 
    </main>
    </div>

  </div>//app
  
  );
}

export default App;