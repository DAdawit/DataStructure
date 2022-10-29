class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class dLinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }

    push(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {
        if (this.length == 0) return undefined
        let temp = this.tail
        if (this.length === 1) {
            this.tail = null
            this.head = null
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
            temp.prev = null
        }
        this.length--
        return temp

    }
    unshift(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }

        this.length++
        return this

    }

    shift() {
        if (!this.head) return undefined
        let temp = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            this.head.prev = null
            temp.next = null
        }
        this.length--
        return this
    }


    get(index) {
        if(index < 0 || index >this.length-1) return undefined
        let temp = this.head
        if (index < this.length / 2) {
            for (let i = 0; i < index; i++) {
                temp = temp.next
            }
        } else {
            let temp = this.tail
            for (let i = this.length - 1; i > index; i--) {
                temp = temp.prev
            }
        }
        return temp
    }

    set(index, value) {
        let temp = this.get(index)
        if (temp) {
            temp.value = value
            return true
        } 
        return false
    }
    insert(index,value){
        const newNode=new Node(value)
        if(index==0) return this.unshift(value)
        if(index == this.length) return this.push(value)
        if(index < 0 || index > this.length) return undefined

        let temp=this.get(index)
         let before = temp.prev
         let after= temp
         before.next=newNode
         newNode.prev=before
         newNode.next=after
         after.prev=newNode
        this.length++

         return this

    }


}

let dList = new dLinkedList(1)
dList.push(3)
dList.push(4)
dList.insert(1,2)
console.log(dList);
// dList.set(10,4)
// dList.unshift(1)

// let x=dList.set(-1,4)
// console.log(x);
// let res = dList.get(2)

// console.log(res);