__d("WAWebMessageEditMsgPreview.react", [
    "WAWebChatPreferenceCollection",
    "WAWebDisplayType",
    "WAWebFrontendMsgGetters",
    "WAWebMessagePosition",
    "WAWebMessageWrapper.react",
    "WAWebMsgPreview.react",
    "WAWebWrapperDisplayTypeContext",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = 100;
    const c = 70;
    const d = c - u / 2;
    const m = "x7xn9x5-B";
    const p = "xjqn293-B";
    const _ = {
        previewContainer: {
            maxHeight: "x7ab17h",
            $$css: true
        },
        previewBody: {
            animationDuration: "xw8ag78",
            animationFillMode: "x10e4vud",
            animationTimingFunction: null,
            $$css: true
        },
        pushUp: {
            animationName: "x1uej8s0",
            paddingTop: "x1yfp7c2",
            paddingBottom: "xo5ses6",
            marginBottom: "xat24cr",
            $$css: true
        },
        pushDown: {
            animationName: "x131uzpj",
            paddingTop: "x1cnzs8",
            paddingBottom: "xx6bls6",
            marginBottom: "xiv7p99",
            $$css: true
        },
        paddingHoriz28: {
            paddingInlineStart: "xdylf7x",
            paddingInlineEnd: "x5s3kwk",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        }
    };
    function f(e) {
        const t = o("react-compiler-runtime").c(13);
        const { linkPreviewVisible, msg } = e;
        let i;
        let chatPreference;
        if (t[0] !== msg) {
            const c = o("WAWebFrontendMsgGetters").getChat(msg.unsafe());
            i = r("WAWebMsgPreview.react");
            chatPreference = r("WAWebChatPreferenceCollection").get(c.id) ?? r("WAWebChatPreferenceCollection").assertGet("defaultPreference");
            t[0] = msg;
            t[1] = i;
            t[2] = chatPreference;
        } else {
            i = t[1];
            chatPreference = t[2];
        }
        const d = linkPreviewVisible && _.pushUp;
        const m = !linkPreviewVisible && _.pushDown;
        let bodyXstyle;
        if (t[3] !== d || t[4] !== m) {
            bodyXstyle = [
                _.previewBody,
                _.paddingHoriz28,
                d,
                m
            ];
            t[3] = d;
            t[4] = m;
            t[5] = bodyXstyle;
        } else {
            bodyXstyle = t[5];
        }
        let f;
        if (t[6] !== msg) {
            const Component = r("WAWebWrapperDisplayTypeContext").Provider;
            f = <div data-nohandle data-testid="edit-message-preview"><Component value={o("WAWebDisplayType").DISPLAY_TYPE.EDITING}>{s.jsx(r("WAWebMessageWrapper.react"), {
                msg,
                displayType: o("WAWebDisplayType").DISPLAY_TYPE.EDITING,
                position: o("WAWebMessagePosition").MsgPosition.END,
                showProfilePicture: false,
                errorBoundaryName: "edit-message-preview"
            })}</Component></div>;
            t[6] = msg;
            t[7] = f;
        } else {
            f = t[7];
        }
        let g;
        if (t[8] !== i || t[9] !== chatPreference || t[10] !== bodyXstyle || t[11] !== f) {
            g = s.jsx(i, {
                chatPreference,
                containerXstyle: _.previewContainer,
                bodyXstyle,
                children: f
            });
            t[8] = i;
            t[9] = chatPreference;
            t[10] = bodyXstyle;
            t[11] = f;
            t[12] = g;
        } else {
            g = t[12];
        }
        return g;
    }
    l.default = f;
}, 98);