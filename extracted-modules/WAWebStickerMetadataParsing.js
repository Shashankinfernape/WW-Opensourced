__d("WAWebStickerMetadataParsing", [
    "WAWebStickerPremiumStatus",
    "WAWebWebpMetadata"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        isFirstParty: false,
        isFromStickerMaker: false,
        emojis: [],
        stickerPackId: null,
        stickerPackName: null,
        stickerPackPublisher: null,
        stickerPackPlayStoreLink: null,
        stickerPackAppleStoreLink: null,
        isAvatar: false,
        stickerPremiumStatus: o("WAWebStickerPremiumStatus").StickerPremiumStatus.NONE,
        isAiSticker: false,
        stickerMakerSourceType: null,
        accessibilityLabel: null
    };
    const s = {
        isFirstParty: "is-first-party-sticker",
        isFromStickerMaker: "is-from-sticker-maker",
        emojis: "emojis",
        stickerPackId: "sticker-pack-id",
        stickerPackName: "sticker-pack-name",
        stickerPackPublisher: "sticker-pack-publisher",
        stickerPackPlayStoreLink: "android-app-store-link",
        stickerPackAppleStoreLink: "ios-app-store-link",
        isAvatar: "is-avatar-sticker",
        stickerPremiumStatus: "premium",
        isAiSticker: "is-ai-sticker",
        stickerMakerSourceType: "sticker-maker-source-type",
        accessibilityLabel: "accessibility-text"
    };
    function u(t) {
        const n = t[s.isFirstParty];
        const r = t[s.isFromStickerMaker];
        const a = t[s.emojis];
        const i = t[s.stickerPackId];
        const l = t[s.stickerPackName];
        const u = t[s.stickerPackPublisher];
        const c = t[s.stickerPackPlayStoreLink];
        const d = t[s.stickerPackAppleStoreLink];
        const m = t[s.isAvatar];
        const p = t[s.stickerPremiumStatus];
        const _ = t[s.isAiSticker];
        const f = o("WAWebWebpMetadata").StickerMakerSourceType.cast(t[s.stickerMakerSourceType]);
        const g = t[s.accessibilityLabel];
        const h = babelHelpers.extends({}, e);
        if (n != null) {
            const y = n === 1;
            h.isFirstParty = y;
        }
        if (r != null) {
            const C = r === 1;
            h.isFromStickerMaker = C;
        }
        if (a != null && Array.isArray(a)) {
            h.emojis = a;
        }
        if (i != null) {
            h.stickerPackId = i;
        }
        if (l != null) {
            h.stickerPackName = l;
        }
        if (u != null) {
            h.stickerPackPublisher = u;
        }
        if (c != null) {
            h.stickerPackPlayStoreLink = c;
        }
        if (d != null) {
            h.stickerPackAppleStoreLink = d;
        }
        if (m != null) {
            const b = m === 1;
            h.isAvatar = b;
        }
        if (p != null) {
            h.stickerPremiumStatus = o("WAWebStickerPremiumStatus").StickerPremiumStatus.cast(p) ?? o("WAWebStickerPremiumStatus").StickerPremiumStatus.NONE;
        }
        if (_ != null) {
            const S = _ === 1;
            h.isAiSticker = S;
        }
        if (f != null) {
            h.stickerMakerSourceType = f;
        }
        if (g != null) {
            h.accessibilityLabel = g;
        }
        return h;
    }
    l.DEFAULT_STICKER_METADATA = e;
    l.STICKER_METADATA_FIELDS = s;
    l.toStickerMetadata = u;
}, 98);