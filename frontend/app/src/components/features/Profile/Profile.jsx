import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

function Profile() {
    const isAuth = useSelector(state => state.user.isAuth)

    return (
        <>
        {
        isAuth
        ?
        <NavLink to={"/profile"}><Button>Profile</Button></NavLink>
        :
        <nav>
        <NavLink to={"/signin"}><Button>Sign in</Button></NavLink>
        <NavLink to={"/signup"}><Button>Sign up</Button></NavLink>
        </nav>
        }
        </>
    );
}

export default Profile;