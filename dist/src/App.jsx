import React from 'react';
import './App.css';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import FacebookFrame from './components/FacebookFrame';
import Footer from './components/Footer';
import Img from './components/Img';
import BackgroundImage from './components/Images/Banner.JPG';

const useStyles = makeStyles({
  contentColumn: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '20%',
    marginRight: '20%',
    marginBottom: '10%',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'right',
    height: '800px',
    backgroundSize: 'cover',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    padding: '0px',
  },
  headerContent: {
    width: '100%',
    fontSize: '48px',
    padding: '0%',
  },
  CardContent: {
    padding: '0px',
  },
  contentColumnText: {
    width: '100%',
    overflow: 'auto',
    padding: '8%',
    lineHeight: '1.4',
    textAlign: 'left',
  },
  text: {
    width: '30%',
    margin: '5%',
    color: '#edebe9',
  },
});

function App() {
  const classes = useStyles();
  return (
    <Box>
      <header>
        <div className={classes.headerContent}>
          <CardContent className={classes.CardContent}>
            <CardMedia
              className={classes.headerContainer}
              image={BackgroundImage}
            >
              <Typography variant="h3" className={classes.text}>
                Velkommen til Klan Nissebanden - En del af solvanggruppe
              </Typography>
            </CardMedia>
          </CardContent>
        </div>
      </header>
      <div>
        <Box className={classes.contentColumn}>
          <div className={classes.contentColumnText}>
            <Typography variant="body1" gutterBottom>
              For klanspejderne på 16 - 26 år er fællesskabet
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
            </Typography>
          </div>
          <Img alt="Klanen på et bjerg i slovakiet" left />
        </Box>
        <Box className={classes.contentColumn} style={{ direction: 'rtl' }}>
          <div className={classes.contentColumnText}>
            <Typography variant="body1" gutterBottom>
              For mere info tjek vores facebook-fanside -
              hvor der blandt andet kan findes en beskrivelse
              af historien bag navnet, en track-artikel,
              og billeder fra sidste års sommerlejr, som var en vandretur i Slovakiet.
            </Typography>
          </div>
          <Img alt="Klanen er til paintball" left={false} />
        </Box>
        <FacebookFrame />
        <Footer />
      </div>
    </Box>
  );
}

export default App;
