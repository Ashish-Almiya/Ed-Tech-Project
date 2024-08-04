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

export const settingsEndpoints={
    UPDATE_DISPLAY_PICTURE_API:BASE_URL+"/profile/updateDisplayPicture",
    UPDATE_PROFILE_API:BASE_URL+"/profile/updateProfile",
    CHANGE_PASSWORD_API:BASE_URL+"/auth/changePassword",
    DELETE_PROFILE_API:BASE_URL+"/profile/deleteProfile"
}

export const profileEndpoints={
    GET_USER_ENROLLED_COURSE_API:BASE_URL+"/profile/getEnrolledCourses"
}