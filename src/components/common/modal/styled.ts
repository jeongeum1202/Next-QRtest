import styled, { css } from 'styled-components';

export const ModalBg = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100vh;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
`;

export const ModalContainer = styled.section`
  ${({ theme }) => css`
    width: 250px;
    height: 250px;
    border-radius: 15px;
    box-shadow: 0px 6px 14px 0px rgba(0, 0, 0, 0.08);

    & > button {
      width: 70px;
      height: 20px;
      background-color: #587f02;
    }
  `}
`;
