

import React from 'react';

const ChildButton = ({function1}) => {
  return (
    <div>
      <button onClick={()=>function1()}> Button in Child </button>
    </div>
  )
}

export default ChildButton;
