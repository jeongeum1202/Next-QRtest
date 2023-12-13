import styled, { css } from 'styled-components';

export const ScannerContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 375px;
    height: 100vh;
    text-align: center;
    padding: 68px;
    margin: 0 auto;
    background-color: #fff;
    box-shadow: 0px 6px 14px 0px rgba(0, 0, 0, 0.08);

    button {
      position: absolute;
      top: 20px;
      right: 20px;
      background-color: transparent;
      border: none;
      font-weight: 600;
      cursor: pointer;
    }
  `}
`;

export const QrScanner = styled.div`
  width: 250px;
  height: 250px;

  margin-top: 15px;
  border: 1px solid #fff;

  & > :first-child {
    display: none;
  }

  & > #reader__scan_region {
    width: 100%;
    height: 100%;

    video {
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
  }

  & > #reader__dashboard {
    /* display: none; */
  }
`;
