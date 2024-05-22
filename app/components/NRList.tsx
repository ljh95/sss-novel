import React, { ReactElement } from "react";

export const NRList = ({ children }: { children: ReactElement[] }) => {
  return <ul className="flex flex-col gap-[12px]">{children}</ul>;
};
