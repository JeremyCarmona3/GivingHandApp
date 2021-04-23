import HeaderBlockUI from '../../Comps/CustomComponent3'
import ButtonUI from '../../Comps/ButtonUI'
import MissionUI from '../../Comps/OurMission'
import NavbarUI from '../../Comps/NavBar'
import CalPostUI from '../../Comps/CalPost'
import Background from '../../Comps/Background'
import LogoUI from '../../Comps/Logo'

import styles from '../../styles/main.module.css'


function Home() {
  return (<div className={styles.main}>
    <div className={styles.landingPage}>


      <br></br>
      <br></br>
      <br></br>
      <LogoUI/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className={styles.caption}>
        Helping, providing for, and nuturing the homeless.
      </div>
      <ButtonUI title="Let's Get Started" type="start" routeTo="/SupportUs" />
      <ButtonUI title="Our Mission" type="mission" routeTo="/OurMission" />


    </div>
    
  </div>


  )
  }

export default Home;