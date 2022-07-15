import axios from "axios";
import { getAccessToken } from "../utils/token.util";

class UserService {
  async me() {
    const accessToken = getAccessToken();
    if (!accessToken) {
      return;
    }

    const { data } = await axios.get(
      process.env.NEXT_PUBLIC_API_HOST + "/users/me",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return data;
  }

  async read(id: number) {
    const { data } = await axios.get(
      process.env.NEXT_PUBLIC_API_HOST + "/users/" + id
    );

    return data;
  }
}

export default new UserService();
