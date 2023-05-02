import { createContext, useState, useEffect } from "react";

type SidebarProviderProps = {
  children: React.ReactNode,
}
export const SidebarContext = createContext();
const SidebarProvider = ({ children } : SidebarProviderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <SidebarContext.Provider value={{isOpen, setIsOpen, handleClose}}>{ children }</SidebarContext.Provider>
  )
}

export default SidebarProvider