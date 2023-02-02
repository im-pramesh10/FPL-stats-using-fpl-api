import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar(){
    return(
        <div className='NavBar'>
            <div className='nav-item'>   
                <Link to="/" className='link' >Home</Link>
            </div>
            <div className='nav-item'>
                <Link to="/team" className='link'>Team</Link>
            </div>
        </div>
    );
}