import {Link} from 'react-router-dom';

const RightNavbar = () => {
    return(
        <div className='flex space-x-8 font-medium'>
            <Link to="/" > Home </Link>
            <Link to="/about" > About </Link>
            <Link to="/projects" > Projects </Link>
            <Link to="/contact" > Contact </Link>
            <Link to="/resume" ><button className='border-solid border-2 border-blue-900 p-2 rounded-2xl'>Resume</button> </Link>
        </div>
    )
}

export default RightNavbar;