import {client} from '~/services/axios-client';

export interface RequestAuthExists {
  email: string;
}

export interface RequestAuthLogin {
  email: string;
  password: string;
}

export interface RequestAuthRegister {
  email: string;
  name: string;
  password: string;
}

export const authExists = async ({email}: RequestAuthExists) => {
  try {
    const response = await client.get(`/auth/exists/${email}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const authLogin = async ({email, password}: RequestAuthLogin) => {
  try {
    const response = await client.post('/auth/login', {email, password});

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const authRegister = async ({
  email,
  name,
  password,
}: RequestAuthRegister) => {
  try {
    const response = await client.post('/auth/register', {
      email,
      name,
      password,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
