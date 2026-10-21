__d("pvutils-1.0.17", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = {};
    const l = {
        exports: e
    };
    function s() {
        Object.defineProperty(e, "__esModule", {
            value: true
        });
        e.getUTCDate = t;
        e.getParametersValue = n;
        e.bufferToHexCodes = r;
        e.checkBufferParams = o;
        e.utilFromBase = a;
        e.utilToBase = i;
        e.utilConcatBuf = l;
        e.utilConcatView = s;
        e.utilDecodeTC = u;
        e.utilEncodeTC = c;
        e.isEqualBuffer = d;
        e.padNumber = m;
        e.toBase64 = f;
        e.fromBase64 = g;
        e.arrayBufferToString = h;
        e.stringToArrayBuffer = y;
        e.nearestPowerOf2 = b;
        e.clearProps = v;
        function t(e) {
            return new Date(e.getTime() + e.getTimezoneOffset() * 60000);
        }
        function n(e, t, n) {
            if (e instanceof Object && t in e) {
                return e[t];
            }
            return n;
        }
        function r(e, t = 0, n = e.byteLength - t, r = false) {
            let o = "";
            let a = true;
            let i = false;
            let l;
            try {
                let u;
                for(var s = new Uint8Array(e, t, n)[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); !(a = (u = s.next()).done); a = true){
                    const c = u.value;
                    const d = c.toString(16).toUpperCase();
                    if (d.length === 1) {
                        o += "0";
                    }
                    o += d;
                    if (r) {
                        o += " ";
                    }
                }
            } catch (error) {
                i = true;
                l = error;
            } finally{
                try {
                    if (!a && s.return) {
                        s.return();
                    }
                } finally{
                    if (i) {
                        throw l;
                    }
                }
            }
            return o.trim();
        }
        function o(e, t, n, r) {
            if (t instanceof ArrayBuffer) {
                if (t.byteLength === 0) {
                    e.error = "Wrong parameter: inputBuffer has zero length";
                    return false;
                }
                if (n < 0) {
                    e.error = "Wrong parameter: inputOffset less than zero";
                    return false;
                }
                if (r < 0) {
                    e.error = "Wrong parameter: inputLength less than zero";
                    return false;
                }
                if (t.byteLength - n - r < 0) {
                    e.error = "End of input reached before message was fully decoded (inconsistent offset and length values)";
                    return false;
                }
                return true;
            }
            e.error = 'Wrong parameter: inputBuffer must be "ArrayBuffer"';
            return false;
        }
        function a(e, t) {
            let n = 0;
            if (e.length === 1) {
                return e[0];
            }
            for(let r = e.length - 1; r >= 0; r--){
                n += e[e.length - 1 - r] * 2 ** (t * r);
            }
            return n;
        }
        function i(e, t, n = -1) {
            const r = n;
            let o = e;
            let a = 0;
            let i = 2 ** t;
            for(let l = 1; l < 8; l++){
                if (e < i) {
                    let s;
                    if (r < 0) {
                        s = new ArrayBuffer(l);
                        a = l;
                    } else {
                        if (r < l) {
                            return new ArrayBuffer(0);
                        }
                        s = new ArrayBuffer(r);
                        a = r;
                    }
                    const u = new Uint8Array(s);
                    for(let c = l - 1; c >= 0; c--){
                        const d = 2 ** (c * t);
                        u[a - c - 1] = Math.floor(o / d);
                        o -= u[a - c - 1] * d;
                    }
                    return s;
                }
                i *= 2 ** t;
            }
            return new ArrayBuffer(0);
        }
        function l(...i) {
            let e = 0;
            let t = 0;
            let n = true;
            let r = false;
            let o;
            try {
                let u;
                for(var s = i[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); !(n = (u = s.next()).done); n = true){
                    const c = u.value;
                    e += c.byteLength;
                }
            } catch (error) {
                r = true;
                o = error;
            } finally{
                try {
                    if (!n && s.return) {
                        s.return();
                    }
                } finally{
                    if (r) {
                        throw o;
                    }
                }
            }
            const d = new ArrayBuffer(e);
            const m = new Uint8Array(d);
            let p = true;
            let _ = false;
            let f;
            try {
                let h;
                for(var g = i[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); !(p = (h = g.next()).done); p = true){
                    const y = h.value;
                    m.set(new Uint8Array(y), t);
                    t += y.byteLength;
                }
            } catch (error) {
                _ = true;
                f = error;
            } finally{
                try {
                    if (!p && g.return) {
                        g.return();
                    }
                } finally{
                    if (_) {
                        throw f;
                    }
                }
            }
            return d;
        }
        function s(...i) {
            let e = 0;
            let t = 0;
            let n = true;
            let r = false;
            let o;
            try {
                let u;
                for(var s = i[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); !(n = (u = s.next()).done); n = true){
                    const c = u.value;
                    e += c.length;
                }
            } catch (error) {
                r = true;
                o = error;
            } finally{
                try {
                    if (!n && s.return) {
                        s.return();
                    }
                } finally{
                    if (r) {
                        throw o;
                    }
                }
            }
            const d = new ArrayBuffer(e);
            const m = new Uint8Array(d);
            let p = true;
            let _ = false;
            let f;
            try {
                let h;
                for(var g = i[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); !(p = (h = g.next()).done); p = true){
                    const y = h.value;
                    m.set(y, t);
                    t += y.length;
                }
            } catch (error) {
                _ = true;
                f = error;
            } finally{
                try {
                    if (!p && g.return) {
                        g.return();
                    }
                } finally{
                    if (_) {
                        throw f;
                    }
                }
            }
            return m;
        }
        function u() {
            const e = new Uint8Array(this.valueHex);
            if (this.valueHex.byteLength >= 2) {
                const t = e[0] === 255 && e[1] & 128;
                const n = e[0] === 0 && (e[1] & 128) === 0;
                if (t || n) {
                    this.warnings.push("Needlessly long format");
                }
            }
            const r = new ArrayBuffer(this.valueHex.byteLength);
            const o = new Uint8Array(r);
            for(let i = 0; i < this.valueHex.byteLength; i++){
                o[i] = 0;
            }
            o[0] = e[0] & 128;
            const l = a(o, 8);
            const s = new ArrayBuffer(this.valueHex.byteLength);
            const u = new Uint8Array(s);
            for(let c = 0; c < this.valueHex.byteLength; c++){
                u[c] = e[c];
            }
            u[0] &= 127;
            const d = a(u, 8);
            return d - l;
        }
        function c(e) {
            const t = e < 0 ? e * -1 : e;
            let n = 128;
            for(let r = 1; r < 8; r++){
                if (t <= n) {
                    if (e < 0) {
                        const o = n - t;
                        const a = i(o, 8, r);
                        const l = new Uint8Array(a);
                        l[0] |= 128;
                        return a;
                    }
                    let s = i(t, 8, r);
                    let u = new Uint8Array(s);
                    if (u[0] & 128) {
                        const c = s.slice(0);
                        const d = new Uint8Array(c);
                        s = new ArrayBuffer(s.byteLength + 1);
                        u = new Uint8Array(s);
                        for(let m = 0; m < c.byteLength; m++){
                            u[m + 1] = d[m];
                        }
                        u[0] = 0;
                    }
                    return s;
                }
                n *= 2 ** 8;
            }
            return new ArrayBuffer(0);
        }
        function d(e, t) {
            if (e.byteLength !== t.byteLength) {
                return false;
            }
            for(let n = new Uint8Array(e), r = new Uint8Array(t), o = 0; o < n.length; o++){
                if (n[o] !== r[o]) {
                    return false;
                }
            }
            return true;
        }
        function m(e, t) {
            const n = e.toString(10);
            if (t < n.length) {
                return "";
            }
            for(var r = t - n.length, o = new Array(r), a = 0; a < r; a++){
                o[a] = "0";
            }
            const i = o.join("");
            return i.concat(n);
        }
        var p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var _ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=";
        function f(e, t = false, n = false, r = false) {
            let o = 0;
            let a = 0;
            let i = 0;
            let l = "";
            const s = t ? _ : p;
            if (r) {
                let u = 0;
                for(let c = 0; c < e.length; c++){
                    if (e.charCodeAt(c) !== 0) {
                        u = c;
                        break;
                    }
                }
                e = e.slice(u);
            }
            while(o < e.length){
                const d = e.charCodeAt(o++);
                if (o >= e.length) {
                    a = 1;
                }
                const m = e.charCodeAt(o++);
                if (o >= e.length) {
                    i = 1;
                }
                const f = e.charCodeAt(o++);
                const g = d >> 2;
                const h = (d & 3) << 4 | m >> 4;
                let y = (m & 15) << 2 | f >> 6;
                let C = f & 63;
                if (a === 1) {
                    C = 64;
                    y = 64;
                } else if (i === 1) {
                    C = 64;
                }
                if (n) {
                    if (y === 64) {
                        l += `${s.charAt(g)}${s.charAt(h)}`;
                    } else if (C === 64) {
                        l += `${s.charAt(g)}${s.charAt(h)}${s.charAt(y)}`;
                    } else {
                        l += `${s.charAt(g)}${s.charAt(h)}${s.charAt(y)}${s.charAt(C)}`;
                    }
                } else {
                    l += `${s.charAt(g)}${s.charAt(h)}${s.charAt(y)}${s.charAt(C)}`;
                }
            }
            return l;
        }
        function g(e, t = false, n = false) {
            const r = t ? _ : p;
            function o(e) {
                for(let t = 0; t < 64; t++){
                    if (r.charAt(t) === e) {
                        return t;
                    }
                }
                return 64;
            }
            function a(e) {
                if (e === 64) {
                    return 0;
                }
                return e;
            }
            for(var i = 0, l = ""; i < e.length;){
                const s = o(e.charAt(i++));
                const u = i >= e.length ? 0 : o(e.charAt(i++));
                const c = i >= e.length ? 0 : o(e.charAt(i++));
                const d = i >= e.length ? 0 : o(e.charAt(i++));
                const m = a(s) << 2 | a(u) >> 4;
                const f = (a(u) & 15) << 4 | a(c) >> 2;
                const g = (a(c) & 3) << 6 | a(d);
                l += String.fromCharCode(m);
                if (c !== 64) {
                    l += String.fromCharCode(f);
                }
                if (d !== 64) {
                    l += String.fromCharCode(g);
                }
            }
            if (n) {
                const h = l.length;
                let y = -1;
                for(let C = h - 1; C >= 0; C--){
                    if (l.charCodeAt(C) !== 0) {
                        y = C;
                        break;
                    }
                }
                if (y !== -1) {
                    l = l.slice(0, y + 1);
                } else {
                    l = "";
                }
            }
            return l;
        }
        function h(e) {
            let t = "";
            const n = new Uint8Array(e);
            let r = true;
            let o = false;
            let a;
            try {
                let l;
                for(var i = n[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); !(r = (l = i.next()).done); r = true){
                    const s = l.value;
                    t += String.fromCharCode(s);
                }
            } catch (error) {
                o = true;
                a = error;
            } finally{
                try {
                    if (!r && i.return) {
                        i.return();
                    }
                } finally{
                    if (o) {
                        throw a;
                    }
                }
            }
            return t;
        }
        function y(e) {
            for(var t = e.length, n = new ArrayBuffer(t), r = new Uint8Array(n), o = 0; o < t; o++){
                r[o] = e.charCodeAt(o);
            }
            return n;
        }
        var C = Math.log(2);
        function b(e) {
            const t = Math.log(e) / C;
            const n = Math.floor(t);
            const r = Math.round(t);
            if (n === r) {
                return n;
            }
            return r;
        }
        function v(e, t) {
            let n = true;
            let r = false;
            let o;
            try {
                let i;
                for(var a = t[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); !(n = (i = a.next()).done); n = true){
                    const l = i.value;
                    delete e[l];
                }
            } catch (error) {
                r = true;
                o = error;
            } finally{
                try {
                    if (!n && a.return) {
                        a.return();
                    }
                } finally{
                    if (r) {
                        throw o;
                    }
                }
            }
        }
    }
    let u = false;
    function c() {
        if (!u) {
            u = true;
            s();
        }
        return l.exports;
    }
    function d(e) {
        switch(e){
            case undefined:
                return c();
        }
    }
    a.exports = d;
}, null);