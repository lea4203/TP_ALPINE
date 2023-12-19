import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectVersion } from '../store/rootReducer';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importez les images individuellement ici
import AlpinePureImage from '../images/sources-homepage/versions/ALPINE-PURE-1.png';
import AlpineLegendeImage from '../images/sources-homepage/versions/ALPINE-LEGENDE-1.png';

const Carrousel = () => {
  const versions = useSelector((state) => state.carrousel.versions);
  const selectedVersion = useSelector((state) => state.carrousel.selectedVersion);
  const dispatch = useDispatch();

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideSelect = (selectedIndex) => {
    setCurrentSlide(selectedIndex);
    dispatch(selectVersion(versions[selectedIndex].id));
  };

  return (
    <div>
      <Carousel activeIndex={currentSlide} onSelect={handleSlideSelect}>
        {versions.map((version, index) => (
          <Carousel.Item key={version.id}>
            {/* Utilisez l'image importée correspondante pour chaque version */}
            <img
              className="d-block w-100"
              src={version.id === 1 ? AlpinePureImage : AlpineLegendeImage}
              alt={version.name}
              onClick={() => dispatch(selectVersion(version.id))}
            />
            <Carousel.Caption>
              <h3>{version.name}</h3>
              <p>{version.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Carrousel;
