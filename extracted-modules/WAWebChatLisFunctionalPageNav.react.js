__d("WAWebChatLisFunctionalPageNav.react", [
    "WAWebChatlistPageNavigation.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const useCallback = (e || (e = o("react"))).useCallback;
    function u(e) {
        const t = o("react-compiler-runtime").c(9);
        const { selection, setSelectedChat } = e;
        let a;
        if (t[0] !== selection || t[1] !== setSelectedChat) {
            a = function(t) {
                o("WAWebChatlistPageNavigation.react").handlePageNavigation({
                    event: t,
                    direction: "down",
                    selection,
                    setSelectedChat
                });
            };
            t[0] = selection;
            t[1] = setSelectedChat;
            t[2] = a;
        } else {
            a = t[2];
        }
        const handlePageDown = a;
        let l;
        if (t[3] !== selection || t[4] !== setSelectedChat) {
            l = function(t) {
                o("WAWebChatlistPageNavigation.react").handlePageNavigation({
                    event: t,
                    direction: "up",
                    selection,
                    setSelectedChat
                });
            };
            t[3] = selection;
            t[4] = setSelectedChat;
            t[5] = l;
        } else {
            l = t[5];
        }
        const handlePageUp = l;
        let u;
        if (t[6] !== handlePageDown || t[7] !== handlePageUp) {
            u = {
                handlePageDown,
                handlePageUp
            };
            t[6] = handlePageDown;
            t[7] = handlePageUp;
            t[8] = u;
        } else {
            u = t[8];
        }
        return u;
    }
    l.usePageNavigation = u;
}, 98);