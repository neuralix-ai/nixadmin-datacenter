import React from 'react';
import { GrLocation } from 'react-icons/gr'
interface LocationInfoProps {
  country: string;
  address: string;
}

const LocationInfo: React.FC<LocationInfoProps> = ({ country, address }) => {
  return (
    <div data-layername="india" className="flex gap-4 items-start mt-4 w-full">
      {/* <img loading="lazy" src={GrLocation} alt="" className="object-contain shrink-0 w-6 aspect-square" /> */}
      <GrLocation className='text-2xl mr-2 text-primary font-bold ' />
      <div data-layername="text" className="flex flex-col flex-1 shrink basis-0">
        <div data-layername="indiaLocationTitle" className="font-bold leading-loose text-neutral-800">
          {country}
        </div>
        <div data-layername="indiaLocationDescription" className="mt-1 tracking-wide leading-6 text-neutral-600">
          {address}
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;