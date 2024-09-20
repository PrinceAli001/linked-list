class linkedlist{
    list = {};
    
    append(value){
        let mutatedList = {...this.list,value};
        this.list = mutatedList;
        return this.list;
    };
    prepend(value){
        let mutatedList = {value,...this.list};
        this.list = mutatedList;
        return this.list;
    };
    size(){
        return this.list.length;
    };
    head(){
        let head = {...this.list[0]};
        return head;
    };
    tail(){
        let tail = {...this.list[this.list.length-1]};
        return tail;
    };
    at(index){
        let mutatedList = {...this.list[index]};
        return mutatedList;
    };
    pop(){
        let mutatedList = {...this.list}.pop();
        return mutatedList;
    };
    contains(value){
        let mutatedList = {...this.list};
        mutatedList.forEach(element => {
            return (element === value) ? true : false;
        });
    };
    find(value){
        let mutatedList = {...this.list};
        mutatedList.forEach(element => {
            return (element === value) ? mutatedList.indexOf(element) : null;
        });
    };
};
class node{
    value = null;
    nextNode = null;
}