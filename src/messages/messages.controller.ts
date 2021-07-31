import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Message } from './message';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    constructor(private messagesService: MessagesService){}
    //Buscar todos
    @Get()
    findAll() {
        return this.messagesService.messages;
    }

    //Buscar por ID
    @Get(':id')
    findById(@Param() params){
        return this.messagesService.findById(+params.id);
    }

    //Criar
    @Post()
    create(@Body() message:Message){
        console.log({message});
        return this.messagesService.create(message);
    }

    //Editar
    @Put(':id')
    update (@Param() params, @Body() message:Message){
        console.log({message});
        return this.messagesService.update(+params.id, message);
    }
}
