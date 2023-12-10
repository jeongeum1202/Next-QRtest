import React from 'react';
import { ModalContainer } from './styled';

type Props = {
  type: string;
  text: string;
};

export default function Modal({ type, text }: Props) {
  return (
    <ModalContainer>
      <p>{text}</p>
      <button type="button">확인</button>
    </ModalContainer>
  );
}
