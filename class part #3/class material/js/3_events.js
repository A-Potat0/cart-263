
window.onload = setup;
function setup(){
    console.log("events!")

    // let introSection = document.querySelector("#intro");
    // introSection.addEventListener("click", mouseClickCallback)
        
    // let s1 = document.querySelector("#s1");
    // s1.addEventListener("click", mouseClickCallback)

    let allSectionsDown = document.querySelectorAll(".mouseclick-active-section")
    for(let currentSection of allSectionsDown){
        currentSection.addEventListener("mouseenter", mouseClickCallback)
    }

    let allSectionsUp = document.querySelectorAll(".mouseclick-active-section")
    for(let currentSection of allSectionsUp){
        currentSection.addEventListener("mouseleave", mouseClickCallback)
    }




    function mouseClickCallback(eventObj){
        // console.log("clicked");
        console.log(this);
        console.log(eventObj);
        // this.style.background = `rgba(214, 110, 239, 0.5)`;
        let idOfThis = this.getAttribute("id");
        // console.log(document.querySelector(`#${idOfThis} p`));

        if(this.getAttribute("custom-bool") === "inactive"){
            let child = document.querySelector(`#${idOfThis} p`);
            let classToAdd = `${idOfThis}-section-active`;
            this.classList.add(classToAdd);
            let classToAddP = `${idOfThis}-section-p-active`;
            child.classList.add(classToAddP);
            console.log(this.getAttribute("custom-bool"))
            this.setAttribute("custom-bool","active")
        }
        else{
            let child = document.querySelector(`#${idOfThis} p`);
            let classToAdd = `${idOfThis}-section-active`;
            this.classList.remove(classToAdd);
            let classToAddP = `${idOfThis}-section-p-active`;
            child.classList.remove(classToAddP);
            console.log(this.getAttribute("custom-bool"))
            this.setAttribute("custom-bool","inactive")
        }
        
    }

    function mouseClicks1Callback(){
        console.log("s1 clicked");
        console.log(this);
        this.style.background = `rgba(214, 110, 239, 0.5)`
    }

    

}