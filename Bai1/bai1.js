const form = document.querySelector("#danh-gia form");
const ul = document.querySelector("#danh-gia ul");

form.addEventListener("submit", (event) => {
    event.preventDefault();

   
    const name = document.querySelector("#name").value;
    const comment = document.querySelector("#comment").value;

    
    const currentDate = new Date();
    const timestamp = currentDate.toLocaleString();

    const li = document.createElement("li");
    li.innerHTML = `
        <div class="noi-dung">
            <p><strong>${name}</strong>: ${comment}</p>
            <p><em>${timestamp}</em></p>
        </div>
    `;
    ul.appendChild(li);
document.querySelector("#name").value = "";
    document.querySelector("#comment").value = "";
});