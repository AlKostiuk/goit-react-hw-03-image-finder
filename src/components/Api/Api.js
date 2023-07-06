import axios from "axios";
// https://pixabay.com/api/key=35888434-3d1691753ee2e5438d46dc4b1


 export async function api (page,searchPrompt) {
  const response = await axios.get(`https://pixabay.com/api/?q=${searchPrompt}&page=${page}&key=35888434-3d1691753ee2e5438d46dc4b1&per_page=12`);
 console.log(response);
 return response
}




