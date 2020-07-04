// .flat()
const array = [12,3,4,5]
array.flat()

const array2 = [1,[2,3],3,[4,5]]
array2.flat()

//only 1 level flat default!

const array3 = [1,[2,3],3,[[4,5],7]]
array3.flat(3)


entries = ['bob', "sally",,,,,,,,,'cindy']
entries.flat()

//flatMap()
entries= entries.flatMap(element => element +" user")

//trimStart(), trimEnd()


//Object.fromEntries() <- simply opposite of Object.entries()

/* try catch update */