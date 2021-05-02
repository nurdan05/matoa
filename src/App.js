import React from 'react'
import Hero from './pages/home/home'
import './App.scss'
import Header from './components/header';
import Footer from './components/footer';
import { Route } from 'react-router-dom';
import Watches from './pages/Watches/Watches';
function App() {
  return (
    <React.Fragment>
      <Header />
      <Route exact path="/" component={Hero} />
      <Route exact path="/watches"><Watches /></Route>
      <Footer />
    </React.Fragment>
  );
}

export default App;