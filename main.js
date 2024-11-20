
const resultCont= document.getElementById("resultCont")

const image = document.getElementById("img")

const loader = document.getElementById('loader')

async function handleClick(e) {
  
  e.preventDefault();
  resultCont.style.display = "none"
  loader.style.display = "block";
  
  const  data = document.getElementById("data").value
  
  
  const fgColorPri = document.getElementById("fgColor").value
  const fgColor= fgColorPri.slice(1)
  
  
  const bgColorPri = document.getElementById("bgColor").value
  const bgColor= bgColorPri.slice(1)
  
  
  let size = document.getElementById("size").value;
  
  if (!size) {
    size = 720;
  }
  
  const format = document.getElementById("format").value
  
  
  const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${data}&size=${size}x${size}&color=${fgColor}&bgcolor=${bgColor}&format=${format}&margin=25`
  
  image.src = apiUrl;
  
  setTimeout(() => {
    loader.style.display = "none";
    resultCont.style.display = "flex"
  },2000)
    
  
  
}


