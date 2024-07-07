class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    } 

    setNextNode(nextNode){
        this.next = nextNode
    }
}


const instance = new Node("data-1")
const nextInstance = new Node("data-2")
instance.setNextNode(nextInstance)

console.log(instance)