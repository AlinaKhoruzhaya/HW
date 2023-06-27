
import { Routes, Route } from 'react-router-dom';
import HomePage from "./componets/pages/HomePage";
import MoviesPage from "./componets/pages/MoviesPage.js";
import AboutPage from "./componets/pages/AboutPage.js";
import ContactsPage from "./componets/pages/ContactsPage.js";
import NotFoundPage from "./componets/pages/NotFoundPage.js";
import Layout from './componets/layout/Layout';
import MoviePage from './componets/pages/MoviePage';
import SearchPage from './componets/pages/SearchPage';
import "../src/styles/App.css"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/search/:query" element={<SearchPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes >
  );
}

export default App;
