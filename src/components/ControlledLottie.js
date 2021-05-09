import React, { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/lotties/pinjump.json';

const ControlledLottie = () => {
  const [state, setState] = useState({ isStopped: false, isPaused: false });
  const { isStopped, isPaused } = state;

  const buttonStyle = {
    display: 'inline-block',
    margin: '10px auto',
    marginRight: '10px',
    border: 'none',
    color: 'white',
    backgroundColor: '#647DFF',
    borderRadius: '2px',
    fontSize: '15px',
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="controlled">
      <h1>Controlled Lottie</h1>
      <p>Uses state manipulation to start, stop and pause animations</p>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        isStopped={isStopped}
        isPaused={isPaused}
      />
      <button style={buttonStyle} onClick={() => setState({ isStopped: true })}>
        Stop
      </button>
      <button
        style={buttonStyle}
        onClick={() => setState({ isStopped: false, isPaused: false })}
      >
        Play
      </button>
      <button
        style={buttonStyle}
        onClick={() => setState({ isPaused: !isPaused })}
      >
        Pause
      </button>
    </div>
  );
};

export default ControlledLottie;
