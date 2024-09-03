function getMax<T>(arr : T[], biggerThan : CallableFunction): T{
    return arr.reduce((max, current) => {
        return biggerThan(current,max) ? current : max;
    }, arr[0]);;
}

console.log(
    getMax([1,4,555,6,100,302],(a: number,b: number) => {
        return a > b
    })
)

console.log(
    getMax(["lol","lololol","lololololololoy","lolita","lolitalol","lonita"],(a: string,b: string) => {
        return a.length > b.length
    })
)
