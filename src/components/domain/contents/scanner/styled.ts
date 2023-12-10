import styled, { css } from 'styled-components';

export const ScannerContainer = styled.div`
  ${({ theme }) => css`
    width: 375px;
    height: 100vh;
    text-align: center;
    padding: 68px;
    margin: 0 auto;
    background-color: #fff;
    box-shadow: 0px 6px 14px 0px rgba(0, 0, 0, 0.08);
  `}
`;
