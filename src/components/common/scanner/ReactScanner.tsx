import React, { useState } from 'react';
import { QrScanner } from '@yudiel/react-qr-scanner';
import * as S from './styled';
import Modal from '../modal/Modal';

type ScannerProps = {
  onClose: () => void;
};

export default function Scanner({ onClose }: ScannerProps) {
  const [decodedResult, setDecodedResult] = useState<string>('');
  const [isStop, setIsStop] = useState<boolean>(false);

  return (
    <S.ScannerContainer>
      <button onClick={onClose}>X</button>
      <h1>QR 코드를 스캔해주세요.</h1>
      <QrScanner
        onDecode={(result) => {
          setDecodedResult(() => result);
          setIsStop((value) => !value);
          console.log(result);
          onClose();
        }}
        onError={(error) => console.log(error?.message)}
        stopDecoding={isStop}
        containerStyle={{ marginTop: '50px' }}
      />
    </S.ScannerContainer>
  );
}
