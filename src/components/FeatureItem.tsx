import Image from "next/image";

interface FeatureItemProps{
    title: string;
    icon: string;
    description: string;
}

const FeatureItem:React.FC<FeatureItemProps> = ({title, icon, description }) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
          <div className="rounded-full p-4 lg:p-7 bg-green-500">
            <Image src={icon} alt="map" width={28} height={28} />
          </div>
          <h2 className="text-[20px] font-[700] lg:text-[32px] mt-5 capitalize">
            {title}
          </h2>
          <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
            {description}
          </p>
        </li>
  )
}

export default FeatureItem
