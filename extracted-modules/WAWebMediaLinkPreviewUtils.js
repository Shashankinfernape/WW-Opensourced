__d("WAWebMediaLinkPreviewUtils", [
    "WATimeUtils",
    "WAWebDisplayType"
], function(t, n, r, o, a, i, l) {
    const e = 2592000;
    function s(t) {
        const n = o("WATimeUtils").unixTime() - t > e;
        return n;
    }
    function u(e, t) {
        return e !== o("WAWebDisplayType").DISPLAY_TYPE.STATUS && e !== o("WAWebDisplayType").DISPLAY_TYPE.GALLERY && t !== "bot_plugin_link" && t !== "high-quality" && t !== "high-quality-extended";
    }
    const c = 7 / 5;
    function d(e, t) {
        let linkPreviewTheme;
        let bubbleTheme;
        if (e) {
            const o = m(e.unsafe(), t);
            if (o && e?.thumbnailHeight != null && e?.thumbnailWidth != null) {
                const a = e.thumbnailHeight / e.thumbnailWidth;
                bubbleTheme = a >= 1 ? "portrait" : "landscape";
                linkPreviewTheme = "high-quality";
            }
        }
        return {
            bubbleTheme,
            linkPreviewTheme
        };
    }
    function m(e, t) {
        const n = (!!e.thumbnailDirectPath || !!e.thumbnailHQ) && e.thumbnailHeight != null && e.thumbnailWidth != null;
        if (!n) {
            return false;
        }
        const r = s(e.t);
        if (r) {
            return false;
        }
        const a = t === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY;
        if (a) {
            return false;
        }
        if (t === o("WAWebDisplayType").DISPLAY_TYPE.STATUS && e.thumbnailHeight != null && e.thumbnailWidth != null) {
            return e.thumbnailWidth / e.thumbnailHeight >= c;
        }
        return true;
    }
    l.HQ_PREVIEW_LIFESPAN = e;
    l.hqLinkPreviewExpired = s;
    l.supportsCallLinkCard = u;
    l.getLinkPreviewThemes = d;
    l.displayHighQualityLinkPreview = m;
}, 98);