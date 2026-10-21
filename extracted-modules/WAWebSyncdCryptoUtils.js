__d("WAWebSyncdCryptoUtils", [
    "WACryptoUtils",
    "WAWebSyncdKeyTypes",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        if (e.length === 0) {
            throw r("err")("buffers length is zero");
        }
        if (e.length === 1) {
            return e[0];
        }
        const t = e.map((e)=>e.byteLength);
        const n = t.reduce((acc, item)=>acc + item);
        const o = new Uint8Array(n);
        let a = 0;
        let i;
        for(i = 0; i < e.length; i++){
            o.set(new Uint8Array(e[i]), a);
            a += e[i].byteLength;
        }
        return o.buffer;
    }
    function s(e, t, n) {
        if (t < 0 || n < 0) {
            throw r("err")("buffers length is zero");
        }
        const o = new Array(3);
        const a = new Uint8Array(e);
        o[0] = a.slice(0, t).buffer;
        o[1] = a.slice(t, t + n).buffer;
        o[2] = a.slice(t + n).buffer;
        return o;
    }
    function u(e) {
        return Uint8Array.from(e.split(" ").map((e)=>parseInt(e, 16)));
    }
    function c(e) {
        return Array.from(new Uint8Array(o("WAWebSyncdKeyTypes").fromSyncKeyId(e)), function(e) {
            return e.toString(16);
        }).toString().replace(/,/g, " ");
    }
    function d(e) {
        return Array.from(new Uint8Array(e), function(e) {
            return e.toString(16).padStart(2, "0");
        }).join("");
    }
    function m(e) {
        const t = new ArrayBuffer(8);
        new DataView(t).setUint32(4, e, false);
        return t;
    }
    function p(e, t) {
        return o("WACryptoUtils").arrayBuffersEqual(o("WAWebSyncdKeyTypes").fromSyncKeyId(e), o("WAWebSyncdKeyTypes").fromSyncKeyId(t));
    }
    l.combine = e;
    l.split = s;
    l.hexToUint8Array = u;
    l.syncKeyIdToHex = c;
    l.arrayBufferToHexPadded = d;
    l.to64BitNetworkOrder = m;
    l.syncKeyIdsEqual = p;
}, 98);