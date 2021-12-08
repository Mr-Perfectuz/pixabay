import React from 'react';
import ReactDOM from 'react-dom';
import PixebayLogo from './navbar/Logo';
import Photos from './navbar/Photos';
import Illustrations from './navbar/Illustrations';
import Join from './navbar/Join';
import Explore from './navbar/Explore';
import Login from './navbar/Login';
import Music from './navbar/Music';
import SoundEffects from './navbar/SoundEffects';
import Upload from './navbar/Upload';
import Vectors from './navbar/Vectors';
import Videos from './navbar/Videos';
import SearchSection from './SearchSection/SearchSection';
import MainPictures from './PicturesSection/MainPictures'
import CtaSection from './InfoSection/CtaSection'

export default function App(){
  return(
    <div>
        <nav>
        <PixebayLogo/>
        <Photos/>
        <Illustrations/>
        <Vectors/>
        <Videos/>
        <Music/>
        <SoundEffects/>
        <Explore/>
        <Login/>
        <Join/>
        <Upload/>
      </nav>
      <section>
        <SearchSection/>
      </section>
      <main>
        <MainPictures/>
        <CtaSection/>
      </main>
    </div>
  )
}
