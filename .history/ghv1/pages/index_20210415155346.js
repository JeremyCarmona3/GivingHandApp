import NavbarUI from '../Comps/NavBar'
import styles from '../styles/main.module.css'
import LocationUI from '../Comps/location/index.js'

function Home() {
  return (<div className={styles.main}>
    <div className={styles.bg}>

      <h1>LOCATIONS</h1>
      <h1>Shelter</h1>
      <LocationUI header="Covenant House Vancouver"
      address="326 W Pender St, Vancouver, BC V6B 1T1"
      status=""
      status2=""/>
      <LocationUI />
      <LocationUI />
      <LocationUI />

      
      
      <NavbarUI />


    </div>
  </div>

    
  )
  }

export default Home;