
const container = document.querySelector(".container");
const body =document.body;

let counter = 0;

window.addEventListener("mousemove",(ev) => {

   counter++;
   if (counter > 40) 
    {
        randomGradient();
        counter = 0;
    }
    
    container.innerHTML = `
    <div class="mouseEvent">
        <h4>Mouse Position X</h4>
    <p>${ev.clientX}</p>
  </div>

  <div class="mouseEvent">
        <h4>Mouse Position Y</h4>
        <p>${ev.clientY}</p>
  </div>
`;


}); 


function randomColorGenerator()
{
    var characters = ["a","b","c","d","e","f",0,1,2,3,4,5,6,7,8,9];
    var colArray =  [];
    var colorLength = 6;

    for (let i=0; i < colorLength;i++) {
        var randomindex = Math.floor(Math.random() * characters.length);
        colArray.push(characters[randomindex]);
    };
    //console.log("#"+colArray.join(""));
    return `#${colArray.join("")}`;
}


function randomGradient() {
    var color1 = randomColorGenerator();
    var color2 = randomColorGenerator();
    var color3 = randomColorGenerator();

    // document.documentElement.style.setProperty('--color-1', color1);
    // document.documentElement.style.setProperty('--color-2', color2);
    // document.documentElement.style.setProperty('--color-3', color3);

    body.style.setProperty('--color-1', color1);
    body.style.setProperty('--color-2', color2);
    body.style.setProperty('--color-2', color3);

}

//setInterval( randomGradient(),5000).toExponential;
