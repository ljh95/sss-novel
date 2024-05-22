"use client";
import { OuterLink } from "@/app/components/novel/OuterLink";
import { Recommend } from "@/app/components/novel/Recommend";
import { TogetherNovelList } from "@/app/components/novel/TogetherNovelList";
import { NOVEL_LIST } from "@/app/const/const";

export const Novel = ({ params }: { params: { id: string } }) => {
  const novel = NOVEL_LIST.find((n) => n.id === Number(params.id));
  const recommendList = novel?.recommendList ?? [];

  return (
    <div>
      <h1 className="text-[40px] mb-[20px] font-bold">Novel Page</h1>
      <div className="flex gap-[8px]">
        <img src={novel?.image} alt={novel?.title} />

        <div className="flex flex-col justify-between">
          <div className="[&>*]:mb-[4px]">
            <h3 className="text-[16px] text-[#222] font-bold">
              {novel?.title}
            </h3>

            <p className="text-[12px] text-[#888]">{novel?.writer}</p>

            <p className="text-[12px]">별점 4.8</p>
          </div>

          <OuterLink />
        </div>
      </div>

      <div className="mt-[60px]">
        <h3 className="text-[20px] font-bold">베스트 추천글</h3>
        {recommendList.map((r) => (
          <Recommend recommend={r} />
        ))}
      </div>

      <TogetherNovelList novelList={togetherNovelList} />
    </div>
  );
};

const togetherNovelList = [
  {
    title: "SSS급 죽어야 사는 헌터",
    image:
      "https://comicthumb-phinf.pstatic.net/20230619_210/pocket_1687157855027BFTVg_JPEG/%C8%AD%BB%EA%BC%F6%C1%A4.jpg?type=m260",
  },
  {
    title: "세컨드 라이프",
    image:
      "https://comicthumb-phinf.pstatic.net/20240513_219/pocket_1715568854461o91RI_JPEG/cover.jpg?type=m260",
  },
  {
    title: "킹덤",
    image:
      "https://comicthumb-phinf.pstatic.net/20240318_118/pocket_1710750717855Fkroe_JPEG/%B4%DC%BE%BE%BC%BC%B0%A1%B8%C1%B3%AA%B4%CF%B0%A1%B3%CA%B9%AB%B0%AD%C7%D42_%C7%A5%C1%F6_%C4%C1%C5%D9%C3%F7%C1%A6%C0%DB%BF%EB%28720x1033%29.jpg?type=m260",
  },
  {
    title: "나루토",
    image:
      "https://comicthumb-phinf.pstatic.net/20230921_70/pocket_1695267058725t9cAr_JPEG/%C7%A5%C1%F6-%C8%B8%B1%CD%BC%F6%BC%B1%C0%FC%28%FC%DE%CF%FD%E1%F3%E0%B9%EE%EE%29-2%C2%F7.jpg?type=m260",
  },
  {
    title: "블리치",
    image:
      "https://comicthumb-phinf.pstatic.net/20211230_264/pocket_1640855722352Vbumb_JPEG/CID_271428_%C8%AF%BB%FD%C3%B5%B8%B6.jpg?type=m260",
  },
];
