import { YoutubeTranscript } from "youtube-transcript"; 
import { formatTimestamp, sanitizeTranscript } from "@/helpers";
import { TranscriptEntry } from "@/types";

class TranscriptService {

  private async getTranscriptData(url: string): Promise<TranscriptEntry[]> {

    try {

      const rawTranscript = await YoutubeTranscript.fetchTranscript(url, { lang: "en" });
      
      const formattedTranscript = rawTranscript.map(entry => ({
        text: entry.text,
        duration: entry.duration,
        offset: entry.offset,
        timestamp: formatTimestamp(entry.offset)
      }));
  
      return formattedTranscript;

    } catch (error: any) {
      
      if (error.message.includes('Could not find transcript')) throw new Error('No transcript available for this video');
      
      throw error;

    }

  }

  public async getTranscriptText (url: string) {

    const transcript = await this.getTranscriptData (url);

    const transcriptText = transcript.reduce((prev, current) => (prev + current.text + '\n'), "");

    return sanitizeTranscript (transcriptText);

  }

}

const transcriptService = new TranscriptService ();

export default transcriptService;