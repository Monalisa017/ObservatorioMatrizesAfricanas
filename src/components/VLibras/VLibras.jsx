import React, { useEffect } from "react";

const VLibras = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "http://localhost:3001/vlibras-plugin.js";  // Usando o proxy local
 // Usando o servidor proxy local
    script.async = true;
  
    script.onload = () => {
      if (window.VLibras) {
        try {
          console.log("VLibras carregado corretamente");
          new window.VLibras.Widget("https://vlibras.gov.br/app");
        } catch (error) {
          console.error("Erro ao inicializar o Widget VLibras:", error);
        }
      } else {
        console.error("Erro ao carregar o VLibras: objeto não encontrado.");
      }
    };
  
    script.onerror = (e) => {
      console.error("Erro ao carregar o script VLibras:", e);
    };
  
    document.body.appendChild(script);
  
    return () => {
      console.log("Componente VLibras desmontado");
    };
  }, []);
  
  
  return (
    <div vw="true" className="enabled">
      <div vw-access-button="true" className="active"></div>
      <div vw-plugin-wrapper="true">
        <div className="vw-plugin-top-wrapper"></div>
      </div>
    </div>
  );
};

export default VLibras;
