import React, { useState } from 'react';
import "./index.css"


function Header({ title }) {
  return <h1>{title}</h1>;
}

function Content() {
  const [text, setText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleClick = () => {
    setDisplayText(text);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <textarea value={text} onChange={handleChange} placeholder="Enter some text" />
      <button onClick={handleClick}>Display Text</button>
      {displayText && <p>{displayText}</p>}
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>About Me: I am a beginner web developer!</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header title="My React App" />
      <Content />
      <Footer />
    </div>
  );
}

export default App;