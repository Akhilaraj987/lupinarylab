import Button from "./common/Button";

export default function Growth() {
  const growthStatus = [
    {
      name: "Project Done",
      value: "15k+",
    },
    {
      name: "Happier customers",
      value: "12k+",
    },
    {
      name: "Member active",
      value: "8k+",
    },
    {
      name: "Years Experience",
      value: "10k+",
    },
  ];
  return (
    <div className="relative">
    <div className="mt-[100px] relative flex items-center pb-[100px] pl-[69px] pt-[62px] pr-[77px] rounded-[40px] justify-between primary-gradient">
      <div className="max-w-[611px]">
        <h2 className="text-[45px] font-bold text-white leading-[53px]">
          Empowering Growth Through Smart Innovation
        </h2>
        <p className="text-xs text-[#F9F9F9] mt-4 max-w-[379px]">
          We combine innovation, intelligence, and technology to elevate
          business performance across digital ecosystems. Our results-driven
          approach ensures growth, optimized efficiency, and lasting
          partnerships.
        </p>
      </div>
      <div>
        <Button text="Get started" type="parimary" className="text-white" />
      </div>
      
    </div>
    <div className="flex absolute  bottom-[-70px] w-full justify-center items-center">
        <div className="w-[70%] justify-between gap-10  flex">
        {growthStatus.map((item) => (
          <div className="bg-white rounded-[15px] shadow-lg pt-[18px] px-[26px]">
            <h3 className="text-[45px] font-bold text-[#4B1D99]">{item.value}</h3>
            <hr />
            <p className="text-base text-[#565454] truncate leading-[53px]">{item.name}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
