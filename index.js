class Node{
    constructor(value) {
        this.value=value
        this.next=null
    }
}

class LikedList{
    constructor(value){
        const newNode= new Node(value)
        this.head=newNode
        this.tail=this.head
        this.length=1
    }
    push(value){
        const newNode=new Node(value)
        if(!this.head){
            this.head=newNode
            this.tail=this.head
        }else{
            this.tail.next=newNode
            this.tail=newNode
        }
        this.length++
        return this
    }
    pop(){
        if(!this.head) return undefined
        let temp=this.head
        let pre= this.head

        while(temp.next){
            pre=temp
            temp=temp.next
        }
        this.tail=pre
        this.tail.next= null
        this.length--

        if(this.length==0){
            this.head=null
            this.tail=null
        }

    }
    unshift(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
        }else{
            newNode.next=this.head
            this.head=newNode
        }
        this.length++
        return this
    }
    shift(){
        if(!this.head) return undefined
        let temp=this.head
        this.head=this.head.next
        temp.next=null
        this.length--
        if(this.length==0){
            this.tail=null
        }
        return this
    }
    get(index){
        if(index < 0 || index >= this.length){
            return undefined
        }
        let temp=this.head
        for(let x=0 ; x < index; x++){
            temp=temp.next
        }
        return temp
    }

    set(index,value){
        let temp = this.get(index)
       if(temp){
        temp.value=value
        return temp
       }
       return undefined
    }

    insert(index,value){
        if(index == 0) return this.unshift(value)
        if(index == this.length) return this.push(value)
        if(index < 0 || index >= this.length) return undefined

        const newNode = new Node(value)
        let temp = this.get(index-1)
        newNode.next=temp.next
        temp.next=newNode
        this.length++
        return true
    }

    remove(index){
        if(index < 0  || index > this.length) return undefined
        if(index == 0 ) return this.shift
        if(index == this.length-1) return this.pop()

        let pre =this.get(index-1)
        let temp = pre.next
        pre.next=temp.next
        temp.next=null
        this.length-- 
        return temp
    }

    reverse(){
        let temp=this.head
        this.head=this.tail
        this.tail=temp

        let next=temp.next
        let prev=null

        for(let i=0; i<this.length; i++){
            next=temp.next
            temp.next=prev
            prev=temp
            temp=next
        }

    }
}

let myLinkedList= new LikedList(1)
myLinkedList.push(2)
myLinkedList.push(3)

console.log(myLinkedList)
myLinkedList.reverse()
console.log(myLinkedList)


// myLinkedList.shift()
// console.log(myLinkedList.set(1,1))
// console.log(myLinkedList.get(0))
// console.log(myLinkedList)