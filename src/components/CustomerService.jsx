import dummyuser from './images/dummyuser.png';
export default function CustomerService() {
  const reviews = [
    {
      review:
        "They built our token, NFT marketplace, and staking system exactly as we required. The platform runs smoothly, and the security audits were thorough and professional.",
        name: "Jessica Walsh",
        role:"Product Lead at MetaPlay Studios",
        profile:dummyuser
    },
    {
      review:
        "They built our token, NFT marketplace, and staking system exactly as we required. The platform runs smoothly, and the security audits were thorough and professional.",
        name: "Jessica Walsh",
        role:"Product Lead at MetaPlay Studios",
        profile:dummyuser
    },
    {
      review:
        "They built our token, NFT marketplace, and staking system exactly as we required. The platform runs smoothly, and the security audits were thorough and professional.",
        name: "Jessica Walsh",
        role:"Product Lead at MetaPlay Studios",
        profile:dummyuser
    }
  ];
  return (
    <div className="mt-[200px]">
      <h2 className="text-[45px] text-center font-bold leading-[53px] primary-gradient-text">
        Customer Reviews
      </h2>
      <div className='flex mt-[64px] gap-10'>
        {reviews.map((item, index) => (
          <div key={index} className="mt-10 bg-[#D9D9D9] rounded-[20px] px-4 pb-4 pt-7 ">
            <p className="text-base text-[#565454] leading-[30px]">
                {item.review}
            </p>
            <div className="flex items-center justify-between mt-6">
                <img src={item.profile} alt={item.name} width={60} height={60} className="rounded-full"/>
                <div className="ml-4">
                    <h3 className="text-lg font-bold text-[#4B1D99]">{item.name}</h3>
                    <p className="text-sm text-[#565454]">{item.role}</p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
