import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_CALC_URI,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function login(loginData: { user: string; password: string }) {
  const API_URI = process.env.API_CALC_URI as string;
  console.log(API_URI);
  try {
    return await api.post("/auth/sign-in", loginData);
  } catch (error: any) {
    if (error.response.status == 401) {
      alert(error.response.data);
      return;
    }
    if (error.response.status == 400) {
      alert("Please fill in the fields correctly and try again.");
      return;
    }
    alert('Server error');
  } 
}

export async function requestCalc(expression: string) {
  try {
    const { data } = await api.post("/calc", { expression });
    return data.result;
  } catch (error: any) {
    alert(error.response.data);
  }
}
