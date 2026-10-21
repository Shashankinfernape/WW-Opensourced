__d("FbtResult", [
    "FbtReactUtil",
    "FbtResultBase"
], function(t, n, r, o, a, i) {
    const e = function(t) {
        return t.content;
    };
    const l = ((t)=>{
        "use strict";
        function r(content, o) {
            let a;
            a = t.call(this, content, o) || this;
            a.$$typeof = n("FbtReactUtil").REACT_ELEMENT_TYPE;
            a.key = null;
            a.ref = null;
            a.type = e;
            a.props = {
                content
            };
            return a;
        }
        babelHelpers.inheritsLoose(r, t);
        r.get = function(t) {
            return new r(t.contents, t.errorListener);
        };
        return r;
    })(n("FbtResultBase"));
    a.exports = l;
}, null);