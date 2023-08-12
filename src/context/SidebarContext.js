import { SiderContext } from "antd/es/layout/Sider";
import React, { createContext, useState } from "react";

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  // sidebar state
  const [isOpen, setIsOpen] = useState(false);
  // handle close
  const handleClose = () => {
    setIsOpen(false);
  };
  
  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;