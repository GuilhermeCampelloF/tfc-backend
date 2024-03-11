import SequelizeUsers from '../database/models/SequelizeUsers';
import IUsers from '../Interfaces/Users/IUsers';
import IUsersModel from '../Interfaces/Users/IUsersModel';

export default class UsersModel implements IUsersModel {
  private model = SequelizeUsers;
  async getUserByEmail(email: IUsers['email']): Promise<IUsers | null> {
    const dbData = await this.model.findOne({ where: { email } });
    if (!dbData) return null;
    const user = dbData.dataValues;
    return user;
  }
}
