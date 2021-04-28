import {useRouter} from 'next/router'
import styles from './support.module.css'

function VolunteerButtonUI({

    header = "placeholder",
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
        fontSize: 18,
        margin: 10,
        padding: 10
        // boxshadow: 0, 8 15, rgba(0, 0, 0, 0.1);
    }}>
        <div className={styles.center}>
            <img src="money.svg"></img>
        </div>
        <div>
        <h3>(Money) Donation</h3>
            <span style = {{
                color: "#686666",
                fontSize: 12,
                position: "relative",
                bottom: 20,
                margin: 5
                
            }}
            >Donate your money and help by choosing an organization</span>
            <br></br>
            </div>
    </button>
  }
  

  export default VolunteerButtonUI;    