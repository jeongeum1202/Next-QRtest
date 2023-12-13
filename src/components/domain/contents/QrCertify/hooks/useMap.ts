import { useEffect, useRef, useState } from 'react';

type AreaList = {
  location: string;
  lat: number;
  lng: number;
};

function useMap() {
  const mapRef = useRef<HTMLElement | null | any>(null);
  const markerRef = useRef<HTMLElement | null | any>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [myLocation, setMyLocation] = useState<
    { latitude: number; longitude: number } | string
  >('');
  const areaList = [
    { location: '강남구청', lat: 37.5174, lng: 127.0474 },
    { location: '삼성1동 주민센터', lat: 37.5143, lng: 127.0626 },
    { location: '삼성2동 주민센터', lat: 37.5112, lng: 127.046 },
  ];

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const handleClickMarker = (marker: any, item: AreaList) => {
    naver.maps.Event.addListener(marker, 'click', (e: any) => {
      setIsOpen(true);
    });
  };

  useEffect(() => {
    // geolocation 이용 현재 위치 확인, 위치 미동의 시 기본 위치로 지정
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMyLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      window.alert('현재 위치를 알 수 없어 기본 위치로 지정합니다.');
      setMyLocation({ latitude: 37.5135, longitude: 127.0527 });
    }
  }, []);

  useEffect(() => {
    if (typeof myLocation !== 'string') {
      // 현재 위치 추적
      let currentPosition = [myLocation.latitude, myLocation.longitude];

      // Naver Map 생성
      const map = (mapRef.current = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        zoomControl: false,
      }));

      markerRef.current = new naver.maps.Marker({
        map,
        position: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
      });

      areaList?.map((item: AreaList) => {
        markerRef.current = new naver.maps.Marker({
          position: new naver.maps.LatLng(item.lat, item.lng),
          map: mapRef.current,
        });
        handleClickMarker(markerRef.current, item);
      });
    }
  }, [myLocation]);

  return { isOpen, setIsOpen, closeModal, myLocation };
}

export default useMap;
