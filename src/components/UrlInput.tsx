import { useState } from "react";
import { Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type UrlInputProps = {
  handleClick: (input: string) => void;
  isLoading: boolean;
  error?: string;
}

const UrlInput = ({ handleClick, error, isLoading }: UrlInputProps) => {

  const [ input, setInput ] = useState<string>("");

  return (
    <div>
      <div className="flex gap-2">
        <Input
          placeholder="Paste Youtube URL Here"
          className="w-[400px]" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
        />
        <Button onClick={() => handleClick (input)} disabled={isLoading}>
          {isLoading ? <Loader2 className="animate-spin" /> : "Summerize"}
        </Button>
      </div>
      {
        error ? <div className="text-red-500 p-1">{error}</div> : null
      }
    </div>
  );

}

export default UrlInput;