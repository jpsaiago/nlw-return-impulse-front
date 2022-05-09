export interface FeedbackRequiredData{
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbackRepository{
  create: (data: FeedbackRequiredData) => Promise<void>;
}