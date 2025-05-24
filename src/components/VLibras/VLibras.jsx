import React, { useEffect } from 'react';

export default function VLibras() {
  useEffect(() => {

    const vlibrasContainer = document.getElementById('vlibras-container');

    if (!vlibrasContainer) {
      const newContainer = document.createElement('div');
      newContainer.id = 'vlibras-container';
      document.body.appendChild(newContainer);
    }


    const iframe = document.querySelector('#vlibras-container iframe');
    if (iframe) {
      console.log('iframe encontrado dentro do vlibras-container!');
      iframe.style.borderRadius = '10px';
      iframe.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
    } else {
      console.log('iframe não encontrado dentro do vlibras-container!');
    }
  }, []);

  return null;
}
