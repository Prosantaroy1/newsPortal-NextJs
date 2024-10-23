import AllPageBanner from '@/components/common/AllPageBanner';
import NewsAll from '@/components/news/NewsAll';
import React from 'react';

const NewsPage = () => {
    return (
        <section className='py-16'>
            {/* heading Banner section */}
            <AllPageBanner headingTitle="News Page"/>
            {/* all news */}
            <div className='container mt-12'>
                <NewsAll/>
            </div>
        </section>
    );
};

export default NewsPage;