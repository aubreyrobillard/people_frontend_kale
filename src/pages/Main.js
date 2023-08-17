import { Outlet, Link } from "react-router-dom"

function Main(proprs){
    return <div>
        <h1>WELCOME TO THE PEOPLE APP</h1>
        <h3>DO YOU WANT TO SIGNUP?</h3>
        <Link to='/signup'><button>Signup</button></Link>
        <h3>DO YOU WANT TO LOGIN?</h3>
        <Link to='/login'><button>Login</button></Link>

        <Outlet/>
    </div>
}

export default Main