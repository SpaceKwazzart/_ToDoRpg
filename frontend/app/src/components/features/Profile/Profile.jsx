import { useSelector } from 'react-redux';
import style from './Profile.module.css';

function Profile() {
    const isAuth = useSelector(state => state.user.isAuth)

    return (
        <>
        {
        isAuth
        ?
        <h3>nice</h3>
        :
        <h3>u need to auth</h3>
        }
        </>
    );
}

export default Profile;