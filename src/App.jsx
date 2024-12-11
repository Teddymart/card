import Nav from './COMPONENT/Nav/Nav';
import Body from './COMPONENT/Hero/Body';
import './App.css';
import Card from './COMPONENT/Card/Card';
import HomePage from './COMPONENT/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import Chat from './COMPONENT/Chat/Chat';
import Post from './COMPONENT/Post/Post';
import SinglePage from './COMPONENT/SinglePage/SinglePage';
// import RegisterationPage from './COMPONENT/Registeration/RegisterationPage';
import Login from './Login/Login';
import RegistrationPage from './RegisterationPage/RegisterationPage';
function App() {
  

  return (
    <>
    <Nav /> 
    {/* <Post/> */}
    <Routes>

<Route path='/letschat' element ={<Chat />} />
<Route path='/card' element = {<Card />} />
<Route path='/post' element ={<Post />} />
<Route path='/Post/:id' element={<SinglePage />} />   
{/* <Route path='/RegisterationPage' element ={< RegisterationPage/>} /> */}
<Route path='/' element ={<RegistrationPage />} />
<Route path='/login' element ={<Login />} />
<Route path='/homepage' element ={<HomePage />} />

      </Routes>
    {/* <Card /> */}
  
    </>
  );
};

export default App
