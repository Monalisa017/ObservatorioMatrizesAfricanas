import { useEffect } from 'react';

const VLibras = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    script.async = true;
    script.defer = true;

    script.onload = () => {
      try {
        new window.VLibras.Widget();
      } catch (error) {
        console.error("Erro ao carregar o VLibras:", error);
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <></>;
};

export default VLibras;
