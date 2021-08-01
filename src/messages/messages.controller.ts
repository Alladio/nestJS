import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { Message } from './message';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    constructor(private messagesService: MessagesService) { }
    //Buscar todos
    @Get()
    findAll() {
        return this.messagesService.messages;
    }

    //Buscar por ID
    @Get(':id')
    findById(@Param('id') params) {
        //PARA USAR O CATCH
        //NA controller precisa colocar o "async"
        return this.messagesService.findById(+params.id).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    //Criar
    @Post()
    create(@Body() message: Message) {
        console.log({ message });
        return this.messagesService.create(message);
    }

    //Editar
    @Put(':id')
    update(@Param('id') params, @Body() message: Message) {
        console.log({ message });
        return this.messagesService.update(+params.id, message);
    }
    @Delete(':id')
    delete(@Param('id') params) {
        return this.messagesService.delete(+params.id)
    }
}
