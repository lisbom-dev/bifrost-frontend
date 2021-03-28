import React, { useEffect } from 'react';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import Head from 'next/head';

import Link from 'next/link';

import { AppBar, Header, SubHeader, EntriesList } from '../../styles/tour';
import Entry from '../../components/Entry';

const pages: React.FC = () => {
  useEffect(() => {
    // eslint-disable-next-line operator-linebreak
    document.getElementById('header').style.background =
      "url('http://images3.memedroid.com/images/UPLOADED88/5f6a997801823.jpeg') no-repeat";
    document.getElementById('header').style.backgroundSize = 'cover';
  }, []);

  return (
    <>
      <Head>
        <title>Tour</title>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <AppBar>
        <Link href="/">
          <ArrowBack />
        </Link>
      </AppBar>
      <Header>
        <div className="headerInfo">
          <h1>TÍTULO MUITO LEGAL</h1>
          <div className="headerDate">
            <span>
              27 de mar de 2021
              <ArrowForward />
              28 de mar de 2021
            </span>
          </div>
        </div>
      </Header>
      <SubHeader>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </span>
      </SubHeader>
      <EntriesList>
        <Entry className="text" />
        <Entry
          className="image"
          src="http://images6.fanpop.com/image/photos/39800000/Ononoki-Yotsugi-monogatari-series-39837625-1280-720.jpg"
        />
        <Entry className="video" src="/videos/videoplayback.mp4" />
        <Entry className="location" />
      </EntriesList>
    </>
  );
};

export default pages;
