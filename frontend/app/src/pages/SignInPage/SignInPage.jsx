// Import the react JS packages 
import axios from "axios";
import {useState} from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../../store/userReducer";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { HOST, PORT } from "../../consts.js"

// Define the Login function.
export const SignInPage = () => {
     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');
     const dispatch = useDispatch();
     const navigate = useNavigate();
     // Create the submit method.
     const submit = async e => {
        e.preventDefault();
        const user = {
                username: username,
                password: password,
               };
          // Create the POST requuest

          try {
            const { data } = await axios.post(
              `http://${HOST}:${PORT}/api/token/`,
              user,
              { headers: { 'Content-Type': 'application/json' } }
            );
          
            localStorage.clear();
            localStorage.setItem('access_token', data.access);
            localStorage.setItem('refresh_token', data.refresh);
            axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
          
            const id = JSON.parse(atob(data.access.split(".")[1])).user_id
            dispatch(signIn(id))
            console.log('Success');
            return navigate("/");
          } catch (error) {
            if (error.response && error.response.status === 401) {
              // Действия при статусе 401 (Unauthorized)
              console.log('Unauthorized');
            } else {
              // Действия при других ошибках
              console.log('Error:', error.message);
            }
          }
    }
    return(
      <div className="">
        <form className="" onSubmit={submit}>
          <div className="">
            <h3 className="">Sign In</h3>

            <div className="">
              <label>Username</label>
              <input className="" 
                placeholder="Enter Username" 
                name='username'  
                type='text' value={username}
                required 
                onChange={e => setUsername(e.target.value)}/>
            </div>

            <div className="">
              <label>Password</label>
              <input name='password' 
                type="password"     
                className=""
                placeholder="Enter password"
                value={password}
                required
                onChange={e => setPassword(e.target.value)}/>
            </div>

            <div className="">
              <button onClick={(e) => submit(e)} type="submit" 
                 className="btn btn-primary">Submit</button>
              <Button onClick={(e) => {
                submit(e);
                }}>SUBMIT</Button>
            </div>
          </div>
       </form>
     </div>
     )
}

export default SignInPage;