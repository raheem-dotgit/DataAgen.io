import './index.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import RightSideBar from './components/RightSideBar';

function App() {
  return (
    <>
    <div className='main-div'>
    <Sidebar></Sidebar>
    <Navbar></Navbar>
    <RightSideBar></RightSideBar>
    </div>

    </>
  );
}

export default App;
