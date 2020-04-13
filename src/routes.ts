import { Request, Response } from "express";

import createUser from "./services/CreateUser";

export function routes(req: Request, res: Response) {
  const user = createUser({
    name: "Daniel",
    email: "daniel@daniel.dev",
    password: "123123",
    techs: [
      "Node.js",
      "ReactJS",
      "React Native",
      { title: "Javascriopt", experience: 100 },
    ],
  });

  return res.json({ message: user });
}
