
import './App.css'
import Communities from './pages/communities page/Communities'
import SignUp from './pages/sign up page/SignUp'
import Login from './pages/login page/Login'
import Layout from './components/Layout/Layout';
import Landing from './pages/landing page/Landing';
import Post_page from './pages/post page/post_page';
import {Routes, Route} from 'react-router-dom';



function App() {
  

  return (
    <>
    <Routes>
    <Route index element={<Landing/>} />
    <Route path={'/login'} element={<Login/>} />
    <Route path={'/sign_up'} element={<SignUp/>} />
      <Route path='/user_Dashboard' element={<Layout/>}>
        <Route path={'/user_Dashboard/post'} element={<main><Post_page/></main>} />
        <Route path={'/user_Dashboard/communities'} element={<Communities/>} />
        <Route path={'/user_Dashboard/feedback'} element={<Feedback/>} />
        <Route path={'/user_Dashboard/privacy'} element={<Privacy/>} />
        <Route path={'/user_Dashboard/safety_tip'} element={<Safety/>} />
        <Route path={'/user_Dashboard/help'} element={<div>help</div>} />
        <Route path={'/user_Dashboard/profile'} element={<div>Profile</div>} />
      </Route>
    </Routes>
    
    </>
  )
}

export default App
