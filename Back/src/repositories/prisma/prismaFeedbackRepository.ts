import { prisma } from "../../prisma";
import { FeedbackRepository, FeedbackRequiredData } from "../feedbackRespository";

export class PrismaFeedbackRepository implements FeedbackRepository{
  async create ({type, comment, screenshot}: FeedbackRequiredData) {
    await prisma.feedback.create({
      data:{
        type,
        comment,
        screenshot,
      }
    })
  }
}