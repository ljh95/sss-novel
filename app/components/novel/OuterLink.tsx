import { useRouter } from "next/navigation";
import React from "react";

export const OuterLink = () => {
  const router = useRouter();

  return (
    /* TODO: 추후 진짜 페이지로 변경 */
    <ul
      className="
      flex gap-[8px]
      [&>*]:p-[10px] [&>*]:cursor-pointer [&>*]:h-fit
      "
    >
      <li
        className="bg-[green]"
        onClick={() =>
          router.push("https://series.naver.com/novel/home.series")
        }
      >
        네이버 시리즈
      </li>
      <li
        className="bg-[yellow]"
        onClick={() => router.push("https://page.kakao.com/")}
      >
        카카오페이지
      </li>
      <li
        className="bg-[blue]"
        onClick={() => router.push("https://www.munpia.com/")}
      >
        문피아
      </li>
    </ul>
  );
};
