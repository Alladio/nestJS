import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
    //Simulando uma tabela
    public messages =[
        {
            id: 1,
            text: 'olá'
        },
        {
            id: 2,
            text: 'tchau'
        }
    ];
    //Simuando um consulta no DB
    findAll(){
        return this.messages;
    }
}
