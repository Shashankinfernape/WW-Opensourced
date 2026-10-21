__d("WAWebChatListFilters.react", [
    "fbt",
    "WALogger",
    "WAWebABProps",
    "WAWebAnimatedPillWidth.react",
    "WAWebChatAssignmentUtils",
    "WAWebChatCollection",
    "WAWebChatListAiStatusFilterPills",
    "WAWebChatListFilterListsDropdown.react",
    "WAWebChatListFiltersDynamic.react",
    "WAWebChatListFiltersNewListButton.react",
    "WAWebChatSearchFilters",
    "WAWebCmd",
    "WAWebFilterLogging",
    "WAWebInboxFiltersGatingUtils",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebL10NIsUsingSupportedBritishEnglishLocale",
    "WAWebLabelCollection",
    "WAWebListFilterButton.react",
    "WAWebListUtils",
    "WAWebListsGatingUtils",
    "WAWebNewsletterChatListUtils",
    "WAWebNewsletterCollection",
    "WAWebSchemaLabel",
    "WAWebTabOrder",
    "isStringNullOrEmpty",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useWAWebForceUpdate",
    "useWAWebIsChannelsInChatListEnabled",
    "useWAWebListener",
    "useWAWebWindowSize"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    const C = [
        "ref"
    ];
    const b = [
        "ref"
    ];
    let v;
    const S = v || (v = o("react"));
    const R = v;
    const { useEffect, useImperativeHandle, useRef } = R;
    const I = {
        id: "all-filter",
        getLabel: function() {
            return s._("All");
        },
        testid: "all-filter"
    };
    const T = {
        id: "unread-filter",
        filter: o("WAWebChatSearchFilters").SearchFilters.UNREAD,
        getLabel: function() {
            return s._("Unread");
        },
        listType: o("WAWebSchemaLabel").ListType.UNREAD,
        testid: "unread-filter",
        count: 0
    };
    const D = {
        id: "group-filter",
        filter: o("WAWebChatSearchFilters").SearchFilters.GROUP,
        getLabel: function() {
            return s._("Groups");
        },
        listType: o("WAWebSchemaLabel").ListType.GROUPS,
        testid: "group-filter",
        count: 0
    };
    const x = {
        id: "favorites-filter",
        filter: o("WAWebChatSearchFilters").SearchFilters.FAVORITES,
        getLabel: function() {
            if (o("WAWebL10NIsUsingSupportedBritishEnglishLocale").isUsingSupportedBritishEnglishLocale()) {
                return s._("Favourites");
            }
            return s._("Favourites");
        },
        listType: o("WAWebSchemaLabel").ListType.FAVORITES,
        testid: "favorites-filter",
        count: 0
    };
    const $ = {
        id: "assigned-to-you-filter",
        filter: o("WAWebChatSearchFilters").SearchFilters.ASSIGNED_TO_YOU,
        getLabel: function() {
            return s._("Assigned to you");
        },
        testid: "assigned-to-you-filter"
    };
    const P = {
        id: "channels-filter",
        filter: o("WAWebChatSearchFilters").SearchFilters.CHANNELS,
        getLabel: function() {
            return s._("Channels");
        },
        listType: o("WAWebSchemaLabel").ListType.CHANNELS,
        testid: "channels-filter",
        count: 0
    };
    const N = {
        id: "to-you-filter",
        filter: o("WAWebChatSearchFilters").SearchFilters.TO_YOU,
        getLabel: function() {
            return r("nullthrows")(o("WAWebListUtils").getPresetListLocalizedName(o("WAWebSchemaLabel").ListType.MENTIONS_AND_REPLIES));
        },
        listType: o("WAWebSchemaLabel").ListType.MENTIONS_AND_REPLIES,
        testid: "to-you-filter"
    };
    const M = (type)=>{
        if (type === o("WAWebSchemaLabel").ListType.UNREAD) {
            return T.getLabel;
        }
        if (type === o("WAWebSchemaLabel").ListType.GROUPS) {
            return D.getLabel;
        }
        if (type === o("WAWebSchemaLabel").ListType.FAVORITES) {
            return x.getLabel;
        }
        if (type === o("WAWebSchemaLabel").ListType.MENTIONS_AND_REPLIES) {
            return N.getLabel;
        }
        return null;
    };
    const w = (type)=>{
        if (type == null) {
            return o("WAWebChatSearchFilters").SearchFilters.LABELS;
        }
        if (type === o("WAWebSchemaLabel").ListType.NONE || type === o("WAWebSchemaLabel").ListType.SERVER_ASSIGNED || type === o("WAWebSchemaLabel").ListType.DRAFTED || type === o("WAWebSchemaLabel").ListType.AI_HANDOFF || type === o("WAWebSchemaLabel").ListType.CHANNELS || type === o("WAWebSchemaLabel").ListType.AI_RESPONDING) {
            return null;
        }
        if (type === o("WAWebSchemaLabel").ListType.UNREAD) {
            return o("WAWebChatSearchFilters").SearchFilters.UNREAD;
        }
        if (type === o("WAWebSchemaLabel").ListType.GROUPS) {
            return o("WAWebChatSearchFilters").SearchFilters.GROUP;
        }
        if (type === o("WAWebSchemaLabel").ListType.FAVORITES) {
            return o("WAWebChatSearchFilters").SearchFilters.FAVORITES;
        }
        if (type === o("WAWebSchemaLabel").ListType.COMMUNITY) {
            return o("WAWebChatSearchFilters").SearchFilters.COMMUNITY;
        }
        if (type === o("WAWebSchemaLabel").ListType.MENTIONS_AND_REPLIES) {
            return o("WAWebChatSearchFilters").SearchFilters.TO_YOU;
        }
        if (type === o("WAWebSchemaLabel").ListType.PREDEFINED || type === o("WAWebSchemaLabel").ListType.CUSTOM || type === o("WAWebSchemaLabel").ListType.LEAD) {
            return o("WAWebChatSearchFilters").SearchFilters.LABELS;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${type}`);
        })();
    };
    const A = (item)=>{
        if (item.type === o("WAWebSchemaLabel").ListType.AI_HANDOFF) {
            return "var(--WDS-secondary-negative)";
        }
        if (item.type === o("WAWebSchemaLabel").ListType.AI_RESPONDING) {
            return "var(--WDS-secondary-positive)";
        }
        if (item.colorIndex != null) {
            return o("WAWebListUtils").colorIndexToHex(item.colorIndex);
        }
        return item.color;
    };
    const F = (t)=>{
        const e = B(t);
        if (e === -1) {
            t.push(N);
        } else {
            t.splice(e, 0, N);
        }
    };
    const O = (t)=>{
        const e = t.findIndex((e)=>e.filter === o("WAWebChatSearchFilters").SearchFilters.GROUP);
        const n = e === -1 ? B(t) : e + 1;
        if (n === -1) {
            t.push(P);
        } else {
            t.splice(n, 0, P);
        }
    };
    function B(e) {
        return e.findIndex((e)=>e.listId != null && !o("WAWebListUtils").isBuiltInList(e.listType) && e.listType !== o("WAWebSchemaLabel").ListType.AI_HANDOFF && e.listType !== o("WAWebSchemaLabel").ListType.AI_RESPONDING);
    }
    const W = ({ assignChatsEnabled, channelsInChatListEnabled, favoritesEnabled })=>{
        let i = [
            I,
            T
        ];
        const l = o("WAWebChatListAiStatusFilterPills").getAiStatusFilterPills();
        i.push(...l);
        if (favoritesEnabled) {
            i.push(x);
        }
        i.push(D);
        if (assignChatsEnabled) {
            i.push($);
        }
        const s = o("WAWebInboxFiltersGatingUtils").inboxToYouFilterEnabled();
        if (o("WAWebLabelCollection").LabelCollection.length !== 0) {
            const c = o("WAWebLabelCollection").LabelCollection.toArray();
            o("WAWebListUtils").sortLabels(c);
            i = o("WAWebChatListAiStatusFilterPills").withoutRelocatedAiPills(i, l, c.map((e)=>e.type));
            const d = new Set;
            const m = c.reduce((acc, item)=>{
                if (o("WAWebListUtils").isAiList(item.type)) {
                    const r = o("WAWebChatListAiStatusFilterPills").getAiPillForListType(l, item.type);
                    if (r != null) {
                        acc.push(r);
                    }
                    return acc;
                }
                if (!item.name || o("WAWebListUtils").isHiddenToYouList(item.type) || item.type === o("WAWebSchemaLabel").ListType.CHANNELS) {
                    return acc;
                }
                const a = w(item.type);
                if (o("WAWebListUtils").isBuiltInList(item.type)) {
                    if (d.has(item.type)) {
                        return acc;
                    }
                    i = i.filter((e)=>e.filter !== a);
                }
                if (item.isActive === false) {
                    return acc;
                }
                d.add(item.type);
                const s = {
                    id: `label_item_${item.id}`,
                    getLabel: M(item.type) ?? function() {
                        return item.name;
                    },
                    testid: `label_item_${item.id}`,
                    listId: item.id,
                    listType: item.type,
                    color: A(item)
                };
                if (a != null) {
                    s.filter = a;
                }
                acc.push(s);
                return acc;
            }, []);
            i.push(...m);
        }
        if (s) {
            const p = o("WAWebLabelCollection").LabelCollection.toArray().some((e)=>e.type === o("WAWebSchemaLabel").ListType.MENTIONS_AND_REPLIES);
            if (!p) {
                F(i);
            }
        }
        if (channelsInChatListEnabled) {
            O(i);
        }
        return i;
    };
    const q = ({ filtersConfigs, maxVisibleFilters, selectedChatFilter, selectedIndex })=>{
        if (selectedIndex < maxVisibleFilters) {
            return filtersConfigs.filter((e)=>!o("WAWebListUtils").isOverflowOnlyToYouPill(e)).slice(0, maxVisibleFilters);
        }
        const i = [
            I
        ];
        const l = filtersConfigs.find((e)=>e.listId === String(selectedChatFilter.label) || (o("WAWebListUtils").isBuiltInList(e.listType) || o("WAWebChatListAiStatusFilterPills").isAiStatusFilter(e.filter) || e.filter === o("WAWebChatSearchFilters").SearchFilters.TO_YOU || e.filter === o("WAWebChatSearchFilters").SearchFilters.CHANNELS) && selectedChatFilter.kind === e.filter);
        if (l != null) {
            i.push(l);
        }
        return i;
    };
    function U(e) {
        if (e >= 1600) {
            return 4;
        }
        if (e >= 1000 && e < 1600) {
            return 3;
        }
        return 2;
    }
    const V = {
        filterPillsContainer: {
            paddingTop: "x1nn3v0j",
            paddingBottom: "x1ykpatu",
            paddingInlineStart: "x106a9eq",
            paddingInlineEnd: "x2vl965",
            backgroundColor: "x1280gxy",
            display: "x78zum5",
            flexDirection: "x1q0g3np",
            flexWrap: "x1a02dak",
            flexShrink: "x2lah0s",
            rowGap: "x3pnbk8",
            columnGap: "xfex06f",
            minWidth: "xeuugli",
            minHeight: "x2lwn1j",
            $$css: true
        }
    };
    function H(t) {
        "use no forget";
        const t_ref = t.ref;
        const a = babelHelpers.objectWithoutPropertiesLoose(t, C);
        const { filter, filterSession, onDropdownOpen, onFilterChange, onMouseDown } = a;
        const { kind, label } = filter;
        const T = r("useWAWebWindowSize")();
        const T_width = T.width;
        const x = U(T_width);
        const $ = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
        const PRef = useRef([]);
        const NRef = useRef(null);
        const MRef = useRef(null);
        const A = o("WAWebListsGatingUtils").isListsChatListRowPillEnabled();
        const F = r("useWAWebIsChannelsInChatListEnabled")();
        const O = W({
            assignChatsEnabled: o("WAWebChatAssignmentUtils").canAssignChats(),
            channelsInChatListEnabled: F,
            favoritesEnabled: o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()
        });
        const B = (t, n)=>{
            PRef.current[n] = t;
            if (!(n >= O.length)) {
                const e = O[n].filter;
                if (e === kind) {
                    NRef.current = t;
                }
            }
        };
        const H = (t)=>{
            if (t) {
                t.focus();
                MRef.current = t;
            }
        };
        o("useWAWebListener").useListener(label != null ? o("WAWebLabelCollection").LabelCollection : null, "remove", function(t) {
            if (t.id === label) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[ChatListFilters] label removed -> reset to ALL"
                ])));
                onFilterChange({
                    kind: null
                });
            }
        });
        o("useWAWebListener").useListener(label != null ? o("WAWebLabelCollection").LabelCollection : null, "change:count", function(e, t) {
            if (e.id === label && t === 0) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[ChatListFilters] label count=0 -> reset to ALL"
                ])));
                onFilterChange({
                    kind: null
                });
            }
        });
        o("useWAWebListener").useListener(kind != null ? o("WAWebLabelCollection").LabelCollection : null, "change:isActive", function(e) {
            if (e.isActive === false) {
                const t = label != null && e.id === label;
                const n = kind != null && w(e.type) === kind;
                const r = e.type === o("WAWebSchemaLabel").ListType.AI_HANDOFF && kind === o("WAWebChatSearchFilters").SearchFilters.AI_HANDOFF || e.type === o("WAWebSchemaLabel").ListType.AI_RESPONDING && kind === o("WAWebChatSearchFilters").SearchFilters.AI_RESPONDING;
                if (t || n || r) {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[ChatListFilters] label deactivated -> reset to ALL"
                    ])));
                    onFilterChange({
                        kind: null
                    });
                }
            }
        });
        const GRef = useRef(F);
        useEffect(function() {
            if (GRef.current !== F) {
                GRef.current = F;
                if (!F && kind === o("WAWebChatSearchFilters").SearchFilters.CHANNELS) {
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[ChatListFilters] channels in chat list disabled -> reset to ALL"
                    ])));
                    onFilterChange({
                        kind: null
                    });
                }
            }
        }, [
            F,
            onFilterChange,
            kind
        ]);
        o("useWAWebListener").useListener(o("WAWebLabelCollection").LabelCollection, [
            "change:count",
            "change:sort",
            "change:name",
            "change:color",
            "change:isActive",
            "remove",
            "add",
            "reorder"
        ], function() {
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "[ChatListFilters] LabelCollection change -> forceUpdate"
            ])));
            $();
        });
        o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, [
            "change:showUnreadInTitle",
            "change:unreadCount",
            "change:isFavorite",
            "change:hasUnreadMention"
        ], function() {
            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "[ChatListFilters] ChatCollection change -> forceUpdate"
            ])));
            $();
        });
        o("useWAWebListener").useListener(A ? o("WAWebChatCollection").ChatCollection : null, "change:labels", function() {
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[ChatListFilters] ChatCollection change:labels->forceUpdate"
            ])));
            $();
        });
        o("useWAWebListener").useListener(F ? r("WAWebNewsletterCollection") : null, "change:unreadCount change:archive add remove", function() {
            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "[ChatListFilters] NewsletterCollection change -> forceUpdate"
            ])));
            $();
        });
        const z = function(t, n) {
            const r = {
                kind: t ?? null,
                label: n ?? null
            };
            if (filter.kind === r.kind && filter.label === r.label) {
                o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[ChatListFilters] skip unchanged filter=",
                    " label=",
                    ""
                ])), r.kind ?? "none", !!r.label);
                return;
            }
            if (filterSession?.sessionId != null) {
                o("WAWebFilterLogging").logSelectFilterEvent(filterSession.newSessionId(), r);
            }
            o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                "[ChatListFilters] setFilter=",
                " label=",
                ""
            ])), r.kind ?? "none", !!r.label);
            onFilterChange(r);
        };
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "set_active_filter", z);
        useImperativeHandle(t_ref, function() {
            return {
                focus: function() {
                    H(NRef.current);
                }
            };
        });
        const j = function(t, n, a) {
            const i = t === kind;
            const s = n === label;
            const u = n == null;
            const c = i && u && !s;
            const d = c ? {
                kind: null
            } : {
                kind: t ?? null,
                label: o("WAWebListUtils").isBuiltInList(a) || r("isStringNullOrEmpty")(n) ? null : n
            };
            if (filterSession?.sessionId != null) {
                o("WAWebFilterLogging").logSelectFilterEvent(filterSession.newSessionId(), d);
            }
            o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                "[ChatListFilters] select filter=",
                " label=",
                ""
            ])), d.kind ?? "none", !!d.label);
            onFilterChange(d);
        };
        const K = (t)=>{
            const e = PRef.current.indexOf(MRef.current);
            let n;
            if (r("WAWebL10N").isRTL()) {
                n = e + (t === "next" ? -1 : 1);
            } else {
                n = e + (t === "next" ? 1 : -1);
            }
            const o = PRef.current[n];
            if (o) {
                H(o);
            }
        };
        const Q = {
            left: function() {
                return K("previous");
            },
            right: function() {
                return K("next");
            }
        };
        const X = function({ target }) {
            if (target instanceof HTMLElement) {
                MRef.current = target;
            }
        };
        const Y = o("WAWebListUtils").getListsUnreadChatCountMap(o("WAWebNewsletterChatListUtils").getChannelsFilterPillUnreadCounts());
        let J;
        let Z;
        let ee = O.findIndex((e)=>kind === e.filter && (o("WAWebListUtils").isBuiltInList(e.listType) || label === e.listId || label == null && e.listId == null) || kind == null && e.filter == null);
        const te = O.some((e)=>e.filter === o("WAWebChatSearchFilters").SearchFilters.TO_YOU && e.listId != null);
        if (kind === o("WAWebChatSearchFilters").SearchFilters.TO_YOU && !te) {
            ee = x;
        }
        const ne = q({
            filtersConfigs: O,
            maxVisibleFilters: x,
            selectedChatFilter: filter,
            selectedIndex: ee
        });
        const re = ee >= x;
        const oe = re ? O : O.filter((e)=>!ne.some((t)=>t.id === e.id || t.listId != null && t.listId === e.listId));
        const ae = O.length > x || o("WAWebLabelCollection").LabelCollection.getCustomLists().length > 0 || o("WAWebInboxFiltersGatingUtils").inboxToYouFilterEnabled();
        if (ee >= x) {
            ee = 1;
        }
        const ie = ne.map((e, t)=>{
            const a = ee === t;
            const i = r("isStringNullOrEmpty")(e.listId) ? {} : {
                listId: e.listId
            };
            const l = o("WAWebListUtils").getPresetListShortName(e.listType) != null;
            const u = S.jsx(r("WAWebListFilterButton.react"), babelHelpers.extends({
                ref: function(n) {
                    return B(n, t);
                },
                id: e.id,
                role: "tab",
                "aria-selected": a,
                "aria-controls": "chat-list",
                listType: e.listType
            }, i, {
                testIdSuffix: e.testid,
                tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
                tabIndex: a ? 0 : -1,
                label: o("WAWebListUtils").resolvePillLabelForState(e, a),
                selected: a,
                restrictSize: true,
                truncateLabel: !a || !l,
                startIcon: o("WAWebChatListAiStatusFilterPills").renderPillStartIcon(e) ?? undefined,
                count: o("WAWebListUtils").getUnreadChatsCountForFilter(e, Y),
                onBeforeContextMenu: onDropdownOpen,
                onClick: function() {
                    return j(e.filter, e.listId, e.listType);
                },
                onFocus: X
            }));
            if (l) {
                const Component = r("WAWebAnimatedPillWidth.react");
                return <Component key={e.id}>{u}</Component>;
            }
            return <S.Fragment key={e.id}>{u}</S.Fragment>;
        });
        const ne_length = ne.length;
        if (ae) {
            const Component = r("WAWebChatListFilterListsDropdown.react");
            J = <Component ref={function(t) {
                return B(t, ne_length);
            }} id="additional-filters" role="tab" aria-selected={false} aria-controls="chat-list" filters={oe} currentFilter={filter} tabIndex={-1} filterSession={filterSession} onSelect={j} onFocus={X}/>;
        } else {
            const Component = r("WAWebChatListFiltersNewListButton.react");
            Z = <Component ref={function(t) {
                return B(t, ne_length);
            }} id="new-filter" role="tab" aria-selected={false} aria-controls="chat-list" tabIndex={-1} onFocus={X}/>;
        }
        const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
        return <Component role="tablist" aria-label="chat-list-filters" handlers={Q} onMouseDown={onMouseDown} xstyle={V.filterPillsContainer}>{ie}{J}{Z}</Component>;
    }
    H.displayName = `${H.name} [from ${i.id}]`;
    function G(e) {
        const t = o("react-compiler-runtime").c(9);
        let n;
        let a;
        if (t[0] !== e) {
            a = e.ref;
            n = babelHelpers.objectWithoutPropertiesLoose(e, b);
            t[0] = e;
            t[1] = n;
            t[2] = a;
        } else {
            n = t[1];
            a = t[2];
        }
        if (o("WAWebABProps").getABPropConfigValue("wa_web_lists_full_width_filters")) {
            let i;
            if (t[3] !== n || t[4] !== a) {
                i = S.jsx(r("WAWebChatListFiltersDynamic.react"), babelHelpers.extends({
                    ref: a
                }, n));
                t[3] = n;
                t[4] = a;
                t[5] = i;
            } else {
                i = t[5];
            }
            return i;
        }
        let l;
        if (t[6] !== n || t[7] !== a) {
            l = <H {...babelHelpers.extends({
                ref: a
            }, n)}/>;
            t[6] = n;
            t[7] = a;
            t[8] = l;
        } else {
            l = t[8];
        }
        return l;
    }
    l.ChatListFilters = G;
}, 226);