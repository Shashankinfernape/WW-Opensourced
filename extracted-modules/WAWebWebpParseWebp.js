__d("WAWebWebpParseWebp", [
    "WALogger",
    "WATypedArraysEqual",
    "WAWebGetWebpMetadata",
    "WAWebWebp"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 3;
    const u = 5000;
    function c(e) {
        if (e === 0) {
            return 0;
        }
        const t = Math.min(Math.floor(u / e), s);
        return Math.max(t, 1) * e;
    }
    const d = 44;
    const m = 20;
    const p = 3;
    const _ = 4;
    const f = {
        animationDuration: 0,
        singleLoopDuration: 0,
        emojis: [],
        isFirstParty: false,
        isFromStickerMaker: false,
        stickerPackId: null,
        stickerPackName: null,
        stickerPackPublisher: null,
        isAvatar: false,
        isAiSticker: false,
        stickerMakerSourceType: null,
        accessibilityLabel: null
    };
    function g(t) {
        const n = new Uint8Array(t);
        if (!o("WAWebWebp").isExtendedFile(n)) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Sticker file not extended format."
            ])));
            return f;
        }
        const a = o("WAWebGetWebpMetadata").getWebpMetadata(t);
        const { accessibilityLabel: i, emojis: l, isAiSticker: s, isAvatar: u, isFirstParty: g, isFromStickerMaker: h, stickerMakerSourceType: y, stickerPackId: C, stickerPackName: b, stickerPackPublisher: v } = a;
        const S = babelHelpers.extends({}, f, {
            emojis: l,
            isFirstParty: g,
            isFromStickerMaker: h,
            stickerPackId: C,
            stickerPackName: b,
            stickerPackPublisher: v,
            isAvatar: u,
            isAiSticker: s,
            stickerMakerSourceType: y,
            accessibilityLabel: i
        });
        if (!o("WAWebWebp").isAnimatedWebp(n)) {
            return S;
        }
        let R = 0;
        let E;
        for(let L = d; r("WATypedArraysEqual")(n.slice(L, L + _), o("WAWebWebp").stringToUint8(o("WAWebWebp").Chunk.ANMF));){
            const k = L + m;
            const I = n.slice(k, k + p);
            if (I.length !== p) {
                return S;
            }
            R += o("WAWebWebp").littleEndianToNumber(I);
            const T = L + _;
            const D = n.slice(T, T + _);
            if (D.length !== _) {
                return S;
            }
            L += _ * 2 + o("WAWebWebp").littleEndianToNumber(D);
            if (E == null) {
                E = L;
            }
        }
        const x = c(R);
        return babelHelpers.extends({}, S, {
            animationDuration: x,
            firstFrameLength: E,
            singleLoopDuration: R
        });
    }
    l.MAX_LOOPS = s;
    l.getTotalAnimationDuration = c;
    l.parseWebp = g;
}, 98);