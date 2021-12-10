import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/index';
import Gallery from './gallery/index';
import Main from './Main/index';
export default function App(){
  return(
    <div>
      <Header/>
      <Gallery/>
      <Main/>
    </div>
  )
}
