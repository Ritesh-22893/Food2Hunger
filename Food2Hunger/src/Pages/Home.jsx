import React from 'react';
import Header from '../Components/PageComponents/HomePageComponent/Header';
import Choose from '../Components/PageComponents/HomePageComponent/Choose';
import Services from '../Components/PageComponents/HomePageComponent/Services';
import Blogs from '../Components/PageComponents/HomePageComponent/Blogs';
import Marketplace from '../Components/PageComponents/HomePageComponent/Marketplace';

function Home() {
  return (
    <>
      <Header/>
      <Choose/>
      <Services/>
      <Blogs/>
      <Marketplace/>
    </>
  );
}

export default Home;
