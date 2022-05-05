import { SubmitFeedbackUseCase } from "./SubmitFeedbackUseCase";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  {
    create: createFeedbackSpy,
  },
  {
    sendMail: sendMailSpy,
  }
);

describe("Submit Feedback", () => {
  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "Feedback test comment",
        screenshot: "data:image/png;base64,foto.png",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("should not be able to submit a feedback without a type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "Feedback test comment",
        screenshot: "data:image/png;base64,foto.png",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit a feedback without a comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;base64,foto.png",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit a feedback with a invalid screenshot", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "Feedback test comment",
        screenshot: "foto.jpg",
      })
    ).rejects.toThrow();
  });
});
