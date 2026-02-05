window.onload = function(){
    console.log("keys");

    window.setTimeout(function(e){
        let parent = document.querySelector("parent");
        parent.innerHTML += "New Text"
    },1000)

    window.setInterval(function(e){
        let parent = document.querySelector("parent");
        parent.innerHTML += "Newer Text"
    },1000)
    
    window.addEventListener('keydown', keyHandler);
    window.addEventListener('keyup', keyHandlerUp);


    function keyHandlerUp(event){

        if(event.code === "space"){
            document.querySelector("#boxB").style.background= "blue"
        }
    }
    let speedX =5

    function keyHandler(event){

        if(event.key === "ArrowRight"){

            parseInt(document.querySelector("#boxA").style.left)= document.querySelector ("#boxA").style.left + speedX + "px"
        }
        if(event.key === "ArrowLeft"){

            document.querySelector("#boxA").style.left= prarseInt(document.querySelector ("#boxA").style.left) - speedX + "px"
        }
        if(event.code === "space"){
            document.querySelector("boxB").style.background="orange"
        }

    }
}