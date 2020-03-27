<GoogleMapReact
bootstrapURLKeys={{ key:'AIzaSyDVFCMmcXP0idBMRYaGW_2Lqq2Zo93QrFg'}}
defaultCenter={centro.center}
defaultZoom={15}
>
<Filial
lat="-23.5145655"
lng="-46.6014687"/>
{motos.map(moto => (
<AnyReactComponent
lat={moto.coords[0]}
lng={moto.coords[1]}
text={moto.coletor}
/>
  ))
}
</GoogleMapReact>

&key=AIzaSyDVFCMmcXP0idBMRYaGW_2Lqq2Zo93QrFg