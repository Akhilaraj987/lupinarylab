import Button from "./common/Button";
import DevTools from "./devTools";

export default function Expertice() {
  const role = [
    "Frontend",
    "Backend",
    "Mobile",
    "DevOps & Cloud",
    "Thirdparty Integration",
  ];
  return (
    <div className="relative z-30 w-full mt-[248px] pt-[100px]">
      <div className="primary-blur-div absolute w-full h-10 mt-30"></div>
      <div className="grid grid-cols-2 ">
        <div>
          <p className="uppercase text-white">our expertice on</p>
          <h2 className="text-[45px] font-bold text-white leading-[53px] max-w-[588px]">
            Popular Website & Mobile App Technologies for MVP Development
          </h2>
          <p className="mt-[23px] max-w-[393px] text-[#FAFAFA] leading-[30px]">
            We are a future-focused global IT solutions company dedicated to
            transforming businesses through Affiliate Software, Blockchain
            Innovation, and AI-driven automation.
          </p>

          <div className="">
            <div class="w-full flex mt-[47px]">
              <div class="grid gap-4 text-white">
                <div class="grid grid-cols-3 gap-4">
                  {role.slice(0, 3).map((item, index) => (
                    <button
                      key={index}
                      class="px-6 py-3 hover:bg-[#7D30FF] rounded-xl  border border-white/40"
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <div class="grid grid-cols-2 gap-4">
                  {role.slice(3, 5).map((item, index) => (
                    <button
                      key={index}
                      class="px-6 py-3 rounded-xl bg-transparent border border-white/40"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <DevTools />
        </div>
      </div>

      <div className="mt-[124px] max-w-[1034px] h-[366px] w-full absolute digital-transformation-card rounded-[40px] pt-[38px] px-[46px] pb-[52px]">
        <h2 className="text-[45px] font-bold text-white max-w-[519px]">
          Start Your Digital Transformation Today
        </h2>
        <p className="text-base max-w-[393px] leading-[30px] text-[#FAFAFA]">
          Partner with us to leverage Affiliate Software, Blockchain, and AI
          automation to streamline operations and drive growth.
        </p>
        <Button type="primary" text="Get Started " className="mt-6" />
      </div>
    </div>
  );
}
