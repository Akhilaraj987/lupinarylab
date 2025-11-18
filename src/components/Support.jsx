import support from "./images/support.png";
import expertTeam from "./images/expertTeam.png";
export default function Support() {
  const supportList = [
    "Technical Support",
    "Problem Resolution",
    "Professional Expert",
    "24/7 Premium Support",
  ];
  return (
    <div className="mt-[138px] flex justify-between ">
      <div className="primary-radial-gradient flex justify-center items-center w-[422px] h-[416px] rounded-[45px]">
        <img
          src={support}
          alt="Support"
          width={360}
          height={360}
          className=""
        />
      </div>
      <div>
        <h2 className="primary-gradient-text max-w-[450px] text-[45px] font-bold leading-[53px]">
          Reliable IT & Customer Support
        </h2>
        <p className="text-base text-[#565454] mt-[26px] leading-[30px] max-w-[393px]">
          We provide reliable, round-the-clock IT and customer support solutions
          to ensure smooth operations and enhanced client satisfaction.
        </p>
        <div className="grid grid-cols-2 gap">
          {supportList.map((item, index) => (
            <div key={index} className="flex items-center mt-4">
              <div className="p-2.5 rounded-[15px] shadow-lg">
                <img src={expertTeam} width={45} height={45} alt={item} />
              </div>
              <span className="ml-4 text-black text-base font-semibold">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
