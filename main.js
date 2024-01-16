const hoverbtn=(event,n)=>{
    let x=event.clientX;
    let y=event.clientY;
    let x1=x-n.getBoundingClientRect().left.toFixed();
    let y1=y-n.getBoundingClientRect().top.toFixed()
    n.style.background='radial-gradient(circle at '+x1+'px '+y1+'px, #4CB9E7, #176B87)'

}
const mouseleave=(n)=>{
    n.style=`border: 10;
    font-size: 50px;
    padding: 10px;
    border-radius: 10px;
    font-weight: 500;
    background-color: #176B87;
    color:#FAE7F3;`

}
const clickbtn=(a)=>{
    // a.style=`background-color: #11009E;border: 5;
    // border-color:#1D2B53 ;`
}
const clickcard=(ele) =>{
    ele.style=`
    box-shadow: 0px 0px rgba(169, 169, 169, 0.5);
    transform: translate(10px,10px);    
    display:flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 20px;
    padding: 10px;
    background-color:   white ;
    `
}
const outclick=(ele)=>{
    ele.style=`
    box-shadow: 10px 10px rgba(169, 169, 169, 0.5);

    display:flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 20px;
    padding: 10px;
    background-color:   white ;
    `
}
