import Image from "next/image";

interface CardData {
  title: string;
  studio: string;
  houseType: string;
  modifiable: boolean;
  landDimensions: string;
  buildingArea: string;
  floors: number;
  bedrooms: number;
  designPrice: string;
  constructionPrice: string;
}

const CardConsultation: React.FC = () => {
  const cardData: CardData[] = [
    {
      title: "Omah Apik 3",
      studio: "Studio SAe",
      houseType: "Scandinavian",
      modifiable: true,
      landDimensions: "15 x 8m",
      buildingArea: "112m",
      floors: 2,
      bedrooms: 4,
      designPrice: "Rp. 32.500.000",
      constructionPrice: "Harga konstruksi mulai dari Rp 560.000.000",
    },
  ];

  return (
    <>
      {cardData.map((data, index) => (
        <div
          key={index}
          className="bg-white rounded-xl h-auto border lg:border-grey-100 gap-y-4 w-full p-4 flex flex-col"
        >
          <h2 className="text-2xl">{data.title}</h2>
          <div className="flex w-full items-center gap-x-3">
            <Image
              src="/icons/sae.svg"
              className="text-red-500"
              alt="sae"
              loading="lazy"
              width={30}
              height={30}
            />
            <p className="text-sm">{data.studio}</p>
          </div>
          <div className="flex flex-col gap-y-2 w-full">
            <div className="flex w-full justify-between">
              <p className="text-left text-sm w-full">Jenis Rumah</p>
              <p className="text-left text-sm w-full">{data.houseType}</p>
            </div>
            {data.modifiable && (
              <div className="flex w-full justify-start">
                <p className="text-left text-sm w-full">Tipe Desain</p>
                <div className="flex w-full items-center gap-x-2">
                  <Image
                    src="/icons/checklist.svg"
                    className="text-red-500"
                    alt="checklist"
                    loading="lazy"
                    width={11}
                    height={8}
                  />
                  <p className="text-left text-red-500 text-sm">
                    Dapat Dimodifikasi
                  </p>
                </div>
              </div>
            )}
            <hr className="border-1 border-slate-300 my-4" />
            <div className="flex w-full items-center gap-1 justify-between">
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
                <p className="text-sm">{data.landDimensions}</p>
              </div>
              <div className="flex text-grey-500 items-center justify-center gap-y-1.5 flex-col">
                <div className="flex items-center justify-center">
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
                <p className="text-sm">{data.buildingArea}</p>
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
                <p className="text-xs text-center text-slate-400">Lantai</p>
                <p className="text-sm">{data.floors}</p>
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
                <p className="text-sm">{data.bedrooms}</p>
              </div>
            </div>
            <hr className="border-1 border-slate-300 my-4 hidden lg:block" />
          </div>
          <a
            href="#"
            className="px-3 py-2 rounded-md inline-block items-center justify-center gap-x-2 bg-red-500 hover:bg-red-700 text-center text-white font-semibold w-full"
          >
            Konsultasi Sekarang
          </a>
        </div>
      ))}
    </>
  );
};

export default CardConsultation;
