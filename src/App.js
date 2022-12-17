import './App.css';
import Carousel from './components/Carousel/Carousel';
import Text from './components/Text/Text';
import imageData from './assets/imageData.json';

const images = imageData.data.sort((a, b) => 0.5 - Math.random());

function App() {
  return (
    <div className="App">
      <Text text={'noel website dot website'} />
      <Carousel images={images}/>
      <Text text={'brought to you by alice wu and marsrocks, llc'} />
    </div>
  );
}

export default App;
