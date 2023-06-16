export default interface UserDataInterface {
    id: number;
    name: string;
    role: string;
    gmail: string;
    select: boolean;
  }
  export interface UsersListInterface {
    users: UserDataInterface[];
   }