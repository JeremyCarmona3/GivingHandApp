
import HeaderBlockUI from '../../Comps/CustomComponent3'
import ButtonUI from '../../Comps/ButtonUI'
import MissionUI from '../../Comps/OurMission'
import NavbarUI from '../../Comps/NavBar'
import CalPostUI from '../../Comps/CalPost'
import Background from '../../Comps/Background'

import styles from '../../styles/OurMission.module.css'


function OurMission() {
  return (<div className={styles.main}>
    <div className={styles.bg}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <MissionUI header="Ending Vancouver's homelessness one step at a time." body="The mission of Giving Hand is to end homelessness for the people of vancouver by providing a safe, temporary refuge and critical services to support them in healing, rebuilding their lives and integrating them back into a community. There are four simple steps."/>

      <ButtonUI title="Next"/>



    </div>
  </div>

    
  )
  }

export default OurMission;
