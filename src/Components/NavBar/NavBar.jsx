import { NavBarMenu } from "../../mockData/data"
import { FaDumbbell } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";
const NavBar = () => {
    const [open , setOpen] = useState(false)
  return (
    <>
         <nav>
        <div className="container flex justify-between items-center py-2">
            {/* Logo section  */}
            <div className="text-2xl flex items-center gap-2 font-bold py-7 uppercase">
                <FaDumbbell/>
                <p>Coders</p>
                <p className="text-primary">Gym</p>
            </div>
             {/* Menu section */}
             <div className="hidden md:block">
                <ul className="flex items-center gap-6 text-gray-600">
                    {NavBarMenu.map((item) => {
                        return <li key={item.id}><a href={item.link} className="inline-block py-1 px-3 hover:text-primary font-semibold">{item.title}</a></li>
                    })}
                </ul>
             </div>
             {/* Icons section */}
             <div className="flex items-center gap-4">
                <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
                    <CiSearch className=""/>
                </button>
                <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
                    <PiShoppingCartThin className=""/>
                </button>
                <button className="hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block">Login</button>
             </div>
             {/* Mobile hamburger Menu section */}
             <div className="md:hidden" onClick={() => setOpen(!open)}>
                <MdMenu className="text-4xl"/>
             </div>
        </div>
    </nav>
    {/* Mobile SideBar section  */}
        <ResponsiveMenu  open={open}/>            
    </>
  )
}

export default NavBar
