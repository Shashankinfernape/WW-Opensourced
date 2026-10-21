__d("ResourceTimingsStore", [
    "CircularBuffer",
    "ResourceTypes",
    "TimingAnnotations",
    "URI",
    "performanceAbsoluteNow"
], function(t, n, r, o, a, i) {
    "use strict";
    let e;
    let l;
    const s = 1000;
    const u = new (n("TimingAnnotations")).EmptyTimingAnnotations;
    const c = {};
    const d = {};
    Object.keys(n("ResourceTypes")).forEach((e)=>{
        const t = n("ResourceTypes")[e];
        const entries = new (n("CircularBuffer"))(s);
        const o = new Map;
        entries.onEvict(function(e) {
            o.delete(e);
        });
        c[t] = {
            idx: 1,
            entries
        };
        d[t] = o;
    });
    function m(t, r, idx) {
        let a;
        switch(t){
            case "css":
            case "js":
                const i = p.parseMakeHasteURL(r);
                const l = i == null ? "unknown_resource" : i[0];
                a = `${idx}_${l}`;
                break;
            case "xhr":
                const s = new (e || (e = n("URI")))(r).getQualifiedURI();
                const u = s.getDomain() + s.getPath();
                a = `${idx}_${u}`;
                break;
            default:
                a = "never here";
        }
        return a;
    }
    var p = {
        getUID: function(t, n) {
            const e = c[t];
            const uid = m(t, n, e.idx);
            e.entries.write(uid);
            d[t].set(uid, {
                uri: n,
                uid
            });
            e.idx++;
            return uid;
        },
        updateURI: function(t, n, r) {
            const e = d[t].get(n);
            if (e != null) {
                e.uri = r;
            }
        },
        getMapFor: function(t) {
            return d[t];
        },
        parseMakeHasteURL: function(t) {
            const e = t.match(/\/rsrc\.php\/.*\/([^\?]+)/);
            if (!e) {
                return null;
            }
            const n = e[1];
            let r = "";
            const o = n.match(/\.(\w+)$/);
            if (o) {
                r = o[1];
            }
            return [
                n,
                r
            ];
        },
        measureRequestSent: function(t, r) {
            const e = d[t];
            const o = e.get(r);
            if (!(o == null || o.requestSent != null)) {
                o.requestSent = (l || (l = n("performanceAbsoluteNow")))();
            }
        },
        measureResponseReceived: function(t, r) {
            const e = d[t];
            const o = e.get(r);
            if (!(o == null || o.requestSent == null || o.responseReceived != null)) {
                o.responseReceived = (l || (l = n("performanceAbsoluteNow")))();
            }
        },
        annotate: function(t, r) {
            const e = d[t];
            const o = e.get(r);
            if (o) {
                const a = o.annotations;
                if (a != null) {
                    return a;
                }
                const i = new (n("TimingAnnotations"));
                o.annotations = i;
                return i;
            } else {
                return u;
            }
        },
        getAnnotationsFor: function(t, n) {
            const e = d[t];
            const r = e.get(n);
            if (r) {
                const o = r.annotations;
                if (o != null) {
                    return o.prepareToSend();
                }
                return null;
            } else {
                return null;
            }
        }
    };
    a.exports = p;
}, null);