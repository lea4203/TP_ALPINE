import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'react-bootstrap';
import { selectVersion, changeColor } from '../store/rootReducer';
import './Carrousel.css';

// Importez les images individuellement ici
import AlpinePureImage from '../images/sources-homepage/versions/ALPINE-PURE-1.png';
import AlpineLegendeImage from '../images/sources-homepage/versions/ALPINE-LEGENDE-1.png';
import BlueColorImage from '../images/configurateur/couleurs/selection/bleu.jpg';
import BlackColorImage from '../images/configurateur/couleurs/selection/noir.jpg';
import WhiteColorImage from '../images/configurateur/couleurs/selection/blanc.jpg';


const Carrousel = () => {
  const versions = useSelector((state) => state.carrousel.versions);
  const selectedVersion = useSelector((state) => state.carrousel.selectedVersion);

  const dispatch = useDispatch();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideSelect = (selectedIndex) => {
    setCurrentSlide(selectedIndex);
    dispatch(selectVersion(versions[selectedIndex].id));
  };

  const handleChangeColor = (color) => {
    dispatch(changeColor(color));
  };

  return (
    <div className="carrousel-container">
      <Carousel activeIndex={currentSlide} onSelect={handleSlideSelect}>
        {versions.map((version, index) => (
          <Carousel.Item key={version.id}>
            {/* Utilisez l'image importée correspondante pour chaque version */}
            <img
              className="d-block w-50 mx-auto carrousel-image"
              src={version.id === 1 ? AlpinePureImage : AlpineLegendeImage}
              alt=""
              onClick={() => dispatch(selectVersion(version.id))}
            />
            <div className="carrousel-info">
              <h3>{version.name}</h3>
              <p>Couleur sélectionnée : {selectedVersion.color}</p>
              <p>Prix : {version.price}</p>
            </div>
            <div className="color-container">
              {/* Utilisez l'image importée correspondante pour chaque couleur */}
              {version.couleurs.map((colorOption) => (
                <div key={colorOption.name} className="color-option">
                  <img
                   src={
                    colorOption.name === "Teinte spéciale Bleu Alpine"
                      ? BlueColorImage
                      : colorOption.name === "Teinte métallisée Noir Profond"
                      ? BlackColorImage
                      : colorOption.name === "Peinture opaque Blanc Glacier"
                      ? WhiteColorImage 
                      : null
                  }
                    alt={colorOption.name}
                    className="color-thumbnail"
                    onClick={() => handleChangeColor(colorOption.name)}
                  />
                  <button
                    onClick={() => handleChangeColor(colorOption.name)}
                    disabled={selectedVersion.color === colorOption.name}
                  >
                    {colorOption.name}
                  </button>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Carrousel;
