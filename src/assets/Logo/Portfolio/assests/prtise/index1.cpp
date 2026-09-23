int find_resonance(int reso,int index,int n){
    if(index==n){
        if(reso%4==0 || reso==0){
            return 1;
        }
        return 0;
    }
    int ans=0;
    for(int i=0;i<3;i++){
        if(i==0){
            ans+=find_resonance(reso+1,index+1,n);

        }
        if(i==1){
            if(reso==3){
                return 0;
            }
            ans+=find_resonance(reso,index+1,n);

        }
        else{
            ans+=find_resonance(reso,index+1,n);
        }
    }
    return ans;
}
int main(){
    return find_answer(0,0,4);a
}