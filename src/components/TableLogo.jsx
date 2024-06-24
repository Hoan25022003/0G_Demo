import { useEffect, useRef } from "react";

const listSrc = [
  "svgexport-100.svg",
  "svgexport-102.svg",
  "svgexport-103.svg",
  "svgexport-104.svg",
  "svgexport-105.svg",
  "svgexport-106.svg",
  "svgexport-107.svg",
  "svgexport-108.svg",
  "svgexport-109.svg",
  "svgexport-110.svg",
  "svgexport-111.svg",
  "svgexport-112.svg",
  "svgexport-113.svg",
  "svgexport-114.svg",
  "svgexport-115.svg",
  "svgexport-116.svg",
  "svgexport-117.svg",
  "svgexport-118.svg",
  "svgexport-119.svg",
  "svgexport-120.svg",
  "svgexport-121.svg",
  "svgexport-122.svg",
  "svgexport-123.svg",
  "svgexport-124.svg",
  "svgexport-125.svg",
];

const TableLogo = () => {
  return (
    <div className="w-full mt-2 sm:mt-10 items-center inline-flex flex-nowrap overflow-hidden sm:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <div className="w-full flex flex-col sm:hidden">
        <div className="w-full grid grid-cols-4 gap-x-5 gap-y-7 justify-center items-center mt-4">
          {/* Dong1 */}
          <img src={"svgexport-120.svg"} alt="" />
          <img src={"svgexport-119.svg"} alt="" />
          <img src={"svgexport-118.svg"} alt="" />
          <img src={"svgexport-110.svg"} alt="" />
          {/* Dong2 */}
          <img src={"svgexport-112.svg"} alt="" />
          <img src={"svgexport-115.svg"} alt="" />
          <img src={"svgexport-123.svg"} alt="" />
          <img src={"svgexport-121.svg"} alt="" />
        </div>

        <div className="w-full flex flex-row gap-x-5 gap-y-5 justify-center items-center mt-4">
          {/* Dong3 */}
          <img className="w-[80px]" src={"svgexport-104.svg"} alt="" />
          <img className="w-[80px]" src={"svgexport-114.svg"} alt="" />
          <img className="w-[80px]" src={"svgexport-103.svg"} alt="" />
        </div>
      </div>
      <ul
        // ref={logosRef}
        className="hidden sm:flex items-center justify-center md:justify-start animate-infinite-scroll"
      >
        {listSrc.map((src, i) => (
          <li key={i} className="mx-5 lg:mx-8">
            <img className="lg:max-w-56 max-w-[300px]" src={src} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableLogo;
