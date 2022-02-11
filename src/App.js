import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './components/Login';
import { UserDetails } from './components/UserDetails';
import { UserList } from './components/UserList';
import { Myprovider } from './context/Mycontext';


function App() {
  return (
    <>
      <Myprovider>
        <Routes>
          <Route path='/' exact element={<Login />}></Route>
          <Route path='UserList' exact element={<UserList />}></Route>
          <Route path='UserDetails/:id' exact element={<UserDetails />}></Route>
        </Routes>

      </Myprovider>

    </>

  )
}

export default App;
