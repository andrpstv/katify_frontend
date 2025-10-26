export interface AuthRequest {
  email: string;
  username?: string;
  password: string;
  fullname?: string;
}

export interface AuthResponse {
  access_token: string;
  refresh_token?: string;
  expires_at?: string;
}

export interface User {
  email: string;
  username: string;
  fullname: string;
}
