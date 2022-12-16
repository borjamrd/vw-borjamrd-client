import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from 'react';
import axios from 'axios'

import './index.css'

import logo from '../../logo.svg'



export function DetailView() {

  let thiscar = useParams();
  console.log(thiscar.id, 'params')

  const navigation = useNavigate();


  const [mainCar, setCar] = useState([])

  useEffect(() => {
    async function fetchcar() {
      const resp = await axios.get('http://18.234.140.250:3002/api/car')

      setCar([...resp.data.Novedades])

      console.log(resp.data.Novedades, "individual car response")
    }
    fetchcar();
  }, [])

  function sendEmail() {
    window.location = "mailto:borjamrd1@gmail.com";
  }

  function callPhone(phone) {
    return window.open(phone)
  }

  const carTitle = mainCar.filter(title => title.carID == thiscar.id)
  return (
    <div>
      <a style={{ cursor: 'pointer' }} onClick={() => { navigation('/') }}>Atrás</a>

      {carTitle.map((item) =>

        <div>
          <h1>{item.carName}</h1>
          <div className='ind-car-section' >

            <div className='ind-image-section'>
              <img src={item.carImage} className='ind-car-image' object-fit="cover" border-radius="25px" />
            </div>
            <div className='ind-info-section'>
              <h3>Precio: {item.carPrice}</h3>
              <p>Financiación desde: {item.carFee}</p>
              <h4>Prestaciones del motor</h4>
              <ul>
                <li>{item.carData1}</li>
                <li>{item.carData2}</li>
                <li>{item.carData3}</li>
                <li>{item.carData4}</li>
                <li>{item.carData5}</li>

              </ul>
              <p>¿Quieres verlo? Ven a <a target='_blank' href={item.carLocationLink} rel="noreferrer">{item.carLocation}</a></p>
              <div className='button-section'>
                <button onClick={sendEmail}>Me interesa</button>
                <button><a href={item.carPhone} >Llámanos</a></button>
              </div>
            </div>

          </div>
        </div>

      )}
      {/* <DemoCarousel /> */}

    </div>
  )
}

/*
function DemoCarousel() {
  
       return (
           <Carousel>
               <div>
                   <img src={logo} />
                   <p className="legend">Legend 1</p>
               </div>
               <div>
                   <img src={logo} />
                   <p className="legend">Legend 2</p>
               </div>
               <div>
                   <img src={logo} />
                   <p className="legend">Legend 3</p>
               </div>
           </Carousel>
       );
} */
