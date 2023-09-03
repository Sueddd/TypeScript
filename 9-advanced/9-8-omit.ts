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

  // Pick과 반대로 url과 data를 제외하고 싶을 때 사용
  type VideoMetadata = Omit<Video, "url" | "data" | "h">;
  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id: id,
      title: "title",
    };
  }
}
