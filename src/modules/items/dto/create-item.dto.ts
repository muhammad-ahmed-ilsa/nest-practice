import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { CreateListingDto } from './create-listing.dto';
import { CreateTagDto } from './create-tag.dto';

export class CreateItemDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsBoolean()
  public: boolean;

  listing: CreateListingDto;

  tags: CreateTagDto[];
}
