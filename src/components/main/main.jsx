import { useState, useEffect } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './main.css'

export function Main() {

  const [car, setCar] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchcar() {
      const resp = await axios.get('http://18.234.140.250:3002/api/car')
      setCar([...resp.data.Novedades])
      console.log(resp.data.Novedades, "car response")
    }
    fetchcar();
  }, [])

  function sendEmail() {
    window.location = "mailto:borjamrd1@gmail.com";
  }
  const [searchData, setSearchData] = useState("")


  return (

    <div className="newest">
      <h2>Novedades</h2>
      <input className='itemmenu' type='search' placeholder='Busca un coche'
        onChange={(event) => {
          console.log(event.target.value)
          setSearchData(event.target.value)
        }}></input>
      <div className="cars-section">
        {car.filter((item) => {
          if (searchData == "") {
            return item
          } else if (item.carName.toLowerCase().includes(searchData.toLowerCase())) {
            return item
          }
        }).map((item, index) => (
          <div key={index} className="eachcar">
            <div className="car-image-section" >
              <img className="car-image" alt={item.carName} height="300px" object-fit="cover" border-radius="25px"
                src={item.carImage} />
            </div>
            <div className="car-info-section">
              <h4>{item.carName}</h4>
              <span className="price">Precio: {item.carPrice}</span>
              <p>Desde {item.carFee}</p>
              <p>{item.carKms}</p>
              <a target='_blank' rel="noreferrer" href={item.carLocationLink}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pin-map-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z" />
                <path fillRule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z" /></svg>{item.carLocation}</a>
            </div>


            <div className="car-button-section">
              <button style={{ cursor: 'pointer' }} onClick={sendEmail}><span>Me interesa</span></button>
              <button style={{ cursor: 'pointer' }} onClick={() => navigate(`/${item.carID}`)}>Más información</button>
            </div>

          </div>
        ))}


      </div>

    </div>

  )
}


/* 
 WITH FILTER
    {car.filter((item, idx) => idx <24).map((item)=>(
      <div className="eachcar">
        <div className="car-image-section" >
           <img className="car-image" alt={item.carName} height="300px" object-fit="cover" border-radius="25px"
           src={item.carImage} /> 
        </div>
        <div className="car-info-section">
          <h4>{item.carName}</h4>
          <span className="price">Precio: {item.carPrice}</span>
          <p>Desde {item.carFee}</p>
          <p>{item.carKms}</p>
          <a target='_blank' rel="noreferrer" href={item.carLocationLink}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-map-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
          <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/></svg>{item.carLocation}</a>
        </div>
         
                  
      <div className="car-button-section">
        <button onClick={sendEmail}>Me interesa</button>
        <button onClick={()=> navigate(`/${item.carID}`)}>Más información</button>
      </div>
     
      </div>
  ))} */