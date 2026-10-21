__d("WAWebFetchFirstPartyStickerPacksAction", [
    "WAWebL10N",
    "WAWebL10NCountryCodes",
    "WAWebPonyfillsFetch",
    "WAWebRecentStickerCollectionMd",
    "WAWebServerErrors",
    "WAWebStickerCommonQueryToStaticServerWamEvent",
    "WAWebStickerUtils",
    "WAWebURLUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumQueryType",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = "https://static.whatsapp.net/sticker";
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const a = o("WAWebStickerUtils").getStickerFetchParamsFromABConfig();
            const i = babelHelpers.extends({}, a, t);
            const l = r("WAWebURLUtils").build(e, i);
            const s = new (o("WAWebStickerCommonQueryToStaticServerWamEvent")).StickerCommonQueryToStaticServerWamEvent;
            s.startQueryLatencyMs();
            const u = yield r("WAWebPonyfillsFetch")(l, {
                signal: n.signal
            });
            s.markQueryLatencyMs();
            s.set({
                httpResponseCode: u.status,
                params: new URLSearchParams(i).toString(),
                queryType: o("WAWebWamEnumQueryType").QUERY_TYPE.STICKER_PACK_DATA
            });
            s.commit();
            if (!u.ok) {
                throw new (o("WAWebServerErrors")).InvalidServerResponseError(l, u.status.toString(), "Invalid response from WhatsApp stickers endpoint");
            }
            const c = yield u.json();
            if (c == null || c.length === 0) {
                throw new (o("WAWebServerErrors")).InvalidServerResponseError(l, u.status.toString(), `Invalid response from WhatsApp stickers endpoint: ${JSON.stringify(c)}`);
            }
            return c;
        });
        return u.apply(this, arguments);
    }
    function c(e, t) {
        const r = {
            id: e["sticker-pack-id"],
            name: e.name,
            publisher: e.publisher,
            description: e.description,
            fileSize: Number(e["file-size"]),
            imageDataHash: e["image-data-hash"],
            animated: e.animated === 1,
            isLottie: e.lottie === 1,
            premium: e.premium ?? 0,
            previewImageIds: e["preview-image-ids"],
            trayImageId: e["tray-image-id"],
            trayImagePreview: e["tray-image-preview"],
            index: t ?? 0
        };
        return r;
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const n = r("WAWebL10N").getNormalizedLocale();
            const country = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(o("WAWebUserPrefsMeUser").getMaybeMePnUser()?.user) || "default";
            const i = babelHelpers.extends({}, o("WAWebStickerUtils").getPremiumParams(o("WAWebRecentStickerCollectionMd").RecentStickerCollectionMd.length), {
                cat: "sticker_store_data",
                id: "all",
                lg: n,
                country
            });
            const l = yield s(i, {
                signal: e.signal
            });
            return l.map((e, t)=>c(e, t));
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = r("WAWebL10N").getNormalizedLocale();
            const n = babelHelpers.extends({}, o("WAWebStickerUtils").getPremiumParams(o("WAWebRecentStickerCollectionMd").RecentStickerCollectionMd.length), {
                cat: "sticker_pack_data",
                id: e.id,
                lg: t
            });
            const a = yield s(n, {
                signal: e.signal
            });
            const i = a[0];
            return c(i);
        });
        return _.apply(this, arguments);
    }
    l.fetchFirstPartyStickerPacks = d;
    l.fetchFirstPartyStickerPack = p;
}, 98);