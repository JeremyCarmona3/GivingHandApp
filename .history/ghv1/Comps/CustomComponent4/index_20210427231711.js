import {useRouter} from 'next/router'
import styles from './support.module.css'
function MoneyButtonUI({

    header = "placeholder",
    paragraph = "placeholder",
    routeTo="/LandingPage"

}){
    const router = useRouter();
    return <button onClick={()=>router.push(routeTo)} style= {{
        display: "flex",
        width: 250,
        height: 150,
        borderRadius: 15,
        color: "#009966",
        backgroundColor: "#DFDEDE",
        border: "none",
        fontSize: 18,
        margin: 10,
        padding: 10
        // boxshadow: 0, 8 15, rgba(0, 0, 0, 0.1);
    }}>
        <div className={styles.center}>
            <img src="money.svg"></img>
        </div>
        <div className={styles.header}>
            {header}
        </div>
        <div className={styles.paragraph}>
            <span>"Donate your time and help volunteer at your chosen organization"</p>
        </div>
    </button>
  }
  

  export default MoneyButtonUI;    
