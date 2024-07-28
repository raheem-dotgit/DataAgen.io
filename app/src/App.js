import './index.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import RightSideBar from './components/RightSideBar';
import Dashboards from './components/Dashboards';


function App() {
  return (
    <>
   
    <Sidebar></Sidebar>
    <Navbar></Navbar>
    <RightSideBar></RightSideBar>
    <Dashboards/>


    </>
  );
}

export default App;
