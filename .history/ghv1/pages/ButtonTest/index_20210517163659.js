import styles from '../../styles/main.module.css'
import AnimatedDropdown from "../../Comps/ButtonTest/index";
import BackButton from '../../Comps/BackButton/index'
import NavbarUI from '../../Comps/NavBar'

function TestButton() {
    return (<div className={styles.main}>
      <div className={styles.bg}>
      
      <div className={styles.box}>
        <BackButton />
        <h1>FOOD</h1>
        
        <br></br>
        <AnimatedDropdown title/>
        <br></br><br></br>
        <br></br>
        <AnimatedDropdown />
        <br></br><br></br>
        <br></br><br></br>
        <AnimatedDropdown />
        <br></br><br></br>
        <br></br><br></br>
        <AnimatedDropdown />
        <br></br><br></br><br></br><br></br>
        
        
        <NavbarUI />
      
      
        
      
      
         
    
         </div>
      </div>
    </div>
  
      
    )
    }
  
  export default TestButton;
