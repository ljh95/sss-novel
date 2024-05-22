export type Novel = {
  id: number;
  image: string;
  title: string;
  writer: string;
  recommendList: Recommend[];
};

export type Recommend = {
  nickname: string;
  recommend: string;
  time: string;
  like: number;
  hate: number;
  commentList: Comment[];
};

export type Comment = {
  nickname: string;
  comment: string;
  time: string;
  like: number;
  hate: number;
};
