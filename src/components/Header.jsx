import Button from "./common/Button";
import Logo from "./images/Logo";

export default function Header() {
  const title = [
    {
      name: "Home",
    },
    {
      name: "Services",
    },
    {
      name: "Meet Our Team",
    },
    {
      name: "Case Studies",
    },
    {
      name: "Blog",
    },
    {
      name: "Contact",
    },
  ];
  return (
    <div className="text-white flex justify-between item-center">
      <Logo />
      <div className="flex gap-[34px] items-center">
        {title.map((item, index) => (
          <h3 key={index} className="text-lg font-medium cursor-pointer">
            {item.name}
          </h3>
        ))}
        <Button type="primary" text="Get started" />
      </div>
    </div>
  );
}
// /* Rectangle 2 */

// position: absolute;
// width: 147px;
// height: 43px;
// left: 1009px;
// top: 29px;

// background: linear-gradient(90deg, #7D30FF 0%, #4B1D99 100%);
// border-radius: 10px;

// /* Rectangle 2 */

// position: absolute;
// width: 109px;
// height: 37px;
// right: 51px;
// bottom: 1269px;

// background: linear-gradient(90deg, #7D30FF 0%, #4B1D99 100%);
// border-radius: 8px;

// /* Rectangle 2 */

// position: absolute;
// width: 142px;
// height: 39px;
// left: 48px;
// bottom: 782px;

// background: linear-gradient(90deg, #7D30FF 0%, #4B1D99 100%);
// border-radius: 10px;
