import ButtonUI from '../../../Comps/ButtonUI'
import SupportUs from '../../../Comps/SupportUs/index'
import styles from '../../../styles/SupportUs.module.css'

import TopNavUI from '../../../Comps/TopNavUI'


function Home() {
  return (<div className={styles.SupportUs}>
    <div className={styles.bg}>
       <TopNavUI routeTo="/SupportUs/Sector" />
      <SupportUs 
       header="Support Us"
       subheader="Which Organization do you want to help?"
       supportingtext="(please select one)"
       page="FourthSupport"
       />
       
    
       <ButtonUI title= "Donation Circle Society" type="shadow" routeTo="/OverlayHygiene1" />
       <ButtonUI  title= "Wish Drop In Centre" type="shadow" routeTo="/OverlayHygiene2" />
       <ButtonUI  title= "Directions Youth Services" type="shadow" routeTo="/OverlayHygiene3" />
       <ButtonUI  title= "Union Gospel Mission" type="shadow" routeTo="/OverlayHygiene4" />
    </div>
  </div>

    
  )
  }

export default Home;