import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAllLocations(): string {
    return 'all Locations!';
  }

  getLocationById(id: string): string {
    return 'Location: ' + id;
  }
}
