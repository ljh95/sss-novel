"use client";

import { NR } from "./components/NR";
import { NRList } from "./components/NRList";
import { Nav } from "./components/Nav";
import { SearchForm } from "./components/SearchForm";
import { Title } from "./components/common/Title";
import { NOVEL_LIST } from "./const/const";

export default function Home() {
  return (
    <div>
      <Title title="Main Page" />
      <Nav>
        <></>
      </Nav>
      <SearchForm />

      <main className="mt-[12px] flex flex-col gap-[20px]">
        <h2 className="font-bold text-[20px]">추천 목록</h2>
        <NRList>
          {NOVEL_LIST.map((novel) => {
            return <NR novel={novel} key={novel.id} />;
          })}
        </NRList>
      </main>
    </div>
  );
}
