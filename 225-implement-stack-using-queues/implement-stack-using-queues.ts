class MyStack {
    // constructor() {
    // Using the 'public' shorthand automatically creates and assigns this.myStack
    constructor(public myStack: number[] = []) { }

    push(x: number): void {

        const oldSize = this.myStack.length
        this.myStack.push(x)

        for (let i = 0; i < oldSize; i++) {
            const front = this.myStack.shift()!
            this.myStack.push(front)
        }
    }

    pop(): number {
        return this.myStack.shift()

        // return this.myStack.pop()
    }

    top(): number {
        // if (this.myStack.length === 0) {
        return this.myStack[0]
        // }

        // return this.myStack[this.myStack.length - 1]
    }

    empty(): boolean {
        return this.myStack.length === 0
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */