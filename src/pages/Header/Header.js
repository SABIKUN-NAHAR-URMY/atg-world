import React, { useContext } from 'react';
import logo from '../../images/logo.png';
import { FaSearch, FaSortDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaUserAlt } from "react-icons/fa";
import person1 from '../../images/person1.png';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const style1 = { width: '300px' };
    const textColor = { color: '#27A365' };
    const textColorTwo = { color: '#5C5D5D' };
    const logoSize = { width: '18px' };
    const stylePerson = { width: '30px' };
    const stylePerson2 = { height: '30px' };

    const handelLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link to={'/'} className="text-decoration-none">
                    <h1 className="navbar-brand" href="#"><span style={{ ...textColor }}>ATG.</span><span style={{ ...textColorTwo }}>W<span><img style={{ ...logoSize }} src={logo} alt="" /></span>RLD</span></h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <FaSearch></FaSearch><input className='border-0 rounded-pill p-2 bg-light' style={{ ...style1 }} type="text" placeholder='Search for your favorite groups in ATG' />
                        </li>

                    </ul>
                    <ul className="navbar-nav me-5 mb-2 mb-lg-0">
                        {
                            user?.uid ?
                                <>
                                    {
                                        user?.displayName ?
                                            <>
                                                <img className='img-fluid me-3' style={{ ...stylePerson, ...stylePerson2 }} src={person1} alt="" />
                                                <span>{user?.displayName}<img className="rounded-full h-10" src={user.photoURL} alt="" /></span>

                                                <Link onClick={handelLogOut} > <FaSortDown></FaSortDown></Link>
                                            </>
                                            :
                                            <FaUserAlt></FaUserAlt>
                                    }
                                </>
                                :
                                <li className="nav-item">
                                    <p>Create account.
                                        <Link to={'/signin'} className="text-decoration-none"> It's free!<FaSortDown></FaSortDown></Link>
                                    </p>
                                </li>
                        }


                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;