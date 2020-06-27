//https://leetcode-cn.com/problems/lru-cache/
class LRUCache {
    constructor(capacity) {
        this.map = new Map();
        this.capacity = capacity;
        this.firstItem = null;
        this.lastItem = null;
    }
    get(key) {
        if (this.map.has(key)) {
            let obj = this.map.get(key);
            this.removeItem(key);
            this.addFirst(key, obj.value);
            return obj.value;
        }
        return -1;
    }
    put(key, value) {
        if (this.map.has(key)) {
            this.removeItem(key);
            this.addFirst(key, value);
            return;
        }
        if (this.map.size >= this.capacity) {
            this.removeLast();
        }
        this.addFirst(key, value)
    }
    removeLast() {
        if (this.map.size === 1) {
            this.map.delete(this.lastItem.key)
            this.lastItem = null;
            return;
        }
        let newLastItem = this.lastItem.left;
        this.lastItem.left.right = null;
        this.map.delete(this.lastItem.key)
        this.lastItem = newLastItem;
    }
    addFirst(key, value) {
        let obj = { key, value, left: null, right: this.firstItem };
        if (this.firstItem !== null)
            this.firstItem.left = obj;
        this.firstItem = obj;
        this.map.set(key, obj);
        if (this.map.size === 1) {
            this.lastItem = this.firstItem;
        }
    }
    removeItem(key){
        if(!this.map.has(key))
            return;
        let obj=this.map.get(key);
        if(obj.key===this.firstItem.key){
            this.firstItem=obj.right;
        }
        if(obj.key===this.lastItem.key){
            this.lastItem=obj.left;
        }
        if(obj.left!==null){
            obj.left.right=obj.right;
        }
        if(obj.right!==null){
            obj.right.left=obj.left;
        }
        this.map.delete(key);
    }
    log() {
        console.log(this.map);
        console.log("#####################");
        console.log(this.firstItem);
        console.log("#####################");
        console.log(this.lastItem);
    }
}

let lru = new LRUCache(2);
console.log(lru.get(2));
lru.put(2,6)
console.log(lru.get(1));
lru.put(1,5);
lru.put(1,2)
console.log(lru.get(1));
console.log(lru.get(2));



["LRUCache","get","put","get","put","put","get","get"]
[[2],[2],[2,6],[1],[1,5],[1,2],[1],[2]]


