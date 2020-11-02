import { Request, Response } from "express";
import createUser from './services/CreateUser';


export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: 'Alcsaw',
    email: 'alcsaw@hotmail.com',
    password: '123456',
    techs: [
      'Node.js',
      { title: 'JavaScript', experience: 100 }
    ]
  })
  return response.json({ message: 'Hello' });
}
