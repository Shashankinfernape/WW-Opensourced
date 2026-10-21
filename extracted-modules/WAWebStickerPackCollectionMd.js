__d("WAWebStickerPackCollectionMd", [
    "$InternalEnum",
    "WAAbortError",
    "WALogger",
    "WATimeUtils",
    "WAWebAuraGating",
    "WAWebBaseCollection",
    "WAWebFetchFirstPartyStickerPacksAction",
    "WAWebL10N",
    "WAWebStickerConstants",
    "WAWebStickerPackModelMd",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = n("$InternalEnum").Mirrored([
        "INITIAL",
        "PENDING",
        "SUCCESS",
        "ERROR"
    ]);
    const m = ((t)=>{
        function a() {
            let e;
            e = t.call(this) || this;
            e.fetchState = d.INITIAL;
            e.packFetchState = new Map;
            e.$StickerPackCollection$p_1 = null;
            e.$StickerPackCollection$p_2 = new Map;
            e.$StickerPackCollection$p_3 = null;
            e.$StickerPackCollection$p_4 = new Map;
            e.$StickerPackCollection$p_5 = null;
            e.$StickerPackCollection$p_6 = new Map;
            e.listenTo(r("WAWebL10N"), "locale_change", function() {
                return e.$StickerPackCollection$p_7();
            });
            return e;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.$StickerPackCollection$p_7 = function() {
            this.$StickerPackCollection$p_8();
            this.reset();
        };
        a_prototype.$StickerPackCollection$p_8 = function() {
            this.$StickerPackCollection$p_5?.abort();
            this.$StickerPackCollection$p_5 = null;
            this.$StickerPackCollection$p_6.forEach((e)=>e.abort());
            this.$StickerPackCollection$p_6.clear();
            this.$StickerPackCollection$p_9();
            this.$StickerPackCollection$p_10();
            this.$StickerPackCollection$p_1 = null;
            this.$StickerPackCollection$p_2.clear();
            this.$StickerPackCollection$p_3 = null;
            this.$StickerPackCollection$p_4.clear();
        };
        a_prototype.$StickerPackCollection$p_11 = function(t) {
            if (t !== this.fetchState) {
                this.fetchState = t;
                this.trigger("change:fetchState", t);
            }
        };
        a_prototype.$StickerPackCollection$p_9 = function() {
            this.$StickerPackCollection$p_11(d.INITIAL);
        };
        a_prototype.$StickerPackCollection$p_12 = function(t, n) {
            if (n !== this.packFetchState.get(t)) {
                this.packFetchState.set(t, n);
                this.trigger("change:packFetchState", t, n);
            }
        };
        a_prototype.$StickerPackCollection$p_10 = function() {
            this.packFetchState.clear();
            this.trigger("change:packFetchState");
        };
        a_prototype.$StickerPackCollection$p_13 = function(t, n, r) {
            const e = this;
            this.$StickerPackCollection$p_14(t, n, function(n, o) {
                const a = r[o - t];
                if (!n) {
                    if (a) {
                        e.add(a);
                    }
                } else if (a) {
                    if (n.id === a.id && (n.imageDataHash !== a.imageDataHash || n.index !== a.index)) {
                        e.remove(n, {
                            silent: true
                        });
                        e.add(a);
                    } else {
                        e.remove(n);
                        e.add(a);
                    }
                } else {
                    for(let i = n; i;){
                        e.remove(i);
                        i = e.at(o);
                    }
                }
            });
            this.$StickerPackCollection$p_10();
            this.$StickerPackCollection$p_2.clear();
            this.$StickerPackCollection$p_4.clear();
        };
        a_prototype.$StickerPackCollection$p_14 = function(t, n, r) {
            for(let e = t; e < n; e++){
                const o = this.at(e);
                r(o, e);
            }
        };
        a_prototype.fetch = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const n = r("WAWebAuraGating").isStickersEnabled();
                const a = this.fetchState === d.SUCCESS && o("WATimeUtils").unixTime() - (this.$StickerPackCollection$p_1 ?? 0) < o("WAWebStickerConstants").STICKER_PACK_FETCH_TIMEOUT && this.$StickerPackCollection$p_3 === n;
                if (!(this.fetchState === d.PENDING || a)) {
                    this.$StickerPackCollection$p_11(d.PENDING);
                    this.$StickerPackCollection$p_1 = o("WATimeUtils").unixTime();
                    this.$StickerPackCollection$p_3 = n;
                    this.$StickerPackCollection$p_5 = new AbortController;
                    try {
                        const i = yield o("WAWebFetchFirstPartyStickerPacksAction").fetchFirstPartyStickerPacks({
                            signal: this.$StickerPackCollection$p_5.signal
                        });
                        const l = Math.max(this.length, i.length);
                        this.$StickerPackCollection$p_13(0, l, i);
                        this.$StickerPackCollection$p_11(d.SUCCESS);
                    } catch (error) {
                        const u = r("getErrorSafe")(error);
                        this.$StickerPackCollection$p_11(d.ERROR);
                        if (u.name === o("WAAbortError").ABORT_ERROR) {
                            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "First party sticker packs request cancelled"
                            ])));
                            return;
                        }
                        o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "First party sticker packs request failed: error"
                        ]))).catching(u).sendLogs("sticker-packs-fetch-request-failed");
                    }
                }
            });
            function a() {
                return t.apply(this, arguments);
            }
            return a;
        })();
        a_prototype.fetchStickerPack = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (e && !this.get(e)) {
                    const n = r("WAWebAuraGating").isStickersEnabled();
                    const a = this.packFetchState.get(e);
                    const i = this.$StickerPackCollection$p_2.get(e) ?? 0;
                    const l = a === d.SUCCESS && o("WATimeUtils").unixTime() - i < o("WAWebStickerConstants").STICKER_PACK_FETCH_TIMEOUT && this.$StickerPackCollection$p_4.get(e) === n;
                    if (!(a === d.PENDING || l)) {
                        this.$StickerPackCollection$p_12(e, d.PENDING);
                        this.$StickerPackCollection$p_2.set(e, o("WATimeUtils").unixTime());
                        this.$StickerPackCollection$p_4.set(e, n);
                        const s = new AbortController;
                        this.$StickerPackCollection$p_6.set(e, s);
                        try {
                            const m = yield o("WAWebFetchFirstPartyStickerPacksAction").fetchFirstPartyStickerPack({
                                id: e,
                                signal: s.signal
                            });
                            this.$StickerPackCollection$p_12(e, d.SUCCESS);
                            this.add(m);
                        } catch (error) {
                            const p = r("getErrorSafe")(error);
                            this.$StickerPackCollection$p_12(e, d.ERROR);
                            if (p.name === o("WAAbortError").ABORT_ERROR) {
                                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                    "First party sticker pack request cancelled"
                                ])));
                                return;
                            }
                            o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                "First party sticker pack request failed: error"
                            ]))).catching(p).sendLogs("sticker-packs-fetch-request-failed");
                        }
                    }
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.delete = function() {
            t.prototype.delete.call(this);
            this.stopListening();
            this.$StickerPackCollection$p_8();
        };
        return a;
    })(o("WAWebBaseCollection").BaseCollection);
    m.model = o("WAWebStickerPackModelMd").StickerPackModel;
    m.comparator = function(e, t) {
        if (e.index < t.index) {
            return -1;
        }
        if (e.index > t.index) {
            return 1;
        }
        return 0;
    };
    const p = new m;
    l.FetchState = d;
    l.StickerPackCollection = m;
    l.StickerPackCollectionMd = p;
}, 98);