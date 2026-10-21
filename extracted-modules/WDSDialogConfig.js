__d("WDSDialogConfig", [], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        container: {
            backgroundColor: "x16w0wmm",
            borderStartStartRadius: "xuqqiot",
            borderStartEndRadius: "x1lkg3h2",
            borderEndEndRadius: "x17mbzc4",
            borderEndStartRadius: "xcouhex",
            boxShadow: "x1hdfv4t",
            boxSizing: "x9f619",
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            position: "x1n2onr6",
            $$css: true
        },
        header: {
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            overflowWrap: "xj0a0fe",
            paddingInlineStart: "xb0esv5",
            paddingInlineEnd: "xyo0t3i",
            paddingLeft: null,
            paddingRight: null,
            paddingTop: "xl7twdi",
            rowGap: "x129bwdz",
            $$css: true
        },
        headerAfterMedia: {
            paddingTop: "xexx8yu",
            rowGap: "x1qvou4u",
            $$css: true
        },
        topBar: {
            alignItems: "x1cy8zhl",
            columnGap: "x1s70e7g",
            display: "x78zum5",
            minHeight: "x1ba4aug",
            $$css: true
        },
        titleWrapper: {
            alignItems: "x6s0dn4",
            display: "x78zum5",
            flexBasis: "x1t1x2f9",
            flexGrow: "x1iyjqo2",
            flexShrink: "xs83m0k",
            minHeight: "x1ba4aug",
            minWidth: "xeuugli",
            overflowWrap: "xj0a0fe",
            $$css: true
        },
        body: {
            paddingInlineStart: "xb0esv5",
            paddingInlineEnd: "xyo0t3i",
            paddingLeft: null,
            paddingRight: null,
            paddingTop: "xl7twdi",
            $$css: true
        },
        footer: {
            display: "x78zum5",
            justifyContent: "x13a6bvl",
            paddingBottom: "xvg22vi",
            paddingInlineStart: "xb0esv5",
            paddingInlineEnd: "xyo0t3i",
            paddingLeft: null,
            paddingRight: null,
            paddingTop: "xl7twdi",
            $$css: true
        },
        headerMedia: {
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: true
        }
    };
    const s = {
        body: {
            paddingTop: "x1p57kb1",
            $$css: true
        },
        header: {
            rowGap: "x1f0uite",
            $$css: true
        },
        titleWrapper: {
            minHeight: "x65nank",
            $$css: true
        },
        topBar: {
            minHeight: "x65nank",
            $$css: true
        }
    };
    const u = {
        container: {
            paddingBottom: "xvpt6g3",
            paddingTop: "xl7twdi",
            paddingInlineStart: "xdx6fka",
            paddingInlineEnd: "xvtqlqk",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        },
        header: {
            paddingInlineStart: "x12w63v0",
            paddingInlineEnd: "x1nzty39",
            paddingLeft: null,
            paddingRight: null,
            paddingTop: "xexx8yu",
            rowGap: "x1qvou4u",
            $$css: true
        },
        body: {
            paddingInlineStart: "x12w63v0",
            paddingInlineEnd: "x1nzty39",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        },
        footer: {
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            paddingInlineEnd: "xyri2b",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        }
    };
    const c = {
        sm: {
            width: "xdtcc9p",
            $$css: true
        },
        md: {
            width: "x3qjwna",
            $$css: true
        },
        lg: {
            width: "xql66rd",
            $$css: true
        },
        xl: {
            width: "x1vwlgnz",
            $$css: true
        }
    };
    function d(t, n = "functional", r = "functional") {
        const o = r === "expressive";
        if (n === "expressive") {
            return {
                body: [
                    e.body,
                    o && s.body,
                    u.body
                ],
                container: [
                    e.container,
                    c[t],
                    u.container
                ],
                footer: [
                    e.footer,
                    u.footer
                ],
                header: [
                    e.header,
                    u.header,
                    o && s.header
                ],
                headerAfterMedia: [
                    e.headerAfterMedia,
                    o && s.header
                ],
                headerMedia: e.headerMedia,
                titleWrapper: [
                    e.titleWrapper,
                    o && s.titleWrapper
                ],
                topBar: [
                    e.topBar,
                    o && s.topBar
                ]
            };
        }
        return {
            body: [
                e.body,
                o && s.body
            ],
            container: [
                e.container,
                c[t]
            ],
            footer: [
                e.footer
            ],
            header: [
                e.header,
                o && s.header
            ],
            headerAfterMedia: [
                e.headerAfterMedia,
                o && s.header
            ],
            headerMedia: e.headerMedia,
            titleWrapper: [
                e.titleWrapper,
                o && s.titleWrapper
            ],
            topBar: [
                e.topBar,
                o && s.topBar
            ]
        };
    }
    l.getDialogStyles = d;
}, 98);