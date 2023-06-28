import { Router, Request, Response } from "express";
import Crud from "../controller/crudController";

class CrudRouter{
    router: Router
    crudController: Crud

    constructor() {
        this.router = Router()
        this.crudController = new Crud()
        this.routes()
    }

    private routes(): void {

        this.router.get('/obtener_objeto',
            (req: Request, res: Response) => {
                this.crudController.crearObjeto(req, res)
            }
        )

        this.router.post('/crear_objeto',
            (req:Request, res:Response)=>{
                this.crudController.crearObjeto(req,res)
            }
        )
    }


}

export default new CrudRouter().router
