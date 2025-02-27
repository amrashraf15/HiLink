import { PEOPLE_URL } from '@/constants';
import Image from 'next/image'
import React from 'react'
interface CampProps {
    backgroundImage: string;
    title: string;
    subtitle: string;
    peopleJoined: string;
  }

const CampSite:React.FC<CampProps> = ({ backgroundImage, title, subtitle, peopleJoined }) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
         <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
          <div className="flex items-center justify-center gap-4">
            <div className="rounded-full bg-green-500 p-4">
              <Image
                src="/images/folded-map.svg"
                alt="map"
                width={28}
                height={28}
              />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="bold-18 text-white">{title}</h4>
              <p className="regular-14 text-white">{subtitle}</p>
            </div>
          </div>
    
          <div className="flex items-center justify-center gap-6">
            <span className="flex -space-x-4 overflow-hidden">
              {PEOPLE_URL.map((url) => (
                <Image 
                  className="inline-block h-10 w-10 rounded-full"
                  src={url}
                  key={url}
                  alt="person"
                  width={52}
                  height={52}
                />
              ))}
            </span>
            <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
          </div>
         </div>
        </div>
  )
}

export default CampSite
