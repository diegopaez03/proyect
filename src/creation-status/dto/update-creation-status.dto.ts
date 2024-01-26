import { PartialType } from '@nestjs/mapped-types';
import { CreateCreationStatusDto } from './create-creation-status.dto';

export class UpdateCreationStatusDto extends PartialType(CreateCreationStatusDto) {}
