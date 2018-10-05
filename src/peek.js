Object.assign(Array.prototype, {
    peek(callback) {
            this.forEach(element => callback(element))
            return this
        }
});