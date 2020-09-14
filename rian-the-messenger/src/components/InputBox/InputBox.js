import React from 'react';

const InputBox = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input onChange={props.onChange} value={props.inputValue}></input>
        {props.error ? <p>{props.writeError}</p> : null}
        <button type='submit'>Send</button>
      </form>
    </div>
  );
};

export default InputBox;
