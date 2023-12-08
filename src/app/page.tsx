'use client';

import axios from 'axios';

import { useState, useEffect } from 'react';

export default function HomePage() {
  const [hello, setHello] = useState(null);

  useEffect(() => {
    axios
      .get('/api/hello')
      .then((response) => {
        setHello(response.data.result.message);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <main>
      <section>Start</section>
      <p>{hello}</p>
    </main>
  );
}
