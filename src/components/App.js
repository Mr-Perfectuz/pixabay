import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/index';
import Gallery from './Gallery/index';
import Main from './Main/index';
export default function App(){
  return(
    <div>
      <Header/>
      <Main/>
      <Gallery/>
    </div>
  )
}
