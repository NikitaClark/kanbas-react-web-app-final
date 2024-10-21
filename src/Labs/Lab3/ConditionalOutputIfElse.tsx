import React from 'react';

const ConditionalOutputIfElse = () => {
  const loggedIn = true;  // Change this value to test the conditional rendering

  if(loggedIn) {
    return (<h2 id="wd-conditional-output-if-else-welcome">Welcome If Else</h2>);
  } else {
    return (<h2 id="wd-conditional-output-if-else-login">Please login If Else</h2>);
  }
};

export default ConditionalOutputIfElse;
