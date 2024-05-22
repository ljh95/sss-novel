import Link from "next/link";
import { NR } from "./components/NR";
import { NRList } from "./components/NRList";
import { Nav } from "./components/Nav";
import { SearchForm } from "./components/SearchForm";
import { NOVEL_LIST } from "./const/const";

export default function Home() {
  return (
    <div>
      <h1 className="text-[40px] font-bold mb-[20px]">Main Page</h1>
      <Nav>
        <>
          <Link href={"/novel"}>novel</Link>
        </>
      </Nav>
      <SearchForm />

      <main className="mt-[12px] flex flex-col gap-[20px]">
        <h2 className="font-bold text-[20px]">추천 목록</h2>
        <NRList>
          {NOVEL_LIST.map((novel) => {
            return <NR novel={novel} />;
          })}
        </NRList>
      </main>
    </div>
  );
}
