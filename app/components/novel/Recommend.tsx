import { Recommend as TRecommend } from "@/app/const/type";

export const Recommend = ({ recommend: r }: { recommend: TRecommend }) => {
  return (
    <div
      className="w-full my-[12px] flex flex-col justify-between
    border-b-[1px] border-solid border-[#eee]
    pb-[12px]
    "
    >
      <div className="flex flex-col gap-[8px]">
        <p className="text-[13px]">{r.nickname}</p>

        <p className="text-[13px]">{r.recommend}</p>

        <span className="text-[#999] text-[12px]">{r.time}</span>
      </div>

      <div className="flex justify-between items-center w-full">
        <button className="w-fit px-[7px] mt-[10px] border-[1px] border-solid border-[#e0e0e0] ">
          댓글
        </button>

        <div className="flex gap-[10px]">
          <span>like: {r.like}</span>
          <span>hate: {r.hate}</span>
        </div>
      </div>
    </div>
  );
};
