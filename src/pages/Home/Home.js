import React, { useContext } from 'react';
import bannerImg from '../../images/banner.png';
import AllPosts from '../AllPosts/AllPosts';
import { FaArrowLeft } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Home = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <section className='mt-5'>
                <div className='position-relative'>
                    <img className='img-fluid' src={bannerImg} alt="" />
                    <div className='position-absolute bottom-50 ps-5 text-white'>
                        <div className='d-flex align-items-center justify-content-between d-block d-lg-none'>
                            <FaArrowLeft className='text-primary'></FaArrowLeft>
                            {
                                user?.uid ?
                                    <button type="button" className="btn btn-outline-primary">Leave Group</button>
                                    :
                                    <button type="button" className="btn btn-outline-primary">Join Group</button>
                            }

                        </div>
                        <h1 className='fs-5'>Computer Engineering</h1>
                        <p className='fs-6'>142,765 Computer Engineers follow this</p>

                    </div>
                </div>

            </section>

            <section>
                <AllPosts></AllPosts>
            </section>
        </div>
    );
};

export default Home;