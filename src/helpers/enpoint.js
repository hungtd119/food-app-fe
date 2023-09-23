import axios from "axios";
const apiUrl = 'https://d9e0-2405-4802-1d97-3050-a143-cbdb-f70d-e249.ngrok-free.app/api/auth'
export const loginAuth = async (email, password) => {
  try {
    const response = await axios.post(
      `${apiUrl}/login`,
      {
        email,
        password,
      }
    );
    if (response.status !== 200) {
      throw new Error("Đăng nhập không thành công");
    }
    const data = response.data;
    return data;
  } catch (error) {
    throw error;
  }
};

export const regsiterAuth = async (username, email, password) => {
  try {
    const response = await axios.post(
      "https://650678063a38daf4803e789c.mockapi.io/api/vi/register",
      {
        username,
        email,
        password,
      }
    );
    if (response.status !== 200) {
      toast.error("Đăng ký không thành công");
      throw new Error("Đăng ký không thành công");
    }
    const data = response.data;
    return data;
  } catch (error) {
    throw error;
  }
};
