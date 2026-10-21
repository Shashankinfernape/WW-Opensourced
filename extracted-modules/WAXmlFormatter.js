__d("WAXmlFormatter", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        const t = e.replace(/>\s{0,}</g, "><").replace(/</g, "~::~<").replace(/\s*xmlns:/g, "~::~xmlns:").replace(/\s*xmlns=/g, "~::~xmlns=").split("~::~");
        const n = t.length;
        let r = false;
        let o = 0;
        let a = "";
        let i = 0;
        const s = [
            "\n"
        ];
        for(i = 0; i < 100; i++){
            s.push(`${s[i]}    `);
        }
        const u = function(t, n) {
            const e = /^<[\w:\-.,]+/.exec(t[n - 1]);
            const r = /^<\/[\w:\-.,]+/.exec(t[n]);
            return e != null && r != null && e[0] === r[0];
        };
        for(i = 0; i < n; i++){
            if (t[i].search(/<!/) > -1) {
                a += s[o] + t[i];
                r = true;
                if (t[i].search(/-->/) > -1 || t[i].search(/\]>/) > -1 || t[i].search(/!DOCTYPE/) > -1) {
                    r = false;
                }
            } else if (t[i].search(/-->/) > -1 || t[i].search(/\]>/) > -1) {
                a += t[i];
                r = false;
            } else if (u(t, i)) {
                a += t[i];
                if (!r) {
                    o--;
                }
            } else if (t[i].search(/<\w/) > -1 && t[i].search(/<\//) === -1 && t[i].search(/\/>/) === -1) {
                t[i] = l(t[i]);
                a = r ? a += t[i] : a += s[o++] + t[i];
            } else if (t[i].search(/<\w/) > -1 && t[i].search(/<\//) > -1) {
                a = r ? a += t[i] : a += s[o] + t[i];
            } else if (t[i].search(/<\//) > -1) {
                a = r ? a += t[i] : a += s[o === 0 ? o : --o] + t[i];
            } else if (t[i].search(/\/>/) > -1) {
                a = r ? a += t[i] : a += s[o] + t[i];
            } else if (t[i].search(/<\?/) > -1 || t[i].search(/xmlns:/) > -1 || t[i].search(/xmlns=/) > -1) {
                a += s[o] + t[i];
            } else {
                a += t[i];
            }
        }
        if (a[0] === "\n") {
            return a.slice(1);
        }
        return a;
    }
    function l(e) {
        const t = e.match(/(<query.*>|<result>)(\{.*\})/);
        if (t === null) {
            return e;
        }
        try {
            const n = t[1];
            const r = JSON.stringify(JSON.parse(t[2]), null, 2);
            return `${n}
${r}`;
        } catch (t) {
            return `${e}[Error formatting JSON]`;
        }
    }
    i.default = e;
}, 66);