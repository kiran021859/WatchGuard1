import './App.css'
import Layout from './components/Layout/Layout';
import Post_page from './pages/post page/post_page';
import {Routes, Route} from 'react-router-dom';



function App() {
  

  return (
    <>
    <Routes>
    <Route index element={<div>landing</div>} />
    <Route path={'/login'} element={<div>login</div>} />
    <Route path={'/sign_up'} element={<div>sign_up</div>} />
      <Route path='/user_Dashboard' element={<Layout/>}>
        <Route path={'/user_Dashboard/post'} element={<main><Post_page/></main>} />
        <Route path={'/user_Dashboard/communities'} element={<div>communities</div>} />
        <Route path={'/user_Dashboard/feedback'} element={<div>feedback</div>} />
        <Route path={'/user_Dashboard/privacy'} element={<div>privacy</div>} />
        <Route path={'/user_Dashboard/safety_tip'} element={<div>safety_tip</div>} />
        <Route path={'/user_Dashboard/help'} element={<div>help</div>} />
        <Route path={'/user_Dashboard/profile'} element={<div>Profile</div>} />
      </Route>
    </Routes>
    
    </>
  )
}

export default App
