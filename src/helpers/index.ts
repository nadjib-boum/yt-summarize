export const padZero = (num: number) => num.toString().padStart(2, '0');

export const formatTimestamp = (offset: number) => {
  const hours = Math.floor(offset / 3600);
  const minutes = Math.floor((offset % 3600) / 60);
  const seconds = Math.floor(offset % 60);
  
  return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

export const sanitizeTranscript = (text: string) => {
  return text.replaceAll("&amp;#39;", `'`);
}

export const isValidYouTubeUrl = (url: string) => {
  const regex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  return regex.test(url);
}

export const getVideoId = (videoUrl: string) => {
  
  try {

    if (!isValidYouTubeUrl(videoUrl)) return false;

    const params = new URLSearchParams(new URL(videoUrl).search);
    const videoId = params.get("v");
    return videoId;

  } catch (err: any) {

    return false;

  }

}