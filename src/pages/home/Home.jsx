import divider from '@/assets/icons/rad-divider-mob.svg';
import copy from '@/assets/icons/copy.svg';
import Card from '@/shared/components/app/Card';
import cards from '@/shared/data/cards';
// import mask from '@/assets/icons/mask.svg';

const Home = () => {
  return (
    <main className="mx-5">
      <section className="pt-10 px-3.5">
        <h1 className="text-3xl text-light font-medium uppercase tracking-tight text-center mb-1 md:mb-5 md:text-tablet xl:mb-5 xl:text-5xl font-oswald">
          press kit
        </h1>
        <div className="flex justify-center mb-3.5 md:mb-10">
          <img src={divider} alt="divider" className="flex md:w-[365px] md:h-[16px]" />
        </div>

        {/* -------  CARD SET ------------ */}
        <ul className="flex flex-col md:flex-row md:flex-wrap items-center gap-10 md:gap-[60px] md:max-w-full md:justify-center xl:w-[1044px] xl:mx-auto">
          {cards.map(({ src, alt, title, size }, index) => {
            return <Card key={index} src={src} alt={alt} title={title} size={size} />;
          })}
        </ul>
      </section>

      {/* ------- CONTACTS ------- */}
      <section className="py-[60px] md:pb-20 px-3.5">
        <h2 className="uppercase text-2xl text-center font-medium text-light font-oswald mb-5">
          contacts
        </h2>
        <div className="md:flex md:justify-center md:gap-[120px]">
          <div className="flex flex-col items-center">
            <h4 className="text-orange font-rubik text-baseHeight uppercase font-light mb-2 tracking-tightest">
              General Inquiries:
            </h4>
            <div className="flex mb-5 items-center md:mb-1.5">
              <p className="text-light font-rubik text-baseHeight font-normal flex">
                info@stalker2.com
              </p>
              <img src={copy} alt="copy" className="flex" />
            </div>
            <p className="hidden md:flex md:font-rubik md:font-normal md:text-copied md:text-center md:px-5 md:py-2 md:opacity-60 md:tracking-tight md:text-light md:bg-black md:rounded-[60px] md:border md:border-grey md:border-dashed">
              Copied
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-orange font-rubik text-baseHeight tracking-tightest uppercase font-light mb-2">
              Press Inquiries:
            </h4>
            <div className="flex items-center md:mb-1.5">
              <p className="text-light font-rubik text-baseHeight font-normal flex">
                press@stalker2.com
              </p>
              <img src={copy} alt="copy" className="flex" />
            </div>
            <p className="hidden md:flex md:font-rubik md:font-normal md:text-copied md:text-center md:px-5 md:py-2 md:opacity-60 md:tracking-tight md:text-light md:bg-black md:rounded-[60px] md:border md:border-grey md:border-dashed">
              Copied
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
