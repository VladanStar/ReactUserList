import React from 'react';
import {Fragment} from "react"
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Users } from './components/Users/Users.js';
import { SearchBar } from "./components/SearchBar/SearchBar";
import { UsersGrid } from './components/UsersGrid/UsersGrid.js';

function App() {

  
  onSearch = (newValue) => {
    this.setState({ value: newValue });
  }




 
  return (
    <div className="App">
    <Fragment>
        <Header />
        <SearchBar onChange={this.onSearch} />
      <Users />
      <UsersGrid />
      <Footer />
      </Fragment>
    </div>
  );
}

export default App;