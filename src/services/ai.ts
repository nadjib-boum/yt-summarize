import { generateText, type LanguageModelV1 } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import config from '@/config';
import type { AIServiceProps, AnswerProps } from '@/types';

class AIService {

  private model: LanguageModelV1;

  constructor ({ model }: AIServiceProps) {

    this.model = model;

  }

  private async generateAnswer ({ system, prompt }: AnswerProps) {
    
    const { text } = await generateText({
      model: this.model,
      system,
      prompt,
    });
  
    return text;

  }

  public async summerizeTranscript (transcript: string) {

    const summary = await this.generateAnswer ({
      system: config.system_summary_prompt,
      prompt: config.user_summary_prompt.replace("{{transcript}}", transcript)
    });

    return summary;

  }

}

const openai = createOpenAI({ apiKey: process.env.OPENAI_API_KEY })

const aiService = new AIService ({
  model: openai("gpt-3.5-turbo")
});

export default aiService;