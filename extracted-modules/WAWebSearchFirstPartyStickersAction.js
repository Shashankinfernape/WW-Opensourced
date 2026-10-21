__d("WAWebSearchFirstPartyStickersAction", [
    "WAWebCurrentUser",
    "WAWebL10NCountryCodes",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "WAWebMediaHostsUtil",
    "WAWebPonyfillsFetch",
    "WAWebServerErrors",
    "WAWebStickerCommonQueryToStaticServerWamEvent",
    "WAWebStickerModel",
    "WAWebStickerUtils",
    "WAWebURLUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumQueryType",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = 250;
    const s = "https://static.whatsapp.net";
    const u = "/sticker";
    const c = "/wa/static/sticker";
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const i = o("WAWebUserPrefsMeUser").getMaybeMePnUser()?.user;
            const l = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(i);
            if (o("WAWebCurrentUser").isEmployee() && i != null) {
                o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").compareCountryCodeOutput(i, l, "searchFirstPartyStickers");
            }
            const country = l || "default";
            for(var m = 0, p = 0; m <= e;){
                m += 3 + encodeURIComponent(t[p++]).length;
            }
            const terms = t.slice(0, p - 1).join(",");
            const f = {
                country
            };
            const g = yield o("WAWebMediaHostsUtil").getStaticMediaHostName();
            const h = g === s ? `${g}${u}` : `${g}${c}`;
            const y = o("WAWebStickerUtils").getStickerFetchParamsFromABConfig();
            const C = r("WAWebURLUtils").build(h, babelHelpers.extends({}, y, {
                cat: "sticker_search",
                terms,
                _nc_cat: 1
            }, f));
            const b = new (o("WAWebStickerCommonQueryToStaticServerWamEvent")).StickerCommonQueryToStaticServerWamEvent;
            b.startQueryLatencyMs();
            const v = yield r("WAWebPonyfillsFetch")(C, {
                signal: n?.signal
            });
            b.markQueryLatencyMs();
            b.set({
                httpResponseCode: v.status,
                params: new URLSearchParams(f).toString(),
                queryType: o("WAWebWamEnumQueryType").QUERY_TYPE.STICKER_SEARCH
            });
            b.commit();
            if (!v.ok) {
                throw new (o("WAWebServerErrors")).InvalidServerResponseError(C, v.status.toString(), "Invalid response from WhatsApp stickers endpoint");
            }
            const S = yield v.json();
            if (S == null) {
                throw new (o("WAWebServerErrors")).InvalidServerResponseError(C, v.status.toString(), `Invalid response from WhatsApp stickers endpoint: ${JSON.stringify(S)}`);
            }
            return S.map((e, t)=>new (o("WAWebStickerModel")).StickerModel({
                    mimetype: e.mimetype,
                    width: e.width,
                    height: e.height,
                    filehash: e["file-hash"],
                    directPath: e["direct-path"],
                    mediaKey: e["media-key"],
                    id: e["file-hash"],
                    encFilehash: e["enc-file-hash"],
                    mediaKeyTimestamp: 0,
                    index: t
                }));
        });
        return m.apply(this, arguments);
    }
    l.searchFirstPartyStickers = d;
}, 98);