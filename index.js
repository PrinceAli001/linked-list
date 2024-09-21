class linkedlist{
    list = {};
    
    append(value){
        let mutatedList = Object.entries(this.list);
        mutatedList.push(value);
        this.list = Object.fromEntries(mutatedList);
        return this.list;
    };
    prepend(value){
        let mutatedList = Object.entries(this.list);
        mutatedList.unshift(value);
        this.list = Object.fromEntries(mutatedList);
        return this.list;
    };
    size(){
        let mutatedList = Object.entries(this.list);
        return mutatedList.length;
    };
    head(){
        let mutatedList = Object.entries(this.list);
        let head = mutatedList[0];
        let listHead = Object.fromEntries(head);
        return listHead;
    };
    tail(){
        let mutatedList = Object.entries(this.list);
        let tail = mutatedList[mutatedList.length-1];
        let listTail = Object.fromEntries(tail);
        return listTail;
    };
    at(index){
        let mutatedList = Object.entries(this.list);
        let nodeIndex = mutatedList.indexOf(index);
        let node = mutatedList[nodeIndex];
        let listData = Object.fromEntries(node);
        return listData;
    };
    pop(){
        let mutatedList = Object.entries(this.list);
        mutatedList.pop();
        this.list = Object.fromEntries(mutatedList);
        return this.list;
    };
    contains(value){
        let mutatedList = Object.entries(this.list);
        mutatedList.forEach(element => {
            return (element === value) ? true : false;
        });
    };
    find(value){
        let mutatedList = Object.entries(this.list);
        for (let i = 0; i < mutatedList.length; i++) {
            return (mutatedList[i][1] === value) ? `The index of the node is ${i}` : null;
        }
    };
    tostring(){
        let mutatedList = Object.entries(this.list);
        if (mutatedList.length === 1) {
            return `(${mutatedList[0][1]})-> null`;
        } else if (mutatedList.length > 1) {
            let string = '';
            for (let i = 0; i < mutatedList.length; i++) {
                string += `(${mutatedList[i][1]})->`
            };
            string += 'null';
        } else{
            return 'The list is empty';
        };
    };
    insertAt(value,index){
        let mutatedList = Object.entries(this.list);
        let newList = mutatedList.splice(index,0,value);
        this.list = Object.fromEntries(newList);
        return this.list;
    };
    removeAt(index){
        let mutatedList = Object.entries(this.list);
        let newList = mutatedList.splice(index,1);
        this.list = Object.fromEntries(newList);
        return this.list;
    };
};
class node{
    value = null;
    nextNode = null;
}