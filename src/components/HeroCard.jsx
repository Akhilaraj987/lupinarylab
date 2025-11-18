import Button from "./common/Button";
import HeroImages from "./images/HeroImages";

export default function HeroCard() {
  return (
    <div className="flex mt-10 justify-between">
      <div className="w-[474px]">
        <h1 className="text-[75px] leading-[74px] font-bold text-white">
          Where innovation meets experience.
        </h1>
        <p className="text-xl mt-[53px] leading-[33px] max-w-[474px] text-[#FAFAFA]">
          Transform your business with innovative Affiliate, Blockchain, and
          AI-powered solutions for smarter growth.
        </p>
        <Button type="primary" text="Discover more" className="mt-10" />
      </div>
      <div>
        <HeroImages />
      </div>
    </div>
  );
}
