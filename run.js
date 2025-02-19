function willSuccess(arr){
    if(Array.isArray(arr)){
        let pass=0;
        let fail=0; 
        for(const num of arr){
            if(typeof num ==='number'){
                if(num>=50){
                    pass++
                }else{
                    fail++
                }
            }else{
                return 'Invalid'
            }
        }
        return pass > fail;
    }
    else{
        return 'Invalid'
    }
}

const array = [60, 70, 80, 40, 30];
const result = willSuccess(array);
console.log(result);


