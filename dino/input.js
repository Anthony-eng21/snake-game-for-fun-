let inputDirection = { x: 0, y: 0}
//by default we dont want the snake to go anywhere at bg
let lastInputDirection = { x: 0, y: 0 }//default
window.addEventListener('keydown', e => {
    switch (e.key) {
       case 'ArrowUp':
        if (lastInputDirection.y != 0) break
       inputDirection = { x: 0, y: -1}//y=-1 because thats up with the segment's(==>)
        break

       case 'ArrowDown':
        if (lastInputDirection.y != 0) break
       inputDirection = { x: 0, y: 1}//y=1 because thats down with the segment's(==>)
        break

       case 'ArrowLeft':
        if (lastInputDirection.x != 0) break 
       inputDirection = { x: -1, y: 0}//x=-1 because thats left with the segment's(==>)
        break
        
       case 'ArrowRight':
        if (lastInputDirection.x != 0) break 
       inputDirection = { x: 1, y: 0}//x=1 because thats right with the segment's(==>)
        break
    } 
})
    window.addEventListener(
        "keydown",
        (e) => {
            if (
                ["ArrowUp", "ArrowDown"].indexOf(
                    e.code
                ) >-1
            ) {
                e.preventDefault();
            }
        },
        false
    );
export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection 
}