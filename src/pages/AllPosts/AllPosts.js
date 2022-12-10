import React, { useContext } from 'react';
import { FaSortDown, FaUserPlus } from "react-icons/fa";
import image1 from '../../images/image1.png';
import image2 from '../../images/image2.png';
import image3 from '../../images/image3.png';
import person1 from '../../images/person1.png';
import person2 from '../../images/person2.png';
import person3 from '../../images/person3.png';
import person4 from '../../images/person4.png';
import rec1 from '../../images/rec1.png';
import rec2 from '../../images/rec2.png';
import rec3 from '../../images/rec3.png';
import rec4 from '../../images/rec4.png';
import { FaRegEye, FaShareAlt, FaEllipsisH, FaCalendarDay, FaMapMarkerAlt, FaBriefcase, FaPen, FaExclamationCircle, FaRegHandPointRight } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AllPosts = () => {
    const { user } = useContext(AuthContext);
    const style1 = { width: '48px' };
    const style2 = { height: '48px' };

    return (
        <div className='mx-5 mt-5'>
            <section>
                <div className='d-lg-flex justify-content-between'>
                    <div className='d-lg-flex d-none gap-3'>
                        <p className='fw-bold'>All Posts(32)</p>
                        <p>Article</p>
                        <p>Event</p>
                        <p>Education</p>
                        <p>Job</p>
                    </div>
                    <div className='d-flex justify-content-between align-items-center d-lg-none gap-3'>
                        <p className='fw-bold'>Posts(368)</p>
                        <button>Filter: All<FaSortDown></FaSortDown></button>
                    </div>
                    <div className='d-lg-flex d-none gap-3'>
                        <button type="button" className="btn btn-light"><span className='d-flex align-items-center'>Write a Post<FaSortDown className='ps-2'></FaSortDown></span> </button>
                        {
                            user?.uid ?
                                <button type="button" className="btn btn-primary"><span className='d-flex align-items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                                <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                              </svg>Leave Group</span></button>
                                :
                                <button type="button" className="btn btn-primary"><span className='d-flex align-items-center gap-2'><FaUserPlus></FaUserPlus>Join Group</span></button>
                        }

                    </div>
                </div>
                <hr />
            </section>

            <section>
                <div className="row">
                    <div className="col-lg-8">
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
                        <div className='card mb-3'>
                            <div className='m-4'>
                                <div className="card-body">
                                    <p className='fw-bold'>💼️ Job</p>
                                    <div className='d-flex justify-content-between'>
                                        <h5 className="card-title">Software Developer</h5>
                                        <FaEllipsisH></FaEllipsisH>
                                    </div>
                                    <p className="card-text fw-bold d-flex align-items-center"><FaBriefcase className='me-2'></FaBriefcase> Innovaccer Analytics Private Ltd.<span className='ms-5'><FaMapMarkerAlt className='me-2'></FaMapMarkerAlt>Noida, India</span></p>

                                    <div className='border border-secondary rounded'>
                                        <p className='text-center pt-1 text-success fw-bold'>Apply on Timesjobs</p>
                                    </div>

                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex'>
                                        <img className='img-fluid me-3' style={{ ...style1, ...style2 }} src={person4} alt="" />
                                        <p className='fw-bold pt-2'>Joseph Gray</p>
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
                    <div className="col-lg-4 ps-5">
                        <div className='d-flex justify-content-between'>
                            <p className='ms-5'><FaMapMarkerAlt className='me-2'></FaMapMarkerAlt>Noida, India</p>
                            <span><FaPen></FaPen></span>
                        </div>
                        <hr />

                        <div className='d-flex justify-content-center'>
                            <div>
                                <FaExclamationCircle className='me-3'></FaExclamationCircle>
                            </div>
                            <p>Your location will help us serve better and extend a personalised experience.</p>
                        </div>
                        {
                            user?.uid &&
                            <>
                            <span className='fs-6'><FaRegHandPointRight className='me-2'></FaRegHandPointRight>RECOMMENDED GROUPS</span>
                            <div className='mt-4'>
                                <p className='d-flex justify-content-between'><div><img src={rec1} className='img-fluid' alt="" /> Leisure</div> <button className='border rounded-pill bg-dark text-white'>Followed</button></p>
                                <p className='d-flex justify-content-between'><div><img src={rec2} className='img-fluid' alt="" /> Activism</div><button className='border rounded-pill'>Follow</button></p>
                                <p className='d-flex justify-content-between'><div><img src={rec3} className='img-fluid' alt="" /> MBA </div><button className='border rounded-pill'>Follow</button></p>
                                <p className='d-flex justify-content-between'><div><img src={rec4} className='img-fluid' alt="" /> Philosophy</div><button className='border rounded-pill'>Follow</button></p>
                               
                            </div>

                            <p className='text-primary'>See More...</p>
                            </>
                        }
                    </div>
                </div>

            </section>
        </div>
    );
};

export default AllPosts;