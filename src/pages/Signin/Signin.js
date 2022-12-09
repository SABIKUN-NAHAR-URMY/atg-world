import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import signinImg from '../../images/signup.png';
import fb from '../../images/fb.png';
import google from '../../images/google.png';

const Signin = () => {


    const provider = new GoogleAuthProvider();
    const { login, providerLogin, loading } = useContext(AuthContext);

    let navigate = useNavigate();

    // if (loading) {
    //     return <div classNameName="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
    //         <span classNameName="visually-hidden">Loading...</span>
    //     </div>
    // }

    // const handelLogin = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const email = form.email.value;
    //     const password = form.password.value;

    //     login(email, password)
    //         .then(result => {
    //             const user = result.user;
    //             form.reset();
    //             const currentUser = {
    //                 email: user.email
    //             }
    //             //get jwt token
    //             fetch('https://lens-queen-server.vercel.app/jwt', {
    //                 method: 'POST',
    //                 headers: {
    //                     'content-type': 'application/json'
    //                 },
    //                 body: JSON.stringify(currentUser)
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     localStorage.setItem('token', data.token);
    //                     navigate(from, { replace: true });
    //                 })
    //         })
    //         .catch(error => console.error(error))
    // }

    // const handelGoogleLogin = () => {
    //     providerLogin(provider)
    //         .then((result) => {
    //             const user = result.user;
    //             const currentUser = {
    //                 email: user.email
    //             }
    //             //get jwt token
    //             fetch('https://lens-queen-server.vercel.app/jwt', {
    //                 method: 'POST',
    //                 headers: {
    //                     'content-type': 'application/json'
    //                 },
    //                 body: JSON.stringify(currentUser)
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     localStorage.setItem('token', data.token);
    //                     navigate(from, { replace: true });
    //                 })
    //         })
    //         .catch(error => console.error(error));
    // }

    return (

        <div className='border rounded mt-4'>
            <p className='text-success bg-light fw-bold p-3 text-center'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
            <div className='row mt-5 mx-5'>
                <div className='col'>
                    <h1>Sign In</h1>
                    <input type="email" className="form-control p-3 w-75 bg-light" id="exampleFormControlInput1" placeholder="Email" />
                    <input type="password" className="form-control p-3 w-75 bg-light" id="inputPassword" placeholder='Password' />
                    <button className='btn btn-primary p-3 fw-bold mt-3 w-75 rounded-pill'>Sign In</button>
                    <button className='btn btn-outline-secondary p-3 fw-bold mt-3 w-75'>
                        <img src={fb} className='img-fluid pe-3' alt="" />
                        Sign in with Facebook
                    </button>
                    <button className='btn btn-outline-secondary p-3 fw-bold mt-3 w-75'>
                        <img src={google} className='img-fluid pe-3' alt="" />
                        Sign in with Google
                    </button>

                    <p className='text-center w-75 mt-3 fw-bold'>Forgot Password?</p>
                </div>
                <div className='col'>
                    <p>Don't have an account yet?<Link to={'/signup'} className='text-primary'> Create new for free!</Link></p>
                    <img src={signinImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Signin;