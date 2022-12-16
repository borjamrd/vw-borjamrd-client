
import borja from '../../borja.jpg'
import './styles.css'



export function Menu(){



    return(
    <nav id='myHeader' className="sticky">
            <img src={borja} alt={borja} height='55px' id='borja'></img>
            <span className='itemmenu'>Vehículos ocasión</span>
            <span className='itemmenu'><a target="_blank" rel="noreferrer" href='https://github.com/borjamrd/servertest'>Github Back</a></span>
            <span className='itemmenu'><a target="_blank" rel="noreferrer" href='https://github.com/borjamrd/testvwborjaclient'>Github Front</a></span>
            <span className='itemmenu'><a target="_blank" rel="noreferrer" href='https://www.dasweltauto.es/esp/'>DasWeltAuto</a></span>
            
            
    </nav>
    )
}
