import React, { ReactNode } from 'react';
import Image from 'next/image';

interface params {
  name: string;
  age: number;
}

const SimpleWithParam = (values: params): ReactNode => {

  let title: ReactNode;

  if (values.age > 10) {
    title = (<h1>{values.name}</h1>);
  } else {
    title = (<h2>{values.name}</h2>);
  }

  return (<div className='card'>
    {title}
    <Image
      src="/yoroi_02_50.png"
      width={256}
      height={256}
      alt="Pixel art samurai" />
  </div>)
}

export default SimpleWithParam;