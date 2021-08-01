import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { Message } from './message';
import { MessageDto } from './MessageDto';
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
    findById(@Param() params) {
        //PARA USAR O CATCH
        //NA controller precisa colocar o "async"
        return this.messagesService.findById(+params.id).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

     //Criar
    @Post()
    create(@Body() messageDto: MessageDto) {
        return this.messagesService.create(messageDto);
    }

    //Editar
    @Put(':id')
    update(@Param() params, @Body() messageDto: MessageDto) {
        //console.log({ message });
        return this.messagesService.update(+params.id, messageDto).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }
    @Delete(':id')
    delete(@Param() params) {
        return this.messagesService.delete(+params.id).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }
}
