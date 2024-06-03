const DropHover = () => {
  return (
    <div className="flex-row justify-start hidden md:flex md:gap-x-5">
      <div className="z-50 flex items-center justify-center mx-auto">
        <div className="relative py-2 cursor-pointer group">
          <div className="flex items-center justify-between">
            <a
              className="py-2 my-2 text-base font-medium menu-hover md:mx-1"
              href=""
            >
              Develop
            </a>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-3 h-3 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </div>

          <div className="absolute z-100 border border-borderColor w-[150px] flex-col bg-white py-2 shadow-xl hidden group-hover:flex items-start rounded-md group-hover:animate-opacity">
            <a
              href="https://0g.ai/build"
              className="w-full px-3 py-[6px] text-gray-600 transition-all hover:bg-gray-300"
            >
              Build
            </a>

            <a
              href="https://0g.ai/testnet-guide"
              className="w-full px-3 py-[6px] text-gray-600 transition-all hover:bg-gray-300"
            >
              Testnet
            </a>

            <a
              href="https://0g.ai/node-guide"
              className="w-full px-3 py-[6px] text-gray-600 transition-all hover:bg-gray-300"
            >
              Run a Node
            </a>

            <a
              href="https://docs.0g.ai/0g-doc"
              className="w-full px-3 py-[6px] text-gray-600 transition-all hover:bg-gray-300"
            >
              Docs
            </a>

            <a
              href="https://faucet.0g.ai/"
              className="w-full px-3 py-[6px] text-gray-600 transition-all hover:bg-gray-300"
            >
              Faucet
            </a>
          </div>
        </div>
      </div>

      <div className="z-50 flex items-center justify-center mx-auto">
        <div className="relative cursor-pointer group">
          <div className="flex items-center justify-between">
            <a
              className="my-2 text-base font-medium menu-hover md:mx-1"
              onClick=""
            >
              Learn
            </a>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-3 h-3 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </div>

          <div className="absolute z-100 w-[150px] border border-borderColor flex-col bg-white py-2 shadow-xl hidden group-hover:flex items-start rounded-md group-hover:animate-opacity">
            <a
              href="https://0g.ai/blog"
              className="w-full px-3 py-[6px] text-gray-600 transition-all hover:bg-gray-300"
            >
              Blog
            </a>

            <a
              href="https://0g.ai/ama"
              className="w-full px-3 py-[6px] text-gray-600 transition-all hover:bg-gray-300"
            >
              AMAs
            </a>

            <a
              href="https://0g.ai/faq"
              className="w-full px-3 py-[6px] text-gray-600 transition-all hover:bg-gray-300"
            >
              FAQs
            </a>
          </div>
        </div>
      </div>

      <div className="z-50 flex items-center justify-center mx-auto">
        <div className="relative cursor-pointer group">
          <div className="flex items-center justify-between">
            <a
              className="menu-hover my-2 text-base font-medium text-[888888] md:mx-1"
              onClick=""
            >
              Ecosystem
            </a>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-3 h-3 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </div>

          <div className="absolute w-[150px] border border-borderColor flex-col bg-white py-2 shadow-xl hidden group-hover:flex items-start rounded-md group-hover:animate-opacity">
            <a
              href="https://0g.ai/community"
              className="w-full px-3 py-[6px] text-gray-600 transition-all hover:bg-gray-300"
            >
              Community
            </a>

            <a
              href="https://0g.ai/partners"
              className="w-full px-3 py-[6px] text-gray-600 transition-all hover:bg-gray-300"
            >
              Partners
            </a>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfe_-fBaNj93p2xkeWboTg492kTct36QUJURcJPLzRuv7YFfQ/viewform"
              className="w-full px-3 py-[6px] text-gray-600 transition-all hover:bg-gray-300"
            >
              Careers
            </a>

            <a
              href="https://0g.ai/mediakit"
              className="w-full px-3 py-[6px] text-gray-600 transition-all hover:bg-gray-300"
            >
              Media Kit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropHover;
