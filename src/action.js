import Render from "./render.js"

export default class Action{

    Attack(board,type = 'user'){ 
        let container = document.getElementById('main-body')
        
        container.addEventListener('click',(event)=>{
            let element = event.target
            
            if(element.classList.value === 'item'){
                console.log(element)
                // get coordinates from element
                let x = element.dataset.x
                let y = element.dataset.y
                // Receive attack in gameboard
                board.receiveAttack(x,y)
                // // get board holder from dom
                // container.textContent = ""

                let render = new Render()
                render.reRender(board, type = 'user')
                
            }

        })

    }
}   