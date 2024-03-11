import IUsers from './IUsers';

export default interface IUsersModel {
  getAllUsers(): Promise<IUsers[]>,
  getUserByEmail(email: IUsers['email']): Promise<IUsers | null>
}
