import styled, { css } from 'styled-components';

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
