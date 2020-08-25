import React from 'react';
import './App.scss';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';


const AutoplaySlider = withAutoplay(AwesomeSlider);

function App() {
  return (
    <div className="App">
      <h1>Slider</h1>
      <div className="slider-container">
        <AutoplaySlider 
          animation="cubeAnimation"
          cssModule={AwesomeSliderStyles} play={true}
          cancelOnInteraction={false}
          interval={6000}
        >
          <div className="image" data-src="/img/1.jpg" />
          <div data-src="/img/2.jpg" />
          <div data-src="/img/3.jpg" />
        </AutoplaySlider>
      </div>
    </div>
  );
}

export default App;