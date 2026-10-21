__d("WAWebMediaUrlProvider", [
    "WALogger",
    "WAWebCryptoImageStreamer",
    "WAWebMediaDataGetters",
    "WAWebMediaTypes",
    "react",
    "useWAWebInMemoryMediaBlobCache",
    "useWAWebMediaDataValues",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useEffect, useMemo, useState } = d;
    const f = [];
    function GComponent({ children, downloadMedia, mediaData, placeholderRenderer, renderProgressively = false }) {
        const g = o("useWAWebMediaDataValues").useMediaDataValues(mediaData, [
            o("WAWebMediaDataGetters").getFilehash,
            o("WAWebMediaDataGetters").getMediaStage,
            o("WAWebMediaDataGetters").getProgressiveStage
        ]);
        const h = g[0];
        const y = g[1];
        const C = g[2];
        const b = useState(f);
        const v = b[0];
        const S = b[1];
        const R = useMemo(function() {
            if (C != null) {
                return o("WAWebCryptoImageStreamer").getProgressiveMediaCacheKey(h, C);
            }
            return null;
        }, [
            h,
            C
        ]);
        const L = R != null && y !== o("WAWebMediaTypes").MediaDataStage.RESOLVED ? R : h;
        const E = r("useWAWebInMemoryMediaBlobCache")(L);
        const k = useState(h);
        const I = k[0];
        const T = k[1];
        const D = useState(null);
        const x = D[0];
        const $ = D[1];
        if (I !== h) {
            S(E != null ? [
                E
            ] : []);
            T(h);
            $(E);
        } else if (E != null && E !== x) {
            S([].concat(v, [
                E
            ]));
            $(E);
        }
        const P = r("useWAWebStableCallback")(function() {
            if (R == null || !renderProgressively) {
                let t;
                if (!(downloadMedia == null || (t = downloadMedia()) == null)) {
                    t.catch(()=>{
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "MediaUrlProvider: downloadMedia failed"
                        ]))).sendLogs("media-url-provider-download-failed", {
                            sampling: 0.01
                        });
                    });
                }
            }
        });
        useEffect(function() {
            P();
        }, [
            h,
            P
        ]);
        useEffect(function() {
            if (E == null) {
                if (y !== o("WAWebMediaTypes").MediaDataStage.RESOLVED && R != null) {
                    const e = h.slice(0, 10);
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "blob missing hash: ",
                        " progStage: ",
                        " mediaStage: ",
                        ""
                    ])), e, C, y).sendLogs("missing-progressive-blob");
                }
                return;
            }
        }, [
            E,
            y,
            R,
            h,
            C
        ]);
        if (E == null) {
            return placeholderRenderer();
        }
        if (renderProgressively === true) {
            return <div className="x1n2onr6 xh8yej3 x5yr21d" data-testid="media-url-provider"><div className="x10l6tqk x1vjfegm x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d">{placeholderRenderer()}</div>{v.map((e)=><div key={e} className="x10l6tqk x1vjfegm x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d">{children(e)}</div>)}</div>;
        }
        return children(E);
    }
    GComponent.displayName = `${GComponent.name} [from ${i.id}]`;
    l.default = GComponent;
}, 98);