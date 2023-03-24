export interface UserI {
  image: string;
  email: string;
  login: string;
  first_name: string;
  second_name: string;
  nickname: string;
  password: string;
  phone: string;
}

export interface ChatI {
  img: string | null;
  name: string;
  date: Date;
  message: string;
  badge: number;
}

export interface DataI {
  user: UserI;
  chats: Array<ChatI>;
}
