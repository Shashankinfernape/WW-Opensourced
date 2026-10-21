__d("asn1js-2.1.1", [
    "pvutils-1.0.17"
], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        if (e && typeof e === "object" && "default" in e) {
            return e.default;
        }
        return e;
    }
    const l = e(n("pvutils-1.0.17"));
    const s = {};
    const u = {
        exports: s
    };
    function c() {
        Object.defineProperty(s, "__esModule", {
            value: true
        });
        s.fromBER = pe;
        s.compareSchema = _e;
        s.verifySchema = fe;
        s.fromJSON = ge;
        s.RawData = s.Repeated = s.Any = s.Choice = s.TIME = s.Duration = s.DateTime = s.TimeOfDay = s.DATE = s.GeneralizedTime = s.UTCTime = s.CharacterString = s.GeneralString = s.VisibleString = s.GraphicString = s.IA5String = s.VideotexString = s.TeletexString = s.PrintableString = s.NumericString = s.UniversalString = s.BmpString = s.RelativeObjectIdentifier = s.Utf8String = s.ObjectIdentifier = s.Enumerated = s.Integer = s.BitString = s.OctetString = s.Null = s.Set = s.Sequence = s.Boolean = s.EndOfContent = s.Constructed = s.Primitive = s.BaseBlock = s.ValueBlock = s.HexBlock = undefined;
        var e = l();
        function t(e, t) {
            let r;
            if (typeof Symbol === "undefined" || e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] == null) {
                if (Array.isArray(e) || (r = n(e)) || t && e && typeof e.length === "number") {
                    if (r) {
                        e = r;
                    }
                    let o = 0;
                    const a = function() {};
                    return {
                        s: a,
                        n: function() {
                            if (o >= e.length) {
                                return {
                                    done: true
                                };
                            }
                            return {
                                done: false,
                                value: e[o++]
                            };
                        },
                        e: function(t) {
                            throw t;
                        },
                        f: a
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            let i = true;
            let l = false;
            let s;
            return {
                s: function() {
                    r = e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                },
                n: function() {
                    const e = r.next();
                    i = e.done;
                    return e;
                },
                e: function(t) {
                    l = true;
                    s = t;
                },
                f: function() {
                    try {
                        if (!i && r.return != null) {
                            r.return();
                        }
                    } finally{
                        if (l) {
                            throw s;
                        }
                    }
                }
            };
        }
        function n(e, t) {
            if (e) {
                if (typeof e === "string") {
                    return r(e, t);
                }
                let n = Object.prototype.toString.call(e).slice(8, -1);
                if (n === "Object" && e.constructor) {
                    n = e.constructor.name;
                }
                if (n === "Map" || n === "Set") {
                    return Array.from(e);
                }
                if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
                    return r(e, t);
                }
            }
        }
        function r(e, t) {
            if (t == null || t > e.length) {
                t = e.length;
            }
            for(var n = 0, r = new Array(t); n < t; n++){
                r[n] = e[n];
            }
            return r;
        }
        const o = [
            new Uint8Array([
                1
            ])
        ];
        const a = "0123456789";
        var i = (()=>{
            function t(t = {}) {
                this.blockLength = e.getParametersValue(t, "blockLength", 0);
                this.error = e.getParametersValue(t, "error", "");
                this.warnings = e.getParametersValue(t, "warnings", []);
                if ("valueBeforeDecode" in t) {
                    this.valueBeforeDecode = t.valueBeforeDecode.slice(0);
                } else {
                    this.valueBeforeDecode = new ArrayBuffer(0);
                }
            }
            t.blockName = function() {
                return "baseBlock";
            };
            const t_prototype = t.prototype;
            t_prototype.toJSON = function() {
                return {
                    blockName: this.constructor.blockName(),
                    blockLength: this.blockLength,
                    error: this.error,
                    warnings: this.warnings,
                    valueBeforeDecode: e.bufferToHexCodes(this.valueBeforeDecode, 0, this.valueBeforeDecode.byteLength)
                };
            };
            return t;
        })();
        const u = function(n) {
            return ((t)=>{
                function n(n = {}) {
                    let r;
                    r = t.call(this, n) || this;
                    r.isHexOnly = e.getParametersValue(n, "isHexOnly", false);
                    if ("valueHex" in n) {
                        r.valueHex = n.valueHex.slice(0);
                    } else {
                        r.valueHex = new ArrayBuffer(0);
                    }
                    return r;
                }
                babelHelpers.inheritsLoose(n, t);
                n.blockName = function() {
                    return "hexBlock";
                };
                const n_prototype = n.prototype;
                n_prototype.fromBER = function(n, r, o) {
                    if (e.checkBufferParams(this, n, r, o) === false) {
                        return -1;
                    }
                    const t = new Uint8Array(n, r, o);
                    if (t.length === 0) {
                        this.warnings.push("Zero buffer length");
                        return r;
                    }
                    this.valueHex = n.slice(r, r + o);
                    this.blockLength = o;
                    return r + o;
                };
                n_prototype.toBER = function(t = false) {
                    if (this.isHexOnly !== true) {
                        this.error = 'Flag "isHexOnly" is not set, abort';
                        return new ArrayBuffer(0);
                    }
                    if (t === true) {
                        return new ArrayBuffer(this.valueHex.byteLength);
                    }
                    return this.valueHex.slice(0);
                };
                n_prototype.toJSON = function() {
                    let n = {};
                    try {
                        n = t.prototype.toJSON.call(this);
                    } catch (e) {}
                    n.blockName = this.constructor.blockName();
                    n.isHexOnly = this.isHexOnly;
                    n.valueHex = e.bufferToHexCodes(this.valueHex, 0, this.valueHex.byteLength);
                    return n;
                };
                return n;
            })(n);
        };
        s.HexBlock = u;
        const c = ((t)=>{
            function n(n = {}) {
                let r;
                r = t.call(this) || this;
                if ("idBlock" in n) {
                    r.isHexOnly = e.getParametersValue(n.idBlock, "isHexOnly", false);
                    r.valueHex = e.getParametersValue(n.idBlock, "valueHex", new ArrayBuffer(0));
                    r.tagClass = e.getParametersValue(n.idBlock, "tagClass", -1);
                    r.tagNumber = e.getParametersValue(n.idBlock, "tagNumber", -1);
                    r.isConstructed = e.getParametersValue(n.idBlock, "isConstructed", false);
                } else {
                    r.tagClass = -1;
                    r.tagNumber = -1;
                    r.isConstructed = false;
                }
                return r;
            }
            babelHelpers.inheritsLoose(n, t);
            n.blockName = function() {
                return "identificationBlock";
            };
            const n_prototype = n.prototype;
            n_prototype.toBER = function(n = false) {
                let t = 0;
                let r;
                let o;
                switch(this.tagClass){
                    case 1:
                        t |= 0;
                        break;
                    case 2:
                        t |= 64;
                        break;
                    case 3:
                        t |= 128;
                        break;
                    case 4:
                        t |= 192;
                        break;
                    default:
                        this.error = "Unknown tag class";
                        return new ArrayBuffer(0);
                }
                if (this.isConstructed) {
                    t |= 32;
                }
                if (this.tagNumber < 31 && !this.isHexOnly) {
                    r = new ArrayBuffer(1);
                    o = new Uint8Array(r);
                    if (!n) {
                        let a = this.tagNumber;
                        a &= 31;
                        t |= a;
                        o[0] = t;
                    }
                    return r;
                }
                if (this.isHexOnly === false) {
                    const i = e.utilToBase(this.tagNumber, 7);
                    const l = new Uint8Array(i);
                    const s = i.byteLength;
                    r = new ArrayBuffer(s + 1);
                    o = new Uint8Array(r);
                    o[0] = t | 31;
                    if (!n) {
                        for(let u = 0; u < s - 1; u++){
                            o[u + 1] = l[u] | 128;
                        }
                        o[s] = l[s - 1];
                    }
                    return r;
                }
                r = new ArrayBuffer(this.valueHex.byteLength + 1);
                o = new Uint8Array(r);
                o[0] = t | 31;
                if (n === false) {
                    for(var c = new Uint8Array(this.valueHex), d = 0; d < c.length - 1; d++){
                        o[d + 1] = c[d] | 128;
                    }
                    o[this.valueHex.byteLength] = c[c.length - 1];
                }
                return r;
            };
            n_prototype.fromBER = function(n, r, o) {
                if (e.checkBufferParams(this, n, r, o) === false) {
                    return -1;
                }
                const t = new Uint8Array(n, r, o);
                if (t.length === 0) {
                    this.error = "Zero buffer length";
                    return -1;
                }
                const a = t[0] & 192;
                switch(a){
                    case 0:
                        this.tagClass = 1;
                        break;
                    case 64:
                        this.tagClass = 2;
                        break;
                    case 128:
                        this.tagClass = 3;
                        break;
                    case 192:
                        this.tagClass = 4;
                        break;
                    default:
                        this.error = "Unknown tag class";
                        return -1;
                }
                this.isConstructed = (t[0] & 32) === 32;
                this.isHexOnly = false;
                const i = t[0] & 31;
                if (i !== 31) {
                    this.tagNumber = i;
                    this.blockLength = 1;
                } else {
                    let l = 1;
                    this.valueHex = new ArrayBuffer(255);
                    let s = 255;
                    let u = new Uint8Array(this.valueHex);
                    while(t[l] & 128){
                        u[l - 1] = t[l] & 127;
                        l++;
                        if (l >= t.length) {
                            this.error = "End of input reached before message was fully decoded";
                            return -1;
                        }
                        if (l === s) {
                            s += 255;
                            const c = new ArrayBuffer(s);
                            const d = new Uint8Array(c);
                            for(let m = 0; m < u.length; m++){
                                d[m] = u[m];
                            }
                            this.valueHex = new ArrayBuffer(s);
                            u = new Uint8Array(this.valueHex);
                        }
                    }
                    this.blockLength = l + 1;
                    u[l - 1] = t[l] & 127;
                    const p = new ArrayBuffer(l);
                    const _ = new Uint8Array(p);
                    for(let f = 0; f < l; f++){
                        _[f] = u[f];
                    }
                    this.valueHex = new ArrayBuffer(l);
                    u = new Uint8Array(this.valueHex);
                    u.set(_);
                    if (this.blockLength <= 9) {
                        this.tagNumber = e.utilFromBase(u, 7);
                    } else {
                        this.isHexOnly = true;
                        this.warnings.push("Tag too long, represented as hex-coded");
                    }
                }
                if (this.tagClass === 1 && this.isConstructed) {
                    switch(this.tagNumber){
                        case 1:
                        case 2:
                        case 5:
                        case 6:
                        case 9:
                        case 13:
                        case 14:
                        case 23:
                        case 24:
                        case 31:
                        case 32:
                        case 33:
                        case 34:
                            this.error = "Constructed encoding used for primitive type";
                            return -1;
                        default:
                    }
                }
                return r + this.blockLength;
            };
            n_prototype.toJSON = function() {
                let e = {};
                try {
                    e = t.prototype.toJSON.call(this);
                } catch (e) {}
                e.blockName = this.constructor.blockName();
                e.tagClass = this.tagClass;
                e.tagNumber = this.tagNumber;
                e.isConstructed = this.isConstructed;
                return e;
            };
            return n;
        })(u(i));
        const d = ((t)=>{
            function n(n = {}) {
                let r;
                r = t.call(this) || this;
                if ("lenBlock" in n) {
                    r.isIndefiniteForm = e.getParametersValue(n.lenBlock, "isIndefiniteForm", false);
                    r.longFormUsed = e.getParametersValue(n.lenBlock, "longFormUsed", false);
                    r.length = e.getParametersValue(n.lenBlock, "length", 0);
                } else {
                    r.isIndefiniteForm = false;
                    r.longFormUsed = false;
                    r.length = 0;
                }
                return r;
            }
            babelHelpers.inheritsLoose(n, t);
            n.blockName = function() {
                return "lengthBlock";
            };
            const n_prototype = n.prototype;
            n_prototype.fromBER = function(n, r, o) {
                if (e.checkBufferParams(this, n, r, o) === false) {
                    return -1;
                }
                const t = new Uint8Array(n, r, o);
                if (t.length === 0) {
                    this.error = "Zero buffer length";
                    return -1;
                }
                if (t[0] === 255) {
                    this.error = "Length block 0xFF is reserved by standard";
                    return -1;
                }
                this.isIndefiniteForm = t[0] === 128;
                if (this.isIndefiniteForm === true) {
                    this.blockLength = 1;
                    return r + this.blockLength;
                }
                this.longFormUsed = !!(t[0] & 128);
                if (this.longFormUsed === false) {
                    this.length = t[0];
                    this.blockLength = 1;
                    return r + this.blockLength;
                }
                const a = t[0] & 127;
                if (a > 8) {
                    this.error = "Too big integer";
                    return -1;
                }
                if (a + 1 > t.length) {
                    this.error = "End of input reached before message was fully decoded";
                    return -1;
                }
                const i = new Uint8Array(a);
                for(let l = 0; l < a; l++){
                    i[l] = t[l + 1];
                }
                if (i[a - 1] === 0) {
                    this.warnings.push("Needlessly long encoded length");
                }
                this.length = e.utilFromBase(i, 8);
                if (this.longFormUsed && this.length <= 127) {
                    this.warnings.push("Unnecessary usage of long length form");
                }
                this.blockLength = a + 1;
                return r + this.blockLength;
            };
            n_prototype.toBER = function(n = false) {
                let t;
                let r;
                if (this.length > 127) {
                    this.longFormUsed = true;
                }
                if (this.isIndefiniteForm) {
                    t = new ArrayBuffer(1);
                    if (n === false) {
                        r = new Uint8Array(t);
                        r[0] = 128;
                    }
                    return t;
                }
                if (this.longFormUsed === true) {
                    const o = e.utilToBase(this.length, 8);
                    if (o.byteLength > 127) {
                        this.error = "Too big length";
                        return new ArrayBuffer(0);
                    }
                    t = new ArrayBuffer(o.byteLength + 1);
                    if (n === true) {
                        return t;
                    }
                    const a = new Uint8Array(o);
                    r = new Uint8Array(t);
                    r[0] = o.byteLength | 128;
                    for(let i = 0; i < o.byteLength; i++){
                        r[i + 1] = a[i];
                    }
                    return t;
                }
                t = new ArrayBuffer(1);
                if (n === false) {
                    r = new Uint8Array(t);
                    r[0] = this.length;
                }
                return t;
            };
            n_prototype.toJSON = function() {
                let e = {};
                try {
                    e = t.prototype.toJSON.call(this);
                } catch (e) {}
                e.blockName = this.constructor.blockName();
                e.isIndefiniteForm = this.isIndefiniteForm;
                e.longFormUsed = this.longFormUsed;
                e.length = this.length;
                return e;
            };
            return n;
        })(i);
        const m = ((e)=>{
            function t(t = {}) {
                return e.call(this, t) || this;
            }
            babelHelpers.inheritsLoose(t, e);
            t.blockName = function() {
                return "valueBlock";
            };
            const t_prototype = t.prototype;
            t_prototype.fromBER = function(t, n, r) {
                throw TypeError('User need to make a specific function in a class which extends "ValueBlock"');
            };
            t_prototype.toBER = function(t = false) {
                throw TypeError('User need to make a specific function in a class which extends "ValueBlock"');
            };
            return t;
        })(i);
        s.ValueBlock = m;
        var p = ((t)=>{
            function n(e = {}, n = m) {
                let r;
                r = t.call(this, e) || this;
                if ("name" in e) {
                    r.name = e.name;
                }
                if ("optional" in e) {
                    r.optional = e.optional;
                }
                if ("primitiveSchema" in e) {
                    r.primitiveSchema = e.primitiveSchema;
                }
                r.idBlock = new c(e);
                r.lenBlock = new d(e);
                r.valueBlock = new n(e);
                return r;
            }
            babelHelpers.inheritsLoose(n, t);
            n.blockName = function() {
                return "BaseBlock";
            };
            const n_prototype = n.prototype;
            n_prototype.fromBER = function(t, n, r) {
                const e = this.valueBlock.fromBER(t, n, this.lenBlock.isIndefiniteForm === true ? r : this.lenBlock.length);
                if (e === -1) {
                    this.error = this.valueBlock.error;
                    return e;
                }
                if (this.idBlock.error.length === 0) {
                    this.blockLength += this.idBlock.blockLength;
                }
                if (this.lenBlock.error.length === 0) {
                    this.blockLength += this.lenBlock.blockLength;
                }
                if (this.valueBlock.error.length === 0) {
                    this.blockLength += this.valueBlock.blockLength;
                }
                return e;
            };
            n_prototype.toBER = function(n = false) {
                let t;
                const r = this.idBlock.toBER(n);
                const o = this.valueBlock.toBER(true);
                this.lenBlock.length = o.byteLength;
                const a = this.lenBlock.toBER(n);
                t = e.utilConcatBuf(r, a);
                let i;
                if (n === false) {
                    i = this.valueBlock.toBER(n);
                } else {
                    i = new ArrayBuffer(this.lenBlock.length);
                }
                t = e.utilConcatBuf(t, i);
                if (this.lenBlock.isIndefiniteForm === true) {
                    const l = new ArrayBuffer(2);
                    if (n === false) {
                        const s = new Uint8Array(l);
                        s[0] = 0;
                        s[1] = 0;
                    }
                    t = e.utilConcatBuf(t, l);
                }
                return t;
            };
            n_prototype.toJSON = function() {
                let e = {};
                try {
                    e = t.prototype.toJSON.call(this);
                } catch (e) {}
                e.idBlock = this.idBlock.toJSON();
                e.lenBlock = this.lenBlock.toJSON();
                e.valueBlock = this.valueBlock.toJSON();
                if ("name" in this) {
                    e.name = this.name;
                }
                if ("optional" in this) {
                    e.optional = this.optional;
                }
                if ("primitiveSchema" in this) {
                    e.primitiveSchema = this.primitiveSchema.toJSON();
                }
                return e;
            };
            n_prototype.toString = function() {
                return `${this.constructor.blockName()} : ${e.bufferToHexCodes(this.valueBlock.valueHex)}`;
            };
            return n;
        })(i);
        s.BaseBlock = p;
        const _ = ((t)=>{
            function n(n = {}) {
                let r;
                r = t.call(this, n) || this;
                if ("valueHex" in n) {
                    r.valueHex = n.valueHex.slice(0);
                } else {
                    r.valueHex = new ArrayBuffer(0);
                }
                r.isHexOnly = e.getParametersValue(n, "isHexOnly", true);
                return r;
            }
            babelHelpers.inheritsLoose(n, t);
            const n_prototype = n.prototype;
            n_prototype.fromBER = function(n, r, o) {
                if (e.checkBufferParams(this, n, r, o) === false) {
                    return -1;
                }
                const t = new Uint8Array(n, r, o);
                if (t.length === 0) {
                    this.warnings.push("Zero buffer length");
                    return r;
                }
                this.valueHex = new ArrayBuffer(t.length);
                const a = new Uint8Array(this.valueHex);
                for(let i = 0; i < t.length; i++){
                    a[i] = t[i];
                }
                this.blockLength = o;
                return r + o;
            };
            n_prototype.toBER = function(t = false) {
                return this.valueHex.slice(0);
            };
            n.blockName = function() {
                return "PrimitiveValueBlock";
            };
            n_prototype.toJSON = function() {
                let n = {};
                try {
                    n = t.prototype.toJSON.call(this);
                } catch (e) {}
                n.valueHex = e.bufferToHexCodes(this.valueHex, 0, this.valueHex.byteLength);
                n.isHexOnly = this.isHexOnly;
                return n;
            };
            return n;
        })(m);
        var f = ((e)=>{
            function t(t = {}) {
                let n;
                n = e.call(this, t, _) || this;
                n.idBlock.isConstructed = false;
                return n;
            }
            babelHelpers.inheritsLoose(t, e);
            t.blockName = function() {
                return "PRIMITIVE";
            };
            return t;
        })(p);
        s.Primitive = f;
        const g = ((t)=>{
            function n(n = {}) {
                let r;
                r = t.call(this, n) || this;
                r.value = e.getParametersValue(n, "value", []);
                r.isIndefiniteForm = e.getParametersValue(n, "isIndefiniteForm", false);
                return r;
            }
            babelHelpers.inheritsLoose(n, t);
            const n_prototype = n.prototype;
            n_prototype.fromBER = function(n, r, o) {
                const t = r;
                const a = o;
                if (e.checkBufferParams(this, n, r, o) === false) {
                    return -1;
                }
                const i = new Uint8Array(n, r, o);
                if (i.length === 0) {
                    this.warnings.push("Zero buffer length");
                    return r;
                }
                function l(isIndefiniteForm, t) {
                    if (isIndefiniteForm === true) {
                        return 1;
                    }
                    return t;
                }
                let s = r;
                while(l(this.isIndefiniteForm, o) > 0){
                    const u = me(n, s, o);
                    if (u.offset === -1) {
                        this.error = u.result.error;
                        this.warnings.concat(u.result.warnings);
                        return -1;
                    }
                    s = u.offset;
                    this.blockLength += u.result.blockLength;
                    o -= u.result.blockLength;
                    this.value.push(u.result);
                    if (this.isIndefiniteForm === true && u.result.constructor.blockName() === C.blockName()) {
                        break;
                    }
                }
                if (this.isIndefiniteForm === true) {
                    if (this.value[this.value.length - 1].constructor.blockName() === C.blockName()) {
                        this.value.pop();
                    } else {
                        this.warnings.push("No EndOfContent block encoded");
                    }
                }
                this.valueBeforeDecode = n.slice(t, t + a);
                return s;
            };
            n_prototype.toBER = function(n = false) {
                let t = new ArrayBuffer(0);
                for(let r = 0; r < this.value.length; r++){
                    const o = this.value[r].toBER(n);
                    t = e.utilConcatBuf(t, o);
                }
                return t;
            };
            n.blockName = function() {
                return "ConstructedValueBlock";
            };
            n_prototype.toJSON = function() {
                let e = {};
                try {
                    e = t.prototype.toJSON.call(this);
                } catch (e) {}
                e.isIndefiniteForm = this.isIndefiniteForm;
                e.value = [];
                for(let n = 0; n < this.value.length; n++){
                    e.value.push(this.value[n].toJSON());
                }
                return e;
            };
            return n;
        })(m);
        var h = ((e)=>{
            function n(t = {}) {
                let n;
                n = e.call(this, t, g) || this;
                n.idBlock.isConstructed = true;
                return n;
            }
            babelHelpers.inheritsLoose(n, e);
            n.blockName = function() {
                return "CONSTRUCTED";
            };
            const n_prototype = n.prototype;
            n_prototype.fromBER = function(t, n, r) {
                this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm;
                const e = this.valueBlock.fromBER(t, n, this.lenBlock.isIndefiniteForm === true ? r : this.lenBlock.length);
                if (e === -1) {
                    this.error = this.valueBlock.error;
                    return e;
                }
                if (this.idBlock.error.length === 0) {
                    this.blockLength += this.idBlock.blockLength;
                }
                if (this.lenBlock.error.length === 0) {
                    this.blockLength += this.lenBlock.blockLength;
                }
                if (this.valueBlock.error.length === 0) {
                    this.blockLength += this.valueBlock.blockLength;
                }
                return e;
            };
            n_prototype.toString = function() {
                const e = [];
                for (const o of this.valueBlock.value){
                    e.push(o.toString().split("\n").map((e)=>`  ${e}`).join("\n"));
                }
                const a = this.idBlock.tagClass === 3 ? `[${this.idBlock.tagNumber}]` : this.constructor.blockName();
                if (e.length) {
                    return `${a} :
${e.join("\n")}`;
                }
                return `${a} :`;
            };
            return n;
        })(p);
        s.Constructed = h;
        const y = ((e)=>{
            function t(t = {}) {
                return e.call(this, t) || this;
            }
            babelHelpers.inheritsLoose(t, e);
            const t_prototype = t.prototype;
            t_prototype.fromBER = function(t, n, r) {
                return n;
            };
            t_prototype.toBER = function(t = false) {
                return new ArrayBuffer(0);
            };
            t.blockName = function() {
                return "EndOfContentValueBlock";
            };
            return t;
        })(m);
        var C = ((e)=>{
            function t(t = {}) {
                let n;
                n = e.call(this, t, y) || this;
                n.idBlock.tagClass = 1;
                n.idBlock.tagNumber = 0;
                return n;
            }
            babelHelpers.inheritsLoose(t, e);
            t.blockName = function() {
                return "EndOfContent";
            };
            return t;
        })(p);
        s.EndOfContent = C;
        const b = ((t)=>{
            function n(n = {}) {
                let r;
                r = t.call(this, n) || this;
                r.value = e.getParametersValue(n, "value", false);
                r.isHexOnly = e.getParametersValue(n, "isHexOnly", false);
                if ("valueHex" in n) {
                    r.valueHex = n.valueHex.slice(0);
                } else {
                    r.valueHex = new ArrayBuffer(1);
                    if (r.value === true) {
                        const o = new Uint8Array(r.valueHex);
                        o[0] = 255;
                    }
                }
                return r;
            }
            babelHelpers.inheritsLoose(n, t);
            const n_prototype = n.prototype;
            n_prototype.fromBER = function(n, r, o) {
                if (e.checkBufferParams(this, n, r, o) === false) {
                    return -1;
                }
                const t = new Uint8Array(n, r, o);
                if (o > 1) {
                    this.warnings.push("Boolean value encoded in more then 1 octet");
                }
                this.isHexOnly = true;
                this.valueHex = new ArrayBuffer(t.length);
                const a = new Uint8Array(this.valueHex);
                for(let i = 0; i < t.length; i++){
                    a[i] = t[i];
                }
                if (e.utilDecodeTC.call(this) !== 0) {
                    this.value = true;
                } else {
                    this.value = false;
                }
                this.blockLength = o;
                return r + o;
            };
            n_prototype.toBER = function(t = false) {
                return this.valueHex;
            };
            n.blockName = function() {
                return "BooleanValueBlock";
            };
            n_prototype.toJSON = function() {
                let n = {};
                try {
                    n = t.prototype.toJSON.call(this);
                } catch (e) {}
                n.value = this.value;
                n.isHexOnly = this.isHexOnly;
                n.valueHex = e.bufferToHexCodes(this.valueHex, 0, this.valueHex.byteLength);
                return n;
            };
            return n;
        })(m);
        var v = ((e)=>{
            function t(t = {}) {
                let n;
                n = e.call(this, t, b) || this;
                n.idBlock.tagClass = 1;
                n.idBlock.tagNumber = 1;
                return n;
            }
            babelHelpers.inheritsLoose(t, e);
            t.blockName = function() {
                return "BOOLEAN";
            };
            const t_prototype = t.prototype;
            t_prototype.toString = function() {
                return `${this.constructor.blockName()} : ${this.valueBlock.value}`;
            };
            return t;
        })(p);
        s.Boolean = v;
        var S = ((e)=>{
            function t(t = {}) {
                let n;
                n = e.call(this, t) || this;
                n.idBlock.tagClass = 1;
                n.idBlock.tagNumber = 16;
                return n;
            }
            babelHelpers.inheritsLoose(t, e);
            t.blockName = function() {
                return "SEQUENCE";
            };
            return t;
        })(h);
        s.Sequence = S;
        var R = ((e)=>{
            function t(t = {}) {
                let n;
                n = e.call(this, t) || this;
                n.idBlock.tagClass = 1;
                n.idBlock.tagNumber = 17;
                return n;
            }
            babelHelpers.inheritsLoose(t, e);
            t.blockName = function() {
                return "SET";
            };
            return t;
        })(h);
        s.Set = R;
        var L = ((e)=>{
            function t(t = {}) {
                let n;
                n = e.call(this, t, i) || this;
                n.idBlock.tagClass = 1;
                n.idBlock.tagNumber = 5;
                return n;
            }
            babelHelpers.inheritsLoose(t, e);
            t.blockName = function() {
                return "NULL";
            };
            const t_prototype = t.prototype;
            t_prototype.fromBER = function(t, n, r) {
                if (this.lenBlock.length > 0) {
                    this.warnings.push("Non-zero length of value block for Null type");
                }
                if (this.idBlock.error.length === 0) {
                    this.blockLength += this.idBlock.blockLength;
                }
                if (this.lenBlock.error.length === 0) {
                    this.blockLength += this.lenBlock.blockLength;
                }
                this.blockLength += r;
                if (n + r > t.byteLength) {
                    this.error = "End of input reached before message was fully decoded (inconsistent offset and length values)";
                    return -1;
                }
                return n + r;
            };
            t_prototype.toBER = function(t = false) {
                const e = new ArrayBuffer(2);
                if (t === true) {
                    return e;
                }
                const n = new Uint8Array(e);
                n[0] = 5;
                n[1] = 0;
                return e;
            };
            t_prototype.toString = function() {
                return `${this.constructor.blockName()}`;
            };
            return t;
        })(p);
        s.Null = L;
        const E = ((t)=>{
            function n(n = {}) {
                let r;
                r = t.call(this, n) || this;
                r.isConstructed = e.getParametersValue(n, "isConstructed", false);
                return r;
            }
            babelHelpers.inheritsLoose(n, t);
            const n_prototype = n.prototype;
            n_prototype.fromBER = function(n, r, o) {
                let e = 0;
                if (this.isConstructed === true) {
                    this.isHexOnly = false;
                    e = g.prototype.fromBER.call(this, n, r, o);
                    if (e === -1) {
                        return e;
                    }
                    for(let a = 0; a < this.value.length; a++){
                        const i = this.value[a].constructor.blockName();
                        if (i === C.blockName()) {
                            if (this.isIndefiniteForm === true) {
                                break;
                            }
                            this.error = "EndOfContent is unexpected, OCTET STRING may consists of OCTET STRINGs only";
                            return -1;
                        }
                        if (i !== k.blockName()) {
                            this.error = "OCTET STRING may consists of OCTET STRINGs only";
                            return -1;
                        }
                    }
                } else {
                    this.isHexOnly = true;
                    e = t.prototype.fromBER.call(this, n, r, o);
                    this.blockLength = o;
                }
                return e;
            };
            n_prototype.toBER = function(t = false) {
                if (this.isConstructed === true) {
                    return g.prototype.toBER.call(this, t);
                }
                let e = new ArrayBuffer(this.valueHex.byteLength);
                if (!(t === true || this.valueHex.byteLength === 0)) {
                    e = this.valueHex.slice(0);
                }
                return e;
            };
            n.blockName = function() {
                return "OctetStringValueBlock";
            };
            n_prototype.toJSON = function() {
                let n = {};
                try {
                    n = t.prototype.toJSON.call(this);
                } catch (e) {}
                n.isConstructed = this.isConstructed;
                n.isHexOnly = this.isHexOnly;
                n.valueHex = e.bufferToHexCodes(this.valueHex, 0, this.valueHex.byteLength);
                return n;
            };
            return n;
        })(u(g));
        var k = ((t)=>{
            function n(e = {}) {
                let n;
                n = t.call(this, e, E) || this;
                n.idBlock.tagClass = 1;
                n.idBlock.tagNumber = 4;
                return n;
            }
            babelHelpers.inheritsLoose(n, t);
            const n_prototype = n.prototype;
            n_prototype.fromBER = function(n, r, o) {
                this.valueBlock.isConstructed = this.idBlock.isConstructed;
                this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm;
                if (o === 0) {
                    if (this.idBlock.error.length === 0) {
                        this.blockLength += this.idBlock.blockLength;
                    }
                    if (this.lenBlock.error.length === 0) {
                        this.blockLength += this.lenBlock.blockLength;
                    }
                    return r;
                }
                if (!this.valueBlock.isConstructed) {
                    const e = n.slice(r, r + o);
                    try {
                        const a = pe(e);
                        if (a.offset !== -1 && a.offset === o) {
                            this.valueBlock.value = [
                                a.result
                            ];
                        }
                    } catch (e) {}
                }
                return t.prototype.fromBER.call(this, n, r, o);
            };
            n.blockName = function() {
                return "OCTET STRING";
            };
            n_prototype.isEqual = function(t) {
                return !(!(t instanceof n) || JSON.stringify(this) !== JSON.stringify(t));
            };
            n_prototype.toString = function() {
                if (this.valueBlock.isConstructed || this.valueBlock.value && this.valueBlock.value.length) {
                    return h.prototype.toString.call(this);
                }
                return `${this.constructor.blockName()} : ${e.bufferToHexCodes(this.valueBlock.valueHex)}`;
            };
            return n;
        })(p);
        s.OctetString = k;
        const I = ((t)=>{
            function n(n = {}) {
                let r;
                r = t.call(this, n) || this;
                r.unusedBits = e.getParametersValue(n, "unusedBits", 0);
                r.isConstructed = e.getParametersValue(n, "isConstructed", false);
                r.blockLength = r.valueHex.byteLength;
                return r;
            }
            babelHelpers.inheritsLoose(n, t);
            const n_prototype = n.prototype;
            n_prototype.fromBER = function(n, r, o) {
                if (o === 0) {
                    return r;
                }
                let t = -1;
                if (this.isConstructed === true) {
                    t = g.prototype.fromBER.call(this, n, r, o);
                    if (t === -1) {
                        return t;
                    }
                    for(let a = 0; a < this.value.length; a++){
                        const i = this.value[a].constructor.blockName();
                        if (i === C.blockName()) {
                            if (this.isIndefiniteForm === true) {
                                break;
                            }
                            this.error = "EndOfContent is unexpected, BIT STRING may consists of BIT STRINGs only";
                            return -1;
                        }
                        if (i !== T.blockName()) {
                            this.error = "BIT STRING may consists of BIT STRINGs only";
                            return -1;
                        }
                        if (this.unusedBits > 0 && this.value[a].valueBlock.unusedBits > 0) {
                            this.error = 'Using of "unused bits" inside constructive BIT STRING allowed for least one only';
                            return -1;
                        }
                        this.unusedBits = this.value[a].valueBlock.unusedBits;
                        if (this.unusedBits > 7) {
                            this.error = "Unused bits for BitString must be in range 0-7";
                            return -1;
                        }
                    }
                    return t;
                }
                if (e.checkBufferParams(this, n, r, o) === false) {
                    return -1;
                }
                const l = new Uint8Array(n, r, o);
                this.unusedBits = l[0];
                if (this.unusedBits > 7) {
                    this.error = "Unused bits for BitString must be in range 0-7";
                    return -1;
                }
                if (!this.unusedBits) {
                    const s = n.slice(r + 1, r + o);
                    try {
                        const u = pe(s);
                        if (u.offset !== -1 && u.offset === o - 1) {
                            this.value = [
                                u.result
                            ];
                        }
                    } catch (e) {}
                }
                this.valueHex = new ArrayBuffer(l.length - 1);
                const c = new Uint8Array(this.valueHex);
                for(let d = 0; d < o - 1; d++){
                    c[d] = l[d + 1];
                }
                this.blockLength = l.length;
                return r + o;
            };
            n_prototype.toBER = function(t = false) {
                if (this.isConstructed === true) {
                    return g.prototype.toBER.call(this, t);
                }
                if (t === true) {
                    return new ArrayBuffer(this.valueHex.byteLength + 1);
                }
                if (this.valueHex.byteLength === 0) {
                    return new ArrayBuffer(0);
                }
                const e = new Uint8Array(this.valueHex);
                const n = new ArrayBuffer(this.valueHex.byteLength + 1);
                const r = new Uint8Array(n);
                r[0] = this.unusedBits;
                for(let o = 0; o < this.valueHex.byteLength; o++){
                    r[o + 1] = e[o];
                }
                return n;
            };
            n.blockName = function() {
                return "BitStringValueBlock";
            };
            n_prototype.toJSON = function() {
                let n = {};
                try {
                    n = t.prototype.toJSON.call(this);
                } catch (e) {}
                n.unusedBits = this.unusedBits;
                n.isConstructed = this.isConstructed;
                n.isHexOnly = this.isHexOnly;
                n.valueHex = e.bufferToHexCodes(this.valueHex, 0, this.valueHex.byteLength);
                return n;
            };
            return n;
        })(u(g));
        var T = ((e)=>{
            function n(t = {}) {
                let n;
                n = e.call(this, t, I) || this;
                n.idBlock.tagClass = 1;
                n.idBlock.tagNumber = 3;
                return n;
            }
            babelHelpers.inheritsLoose(n, e);
            n.blockName = function() {
                return "BIT STRING";
            };
            const n_prototype = n.prototype;
            n_prototype.fromBER = function(n, r, o) {
                if (o === 0) {
                    return r;
                }
                this.valueBlock.isConstructed = this.idBlock.isConstructed;
                this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm;
                return e.prototype.fromBER.call(this, n, r, o);
            };
            n_prototype.isEqual = function(t) {
                return !(!(t instanceof n) || JSON.stringify(this) !== JSON.stringify(t));
            };
            n_prototype.toString = function() {
                if (this.valueBlock.isConstructed || this.valueBlock.value && this.valueBlock.value.length) {
                    return h.prototype.toString.call(this);
                }
                const e = [];
                const n = new Uint8Array(this.valueBlock.valueHex);
                for (const a of n){
                    e.push(a.toString(2).padStart(8, "0"));
                }
                return `${this.constructor.blockName()} : ${e.join("")}`;
            };
            return n;
        })(p);
        s.BitString = T;
        const D = ((t)=>{
            function n(e = {}) {
                let n;
                n = t.call(this, e) || this;
                if ("value" in e) {
                    n.valueDec = e.value;
                }
                return n;
            }
            babelHelpers.inheritsLoose(n, t);
            const n_prototype = n.prototype;
            n_prototype.fromDER = function(t, n, r, o = 0) {
                const e = this.fromBER(t, n, r);
                if (e === -1) {
                    return e;
                }
                const a = new Uint8Array(this.$LocalIntegerValueBlock1);
                if (a[0] === 0 && (a[1] & 128) !== 0) {
                    const i = new ArrayBuffer(this.$LocalIntegerValueBlock1.byteLength - 1);
                    const l = new Uint8Array(i);
                    l.set(new Uint8Array(this.$LocalIntegerValueBlock1, 1, this.$LocalIntegerValueBlock1.byteLength - 1));
                    this.$LocalIntegerValueBlock1 = i.slice(0);
                } else if (o !== 0 && this.$LocalIntegerValueBlock1.byteLength < o) {
                    if (o - this.$LocalIntegerValueBlock1.byteLength > 1) {
                        o = this.$LocalIntegerValueBlock1.byteLength + 1;
                    }
                    const s = new ArrayBuffer(o);
                    const u = new Uint8Array(s);
                    u.set(a, o - this.$LocalIntegerValueBlock1.byteLength);
                    this.$LocalIntegerValueBlock1 = s.slice(0);
                }
                return e;
            };
            n_prototype.toDER = function(t = false) {
                const e = new Uint8Array(this.$LocalIntegerValueBlock1);
                switch(true){
                    case (e[0] & 128) !== 0:
                        {
                            const n = new ArrayBuffer(this.$LocalIntegerValueBlock1.byteLength + 1);
                            const r = new Uint8Array(n);
                            r[0] = 0;
                            r.set(e, 1);
                            this.$LocalIntegerValueBlock1 = n.slice(0);
                        }
                        break;
                    case e[0] === 0 && (e[1] & 128) === 0:
                        {
                            const o = new ArrayBuffer(this.$LocalIntegerValueBlock1.byteLength - 1);
                            const a = new Uint8Array(o);
                            a.set(new Uint8Array(this.$LocalIntegerValueBlock1, 1, this.$LocalIntegerValueBlock1.byteLength - 1));
                            this.$LocalIntegerValueBlock1 = o.slice(0);
                        }
                        break;
                    default:
                }
                return this.toBER(t);
            };
            n_prototype.fromBER = function(n, r, o) {
                const e = t.prototype.fromBER.call(this, n, r, o);
                if (e === -1) {
                    return e;
                }
                this.blockLength = o;
                return r + o;
            };
            n_prototype.toBER = function(t = false) {
                return this.valueHex.slice(0);
            };
            n.blockName = function() {
                return "IntegerValueBlock";
            };
            n_prototype.toJSON = function() {
                let e = {};
                try {
                    e = t.prototype.toJSON.call(this);
                } catch (e) {}
                e.valueDec = this.valueDec;
                return e;
            };
            n_prototype.toString = function() {
                function t(t, n) {
                    const r = new Uint8Array([
                        0
                    ]);
                    const o = new Uint8Array(t);
                    const a = new Uint8Array(n);
                    let i = o.slice(0);
                    const l = i.length - 1;
                    const s = a.slice(0);
                    const u = s.length - 1;
                    let c = 0;
                    const d = u < l ? l : u;
                    for(let m = 0, p = d; p >= 0; p--, m++){
                        switch(true){
                            case m < s.length:
                                c = i[l - m] + s[u - m] + r[0];
                                break;
                            default:
                                c = i[l - m] + r[0];
                        }
                        r[0] = c / 10;
                        switch(true){
                            case m >= i.length:
                                i = e.utilConcatView(new Uint8Array([
                                    c % 10
                                ]), i);
                                break;
                            default:
                                i[l - m] = c % 10;
                        }
                    }
                    if (r[0] > 0) {
                        i = e.utilConcatView(r, i);
                    }
                    return i.slice(0);
                }
                function n(t) {
                    if (t >= o.length) {
                        for(let n = o.length; n <= t; n++){
                            const r = new Uint8Array([
                                0
                            ]);
                            let a = o[n - 1].slice(0);
                            for(let i = a.length - 1; i >= 0; i--){
                                const l = new Uint8Array([
                                    (a[i] << 1) + r[0]
                                ]);
                                r[0] = l[0] / 10;
                                a[i] = l[0] % 10;
                            }
                            if (r[0] > 0) {
                                a = e.utilConcatView(r, a);
                            }
                            o.push(a);
                        }
                    }
                    return o[t];
                }
                function r(e, t) {
                    let n = 0;
                    const r = new Uint8Array(e);
                    const o = new Uint8Array(t);
                    const a = r.slice(0);
                    const i = a.length - 1;
                    const l = o.slice(0);
                    const s = l.length - 1;
                    let u;
                    for(var c = 0, d = s; d >= 0; d--, c++){
                        u = a[i - c] - l[s - c] - n;
                        switch(true){
                            case u < 0:
                                n = 1;
                                a[i - c] = u + 10;
                                break;
                            default:
                                n = 0;
                                a[i - c] = u;
                        }
                    }
                    if (n > 0) {
                        for(let m = i - s + 1; m >= 0; m--, c++){
                            u = a[i - c] - n;
                            if (u < 0) {
                                n = 1;
                                a[i - c] = u + 10;
                            } else {
                                n = 0;
                                a[i - c] = u;
                                break;
                            }
                        }
                    }
                    return a.slice();
                }
                const i = this.$LocalIntegerValueBlock1.byteLength * 8 - 1;
                let l = new Uint8Array(this.$LocalIntegerValueBlock1.byteLength * 8 / 3);
                let s = 0;
                let u;
                const c = new Uint8Array(this.$LocalIntegerValueBlock1);
                let d = "";
                let m = false;
                for(let p = this.$LocalIntegerValueBlock1.byteLength - 1; p >= 0; p--){
                    u = c[p];
                    for(let _ = 0; _ < 8; _++){
                        if ((u & 1) === 1) {
                            switch(s){
                                case i:
                                    l = r(n(s), l);
                                    d = "-";
                                    break;
                                default:
                                    l = t(l, n(s));
                            }
                        }
                        s++;
                        u >>= 1;
                    }
                }
                for(let f = 0; f < l.length; f++){
                    if (l[f]) {
                        m = true;
                    }
                    if (m) {
                        d += a.charAt(l[f]);
                    }
                }
                if (m === false) {
                    d += a.charAt(0);
                }
                return d;
            };
            return babelHelpers.createClass(n, [
                {
                    key: "valueHex",
                    get: function() {
                        return this.$LocalIntegerValueBlock1;
                    },
                    set: function(n) {
                        this.$LocalIntegerValueBlock1 = n.slice(0);
                        if (n.byteLength >= 4) {
                            this.warnings.push("Too big Integer for decoding, hex only");
                            this.isHexOnly = true;
                            this.$LocalIntegerValueBlock2 = 0;
                        } else {
                            this.isHexOnly = false;
                            if (n.byteLength > 0) {
                                this.$LocalIntegerValueBlock2 = e.utilDecodeTC.call(this);
                            }
                        }
                    }
                },
                {
                    key: "valueDec",
                    get: function() {
                        return this.$LocalIntegerValueBlock2;
                    },
                    set: function(n) {
                        this.$LocalIntegerValueBlock2 = n;
                        this.isHexOnly = false;
                        this.$LocalIntegerValueBlock1 = e.utilEncodeTC(n);
                    }
                }
            ]);
        })(u(m));
        var x = ((t)=>{
            function n(e = {}) {
                let n;
                n = t.call(this, e, D) || this;
                n.idBlock.tagClass = 1;
                n.idBlock.tagNumber = 2;
                return n;
            }
            babelHelpers.inheritsLoose(n, t);
            n.blockName = function() {
                return "INTEGER";
            };
            const n_prototype = n.prototype;
            n_prototype.isEqual = function(r) {
                if (r instanceof n) {
                    if (this.valueBlock.isHexOnly && r.valueBlock.isHexOnly) {
                        return e.isEqualBuffer(this.valueBlock.valueHex, r.valueBlock.valueHex);
                    }
                    if (this.valueBlock.isHexOnly === r.valueBlock.isHexOnly) {
                        return this.valueBlock.valueDec === r.valueBlock.valueDec;
                    }
                    return false;
                }
                if (r instanceof ArrayBuffer) {
                    return e.isEqualBuffer(this.valueBlock.valueHex, r);
                }
                return false;
            };
            n_prototype.convertToDER = function() {
                const e = new n({
                    valueHex: this.valueBlock.valueHex
                });
                e.valueBlock.toDER();
                return e;
            };
            n_prototype.convertFromDER = function() {
                const e = this.valueBlock.valueHex.byteLength % 2 ? this.valueBlock.valueHex.byteLength + 1 : this.valueBlock.valueHex.byteLength;
                const t = new n({
                    valueHex: this.valueBlock.valueHex
                });
                t.valueBlock.fromDER(t.valueBlock.valueHex, 0, t.valueBlock.valueHex.byteLength, e);
                return t;
            };
            n_prototype.toString = function() {
                const t = e.bufferToHexCodes(this.valueBlock.valueHex);
                const n = BigInt(`0x${t}`);
                return `${this.constructor.blockName()} : ${n.toString()}`;
            };
            return n;
        })(p);
        s.Integer = x;
        var $ = ((e)=>{
            function t(t = {}) {
                let n;
                n = e.call(this, t) || this;
                n.idBlock.tagClass = 1;
                n.idBlock.tagNumber = 10;
                return n;
            }
            babelHelpers.inheritsLoose(t, e);
            t.blockName = function() {
                return "ENUMERATED";
            };
            return t;
        })(x);
        s.Enumerated = $;
        const P = ((t)=>{
            function n(n = {}) {
                let r;
                r = t.call(this, n) || this;
                r.valueDec = e.getParametersValue(n, "valueDec", -1);
                r.isFirstSid = e.getParametersValue(n, "isFirstSid", false);
                return r;
            }
            babelHelpers.inheritsLoose(n, t);
            n.blockName = function() {
                return "sidBlock";
            };
            const n_prototype = n.prototype;
            n_prototype.fromBER = function(n, r, o) {
                if (o === 0) {
                    return r;
                }
                if (e.checkBufferParams(this, n, r, o) === false) {
                    return -1;
                }
                const t = new Uint8Array(n, r, o);
                this.valueHex = new ArrayBuffer(o);
                let a = new Uint8Array(this.valueHex);
                for(let i = 0; i < o && (a[i] = t[i] & 127, this.blockLength++, (t[i] & 128) !== 0); i++);
                const l = new ArrayBuffer(this.blockLength);
                const s = new Uint8Array(l);
                for(let u = 0; u < this.blockLength; u++){
                    s[u] = a[u];
                }
                this.valueHex = l.slice(0);
                a = new Uint8Array(this.valueHex);
                if ((t[this.blockLength - 1] & 128) !== 0) {
                    this.error = "End of input reached before message was fully decoded";
                    return -1;
                }
                if (a[0] === 0) {
                    this.warnings.push("Needlessly long format of SID encoding");
                }
                if (this.blockLength <= 8) {
                    this.valueDec = e.utilFromBase(a, 7);
                } else {
                    this.isHexOnly = true;
                    this.warnings.push("Too big SID for decoding, hex only");
                }
                return r + this.blockLength;
            };
            n_prototype.toBER = function(n = false) {
                let t;
                let r;
                if (this.isHexOnly) {
                    if (n === true) {
                        return new ArrayBuffer(this.valueHex.byteLength);
                    }
                    const o = new Uint8Array(this.valueHex);
                    t = new ArrayBuffer(this.blockLength);
                    r = new Uint8Array(t);
                    for(let a = 0; a < this.blockLength - 1; a++){
                        r[a] = o[a] | 128;
                    }
                    r[this.blockLength - 1] = o[this.blockLength - 1];
                    return t;
                }
                const i = e.utilToBase(this.valueDec, 7);
                if (i.byteLength === 0) {
                    this.error = "Error during encoding SID value";
                    return new ArrayBuffer(0);
                }
                t = new ArrayBuffer(i.byteLength);
                if (n === false) {
                    const l = new Uint8Array(i);
                    r = new Uint8Array(t);
                    for(let s = 0; s < i.byteLength - 1; s++){
                        r[s] = l[s] | 128;
                    }
                    r[i.byteLength - 1] = l[i.byteLength - 1];
                }
                return t;
            };
            n_prototype.toString = function() {
                let t = "";
                if (this.isHexOnly === true) {
                    t = e.bufferToHexCodes(this.valueHex, 0, this.valueHex.byteLength);
                } else if (this.isFirstSid) {
                    let n = this.valueDec;
                    if (this.valueDec <= 39) {
                        t = "0.";
                    } else if (this.valueDec <= 79) {
                        t = "1.";
                        n -= 40;
                    } else {
                        t = "2.";
                        n -= 80;
                    }
                    t += n.toString();
                } else {
                    t = this.valueDec.toString();
                }
                return t;
            };
            n_prototype.toJSON = function() {
                let e = {};
                try {
                    e = t.prototype.toJSON.call(this);
                } catch (e) {}
                e.valueDec = this.valueDec;
                e.isFirstSid = this.isFirstSid;
                return e;
            };
            return n;
        })(u(i));
        const N = ((t)=>{
            function n(n = {}) {
                let r;
                r = t.call(this, n) || this;
                r.fromString(e.getParametersValue(n, "value", ""));
                return r;
            }
            babelHelpers.inheritsLoose(n, t);
            const n_prototype = n.prototype;
            n_prototype.fromBER = function(t, n, r) {
                let e = n;
                while(r > 0){
                    const o = new P;
                    e = o.fromBER(t, e, r);
                    if (e === -1) {
                        this.blockLength = 0;
                        this.error = o.error;
                        return e;
                    }
                    if (this.value.length === 0) {
                        o.isFirstSid = true;
                    }
                    this.blockLength += o.blockLength;
                    r -= o.blockLength;
                    this.value.push(o);
                }
                return e;
            };
            n_prototype.toBER = function(n = false) {
                let t = new ArrayBuffer(0);
                for(let r = 0; r < this.value.length; r++){
                    const o = this.value[r].toBER(n);
                    if (o.byteLength === 0) {
                        this.error = this.value[r].error;
                        return new ArrayBuffer(0);
                    }
                    t = e.utilConcatBuf(t, o);
                }
                return t;
            };
            n_prototype.fromString = function(t) {
                this.value = [];
                let e = 0;
                let n = 0;
                let r = "";
                let o = false;
                do {
                    n = t.indexOf(".", e);
                    if (n === -1) {
                        r = t.substr(e);
                    } else {
                        r = t.substr(e, n - e);
                    }
                    e = n + 1;
                    if (o) {
                        const a = this.value[0];
                        let i = 0;
                        switch(a.valueDec){
                            case 0:
                                break;
                            case 1:
                                i = 40;
                                break;
                            case 2:
                                i = 80;
                                break;
                            default:
                                this.value = [];
                                return false;
                        }
                        const l = parseInt(r, 10);
                        if (isNaN(l)) {
                            return true;
                        }
                        a.valueDec = l + i;
                        o = false;
                    } else {
                        const s = new P;
                        s.valueDec = parseInt(r, 10);
                        if (isNaN(s.valueDec)) {
                            return true;
                        }
                        if (this.value.length === 0) {
                            s.isFirstSid = true;
                            o = true;
                        }
                        this.value.push(s);
                    }
                }while (n !== -1)
                return true;
            };
            n_prototype.toString = function() {
                let e = "";
                let t = false;
                for(let n = 0; n < this.value.length; n++){
                    t = this.value[n].isHexOnly;
                    let r = this.value[n].toString();
                    if (n !== 0) {
                        e = `${e}.`;
                    }
                    if (t) {
                        r = `{${r}}`;
                        if (this.value[n].isFirstSid) {
                            e = `2.{${r} - 80}`;
                        } else {
                            e += r;
                        }
                    } else {
                        e += r;
                    }
                }
                return e;
            };
            n.blockName = function() {
                return "ObjectIdentifierValueBlock";
            };
            n_prototype.toJSON = function() {
                let e = {};
                try {
                    e = t.prototype.toJSON.call(this);
                } catch (e) {}
                e.value = this.toString();
                e.sidArray = [];
                for(let n = 0; n < this.value.length; n++){
                    e.sidArray.push(this.value[n].toJSON());
                }
                return e;
            };
            return n;
        })(m);
        var M = ((e)=>{
            function t(t = {}) {
                let n;
                n = e.call(this, t, N) || this;
                n.idBlock.tagClass = 1;
                n.idBlock.tagNumber = 6;
                return n;
            }
            babelHelpers.inheritsLoose(t, e);
            t.blockName = function() {
                return "OBJECT IDENTIFIER";
            };
            const t_prototype = t.prototype;
            t_prototype.toString = function() {
                return `${this.constructor.blockName()} : ${this.valueBlock.toString()}`;
            };
            return t;
        })(p);
        s.ObjectIdentifier = M;
        const w = ((e)=>{
            function t(t = {}) {
                let n;
                n = e.call(this, t) || this;
                n.isHexOnly = true;
                n.value = "";
                return n;
            }
            babelHelpers.inheritsLoose(t, e);
            t.blockName = function() {
                return "Utf8StringValueBlock";
            };
            const t_prototype = t.prototype;
            t_prototype.toJSON = function() {
                let t = {};
                try {
                    t = e.prototype.toJSON.call(this);
                } catch (e) {}
                t.value = this.value;
                return t;
            };
            return t;
        })(u(i));
        var A = ((e)=>{
            function t(t = {}) {
                let n;
                n = e.call(this, t, w) || this;
                if ("value" in t) {
                    n.fromString(t.value);
                }
                n.idBlock.tagClass = 1;
                n.idBlock.tagNumber = 12;
                return n;
            }
            babelHelpers.inheritsLoose(t, e);
            t.blockName = function() {
                return "UTF8String";
            };
            const t_prototype = t.prototype;
            t_prototype.fromBER = function(t, n, r) {
                const e = this.valueBlock.fromBER(t, n, this.lenBlock.isIndefiniteForm === true ? r : this.lenBlock.length);
                if (e === -1) {
                    this.error = this.valueBlock.error;
                    return e;
                }
                this.fromBuffer(this.valueBlock.valueHex);
                if (this.idBlock.error.length === 0) {
                    this.blockLength += this.idBlock.blockLength;
                }
                if (this.lenBlock.error.length === 0) {
                    this.blockLength += this.lenBlock.blockLength;
                }
                if (this.valueBlock.error.length === 0) {
                    this.blockLength += this.valueBlock.blockLength;
                }
                return e;
            };
            t_prototype.fromBuffer = function(t) {
                this.valueBlock.value = String.fromCharCode.apply(null, new Uint8Array(t));
                try {
                    this.valueBlock.value = decodeURIComponent(escape(this.valueBlock.value));
                } catch (error) {
                    this.warnings.push(`Error during "decodeURIComponent": ${error}, using raw string`);
                }
            };
            t_prototype.fromString = function(t) {
                const e = unescape(encodeURIComponent(t));
                const e_length = e.length;
                this.valueBlock.valueHex = new ArrayBuffer(e_length);
                const r = new Uint8Array(this.valueBlock.valueHex);
                for(let o = 0; o < e_length; o++){
                    r[o] = e.charCodeAt(o);
                }
                this.valueBlock.value = t;
            };
            t_prototype.toString = function() {
                return `${this.constructor.blockName()} : ${this.valueBlock.value}`;
            };
            return t;
        })(p);
        s.Utf8String = A;
        const F = ((t)=>{
            function n(n = {}) {
                let r;
                r = t.call(this, n) || this;
                r.valueDec = e.getParametersValue(n, "valueDec", -1);
                return r;
            }
            babelHelpers.inheritsLoose(n, t);
            n.blockName = function() {
                return "relativeSidBlock";
            };
            const n_prototype = n.prototype;
            n_prototype.fromBER = function(n, r, o) {
                if (o === 0) {
                    return r;
                }
                if (e.checkBufferParams(this, n, r, o) === false) {
                    return -1;
                }
                const t = new Uint8Array(n, r, o);
                this.valueHex = new ArrayBuffer(o);
                let a = new Uint8Array(this.valueHex);
                for(let i = 0; i < o && (a[i] = t[i] & 127, this.blockLength++, (t[i] & 128) !== 0); i++);
                const l = new ArrayBuffer(this.blockLength);
                const s = new Uint8Array(l);
                for(let u = 0; u < this.blockLength; u++){
                    s[u] = a[u];
                }
                this.valueHex = l.slice(0);
                a = new Uint8Array(this.valueHex);
                if ((t[this.blockLength - 1] & 128) !== 0) {
                    this.error = "End of input reached before message was fully decoded";
                    return -1;
                }
                if (a[0] === 0) {
                    this.warnings.push("Needlessly long format of SID encoding");
                }
                if (this.blockLength <= 8) {
                    this.valueDec = e.utilFromBase(a, 7);
                } else {
                    this.isHexOnly = true;
                    this.warnings.push("Too big SID for decoding, hex only");
                }
                return r + this.blockLength;
            };
            n_prototype.toBER = function(n = false) {
                let t;
                let r;
                if (this.isHexOnly) {
                    if (n === true) {
                        return new ArrayBuffer(this.valueHex.byteLength);
                    }
                    const o = new Uint8Array(this.valueHex);
                    t = new ArrayBuffer(this.blockLength);
                    r = new Uint8Array(t);
                    for(let a = 0; a < this.blockLength - 1; a++){
                        r[a] = o[a] | 128;
                    }
                    r[this.blockLength - 1] = o[this.blockLength - 1];
                    return t;
                }
                const i = e.utilToBase(this.valueDec, 7);
                if (i.byteLength === 0) {
                    this.error = "Error during encoding SID value";
                    return new ArrayBuffer(0);
                }
                t = new ArrayBuffer(i.byteLength);
                if (n === false) {
                    const l = new Uint8Array(i);
                    r = new Uint8Array(t);
                    for(let s = 0; s < i.byteLength - 1; s++){
                        r[s] = l[s] | 128;
                    }
                    r[i.byteLength - 1] = l[i.byteLength - 1];
                }
                return t;
            };
            n_prototype.toString = function() {
                let t = "";
                if (this.isHexOnly === true) {
                    t = e.bufferToHexCodes(this.valueHex, 0, this.valueHex.byteLength);
                } else {
                    t = this.valueDec.toString();
                }
                return t;
            };
            n_prototype.toJSON = function() {
                let e = {};
                try {
                    e = t.prototype.toJSON.call(this);
                } catch (e) {}
                e.valueDec = this.valueDec;
                return e;
            };
            return n;
        })(u(i));
        const O = ((t)=>{
            function n(n = {}) {
                let r;
                r = t.call(this, n) || this;
                r.fromString(e.getParametersValue(n, "value", ""));
                return r;
            }
            babelHelpers.inheritsLoose(n, t);
            const n_prototype = n.prototype;
            n_prototype.fromBER = function(t, n, r) {
                let e = n;
                while(r > 0){
                    const o = new F;
                    e = o.fromBER(t, e, r);
                    if (e === -1) {
                        this.blockLength = 0;
                        this.error = o.error;
                        return e;
                    }
                    this.blockLength += o.blockLength;
                    r -= o.blockLength;
                    this.value.push(o);
                }
                return e;
            };
            n_prototype.toBER = function(n = false) {
                let t = new ArrayBuffer(0);
                for(let r = 0; r < this.value.length; r++){
                    const o = this.value[r].toBER(n);
                    if (o.byteLength === 0) {
                        this.error = this.value[r].error;
                        return new ArrayBuffer(0);
                    }
                    t = e.utilConcatBuf(t, o);
                }
                return t;
            };
            n_prototype.fromString = function(t) {
                this.value = [];
                let e = 0;
                let n = 0;
                let r = "";
                do {
                    n = t.indexOf(".", e);
                    if (n === -1) {
                        r = t.substr(e);
                    } else {
                        r = t.substr(e, n - e);
                    }
                    e = n + 1;
                    const o = new F;
                    o.valueDec = parseInt(r, 10);
                    if (isNaN(o.valueDec)) {
                        return true;
                    }
                    this.value.push(o);
                }while (n !== -1)
                return true;
            };
            n_prototype.toString = function() {
                let e = "";
                let t = false;
                for(let n = 0; n < this.value.length; n++){
                    t = this.value[n].isHexOnly;
                    let r = this.value[n].toString();
                    if (n !== 0) {
                        e = `${e}.`;
                    }
                    if (t) {
                        r = `{${r}}`;
                    }
                    e += r;
                }
                return e;
            };
            n.blockName = function() {
                return "RelativeObjectIdentifierValueBlock";
            };
            n_prototype.toJSON = function() {
                let e = {};
                try {
                    e = t.prototype.toJSON.call(this);
                } catch (e) {}
                e.value = this.toString();
                e.sidArray = [];
                for(let n = 0; n < this.value.length; n++){
                    e.sidArray.push(this.value[n].toJSON());
                }
                return e;
            };
            return n;
        })(m);
        var B = ((e)=>{
            function t(t = {}) {
                let n;
                n = e.call(this, t, O) || this;
                n.idBlock.tagClass = 1;
                n.idBlock.tagNumber = 13;
                return n;
            }
            babelHelpers.inheritsLoose(t, e);
            t.blockName = function() {
                return "RelativeObjectIdentifier";
            };
            return t;
        })(p);
        s.RelativeObjectIdentifier = B;
        const W = ((e)=>{
            function t(t = {}) {
                let n;
                n = e.call(this, t) || this;
                n.isHexOnly = true;
                n.value = "";
                return n;
            }
            babelHelpers.inheritsLoose(t, e);
            t.blockName = function() {
                return "BmpStringValueBlock";
            };
            const t_prototype = t.prototype;
            t_prototype.toJSON = function() {
                let t = {};
                try {
                    t = e.prototype.toJSON.call(this);
                } catch (e) {}
                t.value = this.value;
                return t;
            };
            return t;
        })(u(i));
        var q = ((t)=>{
            function n(e = {}) {
                let n;
                n = t.call(this, e, W) || this;
                if ("value" in e) {
                    n.fromString(e.value);
                }
                n.idBlock.tagClass = 1;
                n.idBlock.tagNumber = 30;
                return n;
            }
            babelHelpers.inheritsLoose(n, t);
            n.blockName = function() {
                return "BMPString";
            };
            const n_prototype = n.prototype;
            n_prototype.fromBER = function(t, n, r) {
                const e = this.valueBlock.fromBER(t, n, this.lenBlock.isIndefiniteForm === true ? r : this.lenBlock.length);
                if (e === -1) {
                    this.error = this.valueBlock.error;
                    return e;
                }
                this.fromBuffer(this.valueBlock.valueHex);
                if (this.idBlock.error.length === 0) {
                    this.blockLength += this.idBlock.blockLength;
                }
                if (this.lenBlock.error.length === 0) {
                    this.blockLength += this.lenBlock.blockLength;
                }
                if (this.valueBlock.error.length === 0) {
                    this.blockLength += this.valueBlock.blockLength;
                }
                return e;
            };
            n_prototype.fromBuffer = function(t) {
                const e = t.slice(0);
                for(let n = new Uint8Array(e), r = 0; r < n.length; r += 2){
                    const o = n[r];
                    n[r] = n[r + 1];
                    n[r + 1] = o;
                }
                this.valueBlock.value = String.fromCharCode.apply(null, new Uint16Array(e));
            };
            n_prototype.fromString = function(n) {
                const n_length = n.length;
                this.valueBlock.valueHex = new ArrayBuffer(n_length * 2);
                const r = new Uint8Array(this.valueBlock.valueHex);
                for(let o = 0; o < n_length; o++){
                    const a = e.utilToBase(n.charCodeAt(o), 8);
                    const i = new Uint8Array(a);
                    if (!(i.length > 2)) {
                        const l = 2 - i.length;
                        for(let s = i.length - 1; s >= 0; s--){
                            r[o * 2 + s + l] = i[s];
                        }
                    }
                }
                this.valueBlock.value = n;
            };
            n_prototype.toString = function() {
                return `${this.constructor.blockName()} : ${this.valueBlock.value}`;
            };
            return n;
        })(p);
        s.BmpString = q;
        const U = ((e)=>{
            function t(t = {}) {
                let n;
                n = e.call(this, t) || this;
                n.isHexOnly = true;
                n.value = "";
                return n;
            }
            babelHelpers.inheritsLoose(t, e);
            t.blockName = function() {
                return "UniversalStringValueBlock";
            };
            const t_prototype = t.prototype;
            t_prototype.toJSON = function() {
                let t = {};
                try {
                    t = e.prototype.toJSON.call(this);
                } catch (e) {}
                t.value = this.value;
                return t;
            };
            return t;
        })(u(i));
        var V = ((t)=>{
            function n(e = {}) {
                let n;
                n = t.call(this, e, U) || this;
                if ("value" in e) {
                    n.fromString(e.value);
                }
                n.idBlock.tagClass = 1;
                n.idBlock.tagNumber = 28;
                return n;
            }
            babelHelpers.inheritsLoose(n, t);
            n.blockName = function() {
                return "UniversalString";
            };
            const n_prototype = n.prototype;
            n_prototype.fromBER = function(t, n, r) {
                const e = this.valueBlock.fromBER(t, n, this.lenBlock.isIndefiniteForm === true ? r : this.lenBlock.length);
                if (e === -1) {
                    this.error = this.valueBlock.error;
                    return e;
                }
                this.fromBuffer(this.valueBlock.valueHex);
                if (this.idBlock.error.length === 0) {
                    this.blockLength += this.idBlock.blockLength;
                }
                if (this.lenBlock.error.length === 0) {
                    this.blockLength += this.lenBlock.blockLength;
                }
                if (this.valueBlock.error.length === 0) {
                    this.blockLength += this.valueBlock.blockLength;
                }
                return e;
            };
            n_prototype.fromBuffer = function(t) {
                const e = t.slice(0);
                for(let n = new Uint8Array(e), r = 0; r < n.length; r += 4){
                    n[r] = n[r + 3];
                    n[r + 1] = n[r + 2];
                    n[r + 2] = 0;
                    n[r + 3] = 0;
                }
                this.valueBlock.value = String.fromCharCode.apply(null, new Uint32Array(e));
            };
            n_prototype.fromString = function(n) {
                const n_length = n.length;
                this.valueBlock.valueHex = new ArrayBuffer(n_length * 4);
                const r = new Uint8Array(this.valueBlock.valueHex);
                for(let o = 0; o < n_length; o++){
                    const a = e.utilToBase(n.charCodeAt(o), 8);
                    const i = new Uint8Array(a);
                    if (!(i.length > 4)) {
                        const l = 4 - i.length;
                        for(let s = i.length - 1; s >= 0; s--){
                            r[o * 4 + s + l] = i[s];
                        }
                    }
                }
                this.valueBlock.value = n;
            };
            n_prototype.toString = function() {
                return `${this.constructor.blockName()} : ${this.valueBlock.value}`;
            };
            return n;
        })(p);
        s.UniversalString = V;
        const H = ((e)=>{
            function t(t = {}) {
                let n;
                n = e.call(this, t) || this;
                n.value = "";
                n.isHexOnly = true;
                return n;
            }
            babelHelpers.inheritsLoose(t, e);
            t.blockName = function() {
                return "SimpleStringValueBlock";
            };
            const t_prototype = t.prototype;
            t_prototype.toJSON = function() {
                let t = {};
                try {
                    t = e.prototype.toJSON.call(this);
                } catch (e) {}
                t.value = this.value;
                return t;
            };
            return t;
        })(u(i));
        const G = ((e)=>{
            function t(t = {}) {
                let n;
                n = e.call(this, t, H) || this;
                if ("value" in t) {
                    n.fromString(t.value);
                }
                return n;
            }
            babelHelpers.inheritsLoose(t, e);
            t.blockName = function() {
                return "SIMPLESTRING";
            };
            const t_prototype = t.prototype;
            t_prototype.fromBER = function(t, n, r) {
                const e = this.valueBlock.fromBER(t, n, this.lenBlock.isIndefiniteForm === true ? r : this.lenBlock.length);
                if (e === -1) {
                    this.error = this.valueBlock.error;
                    return e;
                }
                this.fromBuffer(this.valueBlock.valueHex);
                if (this.idBlock.error.length === 0) {
                    this.blockLength += this.idBlock.blockLength;
                }
                if (this.lenBlock.error.length === 0) {
                    this.blockLength += this.lenBlock.blockLength;
                }
                if (this.valueBlock.error.length === 0) {
                    this.blockLength += this.valueBlock.blockLength;
                }
                return e;
            };
            t_prototype.fromBuffer = function(t) {
                this.valueBlock.value = String.fromCharCode.apply(null, new Uint8Array(t));
            };
            t_prototype.fromString = function(t) {
                const t_length = t.length;
                this.valueBlock.valueHex = new ArrayBuffer(t_length);
                const n = new Uint8Array(this.valueBlock.valueHex);
                for(let r = 0; r < t_length; r++){
                    n[r] = t.charCodeAt(r);
                }
                this.valueBlock.value = t;
            };
            t_prototype.toString = function() {
                return `${this.constructor.blockName()} : ${this.valueBlock.value}`;
            };
            return t;
        })(p);
        var z = ((e)=>{
            function t(t = {}) {
                let n;
                n = e.call(this, t) || this;
                n.idBlock.tagClass = 1;
                n.idBlock.tagNumber = 18;
                return n;
            }
            babelHelpers.inheritsLoose(t, e);
            t.blockName = function() {
                return "NumericString";
            };
            return t;
        })(G);
        s.NumericString = z;
        var j = ((e)=>{
            function t(t = {}) {
                let n;
                n = e.call(this, t) || this;
                n.idBlock.tagClass = 1;
                n.idBlock.tagNumber = 19;
                return n;
            }
            babelHelpers.inheritsLoose(t, e);
            t.blockName = function() {
                return "PrintableString";
            };
            return t;
        })(G);
        s.PrintableString = j;
        var K = ((e)=>{
            function t(t = {}) {
                let n;
                n = e.call(this, t) || this;
                n.idBlock.tagClass = 1;
                n.idBlock.tagNumber = 20;
                return n;
            }
            babelHelpers.inheritsLoose(t, e);
            t.blockName = function() {
                return "TeletexString";
            };
            return t;
        })(G);
        s.TeletexString = K;
        var Q = ((e)=>{
            function t(t = {}) {
                let n;
                n = e.call(this, t) || this;
                n.idBlock.tagClass = 1;
                n.idBlock.tagNumber = 21;
                return n;
            }
            babelHelpers.inheritsLoose(t, e);
            t.blockName = function() {
                return "VideotexString";
            };
            return t;
        })(G);
        s.VideotexString = Q;
        var X = ((e)=>{
            function t(t = {}) {
                let n;
                n = e.call(this, t) || this;
                n.idBlock.tagClass = 1;
                n.idBlock.tagNumber = 22;
                return n;
            }
            babelHelpers.inheritsLoose(t, e);
            t.blockName = function() {
                return "IA5String";
            };
            return t;
        })(G);
        s.IA5String = X;
        var Y = ((e)=>{
            function t(t = {}) {
                let n;
                n = e.call(this, t) || this;
                n.idBlock.tagClass = 1;
                n.idBlock.tagNumber = 25;
                return n;
            }
            babelHelpers.inheritsLoose(t, e);
            t.blockName = function() {
                return "GraphicString";
            };
            return t;
        })(G);
        s.GraphicString = Y;
        var J = ((e)=>{
            function t(t = {}) {
                let n;
                n = e.call(this, t) || this;
                n.idBlock.tagClass = 1;
                n.idBlock.tagNumber = 26;
                return n;
            }
            babelHelpers.inheritsLoose(t, e);
            t.blockName = function() {
                return "VisibleString";
            };
            return t;
        })(G);
        s.VisibleString = J;
        var Z = ((e)=>{
            function t(t = {}) {
                let n;
                n = e.call(this, t) || this;
                n.idBlock.tagClass = 1;
                n.idBlock.tagNumber = 27;
                return n;
            }
            babelHelpers.inheritsLoose(t, e);
            t.blockName = function() {
                return "GeneralString";
            };
            return t;
        })(G);
        s.GeneralString = Z;
        var ee = ((e)=>{
            function t(t = {}) {
                let n;
                n = e.call(this, t) || this;
                n.idBlock.tagClass = 1;
                n.idBlock.tagNumber = 29;
                return n;
            }
            babelHelpers.inheritsLoose(t, e);
            t.blockName = function() {
                return "CharacterString";
            };
            return t;
        })(G);
        s.CharacterString = ee;
        var te = ((t)=>{
            function n(e = {}) {
                let n;
                n = t.call(this, e) || this;
                n.year = 0;
                n.month = 0;
                n.day = 0;
                n.hour = 0;
                n.minute = 0;
                n.second = 0;
                if ("value" in e) {
                    n.fromString(e.value);
                    n.valueBlock.valueHex = new ArrayBuffer(e.value.length);
                    const r = new Uint8Array(n.valueBlock.valueHex);
                    for(let o = 0; o < e.value.length; o++){
                        r[o] = e.value.charCodeAt(o);
                    }
                }
                if ("valueDate" in e) {
                    n.fromDate(e.valueDate);
                    n.valueBlock.valueHex = n.toBuffer();
                }
                n.idBlock.tagClass = 1;
                n.idBlock.tagNumber = 23;
                return n;
            }
            babelHelpers.inheritsLoose(n, t);
            const n_prototype = n.prototype;
            n_prototype.fromBER = function(t, n, r) {
                const e = this.valueBlock.fromBER(t, n, this.lenBlock.isIndefiniteForm === true ? r : this.lenBlock.length);
                if (e === -1) {
                    this.error = this.valueBlock.error;
                    return e;
                }
                this.fromBuffer(this.valueBlock.valueHex);
                if (this.idBlock.error.length === 0) {
                    this.blockLength += this.idBlock.blockLength;
                }
                if (this.lenBlock.error.length === 0) {
                    this.blockLength += this.lenBlock.blockLength;
                }
                if (this.valueBlock.error.length === 0) {
                    this.blockLength += this.valueBlock.blockLength;
                }
                return e;
            };
            n_prototype.fromBuffer = function(t) {
                this.fromString(String.fromCharCode.apply(null, new Uint8Array(t)));
            };
            n_prototype.toBuffer = function() {
                for(var e = this.toString(), t = new ArrayBuffer(e.length), n = new Uint8Array(t), r = 0; r < e.length; r++){
                    n[r] = e.charCodeAt(r);
                }
                return t;
            };
            n_prototype.fromDate = function(t) {
                this.year = t.getUTCFullYear();
                this.month = t.getUTCMonth() + 1;
                this.day = t.getUTCDate();
                this.hour = t.getUTCHours();
                this.minute = t.getUTCMinutes();
                this.second = t.getUTCSeconds();
            };
            n_prototype.toDate = function() {
                return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second));
            };
            n_prototype.fromString = function(t) {
                const e = /(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})Z/ig;
                const n = e.exec(t);
                if (n === null) {
                    this.error = "Wrong input string for convertion";
                    return;
                }
                const r = parseInt(n[1], 10);
                if (r >= 50) {
                    this.year = 1900 + r;
                } else {
                    this.year = 2000 + r;
                }
                this.month = parseInt(n[2], 10);
                this.day = parseInt(n[3], 10);
                this.hour = parseInt(n[4], 10);
                this.minute = parseInt(n[5], 10);
                this.second = parseInt(n[6], 10);
            };
            n_prototype.toString = function() {
                const t = new Array(7);
                t[0] = e.padNumber(this.year < 2000 ? this.year - 1900 : this.year - 2000, 2);
                t[1] = e.padNumber(this.month, 2);
                t[2] = e.padNumber(this.day, 2);
                t[3] = e.padNumber(this.hour, 2);
                t[4] = e.padNumber(this.minute, 2);
                t[5] = e.padNumber(this.second, 2);
                t[6] = "Z";
                return t.join("");
            };
            n.blockName = function() {
                return "UTCTime";
            };
            n_prototype.toJSON = function() {
                let e = {};
                try {
                    e = t.prototype.toJSON.call(this);
                } catch (e) {}
                e.year = this.year;
                e.month = this.month;
                e.day = this.day;
                e.hour = this.hour;
                e.minute = this.minute;
                e.second = this.second;
                return e;
            };
            return n;
        })(J);
        s.UTCTime = te;
        var ne = ((t)=>{
            function n(e = {}) {
                let n;
                n = t.call(this, e) || this;
                n.year = 0;
                n.month = 0;
                n.day = 0;
                n.hour = 0;
                n.minute = 0;
                n.second = 0;
                n.millisecond = 0;
                if ("value" in e) {
                    n.fromString(e.value);
                    n.valueBlock.valueHex = new ArrayBuffer(e.value.length);
                    const r = new Uint8Array(n.valueBlock.valueHex);
                    for(let o = 0; o < e.value.length; o++){
                        r[o] = e.value.charCodeAt(o);
                    }
                }
                if ("valueDate" in e) {
                    n.fromDate(e.valueDate);
                    n.valueBlock.valueHex = n.toBuffer();
                }
                n.idBlock.tagClass = 1;
                n.idBlock.tagNumber = 24;
                return n;
            }
            babelHelpers.inheritsLoose(n, t);
            const n_prototype = n.prototype;
            n_prototype.fromBER = function(t, n, r) {
                const e = this.valueBlock.fromBER(t, n, this.lenBlock.isIndefiniteForm === true ? r : this.lenBlock.length);
                if (e === -1) {
                    this.error = this.valueBlock.error;
                    return e;
                }
                this.fromBuffer(this.valueBlock.valueHex);
                if (this.idBlock.error.length === 0) {
                    this.blockLength += this.idBlock.blockLength;
                }
                if (this.lenBlock.error.length === 0) {
                    this.blockLength += this.lenBlock.blockLength;
                }
                if (this.valueBlock.error.length === 0) {
                    this.blockLength += this.valueBlock.blockLength;
                }
                return e;
            };
            n_prototype.fromBuffer = function(t) {
                this.fromString(String.fromCharCode.apply(null, new Uint8Array(t)));
            };
            n_prototype.toBuffer = function() {
                for(var e = this.toString(), t = new ArrayBuffer(e.length), n = new Uint8Array(t), r = 0; r < e.length; r++){
                    n[r] = e.charCodeAt(r);
                }
                return t;
            };
            n_prototype.fromDate = function(t) {
                this.year = t.getUTCFullYear();
                this.month = t.getUTCMonth() + 1;
                this.day = t.getUTCDate();
                this.hour = t.getUTCHours();
                this.minute = t.getUTCMinutes();
                this.second = t.getUTCSeconds();
                this.millisecond = t.getUTCMilliseconds();
            };
            n_prototype.toDate = function() {
                return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, this.millisecond));
            };
            n_prototype.fromString = function(t) {
                let e = false;
                let n = "";
                let r = "";
                let o = 0;
                let a;
                let i = 0;
                let l = 0;
                if (t[t.length - 1] === "Z") {
                    n = t.substr(0, t.length - 1);
                    e = true;
                } else {
                    const s = new Number(t[t.length - 1]);
                    if (isNaN(s.valueOf())) {
                        throw new Error("Wrong input string for convertion");
                    }
                    n = t;
                }
                if (e) {
                    if (n.indexOf("+") !== -1) {
                        throw new Error("Wrong input string for convertion");
                    }
                    if (n.indexOf("-") !== -1) {
                        throw new Error("Wrong input string for convertion");
                    }
                } else {
                    let u = 1;
                    let c = n.indexOf("+");
                    let d = "";
                    if (c === -1) {
                        c = n.indexOf("-");
                        u = -1;
                    }
                    if (c !== -1) {
                        d = n.substr(c + 1);
                        n = n.substr(0, c);
                        if (d.length !== 2 && d.length !== 4) {
                            throw new Error("Wrong input string for convertion");
                        }
                        let m = new Number(d.substr(0, 2));
                        if (isNaN(m.valueOf())) {
                            throw new Error("Wrong input string for convertion");
                        }
                        i = u * m;
                        if (d.length === 4) {
                            m = new Number(d.substr(2, 2));
                            if (isNaN(m.valueOf())) {
                                throw new Error("Wrong input string for convertion");
                            }
                            l = u * m;
                        }
                    }
                }
                let p = n.indexOf(".");
                if (p === -1) {
                    p = n.indexOf(",");
                }
                if (p !== -1) {
                    const _ = new Number(`0${n.substr(p)}`);
                    if (isNaN(_.valueOf())) {
                        throw new Error("Wrong input string for convertion");
                    }
                    o = _.valueOf();
                    r = n.substr(0, p);
                } else {
                    r = n;
                }
                switch(true){
                    case r.length === 8:
                        a = /(\d{4})(\d{2})(\d{2})/ig;
                        if (p !== -1) {
                            throw new Error("Wrong input string for convertion");
                        }
                        break;
                    case r.length === 10:
                        a = /(\d{4})(\d{2})(\d{2})(\d{2})/ig;
                        if (p !== -1) {
                            let f = 60 * o;
                            this.minute = Math.floor(f);
                            f = 60 * (f - this.minute);
                            this.second = Math.floor(f);
                            f = 1000 * (f - this.second);
                            this.millisecond = Math.floor(f);
                        }
                        break;
                    case r.length === 12:
                        a = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/ig;
                        if (p !== -1) {
                            let g = 60 * o;
                            this.second = Math.floor(g);
                            g = 1000 * (g - this.second);
                            this.millisecond = Math.floor(g);
                        }
                        break;
                    case r.length === 14:
                        a = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/ig;
                        if (p !== -1) {
                            const h = 1000 * o;
                            this.millisecond = Math.floor(h);
                        }
                        break;
                    default:
                        throw new Error("Wrong input string for convertion");
                }
                const y = a.exec(r);
                if (y === null) {
                    throw new Error("Wrong input string for convertion");
                }
                for(let C = 1; C < y.length; C++){
                    switch(C){
                        case 1:
                            this.year = parseInt(y[C], 10);
                            break;
                        case 2:
                            this.month = parseInt(y[C], 10);
                            break;
                        case 3:
                            this.day = parseInt(y[C], 10);
                            break;
                        case 4:
                            this.hour = parseInt(y[C], 10) + i;
                            break;
                        case 5:
                            this.minute = parseInt(y[C], 10) + l;
                            break;
                        case 6:
                            this.second = parseInt(y[C], 10);
                            break;
                        default:
                            throw new Error("Wrong input string for convertion");
                    }
                }
                if (e === false) {
                    const b = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
                    this.year = b.getUTCFullYear();
                    this.month = b.getUTCMonth();
                    this.day = b.getUTCDay();
                    this.hour = b.getUTCHours();
                    this.minute = b.getUTCMinutes();
                    this.second = b.getUTCSeconds();
                    this.millisecond = b.getUTCMilliseconds();
                }
            };
            n_prototype.toString = function() {
                const t = [];
                t.push(e.padNumber(this.year, 4));
                t.push(e.padNumber(this.month, 2));
                t.push(e.padNumber(this.day, 2));
                t.push(e.padNumber(this.hour, 2));
                t.push(e.padNumber(this.minute, 2));
                t.push(e.padNumber(this.second, 2));
                if (this.millisecond !== 0) {
                    t.push(".");
                    t.push(e.padNumber(this.millisecond, 3));
                }
                t.push("Z");
                return t.join("");
            };
            n.blockName = function() {
                return "GeneralizedTime";
            };
            n_prototype.toJSON = function() {
                let e = {};
                try {
                    e = t.prototype.toJSON.call(this);
                } catch (e) {}
                e.year = this.year;
                e.month = this.month;
                e.day = this.day;
                e.hour = this.hour;
                e.minute = this.minute;
                e.second = this.second;
                e.millisecond = this.millisecond;
                return e;
            };
            return n;
        })(J);
        s.GeneralizedTime = ne;
        var re = ((e)=>{
            function t(t = {}) {
                let n;
                n = e.call(this, t) || this;
                n.idBlock.tagClass = 1;
                n.idBlock.tagNumber = 31;
                return n;
            }
            babelHelpers.inheritsLoose(t, e);
            t.blockName = function() {
                return "DATE";
            };
            return t;
        })(A);
        s.DATE = re;
        var oe = ((e)=>{
            function t(t = {}) {
                let n;
                n = e.call(this, t) || this;
                n.idBlock.tagClass = 1;
                n.idBlock.tagNumber = 32;
                return n;
            }
            babelHelpers.inheritsLoose(t, e);
            t.blockName = function() {
                return "TimeOfDay";
            };
            return t;
        })(A);
        s.TimeOfDay = oe;
        var ae = ((e)=>{
            function t(t = {}) {
                let n;
                n = e.call(this, t) || this;
                n.idBlock.tagClass = 1;
                n.idBlock.tagNumber = 33;
                return n;
            }
            babelHelpers.inheritsLoose(t, e);
            t.blockName = function() {
                return "DateTime";
            };
            return t;
        })(A);
        s.DateTime = ae;
        var ie = ((e)=>{
            function t(t = {}) {
                let n;
                n = e.call(this, t) || this;
                n.idBlock.tagClass = 1;
                n.idBlock.tagNumber = 34;
                return n;
            }
            babelHelpers.inheritsLoose(t, e);
            t.blockName = function() {
                return "Duration";
            };
            return t;
        })(A);
        s.Duration = ie;
        var le = ((e)=>{
            function t(t = {}) {
                let n;
                n = e.call(this, t) || this;
                n.idBlock.tagClass = 1;
                n.idBlock.tagNumber = 14;
                return n;
            }
            babelHelpers.inheritsLoose(t, e);
            t.blockName = function() {
                return "TIME";
            };
            return t;
        })(A);
        s.TIME = le;
        var se = function(n = {}) {
            this.value = e.getParametersValue(n, "value", []);
            this.optional = e.getParametersValue(n, "optional", false);
        };
        s.Choice = se;
        var ue = function(n = {}) {
            this.name = e.getParametersValue(n, "name", "");
            this.optional = e.getParametersValue(n, "optional", false);
        };
        s.Any = ue;
        var ce = function(n = {}) {
            this.name = e.getParametersValue(n, "name", "");
            this.optional = e.getParametersValue(n, "optional", false);
            this.value = e.getParametersValue(n, "value", new ue);
            this.local = e.getParametersValue(n, "local", false);
        };
        s.Repeated = ce;
        class de {
            constructor(t = {}){
                this.data = e.getParametersValue(t, "data", new ArrayBuffer(0));
            }
            fromBER(t, n, r) {
                this.data = t.slice(n, r);
                return n + r;
            }
            toBER(t = false) {
                return this.data;
            }
        }
        s.RawData = de;
        function me(t, n, r) {
            const o = n;
            function a(e, t) {
                if (e instanceof t) {
                    return e;
                }
                const n = new t;
                n.idBlock = e.idBlock;
                n.lenBlock = e.lenBlock;
                n.warnings = e.warnings;
                n.valueBeforeDecode = e.valueBeforeDecode.slice(0);
                return n;
            }
            let l = new p({}, Object);
            const s = new i;
            if (e.checkBufferParams(s, t, n, r) === false) {
                l.error = s.error;
                return {
                    offset: -1,
                    result: l
                };
            }
            const u = new Uint8Array(t, n, r);
            if (u.length === 0) {
                l.error = "Zero buffer length";
                return {
                    offset: -1,
                    result: l
                };
            }
            let c = l.idBlock.fromBER(t, n, r);
            l.warnings.concat(l.idBlock.warnings);
            if (c === -1) {
                l.error = l.idBlock.error;
                return {
                    offset: -1,
                    result: l
                };
            }
            n = c;
            r -= l.idBlock.blockLength;
            c = l.lenBlock.fromBER(t, n, r);
            l.warnings.concat(l.lenBlock.warnings);
            if (c === -1) {
                l.error = l.lenBlock.error;
                return {
                    offset: -1,
                    result: l
                };
            }
            n = c;
            r -= l.lenBlock.blockLength;
            if (l.idBlock.isConstructed === false && l.lenBlock.isIndefiniteForm === true) {
                l.error = "Indefinite length form used for primitive encoding form";
                return {
                    offset: -1,
                    result: l
                };
            }
            let d = p;
            switch(l.idBlock.tagClass){
                case 1:
                    if (l.idBlock.tagNumber >= 37 && l.idBlock.isHexOnly === false) {
                        l.error = "UNIVERSAL 37 and upper tags are reserved by ASN.1 standard";
                        return {
                            offset: -1,
                            result: l
                        };
                    }
                    switch(l.idBlock.tagNumber){
                        case 0:
                            if (l.idBlock.isConstructed === true && l.lenBlock.length > 0) {
                                l.error = "Type [UNIVERSAL 0] is reserved";
                                return {
                                    offset: -1,
                                    result: l
                                };
                            }
                            d = C;
                            break;
                        case 1:
                            d = v;
                            break;
                        case 2:
                            d = x;
                            break;
                        case 3:
                            d = T;
                            break;
                        case 4:
                            d = k;
                            break;
                        case 5:
                            d = L;
                            break;
                        case 6:
                            d = M;
                            break;
                        case 10:
                            d = $;
                            break;
                        case 12:
                            d = A;
                            break;
                        case 13:
                            d = B;
                            break;
                        case 14:
                            d = le;
                            break;
                        case 15:
                            l.error = "[UNIVERSAL 15] is reserved by ASN.1 standard";
                            return {
                                offset: -1,
                                result: l
                            };
                        case 16:
                            d = S;
                            break;
                        case 17:
                            d = R;
                            break;
                        case 18:
                            d = z;
                            break;
                        case 19:
                            d = j;
                            break;
                        case 20:
                            d = K;
                            break;
                        case 21:
                            d = Q;
                            break;
                        case 22:
                            d = X;
                            break;
                        case 23:
                            d = te;
                            break;
                        case 24:
                            d = ne;
                            break;
                        case 25:
                            d = Y;
                            break;
                        case 26:
                            d = J;
                            break;
                        case 27:
                            d = Z;
                            break;
                        case 28:
                            d = V;
                            break;
                        case 29:
                            d = ee;
                            break;
                        case 30:
                            d = q;
                            break;
                        case 31:
                            d = re;
                            break;
                        case 32:
                            d = oe;
                            break;
                        case 33:
                            d = ae;
                            break;
                        case 34:
                            d = ie;
                            break;
                        default:
                            {
                                let m;
                                if (l.idBlock.isConstructed === true) {
                                    m = new h;
                                } else {
                                    m = new f;
                                }
                                m.idBlock = l.idBlock;
                                m.lenBlock = l.lenBlock;
                                m.warnings = l.warnings;
                                l = m;
                            }
                    }
                    break;
                case 2:
                case 3:
                case 4:
                default:
                    if (l.idBlock.isConstructed === true) {
                        d = h;
                    } else {
                        d = f;
                    }
            }
            l = a(l, d);
            c = l.fromBER(t, n, l.lenBlock.isIndefiniteForm === true ? r : l.lenBlock.length);
            l.valueBeforeDecode = t.slice(o, o + l.blockLength);
            return {
                offset: c,
                result: l
            };
        }
        function pe(e) {
            if (e.byteLength === 0) {
                const t = new p({}, Object);
                t.error = "Input buffer has zero length";
                return {
                    offset: -1,
                    result: t
                };
            }
            return me(e, 0, e.byteLength);
        }
        function _e(e, t, n) {
            if (n instanceof se) {
                const r = false;
                for(let o = 0; o < n.value.length; o++){
                    const a = _e(e, t, n.value[o]);
                    if (a.verified === true) {
                        return {
                            verified: true,
                            result: e
                        };
                    }
                }
                const i = {
                    verified: false,
                    result: {
                        error: "Wrong values for Choice type"
                    }
                };
                if (Object.prototype.hasOwnProperty.call(n, "name")) {
                    i.name = n.name;
                }
                return i;
            }
            if (n instanceof ue) {
                if (Object.prototype.hasOwnProperty.call(n, "name")) {
                    e[n.name] = t;
                }
                return {
                    verified: true,
                    result: e
                };
            }
            if (!(e instanceof Object)) {
                return {
                    verified: false,
                    result: {
                        error: "Wrong root object"
                    }
                };
            }
            if (!(t instanceof Object)) {
                return {
                    verified: false,
                    result: {
                        error: "Wrong ASN.1 data"
                    }
                };
            }
            if (!(n instanceof Object)) {
                return {
                    verified: false,
                    result: {
                        error: "Wrong ASN.1 schema"
                    }
                };
            }
            if (!("idBlock" in n)) {
                return {
                    verified: false,
                    result: {
                        error: "Wrong ASN.1 schema"
                    }
                };
            }
            if (!("fromBER" in n.idBlock)) {
                return {
                    verified: false,
                    result: {
                        error: "Wrong ASN.1 schema"
                    }
                };
            }
            if (!("toBER" in n.idBlock)) {
                return {
                    verified: false,
                    result: {
                        error: "Wrong ASN.1 schema"
                    }
                };
            }
            const l = n.idBlock.toBER(false);
            if (l.byteLength === 0) {
                return {
                    verified: false,
                    result: {
                        error: "Error encoding idBlock for ASN.1 schema"
                    }
                };
            }
            const s = n.idBlock.fromBER(l, 0, l.byteLength);
            if (s === -1) {
                return {
                    verified: false,
                    result: {
                        error: "Error decoding idBlock for ASN.1 schema"
                    }
                };
            }
            if (Object.prototype.hasOwnProperty.call(n.idBlock, "tagClass") === false) {
                return {
                    verified: false,
                    result: {
                        error: "Wrong ASN.1 schema"
                    }
                };
            }
            if (n.idBlock.tagClass !== t.idBlock.tagClass) {
                return {
                    verified: false,
                    result: e
                };
            }
            if (Object.prototype.hasOwnProperty.call(n.idBlock, "tagNumber") === false) {
                return {
                    verified: false,
                    result: {
                        error: "Wrong ASN.1 schema"
                    }
                };
            }
            if (n.idBlock.tagNumber !== t.idBlock.tagNumber) {
                return {
                    verified: false,
                    result: e
                };
            }
            if (Object.prototype.hasOwnProperty.call(n.idBlock, "isConstructed") === false) {
                return {
                    verified: false,
                    result: {
                        error: "Wrong ASN.1 schema"
                    }
                };
            }
            if (n.idBlock.isConstructed !== t.idBlock.isConstructed) {
                return {
                    verified: false,
                    result: e
                };
            }
            if (!("isHexOnly" in n.idBlock)) {
                return {
                    verified: false,
                    result: {
                        error: "Wrong ASN.1 schema"
                    }
                };
            }
            if (n.idBlock.isHexOnly !== t.idBlock.isHexOnly) {
                return {
                    verified: false,
                    result: e
                };
            }
            if (n.idBlock.isHexOnly === true) {
                if (!("valueHex" in n.idBlock)) {
                    return {
                        verified: false,
                        result: {
                            error: "Wrong ASN.1 schema"
                        }
                    };
                }
                const u = new Uint8Array(n.idBlock.valueHex);
                const c = new Uint8Array(t.idBlock.valueHex);
                if (u.length !== c.length) {
                    return {
                        verified: false,
                        result: e
                    };
                }
                for(let d = 0; d < u.length; d++){
                    if (u[d] !== c[1]) {
                        return {
                            verified: false,
                            result: e
                        };
                    }
                }
            }
            if (Object.prototype.hasOwnProperty.call(n, "name")) {
                n.name = n.name.replace(/^\s+|\s+$/g, "");
                if (n.name !== "") {
                    e[n.name] = t;
                }
            }
            if (n.idBlock.isConstructed === true) {
                let m = 0;
                let p = {
                    verified: false
                };
                let _ = n.valueBlock.value.length;
                if (_ > 0 && n.valueBlock.value[0] instanceof ce) {
                    _ = t.valueBlock.value.length;
                }
                if (_ === 0) {
                    return {
                        verified: true,
                        result: e
                    };
                }
                if (t.valueBlock.value.length === 0 && n.valueBlock.value.length !== 0) {
                    let f = true;
                    for(let g = 0; g < n.valueBlock.value.length; g++){
                        f = f && (n.valueBlock.value[g].optional || false);
                    }
                    if (f === true) {
                        return {
                            verified: true,
                            result: e
                        };
                    }
                    if (Object.prototype.hasOwnProperty.call(n, "name")) {
                        n.name = n.name.replace(/^\s+|\s+$/g, "");
                        if (n.name !== "") {
                            delete e[n.name];
                        }
                    }
                    e.error = "Inconsistent object length";
                    return {
                        verified: false,
                        result: e
                    };
                }
                for(let h = 0; h < _; h++){
                    if (h - m >= t.valueBlock.value.length) {
                        if (n.valueBlock.value[h].optional === false) {
                            const y = {
                                verified: false,
                                result: e
                            };
                            e.error = "Inconsistent length between ASN.1 data and schema";
                            if (Object.prototype.hasOwnProperty.call(n, "name")) {
                                n.name = n.name.replace(/^\s+|\s+$/g, "");
                                if (n.name !== "") {
                                    delete e[n.name];
                                    y.name = n.name;
                                }
                            }
                            return y;
                        }
                    } else if (n.valueBlock.value[0] instanceof ce) {
                        p = _e(e, t.valueBlock.value[h], n.valueBlock.value[0].value);
                        if (p.verified === false) {
                            if (n.valueBlock.value[0].optional === true) {
                                m++;
                            } else {
                                if (Object.prototype.hasOwnProperty.call(n, "name")) {
                                    n.name = n.name.replace(/^\s+|\s+$/g, "");
                                    if (n.name !== "") {
                                        delete e[n.name];
                                    }
                                }
                                return p;
                            }
                        }
                        if ("name" in n.valueBlock.value[0] && n.valueBlock.value[0].name.length > 0) {
                            let C = {};
                            if ("local" in n.valueBlock.value[0] && n.valueBlock.value[0].local === true) {
                                C = t;
                            } else {
                                C = e;
                            }
                            if (typeof C[n.valueBlock.value[0].name] === "undefined") {
                                C[n.valueBlock.value[0].name] = [];
                            }
                            C[n.valueBlock.value[0].name].push(t.valueBlock.value[h]);
                        }
                    } else {
                        p = _e(e, t.valueBlock.value[h - m], n.valueBlock.value[h]);
                        if (p.verified === false) {
                            if (n.valueBlock.value[h].optional === true) {
                                m++;
                            } else {
                                if (Object.prototype.hasOwnProperty.call(n, "name")) {
                                    n.name = n.name.replace(/^\s+|\s+$/g, "");
                                    if (n.name !== "") {
                                        delete e[n.name];
                                    }
                                }
                                return p;
                            }
                        }
                    }
                }
                if (p.verified === false) {
                    const b = {
                        verified: false,
                        result: e
                    };
                    if (Object.prototype.hasOwnProperty.call(n, "name")) {
                        n.name = n.name.replace(/^\s+|\s+$/g, "");
                        if (n.name !== "") {
                            delete e[n.name];
                            b.name = n.name;
                        }
                    }
                    return b;
                }
                return {
                    verified: true,
                    result: e
                };
            }
            if ("primitiveSchema" in n && "valueHex" in t.valueBlock) {
                const v = pe(t.valueBlock.valueHex);
                if (v.offset === -1) {
                    const S = {
                        verified: false,
                        result: v.result
                    };
                    if (Object.prototype.hasOwnProperty.call(n, "name")) {
                        n.name = n.name.replace(/^\s+|\s+$/g, "");
                        if (n.name !== "") {
                            delete e[n.name];
                            S.name = n.name;
                        }
                    }
                    return S;
                }
                return _e(e, v.result, n.primitiveSchema);
            }
            return {
                verified: true,
                result: e
            };
        }
        function fe(e, t) {
            if (!(t instanceof Object)) {
                return {
                    verified: false,
                    result: {
                        error: "Wrong ASN.1 schema type"
                    }
                };
            }
            const n = pe(e);
            if (n.offset === -1) {
                return {
                    verified: false,
                    result: n.result
                };
            }
            return _e(n.result, n.result, t);
        }
        function ge(e) {}
    }
    let d = false;
    function m() {
        if (!d) {
            d = true;
            c();
        }
        return u.exports;
    }
    function p(e) {
        switch(e){
            case undefined:
                return m();
        }
    }
    a.exports = p;
}, null);