__d("WAWebDomRangeGetContents", [
    "invariant",
    "WAWebDomIsTextNode"
], function(t, n, r, o, a, i, l, s) {
    function e(e) {
        if (e.collapsed) {
            return [];
        }
        if (e.startContainer === e.endContainer) {
            if (r("WAWebDomIsTextNode")(e.startContainer)) {
                return [
                    e.startContainer
                ];
            }
            return Array.from(e.startContainer.childNodes).slice(e.startOffset, e.endOffset);
        }
        const t = e.commonAncestorContainer.childNodes;
        let n;
        if (e.commonAncestorContainer === e.startContainer) {
            n = t[0];
        } else {
            n = u(e.commonAncestorContainer, e.startContainer);
        }
        if (!n) {
            s(0, 56328);
        }
        let o;
        if (e.commonAncestorContainer === e.endContainer) {
            o = t[t.length - 1];
        } else {
            o = u(e.commonAncestorContainer, e.endContainer);
        }
        if (!o) {
            s(0, 56327);
        }
        for(var a = o, i = function(t) {
            return t?.nextSibling;
        }, l = [], c = n; c && c !== a;){
            l.push(c);
            c = i(c) || i(c.parentNode);
        }
        l.push(a);
        return l;
    }
    function u(e, t) {
        for(var n = t; n.parentNode !== e;){
            if (!n.parentNode) {
                return null;
            }
            n = n.parentNode;
        }
        return n;
    }
    l.default = e;
}, 98);