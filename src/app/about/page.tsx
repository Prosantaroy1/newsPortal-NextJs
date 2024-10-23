import AboutSlice from '@/components/about/AboutSlice';
import AllPageBanner from '@/components/common/AllPageBanner';
import React from 'react';

const AboutPage = () => {
    return (
        <section className='pt-16'>
            {/* heading Banner section */}
            <AllPageBanner headingTitle="About Page" />
            <div className='container  pt-24 pb-7'>
                {/*Team  title */}
                <div>
                    <h3 className='text-3xl font-bold'>Our Team </h3>
                    <p className='text-base font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto deleniti obcaecati.</p>
                </div>
                {/* team card slice */}
                <div className='pt-10'>
                    <AboutSlice/>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;