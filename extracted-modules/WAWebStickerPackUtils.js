__d("WAWebStickerPackUtils", [
    "Promise",
    "WABlobToArrayBuffer",
    "WAMediaCalculateFilehash",
    "WAWebApiParse",
    "WAWebCanvasUtils",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaLoad",
    "WAWebRecentStickerCollectionMd",
    "WAWebStickerModel",
    "WAWebStickerPackConstants",
    "asyncToGeneratorRuntime",
    "err",
    "fflate",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            for(var t = o("WAWebRecentStickerCollectionMd").RecentStickerCollectionMd.map((e)=>e.sticker), n = new Map, stickerPackStickers = [], a = 0; a < Math.min(t.length, e); a++){
                const l = t[a];
                const s = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(l.mediaData.filehash);
                if (s != null) {
                    stickerPackStickers.push({
                        emojis: l.mediaData.emojis ?? [],
                        mimetype: l.mediaData.mimetype,
                        isLottie: !!l.mediaData.isLottie,
                        fileName: `sticker${a}.webp`,
                        isAnimated: !!l.mediaData.isAnimated
                    });
                    const u = yield s.arrayBuffer();
                    n.set(`sticker${a}.webp`, new Uint8Array(u));
                }
            }
            const c = {};
            n.forEach((e, t)=>{
                c[t] = e;
            });
            const d = o("fflate").zipSync(c);
            return {
                stickerPackZip: new Blob([
                    d
                ], {
                    type: "application/zip"
                }),
                stickerPackStickers
            };
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e instanceof Blob ? e : e.getBlob();
            if (t == null) {
                throw r("err")("blob is null");
            }
            const n = yield o("WABlobToArrayBuffer").blobToArrayBuffer(t);
            return o("fflate").unzipSync(new Uint8Array(n));
        });
        return d.apply(this, arguments);
    }
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { stickers, trayIconFileName }) {
            const a = yield c(e);
            const i = [];
            const l = function*() {
                const e = s[0];
                const t = s[1];
                if (e === trayIconFileName) {
                    return 1;
                }
                if (t instanceof Uint8Array) {
                    const l = t.buffer;
                    const u = yield o("WAMediaCalculateFilehash").calculateFilehash(l);
                    const c = stickers?.find(function(t) {
                        return t.fileName === e;
                    });
                    const d = c?.mimetype ?? "image/webp";
                    o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.put(u, new Blob([
                        l
                    ], {
                        type: d
                    }));
                    const m = new (o("WAWebStickerModel")).StickerModel({
                        mimetype: d,
                        width: 250,
                        height: 250,
                        filehash: u,
                        id: u,
                        directPath: "",
                        mediaKey: "",
                        encFilehash: "",
                        mediaKeyTimestamp: 0
                    });
                    if (c != null) {
                        m.mediaData.set({
                            isLottie: c.isLottie ?? false,
                            isAnimated: c.isAnimated ?? false
                        });
                    }
                    i.push(m);
                }
            };
            for (var s of Object.entries(a)){
                yield* l();
            }
            return i;
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const { context, gap } = e;
            const r = gap === undefined ? o("WAWebStickerPackConstants").PADDING : gap;
            const e_imageL = e.imageL;
            const i = e_imageL === undefined ? o("WAWebStickerPackConstants").IMAGE_LENGTH : e_imageL;
            const e_imageW = e.imageW;
            const s = e_imageW === undefined ? o("WAWebStickerPackConstants").IMAGE_WIDTH : e_imageW;
            const e_recentStickers = e.recentStickers;
            for(let c = e.stickerCount, d = e.thumbL, m = d === undefined ? o("WAWebStickerPackConstants").THUMBNAIL_LENGTH : d, p = e.thumbW, _ = p === undefined ? o("WAWebStickerPackConstants").THUMBNAIL_WIDTH : p, f = e.x, g = e.y, h = f, y = g, C = 0; C < c; C++){
                const b = e_recentStickers[C];
                const v = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(b.mediaData.filehash);
                if (v != null) {
                    const S = window.URL.createObjectURL(v);
                    const R = yield o("WAWebMediaLoad").loadImage(S);
                    context.drawImage(R, h, y, i, s);
                    h += m / 2 - r;
                    if (C % 2 !== 0) {
                        h = c === 3 ? m / 2 - i / 2 : r;
                        y = _ / 2 + r;
                    }
                }
            }
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        if (o("WAWebApiParse").isStickerPackURL(e)) {
            const t = new URL(e);
            const n = t.pathname.split("/");
            const r = n[0];
            const a = n[1];
            const i = n[2];
            return i;
        }
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ count, imageL = o("WAWebStickerPackConstants").IMAGE_LENGTH, imageW = o("WAWebStickerPackConstants").IMAGE_WIDTH, thumbL = o("WAWebStickerPackConstants").THUMBNAIL_LENGTH, thumbW = o("WAWebStickerPackConstants").THUMBNAIL_WIDTH }) {
            const m = o("WAWebCanvasUtils").createCanvas(thumbL, thumbW);
            const p = r("nullthrows")(m.getContext("2d"));
            p.fillStyle = "#FFFFFF";
            p.fillRect(0, 0, thumbL, thumbW);
            const recentStickers = o("WAWebRecentStickerCollectionMd").RecentStickerCollectionMd.map((e)=>e.sticker);
            const stickerCount = Math.min(recentStickers.length, count ?? 4);
            let PADDING = o("WAWebStickerPackConstants").PADDING;
            let PADDING_1 = o("WAWebStickerPackConstants").PADDING;
            switch(stickerCount){
                case 1:
                    PADDING = thumbL / 2 - imageL / 2;
                    PADDING_1 = thumbW / 2 - imageW / 2;
                    break;
                case 2:
                    PADDING_1 = thumbW / 2 - imageW / 2;
                    break;
            }
            yield _({
                context: p,
                gap: o("WAWebStickerPackConstants").PADDING,
                imageL,
                imageW,
                recentStickers,
                stickerCount,
                thumbL,
                thumbW,
                x: PADDING,
                y: PADDING_1
            });
            return m;
        });
        return y.apply(this, arguments);
    }
    function C(e, t) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a = o("WAWebStickerPackConstants").STICKER_GRID_COUNT) {
            const i = o("WAWebCanvasUtils").createCanvas(o("WAWebStickerPackConstants").THUMBNAIL_LENGTH, o("WAWebStickerPackConstants").THUMBNAIL_WIDTH);
            const l = r("nullthrows")(i.getContext("2d"));
            const s = t.slice(0, a);
            if (s.length < a) {
                const u = yield v(s[0]);
                if (u != null) {
                    l.drawImage(u, 0, 0, o("WAWebStickerPackConstants").THUMBNAIL_LENGTH, o("WAWebStickerPackConstants").THUMBNAIL_WIDTH);
                }
                return i;
            }
            const c = yield (e || (e = n("Promise"))).all(s.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                    const image = yield v(e);
                    if (image != null) {
                        return {
                            image,
                            index: t
                        };
                    }
                    return null;
                });
                return function(t, n) {
                    return e.apply(this, arguments);
                };
            })()));
            for (const d of c){
                if (d != null) {
                    const { image, index } = d;
                    const _ = index % 2;
                    const f = Math.floor(index / 2);
                    const g = o("WAWebStickerPackConstants").PADDING + _ * (o("WAWebStickerPackConstants").IMAGE_LENGTH + o("WAWebStickerPackConstants").GRID_GAP);
                    const h = o("WAWebStickerPackConstants").PADDING + f * (o("WAWebStickerPackConstants").IMAGE_WIDTH + o("WAWebStickerPackConstants").GRID_GAP);
                    l.drawImage(image, g, h, o("WAWebStickerPackConstants").IMAGE_LENGTH, o("WAWebStickerPackConstants").IMAGE_WIDTH);
                }
            }
            return i;
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e == null) {
                return null;
            }
            const t = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(e.mediaData.filehash);
            if (t == null) {
                return null;
            }
            const n = window.URL.createObjectURL(t);
            try {
                return yield o("WAWebMediaLoad").loadImage(n);
            } finally{
                window.URL.revokeObjectURL(n);
            }
        });
        return S.apply(this, arguments);
    }
    l.compressedRecentStickers = s;
    l.unzipStickerPackMedia = c;
    l.decompressStickerPackMedia = m;
    l.extractStickerPackIdFromUrl = g;
    l.generateStickerPackThumbnail = h;
    l.generateStickerGridThumbnail = C;
}, 98);