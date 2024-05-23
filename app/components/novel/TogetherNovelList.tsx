"use client";

import React from "react";

export const TogetherNovelList = ({
  novelList,
}: {
  novelList: { title: string; image: string }[];
}) => {
  return (
    <div className="mt-[40px]">
      <h3 className="text-[20px] font-bold mb-[20px]">같이 추천하는 작품</h3>

      <div className="flex gap-[20px]">
        {novelList.map((n) => {
          return (
            <div className="flex flex-col justify-between" key={n.title}>
              <img src={n.image} alt={n.title} />
              <p className="text-[14px]">{n.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
