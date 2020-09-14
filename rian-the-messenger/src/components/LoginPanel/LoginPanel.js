import React from 'react';

const LoginPanel = (props) => {
  let loginField;
  if (props.user) {
    loginField = (
      <p>
        Login in as: <strong>{props.user}</strong>
      </p>
    );
  } else {
    loginField = (
      <p>
        Please <strong onClick={props.loginHandler}>login</strong>
      </p>
    );
  }

  return <div>{loginField}</div>;
};

export default LoginPanel;
