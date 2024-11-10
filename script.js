const searchText = document.querySelector('#searchText');
const searchForm = document.querySelector('#searchForm');
const imgContainer = document.querySelector('#containerImg')
const userSearch = searchForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const userInput = searchForm.elements.query.value
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${userInput}`)
    makeImg(res.data) 
    searchText.value = ""

})
const makeImg=(shows)=>{
    imgContainer.innerHTML = "";
    for(let result of shows){
        if(result.show.image){
            const img =document.createElement('IMG');
            img.src = result.show.image.medium;

            const imgWrapper = document.createElement('div');
            imgWrapper.classList.add('img-wrapper');

            const overlay = document.createElement('div');
            overlay.classList.add('overlay');
            overlay.innerHTML = `
                <h5>${result.show.name}</h5>
                <p>Release Date: ${result.show.premiered || 'N/A'}</p>
            `;

            imgWrapper.appendChild(img);
            imgWrapper.appendChild(overlay);
            imgContainer.appendChild(imgWrapper);
            // imgContainer.append(img)
        }
    }
}

