__d("WAParsableXmlNode", [
    "WAHasProperty",
    "WAXmlParsingFailure",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        throw new TypeError(`"${e}" is read-only`);
    }
    const s = (()=>{
        function e(e, t) {
            const n = this;
            this.$1 = e;
            this.$2 = t;
            this.$3 = Array.isArray(t.content) ? t.content.map((t)=>new n.constructor(e, t)) : null;
        }
        const t = e.prototype;
        t.name = function() {
            return this.$1;
        };
        t.node = function() {
            return this.$2;
        };
        t.hasAttr = function(t) {
            return r("WAHasProperty")(this.$2.attrs, t);
        };
        t.assertTag = function(t) {
            if (this.$2.tag !== t) {
                this.throw(`to be <${t}>`);
            }
        };
        t.tag = function() {
            return this.$2.tag;
        };
        t.maybeChild = function(t) {
            const e = this.$3;
            if (!e) {
                return null;
            }
            for(let n = 0; n < e.length; n++){
                if (e[n].tag() === t) {
                    return e[n];
                }
            }
            return null;
        };
        t.hasChild = function(t) {
            return !!this.maybeChild(t);
        };
        t.child = function(t) {
            const e = this.maybeChild(t);
            return e || this.throw(`to have child <${t}>`);
        };
        t.assertAttr = function(t, n) {
            const e = this.attrString(t);
            if (e !== n) {
                this.throw(`to have "${t}"="${n}", but instead has "${e}"`);
            }
        };
        t.attrString = function(t) {
            if (r("WAHasProperty")(this.$2.attrs, t)) {
                return this.decodeAsString(this.$2.attrs[t]);
            }
            return this.throw(`to have attribute "${t}"`);
        };
        t.forEachAttributeKey = function(t) {
            const e = this.$2.attrs;
            Object.keys(e).forEach((e)=>t(e));
        };
        t.maybeAttrString = function(t) {
            if (this.hasAttr(t)) {
                return this.decodeAsString(this.$2.attrs[t]);
            }
            return null;
        };
        t.maybeAttrInt = function(t, n, r) {
            if (this.hasAttr(t)) {
                return this.attrInt(t, n, r);
            }
            return null;
        };
        t.attrEnumValues = function(t, n, r) {
            const e = new Set(n);
            const o = this.attrString(t);
            if (!e.has(o)) {
                if (r != null) {
                    return r;
                }
                const a = Array.from(e).join("|");
                return this.throw(`to have "${t}"={${a}} but has value "${o}"`);
            }
            return o;
        };
        t.attrEnum = function(t, n) {
            const e = this.attrString(t);
            if (!r("WAHasProperty")(n, e)) {
                const o = Object.keys(n).join("|");
                return this.throw(`to have "${t}"={${o}} but has value "${e}"`);
            }
            return n[e];
        };
        t.attrEnumOrNullIfUnknown = function(t, n) {
            const e = this.attrString(t);
            if (r("WAHasProperty")(n, e)) {
                return n[e];
            }
            return null;
        };
        t.maybeAttrEnum = function(t, n) {
            if (this.hasAttr(t)) {
                return this.attrEnum(t, n);
            }
            return null;
        };
        t.attrInt = function(t, n, r) {
            const e = this.attrString(t);
            return this.$4(e, t, n, r);
        };
        t.$4 = function(t, n, r, o) {
            const e = parseInt(t, 10);
            if (Number.isNaN(e)) {
                return this.throw(`to have "${n}"={integer} but has value "${t}"`);
            }
            if (r !== void 0 && e < r) {
                return this.throw(`to have "${n}"={at least ${r}} but has value ${e}`);
            }
            if (o !== void 0 && e >= o) {
                return this.throw(`to have "${n}"={below ${o}} but has value ${e}`);
            }
            return e;
        };
        t.forEachChild = function(t) {
            const e = this.$3;
            if (e) {
                e.forEach((e)=>t(e));
            } else if (this.$2.content != null) {
                return this.throw("to have children");
            }
        };
        t.forEachChildWithTag = function(t, n) {
            this.forEachChild(function(e) {
                if (e.tag() === t) {
                    n(e);
                }
            });
        };
        t.mapChildren = function(t) {
            const e = this.$3;
            if (!e && this.$2.content != null) {
                return this.throw("to have children");
            }
            if (e) {
                return e.map((e)=>t(e));
            }
            return [];
        };
        t.mapChildrenWithTag = function(t, n) {
            const e = this.$3;
            if (!e && this.$2.content != null) {
                return this.throw("to have children");
            }
            if (e) {
                return e.filter((e)=>e.tag() === t).map((e)=>n(e));
            }
            return [];
        };
        t.mapFirstChild = function(t) {
            const e = this.$3;
            if (!e || e.length === 0) {
                return this.throw("to have children");
            }
            return t(e[0]);
        };
        t.hasContent = function() {
            return !this.$3 && !!this.$2.content;
        };
        t.hasChildren = function() {
            return this.$3 != null;
        };
        t.getChildren = function() {
            return this.$3;
        };
        t.mapAttrKeys = function(t) {
            const e = this.getAttrKeys();
            if (e && e.length) {
                return e.map(t);
            }
            return [];
        };
        t.getAttrKeys = function() {
            return Object.keys(this.$2.attrs);
        };
        t.hasAttrs = function() {
            const e = this.$2.attrs ? Object.keys(this.$2.attrs) : [];
            return e.length > 0;
        };
        t.getNode = function() {
            return this.$2;
        };
        t.unsafeSetChildren = function(t) {
            this.$3 = t;
        };
        t.unsafeSetNodeContent = function(t) {
            this.$2.content = t;
        };
        t.contentUint = function(t) {
            const e = this.contentBytes(t);
            return u(e, t);
        };
        t.contentBytes = function(t = -1) {
            if (this.$3) {
                return this.throw("to have binary content, but has children instead");
            }
            if (this.$2.content != null) {
                const e = this.$2.content;
                if (t !== -1 && e.length !== t) {
                    return this.throw(`to be ${t} bytes, but got ${e.length} instead`);
                }
                return e;
            } else {
                return this.throw("to have content");
            }
        };
        t.contentString = function() {
            if (this.$3) {
                return this.throw("to have string content, but has children instead");
            }
            return this.$2.content ?? this.throw("to have content");
        };
        t.contentInt = function(t, n) {
            const e = this.contentString();
            return this.$4(e, "content", t, n);
        };
        t.contentEnum = function(t) {
            const e = this.contentString();
            if (!r("WAHasProperty")(t, e)) {
                const n = Object.keys(t).join("|");
                return this.throw(`to have content {${n}} but has value "${e}"`);
            }
            return t[e];
        };
        t.decodeAsString = function(t) {
            if (typeof t !== "string") {
                throw r("err")(`decodeAsString: attribute is ${typeof t} not a string: ${t}`);
            }
            return t;
        };
        t.throw = function(t) {
            throw new (o("WAXmlParsingFailure")).XmlParsingFailure(this.$1, `expected <${this.$2.tag}> ${t}`);
        };
        t.toString = function() {
            return this.$2.toString();
        };
        return e;
    })();
    function u(e, t) {
        let n = 0;
        for(let r = 0; r < t; r++){
            n = n * 256 + e[r];
        }
        return n;
    }
    l.ParsableXmlNode = s;
    l.convertBytesToUint = u;
}, 98);