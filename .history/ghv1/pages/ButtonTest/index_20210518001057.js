import ButtonUI from '../../Comps/ButtonUI'
import NavbarUI from '../../Comps/NavBar'
import styles from '../../styles/main.module.css'
import BackButtonUI from '../../Comps/BackButton/index'
import Bouncing from '../../Comps/Bouncing/index'


function Locations({
  textOpCarry=""
}) {

  if(process.browser){
   setTimeout(function()
   {
     textOpCarry = "1"
   },2000)
  }
  return (<div className={styles.main}>
    <div className={styles.bg}>
      <BackButtonUI />
      
      <Bouncing text="LOCATION"
        textOp={textOpCarry}/>

      <div className={styles.box}>
       
      <h4 style={{
        color:"#6B5DA9"
      }}>Select a sector below to find the "Address, Hours, and Phone Number" of each organization</h4>
       <ButtonUI title= "Shelter" routeTo="/ButtonTest/Shelter" type="shadow" />
       <br></br>
       <ButtonUI  title= "Clothing" routeTo="/ButtonTest/Clothing" type="shadow" />
       <br></br>
       <ButtonUI  title= "Hygiene Products" routeTo="/ButtonTest/Hygiene" type="shadow" />
       <br></br>
       <ButtonUI  title= "Food" routeTo="/ButtonTest/Food" type="shadow" />
       <br></br><br></br><br></br>
       <NavbarUI />

       </div>
    </div>
  </div>

    
  )
  }

export default Locations;