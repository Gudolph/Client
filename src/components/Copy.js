import React from 'react';
import styles from '../css/Copy.module.css';

function Copy() {
  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      
      alert('복사 성공!');
    } catch (error) {

    }
  };

  return (
    <div className='Copy'>
      <button id={styles.LinkBT} onClick={() => handleCopyClipBoard("http://localhost:3000/letterform")}>
       링크 공유해서 메세지 받기
      </button>
    </div>
  );
}

export default Copy;