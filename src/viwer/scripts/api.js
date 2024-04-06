window.onload = () => {
  const clientBox = document.querySelector("#clients");

  fetch("http://localhost:3300/api/clients")
    .then((response) => response.json())
    .then((clients) => {
      clients.forEach((client) => {
        clientBox.innerHTML += `
        <div class="border border-gray-400 place-items-center py-2 text-white px-10 rounded-lg grid grid-cols-4">
            <img class="w-10 h-10 bg-gray-400 rounded-full" src="${client.photo} alt="client foto" />
            <span class="w-full flex justify-center">${client.name} ${client.lastname}</span>
            <span class="w-full flex justify-center">${client.age}</span>
            <span class="text-red-500">X</span>
        </div>`;
      });
    })
    .catch((error) => {
      console.error("Error fetching clients:", error);
    });
};
