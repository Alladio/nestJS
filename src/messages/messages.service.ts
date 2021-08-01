import { Injectable } from '@nestjs/common';
import { Message } from './message';
import { MessageDto } from './MessageDto';

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

    //async para conseguir usar a função "  catch" no "service"
    async findById(id: number) {
        const message = this.messages.find(msg => msg.id === id);

        if (!message) {
            throw Error(`Mensagem com o ID ${id} não econtrada | findById`);
        }

        return message;
    }

    create(messageDto: MessageDto) {

        const id = this.messages.length + 1;

        const message: Message = {
            id,
            ...messageDto
        };
        this.messages.push(message);
        return message;
    }

    async update(id: number, messageDto: MessageDto) {
        const index = this.messages.findIndex((message) => message.id === id);

        console.log({ index })
        if (index < 0) {

            throw Error(`Mensagem com o ID ${id} não econtrada | update`);

        }

        const message: Message = {
            id,
            ...messageDto
        };
        this.messages[index] = message;
        return messageDto;
    }

    async delete(id: number) {
        const index = this.messages.findIndex((message) => message.id === id);
        
        console.log(index);
        if (index < 0) {

            throw Error(`Mensagem com o ID ${id} não econtrada | delete`);

        }

        delete this.messages[index];
    }
}
