import React from 'react';
import Modal from '@/components/common/modal/Modal';

import useMap from './hooks/useMap';
import * as S from './styled';

type Props = {};

export default function QrCertify({}: Props) {
  const { isOpen, setIsOpen, closeModal } = useMap();

  return (
    <>
      <S.MapContainer id="map"></S.MapContainer>
      {isOpen && <Modal setIsOpen={setIsOpen} onClose={closeModal} />}
    </>
  );
}
