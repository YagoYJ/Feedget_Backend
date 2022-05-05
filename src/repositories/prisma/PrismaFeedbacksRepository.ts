import { prisma } from "../../prisma";
import {
  FeedbackCreateData,
  FeedbacksRepository,
} from "../FeedbacksRepository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create(data: FeedbackCreateData): Promise<void> {
    const { type, comment, screenshot } = data;

    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
