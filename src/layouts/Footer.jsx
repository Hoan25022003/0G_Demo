const Footer = () => (
  <footer className="bg-gradient-to-r from-secondColor to-[#FFAF90]">
    <div className="max-w-screen-xl px-10 mx-auto">
      <div className="flex flex-col gap-8 px-4 py-6 lg:py-8 md:grid-cols-5">
        <p className="text-[30px] md:text-[40px] leading-[45px] text-white text-center justify-center mt-5 md:mt-10 font-medium">
          Join the 0G Community and Unlock <br />
          Web3 Full Potential Today
        </p>

        <p className="justify-center text-base text-center text-white md:text-xl ">
          Discover the power of 0G and revolutionize your Web3 experience.
        </p>
        <div className="flex flex-row items-center justify-center gap-x-2 lg:gap-x-3">
          <button
            type="button"
            className="px-5 py-3 text-sm font-medium bg-white border rounded-full md:px-8 md:py-3 lg:text-xl text-hoverPrimaryColor"
          >
            Learn More
          </button>
          <button
            type="button"
            className="px-5 py-3 md:px-8 md:py-3 text-sm lg:text-xl font-medium text-white  bg-[#FF9B8B] rounded-full border border-white "
          >
            Get In Touch
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-5">
        <a
          href={"/"}
          className="flex items-start justify-start gap-x-3 lg:gap-x-5"
        >
          <img className="w-[90px]" src="0G-Logo-White.png" alt="" />
        </a>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-white uppercase">
            Develop
          </h2>
          <ul className="font-medium text-white">
            <li className="mb-4">
              <a
                href="https://0g.ai/build"
                className="transition-all hover:text-primary"
              >
                Build
              </a>
            </li>
            <li className="mb-4">
              <a
                href="https://0g.ai/testnet-guide"
                className="transition-all hover:text-primary"
              >
                Testnet
              </a>
            </li>
            <li className="mb-4">
              <a
                href="https://0g.ai/node-guide"
                className="transition-all hover:text-primary"
              >
                Run a node
              </a>
            </li>
            <li className="mb-4">
              <a
                href="https://faucet.0g.ai/"
                className="transition-all hover:text-primary"
              >
                Faucet
              </a>
            </li>
            <li className="mb-4">
              <a
                href="https://docs.0g.ai/0g-doc"
                className="transition-all hover:text-primary"
              >
                Docs
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
            Learn
          </h2>
          <ul className="font-medium text-white">
            <li className="mb-4">
              <a
                href="https://0g.ai/blog"
                className="transition-all hover:text-primary"
              >
                Blog
              </a>
            </li>
            <li className="mb-4">
              <a
                href="https://0g.ai/ama"
                className="transition-all hover:text-primary"
              >
                AMAs
              </a>
            </li>
            <li className="mb-4">
              <a
                href="https://0g.ai/faq"
                className="transition-all hover:text-primary"
              >
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
            Ecosystem
          </h2>
          <ul className="font-medium text-white dark:text-gray-400">
            <li className="mb-4">
              <a
                href="https://0g.ai/community"
                className="transition-all hover:text-primary"
              >
                Community
              </a>
            </li>
            <li className="mb-4">
              <a
                href="https://0g.ai/partners"
                className="transition-all hover:text-primary"
              >
                Partner
              </a>
            </li>
            <li className="mb-4">
              <a
                href="https://0g.ai/press"
                className="transition-all hover:text-primary"
              >
                Press
              </a>
            </li>
            <li className="mb-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfe_-fBaNj93p2xkeWboTg492kTct36QUJURcJPLzRuv7YFfQ/viewform"
                className="transition-all hover:text-primary"
              >
                Careers
              </a>
            </li>
            <li className="mb-4">
              <a
                href="https://0g.ai/mediakit"
                className="transition-all hover:text-primary"
              >
                Media kit
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-8 px-4 py-6 lg:py-8 gap-y-3 md:gap-y-5 md:mt-2">
        <h1 className="md:text-xl font-bold text-white text-base">Subscribe</h1>
        <p className="text-base text-white">
          Join our newsletter to stay up to date on features and releases.
        </p>

        <div className="w-full flex justify-start items-center">
          <form className="w-full mx-auto flex flex-row items-center gap-x-1 lg:gap-x-2">
            <div className="w-full">
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-full px-3 py-1 md:px-5 md:py-4"
                placeholder="name@email.com"
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-primaryColor font-medium rounded-full text-sm px-3 py-1 md:px-5 md:py-4 text-center"
            >
              Subscribe
            </button>
          </form>
        </div>

        <p className="text-sm text-white mt-1">
          By subscribing you agree to provide consent to receive updates from
          our company.
        </p>
      </div>
      <hr className="border-white sm:mx-auto mt-3 md:mt-6" />

      <div className="grid items-center justify-center grid-rows-2 gap-2 px-4 py-5 sm:flex sm:justify-between">
        <span className="text-sm text-white dark:text-gray-300 sm:text-center">
          © 2024 <a href="">XGroup</a>. All Rights Reserved.
        </span>

        <div className="flex justify-center space-x-5 md:mt-0 rtl:space-x-reverse">
          <a href="https://t.me/web3_0glabs">
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M 20.302734 2.984375 C 20.013769 2.996945 19.748583 3.080055 19.515625 3.171875 C 19.300407 3.256634 18.52754 3.5814726 17.296875 4.0976562 C 16.06621 4.61384 14.435476 5.2982348 12.697266 6.0292969 C 9.2208449 7.4914211 5.314238 9.1361259 3.3125 9.9785156 C 3.243759 10.007156 2.9645852 10.092621 2.65625 10.328125 C 2.3471996 10.564176 2.0039062 11.076462 2.0039062 11.636719 C 2.0039062 12.088671 2.2295201 12.548966 2.5019531 12.8125 C 2.7743861 13.076034 3.0504903 13.199244 3.28125 13.291016 L 3.28125 13.289062 C 4.0612776 13.599827 6.3906939 14.531938 6.9453125 14.753906 C 7.1420423 15.343433 7.9865895 17.867278 8.1875 18.501953 L 8.1855469 18.501953 C 8.3275588 18.951162 8.4659791 19.243913 8.6582031 19.488281 C 8.7543151 19.610465 8.8690398 19.721184 9.0097656 19.808594 C 9.0637596 19.842134 9.1235454 19.868148 9.1835938 19.892578 C 9.191962 19.896131 9.2005867 19.897012 9.2089844 19.900391 L 9.1855469 19.894531 C 9.2029579 19.901531 9.2185841 19.911859 9.2363281 19.917969 C 9.2652427 19.927926 9.2852873 19.927599 9.3242188 19.935547 C 9.4612233 19.977694 9.5979794 20.005859 9.7246094 20.005859 C 10.26822 20.005859 10.601562 19.710937 10.601562 19.710938 L 10.623047 19.695312 L 12.970703 17.708984 L 15.845703 20.369141 C 15.898217 20.443289 16.309604 21 17.261719 21 C 17.829844 21 18.279025 20.718791 18.566406 20.423828 C 18.853787 20.128866 19.032804 19.82706 19.113281 19.417969 L 19.115234 19.416016 C 19.179414 19.085834 21.931641 5.265625 21.931641 5.265625 L 21.925781 5.2890625 C 22.011441 4.9067171 22.036735 4.5369631 21.935547 4.1601562 C 21.834358 3.7833495 21.561271 3.4156252 21.232422 3.2226562 C 20.903572 3.0296874 20.591699 2.9718046 20.302734 2.984375 z M 19.908203 5.1738281 C 19.799442 5.7198576 17.33401 18.105877 17.181641 18.882812 L 13.029297 15.041016 L 10.222656 17.414062 L 11 14.375 C 11 14.375 16.362547 8.9468594 16.685547 8.6308594 C 16.945547 8.3778594 17 8.2891719 17 8.2011719 C 17 8.0841719 16.939781 8 16.800781 8 C 16.675781 8 16.506016 8.1197812 16.416016 8.1757812 C 15.272368 8.8887854 10.401283 11.664685 8.0058594 13.027344 C 7.8617016 12.96954 5.6973962 12.100458 4.53125 11.634766 C 6.6055146 10.76177 10.161156 9.2658083 13.472656 7.8730469 C 15.210571 7.142109 16.840822 6.4570977 18.070312 5.9414062 C 19.108158 5.5060977 19.649538 5.2807035 19.908203 5.1738281 z M 17.152344 19.025391 C 17.152344 19.025391 17.154297 19.025391 17.154297 19.025391 C 17.154252 19.025621 17.152444 19.03095 17.152344 19.03125 C 17.153615 19.024789 17.15139 19.03045 17.152344 19.025391 z"></path>
            </svg>
          </a>
          <a href="https://twitter.com/0G_labs">
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 50 50"
            >
              <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
            </svg>
          </a>
          <a href="https://discord.com/invite/0glabs">
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 21 16"
            >
              <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
            </svg>
          </a>
          <a href="https://github.com/0glabs/">
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 50 50"
            >
              <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
            </svg>
          </a>
          <a href="https://www.youtube.com/channel/UCp5nMw3iFhqVy9UpnGQ0hdQ">
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 50 50"
            >
              <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
