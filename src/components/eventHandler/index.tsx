import React, { useState } from 'react';

interface MyComponentProps {
  // Define any additional props for the component
}

const MyComponent: React.FC<MyComponentProps> = () => {
  const [inputValue, setInputValue] = useState('');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Mouse event:', event);
    console.log('Button clicked! Input value:', inputValue);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default MyComponent;