import Image from 'next/image';
import React from 'react'
interface ButtonProps{
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string;
    full?: boolean;

}

const Button:React.FC<ButtonProps> = ({type,title,icon,variant,full}) => {
    return (
            <button className={`flex items-center justify-center rounded-full border ${variant} ${full && 'w-full'}`} type={type}>
                    {icon && <Image src={icon} alt={title} width={24} height={24} />}
                    <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
            </button>
    )
}

export default Button
