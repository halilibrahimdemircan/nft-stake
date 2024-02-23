import { Outlet, Link } from "react-router-dom";
import Sign from "../../components/Sign";
import mbLogo from "../../images/mbLogo.png";

const Layout = () => {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Inventory",
      link: "/inventory",
    },
    // {
    //   name: "Contact",
    //   link: "/contact",
    // },
  ];
  return (
    <>
      <nav className="text-white px-[140px] h-[100px] py-4 bg-[] border border-[#383838] border-t-0 border-l-0 border-r-0 border-b-1 flex justify-between items-center">
        {/* <ul className="flex gap-2">
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.link}>
                  <div className="border px-4 py-2 rounded hover:bg-slate-100 hover:text-black cursor-pointer">
                    {item.name}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul> */}
        <Link to={"/"}>
          <img src={mbLogo} alt="" />
        </Link>
        <Sign />
      </nav>

      <div className="h-full w-full flex items-center justify-center text-white">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
