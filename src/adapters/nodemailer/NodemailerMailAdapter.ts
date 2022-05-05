import { MailAdapter, SendMailData } from "../mailAdapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "a83a396820aaf6",
    pass: "fdb247f3a14659",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData): Promise<void> {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com.br>",
      to: "Yago Juan <yagojuanyjskt@gmail.com>",
      subject,
      html: body,
    });
  }
}
