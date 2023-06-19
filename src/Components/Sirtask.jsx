import React, { useState } from 'react';

const Sirtask = () => {
  const [word, setword] = useState('');
  const [color, setcolor] = useState('black');

  const Colorchange = (e) => {
    setcolor(e.target.value);
  };

  const Wordchange = (e) => {
    setword(e.target.value);
  };

  return (
    <div>
      <textarea value={word} onChange={Wordchange}></textarea>
       <h1 style={{ color: color }}>{word}</h1>
       <h1>{word.length}</h1>
      <select value={color} onChange={Colorchange}>
        <option value="black">Black</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
    </div>
  );
};

export default Sirtask;
