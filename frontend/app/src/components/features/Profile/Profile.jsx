import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import style from './Profile.module.css';

function Profile() {
    const isAuth = useSelector(state => state.user.isAuth)

    return (
        <>
        {
        isAuth
        ?
        <NavLink to={"/profile"}><Button>Profile</Button></NavLink>
        :
        <nav className={style.signButtons}>
            <NavLink to={"/signin"}><Button sx={{fontSize: "12px"}}>Sign in</Button></NavLink>
            <NavLink to={"/signup"}><Button sx={{fontSize: "12px"}}>Sign up</Button></NavLink>
        </nav>
        }
        </>
    );
}

export default Profile;