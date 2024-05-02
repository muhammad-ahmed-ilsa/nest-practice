import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { CreateListingDto } from './create-listing.dto';

export class CreateItemDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsBoolean()
  public: boolean;

  listing: CreateListingDto;
}
