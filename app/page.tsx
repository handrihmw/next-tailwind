import Hero from "@/components/Hero";
import CardDetail from "@/components/CardDetail";
import CardConsultation from "@/components/CardConsultation";
import CardReview from "@/components/CardReview";
import CardView from "@/components/CardView";
import Breadcrumb from "@/components/Breadcrumb";

export default function Home() {
  const breadcrumbItems = [
    { title: "Home", link: "#" },
    { title: "Layanan Desain", link: "#" },
    { title: "Omah Apik 3", link: "#" },
  ];

  return (
    <>
      <main>
        <Breadcrumb items={breadcrumbItems} />
        <Hero />
        <section className="py-6 gap-y-5 px-4 md:px-10 flex-col w-full h-auto mb-10 grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-span-9 flex flex-col gap-y-6">
            <CardView />
          </div>
          <div className="col-span-12 lg:col-span-3 flex flex-col gap-y-6">
            <CardConsultation />
            <CardReview />
          </div>
        </section>
        <CardDetail />
      </main>
    </>
  );
}
