// import HelloWorldBlog from './component/HelloWorldBlog/HelloWorldBlog';
import './App.css';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';
import Register from './component/Register/Register';
import Login from './component/Login/Login';
import HelloWorldBlog from './component/HelloWorldBlog/HelloWorldBlog';
import Description from './component/Description/Description';





function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/helloworldblog' element={<HelloWorldBlog/>}/>
        <Route path='/description' element={<Description/>}/>

      </Routes>
    </Router>
  
  );
}

export default App;
