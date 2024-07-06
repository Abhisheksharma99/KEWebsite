import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const Type = (props) => {
  return (
    <div className='text-center typeheading fw-bolder mb-5 pt-5'>
      <h1 className='fs-3 pt-5'>Explore The Beautiful Chemistry</h1>
      <br />
      <ReactTypingEffect
        text={props.text}
        speed={5}
        eraseSpeed={5}
        eraseDelay={1500}
        typingDelay={1500}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={{ color: '17215c', fontSize:"40px", fontWeight:"bold"} }
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}        
      />
    </div>
  );
};
export default Type;