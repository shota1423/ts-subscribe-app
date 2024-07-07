import { useCookies } from "next-client-cookies";

export const useCookie = () => {
  const cookie = useCookies();
  const setCookie = (key: string, value: string) => {
    const expires = new Date(Date.now() + 10 * 1000);
    cookie.set(key, value, {
      expires: expires,
      sameSite: "None",
      secure: true,
    });
  };
  const removeCookie = (key: string) => {
    cookie.remove(key);
  };

  const getCookie = (key: string) => {
    cookie.get(key);
  };

  return { setCookie, removeCookie, getCookie };
};
