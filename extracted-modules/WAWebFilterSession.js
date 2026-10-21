__d("WAWebFilterSession", [], function(t, n, r, o, a, i) {
    class e {
        constructor(){
            this.initSessionId();
        }
        initSessionId() {
            this.sessionId = this.newSessionId();
        }
        newSessionId() {
            this.sessionId = Math.floor(2147483648 * Math.random());
            return this.sessionId;
        }
    }
    i.default = e;
}, 66);