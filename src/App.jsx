import React from 'react';
import './App.css';
import Img from './components/Img';

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
      <div className="content-column-text">
        <h2>
          <span>
          For klanspejderne på 16-24 år er fællesskabet 
          og samværet med ens spejderkammerater i centrum. 
          Her har spejderne selv ansvar for arbejdet i patruljen, 
          de vælger selv deres leder, og de bestemmer 
          selv deres aktiviteter. De tager ofte på ture til 
          internationale lejre. Det er det udfordrende og 
          uafhængige spejderliv, som bliver afprøvet.
          Spejderne selv har ansvaret for at udvikle og 
          gennemføre projekter. Det giver dem viden og 
          udvikler deres evner. For de ældste spejdere 
          kan et projekt godt vare længe, være stort 
          eller ske i samarbejde med spejdere fra andre grupper.
        </span>
        </h2>
      </div>
      <div className="content-column-images-right">
        <Img alt="" left={false}  />
      </div>
    </div>
 
    <div className="white-space">
      <div className="white-space-block">

      </div>
    </div>
 
    <div className="content-column">
      <div className="content-column-images-left">
      <Img alt="" left={true}  />
      </div>
      <div className="content-column-text">
        <h2>
          <span>
          For mere info tjek vores facebook-fanside - 
          hvor der blandt andet kan findes en beskrivelse 
          af historien bag navnet, en track-artikel, 
          og billeder fra sidste års sommerlejr, som var en vandretur i Slovakiet.
        </span>
        </h2>
      </div>
    </div>
 
    <div className="white-space">
      <div className="white-space-block">

      </div>
    </div>
 
    <div className="fb-embed">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNissebanden%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        scrolling="no" frameBorder="0" allow="encrypted-media"></iframe>
    </div>
    <footer className="footer">
  
        <p className="footer-links">
          <a href="https://www.Nissebanden.dk">Home</a>
          ·
          <a href="https://www.facebook.com/pg/Nissebanden/about/">About</a>
          ·
          <a href="https://www.facebook.com/Nissebanden/">Contact</a>
        </p>
  
        <p className="footer-company-name">Klan Nissebanden &copy; 1991</p>
      </footer>
    </div>
  );
}

export default App;
