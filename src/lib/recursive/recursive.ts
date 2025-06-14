export function recursive(word:string) {
    // Helper function to generate partitions
    function recursiveHelper(prefix, remaining) {
        if (remaining.length === 0) {
            results.push(prefix);
            return;
        }
        
        for (let i = 1; i <= remaining.length; i++) {
            let part = remaining.slice(0, i);
            recursiveHelper([...prefix, part], remaining.slice(i));
        }
    }

    let results = [];
    recursiveHelper([], word);
    return results;
}
    
    let countArr = []
    export  function recursive2(count:number) {

        countArr = []
        
        if(count > 1) {
            countArr.push(count)
            count = count - 1;
            recursive2(count);
        } else {
            return;
        };    
        countArr.push(count)
        return countArr;
   
    };
    


