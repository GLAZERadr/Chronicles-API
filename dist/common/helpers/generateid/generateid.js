export class generateIdUser {
    static counter = 0;
    static generateId(prefix) {
        this.counter++;
        return prefix + this.counter.toString();
    }
}
