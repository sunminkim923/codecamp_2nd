function solution(arr) {
    let result = 0;
    let sum = 0
    
    for (let i=0; i<arr.length; i=i+1) {
        sum = sum + arr[i];
    }
    result = sum / arr.length;
    return result;
}   
    

// 반복분을 사용한다 
// .length를 사용하여 객체 수 만큼 나눈다
// 