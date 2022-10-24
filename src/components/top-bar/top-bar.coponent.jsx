import React from "react";
import { TopBarcontainer } from "./top-bar.styles";

const TopBar = () => {
  return (
    <TopBarcontainer>
      <div>FREE SHIPPING THIS WEEK ORDER OVER - $55</div>
      <div>FREE SHIPPING THIS WEEK ORDER OVER - $55</div>
      <div>
        <select name="currency" id="">
          <option value="naira">naira</option>
          <option value="usd">usd</option>
          <option value="ghn">ghn</option>
        </select>
        <select defaultValue="english" name="language" id="">
          <option value="english">english</option>
          <option value="yoruba">yoruba</option>
          <option value="hausa">hausa</option>
        </select>
      </div>
    </TopBarcontainer>
  );
};

export default TopBar;
