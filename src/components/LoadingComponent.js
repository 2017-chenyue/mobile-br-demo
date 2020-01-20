import React from 'react';

const LoadingComponent = (props) => {
  if(props.error) {
    return (<div>Sorry, there was a problem loading the page.</div>)
  }else if(props.pastDelay) {
    return (
      <div>loading</div>
    )
  }else{
    return null;
  }
}
export default LoadingComponent;