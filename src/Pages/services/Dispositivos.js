import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useState } from 'react'

export default function Dispositivos() {
    const [motos, setMotos] = useState([])


    useEffect(() => {
        async function load(){
          const {data} = await axios.get('https://maps-movvi.herokuapp.com/motorista')
          //const {coords} = data
          setMotos(data)
          
        }
            load()
      }, [])

    return(
        <ul>
            {motos.map(moto => {
            <li></li>
            })
            }
        </ul>
    )
}