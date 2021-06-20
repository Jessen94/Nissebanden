import React from 'react';
import './css/App.css';
import Img from './components/Img';
import WhiteSpaceBlock from './components/whiteSpaceBlock';
import { textBottom, textTop } from './constants/text';
import TextBlock from './components/TextBlock';
import Footer from './components/Footer';
import FacebookFrame from './components/FacebookFrame';

const App = () => {

  return (
    <div>
      <header className="header-container">
        <div className="header-content">
          <h1>
            <span>
              Velkommen til Klan Nissebanden - En del af solvanggruppe
        </span>
          </h1>
        </div>
      </header> 
      <div className="content-column">
        <TextBlock text={textTop} />
        <div className="content-column-images-right">
          <Img alt={''} left={false} />
        </div>
      </div>
      <WhiteSpaceBlock />
      <div className="content-column">
        <div className="content-column-images-left">
          <Img alt="" left={true} />
        </div>
        <TextBlock text={textBottom} />
      </div>
      <WhiteSpaceBlock />
      <FacebookFrame />
      <Footer />
    </div>
  );
}

export default App;
