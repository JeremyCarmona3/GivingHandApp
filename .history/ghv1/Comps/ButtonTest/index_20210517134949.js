import { useState } from "react";
import styles from "./button.module.css";
import UnopDropdown from "unop-react-dropdown";

export default () => {
  const [open, setOpen] = useState(false);
  const handler = () => {
    setOpen(!open);
  };
  // Change props and see effect
  return (
    <UnopDropdown
      onAppear={handler}
      onDisappearStart={handler}
      trigger={{"type":"button","key":null,"ref":null,"props":{"children":"click"},"_owner":null}}
      delay={0.5}
      align="CENTRE"
      
    >
      <div
        className={`AnimatedDropdownStyles openAnimation${
          !open ? " closeAnimation" : ""
          
        }`}
      >
        <div1 className={styles.container}>
          <h2>Location:</h2>
          <p>soomting</p>
          </div1>
        <br></br>
        <div1><h2>Hours:</h2></div1>
        <br></br>
        <div1><h2>Phone:</h2></div1>
      </div>
    </UnopDropdown>
  );
};