import React, { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import * as S from './styled';

type HtmlScannerProps = {
  onClose: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function HtmlScanner({ onClose, setIsOpen }: HtmlScannerProps) {
  const [decodedResult, setDecodedResult] = useState<string>('');

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      'reader',
      {
        fps: 10,
        qrbox: { width: 200, height: 200 },
      },
      false
    );

    const handleScanSuccess = (decodedText: string) => {
      console.log('QR 스캔 결과: ', decodedText);
      setDecodedResult(() => decodedText);
      setIsOpen(false);
      scanner.clear();
    };

    const handleScanError = (error: any) => {
      console.log(error);
    };

    scanner.render(handleScanSuccess, undefined);

    return () => {
      scanner.clear();
    };
  }, []);
  return (
    <S.ScannerContainer>
      <button onClick={onClose}>X</button>
      <h1>QR 코드를 스캔해주세요.</h1>
      <S.QrScanner id="reader"></S.QrScanner>
    </S.ScannerContainer>
  );
}
