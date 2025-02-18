import type { LanguageModelV1 } from 'ai';

export type TranscriptEntry = {
  text: string;
  duration: number;
  offset: number;
  timestamp: string;
}

export type AIServiceProps = {
  model: LanguageModelV1;
}

export type AnswerProps = {
  system: string;
  prompt: string;
}