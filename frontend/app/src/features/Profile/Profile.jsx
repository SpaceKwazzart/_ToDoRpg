import { useSelector } from 'react-redux';
import { Avatar, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import style from './Profile.module.css';

function Profile() {
    const user = useSelector(state => state.user);

    return (
        <>
        {
        user.isAuth
        ?
        <NavLink to={"/profile"}>
            <Avatar src={user.avatar}></Avatar>
        </NavLink>
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