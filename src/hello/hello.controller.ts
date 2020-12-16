import { Controller, Post, Body, Get, Header, Query } from '@nestjs/common';
import { HelloService } from './hello.service';
import { PersonDto } from './dto/person.dto';
import { INSTANCE_METADATA_SYMBOL } from '@nestjs/core/injector/instance-wrapper';
import {ApiResponse, ApiBearerAuth, ApiQuery} from '@nestjs/swagger';

@Controller('hello')
export class HelloController {
    constructor(private HelloService: HelloService) {}


    @Post('welcome')
    @ApiResponse({ status: 200, description: 'Say Hello!!!' })
    @Header('Content-Type', 'application/json')
    async sayWelcome(@Body() personDto: PersonDto): Promise<{data: string}> {
        console.log(personDto)
        let msg = await this.HelloService.welcome(personDto);
        return {data: msg};
    }

    @ApiResponse({ status: 200 })
    @ApiQuery({
    name: 'name',
    required: true,
    type: String,
    // enum : ["All", "Browser", "Device"]
    })
    @ApiQuery({
    name: 'year',
    required: false,
    type: Number,
    description :`you can ignore this`
    })
    @Get('welcome')
    async sayWelcomeGet(@Query('name') name, @Query('year') year): Promise<{data: string}> {
        console.log(name, year)
        let msg = await this.HelloService.welcome({name: name, year: year})
        return {data: msg}
    }

}
