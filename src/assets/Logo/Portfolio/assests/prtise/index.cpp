#include<bits/stdc++.h>
using namespace std;
class DisjointSetUnion{
    public:
    vector<int>rank,size,parent;
    DisjointSetUnion(int n){
        rank.resize(n+1,0);
        parent.resize(n+1);
        size.resize(n+1,1);
        for(int i=0;i<=n;i++){
            parent[i]=i;
        }
    }
    int find_parent(int u){
        if(parent[u]==u){
            return u;
        }
        return parent[u]=find_parent(parent[u]);
    }
    void JoinByRank(int u,int v){
        int ult_u=find_parent(u);
        int ult_v=find_parent(v);
        if(rank[ult_u]<rank[ult_v]){
            parent[ult_u]=ult_v;
        }
        else if(rank[ult_u]>rank[ult_v]){
             parent[ult_v]=ult_u;

        }
        else {
             parent[ult_u]=ult_v;
             rank[ult_u]++;
        }


    }
    void JoinBySize(int u,int v){
        int ult_u=find_parent(u);
        int ult_v=find_parent(v);
        if(size[ult_u]>size[ult_v]){
            parent[ult_v]=ult_u;
            size[ult_u]++;
        }
        else{
            parent[ult_u]=ult_v;
            size[ult_v]++;

        }
        


    }

    
};
int main(){
    int n=7;
    DisjointSetUnion ds(n);
    ds.JoinBySize(1,2);
    ds.JoinBySize(2,3);
    ds.JoinBySize(4,5);
    ds.JoinBySize(6,7);
    ds.JoinBySize(5,6);
    if(ds.find_parent(3)==ds.find_parent(7)){
        cout<<"same";
    }
    else{
        cout<<"not same"<<endl;
    }
    ds.JoinBySize(3,7);
    if(ds.find_parent(3)==ds.find_parent(7)){
        cout<<"same";
    }
    else{
        cout<<"not same"<<endl;
    }
    

    
}