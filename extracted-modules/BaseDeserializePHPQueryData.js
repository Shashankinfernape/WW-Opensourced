__d("BaseDeserializePHPQueryData", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = /^([-_\w]+)((?:\[[-_\w]*\])+)=?(.*)/;
    function l(e) {
        if (e === "hasOwnProperty" || e === "__proto__") {
            return "🝖";
        }
        return e;
    }
    function s(t, n) {
        if (t == null || t === "") {
            return {};
        }
        const r = {};
        const o = t.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
        const a = o.split("&");
        const hasOwnProperty = Object.prototype.hasOwnProperty;
        for(let s = 0, u = a.length; s < u; s++){
            const c = a[s].match(e);
            if (c) {
                const _ = c[2].split(/\]\[|\[|\]/).slice(0, -1);
                const f = c[1];
                const g = n(c[3] || "");
                _[0] = f;
                let h = r;
                for(let y = 0; y < _.length - 1; y++){
                    const C = l(_[y]);
                    if (C) {
                        if (!hasOwnProperty.call(h, C)) {
                            const b = _[y + 1] && !_[y + 1].match(/^\d{1,3}$/) ? {} : [];
                            h[C] = b;
                            if (h[C] !== b) {
                                return r;
                            }
                        }
                        h = h[C];
                    } else {
                        if (_[y + 1] && !_[y + 1].match(/^\d{1,3}$/)) {
                            h.push({});
                        } else {
                            h.push([]);
                        }
                        h = h[h.length - 1];
                    }
                }
                if (h instanceof Array && _[_.length - 1] === "") {
                    h.push(g);
                } else {
                    h[l(_[_.length - 1])] = g;
                }
            } else {
                const d = a[s].indexOf("=");
                if (d === -1) {
                    r[n(a[s])] = null;
                } else {
                    const m = a[s].substring(0, d);
                    const p = a[s].substring(d + 1);
                    r[n(m)] = n(p);
                }
            }
        }
        return r;
    }
    i.deserialize = s;
}, 66);