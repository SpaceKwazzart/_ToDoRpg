// Import the react JS packages 
import axios from "axios";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
// Define the Login function.
export const SignUpPage = () => {
     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');
     const [email, setEmail] = useState('');
     const navigate = useNavigate();
     // Create the submit method.
     const submit = async e => {
        e.preventDefault();
        const user = {
                username: username,
                password: password,
                email: email,
               };
          // Create the POST requuest

          try {
            const { data } = await axios.post(
              'http://localhost:8000/users/',
              user,
              { headers: { 'Content-Type': 'application/json' } }
            );
          
            localStorage.clear();
            localStorage.setItem('access_token', data.access);
            localStorage.setItem('refresh_token', data.refresh);
            axios.defaults.headers.common['Authorization'] = 
                                            `Bearer ${data['access']}`;
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
            <h3 className="">Sign Up</h3>

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
              <label>Email</label>
              <input className="" 
                placeholder="Enter email" 
                name='email'  
                type='text' value={email}
                required 
                onChange={e => setEmail(e.target.value)}/>
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
              <button type="submit" 
                 className="btn btn-primary">Submit</button>
            </div>
          </div>
       </form>
     </div>
     )
}

export default SignUpPage;