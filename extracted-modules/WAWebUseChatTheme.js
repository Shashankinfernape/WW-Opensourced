__d("WAWebUseChatTheme", [
    "JSResourceForInteraction",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useState } = s;
    const d = r("JSResourceForInteraction")("WAWebChatThemeDefinitions.stylex").__setRef("WAWebUseChatTheme");
    function useM(e) {
        const t = o("react-compiler-runtime").c(5);
        let n;
        if (t[0] !== e) {
            n = e === undefined ? {
                isChatThemeEnabled: false
            } : e;
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        const n_isChatThemeEnabled = n.isChatThemeEnabled;
        const i = useState(null);
        const l = i[0];
        const s = i[1];
        let m;
        let p;
        if (t[2] !== n_isChatThemeEnabled) {
            m = function() {
                if (n_isChatThemeEnabled === true) {
                    let e = false;
                    d.load().then((t)=>{
                        if (!e) {
                            s({
                                getAllColorSchemes: t.getAllColorSchemes,
                                getAllThemes: t.getAllThemes,
                                getBaseTheme: t.getBaseTheme,
                                getBubbleTheme: t.getBubbleTheme,
                                getChatTheme: t.getChatTheme,
                                getColorSchemeName: t.getColorSchemeName,
                                getDoodleThemeOrder: t.getDoodleThemeOrder,
                                isMinimalScheme: t.isMinimalScheme
                            });
                        }
                    });
                    return function() {
                        e = true;
                    };
                }
            };
            p = [
                n_isChatThemeEnabled
            ];
            t[2] = n_isChatThemeEnabled;
            t[3] = m;
            t[4] = p;
        } else {
            m = t[3];
            p = t[4];
        }
        useEffect(m, p);
        if (n_isChatThemeEnabled === true) {
            return l;
        }
        return null;
    }
    l.useLazyChatThemeDefinitions = useM;
}, 98);