export type Novel = {
  id: number;
  image: string;
  title: string;
  writer: string;
  recommendList: Recommend[];
  recommendNovelList: OnlyNovel[];
};

export type Recommend = {
  id: number;
  nickname: string;
  recommend: string;
  time: string;
  like: number;
  hate: number;
  commentList: Comment[];
};

export type Comment = {
  id: number;
  nickname: string;
  comment: string;
  time: string;
  like: number;
  hate: number;
};

export type OnlyNovel = Omit<Novel, "recommendList" | "recommendNovelList">;
