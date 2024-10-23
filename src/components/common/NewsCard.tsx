import { newTypes } from "@/types/news";
import Image from "next/image";
import Link from "next/link";

export interface newsTypePros {
    item: newTypes
}

const NewsCard = ({ item }: newsTypePros) => {
    return (
        <div className='border p-4 rounded-md shadow-md'>
            {/* card image  */}
            <div>
                <Image src={item?.imageUrl} width={500} height={500} alt='news image'
                    priority
                    className='mb-5 md:h-56 rounded hover:scale-105 cursor-pointer transition-all duration-200' />
            </div>
            {/* card heading title */}
            <div>
                <h2 className='text-xl font-semibold my-3'>{item?.title.substring(0, 65)}..</h2>
                <p className='mb-4'>{item?.description.substring(0, 85)}...</p>
                <Link href={`/news/${item?._id}`}>
                    <button className='bg-black text-white text-xl font-semibold py-2 rounded-md px-5' type="button">
                        Learn More
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NewsCard;