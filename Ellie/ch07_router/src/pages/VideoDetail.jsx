import { useParams } from "react-router-dom";

export default function VideoDetail() {
  // url의 videoId를 가져옴
  const { videoId } = useParams();

  return <div>Video Detail {videoId}</div>;
}
