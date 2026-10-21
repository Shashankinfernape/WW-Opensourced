__d("EventEmitterWithValidation", [
    "EventEmitter"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t(t, n) {
            let r;
            r = e.call(this) || this;
            r.$EventEmitterWithValidation1 = Object.keys(t);
            r.$EventEmitterWithValidation2 = !!n;
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.emit = function(n) {
            if (this.$EventEmitterWithValidation1.indexOf(n) === -1) {
                if (this.$EventEmitterWithValidation2 === true) {
                    return;
                }
                const t = new TypeError(s(n, this.$EventEmitterWithValidation1));
                t.stack;
                throw t;
            }
            return e.prototype.emit.apply(this, arguments);
        };
        return t;
    })(r("EventEmitter"));
    function s(e, $EventEmitterWithValidation1) {
        let n = `Unknown event type "${e}". `;
        n += `Known event types: ${$EventEmitterWithValidation1.join(", ")}.`;
        return n;
    }
    l.default = e;
}, 98);