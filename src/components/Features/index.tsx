import { getDictionary } from "@/app/[lang]/dictionaries";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import icons from "./featuresData";

const Features = async ({lang}) => {
  const t = await getDictionary(lang)

  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title={t.features.title}
            paragraph={t.features.desc}
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {t.features.features.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} icon={icons[feature.id]} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
