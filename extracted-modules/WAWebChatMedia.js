__d("WAWebChatMedia", [
    "Promise",
    "WAWebCarouselMsgUtils",
    "WAWebChatMediaMsgsCollection",
    "WAWebFrontendMsgGetters",
    "WAWebMessageAssociationUIUtils",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebStateUtils",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const r = o("WAWebStateUtils").unproxy(t);
            const { docMsgs, linkMsgs, mediaMsgs, productMsgs } = r;
            const u = [];
            if (mediaMsgs) {
                mediaMsgs.delete();
                u.push(mediaMsgs.queryMedia({
                    chat: r
                }));
            }
            if (linkMsgs) {
                linkMsgs.delete();
                u.push(linkMsgs.queryLinks(r));
            }
            if (docMsgs) {
                docMsgs.delete();
                u.push(docMsgs.queryDocs(r));
            }
            if (productMsgs) {
                productMsgs.delete();
                u.push(productMsgs.queryProducts(r));
            }
            yield (e || (e = n("Promise"))).allSettled(u);
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return o("WAWebMsgGetters").getIsMedia(e) && !e.isViewOnce && e.viewMode !== o("WAWebViewMode.flow").ViewModeType.HIDDEN && e.viewMode !== o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE;
    }
    function d(e, t, n) {
        if (t) {
            const r = o("WAWebStateUtils").unproxy(e);
            const a = o("WAWebCarouselMsgUtils").flattenMsgs(Array.isArray(t) ? t : [
                t
            ]);
            const i = [];
            const l = [];
            const s = [];
            const u = [];
            a.forEach((e)=>{
                if (c(e)) {
                    i.push(e);
                }
                if (o("WAWebFrontendMsgGetters").getAsDoc(e)) {
                    s.push(e);
                }
                if (o("WAWebMsgLinks").getGalleryLinks(e).length) {
                    l.push(e);
                }
                if (o("WAWebFrontendMsgGetters").getAsProduct(e) != null) {
                    u.push(e);
                }
            });
            const d = r.mediaMsgs;
            if (d && i.length) {
                const m = babelHelpers.extends({}, n, {
                    silent: false
                });
                d.add(i, m);
            }
            if (r.linkMsgs && l.length) {
                r.linkMsgs.add(l, n);
            }
            if (r.docMsgs && s.length) {
                r.docMsgs.add(s, n);
            }
            if (r.productMsgs && u.length) {
                r.productMsgs.add(u, n);
            }
        }
    }
    function m(e, t) {
        const n = o("WAWebStateUtils").unproxy(e);
        const a = new (r("WAWebChatMediaMsgsCollection"));
        const i = n.getMediaMsgs().filter(o("WAWebMessageAssociationUIUtils").shouldDisplayOrphanMessage);
        if (!t) {
            a.add(i);
        }
        if (!t || t.isViewOnce) {
            return a;
        }
        if (i.includes(t) || t.getMsgChunk() === n.msgs) {
            a.add(i);
            a.hasMediaAfter = false;
        }
        if (!i.includes(t)) {
            const l = t.getMsgChunk();
            const s = l != null ? l.slice() : [
                t
            ];
            const u = s.filter(o("WAWebMessageAssociationUIUtils").shouldDisplayOrphanMessage);
            const d = o("WAWebCarouselMsgUtils").flattenMsgs(u);
            a.add(d.filter(c));
        }
        return a;
    }
    l.resetMediaMsgs = s;
    l.addMediaMsgs = d;
    l.constructMediaMsgs = m;
}, 98);