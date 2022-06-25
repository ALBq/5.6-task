function imgAdd(k) {
    for (let i = 0; i < k.length; i++) {
        let createImg = document.createElement('img')
        document.querySelector('.result').appendChild(createImg);
        createImg.setAttribute('src', k[i]);
        createImg.setAttribute('width', 100);
        createImg.setAttribute('height', 100);
    }
}

document.querySelector('.btn').addEventListener('click', () => {
    const value1 = document.querySelector('.inputNamber').value;
    const value2 = document.querySelector('.inputLimit').value;
    console.log(value1, value2);
    if ((value1 < 1 || value1 > 10 || isNaN(value1)) && (value2 < 1 || value2 > 10 || isNaN(value2))) {
        document.querySelector('.result').innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
    }
    else if (value2 < 1 || value2 > 10 || isNaN(value2)) {
        document.querySelector('.result').innerHTML = "Лимит вне диапазона от 1 до 10";
    }
    else if (value1 < 1 || value1 > 10 || isNaN(value1)) {
        document.querySelector('.result').innerHTML = "Номер страницы вне диапазона от 1 до 10";
    }
    else {
        url = `https://picsum.photos/v2/list?page=${value1}&limit=${value2}`;
        fetch(url)

            .then((response) => {
              return response.json()
            })

            .then((images) => {
                const imgList = []
                images.forEach((image) => {
                    console.log(image.download_url)
                    img = image.download_url;
                    imgList.push(img)

                }
                )
                imgAdd(imgList);
                urlString = JSON.stringify(imgList);
                localStorage.setItem('key1', urlString);
                
            })
            .catch((error)=>{
                console.log(error)
            })
               
              
            
    }
})

const urlMemory = JSON.parse(localStorage.getItem('key1'));
if( Array.isArray(urlMemory) && urlMemory.length>0){
    imgAdd(urlMemory);

}


















