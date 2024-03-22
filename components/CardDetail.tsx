import Image from "next/image";

interface Card {
  title: string;
  style: string;
  designer: string;
  landDimensions: string;
  buildingArea: string;
  floors: number;
  bedrooms: number;
  designPrice: string;
  constructionPrice: string;
  image: string;
}

const CardDetail: React.FC = () => {
  const cardData: Card[] = [
    {
      title: "Omah Apik 1",
      style: "Scandinavian",
      designer: "Studio SAe",
      landDimensions: "15x8m",
      buildingArea: "112m²",
      floors: 2,
      bedrooms: 4,
      designPrice: "Rp. 32.500.000",
      constructionPrice: "Harga konstruksi mulai dari Rp 560.000.000",
      image: "/images/card-1.png",
    },
    {
      title: "Omah Apik 2",
      style: "Scandinavian",
      designer: "Studio SAe",
      landDimensions: "15x8m",
      buildingArea: "112m²",
      floors: 2,
      bedrooms: 4,
      designPrice: "Rp. 32.500.000",
      constructionPrice: "Harga konstruksi mulai dari Rp 560.000.000",
      image: "/images/card-2.png",
    },
    {
      title: "Omah Apik 3",
      style: "Scandinavian",
      designer: "Studio SAe",
      landDimensions: "15x8m",
      buildingArea: "112m²",
      floors: 2,
      bedrooms: 4,
      designPrice: "Rp. 32.500.000",
      constructionPrice: "Harga konstruksi mulai dari Rp 560.000.000",
      image: "/images/card-3.png",
    },
    {
      title: "Omah Apik 4",
      style: "Scandinavian",
      designer: "Studio SAe",
      landDimensions: "15x8m",
      buildingArea: "112m²",
      floors: 2,
      bedrooms: 4,
      designPrice: "Rp. 32.500.000",
      constructionPrice: "Harga konstruksi mulai dari Rp 560.000.000",
      image: "/images/card-4.png",
    },
  ];

  return (
    <section className="flex py-6 gap-y-5 px-4 md:px-10 flex-col w-full h-auto mb-10">
      <div className="flex flex-col gap-y-4 w-full">
        <h2 className="text-2xl font-semibold">
          Desain Lainnya oleh Studio SAe
        </h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col h-auto w-full rounded-lg bg-white border border-slate-300 p-4"
            >
              <div className="flex justify-between h-full flex-col w-full gap-y-4">
                <div className="flex flex-col space-y-4">
                  <Image
                    src={card.image}
                    className="rounded-lg w-full h-[200px] object-cover"
                    alt="logo"
                    loading="lazy"
                    width={350}
                    height={200}
                  />
                  <div className="flex gap-x-2">
                    <h2 className="text-base md:text-lg lg:text-xl">
                      {card.title}
                    </h2>
                    <p className="bg-gray-100 px-3 md:px-4 text-xs rounded-full w-auto flex items-center justify-center">
                      {card.style}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-y-[26px]">
                  <div className="flex items-center gap-x-2">
                    <Image
                      src="/icons/sae.svg"
                      className="flex w-6 h-6 md:w-[28px] md:h-[28px] rounded-full object-fill bg-fill"
                      alt="logo"
                      loading="lazy"
                      width={28}
                      height={28}
                    />
                    <p className="text-sm md:text-base">{card.designer}</p>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex text-grey-500 items-center justify-center gap-y-1.5 flex-col">
                      <div className="h-[22px] flex items-center justify-center">
                        <Image
                          src="/icons/arrow.svg"
                          className="text-red-500"
                          alt="arrow"
                          loading="lazy"
                          width={24}
                          height={24}
                        />
                      </div>
                      <p className="text-xs text-center text-slate-400">
                        Dimensi Tanah
                      </p>
                      <p className="text-sm md:text-base text-black">
                        {card.landDimensions}
                      </p>
                    </div>
                    <div className="flex text-grey-500 items-center justify-center gap-y-1.5 flex-col">
                      <div className="h-[22px] flex items-center justify-center">
                        <Image
                          src="/icons/house-swap.svg"
                          className="text-red-500"
                          alt="house-swap"
                          loading="lazy"
                          width={24}
                          height={24}
                        />
                      </div>
                      <p className="text-xs text-center text-slate-400">
                        Luas Bangunan
                      </p>
                      <p className="text-sm md:text-base text-black">
                        {card.buildingArea}
                      </p>
                    </div>
                    <div className="flex text-grey-500 items-center justify-center gap-y-1.5 flex-col">
                      <div className="h-[22px] flex items-center justify-center">
                        <Image
                          src="/icons/stairs.svg"
                          className="text-red-500"
                          alt="stairs"
                          loading="lazy"
                          width={24}
                          height={24}
                        />
                      </div>
                      <p className="text-xs text-center text-slate-400">
                        Lantai
                      </p>
                      <p className="text-sm md:text-base text-black">
                        {card.floors}
                      </p>
                    </div>
                    <div className="flex text-grey-500 items-center justify-center gap-y-1.5 flex-col">
                      <div className="h-[22px] flex items-center justify-center">
                        <Image
                          src="/icons/bed.svg"
                          className="text-red-500"
                          alt="bed"
                          loading="lazy"
                          width={20}
                          height={20}
                        />
                      </div>
                      <p className="text-xs text-center text-slate-400">
                        Kamar Tidur
                      </p>
                      <p className="text-sm md:text-base text-black">
                        {card.bedrooms}
                      </p>
                    </div>
                  </div>
                  <hr className="text-grey-300" />
                  <div className="flex flex-col gap-y-1">
                    <p className="text-sm text-black">Harga Desain</p>
                    <h3 className="text-xl md:text-2xl font-semibold">
                      {card.designPrice}
                    </h3>
                    <p className="text-sm text-slate-400">
                      {card.constructionPrice}
                    </p>
                  </div>
                  <a
                    href="#"
                    className="px-3 py-2 rounded-md flex items-center justify-center gap-x-2 bg-white hover:bg-red-500 text-red-500 hover:text-white cursor-pointer border border-red-500 font-semibold w-full text-sm md:text-base"
                  >
                    Lihat Detail
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardDetail;
