import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { shapeData } from '../utils/common';

let margin = 'margin: 40% 40%;';

export default function Editor() {
  let canRef = useRef(null);
  let [nftSize, setNftSize] = useState(25);
  useEffect(() => {}, []);

  const placeImage = () => {
    if (process.browser) {
      let d = document.getElementById('pp');
      let image = document.createElement('img');
      image.setAttribute(
        'src',
        'https://lh3.googleusercontent.com/ww-PqtSiBG7aCNk4lAqw-ibenlcLKdmqsoCXenDDDagM2W9rQHoDVVzAoQBe9QQhElfy44G5u77ujePfWL8WtUkV05f_bAo6BR7Q=w600'
      );
      image.setAttribute('height', `${nftSize}%`);
      image.setAttribute('width', `${nftSize}%`);
      image.setAttribute('id', 'nft-image');
      image.setAttribute('style', `object-fit: contain; ${margin}`);
      image.setAttribute('alt', 'img');
      d.appendChild(image);
    }
  };

  let applyShape = (type) => {
    if (process.browser) {
      let d = document.getElementById('nft-image');
      d.setAttribute(
        'style',
        `clip-path: ${type}(${shapeData[type]}); ${margin}`
      );
    }
  };

  let handleSize = (mode) => {
    let d = document.getElementById('nft-image');
    switch (mode) {
      case '-':
        d.setAttribute('height', `${nftSize - 5}%`);
        d.setAttribute('width', `${nftSize - 5}%`);
        setNftSize(nftSize - 5);
        break;

      case '+':
        d.setAttribute('height', `${Number(nftSize) + 5}%`);
        d.setAttribute('width', `${Number(nftSize) + 5}%`);
        setNftSize(nftSize + 5);
        break;
    }
  };
  return (
    <div className={styles.container}>
      <Head>Studio</Head>
      Lorem, ipsum dolor. Lorem fers dolor sit amet consectetur adipisicing
      elit. Minus, fugit alias id placeat consequatur similique voluptatibus.
      <div className={styles.editorOverlay}>
        <div className={styles.imgContainer}></div>
        <div draggable="true" className={styles.overlayParent} id="pp"></div>
      </div>
      <div className={styles.btns}>
        <button onClick={() => placeImage()} className={styles.btn}>
          place
        </button>
        <button onClick={() => handleSize('+')} className={styles.btn}>
          +
        </button>
        <button onClick={() => handleSize('-')} className={styles.btn}>
          -
        </button>
        <button onClick={() => placeImage()} className={styles.btn}>
          left
        </button>
        <button onClick={() => placeImage()} className={styles.btn}>
          right
        </button>
      </div>
      <div className={styles.btns}>
        <button onClick={() => applyShape('none')} className={styles.btn}>
          None
        </button>
        <button onClick={() => applyShape('polygon')} className={styles.btn}>
          Hexagon
        </button>
        <button onClick={() => applyShape('circle')} className={styles.btn}>
          Round
        </button>
      </div>
    </div>
  );
}
