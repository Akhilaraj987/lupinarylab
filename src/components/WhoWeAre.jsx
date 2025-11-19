import innovation from "./images/innovation.png";
import expertTeam from "./images/expertTeam.png";
import innovationBulb from "./images/innovationBulb.png";
export default function WhoWeAre() {
  return (
    <div className="grid mt-[100px] grid-cols-2 ml-10 ">
          <div>
            <p className="text-[#7D30FF]">WHO WE ARE</p>
            <h2 className="primary-gradient-text text-[45px] font-bold">
              Driving Innovation Through Technology
            </h2>
            <p className="text-[#56545] mt-[26px] max-w-[393px]">
              We are a future-focused global IT solutions company dedicated to
              transforming businesses through Affiliate Software, Blockchain
              Innovation, and AI-driven automation.
            </p>
            <div className="flex gap-10 mt-[27px]">
              <div>
                <div className="p-[17px] rounded-[15px] shadow-md">
                  <img
                    width={71}
                    height={71}
                    src={expertTeam}
                    alt="Expert team"
                  />
                </div>
                <p className="leading-[53px] text-center">Expert Team</p>
              </div>
              <div>
                <div className="p-[17px] rounded-[15px] shadow-md">
                  <img
                    width={71}
                    height={71}
                    src={innovationBulb}
                    alt="innovation bulb"
                  />
                </div>
                  <p className="leading-[53px] text-center">Smart Solutions</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="primary-radial-gradient relative w-[509px] h-[440px] rounded-[45px]">
              <img
                src={innovation}
                alt="Hero"
                width={580}
                height={870}
                className="top-[-180px] absolute"
              />
            </div>
          </div>
        </div>
  );
}