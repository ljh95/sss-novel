"use client";

import { Title } from "@/app/components/common/Title";
import { NOVEL_LIST } from "@/app/const/const";
import { NovelType } from "../page";
import { KeyboardEvent, useRef, useState } from "react";

let nextId = 123;

const ReviewRegistPage = ({ params }: { params: { id: string } }) => {
  const novel = NOVEL_LIST.find((n) => n.id === Number(params.id));
  const [novelList, setNovelList] = useState<Array<NovelType>>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <Title title="추천글 작성하기" />

      <form>
        <h3 className="text-[20px] font-bold">{novel?.title}</h3>
        별점 4.5
        <div>
          추천글 적기
          <br />
          {/* TODO: change to editor like velog can input image  */}
          <textarea
            name="recommendText"
            id="recommendText"
            cols={30}
            rows={10}
            className="bg-[skyblue]"
          ></textarea>
        </div>
        <div className="mt-[40px]">
          <h4 className="text-[20xp] font-bold">이 작품과 어울리는 작품</h4>

          {/* TODO: 
          need backends, 
          it needs auto complete
          */}
          <input
            type="text"
            ref={inputRef}
            placeholder="소설 제목으로 검색"
            onKeyDown={(e: KeyboardEvent) => {
              let { value } = e.target as HTMLInputElement;

              if (e.code === "Enter") {
                setNovelList((prev) => [
                  ...prev,
                  { id: nextId++, title: value },
                ]);
                (inputRef.current as HTMLInputElement).value = "";
              }
            }}
            className="
            border-[1px]
            border-[solid]
            border-[#ddd]
            w-[220px]
            "
          />

          <ul>
            {novelList.map((n) => {
              return (
                <li
                  key={n.id}
                  className="flex items-center gap-[12px]
                  w-fit
                  border-[solid] border-b-[1px] border-[#bbb]
                  "
                >
                  <button
                    type="button"
                    onClick={() => {
                      setNovelList((prev) => prev.filter((p) => p.id !== n.id));
                    }}
                  >
                    x
                  </button>
                  <span>{n.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex justify-end mt-[40px]">
          <button
            type="submit"
            className="bg-[blue] text-white px-[12px] rounded-[4px]"
          >
            작성하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewRegistPage;
