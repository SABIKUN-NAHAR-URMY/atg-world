import React, { useContext } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import signinImg from '../../images/signup.png';
import fb from '../../images/fb.png';
import google from '../../images/google.png';

const Signup = () => {

    const style1 = { width: '215px' };
    const googleProvider = new GoogleAuthProvider();
    const { createUser, modernizeProfile, providerSingin, loading } = useContext(AuthContext);

    let navigate = useNavigate();

    if (loading) {
        return <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }

    const handelSingup = event => {
        event.preventDefault();
        const form = event.target;
        const firstname = form.firstname.value;
        const lastname = form.lastname.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmpassword = form.confirmpassword.value;

        createUser(email, password)
        .then(result => {
            const user = result.user;
            form.reset();
            handelModernizeProfile(firstname);
            navigate('/');
        })
        .catch(error => {
            console.error(error);
        })
    }

    const handelModernizeProfile = (name) => {

        const profile = {
            displayName: name,
        }
        modernizeProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))

    }

    const handelGoogleSignIn = () => {
        providerSingin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='border rounded mt-4'>
            <p className='text-success bg-light fw-bold p-3 text-center'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
            <div className='row mt-5 mx-5'>
                <div className='col'>
                    <h1>Create Account</h1>
                    <form onSubmit={handelSingup}>
                        <div className='d-lg-flex'>
                            <input name='firstname' type="text" style={{ ...style1 }} className="form-control p-3 bg-light " id="exampleFormControlInput1" placeholder="First Name" />

                            <input name='lastname' type="text" style={{ ...style1 }} className="form-control p-3 bg-light " id="exampleFormControlInput2" placeholder="Last Name" />
                        </div>
                        <input name='email' type="email" className="form-control p-3 w-75 bg-light" id="exampleFormControlInput3" placeholder="Email" />

                        <input name='password' type="password" className="form-control p-3 w-75 bg-light" id="inputPassword1" placeholder='Password' />

                        <input name='confirmpassword' type="password" className="form-control p-3 w-75 bg-light" id="inputPassword2" placeholder='Confirm Password' />

                        <button className='btn btn-primary p-3 fw-bold mt-3 w-75 rounded-pill'>Create Account</button>
                    </form>
                    <button className='btn btn-outline-secondary p-3 fw-bold mt-3 w-75'>
                        <img src={fb} className='img-fluid pe-3' alt="" />
                        Sign up with Facebook
                    </button>
                    <button onClick={handelGoogleSignIn} className='btn btn-outline-secondary p-3 fw-bold mt-3 w-75'>
                        <img src={google} className='img-fluid pe-3' alt="" />
                        Sign up with Google
                    </button>
                </div>
                <div className='col'>
                    <p>Already have an account?<Link to={'/signin'} className='text-primary'> Sign In</Link></p>
                    <img src={signinImg} alt="" />
                    <p>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                </div>
            </div>
        </div>
    );
};

export default Signup;