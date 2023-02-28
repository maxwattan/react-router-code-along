import { NavLink } from "react-router-dom";
// import { useEffect } from "react";

export default function Nav({lamps, candles, setProductType}) {

  // function handleTypeSelect(event) {
  //   console.log(event.target.value);
  //   setProductType(event.target.value)

  // }

  return (
      <nav> 
      <div>
      <NavLink to="lamps">
        <h3>Lamps</h3>
        <ul>
          <li value="Floor"><NavLink >Floor</NavLink></li>
          <li value="Ceiling"><NavLink >Ceiling</NavLink></li>
          <li value="Table"><NavLink >Table</NavLink></li>
        </ul>
      </NavLink>
  
      <NavLink to="/candles">
        <h3>Candles</h3>
        <ul>
          <li><NavLink>Decorative</NavLink></li>
          <li><NavLink>Flamless</NavLink></li>
          <li><NavLink>Celebratory</NavLink></li>
        </ul>
      </NavLink>
      </div>
    </nav>
  );
};