//并查集
class UnionFinde{
    constructor(N) {
        this.count=N;
        this.parents=new Array(N);
        this.sizes=new Array(N);
        for(let i=0;i<N;i++){
            this.parents[i]=i;
            this.sizes[i]=1;
        }
    }
    find(node){
        while(this.parents[node]!==node){
            this.parents[node]=this.parents[this.parents[node]];
            node=this.parents[node];
        }
        return node;
    }
    union(nodeP,nodeQ){
        let rootP=this.find(nodeP);
        let rootQ=this.find(nodeQ);
        if (this.sizes[rootP] > this.sizes[rootQ]) {
            this.parents[rootQ]=rootP;
            this.sizes[rootP]+=this.sizes[rootQ];
        }else{
            this.parents[rootP]=rootQ;
            this.sizes[rootQ]+=this.sizes[rootP];
        }
        this.count--;
    }
    isConnected(nodeP,nodeQ){
        let rootP=this.find(nodeP);
        let rootQ=this.find(nodeQ);
        return rootP===rootQ;
    }
    getCount(){
        return this.count;
    }
    log() {
        console.log(this.parents);
    }
}