import React, { useState } from 'react';
import * as S from './styled';
import HtmlScanner from '../scanner/HtmlScanner';
import ReactScanner from '../scanner/ReactScanner';

type ModalProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
};

export default function Modal({ setIsOpen, onClose }: ModalProps) {
  return (
    <S.ModalBg>
      <HtmlScanner setIsOpen={setIsOpen} onClose={onClose} />
      {/* <ReactScanner onClose={onClose} /> */}
    </S.ModalBg>
  );
}
