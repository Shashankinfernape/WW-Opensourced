__d("WAWebZip", [
    "WABinary",
    "WACrc32"
], function(t, n, r, o, a, i, l) {
    const e = 33639248;
    const s = 101010256;
    const u = 67324752;
    const c = 46;
    const d = 22;
    const m = 30;
    const p = 0;
    const _ = 0;
    const f = 10;
    function g(date) {
        const t = date.getHours();
        const n = date.getMinutes();
        const r = date.getSeconds();
        return (t << 6 | n) << 5 | r / 2;
    }
    function h(date) {
        const t = date.getFullYear() - 1980;
        const n = date.getMonth() + 1;
        return (t << 4 | n) << 5 | date.getDate();
    }
    function y([t, n]) {
        const { crc, date, path } = n;
        const l = new (o("WABinary")).Binary(undefined, true);
        l.ensureCapacity(m + path.length);
        l.writeUint32(u);
        l.writeUint8(f);
        l.writeUint8(_);
        l.writeUint16(0);
        l.writeUint16(p);
        l.writeUint16(g(date));
        l.writeUint16(h(date));
        l.writeUint32(crc);
        l.writeUint32(t.size());
        l.writeUint32(t.size());
        l.writeUint16(path.length);
        l.writeUint16(0);
        l.writeString(path);
        return l;
    }
    function C([r, a], n) {
        const { crc, date, path } = a;
        const u = new (o("WABinary")).Binary(undefined, true);
        u.ensureCapacity(c + path.length);
        u.writeUint32(e);
        u.writeUint8(f);
        u.writeUint8(_);
        u.writeUint8(f);
        u.writeUint8(_);
        u.writeUint16(0);
        u.writeUint16(p);
        u.writeUint16(g(date));
        u.writeUint16(h(date));
        u.writeUint32(crc);
        u.writeUint32(r.size());
        u.writeUint32(r.size());
        u.writeUint16(path.length);
        u.writeUint16(0);
        u.writeUint16(0);
        u.writeUint16(0);
        u.writeUint16(0);
        u.writeUint32(0);
        u.writeUint32(n);
        u.writeString(path);
        return u;
    }
    function b(e, t, n) {
        const r = new (o("WABinary")).Binary(undefined, true);
        r.ensureCapacity(d);
        r.writeUint32(s);
        r.writeUint16(0);
        r.writeUint16(0);
        r.writeUint16(e);
        r.writeUint16(e);
        r.writeUint32(t);
        r.writeUint32(n);
        r.writeUint16(0);
        return r;
    }
    const v = /[^\x00-\x7F]/g;
    function S(path) {
        return path.replace(/\\/, "/").replace(v, "");
    }
    class R {
        constructor(){
            this.files = [];
            this.filenameCount = {};
        }
        add({ contents, date = new Date, path }) {
            let i = S(path);
            if (this.filenameCount[i] >= 0) {
                this.filenameCount[i] += 1;
                i = i.replace(/\.(\w+)$/, ` (${this.filenameCount[i]}).\$1`);
            } else {
                this.filenameCount[i] = 0;
            }
            this.files.push([
                contents,
                {
                    crc: r("WACrc32")(contents),
                    path: i,
                    date
                }
            ]);
        }
        create() {
            let e = 0;
            let t = 0;
            let n = 0;
            const r = [];
            const a = [];
            this.files.forEach((o, i)=>{
                const l = o[0];
                const s = l.size();
                const u = y(o);
                const c = C(o, n);
                const d = u.size() + s;
                n += d;
                e += d + c.size();
                t += c.size();
                a.push(u, l);
                r.push(c);
            });
            const i = b(this.files.length, t, n);
            const l = new (o("WABinary")).Binary(undefined, true);
            l.ensureCapacity(e + i.size());
            l.write(...a.concat(r, [
                i
            ]));
            return l;
        }
    }
    l.default = R;
}, 98);