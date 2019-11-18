import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< Updated upstream

export default props => ( 
    <nav className="flex flex-wrap bg-orange-500 lg:px-20 pr-5 pl-5">
        <div id="main-nav" className="lg:flex flex-1">
            <div className="text-sm lg:flex-grow">
                <Link to={'/'}>
                    <div className="lg:text-lg block lg:my-0 sm:my-2 lg:inline-block text-orange-100 hover:text-white hover:font-bold mr-6">
                        Home
=======
import { Auth } from '../src/authContext';
import FireBaseSetup from './FireBaseSetup';
 function NavMenu(props) {
    const [stateNav, setStateNave] = useState(null);
    const [userEmail, setUserEmail] = useState("");
    const { state, dispatch } = useContext(Auth);
    let buttons ;
    useEffect(() => {
        FireBaseSetup.isInitialized().then(user => {
            if (user) {
                setStateNave(user);
                setUserEmail(user.email);
            }
        });
    });
    
    const logout = () => {
        FireBaseSetup.logout();
        setStateNave(null);
        props.history.replace("/");
        return dispatch(
            {
                type: "LOGOUT",
                payload: {}
            });
      
    }
    if (stateNav != null || state.user.hasOwnProperty("user")) {
        buttons = (<Fragment>
            <div>{userEmail} </div>
            <button className="hover:font-bold" onClick={logout}>LogOut</button>
        </Fragment>)}
    else {
        buttons = (<Fragment>
            <button className="hover:font-bold" > <Link to="/signinpage"> Sign In  </Link> </button> |
            <button className="hover:font-bold" ><Link className="hover:font-bold" to="/signuppage"> Sign Up</Link> </button>
        </Fragment>)
    }
    return (
        <nav className="flex flex-wrap bg-orange-500 lg:px-20 pr-5 pl-5">
            <div id="main-nav" className="lg:flex flex-1">
                <div className="text-sm lg:flex-grow">
                    <Link to={'/'}>
                        <div className="lg:text-lg block lg:my-0 sm:my-2 lg:inline-block text-orange-100 hover:text-white hover:font-bold mr-6">
                            Home
>>>>>>> Stashed changes
                    </div>
                </Link>
                <a href="#responsive-header" className="lg:text-lg block lg:my-0 sm:my-2 lg:inline-block text-orange-100 hover:text-white hover:font-bold mr-6">
                    Departments
                </a>
                <a href="#responsive-header" className="lg:text-lg block lg:my-0 sm:my-2 lg:inline-block text-orange-100 hover:text-white hover:font-bold mr-6">
                    Special & Offers
                </div>
<<<<<<< Updated upstream
                <Link to={'signinpage'}>
                    <div className="lg:text-lg block lg:my-0 sm:my-2 lg:inline-block text-orange-100 hover:text-white hover:font-bold mr-6">
                        My Account
                    </div>
                </Link>
                <div href="#responsive-header" className="lg:text-lg block lg:my-0 sm:my-2 lg:inline-block text-orange-100 hover:text-white hover:font-bold mr-6">
                    Contact Us
                </div>
=======
                  
                    <div href="#responsive-header" className="lg:text-lg block lg:my-0 sm:my-2 lg:inline-block text-orange-100 hover:text-white hover:font-bold mr-6">
                        Contact Us
                </div>
                </div>
            </div>
            <div className="sm:hidden lg:flex">
                <div className="lg:text-lg block lg:my-0 sm:my-2 lg:inline-block text-orange-100">
                    {buttons}
            </div>
>>>>>>> Stashed changes
            </div>
        </div>
        <div className="sm:hidden lg:flex">
            <a className="lg:text-lg block lg:my-0 sm:my-2 lg:inline-block text-orange-100 hover:text-white hover:font-bold">
                quote.center@qc.com
            </a>
        </div>
    </nav>
);

// Navbar Toggle
document.addEventListener('DOMContentLoaded', function () {
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0); // Get all "navbar-burger" elements
    if ($navbarBurgers.length > 0) { // Check if there are any navbar burgers
        var $target = document.getElementById('main-nav') // Get the "main-nav" element
        $target.classList.toggle('hidden');
        // Add a click event on each of them // Toggle the className on "main-nav"
        $navbarBurgers.forEach(function ($el) {$el.addEventListener('click', function(){$target.classList.toggle('hidden');});});
    }
});