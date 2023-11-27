// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import LoginPage from './LoginPage';
// import SignupPage from './SignupPage';

// const FrontPage = () => {
//   const history = useNavigate();
//   const [isLogin, setIsLogin] = useState(true);

//   const handleToggle = () => {
//     setIsLogin((prevState) => !prevState);
//   };

//   const handleAuth = () => {
//     setTimeout(() => {
//       history('/home');
//     }, 2000);
//   };

//   return (
//     <div>
//       {isLogin ? <LoginPage /> : <SignupPage />}

//       <button onClick={handleToggle}>
//         {isLogin ? 'Already have an account? Login here' : `Don't have an account? Sign Up here`}
//       </button>
//     </div>
//   );
// };

// export default FrontPage;
