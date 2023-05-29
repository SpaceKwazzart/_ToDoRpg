import './App.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import ToDoPage from './pages/ToDoPage';
import NotFound404 from './pages/NotFound404';
import ProfilePage from './pages/ProfilePage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ToDoPage/>}></Route>
        <Route path='signup/' element={<SignUpPage/>}></Route>
        <Route path='signin/' element={<SignInPage/>}></Route>
        <Route path='profile/' element={<ProfilePage/>}></Route>
        <Route path='*' element={<NotFound404/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
