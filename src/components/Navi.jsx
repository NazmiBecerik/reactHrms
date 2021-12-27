import React from 'react'
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { useState } from 'react';
import { Menu, Container } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
export default function Navi() {
  //*Giriş yapılışa göre navide sign out ya da in gösterme
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  // state i navide yazdığımız için navide yazmamız lazım fonksiyonu
  // ama metodu signedInden çağırmamız lazım çağırmamız lazım.
  // use history kullanılarak çıkış yapa basılınca ana sayfaya dönülecek.
  function handleSignOut(){
    setIsAuthenticated(false)    
    
  }
  function handleSignIn(){
    setIsAuthenticated(true)
  }
    return ( 
          <Menu color="purple" inverted fixed="top">
           
            <Container>
            <Menu.Item 
            as={NavLink} to={"/"}
            name='Anasayfa'
          />
              <Menu.Item 
            as={NavLink} to={"/employers"}
            name='İş Verenler'
          />
          <Menu.Item
         as={NavLink} to={"/jobAdvertisements"}
            name='İş İlanları'
          />
          <Menu.Item
          as={NavLink} to={"/jobSeekers"}
            name='İş Arayanlar'
          />
           <Menu.Item
           as={NavLink} to={"/cvs"}
            name='Cvler'
          
          />
            <Menu.Item position='right'>
              {isAuthenticated?<SignedIn SignedOut={handleSignOut} />:<SignedOut SignedIn={handleSignIn}/>}
            </Menu.Item>
            </Container>
        </Menu>
       
    )
}
