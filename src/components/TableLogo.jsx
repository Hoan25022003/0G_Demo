import React, { useEffect, useRef } from "react";

const TableLogo = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    if (logosRef.current) {
      const ul = logosRef.current;
      const clonedUl = ul.cloneNode(true);
      clonedUl.setAttribute("aria-hidden", "true");
      ul.parentNode.insertBefore(clonedUl, ul.nextSibling);
    }
  }, []);

  return (
    <div className="w-full mt-10 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul
        ref={logosRef}
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-sm  md:[&_img]:max-w-none animate-infinite-scroll"
      >
        <li>
          <img src="imo.svg" alt="" />
        </li>
        <li>
          <img src="okx.svg" alt="" />
        </li>
        <li>
          <img src="trgc.svg" alt="" />
        </li>
        <li>
          <img src="wise_3.svg" alt="" />
        </li>
        <li>
          <img src="artichocke.svg" alt="" />
        </li>
        <li>
          <img src="crypto_time.svg" alt="" />
        </li>
        <li>
          <img src="blank_less.svg" alt="" />
        </li>
        <li>
          <img src="hackvc.svg" alt="" />
        </li>
      </ul>
    </div>
  );
};

export default TableLogo;
