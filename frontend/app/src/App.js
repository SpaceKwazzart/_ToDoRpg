import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ToDoPage from './pages/ToDoPage';
import NotFound404 from './pages/NotFound404';
import ProfilePage from './pages/ProfilePage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import AboutPage from './pages/AboutPage';
import RatingPage from './pages/RatingPage';
import { useMedia } from 'react-use';
import { useDispatch } from 'react-redux';
import { createSetDisplayTypeAction } from './store/mediaReducer';
import { useEffect } from 'react';

function App() {
  const isDesktop = useMedia('(min-width: 740px)');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createSetDisplayTypeAction(isDesktop));
  }, [isDesktop, dispatch]);

  return (
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
  );
}

export default App;
