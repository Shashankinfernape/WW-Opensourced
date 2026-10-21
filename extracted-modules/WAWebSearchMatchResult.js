__d("WAWebSearchMatchResult", [
    "err"
], function(t, n, r, o, a, i, l) {
    const e = (()=>{
        function e(t, n) {
            if (this.constructor === e) {
                throw r("err")("WAWebSearchMatchResult is abstract and cannot be instantiated directly. Use a subclass instead.");
            }
            this.startIndex = t;
            this.length = n;
        }
        const t = e.prototype;
        t.isMatch = function() {
            return this.startIndex >= 0;
        };
        t.compareTo = function(t) {
            if (this.startIndex !== t.startIndex) {
                return this.startIndex - t.startIndex;
            }
            return t.length - this.length;
        };
        e.noMatch = function() {
            throw r("err")('Method "noMatch" must be implemented by subclass.');
        };
        return e;
    })();
    l.WAWebSearchMatchResult = e;
}, 98);