import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Studio() {
  let canRef = useRef(null);
  useEffect(() => {
    const ctx = canRef.current.getContext('2d');
    var draw = new Image();
    draw.crossOrigin = 'anonymous';
    draw.src =
      'https://img.seadn.io/files/47a961d5277157f83821c554ba7407c9.png?fit=max&w=600';

    draw.onload = function () {
      // var scale = Math.min(200 / 600, 200 / 600);
      // var x = 200 / 2 - (600 / 2) * scale;
      // var y = 200 / 2 - (600 / 2) * scale;
      //console.log(x, y);
      ctx.drawImage(draw, 0, 0, 250, 250);
    };
  }, []);

  const placeImage = () => {
    if (process.browser) {
      var canvas = document.getElementById('canvas');
      var url = canvas.toDataURL('image/png');
      var link = document.createElement('a');
      link.download = 'filename.png';
      link.href = url;
      link.click();
    }

    //console.log(fullQuality);
  };
  return (
    <div className={styles.container}>
      <Head>Studio</Head>
      Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Minus, fugit alias id placeat consequatur similique voluptatibus.
      <div className={styles.imgContainer}>
        <canvas ref={canRef} id="canvas"></canvas>
      </div>
      <div className={styles.btns}>
        <button onClick={() => placeImage()} className={styles.btn}>
          place
        </button>
        <button onClick={() => placeImage()} className={styles.btn}>
          +
        </button>
        <button onClick={() => placeImage()} className={styles.btn}>
          -
        </button>
        <button onClick={() => placeImage()} className={styles.btn}>
          left
        </button>
        <button onClick={() => placeImage()} className={styles.btn}>
          right
        </button>
      </div>
    </div>
  );
}
