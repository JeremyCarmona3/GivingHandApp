import ButtonUI from '../../Comps/ButtonUI'
import NavbarUI from '../../Comps/NavBar'
import styles from '../../styles/main.module.css'
import BackButtonUI from '../../Comps/BackButton/index'

function Locations() {
  return (<div className={styles.main}>
    <div className={styles.bg}>
      <BackButtonUI />
      <h1>LOCATIONS</h1>
      <div className={styles.box}>
        <p>Here contains the "Address, Hours, and "</p>
      <br></br><br></br><br></br>
       <ButtonUI title= "Shelter" routeTo="/Locations/Shelter" type="shadow" />
       <ButtonUI  title= "Clothing" routeTo="/Locations/Clothing" type="shadow" />
       <ButtonUI  title= "Hygiene Products" routeTo="/Locations/Hygiene" type="shadow" />
       <ButtonUI  title= "Food" routeTo="/Locations/Food" type="shadow" />

       <br></br><br></br><br></br>
       <NavbarUI />

       </div>
    </div>
  </div>

    
  )
  }

export default Locations;