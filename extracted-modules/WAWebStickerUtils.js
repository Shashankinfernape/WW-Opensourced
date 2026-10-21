__d("WAWebStickerUtils", [
    "$InternalEnum",
    "Promise",
    "WABase64UrlSafe",
    "WACryptoSha256",
    "WALogger",
    "WAPromiseProps",
    "WAWebABProps",
    "WAWebAuraGating",
    "WAWebFeatureDetectionDetectWebpSupport",
    "WAWebInMemoryLottieStickerCache",
    "WAWebMediaDataUtils",
    "WAWebMediaMmsV4Download",
    "WAWebStickerMetadataParsing",
    "WAWebStickerMimeUtils",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    const g = "metadata";
    const h = "customProps";
    const fullWidth = 512;
    const fullHeight = 512;
    const b = "196";
    const v = "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEM5mGNNmQ2U6CxBER9IwHd9qtcshk9JKsRv9Ljq6/yPW9v35AKwmAiocRH2YWMjnacj4luB3xp6h+4XxoML/KXQ==";
    function S(e) {
        const t = (4 - e.length % 4) % 4;
        return e + "=".repeat(t);
    }
    function R(e) {
        return S(o("WABase64UrlSafe").urlSafeBase64(e));
    }
    function L(e, t) {
        const n = R(e);
        const r = R(t);
        return n === r;
    }
    function E(e, t) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WABase64UrlSafe").urlSafeBase64ToStandard(e);
            const r = S(n);
            const a = o("WABase64UrlSafe").getBytesFromBase64(r);
            const buffer = new TextEncoder().encode(t).buffer;
            const l = o("WABase64UrlSafe").getBytesFromBase64(v);
            const s = yield crypto.subtle.importKey("spki", l, {
                name: "ECDSA",
                namedCurve: "P-256"
            }, false, [
                "verify"
            ]);
            const u = yield crypto.subtle.verify({
                name: "ECDSA",
                hash: {
                    name: "SHA-256"
                }
            }, s, a, buffer);
            return u;
        });
        return k.apply(this, arguments);
    }
    const I = n("$InternalEnum").Mirrored([
        "WEBP",
        "LOTTIE"
    ]);
    function T(e) {
        if (o("WAWebStickerMimeUtils").WhatsAppLottieStickerMimeType === e) {
            return I.LOTTIE;
        }
        return I.WEBP;
    }
    function D(t) {
        if (t == null) {
            return o("WAWebStickerMetadataParsing").DEFAULT_STICKER_METADATA;
        }
        try {
            const a = t[g]?.[h] ?? {};
            return o("WAWebStickerMetadataParsing").toStickerMetadata(a);
        } catch (t) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "extractMetaDataFromLottieSticker: Failed to parse metadata out of lottie sticker, returning default metadata."
            ])));
            return o("WAWebStickerMetadataParsing").DEFAULT_STICKER_METADATA;
        }
    }
    function x(e, t) {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (T(e.type) === I.LOTTIE) {
                const r = t.filehash;
                if (r != null) {
                    yield o("WAWebInMemoryLottieStickerCache").extractAndSetBothLottieJSONInMemoryCache(r, e);
                    const a = o("WAWebInMemoryLottieStickerCache").InMemoryLottieStickerCache.get(r);
                    const i = D(a);
                    return (f || (f = n("Promise"))).resolve(babelHelpers.extends({}, i, {
                        size: e.size,
                        fullWidth,
                        fullHeight
                    }));
                }
            }
            return o("WAWebFeatureDetectionDetectWebpSupport").detectWebpSupport().then((t)=>{
                if (t) {
                    return o("WAPromiseProps").promiseProps({
                        widthHeight: o("WAWebMediaDataUtils").getImageWidthHeightNoOpaque(e),
                        webpData: o("WAWebMediaDataUtils").parseWebpNoOpaque(e)
                    }).then((t)=>({
                            fullWidth: t.widthHeight.width,
                            fullHeight: t.widthHeight.height,
                            animationDuration: t.webpData.animationDuration,
                            firstFrameLength: t.webpData.firstFrameLength,
                            singleLoopDuration: t.webpData.singleLoopDuration,
                            emojis: t.webpData.emojis,
                            isAnimated: t.webpData.animationDuration > 0,
                            size: e.size,
                            isFirstParty: t.webpData.isFirstParty,
                            isFromStickerMaker: t.webpData.isFromStickerMaker,
                            stickerPackId: t.webpData.stickerPackId,
                            stickerPackName: t.webpData.stickerPackName,
                            stickerPackPublisher: t.webpData.stickerPackPublisher,
                            isAvatar: t.webpData.isAvatar,
                            isAiSticker: t.webpData.isAiSticker,
                            stickerMakerSourceType: t.webpData.stickerMakerSourceType,
                            accessibilityLabel: t.webpData.accessibilityLabel
                        }));
                }
                return o("WAWebMediaDataUtils").parseWebpNoOpaque(e).then((()=>{
                    const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ accessibilityLabel, animationDuration, emojis, firstFrameLength, isAiSticker, isAvatar, isFirstParty, isFromStickerMaker, singleLoopDuration, stickerMakerSourceType, stickerPackId, stickerPackName, stickerPackPublisher }) {
                        if (animationDuration > 0) {
                            return {
                                animationDuration,
                                firstFrameLength,
                                singleLoopDuration,
                                emojis,
                                isAnimated: true,
                                size: e.size,
                                isFirstParty,
                                isFromStickerMaker,
                                stickerPackId,
                                stickerPackName,
                                stickerPackPublisher,
                                isAvatar,
                                isAiSticker,
                                stickerMakerSourceType,
                                accessibilityLabel
                            };
                        }
                        const g = yield o("WAWebMediaDataUtils").decodeWebpToRGBANoOpaque(e);
                        return {
                            animationDuration,
                            rgbaBuffer: g.rgbaBuffer,
                            rgbaWidth: g.width,
                            rgbaHeight: g.height,
                            emojis,
                            isAnimated: false,
                            size: e.size,
                            isFirstParty,
                            isFromStickerMaker,
                            stickerPackId,
                            stickerPackName,
                            stickerPackPublisher,
                            isAvatar,
                            isAiSticker,
                            stickerMakerSourceType,
                            accessibilityLabel
                        };
                    });
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                })());
            });
        });
        return $.apply(this, arguments);
    }
    function P(e) {
        return e.replaceAll(/\s+/g, "");
    }
    function N(e, t) {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = new Blob([
                e
            ], {
                type: o("WAWebStickerMimeUtils").WhatsAppLottieStickerMimeType
            });
            const a = yield o("WAWebMediaMmsV4Download").extractBothLottieJSON(n, t);
            const a_primary = a.primary;
            if (a_primary == null) {
                throw r("err")("Failed to extract lottie json from zipped sticker");
            }
            const l = yield w(a_primary);
            return l;
        });
        return M.apply(this, arguments);
    }
    function w(e) {
        return A.apply(this, arguments);
    }
    function A() {
        A = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = j(e, g);
            const n = yield F(t);
            return n;
        });
        return A.apply(this, arguments);
    }
    function F(e) {
        return O.apply(this, arguments);
    }
    function O() {
        O = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = new TextEncoder;
            const buffer = t.encode(e).buffer;
            const r = yield o("WACryptoSha256").sha256Base64(buffer);
            return r;
        });
        return O.apply(this, arguments);
    }
    function B(e, t, n) {
        return W.apply(this, arguments);
    }
    function W() {
        W = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = o("WAWebABProps").getABPropConfigValue("enable_sticker_verification_for_gimmick");
            if (!r) {
                return true;
            }
            const a = Object.keys(e).find((e)=>n.test(e));
            if (a == null) {
                return false;
            }
            return G(e[a], t);
        });
        return W.apply(this, arguments);
    }
    function q(e, t) {
        return U.apply(this, arguments);
    }
    function U() {
        U = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            return B(e, t, /animation\/animation.json.trust_token$/);
        });
        return U.apply(this, arguments);
    }
    function V(e, t) {
        return H.apply(this, arguments);
    }
    function H() {
        H = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            return B(e, t, /animation\/animation_secondary.json.trust_token$/);
        });
        return H.apply(this, arguments);
    }
    function G(e, t) {
        return z.apply(this, arguments);
    }
    function z() {
        z = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            try {
                const n = new TextDecoder("utf-8");
                const r = n.decode(e);
                const a = r.split(".");
                if (a.length !== 3) {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to verify Lottie trust token JWT: invalid number of parts"
                    ])));
                    return false;
                }
                const i = a[1];
                const l = o("WABase64UrlSafe").urlSafeBase64ToStandard(i);
                const f = JSON.parse(atob(l));
                const g = f?.sticker_file_type === "lottie_json" && f?.sticker_file_trusted_origin === "whatsapp";
                if (!g) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to verify Lottie trust token JWT: payload is invalid"
                    ])));
                    return false;
                }
                const h = f?.sticker_file_sha256;
                if (!h) {
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to verify Lottie trust token JWT: sticker_file_sha256 is missing"
                    ])));
                    return false;
                }
                const y = yield F(t);
                if (!L(y, h)) {
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to verify Lottie trust token JWT: file hash does not match"
                    ])));
                    return false;
                }
                const C = a[0];
                const v = o("WABase64UrlSafe").urlSafeBase64ToStandard(C);
                const S = JSON.parse(atob(v));
                if (S?.kid !== b) {
                    o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to verify Lottie trust token JWT: invalid kid in header"
                    ])));
                    return false;
                }
                const R = a[2];
                const k = `${C}.${i}`;
                const I = yield E(R, k);
                if (I) {
                    return true;
                }
                o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to verify Lottie trust token JWT: invalid signature"
                ])));
                return false;
            } catch (error) {
                o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to verify Lottie trust token JWT ",
                    ""
                ])), error);
                return false;
            }
        });
        return z.apply(this, arguments);
    }
    function j(e, t) {
        const n = P(e);
        try {
            const o = JSON.parse(n);
            delete o[t];
            return JSON.stringify(o);
        } catch (error) {
            throw r("err")(`removeKeyFromString: Failed to parse lottie json ${String(error)}`);
        }
    }
    const K = 25;
    function Q(e) {
        const t = {};
        if (r("WAWebAuraGating").isStickersEnabled()) {
            t.premium = "1";
            t.rank = e >= K ? "1" : "0";
            if (o("WAWebABProps").getABPropConfigValue("sticker_store_testing_enabled")) {
                t.test = "1";
            }
        }
        return t;
    }
    function X() {
        const e = {};
        const t = o("WAWebABProps").getABPropConfigValue("gimmick_phase_two_data_suffix");
        const n = new URLSearchParams(t);
        n.forEach((t, n)=>{
            e[n] = t;
        });
        return e;
    }
    l.METADATA_OBJECT = g;
    l.LOTTIE_STICKER_FULL_WIDTH = fullWidth;
    l.LOTTIE_STICKER_FULL_HEIGHT = fullHeight;
    l.StickerFileType = I;
    l.getStickerFileType = T;
    l.extractMetaDataFromLottieSticker = D;
    l.parseStickerMetadata = x;
    l.removeSpacesAndEmptyLines = P;
    l.getLottieStickerFilehashFromZippedStickerBuffer = N;
    l.calculateLottieStickerFilehashWithoutMetadata = w;
    l.calculateLottieStickerFilehash = F;
    l.isLottieStickerFirstParty = q;
    l.isSecondaryLottieStickerFirstParty = V;
    l.removeKeyFromString = j;
    l.getPremiumParams = Q;
    l.getStickerFetchParamsFromABConfig = X;
}, 98);