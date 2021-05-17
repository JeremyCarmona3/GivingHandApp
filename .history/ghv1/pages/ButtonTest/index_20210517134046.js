import style from '../../styles/styles.module.css'
import styles from '../../styles/main.module.css'
import UnopDropdown from "unop-react-dropdown";
import AnimatedDropdown from "../../Comps/ButtonTest/index";
import BackButtonUI from '../../../Comps/BackButtonUI/index'
import NavbarUI from '../../../Comps/NavBar'

function TestButton() {
    return (<div className={styles.main}>
      <div className={styles.bg}>
        
        
        <div className={styles.box}>
        <header>
        <h1>FOOD</h1>
      </header>
      <div>
        <AnimatedDropdown />
      </div>
      <BackButtonUI />
         
         
         </div>
      </div>
    </div>
  
      
    )
    }
  
  export default TestButton;
