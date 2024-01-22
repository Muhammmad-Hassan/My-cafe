import React from "react";
import {Sidebar} from "./Sidebar";
import  {SidebarItem}  from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
import {  UsersRound ,ShoppingBag ,PersonStandingIcon, BadgeDollarSign,KeyRound , AlignVerticalJustifyEnd, Newspaper , LifeBuoy,Settings ,ShoppingCart} from "lucide-react";

function Icons() {
  return (
    <div className="" >
      <Sidebar>
        <Link to={"/"}><SidebarItem icon={<PersonStandingIcon size={20} />} text="Customers"/></Link>
        <Link to={"sales"}><SidebarItem icon={<ShoppingCart size={20} />} text="Sales" /></Link>
        <Link to={"suplliers"}><SidebarItem icon={<UsersRound size={20} />} text="Supplliers" /></Link>
        <Link to={"suplliers_purchases"}><SidebarItem icon={<ShoppingBag size={20} />} text="Purchase" /></Link>
        
        <Link to={"invoise_puschase"}><SidebarItem icon={<Newspaper size={20} />} text="Invoice" /></Link>
       <Link to={"make_sale"}> <SidebarItem icon={<BadgeDollarSign size={20} />} text="Make-sale" /></Link>
        {/* <SidebarItem icon={<AlignVerticalJustifyEnd size={20} />} text="Items" />
        <SidebarItem icon={<KeyRound size={20} />} text="Key-genrator" /> */}
        <hr className="my-3"/>
        <SidebarItem icon={<Settings size={20} />} text="Settings" />
        <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
      </Sidebar>
    </div>
  );
}

export default Icons;
