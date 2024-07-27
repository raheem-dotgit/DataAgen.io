import './index.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import RightSideBar from './components/RightSideBar';
import Dashboards from './components/Dashboards';

function App() {
  return (
    <>
    <div className='grid grid-flow-row'>
    <Sidebar></Sidebar>
    <Navbar></Navbar>
    <RightSideBar></RightSideBar>
    <Dashboards/>
    </div>

    </>
  );
}

export default App;
