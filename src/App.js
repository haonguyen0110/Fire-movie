import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Homepage from './pages/homepage/Homepage';
import DetailMovie from './pages/detail/DetailMovie';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import CheckOut from './pages/checkout/CheckOut';
import Profile from './pages/profile/Profile'
import EditProfile from './pages/editProfile/EditProfile';
import Movie from './pages/movie/Movie';
export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <Routes>
        <Route path="/" exact element={<Homepage/>}  />
        <Route path="/movie/:id" element={<DetailMovie/>} />
        <Route path="/movie" element={<Movie/>} />
        <Route path="/checkout/:id" element={<CheckOut/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/profile" element ={<Profile/>} />
        <Route path="/profile/edit" element ={<EditProfile/>} />
      </Routes>



    </Router>
  )
}

export default App;
