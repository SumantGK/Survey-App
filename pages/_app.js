import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Button } from '@material-ui/core';
import '../styles/globals.css';
import theme from '../src/components/themes';
import { wrapper } from '../store/store';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Survey </title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          href="https://fonts.cdnfonts.com/css/nexa-bold"
          rel="stylesheet"
        />
        {/* <link
          href="//db.onlinewebfonts.com/c/2eccf178aa2ce410df13a179ba3b3761?family=Nexa-Book"
          rel="stylesheet"
        /> */}
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCmNsV9SMhms66t9NoFCEjVcg6ZXbb-L_w&libraries=places" />
        <meta name="google" content="notranslate" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
