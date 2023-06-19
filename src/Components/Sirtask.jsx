import React, { useState } from 'react';

const Sirtask = () => {
  const [word, setWord] = useState('');
  const [color, setColor] = useState('black');

  const wordchange = (e) => {
    setColor(e.target.value);
  };

  const selectchange = (e) => {
    setWord(e.target.value);
  };

  return (
    <div>
      <textarea value={word} onChange={wordchange}></textarea>
       <h1 style={{ color: color }}>{word}</h1>
       <h1>{word.length}</h1>
      <select value={color} onChange={selectchange}>
        <option value="black">Black</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
    </div>
  );
};

export default Sirtask;
