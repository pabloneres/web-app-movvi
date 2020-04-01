import React from 'react';
import './Marker.css';

const Marker = (props) => {
    const { color, name, id, img, nome } = props;
    return (
      <div className="marker"
        style={{cursor: 'pointer'}}
        title={name}
      >
        <img src={img} alt="" srcset=""/>
        <p>{nome}</p>
      </div>
    );
  };

  export default Marker;