import React from "react";
import { render } from "react-dom";
import GoogleMap from "google-map-react";

const GOOGLE_API_KEY = "AIzaSyDVFCMmcXP0idBMRYaGW_2Lqq2Zo93QrFg";

class GMapReact extends React.Component {
  render() {
    const { center, zoom } = this.props;
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <GoogleMap
          bootstrapURLKeys={{ key: [GOOGLE_API_KEY] }}
          center={center}
          zoom={zoom}
        />
      </div>
    );
  }
}

class MapUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 37.7824134,
        lng: -122.4088472
      },
      form: {
        nome: '',
        usuario: '',
        senha: '',
        coletor: '',
        cargo: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange() {
    this.setState({
      form: {
        lat: Number(this.refs.lat.value),
        lng: Number(this.refs.lng.value)
      }
    });
  }

  handleClick() {
    this.setState({
      center: this.state.form
    });
  }



  render() {
    const center = this.state.center;
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div>
          <input ref="nome" type="text" value={this.state.form.nome} onChange={this.handleChange} />
          <input ref="usuario" type="text" value={this.state.form.usuario} onChange={this.handleChange} />
          <input ref="senha" type="text" value={this.state.form.senha} onChange={this.handleChange} />
          <input ref="coletor" type="text" value={this.state.form.coletor} onChange={this.handleChange} />
          <input ref="cargo" type="text" value={this.state.form.cargo} onChange={this.handleChange} />
          <input onClick={this.handleClick} type="button" value="update" />
        </div>
        <div style={{ width: "100%", height: "100%" }}>
          <GMapReact center={center} zoom={15} />
        </div>
      </div>
    );
  }
}

export default MapUpdate