import Image from "next/image";

interface Card {
  title: string;
  star: string;
  review: string;
}

const CardReview: React.FC = () => {
  const cardData: Card[] = [
    {
      title: "Budi Setiadi",
      star: "4.5",
      review:
        "Desainnya sangat bagus dan pengirimannya cepat. Terima kasih Sobat Bangun",
    },
    {
      title: "Budi Setiadi",
      star: "4.5",
      review:
        "Desainnya sangat bagus dan pengirimannya cepat. Terima kasih Sobat Bangun",
    },
    {
      title: "Budi Setiadi",
      star: "4.5",
      review:
        "Desainnya sangat bagus dan pengirimannya cepat. Terima kasih Sobat Bangun",
    },
  ];

  return (
    <div className="flex flex-col gap-y-4 w-full">
      <h2 className="text-2xl font-semibold">Testimoni</h2>
      {cardData.map((data, index) => (
        <div key={index} className="flex items-start gap-x-2 mb-3">
          <Image
            src="/icons/user.svg"
            className="text-red-500"
            alt="user"
            loading="lazy"
            width={40}
            height={40}
          />
          <div className="flex flex-col gap-y-2">
            <div className="flex gap-x-2 items-center">
              <p className="text-base font-semibold">{data.title}</p>
              <div className="border-l border-l-slate-300 h-4"></div>
              <div className="flex items-center gap-x-1">
                <Image
                  src="/icons/star.svg"
                  alt="stars"
                  loading="lazy"
                  width={24}
                  height={24}
                />
                <p className="text-sm font-thin">{data.star}</p>
              </div>
            </div>
            <p className="text-base font-normal text-slate-400">
              {data.review}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardReview;
