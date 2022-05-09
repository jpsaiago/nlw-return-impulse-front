import { MailAdapter, SendMailData } from "../mailAdapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9c9b469d2ce2b8",
    pass: "06692b14110802"
  }
});

export class NodeMailerAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
        from: "Equipe Feedget <oi@feedget.com>",
        to: "João Pedro Saiago <joaopedrosaiago@gmail.com>",
        subject,
        html: body,
      });

  };
}