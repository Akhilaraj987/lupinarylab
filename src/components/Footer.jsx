import ipsum from "./images/ipsum.png";
import ipsum1 from "./images/ipsum1.png";
import ipsum2 from "./images/ipsum2.png";
import ipsum3 from "./images/ipsum3.png";
import ipsum4 from "./images/ipsum4.png";
import ipsum5 from "./images/ipsum5.png";

export default function Footer() {
  const customers = [
    ipsum,
    ipsum1,
    ipsum2,
    ipsum3,
    ipsum4,
    ipsum5,
    ipsum,
    ipsum5,
    ipsum,
  ];
  return (
    <div className="grid grid-cols-2  pl-[122px] pr-[124px] py-10 mt-[78px] bg-[#D9D9D9] justify-center items-center">
      <h2 className="primary-gradient-text text-[45px] font-bold leading-[53px]">
        Join our 30,000+ Happy Customers
      </h2>
      <div className="grid grid-flow-col grid-rows-3 gap-4">
        {customers.map((logo, index) => (
          <div key={index}>
            <img src={logo} alt="happy customer logo" width={177} height={68} />
          </div>
        ))}
      </div>
    </div>
  );
}
