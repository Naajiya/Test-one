n=4
for(i=0;i<n;i++){
    str=""
    for(space=n-1;space>i;space--){
        str+=" "
    }
    for(j=0;j<=i;j++){
        str+="* "
    }
    console.log(str);
    
}