import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { action,originals } from "./urls";

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/> 
      <RowPost title="Netflix Originals" url={originals}/> 
      <RowPost title="Action" isSmall url={action}/>
    </div>
  );
}

export default App;
