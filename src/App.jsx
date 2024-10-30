import { useState, useEffect } from "react";
import { pg1, pg2, pg3, pg4, pg5, pg6, pg7 } from "./assets/images/";
import phrases from "./phrases.json";
import "./App.css";
import fonts from "./fonts.json";
import { randomIndex } from "./helpers/randomIndex";
import Button from "./Button.jsx";
import Font from "./Font.jsx";
import Title from "./Title.jsx";
import Loader from "./Loader.jsx";

const images = [pg1, pg2, pg3, pg4, pg5, pg6, pg7];

function App() {
  const [phrase, setPhrase] = useState(phrases[randomIndex(phrases.length)]);
  const [img, setImg] = useState(images[randomIndex(images.length)]);
  const [font, setFonts] = useState(fonts[randomIndex(fonts.length)]);
  const [loader, setLoader] = useState(false)
  
useEffect(() => {
  
}, [])

function changePhrase() {
  setLoader(true)
  setTimeout(() => {
    setPhrase(phrases[randomIndex(phrases.length)]);
    setImg(images[randomIndex(images.length)]);
    setFonts(fonts[randomIndex(fonts.length)]);
    setLoader(false);
  }, 700);
}
  return (
    <div
      className="wrapper"
      style={{
        backgroundImage: `url('${img}')`,
        fontFamily: font.name,
        fontStyle: font.style,
      }}>
      {loader && <Loader/>}  
      {!loader && 
        <div className="container">
          <h1 className="heading">
            <Title />
          </h1>
          <div className="card">
            <div className="card__body">
              <q className="phrase">{phrase.phrase}</q>
              <br />
              <cite className="author">- {phrase.author}</cite>
            </div>
          </div>
          <Button
            changePhrase={changePhrase}
            fontFamily={font.name}
            fontStyle={font.style}
          />
          <div>
            <Font name={font.name} />
          </div>
        </div>
      }
    </div>
  );
}

export default App;
