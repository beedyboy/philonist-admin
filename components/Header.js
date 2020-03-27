import React, { useState } from 'react';
import Link from 'next/link';

import { Dropdown, Icon, Input, Menu } from 'semantic-ui-react'

 
const linkStyle = {
  marginRight: 15
};

// const [isOpen, setIsOpen] = useState(false);
const {activeItem, setActive} = useState('home');
  const Header = () => (
    <div>

<Menu inverted stackable>
        <Menu.Item header>
          {/* <img src='/logo.png' /> */}
          Philonist
        </Menu.Item>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={() => setCount('home')}
        />
         <Menu.Item position='right'>
         <Input className='icon' icon='search' placeholder='Search...' />
    </Menu.Item>

    <Dropdown item text='More'>
          <Dropdown.Menu>
            <Dropdown.Item icon='edit' text='Edit Profile' />
            <Dropdown.Item icon='globe' text='Choose Language' />
            <Dropdown.Item icon='settings' text='Account Settings' />
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
       
      
    </div>
  );
  
  export default Header;


  // <Link href="/">
  //       <a style={linkStyle}>Home</a>
  //     </Link>
  //     <Link href="/about">
  //       <a style={linkStyle}>About</a>
  //     </Link>