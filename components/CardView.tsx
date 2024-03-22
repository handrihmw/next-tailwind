import Image from "next/image";

interface Card {
  title: string;
  size: string;
  image: string;
}

const CardView: React.FC = () => {
  const cardData: Card[] = [
    {
      title: "Ruang Keluarga",
      size: "2.0 x 2.9",
      image: "/images/card-view-1.png",
    },
    {
      title: "Kamar Tidur",
      size: "4.0 x 3.4",
      image: "/images/card-view-2.png",
    },
    {
      title: "Ruang Makan & Dapur",
      size: "3.0 x 2.9",
      image: "/images/card-view-3.png",
    },
    {
      title: "Ruang Kerja",
      size: "2.0 x 2.9",
      image: "/images/card-view-1.png",
    },
    {
      title: "Kamar Tidur",
      size: "4.0 x 3.4",
      image: "/images/card-view-2.png",
    },
  ];

  return (
    <div className="flex flex-col gap-y-4 w-full">
      <h2 className="text-2xl font-semibold">Tampilan Rumah</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col h-auto w-full rounded-lg bg-white border border-grey-100 p-4"
          >
            <div className="flex justify-between h-full flex-col w-full gap-y-1">
              <div className="flex flex-col space-y-4 mb-3">
                <Image
                  src={card.image}
                  className="rounded-lg w-full h-[200px] object-cover"
                  alt="logo"
                  loading="lazy"
                  width={350}
                  height={200}
                />
              </div>
              <h2 className="text-base md:text-lg lg:text-xl">{card.title}</h2>
              <p className="text-sm text-slate-600">{card.size}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardView;
