import React from 'react';
import bannerImg from '../../images/banner.png';
import AllPosts from '../AllPosts/AllPosts';

const Home = () => {
    return (
        <div>
            <section className='mt-5'>
                <div className='position-relative'>
                    <img className='img-fluid' src={bannerImg} alt="" />
                    <div className='position-absolute bottom-50 ps-5 text-white'>
                        <h1 className='fs-2'>Computer Engineering</h1>
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