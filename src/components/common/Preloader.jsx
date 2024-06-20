import React, { useEffect, useRef } from 'react';
import logoWordmark from '../../../static/preloader.gif';

const Preloader = () => {
  const preloaderRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      preloaderRef.current.style.display = 'flex';
    }, 2000); // delay display by 2 seconds
  }, []);

  return (
    <div className="preloader" ref={preloaderRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999, backgroundColor: 'white' }}>
      <img alt="logo wordmark" src={logoWordmark} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
    </div>
  );
};

export default Preloader;
