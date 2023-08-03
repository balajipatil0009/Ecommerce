const Nav = () => {
  return (
    <div className="relative">
      <div className="bg-blue-600 w-full z-10 fixed top-0 flex justify-around left-0">
        <div className="flex justify-center my-2 py-2">
          <div className="w-13 mx-2">
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              className="w-[70px] "
              alt=""
            />
            <a href="#" className="text-[14px] italic text-slate-400 flex">
              Explore
              <span>Plus</span>
              <img
                width="10"
                className="h-3 mt-1 ml-0.5"
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
              ></img>
            </a>
          </div>

          <label className="relative block mx-2 w-96">
            <input
              className="h-9  placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm "
              placeholder="Search for products,brands and more"
              type="text"
              name="search"
            />

            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pt-0">
              <svg
                className="h-5 w-5 fill-slate-300"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#2874F1">
                  <path d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path>
                  <path d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path>
                  <path d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path>
                </g>
              </svg>
            </span>
          </label>
        </div>

        <div>
          <ul className="flex gap-4 mt-6 mr-8 text-cyan-50">
            <li className="border-2 p-1.5 px-5 -mt-2">Login</li>
            <li>Become Seller</li>
            <li className="flex">
              More
              <svg
                className="mt-2.5 ml-2 -rotate-90"
                width="4.7"
                height="8"
                viewBox="0 0 16 27"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                  fill="#fff"
                ></path>
              </svg>
            </li>
            <li className="flex">
              <svg
                className="mt-1 mx-1"
                width="14"
                height="14"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
                  fill="#fff"
                ></path>
              </svg>
              Cart
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
