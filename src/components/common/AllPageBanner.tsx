
type titleProp={
    headingTitle: string
}

const AllPageBanner = ({headingTitle}: titleProp) => {
    return (
        <section className="bg-orange-500 text-black">
             <div className="container py-16">
                <h3 className="text-3xl lg:text-5xl font-bold text-center">{headingTitle}</h3>
             </div>
        </section>
    );
};

export default AllPageBanner;