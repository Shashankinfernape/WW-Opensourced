__d("WAWebManageListButton.react", [
    "fbt",
    "WAWebCreateOrEditListDrawer.react",
    "WAWebDrawerManager",
    "WAWebTabOrder",
    "WAWebUnstyledButton.react",
    "WAWebWamEnumUpdateEntryPoint",
    "WDSFontTokenStyles",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
        button: {
            cursor: "x1ypdohk",
            display: "x78zum5",
            maxWidth: "x193iq5w",
            minWidth: "xeuugli",
            $$css: true
        },
        manageListText: {
            color: "xk4n5i7",
            display: "x1lliihq",
            maxWidth: "x193iq5w",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            textOverflow: "xlyipyv",
            whiteSpace: "xuxw1ft",
            $$css: true
        }
    };
    function m(t) {
        const n = o("react-compiler-runtime").c(17);
        const { listId, listName } = t;
        let l;
        if (n[0] !== listId) {
            l = function() {
                const Component = r("WAWebCreateOrEditListDrawer.react");
                o("WAWebDrawerManager").DrawerManager.openDrawerLeft(<Component listId={listId} onBack={o("WAWebDrawerManager").closeDrawerLeft} onClose={o("WAWebDrawerManager").closeDrawerLeft} entryPoint={o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_LIST_FILTER_MANAGE}/>, {
                    focusOnUnMount: true
                });
            };
            n[0] = listId;
            n[1] = l;
        } else {
            l = n[1];
        }
        const u = l;
        let m;
        if (n[2] !== listName) {
            m = s._("Manage {listName}", [
                s._param("listName", listName)
            ]);
            n[2] = listName;
            n[3] = m;
        } else {
            m = n[3];
        }
        const p = m;
        let _;
        if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
            _ = {
                className: "x78zum5 x6s0dn4 xl56j7k xdd8jsf x1phvje8 xcldk2z"
            };
            n[4] = _;
        } else {
            _ = n[4];
        }
        let f;
        if (n[5] !== p) {
            f = p.toString();
            n[5] = p;
            n[6] = f;
        } else {
            f = n[6];
        }
        let g;
        if (n[7] === Symbol.for("react.memo_cache_sentinel")) {
            g = (e || (e = r("stylex"))).props(o("WDSFontTokenStyles").WDSFontTokenStyles.Body1, d.manageListText);
            n[7] = g;
        } else {
            g = n[7];
        }
        let h;
        if (n[8] !== listName) {
            h = s._("Manage {listName}", [
                s._param("listName", listName)
            ]);
            n[8] = listName;
            n[9] = h;
        } else {
            h = n[9];
        }
        let y;
        if (n[10] !== listName || n[11] !== h) {
            y = <span {...babelHelpers.extends({
                title: listName
            }, g, {
                children: h
            })}/>;
            n[10] = listName;
            n[11] = h;
            n[12] = y;
        } else {
            y = n[12];
        }
        let C;
        if (n[13] !== u || n[14] !== f || n[15] !== y) {
            const Component = r("WAWebUnstyledButton.react");
            C = <div {...babelHelpers.extends({}, _, {
                children: <Component aria-label={f} dataTab={o("WAWebTabOrder").TAB_ORDER.CHAT_LIST} onClick={u} testid="manage-list-button" xstyle={d.button}>{y}</Component>
            })}/>;
            n[13] = u;
            n[14] = f;
            n[15] = y;
            n[16] = C;
        } else {
            C = n[16];
        }
        return C;
    }
    l.default = m;
}, 226);