import { useEffect, useRef } from "react";

const ImageList = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    if (logosRef.current) {
      const ul = logosRef.current;
      ul.insertAdjacentHTML("afterend", ul.outerHTML);
      ul.nextSibling.setAttribute("aria-hidden", "true");
    }
  }, []);

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] mt-10">
      <ul
        ref={logosRef}
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      >
        <li>
          <img className="" src="imo.svg" alt="" />
        </li>
        <li>
          <img src="svgexport-100.svg" alt="" />
        </li>
        <li>
          <img src="svgexport-101.svg" alt="" />
        </li>
        <li>
          <img src="svgexport-102.svg" alt="" />
        </li>
        <li>
          <img src="svgexport-103.svg" alt="" />
        </li>
        <li>
          <img src="svgexport-104.svg" alt="" />
        </li>
        <li>
          <img src="svgexport-105.svg" alt="" />
        </li>
        <li>
          <img src="svgexport-106.svg" alt="" />
        </li>
        <li>
          <img src="svgexport-107.svg" alt="" />
        </li>
        <li>
          <img src="svgexport-108.svg" alt="" />
        </li>
        <li>
          <img src="svgexport-109.svg" alt="" />
        </li>
        <li>
          <img src="svgexport-110.svg" alt="" />
        </li>
        <li>
          <img src="svgexport-111.svg" alt="" />
        </li>
        <li>
          <img src="svgexport-112.svg" alt="" />
        </li>
        <li>
          <img src="svgexport-113.svg" alt="" />
        </li>
        <li>
          <img src="svgexport-114.svg" alt="" />
        </li>
        <li>
          <img src="svgexport-115.svg" alt="" />
        </li>
        <li>
          <img src="svgexport-116.svg" alt="" />
        </li>
        <li>
          <img src="svgexport-117.svg" alt="" />
        </li>

        <li>
          <img src="svgexport-118.svg" alt="" />
        </li>
        <li>
          <img src="svgexport-119.svg" alt="" />
        </li>
        <li>
          <img src="svgexport-120.svg" alt="" />
        </li>
        <li>
          <img src="svgexport-121.svg" alt="" />
        </li>
        <li>
          <img src="svgexport-122.svg" alt="" />
        </li>
        <li>
          <img src="svgexport-123.svg" alt="" />
        </li>
        <li>
          <img src="svgexport-124.svg" alt="" />
        </li>
        <li>
          <img src="svgexport-125.svg" alt="" />
        </li>
        <li>
          <img src="svgexport-126.svg" alt="" />
        </li>
        <li>
          <img src="svgexport-127.svg" alt="" />
        </li>
        <li>
          <img src="svgexport-128.svg" alt="" />
        </li>
        <li>
          <img src="svgexport-129.svg" alt="" />
        </li>
        <li>
          <img src="svgexport-130.svg" alt="" />
        </li>
        <li>
          <img src="svgexport-131.svg" alt="" />
        </li>
        <li>
          <img src="svgexport-132.svg" alt="" />
        </li>
        <li>
          <img src="svgexport-133.svg" alt="" />
        </li>
        <li>
          <img src="svgexport-134.svg" alt="" />
        </li>
        <li>
          <img src="svgexport-135.svg" alt="" />
        </li>
        <li>
          <img src="svgexport-136.svg" alt="" />
        </li>
        <li>
          <img src="svgexport-137.svg" alt="" />
        </li>
      </ul>
    </div>
  );
};

export default ImageList;
