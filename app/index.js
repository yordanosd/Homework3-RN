// import react-native && react
import React from 'react';
// import {View, Text, Platform, StyleSheet} from 'react-native';

// import routes
import Chat from './routes/chat';
import Camera from './routes/camera';
import Stories from './routes/stories';
import Signin from './routes/signin'
import Me from './routes/Me';


// import componenets
// import * Menu from './components/Menu';

// import styles from './config/styles'

import Menu from './components/Menu';



const SubMenu = () => (
  <Menu
    routes={[
      { component: Chat },
      { component: Camera } // add outfit button --> takes you to pic component
    ]}
    initialIndex={1}
    horizontal={false}
  />
);

const App = () => {
  return (
    <Menu
      routes={[
        { component: Chat },
        { component: SubMenu },
        { component: Stories }
      ]}
      initialIndex={1}
    />
  );
};

export default App;
