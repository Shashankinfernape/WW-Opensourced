__d("WAWebProductCatalogSession", [
    "WALogger"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = "accidental_session";
    class u {
        constructor(e){
            this.accidental = e || false;
            this.initSessionId();
        }
        isAccidental() {
            return this.accidental;
        }
        initSessionId() {
            this.sessionId = this.newSessionId();
        }
        newSessionId() {
            this.sessionId = Math.floor(2147483648 * Math.random());
            return this.sessionId;
        }
        toString() {
            let t = `${this.sessionId}`;
            if (this.accidental) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "sessionId unset, returning random accidental session"
                ])));
                t = `${s}_${t}`;
            }
            return t;
        }
    }
    l.ProductCatalogSession = u;
}, 98);