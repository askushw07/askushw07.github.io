import LeftNavbar from './leftNavbar';
import RightNavbar from './rightNavbar';

const Navbar = () => {
  return (
    <div className='flex justify-between text-2xl px-6 py-8 shadow shadow-gray-500 text-centre'>
      <LeftNavbar />
      <RightNavbar />
    </div>
  );
};

export default Navbar;
