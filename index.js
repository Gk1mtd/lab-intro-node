class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)   //adds item to items array
    this.items.sort((a, b) => {   //sorts items asscending
      return a - b
    })
    this.length = this.items.length   //updates length variable
  }

  get(pos) {
    if (pos >= this.length ) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos]
  }

  max() {
    if (!this.length) {
      throw new Error('EmptySortedList');
    }
    return this.items[this.length-1]    //returns highest element of array (because it is certainly ascending)
  }

  min() {
    if (!this.length) {
      throw new Error('EmptySortedList');
    }
    return this.items[0]    //returns smallest element of array (because it is certainly ascending)
  }

  sum() {
    if (!this.length) {
      return 0
    }
    return this.items.reduce((acc, next) => acc+=next)    //returns sum
  }

  avg() {
    if (!this.length) {
      throw new Error('EmptySortedList');
    }
    const avg = this.sum()/this.length
    return avg
  }
}

module.exports = SortedList;
