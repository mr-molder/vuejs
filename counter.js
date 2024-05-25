let Counter = {
    count:0,
    add(value) {
        Counter.count += value
    },
    sub(value) {
        this.count -= value
    }
}
