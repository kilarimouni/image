const accesskey="9RI75J_QeDwY4L5MNAp6YNJlV6AebJnHXzPP-xJSumI"


const formEl=document.querySelector("form")
const inputEl=document.getElementById("search-input")
const searchResults=document.querySelector(".search-results")
const showmore=document.getElementById("show")


let inputData=""
let page =1;

 async function searchImage(){
    inputData= inputEl.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}&per_page=12`; 
    
    const response =await fetch(url)
    const data =await response.json()

    

     const results=data.results;
     if(page===1){
        searchResults.innerHTML=""

     }

     results.map((result)=>{
        const imagewapper=document.createElement("div")
        imagewapper.classList.add("search-result")
        const image= document.createElement("img")
        image.src=result.urls.small;
        image.alt=result.alt_description
        const imageslink=document.createElement("a")
        imageslink.href=result.links.html;
        imageslink.target="_blank"
        imageslink.textContent=result.alt_description;

        imagewapper.appendChild(image);
        imagewapper.appendChild(imageslink)
        searchResults.appendChild(imagewapper)
     });

    page++;
    if(page>1){
        showmore.style.display="block"
    }
}

formEl.addEventListener("submit",(event)=>{
    event.preventDefault()

    page =1
    searchImage()

})

inputEl.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      page = 1;
      searchImage();
    }
  });
  
  


showmore.addEventListener("click",()=>{
   
    searchImage()

})


