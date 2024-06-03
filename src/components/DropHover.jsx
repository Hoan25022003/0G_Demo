const DropHover = () => {
  return (
    <div className="hidden md:flex flex-row md:gap-x-5 z-100 justify-start">
      <div className="mx-auto flex items-center justify-center ">
        <div className="group relative cursor-pointer py-2">
          <div className="flex items-center justify-between">
            <a
              className="menu-hover my-2 py-2 text-base font-medium text-[888888] md:mx-1"
              onClick=""
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
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </div>

          <div className="absolute flex z-100 w-[200px] flex-col bg-white px-2 py-2 text-black shadow-xl invisible group-hover:visible items-start rounded-md">
            <a
              href="https://0g.ai/build"
              className=" block py-4 text-black md:mx-2 hover:w-full hover:bg-gray-300 hover:rounded-md hover:py-2 hover:mx-0 hover:px-2"
            >
              Build
            </a>

            <a
              href="https://0g.ai/testnet-guide"
              className="block py-4 text-black md:mx-2 hover:w-full hover:bg-gray-300 hover:rounded-md hover:py-2 hover:mx-0 hover:px-2"
            >
              Testnet
            </a>

            <a
              href="https://0g.ai/node-guide"
              className="block py-4 text-black md:mx-2 hover:w-full hover:bg-gray-300 hover:rounded-md hover:py-2 hover:mx-0 hover:px-2"
            >
              Run a Node
            </a>

            <a
              href="https://docs.0g.ai/0g-doc"
              className="block py-4 text-black md:mx-2 hover:w-full hover:bg-gray-300 hover:rounded-md hover:py-2 hover:mx-0 hover:px-2"
            >
              Docs
            </a>

            <a
              href="https://faucet.0g.ai/"
              className="block py-4 text-black md:mx-2 hover:w-full hover:bg-gray-300 hover:rounded-md hover:py-2 hover:mx-0 hover:px-2"
            >
              Faucet
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex items-center justify-center ">
        <div className="group relative cursor-pointer py-2">
          <div className="flex items-center justify-between">
            <a
              className="menu-hover my-2 py-2 text-base font-medium text-[888888] md:mx-1"
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
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </div>

          <div className="absolute flex z-100 w-[200px] flex-col bg-white px-2 py-2 text-black shadow-xl invisible group-hover:visible items-start rounded-md">
            <a
              href="https://0g.ai/blog"
              className=" block py-4 text-black md:mx-2 hover:w-full hover:bg-gray-300 hover:rounded-md hover:py-2 hover:mx-0 hover:px-2"
            >
              Blog
            </a>

            <a
              href="https://0g.ai/ama"
              className=" block py-4 text-black md:mx-2 hover:w-full hover:bg-gray-300 hover:rounded-md hover:py-2 hover:mx-0 hover:px-2"
            >
              AMAs
            </a>

            <a
              href="https://0g.ai/faq"
              className="block py-4 text-black md:mx-2 hover:w-full hover:bg-gray-300 hover:rounded-md hover:py-2 hover:mx-0 hover:px-2"
            >
              FAQs
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex items-center justify-center ">
        <div className="group relative cursor-pointer py-2">
          <div className="flex items-center justify-between">
            <a
              className="menu-hover my-2 py-2 text-base font-medium text-[888888] md:mx-1"
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
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </div>

          <div className="absolute flex z-100 w-[200px] flex-col bg-white px-2 py-2 text-black shadow-xl invisible group-hover:visible items-start rounded-md">
            <a
              href="https://0g.ai/community"
              className=" block py-4 text-black md:mx-2 hover:w-full hover:bg-gray-300 hover:rounded-md hover:py-2 hover:mx-0 hover:px-2"
            >
              Community
            </a>

            <a
              href="https://0g.ai/partners"
              className="  block py-4 text-black md:mx-2 hover:w-full hover:bg-gray-300 hover:rounded-md hover:py-2 hover:mx-0 hover:px-2"
            >
              Partners
            </a>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfe_-fBaNj93p2xkeWboTg492kTct36QUJURcJPLzRuv7YFfQ/viewform"
              className="  block py-4 text-black md:mx-2 hover:w-full hover:bg-gray-300 hover:rounded-md hover:py-2 hover:mx-0 hover:px-2"
            >
              Careers
            </a>

            <a
              href="https://0g.ai/mediakit"
              className="  block py-4 text-black md:mx-2 hover:w-full hover:bg-gray-300 hover:rounded-md hover:py-2 hover:mx-0 hover:px-2"
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
