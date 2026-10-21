__d("WAWebChatListFilterLabelsDropdownMenu.react", [
    "fbt",
    "WAWebDropdownItem.react",
    "WAWebLabelCollection",
    "WAWebLabels.react",
    "WAWebListUtils",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(10);
        const { hideHeader, unreadChatsCountMap, updateSearchFilter } = e;
        let i;
        if (t[0] !== hideHeader || t[1] !== unreadChatsCountMap || t[2] !== updateSearchFilter) {
            i = Symbol.for("react.early_return_sentinel");
            e: {
                const l = o("WAWebLabelCollection").LabelCollection.getChatLabelsWithUnarchivedAssociations();
                o("WAWebListUtils").sortLabels(l);
                let c;
                if (t[4] !== unreadChatsCountMap || t[5] !== updateSearchFilter) {
                    c = function(t, n) {
                        if (!n.name) {
                            return t;
                        }
                        const unreadCount = unreadChatsCountMap?.get(n.id) ?? 0;
                        const Component = o("WAWebDropdownItem.react").DropdownItem;
                        t.push(<Component key={`label_item_${n.id}`} testid={`label_item_${n.id}`} action={function() {
                            return updateSearchFilter(n.id);
                        }}><button className="x78zum5 x9f619 xh8yej3 x16ovd2e x1evaxtz x12xbjc7 xb0esv5 x6ikm8r x10wlt62 x1yc453h">{u.jsx(o("WAWebLabels.react").Labels, {
                            labels: [
                                n.id
                            ],
                            showName: true,
                            theme: "label-filter",
                            unreadCount
                        })}</button></Component>);
                        return t;
                    };
                    t[4] = unreadChatsCountMap;
                    t[5] = updateSearchFilter;
                    t[6] = c;
                } else {
                    c = t[6];
                }
                const d = l.reduce(c, []);
                if (d.length > 0) {
                    if (hideHeader !== true) {
                        let m;
                        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
                            m = {
                                className: "x889kno xsfy40s x1a8lsjc x13jy36j x14ug900"
                            };
                            t[7] = m;
                        } else {
                            m = t[7];
                        }
                        let p;
                        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
                            p = <div {...babelHelpers.extends({}, m, {
                                key: "chat_filter_label_header"
                            })}>{s._("Lists")}</div>;
                            t[8] = p;
                        } else {
                            p = t[8];
                        }
                        d.unshift(p);
                    }
                    i = d;
                    break e;
                }
            }
            t[0] = hideHeader;
            t[1] = unreadChatsCountMap;
            t[2] = updateSearchFilter;
            t[3] = i;
        } else {
            i = t[3];
        }
        if (i !== Symbol.for("react.early_return_sentinel")) {
            return i;
        }
        let f;
        if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
            f = [];
            t[9] = f;
        } else {
            f = t[9];
        }
        return f;
    }
    l.default = c;
}, 226);