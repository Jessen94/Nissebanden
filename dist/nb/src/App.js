import React from 'react'
import './App.css'
import { Box } from '@material-ui/core'

function App() {
  return (
    <Box>
      <header class="header-container">
        <div class="header-content">
          <h1>
            <span>
              Velkommen til Klan Nissebanden - En del af solvanggruppe
            </span>
          </h1>
        </div>
      </header>
      <div>
        <div class="content-column">
          <div class="content-column-text">
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
          <div class="content-column-images-right">
            <img data-lazy="Images/Slovakiet_2019_bjerg.jpg" />
          </div>
          </div>



          <div class="white-space">
            <div class="white-space-block">

            </div>
          </div>

          <div class="content-column">
            <div class="content-column-images-left">
              <img data-lazy="Images/Slovakiet_2019_Paintball.jpg" />
          </div>
              <div class="content-column-text">
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

            <div class="white-space">
              <div class="white-space-block">
              </div>
            </div>

            <div class="fb-embed">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNissebanden%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
            </div>
            <footer class="footer">
              <p class="footer-links">
                <a href="https://www.Nissebanden.dk">Home</a>
                <a href="https://www.facebook.com/pg/Nissebanden/about/">About</a>
                <a href="https://www.facebook.com/Nissebanden/">Contact</a>
              </p>
              <p class="footer-company-name">Klan Nissebanden &copy; 1991</p>
            </footer>
          </div>
    </Box>
  );
}

export default App;
