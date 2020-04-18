import React from 'react';
import { Menu } from 'antd';

function CenterMenu(props) {
    return (
        <Menu mode={props.mode}>
        <form>
        <input type="text" name="film" placeholder="Search one film.."/>
        <button>Search</button>
        </form>
        </Menu>
    )
  }
  
  export default CenterMenu