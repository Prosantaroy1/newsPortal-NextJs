import Banner from "@/components/home/Banner";
import NewsSection from "@/components/home/NewsSection";

export default function Home() {
  return (
    <div className="container pt-20 pb-6 ">
      {/* Banner Section */}
      <Banner />
      {/* letest News home */}
      <NewsSection/>
    </div>
  );
}
