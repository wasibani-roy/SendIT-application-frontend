import moxios from 'moxios';
import LoginAction from '../../actions/loginAction';

jest.mock('react-toastify');

const {API_URL} = process.env;

describe('login action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  const url = `${API_URL}/v2/auth/login/`;
  const userData = {
    email: 'roy@andela.com',
    password: 'secret#1',
  };
  const data = {

    access_token: 'dgsggyreiyfg678yu8ve7bbo8',
    message: 'some message',

  };

  const mockLogin = (statusCode) => {
    test('should login user', () => {
      moxios.stubRequest(url, {
        status: statusCode,
        response: data
      });

      return LoginAction(userData).then(() => {
        expect(data).toBe(data);
      });
    });
  };

  mockLogin(200);
});
