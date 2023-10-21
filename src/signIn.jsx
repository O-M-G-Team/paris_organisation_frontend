import {auth, provider} from './FirebaseConfig';
import {useState} from 'react';
import { signInWithPopup } from 'firebase/auth';
import img_sec2 from './img/sec2.png'
import Olympic from './img/Olympic.png'
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
    <div className="sec2">
      <div className='img_sec2'>
        <img src={Olympic} width="500" height="230.83" className='img_olympic_logo' ></img>
        <h1 className='topics'>Paris 2024</h1>
        <h1 className='topics'>Olympic Games</h1>
      </div>
      <div className='sec1'>
              <p className='topic_login'>LOGIN</p>
            <button className='btn-login'
              onClick={handleGoogleSignIn}>
              <p className='parah'>Sign In With Google</p>
            </button>
      </div>
    </div>
  );
}

export default SignIn;
