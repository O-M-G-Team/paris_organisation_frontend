import {auth, provider} from './FirebaseConfig';
import {useState} from 'react';
import { signInWithPopup } from 'firebase/auth';
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
      {user ? (
        <>
          <button className="btn btn-secondary btn-md" onClick={handleLogout}>
            LOGOUT
          </button>
          <h3>Welcome {user.displayName}</h3>
          <p>{user.email}</p>
          <div className="photo">
            <img src={user.photoURL} alt="dp" referrerPolicy="no-referrer" />
          </div>
        </>
      ) : (
        <>
          <div className="img_sec2">
            <img src={Olympic} width="500" height="230.83" className="img_olympic_logo" alt="Olympic Logo" />
            <h1 className="topics">Paris 2024</h1>
            <h1 className="topics">Olympic Games</h1>
          </div>
          <div className="sec1">
            <p className="topic_login">LOGIN</p>
            <button className="btn-login" onClick={handleGoogleSignIn}>
              <p className="parah">Sign In With Google</p>
            </button>
          </div>
        </>
      )}
    </div>
  );
  
}

export default SignIn;
