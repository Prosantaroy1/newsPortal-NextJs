import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <section>
            <div className='container rounded-md bg-slate-400 grid grid-cols-1 gap-y-4 md:gap-y-1 gap-x-2 md:gap-x-4 md:grid-cols-2 py-5 items-center'>
                {/*banner image part */}
                <div>
                    <Image src={`https://utfs.io/f/mpcU3yb23iaPhdscPXMQcOl7wY0u1UsATHJxWj6oEdCieIyz`} width={600} height={350} className='rounded' alt="Banner Img" />
                </div>
                {/*banner title part  */}
                <div className='space-y-5'>
                    <h3 className='text-xl font-bold'>All Time Update News.</h3>
                    <p className='text-balance font-normal'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptates eveniet porro reiciendis alias.
                         Accusamus repellendus ab veritatis facere porro nobis, eveniet quae nulla explicabo, molestias tempore expedita itaque saepe quam!
                    </p>
                    <button className='bg-black text-white text-xl font-semibold py-2 rounded-md px-5' type="button">
                        Learn More
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Banner;