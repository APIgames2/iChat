import './App.css';
import NavBar from './components/navbar';
import CardHome from './components/card';
import ReactPlayer from 'react-player'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className=''>
      <ReactPlayer
        width={"100%"}
        height={"100%"}
        controls
        url={"./blue.mp4"}
      />
      </div>
      <div className="p-4 md:flex md:flex-row md:justify-center">
        <div className="md:p-4">
          <CardHome/>
        </div>
        <div className="py-2">
        </div>
        <div className="md:p-4">
          <CardHome/>
        </div>
      </div>
    </div>
  );
}

export default App;
