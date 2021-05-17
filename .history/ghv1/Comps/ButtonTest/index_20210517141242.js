import { useState } from "react";
import UnopDropdown from "unop-react-dropdown";

export default () => {
  const [open, setOpen] = useState(false);
  const handler = () => {
    setOpen(!open);
  };
  // Change props and see effect
  return (
    <div
  style={{
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  }}
>
  <UnopDropdown
    align="CENTER"
    trigger={<button>click</button>}
  >
    <ul
      style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '10px 5px 20px #f1efef, -10px -5px 20px #f1efef',
        boxSizing: 'content-box',
        width: '200px'
        padding: '20px',
        width: '250px'
      }}
    >
      <li>
        Location:
      </li>
      <li>
        Hours:
      </li>
      <li>
        Phone:
      </li>
    </ul>
  </UnopDropdown>
</div>
  );
};