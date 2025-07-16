// import axios from "axios";
// import SummaryApi , { baseURL } from "../common/SummaryApi";

// const Axios = axios.create({
//     baseURL : baseURL,
//     withCredentials : true
// })

// //sending access token in the header
// Axios.interceptors.request.use(
//     async(config)=>{
//         const accessToken = localStorage.getItem('accesstoken')

//         if(accessToken){
//             config.headers.Authorization = `Bearer ${accessToken}`
//         }

//         return config
//     },
//     (error)=>{
//         return Promise.reject(error)
//     }
// )

// //extend the life span of access token with 
// // the help refresh
// // Axios.interceptors.request.use(
// //     (response)=>{
// //         return response
// //     },
// //     async(error)=>{
// //         let originRequest = error.config 

// //         if(error.response.status === 401 && !originRequest.retry){
// //             originRequest.retry = true

// //             const refreshToken = localStorage.getItem("refreshToken")

// //             if(refreshToken){
// //                 const newAccessToken = await refreshAccessToken(refreshToken)

// //                 if(newAccessToken){
// //                     originRequest.headers.Authorization = `Bearer ${newAccessToken}`
// //                     return Axios(originRequest)
// //                 }
// //             }
// //         }
        
// //         return Promise.reject(error)
// //     }
// // )
// // Correct: Response interceptor to handle 401 and refresh token
// Axios.interceptors.response.use(
//     (response) => {
//         return response
//     },
//     async (error) => {
//         const originalRequest = error.config;

//         if (error.response && error.response.status === 401 && !originalRequest._retry) {
//             originalRequest._retry = true;

//             const refreshToken = localStorage.getItem("refreshToken");

//             if (refreshToken) {
//                 const newAccessToken = await refreshAccessToken(refreshToken);

//                 if (newAccessToken) {
//                     originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//                     return Axios(originalRequest);
//                 }
//             }
//         }

//         return Promise.reject(error);
//     }
// );



// const refreshAccessToken = async(refreshToken)=>{
//     try {
//         const response = await Axios({
//             ...SummaryApi.refreshToken,
//             headers : {
//                 Authorization : `Bearer ${refreshToken}`
//             }
//         })

//         const accessToken = response.data.data.accessToken
//         localStorage.setItem('accesstoken',accessToken)
//         console.log("Refreshing token with:", refreshToken);
// console.log("New accessToken:", accessToken);

//         return accessToken
//     } catch (error) {
//         console.log(error)
//     }
// }

// export default Axios

import axios from "axios";
import SummaryApi, { baseURL } from "../common/SummaryApi";

const Axios = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

// ✅ Request Interceptor — Send access token
Axios.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("accesstoken");
    console.log("🚀 Sending accessToken:", accessToken);

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ✅ Response Interceptor — Handle 401 and Refresh Token
Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refreshToken");
      console.log("🔁 401 detected. Trying refresh with token:", refreshToken);

      if (refreshToken) {
        const newAccessToken = await refreshAccessToken(refreshToken);

        if (newAccessToken) {
          console.log("✅ New accessToken set. Retrying original request.");
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return Axios(originalRequest);
        } else {
          console.log("❌ Refresh token invalid or expired");
        }
      }
    }

    return Promise.reject(error);
  }
);

// ✅ Function to refresh access token
const refreshAccessToken = async (refreshToken) => {
  try {
    const response = await axios({
      ...SummaryApi.refreshToken,
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });

    const accessToken = response.data?.data?.accessToken;

    if (accessToken) {
      localStorage.setItem("accesstoken", accessToken);
      console.log("🔐 Refreshed accessToken:", accessToken);
      return accessToken;
    } else {
      console.warn("⚠️ No accessToken received during refresh.");
    }
  } catch (error) {
    console.error("❌ Error refreshing token:", error?.response?.data || error.message);
  }

  return null;
};

export default Axios;
