import aiService from "@/services/ai";
import transcriptService from "@/services/transcript";
import { NextRequest, NextResponse } from "next/server";

export async function GET (req: NextRequest, { params }: { params: Promise<{ videoId: string }> }) {

  try {
    
    const { videoId } = (await params);

    if (!videoId) {
      return NextResponse.json({
        status: "error",
        error: {
          message: "Invalid Youtube Video ID"
        }
      }, { status: 400 })
    }

    // return NextResponse.json({
    //   status: "success",
    //   data: {
    //     transcript: "I had some tantrums of saying I can't do this, this is too hard. When I was a kid and comparing myself to everyone else, and saying I can't do it, I'll never be able to do that. My parents always sat me down and said look, Nick. Yes, there are things that you can't do, but don't say I can't do it. Ask yourself how can I do it. You know, there's ways around it. You can get from one side of the mountain to another, but you don't just have to walk over it; maybe you can go underneath it, or around it, or there's always ways in achieving the same goal. The way that I've achieved in my life doesn't always look the same for everyone else. But the key to that success was, I believed in myself. If someone else could do something, then I could try and work out how. It starts with believing in yourself.",
    //     summary: `- The speaker recalls having self-doubt and tantrums as a child, feeling incapable compared to others. - Parents advised not to say "I can't do it" but instead ask "how can I do it?" and find alternative ways. - Emphasizes the importance of believing in oneself and finding unique paths to achieve goals. - Success doesn't have to look the same for everyone; key is self-belief and determination. - Encourages the mindset of finding solutions and believing in one's abilities to overcome challenges.`,
    //   }
    // }, { status: 200 })

    const transcript = await transcriptService.getTranscriptText (videoId);

    const summary = await aiService.summerizeTranscript (transcript);

    return NextResponse.json({
      status: "success",
      data: {
        transcript,
        summary,
      }
    }, { status: 200 })

  } catch (err: any) {

    return NextResponse.json({
      status: "error",
      error: {
        message: "Youtube Summary Creation Failed"
      }
    }, { status: 200 })

  }

};