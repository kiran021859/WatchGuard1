import './App.css'
import Post_page from './pages/post page/post_page';
import {Routes, Route} from 'react-router-dom';



function App() {
  

  return (
    <>
    <Routes>
      <Route index element={<main><Post_page/></main>} />
      <Route path={'/login'} element={<div>Login</div>} />
    </Routes>
    
    </>
  )
}

export default App
