// import Axios from "./Axios"
// import SummaryApi from "../common/SummaryApi"

// const fetchUserDetails = async()=>{
//     try {
//         const response = await Axios({
//             ...SummaryApi.userDetails
//         })
//         return response.data
//     } catch (error) {
//         console.log(error)
//     }
// }

// export default fetchUserDetails
import Axios from "./Axios"
import SummaryApi from "../common/SummaryApi"

const fetchUserDetails = async (authToken) => {
    try {
        const response = await Axios({
            ...SummaryApi.userDetails,
            headers: {
                'Authorization': `Bearer ${authToken}` // Include the token in the headers
            }
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export default fetchUserDetails
