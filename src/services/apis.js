const REACT_APP_BASE_URL=`http://localhost:4000/api/v1`
const BASE_URL=REACT_APP_BASE_URL

export const endpoints={
    RESETPASSWORD_API:`http://localhost:4000/api/v1/auth/reset-passwozrd`,
    RESETPASSSWORDTOKEN_API:BASE_URL+`/auth/reset-password-token`,
    SENDOTP_API:BASE_URL+"/auth/sendotp",
    SIGNUP_API:BASE_URL+"/auth/signup",
    LOGIN_API:BASE_URL+"/auth/login"
}

export const contactusEndpoint={
    CONTACTUS_API:BASE_URL+"/contact"
}