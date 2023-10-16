import axios from "axios"


export async function getSport() {
    try {
    const res = await axios.get("http://127.0.0.1:8000/doc")
    return res.data
    }
    catch(err) { 
        console.log(err)
    }
}