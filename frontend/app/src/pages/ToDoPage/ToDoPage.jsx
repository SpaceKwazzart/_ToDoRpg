import useLayout from '../../hooks/useLayout';
import Skills from '../../modules/Skills/Skills';
import Tasks from '../../modules/Tasks/Tasks';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUser } from '../../store/userAsyncActions';
import { Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

function ToDoPage() {
    const Layout = useLayout();
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.user.isAuth);

    useEffect( () => {
        dispatch(fetchUser());
        }, [dispatch])

    return (
        <>
        <Layout>
            {
                isAuth
                ?
                <div style={{
                    "display": "flex",
                    "flexDirection": "column",
                    "textAlign": "center",
                }}>
                <h1>ToDo</h1>
                <Skills/>
                <Tasks/>
                </div>
                :
                <div style={{
                    "display": "flex",
                    "flexDirection": "column",
                    "textAlign": "center",
                }}>
                <Typography variant='h4'>You need to sign in into app</Typography>
                <br />
                <Typography variant='h6'>If you don't have an account yet, sign up via email on the Sign Up page</Typography>
                <br />
                <Typography variant='h6'>Check instruction and description if you want</Typography>
                <NavLink to={"/about"}><Button>Go to instruction link</Button></NavLink>
                </div>
            }
        </Layout>
        </>
    );
}

export default ToDoPage;