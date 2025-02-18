"use client";
import { useState } from "react";
import UrlInput from "@/components/UrlInput";
import OutputTabs from "@/components/OuputTabs";
import { useSummary } from "@/hooks/use-summary";
import { getVideoId } from "@/helpers";

export default function Home() {

  const [ url, setUrl ] = useState<string>("");
  const [ inputError, setInputError ] = useState<string | undefined>(undefined);
  const { refetch, data: summaryData, isLoading } = useSummary (url);

  const handleClick = (input: string) => {
    
    setInputError (undefined);

    if (input.length < 1) return setInputError("URL field can not be empty");
    
    const videoId = getVideoId(input);
    
    if (!videoId) return  setInputError("Invalid Youtube URL");;
    
    setUrl (videoId);

    refetch();

  }

  return (
    <div className="flex flex-col items-center my-20 gap-10">
      <div>
        <span className="text-6xl font-bold">
          Watch Less, Learn More
        </span>
      </div>
      <UrlInput handleClick={handleClick} isLoading={isLoading} error={inputError} />
      {
        summaryData ? 
          <OutputTabs 
            transcript={summaryData.data.transcript}
            summary={summaryData.data.summary}
          /> 
        : null
      }
    </div>
  );

}
