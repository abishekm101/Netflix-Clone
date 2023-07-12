import React, {} from "react";
import { useFooterList } from "../context/Context";

const FooterList = () => {
  const { footerContent } = useFooterList();
  return <div>FooterList</div>;
};

export default FooterList;
