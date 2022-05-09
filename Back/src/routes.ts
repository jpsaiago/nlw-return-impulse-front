import express from 'express';
import nodemailer from 'nodemailer';
import { NodeMailerAdapter } from './adapters/nodeMailer/nodeMailerMailAdapter';
import { prisma } from './prisma';
import { PrismaFeedbackRepository } from './repositories/prisma/prismaFeedbackRepository';
import { SubmitFeedbackUseCase } from './use-cases/submitFeedbackUseCase';

export const routes = express.Router()



routes.post('/feedbacks', async (req, res) => {
  const {type, comment, screenshot} = req.body;
  const prismaFeedbackRepository = new PrismaFeedbackRepository
  const nodeMailerAdapter = new NodeMailerAdapter
  const submitFeedbackUseCase  = new SubmitFeedbackUseCase(
    prismaFeedbackRepository,
    nodeMailerAdapter
    )

  await submitFeedbackUseCase.handle({
    type,
    comment,
    screenshot
  })

  return res.status(201).send()
})