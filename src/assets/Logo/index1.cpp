#include<bits/stdc++.h>
using namespace std;
int main(){
    int i=5;
    int *ptr=&i;
    cout<<*ptr<<endl;
    cout<<&ptr<<" "<<&i<<endl;
    int **ptr1=&ptr;
    cout<<**ptr1<<endl;

}