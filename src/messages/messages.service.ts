import { Injectable } from '@nestjs/common';
import { Message } from './message';

@Injectable()
export class MessagesService {
    //Simulando uma tabela
    public messages: Message[] = [
        {
            id: 1,
            text: 'Mensagem 1'
        },
        {
            id: 2,
            text: 'Mensagem 2'
        }
    ];
    //Simuando um consulta no DB
    findAll() {
        return this.messages;
    }

    //async para conseguir usar a função "catch" no "service"
    async findById(id: number) {
        const message = this.messages.find((msg) => msg.id === id);
        
        if (!message) {
            throw Error(`Mensagem com o ID ${id} não econtrada`);
        }

        console.log("service ok");
        return message;
    }

    create(message: Message) {
        return this.messages.push(message);
    }

    update(id: number, message: Message) {
        const index = this.messages.findIndex((message) => message.id === id);
        this.messages[index] = message;
        return message;
    }

    delete(id: number) {
        const index = this.messages.findIndex((message) => message.id === id);
        delete this.messages[index];

        return true;
    }
}
