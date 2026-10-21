__d("json5", [], function(t, n, r, o, a, i) {
    const e = typeof i === "object" ? i : {};
    e.parse = (()=>{
        "use strict";
        let e;
        let t;
        const n = {
            "'": "'",
            '"': '"',
            "\\": "\\",
            "/": "/",
            "\n": "",
            b: "\b",
            f: "\f",
            n: "\n",
            r: "\r",
            t: "	"
        };
        const r = [
            " ",
            "	",
            "\r",
            "\n",
            "\v",
            "\f",
            "\xA0",
            "\uFEFF"
        ];
        let o;
        const a = (t)=>{
            const n = new SyntaxError;
            n.message = t;
            n.at = e;
            n.text = o;
            throw n;
        };
        const i = (n)=>{
            if (n && n !== t) {
                a(`Expected '${n}' instead of '${t}'`);
            }
            t = o.charAt(e);
            e += 1;
            return t;
        };
        const l = ()=>o.charAt(e);
        const s = ()=>{
            let e = t;
            for(t !== "_" && t !== "$" && (t < "a" || t > "z") && (t < "A" || t > "Z") && a("Bad identifier"); i() && (t === "_" || t === "$" || t >= "a" && t <= "z" || t >= "A" && t <= "Z" || t >= "0" && t <= "9");){
                e += t;
            }
            return e;
        };
        const u = ()=>{
            let e;
            let n = "";
            let r = "";
            let o = 10;
            if (t === "-" || t === "+") {
                n = t;
                i(t);
            }
            if (t === "I") {
                e = f();
                if (typeof e !== "number" || isNaN(e)) {
                    a("Unexpected word for number");
                }
                if (n === "-") {
                    return -e;
                }
                return e;
            }
            if (t === "N") {
                e = f();
                if (!isNaN(e)) {
                    a("expected word to be NaN");
                }
                return e;
            }
            if (t === "0") {
                r += t;
                i();
                if (t === "x" || t === "X") {
                    r += t;
                    i();
                    o = 16;
                } else if (t >= "0" && t <= "9") {
                    a("Octal literal");
                }
            }
            switch(o){
                case 10:
                    while(t >= "0" && t <= "9"){
                        r += t;
                        i();
                    }
                    if (t === ".") {
                        for(r += "."; i() && t >= "0" && t <= "9";){
                            r += t;
                        }
                    }
                    if (t === "e" || t === "E") {
                        r += t;
                        i();
                        if (t === "-" || t === "+") {
                            r += t;
                            i();
                        }
                        while(t >= "0" && t <= "9"){
                            r += t;
                            i();
                        }
                    }
                    break;
                case 16:
                    while(t >= "0" && t <= "9" || t >= "A" && t <= "F" || t >= "a" && t <= "f"){
                        r += t;
                        i();
                    }
                    break;
            }
            if (n === "-") {
                e = -r;
            } else {
                e = +r;
            }
            if (!isFinite(e)) {
                a("Bad number");
            } else {
                return e;
            }
        };
        const c = ()=>{
            let e;
            let r;
            let o = "";
            let s;
            let u;
            if (t === '"' || t === "'") {
                for(s = t; i();){
                    if (t === s) {
                        i();
                        return o;
                    }
                    if (t === "\\") {
                        i();
                        if (t === "u") {
                            u = 0;
                            for(r = 0; r < 4 && (e = parseInt(i(), 16), !!isFinite(e)); r += 1){
                                u = u * 16 + e;
                            }
                            o += String.fromCharCode(u);
                        } else if (t === "\r") {
                            if (l() === "\n") {
                                i();
                            }
                        } else if (typeof n[t] === "string") {
                            o += n[t];
                        } else {
                            break;
                        }
                    } else {
                        if (t === "\n") {
                            break;
                        }
                        o += t;
                    }
                }
            }
            a("Bad string");
        };
        const d = ()=>{
            if (t !== "/") {
                a("Not an inline comment");
            }
            do {
                i();
                if (t === "\n" || t === "\r") {
                    i();
                    return;
                }
            }while (t)
        };
        const m = ()=>{
            if (t !== "*") {
                a("Not a block comment");
            }
            do {
                i();
                while(t === "*"){
                    i("*");
                    if (t === "/") {
                        i("/");
                        return;
                    }
                }
            }while (t)
            a("Unterminated block comment");
        };
        const p = ()=>{
            if (t !== "/") {
                a("Not a comment");
            }
            i("/");
            switch(t){
                case "/":
                    d();
                    break;
                case "*":
                    m();
                    break;
                default:
                    a("Unrecognized comment");
            }
        };
        const _ = ()=>{
            while(t){
                if (t === "/") {
                    p();
                } else if (r.indexOf(t) >= 0) {
                    i();
                } else {
                    return;
                }
            }
        };
        var f = ()=>{
            switch(t){
                case "t":
                    i("t");
                    i("r");
                    i("u");
                    i("e");
                    return true;
                case "f":
                    i("f");
                    i("a");
                    i("l");
                    i("s");
                    i("e");
                    return false;
                case "n":
                    i("n");
                    i("u");
                    i("l");
                    i("l");
                    return null;
                case "I":
                    i("I");
                    i("n");
                    i("f");
                    i("i");
                    i("n");
                    i("i");
                    i("t");
                    i("y");
                    return Infinity;
                case "N":
                    i("N");
                    i("a");
                    i("N");
                    return NaN;
            }
            a(`Unexpected '${t}'`);
        };
        let g;
        const h = ()=>{
            const e = [];
            if (t === "[") {
                i("[");
                _();
                while(t){
                    if (t === "]" || (t === "," ? a("Missing array element") : e.push(g()), _(), t !== ",")) {
                        i("]");
                        return e;
                    }
                    i(",");
                    _();
                }
            }
            a("Bad array");
        };
        const y = ()=>{
            let e;
            const n = {};
            if (t === "{") {
                i("{");
                _();
                while(t){
                    if (t === "}" || (t === '"' || t === "'" ? e = c() : e = s(), _(), i(":"), n[e] = g(), _(), t !== ",")) {
                        i("}");
                        return n;
                    }
                    i(",");
                    _();
                }
            }
            a("Bad object");
        };
        g = function() {
            _();
            switch(t){
                case "{":
                    return y();
                case "[":
                    return h();
                case '"':
                case "'":
                    return c();
                case "-":
                case "+":
                case ".":
                    return u();
                default:
                    if (t >= "0" && t <= "9") {
                        return u();
                    }
                    return f();
            }
        };
        return function(n, r) {
            let i;
            o = typeof n === "string" ? n : String(n);
            e = 0;
            t = " ";
            i = g();
            _();
            if (t) {
                a("Syntax error");
            }
            if (typeof r === "function") {
                return function e(t, n) {
                    let o;
                    let a;
                    const i = t[n];
                    if (i && typeof i === "object") {
                        for(o in i){
                            if (Object.prototype.hasOwnProperty.call(i, o)) {
                                a = e(i, o);
                                if (a !== undefined) {
                                    i[o] = a;
                                } else {
                                    delete i[o];
                                }
                            }
                        }
                    }
                    return r.call(t, n, i);
                }({
                    "": i
                }, "");
            }
            return i;
        };
    })();
    e.fromPiece = e.parse;
    e.stringify = function(t, n, r) {
        if (n && typeof n !== "function" && !s(n)) {
            throw new Error("Replacer must be a function or an array");
        }
        const o = (e, t, r)=>{
            let o = e[t];
            if (o && o.toJSON && typeof o.toJSON === "function") {
                o = o.toJSON();
            }
            if (typeof n === "function") {
                return n.call(e, t, o);
            }
            if (n) {
                if (r || s(e) || n.indexOf(t) >= 0) {
                    return o;
                }
                return undefined;
            }
            return o;
        };
        function a(e) {
            return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e >= "0" && e <= "9" || e === "_" || e === "$";
        }
        function i(e) {
            return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e === "_" || e === "$";
        }
        function l(e) {
            if (typeof e !== "string" || !i(e[0])) {
                return false;
            }
            for(let t = 1, n = e.length; t < n;){
                if (!a(e[t])) {
                    return false;
                }
                t++;
            }
            return true;
        }
        e.isWord = l;
        function s(e) {
            if (Array.isArray) {
                return Array.isArray(e);
            }
            return Object.prototype.toString.call(e) === "[object Array]";
        }
        function u(e) {
            return Object.prototype.toString.call(e) === "[object Date]";
        }
        isNaN = isNaN || function(e) {
            return typeof e === "number" && e !== e;
        };
        const c = [];
        function d(e) {
            for(let t = 0; t < c.length; t++){
                if (c[t] === e) {
                    throw new TypeError("Converting circular structure to JSON");
                }
            }
        }
        function m(e, t, n) {
            if (!e) {
                return "";
            }
            if (e.length > 10) {
                e = e.substring(0, 10);
            }
            let r = n ? "" : "\n";
            for(let o = 0; o < t; o++){
                r += e;
            }
            return r;
        }
        let p;
        if (r) {
            if (typeof r === "string") {
                p = r;
            } else if (typeof r === "number" && r >= 0) {
                p = m(" ", r, true);
            }
        }
        const _ = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        const f = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        const g = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        };
        function h(e) {
            f.lastIndex = 0;
            if (f.test(e)) {
                return `"${e.replace(f, (e)=>{
                    const t = g[e];
                    if (typeof t === "string") {
                        return t;
                    }
                    return `\\u${`0000${e.charCodeAt(0).toString(16)}`.slice(-4)}`;
                })}"`;
            }
            return `"${e}"`;
        }
        function y(e, t, n) {
            let r;
            let a;
            let i = o(e, t, n);
            if (i && !u(i)) {
                i = i.valueOf();
            }
            switch(typeof i){
                case "boolean":
                    return i.toString();
                case "number":
                    if (isNaN(i) || !isFinite(i)) {
                        return "null";
                    }
                    return i.toString();
                case "string":
                    return h(i.toString());
                case "object":
                    if (i === null) {
                        return "null";
                    }
                    if (s(i)) {
                        d(i);
                        r = "[";
                        c.push(i);
                        for(let _ = 0; _ < i.length; _++){
                            a = y(i, _, false);
                            r += m(p, c.length);
                            if (a === null || typeof a === "undefined") {
                                r += "null";
                            } else {
                                r += a;
                            }
                            if (_ < i.length - 1) {
                                r += ",";
                            } else if (p) {
                                r += "\n";
                            }
                        }
                        c.pop();
                        r += `${m(p, c.length, true)}]`;
                    } else {
                        d(i);
                        r = "{";
                        let f = false;
                        c.push(i);
                        for(const g in i){
                            if (i.hasOwnProperty(g)) {
                                const C = y(i, g, false);
                                n = false;
                                if (typeof C !== "undefined" && C !== null) {
                                    r += m(p, c.length);
                                    f = true;
                                    var t = l(g) ? g : h(g);
                                    r += `${t}:${p ? " " : ""}${C},`;
                                }
                            }
                        }
                        c.pop();
                        if (f) {
                            r = `${r.substring(0, r.length - 1) + m(p, c.length)}}`;
                        } else {
                            r = "{}";
                        }
                    }
                    return r;
                default:
                    return;
            }
        }
        const C = {
            "": t
        };
        if (t === undefined) {
            return o(C, "", true);
        }
        return y(C, "", true);
    };
}, null);