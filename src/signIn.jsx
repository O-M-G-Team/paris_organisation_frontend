import {auth, provider} from './FirebaseConfig';
import {useState} from 'react';
import { signInWithPopup } from 'firebase/auth';
import img_sec2 from './img/sec2.png'
function SignIn() {

  const [user, setUser] = useState(null);

  const handleGoogleSignIn=()=>{
    signInWithPopup(auth, provider).then((result)=>{
      const user = result.user;
      console.log(user);
      setUser(user);
    }).catch((err)=>{
      console.log(err);
    })
  }

  const handleLogout=()=>{
    setUser(null);
  }

  return (
    <div className="wrapper">
      <div className='img_sec2'>
        <img src={img_sec2} width="650" height="944"></img>
      </div>
      <div className='box'>
            <div className='section1'>
              <p className='topic_login'>LOGIN</p>
            <button className='btn-login'
              onClick={handleGoogleSignIn}>
              <p className='parah'>Sign In With Google</p>
            </button> </div> 
      </div>
    </div>
  );
}

export default SignIn;
