import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav className="bg-white text-slate-950 px-4 transition-all ease-in-out duration-200 w-full fixed z-50 top-0 border-b border-grey-300 md:border-b-0">
        <div className="px-3 md:px-6 py-4 flex justify-between items-center">
          <a target="_self" href="/">
            <Image
              src="/icons/logo.svg"
              alt="logo"
              loading="lazy"
              width={125}
              height={35}
            />
          </a>
          <ul className="hidden lg:flex justify-end items-center gap-6 text-slate-950">
            <li>
              <section className="inline-flex">
                <button className="text-sm font-semibold cursor-pointer menu-item inline-flex items-center gap-3">
                  Tentang Kami
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M6 9l6 6l6 -6"></path>
                  </svg>
                </button>
              </section>
            </li>
            <li>
              <section className="inline-flex">
                <button className="text-sm font-semibold cursor-pointer menu-item inline-flex items-center gap-3 text-red-500">
                  Produk & Layanan
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M6 9l6 6l6 -6"></path>
                  </svg>
                </button>
              </section>
            </li>
            <li>
              <a
                className="lg:flex hidden cursor-pointer hover:text-primary-600 text-sm font-semibold"
                href="/blog"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="lg:flex hidden cursor-pointer hover:text-primary-600 text-sm font-semibold"
                href="/faq"
              >
                FAQ
              </a>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              <section className="lg:flex hidden items-center gap-x-4">
                <a target="_self" className="font-medium" href="#">
                  Daftar
                </a>
                <a
                  className="rounded-md flex items-center justify-center font-semibold false px-3 py-2 bg-red-500 hover:bg-red-700 text-white"
                  target="_self"
                  aria-label=""
                  href="#"
                >
                  Masuk
                </a>
              </section>
              <svg
                className="block lg:hidden fill-black md:fill-white cursor-pointer hamburger-menu"
                width="22"
                height="15"
                viewBox="0 0 22 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.5 14.5H21.5V12.1667H0.5V14.5ZM0.5 8.66667H21.5V6.33333H0.5V8.66667ZM0.5 0.5V2.83333H21.5V0.5H0.5Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
