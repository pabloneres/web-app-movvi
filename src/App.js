import React, {useState, useEffect} from 'react';
import { Route, Link} from 'react-router-dom';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps'
import MaterialIcon, {colorPalette} from 'material-icons-react';
import axios from 'axios'

import './Global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'
import './Content.css'
import './Header.css'




const centro = {center: {
  lat: -23.5145655,
  lng: -46.6014687
}}

function Map(){
  const [motos, setMotos] = useState([])
  const [select, setSelect] = useState(null)

  useEffect(() => {
    async function load(){
      const {data} = await axios.get('https://maps-movvi.herokuapp.com/motorista')
      //const {coords} = data
      setMotos(data)
      
    }

    setInterval(()=>{
      load()
    }, 5000)

  }, [])

  return (
    <GoogleMap defaultZoom={10} defaultCenter={centro.center}>
      <Marker position={{
      lat: -23.5145655,
      lng: -46.6014687}}
      icon={{
        url: "/location.svg",
        scaledSize: new window.google.maps.Size(25, 25)
      }} />

     {
        motos.map(moto => (
          <Marker 
          key={moto._id}
          position={{
          lat: Number(moto.coords[0]),
          lng: Number(moto.coords[1])}}

          icon={{
              url: "/car.svg",
              scaledSize: new window.google.maps.Size(25, 25)
          }}
          
          onClick={()=>{
            setSelect(moto)
          }}
          labelStyle={{fontSize: '20px'}}
          label={moto.nome}
          />
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
  
  const [close, setClose] = useState('')
  const [nome, setNome] = useState('')
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [coletor, setColetor] = useState('')
  const [cargo, setCargo] = useState('')
  const [response, setResponse] = useState('')
  
  useEffect(()=>{
    setClose('<')
  }  
  , [])
    
  function close_menu(){
    if(close === '<'){
      document.querySelector('aside').classList.add('hidden')
      document.querySelector('nav').classList.add('close')
      setClose('>')
    } else {
      document.querySelector('aside').classList.remove('hidden')
      document.querySelector('nav').classList.remove('close')
      setClose('<')
    }
    
  }
  
  function cadastrar(){
    document.querySelector('.map-el').classList.add('map-el-close')
    document.querySelector('.cad-el').classList.remove('cad-hidden')
  }
  
  function rastreamento(){
    document.querySelector('.map-el').classList.remove('map-el-close')
  }
  
  async function singup(e){
    /*e.preventDefault()
    
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
  */
  }

  return (
  <div id="app">
    <header>
        <div className="logo">Pablo Neres</div>
        <div className="title"><h1></h1></div>
    </header>
    <div className="content">
    <aside>
      <nav>
        <ul>
          <li onClick={cadastrar} >Cadastrar</li>
          <li onClick={rastreamento} >Rastramento</li>
        </ul>
      </nav>

      <div className="footer-aside">
        <div className="button-exit"><h1>Sair</h1></div>
      </div>
  <div className="close-menu" onClick={close_menu}><p>{close}</p></div>
    </aside>
    <main>
    <div className="map-el" style={{ height: '100%', width: '100%' }}>
        <WrappedMap 
          googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key/=AIzaSyDVFCMmcXP0idBMRYaGW_2Lqq2Zo93QrFg"}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
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
