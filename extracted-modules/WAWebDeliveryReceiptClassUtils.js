__d("WAWebDeliveryReceiptClassUtils", [], function(t, n, r, o, a, i) {
    function e(e, t) {
        if (e.isStatus() || t?.isGroupStatus === true) {
            return "status";
        }
    }
    function l(e, { author, externalId, from, receiptClass }) {
        let i = e.get(from);
        if (i == null) {
            i = new Map;
            e.set(from, i);
        }
        let l = i.get(receiptClass);
        if (l == null) {
            l = new Map;
            i.set(receiptClass, l);
        }
        let s = l.get(author);
        if (s == null) {
            s = [];
            l.set(author, s);
        }
        s.push(externalId);
    }
    i.getDeliveryReceiptClass = e;
    i.addReceiptByClass = l;
}, 66);