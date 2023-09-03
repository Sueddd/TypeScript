{
  // Video에 데이터가 들어있는 타입
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://..",
      data: "byte-data..",
    };
  }

  // Pick<Video, 'id' | 'title'> ➡️ Video에서 id와 title만 가지고 나오는
  // 기존의 타입에서 원하는 속성만 value만 뽑아서 사용 가능
  type VideoMetadata = Pick<Video, "id" | "title">;
  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id: id,
      title: "title",
    };
  }

  // Pick의 개념
  //   type Pick<T, K extends keyof T> = {
  //     [P in K]: T[P];
  //   };
  // 해석 : Pick은 어떤 타입을 받아오고, K는 T타입에 있는 key들을 상속한 것들이다. 그래서 항상 Pick을 이용할 때 기존의 Video에 있는 key들 중 하나를 써야지, 다른 것을 쓰면 에러가 발생한다.
  // 전달된 key들에 한해서만 map을 돌린다
}
