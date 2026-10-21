__d("WAWebImagineURImage.react", [
    "fbt",
    "WAWebImagineImageViewerModalLoadable",
    "WAWebImg.react",
    "WAWebModalManager",
    "react",
    "react-compiler-runtime",
    "useWAWebStaticButtonA11y"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useCallback, useRef } = c;
    function p(e) {
        const t = o("react-compiler-runtime").c(13);
        const { mediaUrl, msgTimestamp } = e;
        const iRef = useRef(null);
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = function() {
                return iRef.current;
            };
            t[0] = l;
        } else {
            l = t[0];
        }
        const getZoomNode = l;
        let d;
        if (t[1] !== mediaUrl || t[2] !== msgTimestamp) {
            d = function() {
                o("WAWebModalManager").ModalManager.openMedia(u.jsx(o("WAWebImagineImageViewerModalLoadable").WAWebImagineImageViewerModalLoadable, {
                    mediaUrl,
                    saveTimestamp: msgTimestamp,
                    getZoomNode
                }));
            };
            t[1] = mediaUrl;
            t[2] = msgTimestamp;
            t[3] = d;
        } else {
            d = t[3];
        }
        const _ = r("useWAWebStaticButtonA11y")(d);
        const f = _[0];
        const g = _[1];
        let h;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            h = {
                className: "x1i282gy xx9ypkp xd15eu0 x11ecxm0 x6ikm8r x10wlt62 x1n2onr6 xh8yej3 x1ypdohk"
            };
            t[4] = h;
        } else {
            h = t[4];
        }
        let y;
        let C;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            y = s._("Meta AI generated image").toString();
            C = "x1lliihq xh8yej3 xt7dq6l";
            t[5] = y;
            t[6] = C;
        } else {
            y = t[5];
            C = t[6];
        }
        let b;
        if (t[7] !== mediaUrl) {
            const Component = r("WAWebImg.react");
            b = <Component ref={iRef} src={mediaUrl} alt={y} className={C} testid="meta_ai_chat_imagine_image"/>;
            t[7] = mediaUrl;
            t[8] = b;
        } else {
            b = t[8];
        }
        let v;
        if (t[9] !== g || t[10] !== f || t[11] !== b) {
            v = <div {...babelHelpers.extends({
                ref: f
            }, g, h, {
                "data-testid": "meta_ai_chat_imagine_image_button",
                children: b
            })}/>;
            t[9] = g;
            t[10] = f;
            t[11] = b;
            t[12] = v;
        } else {
            v = t[12];
        }
        return v;
    }
    l.default = p;
}, 226);