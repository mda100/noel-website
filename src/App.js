import './App.css';
import Carousel from './components/Carousel/Carousel';
import imageData from './assets/imageData';

function App() {
  return (
    <div className="App">
      {/* header */}
      <div> TEST </div>
      <Carousel images={imageData}/>
      {/* footer */}
    </div>
  );
}

export default App;
