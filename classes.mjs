export class linkedlist{
    list = {};
    mutatedList = [];
    
    append(value){
        this.mutatedList.push(value);
        Object.assign(this.list,this.mutatedList);
        return this.list;
    };
    prepend(value){
        this.mutatedList.unshift(value);
        Object.assign(this.list,this.mutatedList);
        return this.list;
    };
    size(){
        return this.mutatedList.length;
    };
    head(){
        let head = this.mutatedList[0];
        return head;
    };
    tail(){
        let tail = this.mutatedList[this.mutatedList.length-1];
        return tail;
    };
    at(index){
        let node = this.mutatedList[index];
        return node;
    };
    pop(){
        this.mutatedList.pop();
        Object.assign(this.list,this.mutatedList);
        return this.list;
    };
    contains(value){
        return (this.mutatedList.includes(value)) ? true : false;
    };
    find(value){
        return (this.mutatedList.includes(value)) ? `The index of the node is ${this.mutatedList.indexOf(value)}` : null;
    };
    tostring(){
        if (this.mutatedList.length === 1) {
            return `(${this.mutatedList[0]})-> null`;
        } else if (this.mutatedList.length > 1) {
            let string = '';
            for (let i = 0; i < this.mutatedList.length; i++) {
                string += `(${this.mutatedList[i]})-> `
            };
            string += 'null';
            return string;
        } else{
            return 'The list is empty';
        };
    };
    insertAt(value,index){
        let newList = this.mutatedList.splice(index,0,value);
        Object.assign(this.list,newList);
        return this.list;
    };
    removeAt(index){
        let newList = this.mutatedList.splice(index,1);
        Object.assign(this.list,newList);
        return this.list;
    };
};


export class node{
    constructor(value,nextNode){
        value = null;
        nextNode = null;
    }
}