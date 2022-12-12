import './App.css';
import Carousel from './components/Carousel/Carousel';
import imageData from './assets/imageData.json';

function App() {
  return (
    <div className="App">
      {/* header */}
      <Carousel images={imageData.data}/>
      {/* footer */}
    </div>
  );
}

export default App;
