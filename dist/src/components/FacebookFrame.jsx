import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  fbEmbed: {
    display: 'flex',
    justifyContent: 'center',
    padding: '2%',
    marginLeft: '20%',
    marginRight: '20%',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  fbIframe: {
    width: '500px',
    height: '500px',
    border: 'none',
    overflow: 'hidden',
  },
});

const FacebookFrame = () => {
  const classes = useStyles();
  return (
    <Box className={classes.fbEmbed}>
      <iframe
        title="facebookEmbed"
        className={classes.fbIframe}
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNissebanden%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        scrolling="no"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
      />
    </Box>
  );
};

export default FacebookFrame;
