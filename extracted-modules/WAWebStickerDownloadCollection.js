__d("WAWebStickerDownloadCollection", [
    "WALogger",
    "WATimeUtils",
    "WAWebIdleTaskRunner",
    "WAWebSchemaStickerDownload",
    "WAWebStickerPackCollectionMd",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = ((t)=>{
        function r() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.addAndPersist = function(n) {
            if (this.get(n.id) != null) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Sticker Download: sticker pack already exists in collection"
                ])));
                return;
            }
            this.add(n);
            this.$StickerDownloadCollectionImpl$p_2();
        };
        r_prototype.$StickerDownloadCollectionImpl$p_2 = function() {
            const e = this;
            if (!this.$StickerDownloadCollectionImpl$p_1 || !o("WAWebIdleTaskRunner").IdleCallbackTasks.isInQueue(this.$StickerDownloadCollectionImpl$p_1)) {
                this.$StickerDownloadCollectionImpl$p_1 = o("WAWebIdleTaskRunner").IdleCallbackTasks.enqueue(function() {
                    e.$StickerDownloadCollectionImpl$p_3().catch((e)=>{
                        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "StickerDownloadCollection save task failed"
                        ]))).sendLogs(String(e));
                    });
                });
            }
        };
        r_prototype.$StickerDownloadCollectionImpl$p_3 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = this.toArray().map((e)=>({
                        id: e.id,
                        timestamp: o("WATimeUtils").unixTime()
                    }));
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[StickerDownload] saving to DB, count=",
                    ""
                ])), e.length);
                try {
                    const t = o("WAWebSchemaStickerDownload").getStickerDownloadTable();
                    let n = yield t.count();
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[StickerDownload] before save, DB count=",
                        ""
                    ])), n);
                    yield t.clear();
                    yield t.bulkCreateOrReplace(e);
                    n = yield t.count();
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[StickerDownload] after save, DB count=",
                        ""
                    ])), n);
                } catch (error) {
                    o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "StickerDownloadCollection attempt to save to database failed"
                    ]))).sendLogs(String(error));
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return r;
    })(o("WAWebStickerPackCollectionMd").StickerPackCollection);
    const _ = new p;
    l.StickerDownloadCollection = _;
}, 98);