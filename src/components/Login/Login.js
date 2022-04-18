import React, { useState } from "react";
import "./Login.css";
import GoogleLogo from "../../Images/GoogleLogo/google.svg";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getAuth,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../FireBase/Firebase.init";
import toast from "react-hot-toast";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const provider = new GoogleAuthProvider();

const Login = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth)
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const from = location?.state?.from?.pathname || '/';
    
  const handleGoogleSignIn = () =>{
      signInWithGoogle()
      .then( () =>{
          navigate(from, {replace: true})
      })
  }

  const auth = getAuth();
sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    // ...
  });

  const googleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        // ...
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        console.error(error);
      });
  };

  const handleEmail = (event) => {
    const emailInput = event.target.value;

    if (/\S+@\S+\.\S+/.test(emailInput)) {
      setEmail({ value: emailInput, error: "" });
    } else {
      setEmail({ value: "", error: "Please Provide a valid Email" });
    }
  };

  const handlePassword = (event) => {
    const passwordInput = event.target.value;

    setPassword({ value: passwordInput, error: "" });
  };

//   const resetPassword = async () => {
//     const email = emailRef.current.value;
//     if (email) {
//         await sendPasswordResetEmail(email);
//         toast('Sent email');
//     }
//     else{
//         toast('please enter your email address');
//     }
// }

  const handleLogin = (event) => {
    event.preventDefault();

    if (email.value === "") {
      setEmail({ value: "", error: "Email is required" });
    }

    if (password.value === "") {
      setPassword({ value: "", error: "Password is required" });
    }

    if (email.value && password.value) {
      signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/");
        })
        .catch((error) => {
          const errorMessage = error.message;

          if (errorMessage.includes("wrong-password")) {
            toast.error("Wrong Password", { id: "error" });
          } else {
            toast.error(errorMessage, { id: "error" });
          }
        });
    }
  };

  return (
    <div className="auth-form-container ">
      <div className="auth-form">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <div className="input-wrapper">
              <input type="text" name="email" onBlur={handleEmail} id="email" />
            </div>
            {email.error && (
              <p className="error">
                <AiOutlineExclamationCircle /> {email.error}
              </p>
            )}
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <input
                type="password"
                onBlur={handlePassword}
                name="password"
                id="password"
              />
            </div>
            {password.error && (
              <p className="error">
                <AiOutlineExclamationCircle /> {password.error}
              </p>
            )}
          </div>
          <button  onClick={handleGoogleSignIn} type="submit" className="auth-form-submit">
            Login
          </button>
        </form>
        <p className="redirect">
          New to Power Zone?{" "}
          <span onClick={() => navigate("/SignUp")}>Create New Account</span>
        </p>
        <div className="horizontal-divider">
          <div className="line-left" />
          <p>or</p>
          <div className="line-right" />
        </div>
        <div className="input-wrapper">
          <button className="google-auth" onClick={googleAuth}>
            <img src={GoogleLogo} alt="" />
            <p> Continue with Google </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
