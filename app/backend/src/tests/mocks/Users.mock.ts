const validUser = {
  id: 1,
  username: 'validUser',
  role: 'admin',
  email: 'validEmail@email.com',
  password: 'validPassword',
}

const validLoginRequest = {
  email: 'validEmail@email.com',
  password: 'validPassword',
}

const invalidLoginRequest = {
  email: 'notFoundEmail@email.com',
  password: 'randomPassword',
}

const loginWithoutEmail = {
  email: '',
  password: 'randomPassword',
}

const loginWithoutPassword = {
  email: 'randomEmail@email.com',
  password: '',
}

export default {
  validUser,
  validLoginRequest,
  invalidLoginRequest,
  loginWithoutEmail,
  loginWithoutPassword,
}