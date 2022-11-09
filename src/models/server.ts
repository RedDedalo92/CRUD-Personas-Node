import express, {Application} from 'express';
import routesPersonas from '../routes/persona.routes'
import connection from '../db/connection';

class Server{
    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.middlewares();
        this.routes();
        this.conectarDB();
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Application running in port ', this.port)
        })
    }

    //Parseo del body
    middlewares(){
        this.app.use(express.json());
    }

    routes(){
        this.app.use('/api/personas', routesPersonas)
    }

    conectarDB(){
        connection.connect((err) =>{
            if(err) throw err;
            console.log('Conectado a la base');
        });
    }
    
}

export default Server;