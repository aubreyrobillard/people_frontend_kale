import {Form} from 'react-router-dom'

function Login(proprs){
    return <div>
        <h1>Login Form</h1>
        <Form action='/login' method='POST'>
            <label htmlFor='username'>Username</label>
                <input type='text' name='username' id='username'/>
            <label>Password: 
                <input type='password' name='password' id='password'/>
            </label>
            <input type='submit' value='Login'/>
        </Form>
    </div>
}

export default Login