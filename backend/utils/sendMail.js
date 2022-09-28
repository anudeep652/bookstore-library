import sgMail from "@sendgrid/mail";
export const sendMail = async (receiver, bookName) => {
  sgMail.setApiKey(process.env.SEND_GRID_API_KEY);
  const msg = {
    to: receiver,
    from: "webbuilders58@gmail.com",
    subject: "Checkout These Books!",
    html: `Thank you for purchasing the book ${bookName} `,
  };

  await sgMail.send(msg);
};
