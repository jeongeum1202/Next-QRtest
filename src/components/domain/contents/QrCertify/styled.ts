import styled, { css } from 'styled-components';

export const MapContainer = styled.div`
  ${({ theme }) => css`
    width: 375px;
    height: 100vh;

    margin: 0 auto;
  `}
`;
