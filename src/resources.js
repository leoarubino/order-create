import axios from "axios";

export async function makePost(data) {
  const apiBaseUrl = "https://webhook.site/d53f0363-1194-4e49-81f2-b83028796eed";
  // to se request go to https://webhook.site/#!/d53f0363-1194-4e49-81f2-b83028796eed
  const payload = data;

  try {
    const response = await axios.post(
      apiBaseUrl + "/pedidos/guardar",
      JSON.stringify(payload)
    );
    if (response.status === 200) {
      console.log("200");
    } else if (response.status === 204) {
      console.log("204");
    } else {
      console.log(response.status);
    }
  } catch (e) {
    console.log("Fetch error: ", e);
  }
}
