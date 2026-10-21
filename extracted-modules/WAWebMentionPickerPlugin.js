__d("WAWebMentionPickerPlugin", [
    "fbt",
    "Lexical",
    "LexicalComposerContext",
    "WAWebABProps",
    "WAWebBotDisclaimerManager",
    "WAWebBotGroupGatingUtils",
    "WAWebBotInvokeUpsellRow.react",
    "WAWebBotLogging",
    "WAWebBotTos",
    "WAWebBotTosIds",
    "WAWebBotUtils",
    "WAWebCommunityAnnouncementGroupUtils",
    "WAWebComposeBoxActions",
    "WAWebFbtCommon",
    "WAWebGroupMetadataCollection",
    "WAWebGroupMetadataGetters",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebLexicalTypeAheadList.react",
    "WAWebLexicalUtils",
    "WAWebLimitSharingUIUtils",
    "WAWebMentionNode",
    "WAWebMentionPickerActionLoggingUtils",
    "WAWebMentionSuggestionsUtils",
    "WAWebMentionsPluginResult.react",
    "WAWebMentionsPluginUtil",
    "WAWebNonJidMentionNode",
    "WAWebNoop",
    "WAWebPushnameConstants",
    "WAWebRichTextInputConst",
    "WAWebSchemaGroupMetadata",
    "WAWebTextStatusGatingUtils",
    "WAWebWamEnumBotEntryPointType",
    "WAWebWamEnumMentionType",
    "WDSMargins.stylex",
    "asyncToGeneratorRuntime",
    "countWhere",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebLexicalTypeAhead",
    "useWAWebOrgMentionNames"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useMemo, useState } = d;
    const _ = {
        marginInline1: {
            marginInlineStart: "xm2jcoa",
            marginInlineEnd: "x1mpyi22",
            marginLeft: null,
            marginRight: null,
            $$css: true
        }
    };
    const f = 42;
    const g = 52;
    const h = 60;
    const y = 9;
    const C = o("WAWebPushnameConstants").MAX_PUSHNAME_LENGTH * 2;
    const b = {
        separator: {
            borderInlineEndStyle: "x18oe1m7",
            borderBottomStyle: "x1sy0etr",
            borderInlineStartStyle: "xstzfhl",
            borderTopStyle: "x13fuv20",
            borderTopWidth: "x178xt8z",
            borderTopColor: "xx42vgk",
            $$css: true
        }
    };
    const v = 15;
    const S = 5;
    function R(chat_groupMetadata) {
        return !(chat_groupMetadata == null || o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(chat_groupMetadata) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP);
    }
    function L(chat_groupMetadata) {
        if (o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(chat_groupMetadata) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && chat_groupMetadata != null && chat_groupMetadata.participants.iAmAdmin()) {
            return true;
        }
        return o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(chat_groupMetadata) === o("WAWebGroupType").GroupType.LINKED_SUBGROUP || o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(chat_groupMetadata) === o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP;
    }
    function E(t) {
        const a = o("react-compiler-runtime").c(72);
        const { chat, elevatedPushNamesEnabled, source } = t;
        const d = o("LexicalComposerContext").useLexicalComposerContext();
        const m = d[0];
        const chat_groupMetadata = chat.groupMetadata;
        const A = useState(false);
        const F = A[0];
        const O = A[1];
        let B;
        if (a[0] !== chat_groupMetadata) {
            B = R(chat_groupMetadata);
            a[0] = chat_groupMetadata;
            a[1] = B;
        } else {
            B = a[1];
        }
        const W = B;
        let q;
        if (a[2] !== chat_groupMetadata) {
            q = L(chat_groupMetadata);
            a[2] = chat_groupMetadata;
            a[3] = q;
        } else {
            q = a[3];
        }
        const U = q;
        const V = W || U;
        let H;
        if (a[4] !== V) {
            H = {
                enabled: V,
                maxQueryLength: C,
                boundary: true
            };
            a[4] = V;
            a[5] = H;
        } else {
            H = a[5];
        }
        const G = o("useWAWebLexicalTypeAhead").useTypeAhead(m, o("WAWebRichTextInputConst").AT_SYMBOL, H);
        const { leadOffset, omitQuery, query, replaceQuery } = G;
        const X = r("useWAWebOrgMentionNames")(chat_groupMetadata, query != null && W);
        let Y;
        if (a[6] !== replaceQuery) {
            Y = function(t) {
                replaceQuery(function() {
                    return new (o("Lexical")).TextNode(o("WAWebMentionSuggestionsUtils").formatMention(t));
                }, {
                    trailingSpace: true
                });
            };
            a[6] = replaceQuery;
            a[7] = Y;
        } else {
            Y = a[7];
        }
        const J = Y;
        let Z;
        if (a[8] !== chat || a[9] !== replaceQuery || a[10] !== source) {
            Z = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (source !== "forward-append-message") {
                        o("WAWebComposeBoxActions").ComposeBoxActions.setNonJidMentions(chat, 1);
                    }
                    replaceQuery(P, {
                        trailingSpace: true
                    });
                    o("WAWebMentionPickerActionLoggingUtils").logMentionPickerAction(chat, o("WAWebWamEnumMentionType").MENTION_TYPE.EVERYONE);
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            a[8] = chat;
            a[9] = replaceQuery;
            a[10] = source;
            a[11] = Z;
        } else {
            Z = a[11];
        }
        const ee = Z;
        const te = $;
        let ne;
        if (a[12] !== chat || a[13] !== J || a[14] !== ee) {
            ne = function(t) {
                if (t.type === "mention_all") {
                    ee();
                    return;
                }
                if (t.type === "contact" || t.type === "group") {
                    if (o("WAWebLimitSharingUIUtils").isLimitSharingReceiverEnabledForUsers(chat, [
                        t.id
                    ])) {
                        o("WAWebLimitSharingUIUtils").showLimitSharingInvokeBlockedPopup(chat);
                    } else {
                        J(t.id);
                        const e = t.type === "contact" ? o("WAWebWamEnumMentionType").MENTION_TYPE.REGULAR_USER : o("WAWebWamEnumMentionType").MENTION_TYPE.GROUP;
                        o("WAWebMentionPickerActionLoggingUtils").logMentionPickerAction(chat, e);
                    }
                }
            };
            a[12] = chat;
            a[13] = J;
            a[14] = ee;
            a[15] = ne;
        } else {
            ne = a[15];
        }
        const re = ne;
        let oe;
        if (a[16] !== chat || a[17] !== chat_groupMetadata || a[18] !== re) {
            oe = function(t) {
                if (!(t.type === "contact" && o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(t.id)) && te(t)) {
                    if (t.type === "mention_all") {
                        re(t);
                        return;
                    }
                    if (t.type !== "contact" && t.type !== "group") {
                        return;
                    }
                    const e = t;
                    if (N(e.id)) {
                        o("WAWebBotDisclaimerManager").enterBotTosFlow({
                            noticeId: String(o("WAWebBotTosIds").getApplicableBotNoticeId(o("WAWebBotLogging").BotEntryPointType.Invoke)),
                            botEntryPoint: o("WAWebBotLogging").BotEntryPointType.Invoke,
                            chat,
                            wamEntryPoint: chat_groupMetadata != null ? o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.INVOKE_META_AI_GROUP : o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.INVOKE_META_AI_1ON1
                        }).then(()=>{
                            re(e);
                        }).catch(r("WAWebNoop"));
                    } else {
                        re(e);
                    }
                }
            };
            a[16] = chat;
            a[17] = chat_groupMetadata;
            a[18] = re;
            a[19] = oe;
        } else {
            oe = a[19];
        }
        const ae = oe;
        let ie;
        if (a[20] !== omitQuery) {
            ie = function() {
                omitQuery();
            };
            a[20] = omitQuery;
            a[21] = ie;
        } else {
            ie = a[21];
        }
        const le = ie;
        let se;
        if (a[22] !== chat || a[23] !== m || a[24] !== elevatedPushNamesEnabled || a[25] !== J) {
            se = function(n, a) {
                switch(n.type){
                    case "contact":
                        {
                            const t = n;
                            const u = o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(t.id);
                            const d = o("WAWebLimitSharingUIUtils").isLimitSharingReceiverEnabledForUsers(chat, [
                                t.id
                            ]);
                            const p = u || d;
                            if (N(t.id) && !o("WAWebBotTos").hasSeenMasterBotTos() && !o("WAWebBotTos").hasSeenInvokeTos() && !p) {
                                return c.jsx(r("WAWebBotInvokeUpsellRow.react"), {
                                    selected: a
                                });
                            }
                            return c.jsx(o("WAWebMentionsPluginResult.react").UserResult, {
                                chat,
                                contact: t.contact,
                                term: t.query,
                                theme: null,
                                selected: a,
                                disabled: p,
                                disabledCTA: M(u, d),
                                elevatedPushNamesEnabled
                            }, t.contact.id.toString());
                        }
                    case "group":
                        {
                            const f = n;
                            return c.jsx(o("WAWebMentionsPluginResult.react").GroupResult, {
                                groupMetadata: f.groupMetadata,
                                term: f.query,
                                theme: null,
                                selected: a
                            }, f.groupMetadata.id.toString());
                        }
                    case "mention_all":
                        return c.jsx(o("WAWebMentionsPluginResult.react").MentionAllResult, {
                            selected: a
                        });
                    case "non_participant_contact":
                        {
                            const g = n;
                            const Component = o("WAWebMentionsPluginResult.react").NonParticipantUserResult;
                            return <Component key={g.contact.id.toString()} contact={g.contact} chat={chat} term={g.query} theme={null} selected={a} elevatedPushNamesEnabled={elevatedPushNamesEnabled} onAddConfirmed={function(t) {
                                O(false);
                                J(t.id);
                                o("WAWebMentionPickerActionLoggingUtils").logMentionPickerAction(chat, o("WAWebWamEnumMentionType").MENTION_TYPE.NON_GROUP_USER, true);
                            }} onAddCancelled={function() {
                                O(false);
                                m.focus();
                            }} onAddDialogShown={function() {
                                O(true);
                            }}/>;
                        }
                    case "contact_header":
                        return <div className="x1v5yvga x1f6kntn x1yc453h xo1l8bm x5kalc8 x78zum5 x6s0dn4 xvmahel x1onr9mi">{s._("Contacts")}</div>;
                    case "group_header":
                        return <div className="x1v5yvga x1f6kntn x1yc453h xo1l8bm x5kalc8 x78zum5 x6s0dn4 xvmahel x1onr9mi">{s._("Groups")}</div>;
                    case "non_participant_separator":
                        return <hr {...babelHelpers.extends({}, (e || (e = r("stylex"))).props([
                            b.separator,
                            o("WDSMargins.stylex").wdsMargins.marginVer4,
                            _.marginInline1
                        ]))}/>;
                }
            };
            a[22] = chat;
            a[23] = m;
            a[24] = elevatedPushNamesEnabled;
            a[25] = J;
            a[26] = se;
        } else {
            se = a[26];
        }
        const ue = se;
        let ce;
        e: {
            const de = o("WAWebTextStatusGatingUtils").receiveTextStatusForNewSurfacesEnabled() ? h : g;
            if (query == null) {
                ce = null;
                break e;
            }
            if (chat_groupMetadata == null) {
                ce = null;
                break e;
            }
            const me = m.getEditorState().read(x);
            if (me) {
                ce = null;
                break e;
            }
            let pe;
            if (a[27] !== X || a[28] !== U || a[29] !== chat_groupMetadata || a[30] !== query || a[31] !== source || a[32] !== W) {
                pe = [];
                const _e = W && U;
                if (chat_groupMetadata?.id != null && w({
                    groupMetadata: chat_groupMetadata,
                    query,
                    source
                })) {
                    let fe;
                    if (a[34] !== chat_groupMetadata.id || a[35] !== pe.length || a[36] !== query) {
                        fe = {
                            type: "mention_all",
                            selectable: true,
                            index: pe.length,
                            itemKey: "mention-all",
                            height: de,
                            contentKey: query,
                            id: chat_groupMetadata.id,
                            query
                        };
                        a[34] = chat_groupMetadata.id;
                        a[35] = pe.length;
                        a[36] = query;
                        a[37] = fe;
                    } else {
                        fe = a[37];
                    }
                    pe.push(fe);
                }
                let ge = [];
                if (W) {
                    ge = o("WAWebMentionsPluginUtil").getUserResults(query, chat_groupMetadata, X);
                    if (source === "forward-append-message") {
                        ge = ge.filter(D);
                    }
                }
                let he = [];
                if (U && chat_groupMetadata != null) {
                    he = o("WAWebMentionsPluginUtil").getSubgroupResults(query, chat_groupMetadata);
                }
                const ye = Math.min(he.length, S);
                const Ce = _e && ye !== 0 ? 1 : 0;
                const be = v - pe.length - ye - Ce;
                const ve = _e && ge.length !== 0 && be > 1 ? 1 : 0;
                const Se = Math.max(0, be - ve);
                const Re = ge.slice(0, Se);
                if (Re.length !== 0) {
                    if (ve !== 0) {
                        let Ee;
                        if (a[38] !== pe.length) {
                            Ee = {
                                index: pe.length,
                                itemKey: "section-contacts",
                                type: "contact_header",
                                selectable: false,
                                height: f
                            };
                            a[38] = pe.length;
                            a[39] = Ee;
                        } else {
                            Ee = a[39];
                        }
                        pe.push(Ee);
                    }
                    const ke = pe.length;
                    let Ie;
                    if (a[40] !== ke || a[41] !== query) {
                        Ie = function(t, n) {
                            return {
                                type: "contact",
                                selectable: true,
                                contact: t,
                                id: t.id,
                                height: de,
                                itemKey: t.id.toString(),
                                contentKey: query,
                                index: ke + n,
                                query
                            };
                        };
                        a[40] = ke;
                        a[41] = query;
                        a[42] = Ie;
                    } else {
                        Ie = a[42];
                    }
                    pe.push(...Re.map(Ie));
                }
                const Te = Math.max(0, v - pe.length - Ce);
                const De = he.slice(0, Te);
                if (De.length !== 0) {
                    if (Ce !== 0) {
                        let $e;
                        if (a[43] !== pe.length) {
                            $e = {
                                index: pe.length,
                                itemKey: "section-groups",
                                type: "group_header",
                                selectable: false,
                                height: f
                            };
                            a[43] = pe.length;
                            a[44] = $e;
                        } else {
                            $e = a[44];
                        }
                        pe.push($e);
                    }
                    const Pe = pe.length;
                    let Ne;
                    if (a[45] !== query || a[46] !== Pe) {
                        Ne = function(groupMetadata, n) {
                            return {
                                type: "group",
                                selectable: true,
                                groupMetadata,
                                id: groupMetadata.id,
                                height: de,
                                itemKey: groupMetadata.id.toString(),
                                contentKey: query,
                                index: Pe + n,
                                query
                            };
                        };
                        a[45] = query;
                        a[46] = Pe;
                        a[47] = Ne;
                    } else {
                        Ne = a[47];
                    }
                    pe.push(...De.map(Ne));
                }
                a[27] = X;
                a[28] = U;
                a[29] = chat_groupMetadata;
                a[30] = query;
                a[31] = source;
                a[32] = W;
                a[33] = pe;
            } else {
                pe = a[33];
            }
            ce = pe.length ? pe : null;
        }
        const Me = ce;
        let we;
        e: {
            if (!o("WAWebABProps").getABPropConfigValue("enhanced_mention_suggestions_non_group_members_enabled")) {
                we = false;
                break e;
            }
            if (chat_groupMetadata == null) {
                we = false;
                break e;
            }
            if (source !== "chat-composer") {
                we = false;
                break e;
            }
            if (o("WAWebGroupMetadataGetters").getGroupType(chat_groupMetadata) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) {
                we = false;
                break e;
            }
            if (!chat_groupMetadata.participants.canAdd()) {
                we = false;
                break e;
            }
            const Ae = chat_groupMetadata.parentGroup;
            if (Ae != null && !chat_groupMetadata.participants.iAmAdmin()) {
                const Fe = r("WAWebGroupMetadataCollection").get(Ae);
                const Oe = o("WAWebCommunityAnnouncementGroupUtils").getCommunityAnnouncementGroup(Fe);
                if (Oe != null && Oe.memberAddMode !== o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD) {
                    we = false;
                    break e;
                }
            }
            we = true;
        }
        const Be = we;
        let We;
        e: {
            if (query == null || !Be) {
                We = false;
                break e;
            }
            const qe = r("countWhere")(Me ?? [], T);
            if (qe > 0) {
                We = false;
                break e;
            }
            const Ue = o("WAWebABProps").getABPropConfigValue("enhanced_mention_limit");
            if (Ue <= 0) {
                We = false;
                break e;
            }
            const Ve = o("WAWebABProps").getABPropConfigValue("enhanced_mention_suggestions_min_mention_char_count");
            if (Ve > 0 && query.length < Ve) {
                We = false;
                break e;
            }
            We = true;
        }
        const He = We;
        let Ge;
        e: {
            if (!He || chat_groupMetadata == null) {
                Ge = null;
                break e;
            }
            let ze;
            if (a[48] !== chat_groupMetadata) {
                ze = o("WAWebMentionsPluginUtil").getNonParticipantCandidates(chat_groupMetadata);
                a[48] = chat_groupMetadata;
                a[49] = ze;
            } else {
                ze = a[49];
            }
            Ge = ze;
        }
        const je = Ge;
        let Ke;
        if (a[50] !== je || a[51] !== query) {
            e: {
                if (query == null || je == null) {
                    Ke = null;
                    break e;
                }
                const Qe = o("WAWebABProps").getABPropConfigValue("enhanced_mention_limit");
                if (Qe <= 0) {
                    Ke = null;
                    break e;
                }
                const Xe = o("WAWebMentionsPluginUtil").filterContactsByQuery(query, je);
                if (Xe.length === 0) {
                    Ke = null;
                    break e;
                }
                const Ye = o("WAWebTextStatusGatingUtils").receiveTextStatusForNewSurfacesEnabled() ? h : g;
                const Je = [];
                let Ze;
                if (a[53] === Symbol.for("react.memo_cache_sentinel")) {
                    Ze = {
                        index: 0,
                        itemKey: "section-non-participants-separator",
                        type: "non_participant_separator",
                        selectable: false,
                        height: y
                    };
                    a[53] = Ze;
                } else {
                    Ze = a[53];
                }
                Je.push(Ze);
                let et;
                if (a[54] !== query) {
                    et = function(t, n) {
                        return {
                            type: "non_participant_contact",
                            selectable: true,
                            contact: t,
                            id: t.id,
                            height: Ye,
                            itemKey: `non-participant-${t.id.toString()}`,
                            contentKey: query,
                            index: n + 1,
                            query
                        };
                    };
                    a[54] = query;
                    a[55] = et;
                } else {
                    et = a[55];
                }
                const tt = Xe.slice(0, Qe).map(et);
                Je.push(...tt);
                Ke = Je;
            }
            a[50] = je;
            a[51] = query;
            a[52] = Ke;
        } else {
            Ke = a[52];
        }
        const nt = Ke;
        let rt;
        e: {
            if (Me == null && nt == null) {
                rt = null;
                break e;
            }
            let ot;
            if (a[56] !== nt || a[57] !== Me) {
                ot = [];
                if (Me != null) {
                    ot.push(...Me);
                }
                if (nt != null) {
                    let lt;
                    if (a[59] !== nt) {
                        lt = nt.filter(I);
                        a[59] = nt;
                        a[60] = lt;
                    } else {
                        lt = a[60];
                    }
                    ot.push(...lt);
                }
                a[56] = nt;
                a[57] = Me;
                a[58] = ot;
            } else {
                ot = a[58];
            }
            rt = ot.length > 0 ? ot : null;
        }
        const ut = rt;
        let ct;
        let dt;
        if (a[61] !== ut || a[62] !== ue || a[63] !== ae || a[64] !== F) {
            ct = F ? [] : (ut ?? []).map((e)=>{
                const t = e.type === "contact_header" || e.type === "group_header" || e.type === "non_participant_separator" || e.type === "contact" && o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e.id);
                return {
                    renderFn: function(n) {
                        return ue(e, n);
                    },
                    onSelect: function() {
                        return ae(e);
                    },
                    width: 360,
                    height: r("nullthrows")(e.height),
                    skipKeyboardNav: t,
                    disabled: t
                };
            });
            dt = ct.findIndex(k);
            a[61] = ut;
            a[62] = ue;
            a[63] = ae;
            a[64] = F;
            a[65] = ct;
            a[66] = dt;
        } else {
            ct = a[65];
            dt = a[66];
        }
        const startingIndex = dt;
        let pt;
        if (a[67] !== startingIndex || a[68] !== le || a[69] !== ct || a[70] !== leadOffset) {
            const Component = r("WAWebLexicalTypeAheadList.react");
            pt = <Component leadOffset={leadOffset} items={ct} onCancel={le} startingIndex={startingIndex}/>;
            a[67] = startingIndex;
            a[68] = le;
            a[69] = ct;
            a[70] = leadOffset;
            a[71] = pt;
        } else {
            pt = a[71];
        }
        return pt;
    }
    function k(e) {
        return e.skipKeyboardNav === false;
    }
    function I(e) {
        return e.type !== "non_participant_separator";
    }
    function T(e) {
        return e.selectable;
    }
    function D(e) {
        return !e.id.isBot();
    }
    function x() {
        const e = o("WAWebLexicalUtils").$getRangeSelection();
        if (!e) {
            return false;
        }
        const t = e.anchor.getNode();
        return t instanceof o("WAWebMentionNode").MentionNode;
    }
    function $(e) {
        return e.type === "group" || e.type === "contact" || e.type === "mention_all";
    }
    function P() {
        return new (o("WAWebNonJidMentionNode")).NonJidMentionNode({
            text: "@all"
        });
    }
    function N(e) {
        if (e.isBot()) {
            return o("WAWebBotUtils").isMetaAiBot(e) || !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled();
        }
        return false;
    }
    function M(e, t) {
        if (e) {
            return <div className="xhslqc4">{s._("Only available on your phone")}</div>;
        }
        if (t) {
            return <div className="xo1mcw5">{r("WAWebFbtCommon")("Learn more")}</div>;
        }
        return null;
    }
    M.displayName = `${M.name} [from ${i.id}]`;
    function w({ groupMetadata, query, source }) {
        if (source === "message_edit" || !"all".startsWith(query)) {
            return false;
        }
        const l = o("WAWebABProps").getABPropConfigValue("admin_only_mention_everyone_group_size");
        const s = groupMetadata.participants.iAmAdmin() ?? false;
        const u = groupMetadata.participants.length ?? 0;
        return u < l || s;
    }
    l.default = E;
}, 226);