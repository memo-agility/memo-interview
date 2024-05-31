import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

const authSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>
) => {
  if (req.method === "POST") {
    const data = authSchema.parse(JSON.parse(req.body));
    if (data) {
      if (data.username === "test" && data.password === "asdfasdf") {
        const token = "1234567890";
        res.status(200).json({ message: "Login successfully" });
      } else {
        res
          .status(401)
          .json({ message: "Please use the default email & password" });
      }
    } else {
      res.status(400).json({ message: "Invalid credentials" });
    }
  } else {
    res.status(405).json({ message: "Only POST request is supported" });
  }
};

export default handler;
