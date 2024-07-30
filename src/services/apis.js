const REACT_APP_BASE_URL=`http://localhost:4000/api/v1`
const BASE_URL=REACT_APP_BASE_URL

export const endpoints={
    RESETPASSSWORD_API:BASE_URL+"/auth/reset-password",
    RESETPASSSWORDTOKEN_API:BASE_URL+`/auth/reset-password-token`
}