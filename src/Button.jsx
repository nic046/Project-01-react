import "./Button.css";

function Button({ changePhrase, fontFamily, fontStyle }) {

  return (
    <button onClick={changePhrase} style={{ fontFamily, fontStyle }}>
      New one
    </button>
  );
}

export default Button;