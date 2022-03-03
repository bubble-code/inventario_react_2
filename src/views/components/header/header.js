import React from 'react';
import { Navbar, Button, NavbarHeading, NavbarGroup,Classes, Colors, } from '@blueprintjs/core';
import "@blueprintjs/icons/lib/css/blueprint-icons.css";


//onClick={signOut}
//{authenticated ? <li><Button >Sign out</Button></li> : null}

const Header = () => {
  return (
    <Navbar  style={{background:"#1F4B99"}}>
      <NavbarGroup style={{color:"white"}}>
        <NavbarHeading>
          Tools Bookkeeper and Components
        </NavbarHeading>        
      </NavbarGroup>
      <NavbarGroup align="right" style={{color:"white"}}>
        <Button className={Classes.MINIMAL} rightIcon="home" style={{color:Colors.WHITE}}>Home</Button>
        <Button className={Classes.MINIMAL} rightIcon="document" text="Files" style={{color:Colors.WHITE}}/>
      </NavbarGroup>
    </Navbar>    
  );
}


export default Header;
