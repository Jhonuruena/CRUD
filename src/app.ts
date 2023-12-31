import express, { Application, Request, Response } from "express"
import CrudRouter from "./routes/crudRoutes"


class app{

    public app: Application
    private server: any

    constructor(){
        this.app = express()
        this.app.use(express.json())
        this.routes()
    }

    private routes(): void {
		this.app.use('/', CrudRouter)
		
	}

    

    public start(): void {
		this.server = this.app.listen(3000, () => {
			console.log('El servidor esta escuchando en el puerto 3000')
		})
	}

	public close(): void {
		this.server.close()
	}

}

export default app