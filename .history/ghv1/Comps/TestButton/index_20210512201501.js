import styles from './testButton.module.css'

function TestButtonUI({ 
}){

    return <button classname={styles.body}>
        <div classname={styles.glow-on-hover}>

        </div>
        <div classname={styles.glow-on-hover1}>

        </div>
        <div classname={.glow-on-hover2}>

        </div>
        <div classname={.glow-on-hover3}></div>
        
    </button>
  }
  

  export default TestButtonUI;