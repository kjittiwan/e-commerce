import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
function Header() {
  const { isOpen, setIsOpen, handleClose } = useContext(SidebarContext)
  return (
    <div className="bg-pink-200 flex justify-between items-center">
      <div>Header</div>
      <div onClick={() => setIsOpen(true)} >Open side</div>
    </div>
  );
}

export default Header;