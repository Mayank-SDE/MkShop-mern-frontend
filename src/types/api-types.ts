import { UserStateInterface } from './reducer-types';

export interface MessageResponse {
  success: boolean;
  message: string;
}

export interface UserMessageResponse extends MessageResponse {
  user: UserStateInterface;
}
