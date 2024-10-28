import { useState } from "react";
import { pg1, pg2, pg3, pg4 } from "./assets/images/";
import phrases from "./phrases.json";
import "./App.css";
import fonts from "./fonts.json";
import { randomIndex } from "./helpers/randomIndex";
import Button from "./Button.jsx";
import Font from "./Font.jsx";
import Title from "./Title.jsx";

const images = [pg1, pg2, pg3, pg4];

function App() {
  const [phrase, setPhrase] = useState(phrases[randomIndex(phrases.length)]);
  const [img, setImg] = useState(images[randomIndex(images.length)]);
  const [font, setFonts] = useState(fonts[randomIndex(fonts.length)]);

  function changePhrase() {
    setPhrase(phrases[randomIndex(phrases.length)]);
    setImg(images[randomIndex(images.length)]);
    setFonts(fonts[randomIndex(fonts.length)]);
  }

  return (
    <div
      className="wrapper"
      style={{
        backgroundImage: `url('${img}')`,
        fontFamily: font.name,
        fontStyle: font.style,
      }}
    >
      <div className="container">
        <h1 className="heading">
          <Title/>
        </h1>
        <div className="card">
          <div className="card__body">
            <q className="phrase">{phrase.phrase}</q>
            <br />
            <cite className="author">- {phrase.author}</cite>
          </div>
        </div>

        <Button
          changePhrase = {changePhrase}
          fontFamily={font.name}
          fontStyle={font.style}
        />

        <div>
          <Font name={font.name} />
        </div>
      </div>
    </div>
  );
}

export default App;
