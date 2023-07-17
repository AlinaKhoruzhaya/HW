
import { Routes, Route } from 'react-router-dom';
import LayoutSecond from './componets/layoutSecond/LayoutSecond.js';
import HomePage from "./componets/pages/HomePage";
import MoviesPage from "./componets/pages/MoviesPage.js";
import AboutPage from "./componets/pages/AboutPage";
import ContactsPage from "./componets/pages/ContactsPage.js";
import NotFoundPage from "./componets/pages/NotFoundPage.js";
import Layout from './componets/layout/Layout';
import MoviePage from './componets/pages/MoviePage';
import SearchPage from './componets/pages/SearchPage';
import SignInPage from '../src/componets/pages/SignInPage';
import SignUpPage from './componets/pages/SignUpPage';
import PrivacyPolicyPage from './componets/pages/PrivacyPolicyPage';
import PasswordRetrievalPage from './componets/pages/PasswordPetrievalPage';
import WishListPage from './componets/pages/WishListPage';
import "../src/styles/App.css";
import 'animate.css';


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
        {/* <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} /> */}
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        {/* <Route path="/forgot" element={<PasswordRetrievalPage />} /> */}
        <Route path="/wishlist" element={<WishListPage />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Route>
      <Route path="/" element={<LayoutSecond />} >
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot" element={<PasswordRetrievalPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes >
  );
}

export default App;
