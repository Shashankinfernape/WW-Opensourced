__d("WAWebMediaOpaqueData", [
    "Promise",
    "WABase64",
    "WALogger",
    "WAShiftTimer",
    "WAWebCreateMediaBlobUrl",
    "WAWebFileUtils",
    "WAWebMediaBase64ImageMimetype",
    "err",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _ = [];
    const f = (()=>{
        function t() {
            this.$1 = 1;
            this.$2 = false;
            this.released = false;
            this.$3 = void 0;
            this.blob = void 0;
            this.$4 = void 0;
            this.$5 = void 0;
            this.$6 = void 0;
        }
        const a = t.prototype;
        a.retain = function() {
            if (this.released) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "OpaqueData:retain called on released OpaqueData"
                ])));
                throw r("err")("OpaqueData:retain called on released OpaqueData");
            }
            this.$1++;
        };
        a.autorelease = function() {
            if (this.released) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "OpaqueData:autorelease called on released object"
                ])));
            } else if (this.$1 === 0) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "OpaqueData:autorelease too many release calls"
                ])));
            } else if (this.$1 === 1) {
                this.$1 = 0;
                if (!this.$2) {
                    this.$2 = true;
                    _.push(this);
                    g.onOrBefore(1000);
                }
            } else {
                this.$1--;
            }
        };
        a.autoreleaseWhenPromiseCompletes = function(t) {
            const e = this;
            const n = function() {
                e.autorelease();
            };
            t.then(n, n);
        };
        a.throwIfReleased = function(t) {
            if (this.released) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " called on released OpaqueData"
                ])), t);
                throw r("err")(`${t} called on released OpaqueData`);
            }
            if (this.$1 === 0) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " called on unretained OpaqueData"
                ])), t);
            }
        };
        a.url = function() {
            this.throwIfReleased("OpaqueData:url");
            if (this.$4 != null && this.$4 !== "") {
                return this.$4;
            }
            if (this.$3 != null && this.$3 !== "") {
                this.$4 = `data:${this.$5 ?? o("WAWebMediaBase64ImageMimetype").JPEG_MIMETYPE};base64,${this.$3}`;
                return this.$4;
            }
            this.$4 = o("WAWebCreateMediaBlobUrl").createMediaBlobUrl(r("nullthrows")(this.blob, "unexpected empty blob"));
            return this.$4;
        };
        a.getBlob = function() {
            return this.blob;
        };
        a.getBase64 = function() {
            return this.$3;
        };
        a.validate = function() {
            if (this.$6 === true) {
                return (p || (p = n("Promise"))).resolve(false);
            }
            if (this.blob) {
                return o("WAWebFileUtils").validateBlob(this.blob);
            }
            return (p || (p = n("Promise"))).resolve(true);
        };
        a.size = function() {
            this.throwIfReleased("OpaqueData:size");
            if (this.blob) {
                return this.blob.size;
            }
            if (this.$3 != null) {
                return o("WABase64").sizeWhenB64Decoded(this.$3);
            }
            o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "OpaqueData:size returned 0"
            ]))).sendLogs("opaque-data-size-0");
            return 0;
        };
        a.formData = function(t) {
            this.throwIfReleased("OpaqueData:formData");
            return this.forceToBlob();
        };
        a.type = function() {
            this.throwIfReleased("OpaqueData:type");
            if (this.$5 != null && this.$5 !== "") {
                return this.$5;
            }
            return "undefined";
        };
        a.forceToBlob = function() {
            this.throwIfReleased("OpaqueData:forceToBlob");
            const e = this.blob;
            if (e) {
                return e;
            }
            const t = this.$3;
            if (t != null && t !== "") {
                this.$3 = void 0;
                this.$4 = void 0;
                const n = this.$5;
                return this.blob = new Blob([
                    o("WABase64").decodeB64(t)
                ], n != null && n !== "" ? {
                    type: n
                } : void 0);
            }
            throw r("err")("OpaqueData:forceToBlob no b64 or blob");
        };
        a.$7 = function() {
            this.$5 = void 0;
            const e = this.blob;
            if (e) {
                this.blob = void 0;
                if (this.$4 != null && this.$4 !== "") {
                    window.URL.revokeObjectURL(this.$4);
                    this.$4 = void 0;
                }
            } else {
                this.$3 = void 0;
                this.$4 = void 0;
            }
        };
        a.isBlobEqual = function(t) {
            if (t) {
                return this.blob === t.blob;
            }
            return !this.blob;
        };
        t.releaseAutoreleasePool = function() {
            const e = _;
            _ = [];
            for (const n of e){
                n.$2 = false;
                if (n.$1 === 0 && !n.released) {
                    n.released = true;
                    n.$7();
                }
            }
        };
        return t;
    })();
    f.createFromBase64Image = function(e, t) {
        return new (p || (p = n("Promise")))(function(n) {
            const r = new f;
            r.$3 = e;
            r.$5 = t;
            return n(r);
        });
    };
    f.createFromBase64Jpeg = function(e) {
        return f.createFromBase64Image(e, o("WAWebMediaBase64ImageMimetype").JPEG_MIMETYPE);
    };
    f.createFromBase64Preview = function(e) {
        const t = o("WAWebMediaBase64ImageMimetype").maybeRecoverDoubleEncodedBase64Image(e);
        return f.createFromBase64Image(t, o("WAWebMediaBase64ImageMimetype").getBase64ImageMimetype(t));
    };
    f.createFromData = function(e, t) {
        return new (p || (p = n("Promise")))(function(n) {
            const r = new f;
            r.blob = e instanceof Blob && e.type === t ? e : new Blob([
                e
            ], {
                type: t
            });
            r.$5 = t;
            return n(r);
        });
    };
    var g = new (o("WAShiftTimer")).ShiftTimer(function() {
        return f.releaseAutoreleasePool();
    });
    l.default = f;
}, 98);