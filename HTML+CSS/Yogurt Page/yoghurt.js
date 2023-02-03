function apply(){
            let name=prompt("What is your name?");
            if (name.length) {
                alert('Thanks, ' + name + ' , we will be in touch. Meanwhile, have a lot of Yogurt!')
            } else {
                alert('No name, no Greek Yogurt for you!')
            }
            
            
        }
        
        let applyButton = document.querySelector("button");
        applyButton.addEventListener("click", apply);