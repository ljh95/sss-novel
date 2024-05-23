"use client";

import { Title } from "@/app/components/common/Title";
import { NOVEL_LIST } from "@/app/const/const";

const ReviewViewPage = ({ params }: { params: { id: string } }) => {
  const novel = NOVEL_LIST.find((n) => n.id === Number(params.id));
  const recommendNovelList = novel?.recommendNovelList;

  return (
    <div>
      <Title title="추천글 보기" />

      <div>
        <h3 className="text-[20px] font-bold">{novel?.title}</h3>
        {/* TODO: need star svg? components */}
        별점 4.5
        <div>
          추천글 by.{}
          {/* TODO: 4줄 정도만 보이고 더보기 버튼을 통해 전부 펼칠 수 있도록? */}
          <div className="bg-[skyblue]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, ea!
            Consectetur odit iure sit nostrum consequuntur ipsum delectus
            reprehenderit libero rem voluptas, voluptates, incidunt, quibusdam
            ullam! Quos error facere distinctio aperiam animi nulla reiciendis
            consectetur magnam repellat nemo necessitatibus cupiditate corporis
            ea provident suscipit ratione, ipsum voluptate dolor? Quam unde
            voluptatum maiores mollitia accusantium consectetur et nemo, harum
            labore nihil hic, illum quisquam quis laudantium blanditiis quae
            error perferendis ipsa provident? Magnam officia labore asperiores.
            Omnis repudiandae ut eveniet dolorum possimus esse ipsam
            perspiciatis praesentium veritatis explicabo maxime laudantium,
            similique ipsa molestiae, ad tempore id voluptatem minima.
            Exercitationem repellendus dolores possimus perferendis laudantium
            debitis laboriosam eveniet nostrum nobis cupiditate. Necessitatibus
            officia atque praesentium culpa cupiditate perferendis eligendi,
            pariatur impedit aspernatur, ducimus nulla facere nobis! Odit quia
            nesciunt laborum minima harum ex labore temporibus voluptas non
            maxime maiores ea, doloribus ipsam quos, obcaecati blanditiis
            dolorum! Eligendi velit dolor, est ullam dignissimos neque magnam
            maxime in beatae a explicabo sequi nihil magni aspernatur ab? Soluta
            voluptas, facilis assumenda, architecto eos inventore eveniet iusto
            nemo exercitationem enim ullam, ad blanditiis voluptatem iure
            impedit repellendus tempora quo magni. Autem distinctio cumque
            blanditiis repellat dolor provident fuga molestias eligendi
            doloribus deserunt optio adipisci eius, eum ea accusamus velit quam
            voluptatum ipsa. Autem illo quis tempore inventore, possimus rerum,
            odio ut quibusdam corporis modi dicta unde necessitatibus eveniet!
            Quibusdam rem sit sint totam cum molestiae aspernatur assumenda.
            Accusantium qui nostrum officia vero cupiditate inventore aut saepe
            aspernatur error nesciunt, voluptate eum provident eveniet corporis
            perspiciatis minima ad quidem, repellat quibusdam officiis magnam
            mollitia. Fugiat explicabo quam, ea iure quasi obcaecati consectetur
            molestias, excepturi sunt ducimus doloribus voluptate facilis quod
            saepe iste sequi maxime aliquid eligendi eius distinctio. Asperiores
            consequatur cum quis laudantium quam consequuntur esse voluptate
            fugiat temporibus quos quae laboriosam, vel a at nemo voluptas
            maxime inventore enim voluptatum. Aut et quibusdam, ut error sunt
            odio laborum fugit expedita molestiae porro sed facere pariatur quae
            tempore magni nemo voluptatibus provident corporis atque excepturi
            molestias ipsa praesentium repellat necessitatibus! Nemo odio
            reprehenderit, pariatu
          </div>
        </div>
        <div className="mt-[40px]">
          <h4 className="text-[20px] font-bold">이 작품과 어울리는 작품</h4>

          <ul className="flex items-center gap-[12px]">
            {recommendNovelList?.map((n) => {
              return (
                <li
                  key={n.id}
                  className="flex flex-col items-center gap-[12px]
                  w-fit
                  border-[solid] border-b-[1px] border-[#bbb]
                  "
                >
                  <img src={n.image} alt={n.title} />
                  <span>{n.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReviewViewPage;

export type NovelType = {
  id: number;
  title: string;
};
