import React from 'react';
import styled from 'styled-components';

import africa from '../../assets/imagens/africa.png';

const ImagemEstilizada = styled.img`
  width: 85px;
  height : 85px;
  margin-left: 80%;
  margin-top: -10%;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export default function Imagem() {
  return <ImagemEstilizada src={africa} alt="Africa" />;
}
