// Login User Type Here
export interface ILoginInfo {
  email: string;
  password: string;
}

// Register User Type Here
export interface IOtpToken {
  token: string;
}

// Verify OTP Types Here
export interface IVerifyOTP {
  otp: string;
}

export interface IRegisterInfo {
  name: string;
  email: string;
  password: string;
  contact?: string;
}

// API Type Declarations
export interface IVerification {
  otp: number;
  expiresAt: string;
  status: boolean;
}

export interface IUser {
  _id: string;
  email: string;
  contact: string;
  createdAt: string;
  image: string;
  isDeleted: boolean;
  isverified: boolean;
  name: string;
  password: string;
  role: string;
  status: number;
  updatedAt: string;
  verification: IVerification;
}

export interface authResponseData {
  user: IUser;
  accessToken: string;
  refreshToken: string;
  otpToken: IOtpToken;
}
export interface IMyProfile {
  _id: string;
  email: string;
  contact: string;
  createdAt: string;
  image: string;
  isDeleted: boolean;
  isverified: boolean;
  name: string;
  role: "user" | "admin";
  status: number;
  updatedAt: string;
}

export interface IResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
