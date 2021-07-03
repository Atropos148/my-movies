import React from 'react';
import { Route } from 'react-router-dom';

import FavoritesPage from './pages/FavoritesPage';
import SearchResultsPage from './pages/SearchResultsPage';
import LandingPage from './pages/LandingPage';

import './App.css';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
// import Button from '@material-ui/core/Button';



import NavBar from './components/NavBar';
import MovieCard from './components/MovieCard';

import { api_key } from './api_key';

export default function App() {
  return (
    <Container maxWidth='sm'>
      <Route path='/' exact>
        <LandingPage />
      </Route>

      <Route path='/favorites'>
        <FavoritesPage />
      </Route>

      <Route path='/results'>
        <SearchResultsPage />
      </Route>
    </Container>
  );
}