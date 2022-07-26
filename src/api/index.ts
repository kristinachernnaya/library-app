export async function getAllBooks() {
  return await fetch("https://riabooksapi.azurewebsites.net/books", {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((response) => response.json())
    .then((jsonData) => {
      return jsonData;
    })
    .catch((error) => {
      console.error(error);
    });
}
