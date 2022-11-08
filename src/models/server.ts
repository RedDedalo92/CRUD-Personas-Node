import express, {Application} from 'express';
import routesPersonas from '../routes/persona.routes'

class Server{
    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.routes();
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Application running in port ', this.port)
        })
    }

    routes(){
        this.app.use('/api/personas', routesPersonas)
    }
    
}

export default Server;