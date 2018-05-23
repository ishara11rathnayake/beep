import { Profile  } from '../Profile/profile.interface'

export interface Message {
    user: Profile;
    date: Date;
    lastMessage: string;
}