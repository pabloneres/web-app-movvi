import React, {useState} from "react";
import { render } from "react-dom";
import GoogleMap, {} from "google-map-react";
import axios from 'axios'

import './index.css'
import car from './assets/car.svg'
import location from './assets/location.svg'
import logo from './assets/logo.png'
import Marker from './Marker';


const GOOGLE_API_KEY = "AIzaSyDVFCMmcXP0idBMRYaGW_2Lqq2Zo93QrFg";


class GMapReact extends React.Component {
  componentDidMount(){
    this.load()
  }

  state={
    motoristas: []
  }

  load = async () => {
    const {data} = await axios.get('https://maps-movvi.herokuapp.com/motorista')
    
    this.setState({ motoristas: data})
  }

  render() {
    const { center, zoom } = this.props;
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <GoogleMap
          bootstrapURLKeys={{ key: [GOOGLE_API_KEY] }}
          center={center}
          zoom={zoom}
        >
        <div 
          lat={-23.5144905}
          lng={-46.5991377}
          style={{color: 'black', fontWeight: 'bold'}}
        >
          <div style={{backgroundColor: 'orange', width: 30, height: 30, borderRadius: '100%', color: 'black', fontWeight: 'bold' }} >
            
          </div>
          FILIAL
        </div>

      {
        this.state.motoristas.map(motorista => (
          <Marker 
         
         lat={Number(motorista.coords[0])}
         lng={Number(motorista.coords[1])}
         color={'orange'} name={motorista.nome}
         img={car}
         nome={motorista.nome}
         />
        ))
      }

        </GoogleMap>
      </div>
    );
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




class MapUpdate extends React.Component {
  componentDidMount() {
    this.load()
  }

  state = {
      center: {
        lat: -23.5144905,
        lng: -46.5991377
      },
      form: {
        lat: -23.5144905,
        lng: -46.5991377
      },
      nome: '',
      usuario: '',
      senha: '',
      coletor: '',
      cargo: '',
      motoristas: []
    }


    
  load = async () => {
    const {data} = await axios.get('https://maps-movvi.herokuapp.com/motorista')
    
    this.setState({ motoristas: data})
    
  }

  cadastroNome = e => {
    this.setState({
      nome: e.target.value
    })
  }
  cadastroUsuario = e => {
    this.setState({
      usuario: e.target.value
    })
  }
  cadastroSenha = e => {
    this.setState({
      senha: e.target.value
    })
  }
  cadastroColetor = e => {
    this.setState({
      coletor: e.target.value
    })
  }
  cadastroCargo = e => {
    this.setState({
      cargo: e.target.value
    })
  }
  singup = async (e) => {
    e.preventDefault()
    const response = await axios.post('https://maps-movvi.herokuapp.com/motorista/new', {
      nome: this.state.name,
      usuario: this.state.usuario,
      senha: this.state.senha,
      coletor: this.state.coletor,
      cargo: this.state.cargo,
      coords: []
    } )

    
      this.setState({
        nome: '',
        usuario: '',
        senha: '',
        coletor: '',
        cargo: ''
      })
    

    
  }



  render() {
    const center = this.state.center;
    return (
      <div id="app">
    <header>
        <div className="logo"><img src={logo}  alt="" srcset=""/></div>
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

        <form >
        <h1>Cadastrar Motorista</h1>
        <input placeholder="Nome" name='nome' required value={this.state.nome} onChange={this.cadastroNome} />   
        <input placeholder="Usuario" name='usuario' required value={this.state.usuario} onChange={this.cadastroUsuario}/>   
        <input placeholder="Senha" name='senha' type="password" required value={this.state.senha} onChange={this.cadastroSenha}/>   
        <input placeholder="Coletor" name='coletor' type="number" required value={this.state.coletor}  onChange={this.cadastroColetor} />   
        <input placeholder="Cargo" name='cargo' required value={this.state.cargo} onChange={this.cadastroCargo}/> 
        <button onClick={this.singup} type="submit">Cadastrar</button>
        </form>
        <p>{this.state.nome}</p>
        <p>{this.state.usuario}</p>
        <p>{this.state.senha}</p>
        <p>{this.state.coletor}</p>   
        <p>{this.state.cargo}</p>
      </section>

      <section className="dispo-list cad-hidden">
        <nav>
          <ul>
          <li style={{marginBottom: 30, fontWeight: 'bold' }} onClick={
                ()=>{this.setState(
                  { 
                    center: {
                      lat: -23.5144905, 
                      lng: -46.5991377
                    }
                  })
                  
                }
              }  
            >
             Centralizar na Filial
            </li>
            {
              this.state.motoristas.map(motorista => (
              <li onClick={
                ()=>{this.setState(
                  { 
                    center: {
                      lat: Number(motorista.coords[0]), 
                      lng: Number(motorista.coords[1])
                    }
                  })
                  
                }
              }  
              >
              {motorista.nome}</li>
              ))
            }
          </ul>
        </nav>
      </section>
    </aside>
    <main>
    <div className="map-el" style={{ height: '100%', width: '100%' }}>
         <GMapReact center={center} zoom={11}/>
        
      </div>
     <div className="cad-el cad-hidden">
        <section className="form">
        <form >
        <h1>Cadastrar Motorista</h1>
        <input placeholder="Nome" name='nome'  />   
        <input placeholder="Usuario" name='usuario' required />   
        <input placeholder="Senha" name='senha' type="password" required/>   
        <input placeholder="Coletor" name='coletor' type="number" required  />   
        <input placeholder="Cargo" name='cargo' required  /> 
        <button type="submit">Cadastrar</button>
        </form>
        </section>
    </div> 
    </main>
    </div>

  </div>//app
    );
  }
}

export default MapUpdate