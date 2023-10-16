import axios from "axios"


export async function getSport() {
    try {
    const res = await axios.get("http://127.0.0.1:8000/api/sport_info")
    return res.data
    }
    catch(err) { 
        console.log(err)
    }
}
