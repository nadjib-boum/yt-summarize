import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type OutputTabsProps = {
  transcript: string;
  summary: string;
}

const tabClassName = `p-3 border border-gray-200 rounded-sm bg-custom-gray`;

const OutputTabs = ({ transcript, summary }: OutputTabsProps) => {

  return (
    <div className="">
      <Tabs defaultValue="summary" className="w-[500px]">
        <TabsList>
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="transcript">Transcript</TabsTrigger>
        </TabsList>
        <TabsContent value="summary" className={tabClassName}>{summary}</TabsContent>
        <TabsContent value="transcript" className={tabClassName}>{transcript}</TabsContent>
      </Tabs>
    </div>
  );

}

export default OutputTabs;