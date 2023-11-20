import axios from "axios";

const sportInfoApi = import.meta.env.VITE_API_SPORT_INTO;

export async function getSport() {
  try {
    const res = await axios.get(sportInfoApi);

    return res.data;
  } catch (err) {
    console.log(err);
  }
}
