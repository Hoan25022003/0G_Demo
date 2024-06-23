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
  // const logosRef = useRef(null);

  // useEffect(() => {
  //   if (logosRef.current) {
  //     const ul = logosRef.current;
  //     const clonedUl = ul.cloneNode(true);
  //     clonedUl.setAttribute("aria-hidden", "true");
  //     ul.parentNode.insertBefore(clonedUl, ul.nextSibling);
  //   }
  // }, []);

  return (
    <div className="w-full mt-10 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul
        // ref={logosRef}
        className="flex items-center justify-center md:justify-start animate-infinite-scroll"
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
