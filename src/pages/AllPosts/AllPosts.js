import React from 'react';
import { FaSortDown, FaUserPlus } from "react-icons/fa";
import image1 from '../../images/image1.png';

const AllPosts = () => {
    return (
        <div className='mx-5 mt-5'>
            <section>
                <div className='d-lg-flex justify-content-between'>
                    <div className='d-flex gap-3'>
                        <p>All Posts(32)</p>
                        <p>Article</p>
                        <p>Event</p>
                        <p>Education</p>
                        <p>Job</p>
                    </div>
                    <div classNameName='d-flex gap-3'>
                        <button type="button" className="btn btn-light"><span className='d-flex align-items-center'>Write a Post<FaSortDown classNameName='ps-2'></FaSortDown></span> </button>
                        <button type="button" className="btn btn-primary"><span className='d-flex align-items-center gap-2'><FaUserPlus></FaUserPlus>Join Group</span></button>
                    </div>
                </div>
                <hr />
            </section>

            <section>
                <div className="row">
                    <div className="card col-8">
                        <img src={image1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p>✍️ Article</p>
                            <h5 className="card-title">What if famous brands had regular fonts? Meet RegulaBrands!</h5>
                            <p className="card-text">I've worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                        </div>
                    </div>
                    <div className="col-4 ps-5">
                        col-4
                    </div>
                </div>

            </section>
        </div>
    );
};

export default AllPosts;