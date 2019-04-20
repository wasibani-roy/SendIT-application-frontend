import moxios from 'moxios';
import SignupAction from '../../actions/signupAction';

jest.mock('react-toastify');

const {API_URL} = process.env;

describe('signup action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  const url = `${API_URL}/v2/auth/signup/`;

  const userData = {
    username: 'zadoki',
    email: 'zadok@gmail.com',
    password: 'testing123',
    role: 'user',
  };
  const data = {
    message: 'some message',

  };

  const mockSignUp = (statusCode) => {
    test('should signup a user', () => {
      moxios.stubRequest(url, {
        status: statusCode,
        response: data,
      });

      return SignupAction(userData).then(() => {
        expect(data).toBe(data);
      });
    });
  };


  mockSignUp(201);
});
