__d("WAWebChatListFiltersDynamic.react", [
    "fbt",
    "WALogger",
    "WAWebAnimatedPillWidth.react",
    "WAWebChatAssignmentUtils",
    "WAWebChatCollection",
    "WAWebChatListAiStatusFilterPills",
    "WAWebChatListFilterListsDropdown.react",
    "WAWebChatListFiltersNewListButton.react",
    "WAWebChatListLeadStageFilter.react",
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
    "WAWebNoop",
    "WAWebSchemaLabel",
    "WAWebTabOrder",
    "isStringNullOrEmpty",
    "nullthrows",
    "react",
    "shallowEqual",
    "useWAWebForceUpdate",
    "useWAWebIsChannelsInChatListEnabled",
    "useWAWebListener",
    "useWAWebMaxVisibleFilters"
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
    let C;
    const b = [
        "config"
    ];
    const v = [
        "config"
    ];
    const S = [
        "ref"
    ];
    let R;
    const L = R || (R = o("react"));
    const E = R;
    const { useCallback, useEffect, useImperativeHandle, useLayoutEffect, useMemo, useRef } = E;
    const P = {
        id: "all-filter",
        getLabel: function() {
            return s._("All");
        },
        testid: "all-filter"
    };
    const N = {
        id: "unread-filter",
        filter: o("WAWebChatSearchFilters").SearchFilters.UNREAD,
        getLabel: function() {
            return s._("Unread");
        },
        listType: o("WAWebSchemaLabel").ListType.UNREAD,
        testid: "unread-filter",
        count: 0
    };
    const M = {
        id: "group-filter",
        filter: o("WAWebChatSearchFilters").SearchFilters.GROUP,
        getLabel: function() {
            return s._("Groups");
        },
        listType: o("WAWebSchemaLabel").ListType.GROUPS,
        testid: "group-filter",
        count: 0
    };
    const w = {
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
    const A = {
        id: "assigned-to-you-filter",
        filter: o("WAWebChatSearchFilters").SearchFilters.ASSIGNED_TO_YOU,
        getLabel: function() {
            return s._("Assigned to you");
        },
        testid: "assigned-to-you-filter"
    };
    const F = {
        id: "channels-filter",
        filter: o("WAWebChatSearchFilters").SearchFilters.CHANNELS,
        getLabel: function() {
            return s._("Channels");
        },
        listType: o("WAWebSchemaLabel").ListType.CHANNELS,
        testid: "channels-filter",
        count: 0
    };
    const O = {
        id: "to-you-filter",
        filter: o("WAWebChatSearchFilters").SearchFilters.TO_YOU,
        getLabel: function() {
            return r("nullthrows")(o("WAWebListUtils").getPresetListLocalizedName(o("WAWebSchemaLabel").ListType.MENTIONS_AND_REPLIES));
        },
        listType: o("WAWebSchemaLabel").ListType.MENTIONS_AND_REPLIES,
        testid: "to-you-filter"
    };
    const B = (type)=>{
        if (type === o("WAWebSchemaLabel").ListType.UNREAD) {
            return N.getLabel;
        }
        if (type === o("WAWebSchemaLabel").ListType.GROUPS) {
            return M.getLabel;
        }
        if (type === o("WAWebSchemaLabel").ListType.FAVORITES) {
            return w.getLabel;
        }
        if (type === o("WAWebSchemaLabel").ListType.MENTIONS_AND_REPLIES) {
            return O.getLabel;
        }
        return null;
    };
    const W = (type)=>{
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
    const q = (item)=>{
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
    const U = (t)=>{
        const e = H(t);
        if (e === -1) {
            t.push(O);
        } else {
            t.splice(e, 0, O);
        }
    };
    const V = (t)=>{
        const e = t.findIndex((e)=>e.filter === o("WAWebChatSearchFilters").SearchFilters.GROUP);
        const n = e === -1 ? H(t) : e + 1;
        if (n === -1) {
            t.push(F);
        } else {
            t.splice(n, 0, F);
        }
    };
    function H(e) {
        return e.findIndex((e)=>e.listId != null && !o("WAWebListUtils").isBuiltInList(e.listType) && e.listType !== o("WAWebSchemaLabel").ListType.AI_HANDOFF && e.listType !== o("WAWebSchemaLabel").ListType.AI_RESPONDING);
    }
    const G = ({ assignChatsEnabled, channelsInChatListEnabled, favoritesEnabled })=>{
        let i = [
            P,
            N
        ];
        const l = o("WAWebChatListAiStatusFilterPills").getAiStatusFilterPills();
        i.push(...l);
        if (favoritesEnabled) {
            i.push(w);
        }
        i.push(M);
        if (assignChatsEnabled) {
            i.push(A);
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
                if (!item.name || o("WAWebListUtils").isLeadList(item) || o("WAWebListUtils").isHiddenToYouList(item.type) || item.type === o("WAWebSchemaLabel").ListType.CHANNELS) {
                    return acc;
                }
                const a = W(item.type);
                let s = null;
                if (o("WAWebListUtils").isBuiltInList(item.type)) {
                    if (d.has(item.type)) {
                        return acc;
                    }
                    s = i.find((e)=>e.filter === a)?.testid;
                    i = i.filter((e)=>e.filter !== a);
                }
                if (item.isActive === false) {
                    return acc;
                }
                d.add(item.type);
                const c = {
                    id: `label_item_${item.id}`,
                    getLabel: B(item.type) ?? item.name,
                    testid: s ?? `label_item_${item.id}`,
                    listId: item.id,
                    listType: item.type,
                    color: q(item)
                };
                if (a != null) {
                    c.filter = a;
                }
                acc.push(c);
                return acc;
            }, []);
            i.push(...m);
        }
        if (s) {
            const p = o("WAWebLabelCollection").LabelCollection.toArray().some((e)=>e.type === o("WAWebSchemaLabel").ListType.MENTIONS_AND_REPLIES);
            if (!p) {
                U(i);
            }
        }
        if (channelsInChatListEnabled) {
            V(i);
        }
        return i;
    };
    const z = ({ filtersConfigs, maxVisibleFilters, selectedChatFilter, selectedIndex })=>{
        if (selectedIndex < maxVisibleFilters) {
            return filtersConfigs.filter((e)=>!o("WAWebListUtils").isOverflowOnlyToYouPill(e)).slice(0, maxVisibleFilters);
        }
        const i = [
            P
        ];
        const l = filtersConfigs.find((e)=>e.listId === String(selectedChatFilter.label) || (o("WAWebListUtils").isBuiltInList(e.listType) || o("WAWebChatListAiStatusFilterPills").isAiStatusFilter(e.filter) || e.filter === o("WAWebChatSearchFilters").SearchFilters.TO_YOU || e.filter === o("WAWebChatSearchFilters").SearchFilters.ASSIGNED_TO_YOU || e.filter === o("WAWebChatSearchFilters").SearchFilters.CHANNELS) && selectedChatFilter.kind === e.filter);
        if (l != null) {
            i.push(l);
        }
        return i;
    };
    const j = {
        filterPillsContainer: {
            paddingTop: "x1iorvi4",
            paddingBottom: "x10b6aqq",
            paddingInlineStart: "x106a9eq",
            paddingInlineEnd: "x2vl965",
            backgroundColor: "x1280gxy",
            display: "x78zum5",
            flexDirection: "x1q0g3np",
            flexWrap: "xozqiw3",
            flexShrink: "x2lah0s",
            columnGap: "xfex06f",
            minWidth: "xeuugli",
            minHeight: "x2lwn1j",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: true
        }
    };
    function K(e, t) {
        const e_config = e.config;
        const o = babelHelpers.objectWithoutPropertiesLoose(e, b);
        const t_config = t.config;
        const i = babelHelpers.objectWithoutPropertiesLoose(t, v);
        return r("shallowEqual")(e_config, t_config) && r("shallowEqual")(o, i);
    }
    const Q = L.memo(function({ config, count, isHidden, onBeforeContextMenu, onFilterClick, onFocus, pillRef, selected, tabIndex }) {
        const p = r("isStringNullOrEmpty")(config.listId) ? {} : {
            listId: config.listId
        };
        const _ = onFilterClick != null ? function() {
            return onFilterClick(config.filter, config.listId, config.listType);
        } : r("WAWebNoop");
        const f = o("WAWebListUtils").getPresetListShortName(config.listType) != null;
        const g = L.jsx(r("WAWebListFilterButton.react"), babelHelpers.extends({
            ref: pillRef,
            id: config.id,
            role: isHidden ? undefined : "tab",
            "aria-selected": isHidden ? undefined : selected,
            "aria-controls": isHidden ? undefined : "chat-list",
            listType: config.listType
        }, p, {
            testIdSuffix: config.testid,
            tabOrder: isHidden ? undefined : o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
            tabIndex,
            label: o("WAWebListUtils").resolvePillLabelForState(config, selected),
            selected,
            restrictSize: true,
            truncateLabel: !selected || !f,
            startIcon: o("WAWebChatListAiStatusFilterPills").renderPillStartIcon(config) ?? undefined,
            count,
            onBeforeContextMenu: isHidden ? undefined : onBeforeContextMenu,
            onClick: _,
            onFocus: isHidden ? undefined : onFocus
        }));
        const Component = r("WAWebAnimatedPillWidth.react");
        return <div {...babelHelpers.extends({}, {
            0: {},
            1: {
                className: "x10l6tqk xlshs6z x47corl xqtp20y"
            }
        }[!!isHidden << 0], {
            "aria-hidden": isHidden ? "true" : undefined,
            children: f ? <Component>{g}</Component> : g
        })}/>;
    }, K);
    function XComponent(t) {
        "use no forget";
        let a;
        const t_ref = t.ref;
        const l = babelHelpers.objectWithoutPropertiesLoose(t, S);
        const { filter, filterSession, onDropdownOpen, onFilterChange, onMouseDown } = l;
        const { kind, label } = filter;
        const M = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
        const wRef = useRef(null);
        const ARef = useRef([]);
        const FRef = useRef(null);
        const ORef = useRef(null);
        const B = o("WAWebListsGatingUtils").isListsChatListRowPillEnabled();
        const q = r("useWAWebIsChannelsInChatListEnabled")();
        const U = G({
            assignChatsEnabled: o("WAWebChatAssignmentUtils").canAssignChats(),
            channelsInChatListEnabled: q,
            favoritesEnabled: o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()
        });
        const VRef = useRef(null);
        const H = r("useWAWebMaxVisibleFilters")(wRef, U, VRef);
        const { maxVisibleCount, measurementContainerRef, pillRefs } = H;
        const J = maxVisibleCount;
        const Z = (t, n)=>{
            ARef.current[n] = t;
            if (!(n >= U.length)) {
                const e = U[n].filter;
                if (e === kind) {
                    FRef.current = t;
                }
            }
        };
        const ee = useMemo(function() {
            return Array.from({
                length: U.length
            }, function(e, t) {
                return function(e) {
                    pillRefs.current[t] = e;
                };
            });
        }, [
            U.length,
            pillRefs
        ]);
        const te = (t)=>{
            if (t) {
                t.focus();
                ORef.current = t;
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
                const n = kind != null && W(e.type) === kind;
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
        const neRef = useRef(q);
        useEffect(function() {
            if (neRef.current !== q) {
                neRef.current = q;
                if (!q && kind === o("WAWebChatSearchFilters").SearchFilters.CHANNELS) {
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[ChatListFilters] channels in chat list disabled -> reset to ALL"
                    ])));
                    onFilterChange({
                        kind: null
                    });
                }
            }
        }, [
            q,
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
                "[ChatListFilters] forceUpdate: LabelCollection"
            ])));
            M();
        });
        o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, [
            "change:showUnreadInTitle",
            "change:unreadCount",
            "change:isFavorite",
            "change:hasUnreadMention"
        ], function() {
            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "[ChatListFilters] forceUpdate: ChatCollection"
            ])));
            M();
        });
        o("useWAWebListener").useListener(B ? o("WAWebChatCollection").ChatCollection : null, "change:labels", function() {
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[ChatListFilters] forceUpdate: ChatCollection change:labels"
            ])));
            M();
        });
        o("useWAWebListener").useListener(q ? r("WAWebNewsletterCollection") : null, "change:unreadCount change:archive add remove", function() {
            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "[ChatListFilters] forceUpdate: NewsletterCollection"
            ])));
            M();
        });
        const re = function(t, n) {
            const e = {
                kind: t ?? null,
                label: n ?? null
            };
            if (filter.kind === e.kind && filter.label === e.label) {
                o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[ChatListFilters] onFilterChange skip: unchanged"
                ])));
                return;
            }
            if (filterSession?.sessionId != null) {
                o("WAWebFilterLogging").logSelectFilterEvent(filterSession.newSessionId(), e);
            }
            o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                "[ChatListFilters] onFilterChange: handleSetActiveFilter"
            ])));
            onFilterChange(e);
        };
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "set_active_filter", re);
        useImperativeHandle(t_ref, function() {
            return {
                focus: function() {
                    te(FRef.current);
                }
            };
        });
        const oe = o("WAWebLabelCollection").LabelCollection.toArray().find(o("WAWebListUtils").isLeadList)?.id;
        const onSelectStage = useCallback(function(leadStage) {
            if (oe != null) {
                const n = filter.label === oe && (filter.leadStage ?? null) === leadStage;
                const r = n ? {
                    kind: null
                } : {
                    kind: o("WAWebChatSearchFilters").SearchFilters.LABELS,
                    label: oe,
                    leadStage
                };
                if (filterSession?.sessionId != null) {
                    o("WAWebFilterLogging").logSelectFilterEvent(filterSession.newSessionId(), r);
                }
                o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[ChatListFilters] onFilterChange: handleSelectLeadStage"
                ])));
                onFilterChange(r);
            }
        }, [
            filter.label,
            filter.leadStage,
            filterSession,
            oe,
            onFilterChange
        ]);
        const ie = useCallback(function(e, t, n) {
            const a = e === kind;
            const i = t === label;
            const l = t == null;
            const s = a && l && !i;
            const u = s ? {
                kind: null
            } : {
                kind: e ?? null,
                label: o("WAWebListUtils").isBuiltInList(n) || r("isStringNullOrEmpty")(t) ? null : t
            };
            if (filterSession?.sessionId != null) {
                o("WAWebFilterLogging").logSelectFilterEvent(filterSession.newSessionId(), u);
            }
            o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                "[ChatListFilters] onFilterChange: handleFilterClick"
            ])));
            onFilterChange(u);
        }, [
            kind,
            label,
            filterSession,
            onFilterChange
        ]);
        const le = (t)=>{
            const e = ARef.current.indexOf(ORef.current);
            let n;
            if (r("WAWebL10N").isRTL()) {
                n = e + (t === "next" ? -1 : 1);
            } else {
                n = e + (t === "next" ? 1 : -1);
            }
            const o = ARef.current[n];
            if (o) {
                te(o);
            }
        };
        const se = {
            left: function() {
                return le("previous");
            },
            right: function() {
                return le("next");
            }
        };
        const ue = useCallback(function({ target }) {
            if (target instanceof HTMLElement) {
                ORef.current = target;
            }
        }, []);
        const ce = o("WAWebListUtils").getListsUnreadChatCountMap(o("WAWebNewsletterChatListUtils").getChannelsFilterPillUnreadCounts());
        let de = U.findIndex((e)=>kind === e.filter && (o("WAWebListUtils").isBuiltInList(e.listType) || label === e.listId || label == null && e.listId == null) || kind == null && e.filter == null);
        const me = U.some((e)=>e.filter === o("WAWebChatSearchFilters").SearchFilters.TO_YOU && e.listId != null);
        if (kind === o("WAWebChatSearchFilters").SearchFilters.TO_YOU && !me) {
            de = J;
        }
        const pe = z({
            filtersConfigs: U,
            maxVisibleFilters: J,
            selectedChatFilter: filter,
            selectedIndex: de
        });
        const _e = U.filter((e)=>!pe.some((t)=>t.id === e.id));
        useLayoutEffect(function() {
            pe.forEach((e, t)=>{
                const n = U.indexOf(e);
                const r = pillRefs.current[n];
                Z(r, t);
            });
        }, undefined);
        const fe = de >= J;
        const ge = fe ? U : U.filter((e)=>!pe.some((t)=>t.id === e.id || t.listId != null && t.listId === e.listId));
        const he = U.length > J || o("WAWebLabelCollection").LabelCollection.getCustomLists().length > 0 || o("WAWebInboxFiltersGatingUtils").inboxToYouFilterEnabled();
        if (de >= J) {
            de = 1;
        }
        const applied = oe != null && filter.label === oe;
        const Component = r("WAWebChatListLeadStageFilter.react");
        const Ce = oe != null ? <Component key="lead-stage-filter" ref={function(t) {
            Z(t, pe.length);
            VRef.current = t;
        }} applied={applied} aria-controls="chat-list" aria-selected={applied} id="lead-stage-filter" onFocus={ue} onSelectStage={onSelectStage} role="tab" selectedStage={applied && (a = filter.leadStage) != null ? a : null} tabIndex={applied ? 0 : -1}/> : null;
        const be = pe.length + (Ce != null ? 1 : 0);
        let ve;
        let Se;
        if (he) {
            const Component = r("WAWebChatListFilterListsDropdown.react");
            ve = <Component ref={function(t) {
                return Z(t, be);
            }} id="additional-filters" role="tab" aria-selected={false} aria-controls="chat-list" filters={ge} currentFilter={filter} tabIndex={-1} filterSession={filterSession} onDropdownOpen={onDropdownOpen} onSelect={ie} onFocus={ue}/>;
        } else {
            const Component = r("WAWebChatListFiltersNewListButton.react");
            Se = <Component ref={function(t) {
                return Z(t, be);
            }} id="new-filter" role="tab" aria-selected={false} aria-controls="chat-list" tabIndex={-1} onFocus={ue}/>;
        }
        const Component_1 = o("WAWebKeyboardHotKeys.react").HotKeys;
        return <Component_1 ref={wRef} role="tablist" aria-label="chat-list-filters" handlers={se} onMouseDown={onMouseDown} xstyle={j.filterPillsContainer}><div ref={measurementContainerRef} hidden/>{pe.map((e, t)=>{
            const n = de === t;
            const r = U.indexOf(e);
            return <Q key={e.id} config={e} configIndex={r} count={o("WAWebListUtils").getUnreadChatsCountForFilter(e, ce)} selected={n} isHidden={false} pillRef={ee[r]} onFilterClick={ie} onFocus={ue} onBeforeContextMenu={onDropdownOpen} tabIndex={n ? 0 : -1}/>;
        })}{Ce}{ve}{Se}{_e.map((e)=>{
            const t = U.indexOf(e);
            return <Q key={e.id} config={e} configIndex={t} count={o("WAWebListUtils").getUnreadChatsCountForFilter(e, ce)} selected={false} isHidden pillRef={ee[t]} tabIndex={-1}/>;
        })}</Component_1>;
    }
    XComponent.displayName = `${XComponent.name} [from ${i.id}]`;
    l.default = XComponent;
}, 226);