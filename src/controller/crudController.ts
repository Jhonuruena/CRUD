import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"


class Crud{

    private prisma: PrismaClient

    constructor(){
        this.prisma = new PrismaClient()
     }

     async crearObjeto(req: Request, res: Response){

        const{
            marca,
            modelo,
            fecha
        } = req.body
        const objeto =  await this.prisma.objeto.create(
            {
                data:{
                    marca,
                    modelo,
                    fecha
                }
            }
        )
        res.json(objeto)
     }

     async obtenerObjeto (req: Request, res: Response){
        const objetos = await this.prisma.objeto.findMany()
        res.json(objetos)
     }

     async ModificarObjeto (req: Request, res: Response){

        
     }

     async EliminarObjeto (req: Request, res: Response){
        //const objeto = await this.prisma.objeto.delete()
     }


     


     
}

export default Crud