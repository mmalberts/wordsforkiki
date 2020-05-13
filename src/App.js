import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Anna from './pages/Anna';
import Callie from './pages/Callie';
import Cavin from './pages/Cavin';
import Chloe from './pages/Chloe';
import Claire from './pages/Claire';
import Emmanuel from './pages/Emmanuel';
import Erica from './pages/Erica';
import Kathleen from './pages/Kathleen';
import Liaht from './pages/Liaht';
import Maggie from './pages/Maggie';
import Mat from './pages/Mat';
import Michael from './pages/Michael';
import Molly from './pages/Molly';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
     		<div className="container">
     			<h1><a href="/" className="mainheader">Words of <br/> Affirmation</a></h1>
     		</div>
      	<div>
      		<Route exact path='/' component={MainPage} />
      		<Route exact path='/anna' component={Anna} />
      		<Route exact path='/callie' component={Callie} />
      		<Route exact path='/cavin' component={Cavin} />
      		<Route exact path='/chloe' component={Chloe} />
      		<Route exact path='/claire' component={Claire} />
      		<Route exact path='/emmanuel' component={Emmanuel} />
      		<Route exact path='/erica' component={Erica} />
      		<Route exact path='/kathleen' component={Kathleen} />
      		<Route exact path='/liaht' component={Liaht} />
      		<Route exact path='/maggie' component={Maggie} />
      		<Route exact path='/mat' component={Mat} />
      		<Route exact path='/michael' component={Michael} />
      		<Route exact path='/molly' component={Molly} />
      	</div>
      </BrowserRouter>
    );
  }
}

export default App;
