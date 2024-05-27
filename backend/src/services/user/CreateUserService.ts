import { IUser } from "../../interfaces/IUser";
import prismaClient from '../../prisma';
  
  class CreateUserService{
    async execute({ name, email, password }: IUser) {

      try {
        await prismaClient.user.create({
          data: {
            name,
            email,
            password
          }
        })
      } catch(error) {
        return { Error: error };
      }
      
      return { Status: "Cliente Criado com Sucesso!" }
    }
  }
  
  export { CreateUserService }