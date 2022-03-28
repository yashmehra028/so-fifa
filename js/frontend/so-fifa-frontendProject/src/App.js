import React, { Component } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';

import CreatePlayer from './components/CreatePlayer';
import ShowPlayerList from './components/ShowPlayerList';
import ShowPlayerDetails from './components/ShowPlayerDetails';
import UpdatePlayerInfo from './components/UpdatePlayerInfo';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<ShowPlayerList />}></Route>
            <Route path="/create-player" element={<CreatePlayer />}></Route>
            <Route path="/edit-player/:id" element={<UpdatePlayerInfo />}></Route>
            <Route path="/show-player/:id" element={<ShowPlayerDetails />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
