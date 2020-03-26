import React from 'react'
import './App.css'
import { Box } from '@material-ui/core'
import FacebookFrame from './components/FacebookFrame'
import Footer from './components/Footer'
import Img from './components/Img'


function App() {
  return (
    <Box>
      <header className="header-container">
        <div className="header-content">
          <h1>
            <span>
              Velkommen til Klan Nissebanden - En del af solvanggruppe
            </span>
          </h1>
        </div>
      </header>
      <div>
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
          <Img alt="Klanen på et bjerg i slovakiet" left="true" />
        </div>
        <div className="content-column">
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
          <Img alt="Klanen på et bjerg i slovakiet" left="true" />
        </div>
        <FacebookFrame />
        <Footer />
      </div>
    </Box>
  );
}

export default App;
