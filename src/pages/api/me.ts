import { User } from "@/features/Auth/types";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse<User | string>) => {
  const token: string = ""; // TODO
  if (token === "1234567890") {
    res.status(200).json({
      email: "test@gmail.com",
      username: "test",
    });
  }
  res.status(401).json("");
};

export default handler;
