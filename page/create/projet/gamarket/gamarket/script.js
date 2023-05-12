window.addEventListener("scroll",()=>{
    document.getElementById('m').style.backgroundColor=
    document.documentElement.scrollTop>0 ? "grey" : "white"