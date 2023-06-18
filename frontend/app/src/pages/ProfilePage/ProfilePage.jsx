import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/userReducer'
import { useNavigate } from 'react-router-dom';
import { postSignOut } from '../../api/postSignOut';

function ProfilePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <main>
            <h1>Profile Page</h1>
            <Button onClick={() => {
                postSignOut();
                dispatch(signOut());
                return navigate("/");
            }}>Log out</Button>
        </main>
    );
}

export default ProfilePage;