import "./App.css";
import ImageSlider from "./components/imageGallery/ImageSlider";
import { SliderData } from "./components/imageGallery/SliderData";

function App() {
  return (
    <>
      <ImageSlider slides={SliderData} />
    </>
  );
}

export default App;
