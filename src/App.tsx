import React from 'react';
import { Route } from 'react-router-dom';

import FavoritesPage from './pages/FavoritesPage';
import SearchResultsPage from './pages/SearchResultsPage';
import LandingPage from './pages/LandingPage';

import './App.css';
import Container from '@material-ui/core/Container';



export default function App() {
  return (
    <Container maxWidth='md'>
      <Route path='/' exact>
        <LandingPage />
      </Route>

      <Route path='/favorites'>
        <FavoritesPage />
      </Route>

      <Route path='/search'>
        <SearchResultsPage />
      </Route>
    </Container>
  );
}