import {auth, provider} from '../firebase/FirebaseConfig';
import {useState} from 'react';
import { signInWithPopup } from 'firebase/auth';
import Olympic from "../img/Olympic.png"
import backgroundVideo from "../img/paris2024.mp4"


function SignIn() {

  const [user, setUser] = useState(null);
  // console.log('auth1', auth.currentUser)
  const handleGoogleSignIn=()=>{
    signInWithPopup(auth, provider).then((result)=>{
      const user = result.user;
      console.log(user);
      setUser(user);
      window.location.href = "/";
    }).catch((err)=>{
      // console.log(err);
    })
  }
  // console.log('auth2', auth.currentUser)
  const handleLogout=()=>{
    setUser(null);
  }
  console.log("user", user)

  return (
    <div className="main-container">
      <video autoPlay loop muted id='video'>
        <source src={backgroundVideo} type='video/mp4' />
      </video>
      <img src={Olympic} width="200" height="88" className="img_olympic_logo" alt="Olympic Logo" />
      <div className="content-wrapper">
        <div className="topic-wrapper">
          <h1 className="topics">Paris 2024</h1>
          <h1 className="topics">Olympic Games</h1>
        </div>
        <button className="button-85" onClick={handleGoogleSignIn}>
          <p className="parah">Sign In With Google</p>
        </button>
      </div>
    </div>
  );
  
}

export default SignIn;
