import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampSiteProps {
  BgImage: string;
  title: string;
  peopleJoined: number;
  subtitle: string;
}

const CampSite = ({
  BgImage,
  title,
  subtitle,
  peopleJoined,
}: CampSiteProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${BgImage}
  bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl 
  `}
    >
      <div className="flex flex-col h-full w-full items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full p-4 bg-green-50">
            <Image alt="map" src="/folded-map.svg" height={28} width={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="text-white regular-14">{subtitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className="flex overflow-hidden -space-x-4">
            {PEOPLE_URL.map((url) => (
              <div key={url} className="rounded-full border-2 border-white">
                <Image alt="people" src={url} height={52} width={52} />
              </div>
            ))}
          </span>
          <p className="bold-16 md:bold:20 text-white">
            {peopleJoined}+ joined
          </p>
        </div>
      </div>
    </div>
  );
};
const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          BgImage="bg-bg-img-1"
          title="Campsite 1"
          peopleJoined={10}
          subtitle="Lorem ipsnjhja."
        />
        <CampSite
          BgImage="bg-bg-img-1"
          title="Campsite 1"
          peopleJoined={10}
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc scelerisque viverra."
        />
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6 ">
        <div className="bg-green-50 p-6 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative overflow-hidden w-full  rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost</strong> And not knowing the way..?
          </h2>
          <p className="regular-14 md:regular-16 text-white mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi necessitatibus, laborum dolorem eaque numquam minus, aliquid quibusdam mollitia nulla, nobis eveniet tempore inventore incidunt et ullam commodi nemo eligendi nisi.</p>
          <Image src='/quote.svg' alt="quotes" height={219} width={182} className="camp-quote"/>
        </div>
      </div>
    </section>
  );
};

export default Camp;
