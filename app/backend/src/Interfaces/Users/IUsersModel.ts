import IUsers from './IUsers';

export default interface IUsersModel {
  getUserByEmail(email: IUsers['email']): Promise<IUsers | null>
}
