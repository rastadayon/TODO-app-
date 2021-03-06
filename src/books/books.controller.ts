import { Body, Controller, Get, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import CreateBookDto from './dto/create-book.dto';

@Controller('book')
export default class BooksController {
  constructor(private readonly bookServices: BooksService) {}
  @Post('post')
  postGenre( @Body() genre: CreateBookDto) {
    return this.bookServices.insert(genre);
  }
  @Get()
  getAll() {
    return this.bookServices.getAllBooks();
  }
}