__d("WAWebFormatSerialize", [
    "err"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        return e.onRoot(u(e, t.children, n), n);
    }
    function s(e, child, n) {
        if (child.type) {
            const o = child.value;
            switch(child.type){
                case "text":
                    return e.onText(o, n);
                case "delimiter":
                    return e.onDelimiter(o, n);
                default:
                    throw r("err")("Invalid node type");
            }
        }
        return e.onMutator(child.mutator, u(e, child.children, n), child.match[5], child.opts, n);
    }
    function u(e, children, n) {
        return children.reduce((acc, child)=>{
            acc.push(s(e, child, n));
            return acc;
        }, []);
    }
    l.default = e;
}, 98);