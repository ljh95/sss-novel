"use client";

import { useRouter } from "next/navigation";
import { Novel } from "../const/type";
import { CommentButton } from "./CommentButton";

export const NR = ({ novel }: { novel: Novel }) => {
  const router = useRouter();

  return (
    <div className="flex" onClick={() => router.push(`/novel/${novel.id}`)}>
      <img src={novel.image} alt={novel.title} />

      <div className="w-full flex flex-col justify-between gap-[8px] p-[12px] text-[12px]">
        <div>
          <h4 className="text-[16px] font-bold text-wrap text-[#222]">
            {novel.title}
          </h4>
          <span className="text-[#888] text-[12px]">{novel.writer}</span>

          <br />
          <br />

          <span>{novel.recommendList[0].nickname}</span>
          <p className="text-[#222] text-[14px]">
            {limitRecommend(novel.recommendList[0].recommend)}
          </p>
        </div>

        <div className="flex justify-between">
          <CommentButton />
          <div className="flex gap-[10px]">
            <span>like: {novel.recommendList[0].like}</span>
            <span>hate: {novel.recommendList[0].hate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const limitRecommend = (recommend: string) => {
  const MAX_RECOMMEND_LENGTH = 290;

  return recommend.length > MAX_RECOMMEND_LENGTH
    ? recommend.slice(0, MAX_RECOMMEND_LENGTH) + "..."
    : recommend;
};
