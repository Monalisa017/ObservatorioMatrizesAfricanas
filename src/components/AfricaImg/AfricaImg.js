import React from 'react';
import styled from 'styled-components';

import africa from '../../assets/imagens/africa.png';

const ImagemEstilizada = styled.img`
  width: 85px;
  height: 85px;
  border-radius: 50%;         /* Totalmente redondo */
  object-fit: cover;          /* Garante proporção sem distorcer */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: block;
`;





export default function Imagem() {
  return <ImagemEstilizada src={africa} alt="LogoAfrica" />;
}
