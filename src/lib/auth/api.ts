import { Auth } from "@/domain/models/Auth";
import axiosInstance from "@/lib/axios/axios";
import axios from "axios";

/**
 * ログインAPI
 * @param email - メールアドレス
 * @param password - パスワード
 * @returns token - Bearer Token
 */
type Token = {
  success: boolean;
  token: string;
  refreshToken: string;
  errorMessage: string;
};
export const authLoginUser = async ({ ...props }: Auth): Promise<Token> => {
  const requestBody = {
    email: props.email,
    password: props.password,
  };
  try {
    const response = await axiosInstance.post<Token>(
      "/Auth/login",
      requestBody
    );
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      throw new Error(
        err.response.data.errorMessage ||
          "メールアドレスまたはパスワードが違います。"
      );
    } else {
      throw new Error("ログインに失敗しました。再度行ってください。");
    }
  }
};
