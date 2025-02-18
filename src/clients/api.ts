type SuccessResponse<T = any> = {
  status: "success";
  data: T
}

export const summerizeVideo = async (videoId: string): Promise<SuccessResponse<{ transcript: string; summary: string; }>> => {
  const res = await fetch(`/api/summary/${videoId}`);
  const data = await res.json();
  return data;
}

// export const summerizeVideo = async (transcript: string): Promise<SuccessResponse<{ transcript: string; summary: string; }>> => {
//   const res = await fetch(`/api/summary`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ transcript })
//   });
//   const data = await res.json();
//   return data;
// }