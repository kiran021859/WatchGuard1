
import './App.css';
import Profile from './pages/user profile page/Profile';
import Help from './pages/help page/Help';
import Safety from './pages/safety tips page/safety';
import Privacy from './pages/privacy page/Privacy';
import Feedback from './pages/feedback page/Feedback';
import Communities from './pages/communities page/Communities';
import SignUp from './pages/sign up page/SignUp';
import Login from './pages/login page/Login';
import Layout from './components/Layout/Layout';
import Landing from './pages/landing page/Landing';
import Post_page from './pages/post page/post_page';
import Post_functionality from './pages/post fuctionality/Post_functionality';
import Athlone from './pages/athlone/Athlone';
import Bonteheuwel from './pages/bonteheuwel/Bonteheuwel';
import Manenberg from './pages/manenberg/Manenberg';
import Langa from './pages/langa/Langa';
import Hanover_park from './pages/hanover park/Hanover_park'
import {Routes, Route} from 'react-router-dom';
import { UserContextProvider } from './context/userContext'



function App() {
  

  return (
    <>
    <UserContextProvider>

    <Routes>
    <Route index element={<Landing/>} />
    <Route path={'/login'} element={<Login/>} />
    <Route path={'/sign_up'} element={<SignUp/>} />
      <Route path='/user_Dashboard' element={<Layout/>}>
        <Route path={'/user_Dashboard/post'} element={<Post_page/>} />
        <Route path={'/user_Dashboard/create_post'} element={<Post_functionality/>} />
        <Route path={'/user_Dashboard/communities'} element={<Communities/>} />
        <Route path={'/user_Dashboard/feedback'} element={<Feedback/>} />
        <Route path={'/user_Dashboard/privacy'} element={<Privacy/>} />
        <Route path={'/user_Dashboard/safety_tip'} element={<Safety/>} />
        <Route path={'/user_Dashboard/help'} element={<Help/>} />
        <Route path={'/user_Dashboard/profile'} element={<Profile/>} />
        <Route path={'/user_Dashboard/athlone'} element={<Athlone/>} />
        <Route path={'/user_Dashboard/bonteheuwel'} element={<Bonteheuwel/>} />
        <Route path={'/user_Dashboard/manenberg'} element={<Manenberg/>} />
        <Route path={'/user_Dashboard/langa'} element={<Langa/>} />
        <Route path={'/user_Dashboard/hanover_park'} element={<Hanover_park/>} />
      </Route>
    </Routes>

    </UserContextProvider>
   
    
    </>
  )
}

export default App
