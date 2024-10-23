import React from 'react';
import { newTypes } from '@/types/news';
import NewsCard from '../common/NewsCard';

const NewsSection = async() => {

    // data fetching
    const res=await fetch('https://news-api-next-js-kappa.vercel.app/api/news', {
        cache: 'force-cache'
      });
    const news= await res.json();
    // console.log('fetching data', data.length)

    return (
        <section>
            <div className='container py-12'>
               {/* Letest news title */}
               <h3 className='text-2xl font-bold'>Letest News</h3>
               {/* news card */}
               <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        news.slice(0,3).map((item: newTypes)=>(
                            <NewsCard key={item?._id} item={item}/>
                        ))
                    }
               </div>
            </div>
        </section>
    );
};

export default NewsSection;