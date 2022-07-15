import { LoginData, SignupData } from "../types/auth.type";
import axios from "axios";
import { getRefreshToken, setAuthTokens } from "../utils/token.util";
class AuthService {
  /** refreshToken을 이용해 새로운 토큰을 발급받습니다. */
  async refresh() {
    const refreshToken =  getRefreshToken();
    if (!refreshToken) {
      return;
    }

    const { data } = await axios.post(
      process.env.NEXT_PUBLIC_API_HOST + "/auth/refresh",
      null,
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      }
    );
    setAuthTokens(data.access, data.refresh)
  }

  /** 새로운 계정을 생성하고 토큰을 발급받습니다. */
  async signup(signupdata: SignupData ) {
    const { data } = await axios.post(
      process.env.NEXT_PUBLIC_API_HOST + "/auth/signup", signupdata);
    setAuthTokens(data.access, data.refresh)
  }

  /** 이미 생성된 계정의 토큰을 발급받습니다. */
  async login(loginData: LoginData) {
    const { data } = await axios.post(
      process.env.NEXT_PUBLIC_API_HOST + "/auth/login", loginData);
    setAuthTokens(data.access, data.refresh)
  }
}

export default new AuthService();
