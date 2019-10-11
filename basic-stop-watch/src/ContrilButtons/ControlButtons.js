import React from "react";

const ControlButtons = props => {
  const { actived, onStart, onPause, onReset, onSplit } = props;
  if (actived) {
    return (
      <div>
        <button onClick={onSplit}>计次</button>
        <button onClick={onPause}>停止</button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={onReset}>复位</button>
        <button onClick={onStart}>开始</button>
      </div>
    );
  }
};

export default ControlButtons;
