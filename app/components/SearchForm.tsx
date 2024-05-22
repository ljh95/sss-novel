import React from "react";

export const SearchForm = () => {
  return (
    <input
      className="w-full inline-block
      border-[1px] border-solid border-[#bbb]
      rounded-[8px]
      p-[4px] pl-[8px]
      "
      type="text"
      placeholder="좋아하는 소설을 검색해보세요!"
    />
  );
};
