"use client"

import { getFetch } from "@/lib/getFetch";
import { newTypes } from "@/types/news";
import { useEffect, useState } from "react";
import NewsCard from "../common/NewsCard";
import CategoryBar from "./CategoryBar";
// import FiterSec from "./FiterSec";

const NewsAll = () => {
    const [news, setNews] = useState<newTypes[]>([]);
    // const [categroy, setCategroy] = useState<string>("");
    const [search, setSearch] = useState<string>("");

    useEffect(() => {
        const getData = async () => {
            const data = await getFetch( search);
            setNews(data)
        }
        getData();
    }, [ search])

    return (
        <div>
            {/* serach or filter */}
            <div className='flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-12 mb-5'>
                 <CategoryBar onSearch={setSearch}/>
                 {/* filter */}
                 {/* <FiterSec onCategoryChange={setCategroy}/> */}
            </div>
            {/* news all data card */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-between'>
                {
                    news.map((item) => (
                        <NewsCard key={item._id} item={item}/>
                    ))
                }
            </div>
        </div>
    );
};

export default NewsAll;