// 'use server'; // will see server configuration

const AppSheet: string =
  'AKfycbw6EWbKcgb6zQUbYBmIY-9WTFp5tpTLuAjfM2s3BqPs2177V38mYABEynMUMxUJC2f2';

export const sheerURL = (
  username: string,
  whatsappNumber: string,
  email: string,
  message: string,
  intrestedProgram: string
) =>
  `https://script.google.com/macros/s/${AppSheet}/exec?action=create&username=${username}&whatsappNumber=${whatsappNumber}&email=${email}&message=${message}&intrestedProgram=${intrestedProgram}`;
