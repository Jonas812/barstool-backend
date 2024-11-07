import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(): string {
    return this.appService.getAllLocations();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appService.getLocationById(id);
  }
}
