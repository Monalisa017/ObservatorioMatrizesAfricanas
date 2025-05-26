// components/HeaderComponent/headerComponent.styled.js
import styled from 'styled-components';
import { AppBar, Box, List, ListItem, ListItemButton, Typography } from '@mui/material';

export const StyledAppBar = styled(AppBar)`
  background-color: #fc791e !important;
  padding-top: 35px;
`;

export const StyledListItemNav = styled(List)`
  display: flex;
  gap: 30px;
  padding-left: 0;
  justify-content: flex-start;
  margin-left: 20px;
`;

export const StyledListItem = styled(ListItem)`
  padding: 0 !important;
`;

export const CustomLinkButton = styled(ListItemButton)`
  color: white !important;
  font-weight: 600;
  white-space: nowrap;
  font-size: 1.5rem;
  padding: 6px 12px;

  &:hover {
    background-color: #5f210e !important;
    color: #fc791e !important;
    border-radius: 5px;
  }
`;

export const LogoContainer = styled(Box)`
  display: flex;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;

    @media (min-width: 600px) {
      width: 60px;
      height: 60px;
    }

    @media (min-width: 960px) {
      width: 70px;
      height: 70px;
    }
  }
`;

export const ObservatorioBox = styled(Box)`
  background-color: #5f210e;
  border-radius: 5px;
  box-shadow: 0 0 0 2px black;
  padding: 15px;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-wrap: wrap;
  width: 95%;
  height: auto;
  margin-left: 20px;
  margin-right: auto;
  margin-bottom: 20px;
  gap: 10px;

  @media (max-width: 959px) {
    flex-direction: column;
    align-items: start;
    margin: auto;
    margin-bottom: 20px;
  }

  @media (min-width: 960px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  @media (min-width: 1200px) {
    width: 45%;
    margin-bottom: 20px;
  }
`;

export const ObservatorioText = styled(Typography)`
  color: #fc791e;
  font-weight: 600;
  font-size: 2.5rem !important;
  text-align: center;
  word-break: break-word;
  width: 100%;

  @media (min-width: 960px) and (max-width: 1199px) {
    width: auto;
    text-align: left;
  }

  @media (min-width: 1200px) {
    font-size: 2.1rem !important;
  }
`;
