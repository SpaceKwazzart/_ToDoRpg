import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ToDoPage from './pages/ToDoPage/ToDoPage';
import NotFound404 from './pages/NotFound404/NotFound404';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import SignInPage from './pages/SignInPage/SignInPage';
import AboutPage from './pages/AboutPage/AboutPage';
import RatingPage from './pages/RatingPage/RatingPage';
import { useMedia } from 'react-use';
import { useDispatch, useSelector } from 'react-redux';
import { setDisplayType } from './store/mediaReducer';
import { useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const isDesktop = useMedia('(min-width: 740px)');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDisplayType(isDesktop));
  }, [isDesktop, dispatch]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ToDoPage/>}></Route>
        <Route path='about/' element={<AboutPage/>}></Route>
        <Route path='rating/' element={<RatingPage/>}></Route>
        <Route path='signup/' element={<SignUpPage/>}></Route>
        <Route path='signin/' element={<SignInPage/>}></Route>
        <Route path='profile/' element={<ProfilePage/>}></Route>
        <Route path='*' element={<NotFound404/>}></Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
