

// type categoryType = {
//     onCategoryChange: (categories: string) => void
// }

// const FiterSec = ({ onCategoryChange }: categoryType) => {

//     const cateogries = ["all", "tech", "health", "sports", "business"];
//     return (
//         <div className="flex gap-2 items-center justify-center mx-4">
//             <h3 className="font-bold text-lg mb-2 flex-shrink-0">Filter by Category:</h3>
//             {/* select category */}
//             <select 
//              onVolumeChange={(value) => onCategoryChange(value)}
//              className="select select-bordered w-full max-w-xs">

//                 {
//                     cateogries.map((item) => (
//                         <option key={item} value={item}>{item}</option>
//                     )
//                     )
//                 }

//             </select>
//         </div>
//     )

// };

// export default FiterSec;