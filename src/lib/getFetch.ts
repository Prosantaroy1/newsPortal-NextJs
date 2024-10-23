export const getFetch = async (categroy: string = "", search: string = "") => {
    try {
        const response = await fetch(`https://news-api-next-js-kappa.vercel.app/api/news?category=${categroy}&search=${search}`)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const datas = await response.json();
        return datas;

    }
    catch (error) {
        console.log('data fetching err', error)
        return [];
    }
}