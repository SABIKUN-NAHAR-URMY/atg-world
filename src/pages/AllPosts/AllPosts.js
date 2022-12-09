import React from 'react';
import { FaSortDown, FaUserPlus } from "react-icons/fa";
import image1 from '../../images/image1.png';
import image2 from '../../images/image2.png';
import image3 from '../../images/image3.png';
import person1 from '../../images/person1.png';
import person2 from '../../images/person2.png';
import person3 from '../../images/person3.png';
import { FaRegEye, FaShareAlt, FaEllipsisH, FaCalendarDay, FaMapMarkerAlt } from "react-icons/fa";

const AllPosts = () => {
    const style1 = { width: '48px' };
    const style2 = { height: '48px' };

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
                    <div className="col-8">
                        <div className='card mb-3'>
                            <img src={image1} className="card-img-top" alt="..." />
                            <div className='m-4'>
                                <div className="card-body">
                                    <p>✍️ Article</p>
                                    <div className='d-flex justify-content-between'>
                                        <h5 className="card-title">What if famous brands had regular fonts? Meet RegulaBrands!</h5>
                                        <FaEllipsisH></FaEllipsisH>
                                    </div>
                                    <p className="card-text">I've worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex'>
                                        <img className='img-fluid me-3' style={{ ...style1, ...style2 }} src={person1} alt="" />
                                        <p className='fw-bold pt-2'>Sarthak Kamra</p>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <div className='d-flex me-5'>
                                            <FaRegEye className='mt-1 me-3'></FaRegEye>
                                            <p>1.4k views</p>
                                        </div>
                                        <div className='border rounded px-3 py-2 bg-light'>
                                            <FaShareAlt></FaShareAlt>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card mb-3'>
                            <img src={image2} className="card-img-top" alt="..." />
                            <div className='m-4'>
                                <div className="card-body">
                                    <p>🔬️ Education</p>
                                    <div className='d-flex justify-content-between'>
                                        <h5 className="card-title">Tax Benefits for Investment under National Pension Scheme launched by Government</h5>
                                        <FaEllipsisH></FaEllipsisH>
                                    </div>
                                    <p className="card-text">I've worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex'>
                                        <img className='img-fluid me-3' style={{ ...style1, ...style2 }} src={person2} alt="" />
                                        <p className='fw-bold pt-2'>Sarah West</p>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <div className='d-flex me-5'>
                                            <FaRegEye className='mt-1 me-3'></FaRegEye>
                                            <p>1.4k views</p>
                                        </div>
                                        <div className='border rounded px-3 py-2 bg-light'>
                                            <FaShareAlt></FaShareAlt>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card mb-3'>
                            <img src={image3} className="card-img-top" alt="..." />
                            <div className='m-4'>
                                <div className="card-body">
                                    <p>🗓️ Meetup</p>
                                    <div className='d-flex justify-content-between'>
                                        <h5 className="card-title">Finance & Investment Elite Social Mixer @Lujiazui</h5>

                                        <div>
                                            <div className='border rounded bg-secondary text-center px-3 py-2'>
                                            <FaEllipsisH></FaEllipsisH>
                                            </div>
                                            <div className='border rounded px-5'>
                                                <p>Edit</p>
                                                <p>Report</p>
                                                <p>Option 3</p>
                                            </div>
                                        </div>

                                    </div>
                                    <p className="card-text fw-bold d-flex align-items-center"><FaCalendarDay className='me-2'></FaCalendarDay> Fri, 12 Oct, 2018 <span className='ms-5'><FaMapMarkerAlt className='me-2'></FaMapMarkerAlt>Ahmedabad, India</span></p>

                                    <div className='border border-secondary rounded'>
                                        <p className='text-center pt-1 text-danger fw-bold'>Visit Website</p>
                                    </div>
                                    {/* <div className='mt-4 position-absolute bottom-0 end-0 border rounded'>
                                            <p>Edit</p>
                                            <p>Report</p>
                                            <p>Option 3</p>
                                        </div>
                                     */}
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex'>
                                        <img className='img-fluid me-3' style={{ ...style1, ...style2 }} src={person3} alt="" />
                                        <p className='fw-bold pt-2'>Ronal Jones</p>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <div className='d-flex me-5'>
                                            <FaRegEye className='mt-1 me-3'></FaRegEye>
                                            <p>1.4k views</p>
                                        </div>
                                        <div className='border rounded px-3 py-2 bg-light'>
                                            <FaShareAlt></FaShareAlt>
                                        </div>
                                    </div>
                                </div>
                            </div>
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