import style from '../../styles/styles.module.css'
import styles from '../../styles/main.module.css'
import UnopDropdown from "unop-react-dropdown";
import AnimatedDropdown from "../../Comps/ButtonTest/index";
import BackButton from '../../Comps/BackButton/index'
import NavbarUI from '../../Comps/NavBar'

function TestButton() {
    return (<div className={styles.main}>
       <BackButton />
      <div className={styles.bg}>
      <BackButton />
        
        
        <div className={styles.box}>
        <header>
        <h1>FOOD</h1>
      </header>
      <BackButton />
      <div>
        <AnimatedDropdown />
        <BackButton />
      </div>
      <BackButton />
         
         
         </div>
      </div>
    </div>
  
      
    )
    }
  
  export default TestButton;
