#include<bits/stdc++.h>
using namespace std;

int main(){
	int arr[10]={1, 4, 5, 3, 7, 2, 4, 8, 4, 9};
	int kq[11];
	int tich =1;
	for(int i=0; i<10; i++){
		tich*=arr[i];
       // cout<<tich<<" ";
	}
	for(int i=0; i<10; i++){
		kq[i]=tich/arr[i];
		cout << kq [i] << " ";
	}
	return 0;
}