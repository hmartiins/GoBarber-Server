// import AppError from '@shared/errors/AppError';

import FakeUserRepository from '../repositories/fakes/FakeUsersRepository';
import FakeUserTokensRepository from '../repositories/fakes/FakeUserTokenRepository';
import ResetPasswordService from './ResetPasswordService';

let fakeUsersRepository: FakeUserRepository;
let fakeUserTokensRepository: FakeUserTokensRepository;
let resetPasswordService: ResetPasswordService;

describe('SendForgotPasswordEmail', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUserRepository();
    fakeUserTokensRepository = new FakeUserTokensRepository();

    resetPasswordService = new ResetPasswordService(
      fakeUsersRepository,
      fakeUserTokensRepository,
    );
  });

  it('should be able to reset the password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const { token } = await fakeUserTokensRepository.generate(user.id);

    await resetPasswordService.execute({
      password: '123123',
      token,
    });

    const updatedUser = await fakeUsersRepository.findById(user.id);

    expect(updatedUser?.password).toBe('123123');
  });
});
