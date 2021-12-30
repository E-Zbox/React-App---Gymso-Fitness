import React from 'react';

// global style
import GlobalStyle from './GlobalStyle';

// components
import Navbar from "./Components/navbar/Navbar"
import Home from "./Components/home/Home"
import About from './Components/about/About';

function App() {
  return (
    <div className="App">
      <Navbar 
        title="Gymso Fitness" 
        inPageLinkList={[
          { name: "Home", link:"home-section"},
          {name: "About us", link: "about-us-section"},
          {name: "Classes", link: "classes-section"},
          {name: "Schedules", link: "schedules-section"},
          {name: "Contact", link: "contact-section"},
        ]}
      >
        <a href="https:werey.com">Home</a>
      </Navbar>
      <Home miniText="new way to build a healthy lifestyle!" 
        mainText="Upgrade your body at Gymso Fitness" 
      />
      <About />
      <GlobalStyle />
    </div>
  );
}

export default App;
