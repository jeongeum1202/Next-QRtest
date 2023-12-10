import React, { useState } from 'react';
import { QrScanner, QrScannerProps } from '@yudiel/react-qr-scanner';
import { ScannerContainer } from './styled';
import Modal from '../modal/Modal';

type Props = {};

export default function Scanner({}: Props) {
  const [decodedResult, setDecodedResult] = useState<string>('');
  const [isStop, setIsStop] = useState<boolean>(false);

  return (
    <ScannerContainer>
      <h1>QR 코드를 스캔해주세요.</h1>
      <QrScanner
        onDecode={(result) => {
          setDecodedResult(() => result);
          setIsStop((value) => !value);
          console.log(result);
        }}
        onError={(error) => console.log(error?.message)}
        stopDecoding={isStop}
        containerStyle={{ marginTop: '50px' }}
      />
    </ScannerContainer>
  );
}
