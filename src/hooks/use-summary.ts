import { useQuery } from "@tanstack/react-query";
import { summerizeVideo } from "@/clients/api";

export const useSummary = (videoId?: string) => {

  console.log ("videoId", videoId)

  const query = useQuery({
    queryKey: ['summary', videoId],
    queryFn: async () => videoId ? await summerizeVideo(videoId) : null,
    enabled: !!videoId
  });

  return query;

}