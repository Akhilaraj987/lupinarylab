
export default function Card({ service }) {
  return (
    <div className="max-w-[337px] min-h-[417px] !p-[17px_18px_22px_33px] justify-between flex flex-col text-center items-center text-white rounded-[25px] primary-gradient">
      {service.logo}
      <h2 className="text-[28px] font-bold">{service.name}</h2>
      <p className="text-[17px] ">{service.description}</p>
      <a
        href={service.link}
        className="rounded-[10px] text-base h-[39px] border px-[13px] py-3"
      >
        Learn More
      </a>
    </div>
  );
}
