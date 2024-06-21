let textbox = document. getElementsByClassName("textbox")
textbox = textbox[0]
let text = document.getElementsByClassName("text")
text = text[0];
text.setAttribute("contenteditable","true")
let search = document.getElementById("search");

let count = document.getElementById("count");
count.style.height ="30px";

let btn = document.getElementsByClassName("searchbtn");
btn = btn[0]
btn.textContent = "search";
btn.addEventListener('click', () => {
    if(search.value == ""){
        window.alert("Enter a word to search");
        textbox.innerHTML = `<p class="text lead">${text.innerText}</p>`
        return;
    }
    let counter = 0;
    let wordToSearch = search.value;
    let searchPattern = new RegExp(wordToSearch, "gi");
    let newText = text.innerText.replace(searchPattern, match => {
        counter+=1;
        return `<mark>${match}</mark>`;
    })
    if(counter > 0){
        count.textContent = counter;
    }else{
        count.textContent = "No matches found"
    }
    
    let newHTML = `<p class="text lead">${newText}</p>`
    textbox.innerHTML = newHTML;
    search.value =""
}
)

