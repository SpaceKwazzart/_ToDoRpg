import { Typography } from '@mui/material';
import useLayout from '../../hooks/useLayout';

function AboutPage() {
    const Layout = useLayout();

    return (
        <>
        <Layout>
            <main style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "space-around",
              maxHeight: "85vh",
              maxWidth: "900px",
              margin: '0 auto',
              width: '100%',
              overflow: "scroll",
              }}>
              <Typography sx={{paddingTop: "20px"}} variant='h3' component="h1">AboutPage</Typography>
              <Typography sx={{marginBottom: "25px"}}>Welcome to <span style={{color: "red"}}>"Reach The Top"</span> a ToDo list with gamification elements to reach new heights in self-development</Typography>
              
              <Typography sx={{marginBottom: "25px"}}>This app was originally created for people who want to improve their hard skills, for example, in programming. 100 level is equal to 10K hours. Progress is calculated as geometric progression. The overall level reflects the cumulative progress of all skills</Typography>

              <ol style={{textAlign: "center", marginBottom: "25px"}}>
              <Typography variant='h5'>Instruction</Typography>
                <li><Typography>Sign up with any email you want</Typography></li>
                <li><Typography>Sign in with your username and password</Typography></li>
                <li><Typography>Create any amount of skills on ToDo page</Typography></li>
                <li><Typography>Create task, complete it and add expirience to skill</Typography></li>
              </ol>

              <ul sx={{marginBottom: "25px"}}>
              <Typography variant='h5'>Tech Stack</Typography>
              <li><Typography>Docker, Docker-Compose, Nginx</Typography></li>
              <li><Typography>React, Redux Toolkit</Typography></li>
              <li><Typography>Django DRF</Typography></li>
              <li><Typography>Material UI</Typography></li>
              <li><Typography>Postgres</Typography></li>
              </ul>

            </main>
        </Layout>
        </>
    );
}

export default AboutPage;