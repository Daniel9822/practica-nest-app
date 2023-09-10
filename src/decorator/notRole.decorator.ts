import { SetMetadata } from "@nestjs/common/decorators";

export const NOT_ROLE = 'notRole';
export const NotRole = () => SetMetadata(NOT_ROLE, true)