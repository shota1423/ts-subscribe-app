import { User } from "@/domain/models/User";
import axios from "@/lib/axios/axios";

/**
 * ユーザ作成API
 * @ParamType - User
 * @param user - ユーザ登録情報
 * @returns { success, error }
 */
export const createUser = async ({
  ...props
}: User): Promise<{
  success: boolean;
  error?: any;
}> => {
  const requestBody = {
    name: props.name,
    email: props.email,
    password: props.password,
    age: props.age,
  };

  try {
    await axios.post("/user/create", requestBody);
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error };
  }
};
