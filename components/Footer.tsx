import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#012846] w-full px-4 md:px-12 py-8 md:py-10 overflow-x-hidden text-white">
        <div className="grid grid-cols-12 gap-8 lg:gap-4 mb-8 lg:mb-14">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex flex-col gap-y-5">
              <Image
                src="/icons/logo-white.svg"
                alt="logo"
                loading="lazy"
                width={170}
                height={48}
              />
              <p className="text-base tracking-wide leading-snug w-[650px] max-w-full">
                SobatBangun adalah platform digital dari SIG yang bergerak
                dengan misi mengembangkan proses pembangunan dan renovasi rumah
                secara lebih baik serta berkelanjutan.
              </p>
              <div className="flex items-center gap-3.5">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM18.59 6L12.71 11.88C12.617 11.9737 12.5064 12.0481 12.3846 12.0989C12.2627 12.1497 12.132 12.1758 12 12.1758C11.868 12.1758 11.7373 12.1497 11.6154 12.0989C11.4936 12.0481 11.383 11.9737 11.29 11.88L5.41 6H18.59ZM20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V7.41L9.88 13.29C10.4425 13.8518 11.205 14.1674 12 14.1674C12.795 14.1674 13.5575 13.8518 14.12 13.29L20 7.41V17Z"
                    fill="white"
                  />
                </svg>

                <a href="mailto:tanya.sobatbangun@sig.id" className="underline">
                  tanya.sobatbangun@sig.id
                </a>
              </div>
              <div className="hidden md:block">
                <p className="mb-4">Sosial Media :</p>
                <div className="flex gap-x-6">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center transition-all ease-in-out duration-300 bg-white  hover:bg-slate-700 text-slate-700 hover:text-white w-8 h-8 md:w-12 md:h-12 rounded-full"
                    href="#"
                    aria-label="instagram"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.3183118,0.0772036939 C18.5358869,0.132773211 19.3775594,0.311686093 20.156489,0.614412318 C20.9357539,0.917263935 21.5259307,1.30117806 22.1124276,1.88767349 C22.6988355,2.47414659 23.0827129,3.06422396 23.3856819,3.84361655 C23.688357,4.62263666 23.8672302,5.46418415 23.9227984,6.68172489 C23.9916356,8.19170553 24,8.72394829 24,11.9999742 C24,15.2760524 23.9916355,15.808302 23.9227954,17.3182896 C23.8672306,18.5358038 23.6883589,19.3773584 23.3855877,20.1566258 C23.0826716,20.9358162 22.6987642,21.5259396 22.1124276,22.1122749 C21.5259871,22.6987804 20.9357958,23.0827198 20.1563742,23.3856323 C19.3772192,23.6883583 18.5357324,23.8672318 17.3183209,23.9227442 C15.8086874,23.9916325 15.2765626,24 12,24 C8.72343739,24 8.19131258,23.9916325 6.68172382,23.9227463 C5.46426077,23.8672314 4.62270711,23.6883498 3.84342369,23.3855738 C3.0641689,23.0827004 2.47399369,22.6987612 1.88762592,22.1123283 C1.30117312,21.525877 0.91721975,20.9357071 0.614318116,20.1563835 C0.311643016,19.3773633 0.132769821,18.5358159 0.0772038909,17.3183251 C0.0083529426,15.8092887 0,15.2774634 0,11.9999742 C0,8.7225328 0.00835296697,8.19071076 0.0772047368,6.68165632 C0.132769821,5.46418415 0.311643016,4.62263666 0.614362729,3.84350174 C0.91719061,3.06430165 1.30113536,2.4741608 1.88757245,1.88772514 C2.47399369,1.30123879 3.0641689,0.917299613 3.84345255,0.614414972 C4.62236201,0.311696581 5.46409415,0.132773979 6.68163888,0.0772035898 C8.19074867,0.00835221992 8.72252573,0 12,0 C15.2774788,0 15.8092594,0.00835235053 17.3183118,0.0772036939 Z M12,2.66666667 C8.75959504,2.66666667 8.26400713,2.67445049 6.80319929,2.74109814 C5.87614637,2.78341009 5.31952221,2.90172878 4.80947575,3.09995521 C4.37397765,3.26922052 4.09725505,3.44924273 3.77324172,3.77329203 C3.44916209,4.09737087 3.26913181,4.37408574 3.09996253,4.80937168 C2.90169965,5.31965737 2.78340891,5.87618164 2.74109927,6.80321713 C2.67445122,8.26397158 2.66666667,8.75960374 2.66666667,11.9999742 C2.66666667,15.2403924 2.67445121,15.7360281 2.74109842,17.1967643 C2.78340891,18.1238184 2.90169965,18.6803426 3.09990404,19.1904778 C3.26914133,19.6259017 3.44919889,19.9026659 3.77329519,20.2267614 C4.09725505,20.5507573 4.37397765,20.7307795 4.80932525,20.8999863 C5.31971515,21.0982887 5.87621193,21.2165784 6.80323907,21.2588497 C8.26460439,21.3255353 8.76051223,21.3333333 12,21.3333333 C15.2394878,21.3333333 15.7353956,21.3255353 17.1968056,21.2588476 C18.123775,21.216579 18.6802056,21.0982995 19.1905083,20.9000309 C19.6260288,20.7307713 19.9027426,20.5507596 20.2267583,20.226708 C20.5507492,19.9027179 20.7308046,19.6259456 20.9000375,19.1906283 C21.0983009,18.6803412 21.2165908,18.1238118 21.2588986,17.196779 C21.3255376,15.7350718 21.3333333,15.2390126 21.3333333,11.9999742 C21.3333333,8.76098665 21.3255376,8.26493375 21.2589016,6.80323567 C21.2165911,5.87618164 21.0983004,5.31965737 20.9001178,4.80957831 C20.7308131,4.37403932 20.550774,4.09729207 20.2267583,3.77324038 C19.9027658,3.44924868 19.6260264,3.26922777 19.1905015,3.09996643 C18.6803988,2.90171817 18.1238378,2.78341062 17.1967608,2.74109868 C15.7359966,2.67445057 15.2404012,2.66666667 12,2.66666667 Z M12,18.2222222 C8.56356156,18.2222222 5.77777778,15.4364384 5.77777778,12 C5.77777778,8.56356156 8.56356156,5.77777778 12,5.77777778 C15.4364384,5.77777778 18.2222222,8.56356156 18.2222222,12 C18.2222222,15.4364384 15.4364384,18.2222222 12,18.2222222 Z M12,15.5555556 C13.9636791,15.5555556 15.5555556,13.9636791 15.5555556,12 C15.5555556,10.0363209 13.9636791,8.44444444 12,8.44444444 C10.0363209,8.44444444 8.44444444,10.0363209 8.44444444,12 C8.44444444,13.9636791 10.0363209,15.5555556 12,15.5555556 Z M18.2222222,7.11111111 C17.4858426,7.11111111 16.8888889,6.51415744 16.8888889,5.77777778 C16.8888889,5.04139811 17.4858426,4.44444444 18.2222222,4.44444444 C18.9586019,4.44444444 19.5555556,5.04139811 19.5555556,5.77777778 C19.5555556,6.51415744 18.9586019,7.11111111 18.2222222,7.11111111 Z"></path>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center transition-all ease-in-out duration-300 bg-white  hover:bg-slate-700 text-slate-700 hover:text-white w-8 h-8 md:w-12 md:h-12 rounded-full"
                    href="#"
                    aria-label="facebook"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.94474914,22 L9.94474914,13.1657526 L7,13.1657526 L7,9.48481614 L9.94474914,9.48481614 L9.94474914,6.54006699 C9.94474914,3.49740494 11.8713513,2 14.5856738,2 C15.8857805,2 17.0033128,2.09717672 17.3287076,2.13987558 L17.3287076,5.32020466 L15.4462767,5.32094085 C13.9702212,5.32094085 13.6256856,6.02252733 13.6256856,7.05171716 L13.6256856,9.48481614 L17.306622,9.48481614 L16.5704347,13.1657526 L13.6256856,13.1657526 L13.6845806,22"
                      ></path>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center transition-all ease-in-out duration-300 bg-white  hover:bg-slate-700 text-slate-700 hover:text-white w-8 h-8 md:w-12 md:h-12 rounded-full"
                    href="#"
                    aria-label="youtube"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.522,15.553 L9.52125,8.80975 L16.00575,12.193 L9.522,15.553 Z M23.76,7.64125 C23.76,7.64125 23.52525,5.9875 22.806,5.25925 C21.89325,4.303 20.87025,4.2985 20.4015,4.243 C17.043,4 12.00525,4 12.00525,4 L11.99475,4 C11.99475,4 6.957,4 3.5985,4.243 C3.129,4.2985 2.10675,4.303 1.19325,5.25925 C0.474,5.9875 0.24,7.64125 0.24,7.64125 C0.24,7.64125 0,9.58375 0,11.5255 L0,13.3465 C0,15.289 0.24,17.23075 0.24,17.23075 C0.24,17.23075 0.474,18.8845 1.19325,19.61275 C2.10675,20.569 3.306,20.539 3.84,20.63875 C5.76,20.82325 12,20.88025 12,20.88025 C12,20.88025 17.043,20.87275 20.4015,20.62975 C20.87025,20.5735 21.89325,20.569 22.806,19.61275 C23.52525,18.8845 23.76,17.23075 23.76,17.23075 C23.76,17.23075 24,15.289 24,13.3465 L24,11.5255 C24,9.58375 23.76,7.64125 23.76,7.64125 L23.76,7.64125 Z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <div className="flex flex-col basis-2/4 text-white">
              <p className="font-bold mb-6 text-xl">Produk Layanan</p>
              <div className="flex flex-col gap-y-4 ">
                <a
                  target="_self"
                  className="transition-all ease-in-out duration-200 text-white hover:text-slate-400"
                  href="/layanan"
                >
                  Renovasi
                </a>
                <a
                  target="_self"
                  className="transition-all ease-in-out duration-200 text-white hover:text-slate-400"
                  href="/layanan/bangun-rumah"
                >
                  Bangun Rumah
                </a>
                <a
                  target="_self"
                  className="transition-all ease-in-out duration-200 text-white hover:text-slate-400"
                  href="/layanan/desain"
                >
                  Layanan Desain
                </a>
                <a
                  target="_self"
                  className="transition-all ease-in-out duration-200 text-white hover:text-slate-400"
                  href="/layanan/teknologi-tambahan"
                >
                  Teknologi Tambahan
                </a>
                <a
                  target="_self"
                  className="transition-all ease-in-out duration-200 text-white hover:text-slate-400"
                  href="/material"
                >
                  Beli Material
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <div className="flex flex-col basis-2/4">
              <p className="font-bold mb-6 text-xl">Tentang Kami</p>
              <div className="flex flex-col gap-y-4 ">
                <a
                  target="_self"
                  className="transition-all ease-in-out duration-200 text-white hover:text-slate-400"
                  href="/tentang-kami"
                >
                  Tentang SobatBangun
                </a>
                <a
                  target="_self"
                  className="transition-all ease-in-out duration-200 text-white hover:text-slate-400"
                  href="/kebijakan-privasi"
                >
                  Kebijakan dan Privasi
                </a>
                <a
                  target="_self"
                  className="transition-all ease-in-out duration-200 text-white hover:text-slate-400"
                  href="/syarat-dan-ketentuan"
                >
                  Syarat dan Ketentuan
                </a>
                <a
                  target="_self"
                  className="transition-all ease-in-out duration-200 text-white hover:text-slate-400"
                  href="/faq"
                >
                  FAQ
                </a>
                <a
                  target="_self"
                  className="transition-all ease-in-out duration-200 text-white hover:text-slate-400"
                  href="#"
                >
                  Daftar Menjadi Mitra
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <p className="font-semibold mb-1 text-base">Kredit Bangun Rumah</p>
            <div className="flex items-center gap-x-2">
              <a
                target="_blank"
                className=""
                href="#"
              >
                <Image
                  src="/icons/mandiri.svg"
                  alt="logo mandiri"
                  loading="lazy"
                  width={52}
                  height={52}
                />
              </a>
              <a
                target="_blank"
                className=""
                href="#"
              >
                <Image
                  src="/icons/btn.svg"
                  alt="logo btn"
                  loading="lazy"
                  width={52}
                  height={52}
                />
              </a>
              <a
                target="_blank"
                href="#"
              >
                <Image
                  src="/icons/bni.svg"
                  alt="logo bni"
                  loading="lazy"
                  width={52}
                  height={52}
                />
              </a>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <p className="font-semibold mb-1 text-base">
              Tunai Via Bank Transfer
            </p>
            <div className="flex items-center gap-x-2">
              <Image
                src="/icons/mandiri.svg"
                alt="logo mandiri"
                loading="lazy"
                width={52}
                height={52}
              />
              <Image
                src="/icons/bri.svg"
                alt="logo bri"
                loading="lazy"
                width={52}
                height={52}
              />
              <Image
                src="/icons/bni.svg"
                alt="logo bni"
                loading="lazy"
                width={52}
                height={52}
              />
              <Image
                src="/icons/permata.svg"
                alt="logo permata"
                loading="lazy"
                width={52}
                height={52}
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <p className="font-semibold mb-1 text-base">Kartu Kredit</p>
            <div className="flex items-center gap-x-2">
              <Image
                src="/icons/visa.svg"
                alt="logo visa"
                loading="lazy"
                width={52}
                height={52}
              />
              <Image
                src="/icons/mastercard.svg"
                alt="logo mastercard"
                loading="lazy"
                width={52}
                height={52}
              />
              <Image
                src="/icons/jcb.svg"
                alt="logo jcb"
                loading="lazy"
                width={52}
                height={52}
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <p className="font-semibold mb-1 text-base">
              Rekan Teknologi Tambahan
            </p>
            <div className="flex items-center gap-x-2">
              <Image
                src="/icons/asco.svg"
                alt="logo asco"
                loading="lazy"
                width={64}
                height={64}
              />
              <Image
                src="/icons/ineco-solar.svg"
                alt="logo ineco solar"
                loading="lazy"
                width={65}
                height={25}
              />
              <Image
                src="/icons/adidaya.svg"
                alt="logo adidaya"
                loading="lazy"
                width={55}
                height={55}
              />
              <Image
                src="/icons/agra-surya.svg"
                alt="logo agra surya"
                loading="lazy"
                width={48}
                height={48}
              />
            </div>
          </div>
        </div>
        <div className="block md:hidden">
          <p className="mb-4">Sosial Media :</p>
          <div className="flex gap-x-6">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center transition-all ease-in-out duration-300 bg-white  hover:bg-slate-700 text-slate-700 hover:text-white w-8 h-8 md:w-12 md:h-12 rounded-full"
              href="#"
              aria-label="instagram"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.3183118,0.0772036939 C18.5358869,0.132773211 19.3775594,0.311686093 20.156489,0.614412318 C20.9357539,0.917263935 21.5259307,1.30117806 22.1124276,1.88767349 C22.6988355,2.47414659 23.0827129,3.06422396 23.3856819,3.84361655 C23.688357,4.62263666 23.8672302,5.46418415 23.9227984,6.68172489 C23.9916356,8.19170553 24,8.72394829 24,11.9999742 C24,15.2760524 23.9916355,15.808302 23.9227954,17.3182896 C23.8672306,18.5358038 23.6883589,19.3773584 23.3855877,20.1566258 C23.0826716,20.9358162 22.6987642,21.5259396 22.1124276,22.1122749 C21.5259871,22.6987804 20.9357958,23.0827198 20.1563742,23.3856323 C19.3772192,23.6883583 18.5357324,23.8672318 17.3183209,23.9227442 C15.8086874,23.9916325 15.2765626,24 12,24 C8.72343739,24 8.19131258,23.9916325 6.68172382,23.9227463 C5.46426077,23.8672314 4.62270711,23.6883498 3.84342369,23.3855738 C3.0641689,23.0827004 2.47399369,22.6987612 1.88762592,22.1123283 C1.30117312,21.525877 0.91721975,20.9357071 0.614318116,20.1563835 C0.311643016,19.3773633 0.132769821,18.5358159 0.0772038909,17.3183251 C0.0083529426,15.8092887 0,15.2774634 0,11.9999742 C0,8.7225328 0.00835296697,8.19071076 0.0772047368,6.68165632 C0.132769821,5.46418415 0.311643016,4.62263666 0.614362729,3.84350174 C0.91719061,3.06430165 1.30113536,2.4741608 1.88757245,1.88772514 C2.47399369,1.30123879 3.0641689,0.917299613 3.84345255,0.614414972 C4.62236201,0.311696581 5.46409415,0.132773979 6.68163888,0.0772035898 C8.19074867,0.00835221992 8.72252573,0 12,0 C15.2774788,0 15.8092594,0.00835235053 17.3183118,0.0772036939 Z M12,2.66666667 C8.75959504,2.66666667 8.26400713,2.67445049 6.80319929,2.74109814 C5.87614637,2.78341009 5.31952221,2.90172878 4.80947575,3.09995521 C4.37397765,3.26922052 4.09725505,3.44924273 3.77324172,3.77329203 C3.44916209,4.09737087 3.26913181,4.37408574 3.09996253,4.80937168 C2.90169965,5.31965737 2.78340891,5.87618164 2.74109927,6.80321713 C2.67445122,8.26397158 2.66666667,8.75960374 2.66666667,11.9999742 C2.66666667,15.2403924 2.67445121,15.7360281 2.74109842,17.1967643 C2.78340891,18.1238184 2.90169965,18.6803426 3.09990404,19.1904778 C3.26914133,19.6259017 3.44919889,19.9026659 3.77329519,20.2267614 C4.09725505,20.5507573 4.37397765,20.7307795 4.80932525,20.8999863 C5.31971515,21.0982887 5.87621193,21.2165784 6.80323907,21.2588497 C8.26460439,21.3255353 8.76051223,21.3333333 12,21.3333333 C15.2394878,21.3333333 15.7353956,21.3255353 17.1968056,21.2588476 C18.123775,21.216579 18.6802056,21.0982995 19.1905083,20.9000309 C19.6260288,20.7307713 19.9027426,20.5507596 20.2267583,20.226708 C20.5507492,19.9027179 20.7308046,19.6259456 20.9000375,19.1906283 C21.0983009,18.6803412 21.2165908,18.1238118 21.2588986,17.196779 C21.3255376,15.7350718 21.3333333,15.2390126 21.3333333,11.9999742 C21.3333333,8.76098665 21.3255376,8.26493375 21.2589016,6.80323567 C21.2165911,5.87618164 21.0983004,5.31965737 20.9001178,4.80957831 C20.7308131,4.37403932 20.550774,4.09729207 20.2267583,3.77324038 C19.9027658,3.44924868 19.6260264,3.26922777 19.1905015,3.09996643 C18.6803988,2.90171817 18.1238378,2.78341062 17.1967608,2.74109868 C15.7359966,2.67445057 15.2404012,2.66666667 12,2.66666667 Z M12,18.2222222 C8.56356156,18.2222222 5.77777778,15.4364384 5.77777778,12 C5.77777778,8.56356156 8.56356156,5.77777778 12,5.77777778 C15.4364384,5.77777778 18.2222222,8.56356156 18.2222222,12 C18.2222222,15.4364384 15.4364384,18.2222222 12,18.2222222 Z M12,15.5555556 C13.9636791,15.5555556 15.5555556,13.9636791 15.5555556,12 C15.5555556,10.0363209 13.9636791,8.44444444 12,8.44444444 C10.0363209,8.44444444 8.44444444,10.0363209 8.44444444,12 C8.44444444,13.9636791 10.0363209,15.5555556 12,15.5555556 Z M18.2222222,7.11111111 C17.4858426,7.11111111 16.8888889,6.51415744 16.8888889,5.77777778 C16.8888889,5.04139811 17.4858426,4.44444444 18.2222222,4.44444444 C18.9586019,4.44444444 19.5555556,5.04139811 19.5555556,5.77777778 C19.5555556,6.51415744 18.9586019,7.11111111 18.2222222,7.11111111 Z"></path>
              </svg>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center transition-all ease-in-out duration-300 bg-white  hover:bg-slate-700 text-slate-700 hover:text-white w-8 h-8 md:w-12 md:h-12 rounded-full"
              href="#"
              aria-label="facebook"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M9.94474914,22 L9.94474914,13.1657526 L7,13.1657526 L7,9.48481614 L9.94474914,9.48481614 L9.94474914,6.54006699 C9.94474914,3.49740494 11.8713513,2 14.5856738,2 C15.8857805,2 17.0033128,2.09717672 17.3287076,2.13987558 L17.3287076,5.32020466 L15.4462767,5.32094085 C13.9702212,5.32094085 13.6256856,6.02252733 13.6256856,7.05171716 L13.6256856,9.48481614 L17.306622,9.48481614 L16.5704347,13.1657526 L13.6256856,13.1657526 L13.6845806,22"
                ></path>
              </svg>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center transition-all ease-in-out duration-300 bg-white  hover:bg-slate-700 text-slate-700 hover:text-white w-8 h-8 md:w-12 md:h-12 rounded-full"
              href="#"
              aria-label="youtube"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M9.522,15.553 L9.52125,8.80975 L16.00575,12.193 L9.522,15.553 Z M23.76,7.64125 C23.76,7.64125 23.52525,5.9875 22.806,5.25925 C21.89325,4.303 20.87025,4.2985 20.4015,4.243 C17.043,4 12.00525,4 12.00525,4 L11.99475,4 C11.99475,4 6.957,4 3.5985,4.243 C3.129,4.2985 2.10675,4.303 1.19325,5.25925 C0.474,5.9875 0.24,7.64125 0.24,7.64125 C0.24,7.64125 0,9.58375 0,11.5255 L0,13.3465 C0,15.289 0.24,17.23075 0.24,17.23075 C0.24,17.23075 0.474,18.8845 1.19325,19.61275 C2.10675,20.569 3.306,20.539 3.84,20.63875 C5.76,20.82325 12,20.88025 12,20.88025 C12,20.88025 17.043,20.87275 20.4015,20.62975 C20.87025,20.5735 21.89325,20.569 22.806,19.61275 C23.52525,18.8845 23.76,17.23075 23.76,17.23075 C23.76,17.23075 24,15.289 24,13.3465 L24,11.5255 C24,9.58375 23.76,7.64125 23.76,7.64125 L23.76,7.64125 Z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-start md:justify-between md:items-center mt-10">
          <div className="flex justify-start md:justify-center items-center space-x-4">
            <p className="font-primary text-sm font-normal">
              Dipersembahkan oleh:
            </p>
            <Image
              src="/icons/sig.svg"
              alt="logo sig"
              loading="lazy"
              width={70}
              height={40}
            />
          </div>
          <p className="font-primary text-sm font-thin tracking-wide mt-10 md:mt-0">
            Copyright © 2023 SobatBangun. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
