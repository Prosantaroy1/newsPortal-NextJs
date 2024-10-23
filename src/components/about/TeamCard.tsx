import Image from 'next/image';
import React from 'react';

type Props ={
    item: {
        id: number;
        image: string;
        name: string;
        cityName: string;
        numberOfProperties: number;
    }
}


const TeamCard = ({item}: Props) => {
    return (
        <div className='relative overflow-hidden m-2 rounded-lg'>
            <Image 
            src={item?.image} alt='Image'  
            width={700}
            height={700}
            className='w-full h-[450px] rounded-lg object-cover'/>
            {/* ovarlap */}
            <div className='inset-0 absolute bg-black opacity-40'></div>
            {/* team name or city */}
            <div className='absolute top-6 left-5'>
                <h3 className='text-2xl text-white font-bold'>{item?.name}</h3>
                <p className='text-xl font-normal text-white'>{item?.cityName}</p>
            </div>
        </div>
    );
};

export default TeamCard;