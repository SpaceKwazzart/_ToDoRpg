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
            <Button onClick={async () => {
                const request = await postSignOut();
                console.log("Sign Out request: ", request)
                if (request.status === 205) {
                    localStorage.clear();
                    dispatch(signOut());
                    return navigate("/"); 
                }
            }}>Log out</Button>
        </main>
    );
}

export default ProfilePage;