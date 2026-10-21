__d("WAWap", [
    "WAAssertUnreachable",
    "WABinary",
    "WACryptoDependencies",
    "WAJids",
    "WALongInt",
    "WATextEncoding",
    "WAWapDict",
    "WAWapJid",
    "WAXmlFormatter",
    "WAXmlNode",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = (e = o("WAJids")).MSGR_USER_DOMAIN.replace("@", "");
    const c = e.WA_USER_DOMAIN.replace("@", "");
    const d = e.LID_DOMAIN.replace("@", "");
    const m = e.INTEROP_DOMAIN.replace("@", "");
    const p = e.HOSTED_DOMAIN.replace("@", "");
    const _ = 2;
    const f = 128;
    const g = 0;
    const h = 236;
    const y = 237;
    const C = 238;
    const b = 239;
    const v = [
        h,
        y,
        C,
        b
    ];
    const S = 245;
    const R = 246;
    const L = 247;
    const E = 248;
    const k = 249;
    const I = 250;
    const T = 251;
    const D = 252;
    const x = 253;
    const $ = 254;
    const P = 255;
    const N = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "-",
        ".",
        "\uFFFD",
        "\uFFFD",
        "\uFFFD",
        "\uFFFD"
    ];
    const M = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F"
    ];
    let w = "";
    let A = 1;
    const F = {
        sentinel: "DROP_ATTR"
    };
    const O = (s = o("WAWapJid")).WapJid.create(null, "g.us");
    const B = s.WapJid.create(null, e.WA_SERVER_JID_SUFFIX);
    const W = s.WapJid.create("status", "broadcast");
    const q = s.WapJid.create(null, "newsletter");
    const U = s.WapJid.create(null, "hosted");
    const V = s.WapJid.create(null, "hosted.lid");
    const H = s.WapJid.create(null, "call");
    const G = {};
    let z = false;
    function j() {
        z = true;
    }
    const K = o("WATextEncoding").newTextEncoder();
    const Q = (()=>{
        function e(e, t = G, n = null) {
            this.tag = e;
            this.attrs = t;
            this.content = n;
        }
        const t = e.prototype;
        t.toString = function() {
            let e = `<${this.tag}`;
            e += o("WAXmlNode").attrsToString(this.attrs);
            const t = this.content;
            if (Array.isArray(t)) {
                e += `>${t.map(String).join("")}</${this.tag}>`;
            } else if (t) {
                e += `>${o("WAXmlNode").uint8ArrayToDebugString(t)}</${this.tag}>`;
            } else {
                e += " />";
            }
            if (z) {
                e = r("WAXmlFormatter")(e);
            }
            return e;
        };
        return e;
    })();
    function X(e, t, n) {
        let a = null;
        if (t && t.children != null) {
            throw r("err")('Children should not be passed via props (see eslint check "react/no-children-props")');
        }
        if (Array.isArray(n)) {
            a = n.filter(Boolean);
        } else if (typeof n === "string") {
            a = o("WABinary").Binary.build(n).readByteArrayView();
        } else if (n instanceof ArrayBuffer) {
            a = new Uint8Array(n);
        } else if (n instanceof Uint8Array) {
            a = n;
        } else {
            const i = [];
            for(let l = 2; l < arguments.length; l++){
                const s = arguments[l];
                if (s) {
                    i.push(s);
                }
            }
            a = i;
        }
        if (Array.isArray(a) && a.length === 0) {
            a = null;
        }
        const u = {};
        if (t) {
            const c = t;
            Object.keys(c).forEach((t)=>{
                if (![
                    "__self",
                    "__source"
                ].includes(t)) {
                    const n = c[t];
                    if (n == null) {
                        throw r("err")(`Attr ${t} in <${e}> is null`);
                    }
                    if (n !== F) {
                        u[t] = n;
                    }
                }
            });
        }
        return new Q(e, u, a);
    }
    const Y = X;
    function J(e) {
        if (e instanceof o("WAWapJid").WapJid) {
            return e.toString();
        }
        return e;
    }
    function Z(e) {
        let t = e.content;
        if (Array.isArray(t)) {
            t = t.map(Z);
        } else if (typeof t === "string") {
            t = o("WABinary").Binary.build(t).readByteArrayView();
        }
        return new Q(e.tag, e.attrs || G, t);
    }
    function ee(e) {
        const t = e instanceof Q ? e : Z(e);
        const n = new (o("WABinary")).Binary;
        te(t, n);
        const r = 0;
        const a = n.readByteArrayView();
        const i = new Uint8Array(1 + a.length);
        i[0] = r;
        i.set(a, 1);
        return i;
    }
    function te(e, t) {
        if (e == null) {
            t.writeUint8(g);
        } else if (e instanceof Q) {
            re(e, t);
        } else if (e instanceof o("WAWapJid").WapJid) {
            ne(e, t);
        } else if (typeof e === "string") {
            le(e, t);
        } else if (e instanceof Uint8Array) {
            ue(e, t);
        } else {
            const n = typeof e;
            throw r("err")(`Invalid payload type ${n}`);
        }
    }
    function ne(e, t) {
        const n = e.getInnerJid();
        if (n.type === o("WAWapJid").WAP_JID_SUBTYPE.JID_U) {
            const { device: r, domainType: a, user: i } = n;
            t.writeUint8(L);
            t.writeUint8(a);
            t.writeUint8(r);
            te(i, t);
        } else if (n.type === o("WAWapJid").WAP_JID_SUBTYPE.JID_FB) {
            const { device: l, user: s } = n;
            t.writeUint8(R);
            te(s, t);
            t.writeUint16(l);
            te(u, t);
        } else if (n.type === o("WAWapJid").WAP_JID_SUBTYPE.JID_INTEROP) {
            const { device: c, integrator: d, user: m } = n;
            t.writeUint8(S);
            te(m, t);
            t.writeUint16(c);
            t.writeUint16(d);
        } else {
            const { server: p, user: _ } = n;
            t.writeUint8(I);
            if (_ != null) {
                te(_, t);
            } else {
                t.writeUint8(g);
            }
            te(p, t);
        }
    }
    function re(e, t) {
        if (e.tag === void 0) {
            t.writeUint8(E);
            t.writeUint8(g);
            return;
        }
        let n = 1;
        if (e.attrs) {
            n += Object.keys(e.attrs).length * 2;
        }
        if (e.content) {
            n++;
        }
        if (n < 256) {
            t.writeUint8(E);
            t.writeUint8(n);
        } else if (n < 65536) {
            t.writeUint8(k);
            t.writeUint16(n);
        }
        te(e.tag, t);
        if (e.attrs) {
            Object.keys(e.attrs).forEach((n)=>{
                le(n, t);
                te(e.attrs[n], t);
            });
        }
        const r = e.content;
        if (Array.isArray(r)) {
            if (r.length < 256) {
                t.writeUint8(E);
                t.writeUint8(r.length);
            } else if (r.length < 65536) {
                t.writeUint8(k);
                t.writeUint16(r.length);
            }
            for(let o = 0; o < r.length; o++){
                re(r[o], t);
            }
        } else {
            if (r) {
                te(r, t);
            }
        }
    }
    let oe;
    let ae;
    function ie(e) {
        const t = new Map;
        for(let n = 0; n < e.length; n++){
            t.set(e[n], n);
        }
        return t;
    }
    function le(e, t) {
        if (e === "") {
            t.writeUint8(D);
            t.writeUint8(0);
            return;
        }
        if (oe == null) {
            oe = ie(o("WAWapDict").SINGLE_BYTE_TOKEN);
        }
        const n = oe.get(e);
        if (n != null) {
            t.writeUint8(n + 1);
            return;
        }
        if (ae == null) {
            ae = [];
            for(let r = 0; r < o("WAWapDict").DICTIONARIES.length; ++r){
                ae.push(ie(o("WAWapDict").DICTIONARIES[r]));
            }
        }
        for(let a = 0; a < ae.length; ++a){
            const i = ae[a].get(e);
            if (i != null) {
                t.writeUint8(v[a]);
                t.writeUint8(i);
                return;
            }
        }
        const l = o("WABinary").numUtf8Bytes(e);
        if (l < 128) {
            const s = /[^0-9.-]+?/;
            const u = /[^0-9A-F]+?/;
            if (s.exec(e)) {
                if (!u.exec(e)) {
                    se(e, T, t);
                    return;
                }
            } else {
                se(e, P, t);
                return;
            }
        }
        ce(l, t);
        t.writeString(e);
    }
    function se(e, t, n) {
        const o = e.length % 2 === 1;
        n.writeUint8(t);
        let a = Math.ceil(e.length / 2);
        if (o) {
            a |= f;
        }
        n.writeUint8(a);
        let i = 0;
        for(let l = 0; l < e.length; l++){
            const s = e.charCodeAt(l);
            let u = null;
            if (s >= 48 && s <= 57) {
                u = s - 48;
            } else if (t === P) {
                if (s === 45) {
                    u = 10;
                } else if (s === 46) {
                    u = 11;
                }
            } else if (t === T && s >= 65 && s <= 70) {
                u = s - 55;
            }
            if (u == null) {
                throw r("err")(`Cannot nibble encode ${s}`);
            }
            if (l % 2 === 0) {
                i = u << 4;
                if (l === e.length - 1) {
                    i |= 15;
                    n.writeUint8(i);
                }
            } else {
                i |= u;
                n.writeUint8(i);
            }
        }
    }
    function ue(e, t) {
        ce(e.length, t);
        t.writeByteArray(e);
    }
    function ce(e, t) {
        if (e < 256) {
            t.writeUint8(D);
            t.writeUint8(e);
        } else if (e < 1048576) {
            t.writeUint8(x);
            t.writeUint8(e >>> 16 & 255);
            t.writeUint8(e >>> 8 & 255);
            t.writeUint8(e & 255);
        } else if (e < 4294967296) {
            t.writeUint8($);
            t.writeUint32(e);
        } else {
            throw r("err")(`Binary with length ${e} is too big for WAP protocol`);
        }
    }
    function de(e, t) {
        const n = new (o("WABinary")).Binary(e);
        const r = n.readUint8();
        const a = r & _;
        if (a) {
            return t(n.readByteArrayView()).then((e)=>fe(new (o("WABinary")).Binary(e)));
        }
        return Promise.resolve(fe(n));
    }
    function me(e) {
        const t = new (o("WABinary")).Binary(e);
        const n = t.readUint8();
        const a = n & _;
        if (a) {
            throw r("err")("Cannot pass compressed stanza to decodeStanzaDebug");
        }
        return fe(t);
    }
    function pe(e, t) {
        const n = e.readUint8();
        if (n === g) {
            return null;
        }
        if (n === E) {
            return _e(e, e.readUint8());
        }
        if (n === k) {
            return _e(e, e.readUint16());
        }
        if (n === D) {
            const a = e.readUint8();
            return Se(e, a, t);
        }
        if (n === x) {
            const i = e.readUint8();
            const l = e.readUint8();
            const s = e.readUint8();
            const u = ((i & 15) << 16) + (l << 8) + s;
            return Se(e, u, t);
        }
        if (n === $) {
            const c = e.readUint32();
            return Se(e, c, t);
        }
        if (n === I) {
            return ye(e);
        }
        if (n === R) {
            return Ce(e);
        }
        if (n === S) {
            return be(e);
        }
        if (n === L) {
            return ve(e);
        }
        if (n === P) {
            const d = e.readUint8();
            const m = d >>> 7;
            const p = d & 127;
            return Re(e, N, m, p);
        }
        if (n === T) {
            const _ = e.readUint8();
            const f = _ >>> 7;
            const y = _ & 127;
            return Re(e, M, f, y);
        }
        if (n <= 0 || n >= 240) {
            throw r("err")("Unable to decode WAP buffer");
        }
        if (n >= h && n <= b) {
            const C = n - h;
            const v = o("WAWapDict").DICTIONARIES[C];
            if (v === void 0) {
                throw r("err")(`Missing WAP dictionary ${C}`);
            }
            const w = e.readUint8();
            const A = v[w];
            if (A === void 0) {
                throw r("err")(`Invalid value index ${w} in dict ${C}`);
            }
            return A;
        }
        const F = o("WAWapDict").SINGLE_BYTE_TOKEN[n - 1];
        if (F === void 0) {
            throw r("err")(`Undefined token with index ${n}`);
        }
        return F;
    }
    function _e(e, t) {
        const n = [];
        for(let r = 0; r < t; r++){
            n.push(fe(e));
        }
        return n;
    }
    function fe(e) {
        const t = e.readUint8();
        let n;
        if (t === E) {
            n = e.readUint8();
        } else if (t === k) {
            n = e.readUint16();
        } else {
            throw r("err")(`Failed to decode node since type byte ${String(t)} is invalid`);
        }
        let a = void 0;
        let i = null;
        if (n === 0) {
            throw r("err")("Failed to decode node, list cannot be empty");
        }
        const l = ge(e);
        for(n -= 1; n > 1;){
            if (!a) {
                a = {};
            }
            const s = ge(e);
            const u = pe(e, true);
            a[s] = u;
            n -= 2;
        }
        if (n === 1) {
            i = pe(e, false);
            if (i instanceof o("WAWapJid").WapJid) {
                i = String(i);
            }
            if (typeof i === "string") {
                i = K.encode(i);
            }
        }
        return new Q(l, a, i);
    }
    function ge(e) {
        const t = pe(e, true);
        if (typeof t !== "string") {
            throw r("err")("WAWap:decodeString got invalid value, string expected");
        }
        return t;
    }
    function he(e) {
        const t = pe(e, true);
        if (t != null && typeof t !== "string") {
            throw r("err")("WAWap:decodeNullableString got invalid value, string expected");
        }
        return t;
    }
    function ye(e) {
        const t = he(e);
        const n = ge(e);
        return o("WAWapJid").WapJid.create(t, n);
    }
    function Ce(e) {
        const t = ge(e);
        const n = e.readUint16();
        ge(e);
        return o("WAWapJid").WapJid.createFbJid(t, n);
    }
    function be(e) {
        const t = ge(e);
        const n = e.readUint16();
        const r = e.readUint16();
        ge(e);
        return o("WAWapJid").WapJid.createInteropJid(t, n, r);
    }
    function ve(e) {
        let t = null;
        const n = e.readUint8();
        if (n === 0) {
            t = o("WAWapJid").DomainType.WHATSAPP;
        } else if (n === 1) {
            t = o("WAWapJid").DomainType.LID;
        } else if ((1 & n) === 0 && (128 & n) !== 0) {
            t = o("WAWapJid").DomainType.HOSTED;
        } else if (n === 129) {
            t = o("WAWapJid").DomainType.HOSTED_LID;
        } else {
            throw r("err")(`decodeJidU - Invalid domain type encoding ${n}`);
        }
        const a = e.readUint8();
        const i = ge(e);
        return o("WAWapJid").WapJid.createJidU(i, t, a);
    }
    function Se(e, t, n = false) {
        if (n) {
            return e.readString(t);
        }
        return e.readByteArrayView(t);
    }
    function Re(e, t, n, r) {
        for(var o = new Array(r * 2 - n), a = 0; a < o.length - 1; a += 2){
            const i = e.readUint8();
            o[a] = t[i >>> 4];
            o[a + 1] = t[i & 15];
        }
        if (n) {
            const l = e.readUint8();
            o[o.length - 1] = t[l >>> 4];
        }
        return o.join("");
    }
    function Le() {
        if (!w) {
            const e = new Uint16Array(2);
            o("WACryptoDependencies").getCrypto().getRandomValues(e);
            w = `${String(e[0])}.${String(e[1])}-`;
        }
        return `${w}${A++}`;
    }
    function Ee(e) {
        switch(e.type){
            case "group":
                return e.groupJid;
            case "status":
                return o("WAJids").STATUS_JID;
            case "device":
                return e.deviceJid;
            case "newsletter":
                return e.newsletterJid;
            case "hosted":
                return e.hostedDeviceJid;
            case "hostedLid":
                return e.hostedLidDeviceJid;
            default:
                e.type;
                return e.broadcastJid;
        }
    }
    function ke(e) {
        switch(e.type){
            case "group":
                return e.author;
            case "status":
                return e.author;
            case "broadcast":
                return e.author;
            default:
                e.type;
                return null;
        }
    }
    function Ie(e) {
        if (e.type === "status" || e.type === "group" || e.type === "broadcast") {
            return De(e.author);
        }
        return F;
    }
    function Te(e) {
        return De(Ee(e));
    }
    function De(e) {
        const t = o("WAJids").validateDomainJid(e);
        if (t != null) {
            return xe(t);
        }
        const n = e.split("@");
        let a = n[0];
        const i = n[1];
        let l = null;
        let s = null;
        if ((i === c || i === u || i === m || i === d || i === p || i === o("WAJids").HOSTED_LID_SUFFIX) && a.indexOf(":") !== -1) {
            const _ = a.split(":");
            a = _[0];
            l = _[1];
            s = parseInt(l, 10);
        }
        if (i === m) {
            const f = a.split("-");
            const g = f[0];
            const h = f[1];
            return o("WAWapJid").WapJid.createInteropJid(h, s, parseInt(g, 10));
        } else if (i === u) {
            return o("WAWapJid").WapJid.createFbJid(a, s);
        }
        let y = null;
        if (i === d) {
            y = o("WAWapJid").DomainType.LID;
        } else if (i === p) {
            if (s !== 99) {
                throw r("err")("wid unexpected deviceId");
            }
            y = o("WAWapJid").DomainType.HOSTED;
        } else if (i === o("WAJids").HOSTED_LID_SUFFIX) {
            if (s !== 99) {
                throw r("err")("lid invalid deviceId");
            }
            y = o("WAWapJid").DomainType.HOSTED_LID;
        } else {
            y = o("WAWapJid").DomainType.WHATSAPP;
        }
        if (s != null && s !== 0) {
            return o("WAWapJid").WapJid.createJidU(a, y, s);
        }
        return o("WAWapJid").WapJid.create(a, i);
    }
    function xe(e) {
        switch(e){
            case "s.whatsapp.net":
                return B;
            case "g.us":
                return O;
            case "newsletter":
                return q;
            case "call":
                return H;
            default:
                return r("WAAssertUnreachable")(e);
        }
    }
    function $e(e) {
        return De(e);
    }
    function Pe(e) {
        return De(e);
    }
    function Ne(e) {
        return De(e);
    }
    function Me(e) {
        return De(e);
    }
    function we(e) {
        return De(e);
    }
    function Ae(e) {
        return De(e);
    }
    function Fe(e) {
        if (e.jidType === "phoneDevice" || e.jidType === "msgrDevice" || e.jidType === "lidDevice") {
            return De(e.deviceJid);
        }
        if (e.jidType === "phoneUser" || e.jidType === "msgrUser" || e.jidType === "lidUser") {
            return De(e.userJid);
        }
        if (e.jidType === "group") {
            return De(e.groupJid);
        }
        if (e.jidType === "status") {
            return De(e.statusJid);
        }
        if (e.jidType === "call") {
            return De(e.callJid);
        }
        if (e.jidType === "interopDevice") {
            return De(e.deviceJid);
        }
        if (e.jidType === "interopUser") {
            return De(e.userJid);
        }
        if (e.jidType === "newsletter") {
            return De(e.newsletterJid);
        }
        if (e.jidType === "hosted") {
            return De(e.hostedDeviceJid);
        }
        if (e.jidType === "hostedLid") {
            return De(e.hostedLidDeviceJid);
        }
        if (e.jidType === "bot") {
            return De(e.botJid);
        }
        e.jidType;
        return De(e.broadcastJid);
    }
    function Oe(e) {
        return e;
    }
    function Be(e) {
        return e.toString();
    }
    function We(e) {
        return e;
    }
    function qe(e) {
        return e;
    }
    function Ue(e) {
        return e ?? F;
    }
    function Ve(e) {
        return e.toString();
    }
    function He(e) {
        return o("WALongInt").longIntToDecimalString(e);
    }
    function Ge(e, t = 4) {
        let n = e;
        const r = new Uint8Array(t);
        for(let o = t - 1; o >= 0; o--){
            r[o] = n & 255;
            n >>>= 8;
        }
        return r;
    }
    l.DROP_ATTR = F;
    l.G_US = O;
    l.S_WHATSAPP_NET = B;
    l.STATUS_BROADCAST = W;
    l.NEWSLETTER = q;
    l.HOSTED = U;
    l.HOSTED_LID = V;
    l.CALL = H;
    l.enableXMLFormat = j;
    l.WapNode = Q;
    l.makeWapNode = X;
    l.wap = Y;
    l.decodeAsString = J;
    l.makeStanza = Z;
    l.encodeStanza = ee;
    l.decodeStanza = de;
    l.decodeStanzaDebug = me;
    l.generateId = Le;
    l.extractToJid = Ee;
    l.extractParticipantJid = ke;
    l.PARTICIPANT_JID = Ie;
    l.TO_JID = Te;
    l.JID = De;
    l.DOMAIN_JID = xe;
    l.USER_JID = $e;
    l.DEVICE_JID = Pe;
    l.GROUP_JID = Ne;
    l.BROADCAST_JID = Me;
    l.CALL_JID = we;
    l.NEWSLETTER_JID = Ae;
    l.TO_WAP_JID = Fe;
    l.STANZA_ID = Oe;
    l.SMAX_ID = Be;
    l.CUSTOM_STRING = We;
    l.CALL_ID = qe;
    l.MAYBE_CUSTOM_STRING = Ue;
    l.INT = Ve;
    l.LONG_INT = He;
    l.BIG_ENDIAN_CONTENT = Ge;
}, 98);