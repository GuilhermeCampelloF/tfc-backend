import * as bcrypt from 'bcryptjs';
import UsersModel from '../models/UsersModel';
import jwt from '../utils/jwt';
import Login from '../Interfaces/Login';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import IUsersModel from '../Interfaces/Users/IUsersModel';
import Token from '../Interfaces/Token';
import IUserRole from '../Interfaces/Users/IUserRole';

export default class UsersService {
  constructor(private usersModel: IUsersModel = new UsersModel()) { }
  public async login(login: Login): Promise<ServiceResponse<Token>> {
    const user = await this.usersModel.getUserByEmail(login.email);
    if (!user || !bcrypt.compareSync(login.password, user.password)) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }
    const { email } = user;
    const token = jwt.sign({ email });
    return { status: 'SUCCESSFUL', data: { token } };
  }

  public async getUserRole(email: string): Promise<ServiceResponse<IUserRole>> {
    const user = await this.usersModel.getUserByEmail(email);
    if (!user) {
      return { status: 'UNAUTHORIZED', data: { message: 'User not found' } };
    }
    return { status: 'SUCCESSFUL', data: { role: user.role } };
  }
}
