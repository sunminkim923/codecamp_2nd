function solution(n) {
    let answer = '';
    
    for(let i = 0; i < n; i = i + 1) {
        if(i % 2 === 0) {
            answer = answer + "수"
        } else if (i % 2 === 1) {
            answer =  answer + "박"
        }
    }
    return answer;
}
    

// function solution(n) {
//     let answer = '';
    
//     return answer;
// }   for (let i=0; i<n; i=i+1) {
//     i % 2 === 0 = "수"
//     i % 3 === 1 = "박"
// } result answer


// 배열의 길이 .length
// .length -1 을 사용 
