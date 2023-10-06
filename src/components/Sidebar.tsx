import { BiCodeAlt } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { BiAnalyse } from "react-icons/bi";
import { IoTicketOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { LiaCogSolid } from "react-icons/lia";
import { RiLogoutCircleLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="sidebar fixed top-0 left-0 bg-[var(--light)] w-[230px] h-full z-[2000] overflow-x-hidden duration-300 ease delay-0 md:w-[200px]">
      <a
        href="#"
        className="text-2xl font-bold h-14 flex items-center text-[#1976D2] z-[500] pb-5 box-content"
      >
        <BiCodeAlt className="min-w-[60px] flex justify-center text-4xl" />
        <div>
          <span className="text-[var(--dark)]">Asmr</span>Prog
        </div>
      </a>
      <ul className="w-full mt-12">
        <li className="h-12 bg-transparent ml-1.5 p-1 rounded-[48px_0_0_48px]">
          <a
            href="#"
            className="w-full h-full bg-[var(--light)] flex items-center rounded-[48px] text-base text-[var(--dark)] whitespace-nowrap overflow-x-hidden duration-300 ease delay-0"
          >
            <MdDashboard className="mx-1.5 min-w-[calc(60px - ((4px + 6px) * 2)] flex text-[1.6rem] justify-center" />
            Dashboard
          </a>
        </li>
        <li className="h-12 bg-transparent ml-1.5 p-1 rounded-[48px_0_0_48px]">
          <a
            href="#"
            className="w-full h-full bg-[var(--light)] flex items-center rounded-[48px] text-base text-[var(--dark)] whitespace-nowrap overflow-x-hidden duration-300 ease delay-0"
          >
            <AiOutlineShop className="mx-1.5 min-w-[calc(60px - ((4px + 6px) * 2)] flex text-[1.6rem] justify-center" />
            Shop
          </a>
        </li>
        <li className="h-12 ml-1.5 p-1 rounded-[48px_0_0_48px] bg-[var(--grey)] relative before:content-[''] before:absolute before:w-10 before:h-10 before:rounded-[50%] before:top-[-40px] before:right-0 before:shadow-[20px_20px_0_var(--grey)] before:z-[-1] after:content-[''] after:absolute after:w-10 after:h-10 after:rounded-[50%] after:bottom-[-40px] after:right-0 after:shadow-[20px_-20px_0_var(--grey)] after:z-[-1]">
          <a
            href="#"
            className="w-full h-full bg-[var(--light)] flex items-center rounded-[48px] text-base whitespace-nowrap overflow-x-hidden duration-300 ease delay-0 text-[var(--success)]"
          >
            <BiAnalyse className="mx-1.5 min-w-[calc(60px - ((4px + 6px) * 2)] flex text-[1.6rem] justify-center" />
            Analytics
          </a>
        </li>
        <li className="h-12 bg-transparent ml-1.5 p-1 rounded-[48px_0_0_48px]">
          <a
            href="#"
            className="w-full h-full bg-[var(--light)] flex items-center rounded-[48px] text-base text-[var(--dark)] whitespace-nowrap overflow-x-hidden duration-300 ease delay-0"
          >
            <IoTicketOutline className="mx-1.5 min-w-[calc(60px - ((4px + 6px) * 2)] flex text-[1.6rem] justify-center" />
            Tickets
          </a>
        </li>
        <li className="h-12 bg-transparent ml-1.5 p-1 rounded-[48px_0_0_48px]">
          <a
            href="#"
            className="w-full h-full bg-[var(--light)] flex items-center rounded-[48px] text-base text-[var(--dark)] whitespace-nowrap overflow-x-hidden duration-300 ease delay-0"
          >
            <FiUsers className="mx-1.5 min-w-[calc(60px - ((4px + 6px) * 2)] flex text-[1.6rem] justify-center" />
            Users
          </a>
        </li>
        <li className="h-12 bg-transparent ml-1.5 p-1 rounded-[48px_0_0_48px]">
          <a
            href="#"
            className="w-full h-full bg-[var(--light)] flex items-center rounded-[48px] text-base text-[var(--dark)] whitespace-nowrap overflow-x-hidden duration-300 ease delay-0"
          >
            <LiaCogSolid className="mx-1.5 min-w-[calc(60px - ((4px + 6px) * 2)] flex text-[1.6rem] justify-center" />
            Settings
          </a>
        </li>
      </ul>
      <ul className="w-full mt-12">
        <li className="h-12 bg-transparent ml-1.5 p-1 rounded-[48px_0_0_48px]">
          <a
            href="#"
            className="w-full h-full bg-[var(--light)] flex items-center rounded-[48px] text-base whitespace-nowrap overflow-x-hidden duration-300 ease delay-0 text-[var(--danger)]"
          >
            <RiLogoutCircleLine className="mx-1.5 min-w-[calc(60px - ((4px + 6px) * 2)] flex text-[1.6rem] justify-center" />
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
