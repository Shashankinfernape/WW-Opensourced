__d("WAWebNewsletterContactsReactionList.react", [
    "fbt",
    "WAWebApiContact",
    "WAWebCellFrame.react",
    "WAWebCmd",
    "WAWebCommonNewsletterStrings",
    "WAWebEmptyState.react",
    "WAWebFindChatAction",
    "WAWebFlatList.react",
    "WAWebFlex.react",
    "WAWebMobilePlatforms",
    "WAWebName.react",
    "WAWebReactionCellDetailThumb.react",
    "WAWebText.react",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        reactionCellImage: {
            width: "x1guw455",
            height: "xdd8jsf",
            $$css: true
        },
        paddingStart2: {
            paddingInlineStart: "x4tra6z",
            $$css: true
        },
        paddingEnd12: {
            paddingInlineEnd: "xde1mab",
            $$css: true
        },
        paddingVert40: {
            paddingTop: "x14a8spa",
            paddingBottom: "x1c76a8b",
            $$css: true
        },
        paddingBottom8: {
            paddingBottom: "x12xbjc7",
            $$css: true
        },
        paddingTop8: {
            paddingTop: "x16ovd2e",
            $$css: true
        }
    };
    const d = 52;
    function M14(e) {
        const t = o("react-compiler-runtime").c(14);
        const { contact, onCloseDetailsPane, reaction } = e;
        let s;
        if (t[0] !== contact.id || t[1] !== onCloseDetailsPane) {
            s = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const e = o("WAWebWidFactory").asUserWidOrThrow(contact.id);
                    const t = e.isLid() ? o("WAWebApiContact").getPhoneNumber(e) : null;
                    if (t != null) {
                        const n = yield o("WAWebFindChatAction").findOrCreateLatestChat(t, "reactionDetailsPane");
                        const r = n.chat;
                        o("WAWebCmd").Cmd.chatInfoDrawer(r);
                        onCloseDetailsPane();
                    }
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            t[0] = contact.id;
            t[1] = onCloseDetailsPane;
            t[2] = s;
        } else {
            s = t[2];
        }
        const d = s;
        let showLabelIcon;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            showLabelIcon = o("WAWebMobilePlatforms").isSMB();
            t[3] = showLabelIcon;
        } else {
            showLabelIcon = t[3];
        }
        let p;
        if (t[4] !== contact) {
            p = u.jsx(o("WAWebName.react").Name, {
                contact,
                titlify: true,
                ellipsify: true,
                showLabelIcon
            });
            t[4] = contact;
            t[5] = p;
        } else {
            p = t[5];
        }
        let _;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            _ = [
                c.reactionCellImage,
                c.paddingStart2,
                c.paddingEnd12
            ];
            t[6] = _;
        } else {
            _ = t[6];
        }
        let f;
        if (t[7] !== contact.id || t[8] !== reaction) {
            const Component = o("WAWebFlex.react").FlexRow;
            f = <Component align="center" justify="start" xstyle={_}>{u.jsx(o("WAWebReactionCellDetailThumb.react").ReactionCellProfileImageThumb, {
                profileImageId: contact.id,
                reactionText: reaction
            })}</Component>;
            t[7] = contact.id;
            t[8] = reaction;
            t[9] = f;
        } else {
            f = t[9];
        }
        let g;
        if (t[10] !== d || t[11] !== p || t[12] !== f) {
            const Component = r("WAWebCellFrame.react");
            g = <Component primary={p} image={f} theme="newsletter-reaction-by-contact" customImage onClick={d}/>;
            t[10] = d;
            t[11] = p;
            t[12] = f;
            t[13] = g;
        } else {
            g = t[13];
        }
        return g;
    }
    function p(e) {
        const t = o("react-compiler-runtime").c(18);
        const { flatListController, isOffline, onCloseDetailsPane, reactionList, reactionSendersServerError, retryFetchingReactionSenders, setReactionSendersServerError } = e;
        let f;
        if (t[0] !== reactionList) {
            f = reactionList.map(_);
            t[0] = reactionList;
            t[1] = f;
        } else {
            f = t[1];
        }
        const g = f;
        let h;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            h = {
                className: "xx42vgk x13fuv20 x178xt8z x1p57kb1 xvtqlqk xvpt6g3 xdx6fka"
            };
            t[2] = h;
        } else {
            h = t[2];
        }
        let y;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebText.react").WAWebTextSmall;
            y = <div {...babelHelpers.extends({}, h, {
                children: <Component color="secondary">{s._("You can only view individual reactions from contacts.")}</Component>
            })}/>;
            t[3] = y;
        } else {
            y = t[3];
        }
        const C = y;
        let b;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            b = {
                className: "x9f619 xh8yej3 x2b8uid x1p57kb1 x1ci70gm x1m4z3lf x1evaxtz"
            };
            t[4] = b;
        } else {
            b = t[4];
        }
        let v;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebText.react").WAWebTextMuted;
            v = <div {...babelHelpers.extends({}, b, {
                children: <Component color="secondary">{s._("No contacts have reacted yet")}</Component>
            })}/>;
            t[5] = v;
        } else {
            v = t[5];
        }
        const S = v;
        if (isOffline) {
            let R;
            if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
                R = o("WAWebCommonNewsletterStrings").getNoInternetConnectionText();
                t[6] = R;
            } else {
                R = t[6];
            }
            let L;
            if (t[7] !== retryFetchingReactionSenders) {
                const Component = o("WAWebEmptyState.react").EmptyErrorStateWithButton;
                L = <Component text={R} onClick={retryFetchingReactionSenders} center xstyle={c.paddingVert40}/>;
                t[7] = retryFetchingReactionSenders;
                t[8] = L;
            } else {
                L = t[8];
            }
            return L;
        }
        if (reactionSendersServerError) {
            let E;
            if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
                E = s._("Reactions didn't load. Please try again later.");
                t[9] = E;
            } else {
                E = t[9];
            }
            let k;
            if (t[10] !== retryFetchingReactionSenders || t[11] !== setReactionSendersServerError) {
                const Component = o("WAWebEmptyState.react").EmptyErrorStateWithButton;
                k = <Component text={E} onClick={function() {
                    setReactionSendersServerError(false);
                    retryFetchingReactionSenders();
                }} center xstyle={c.paddingVert40}/>;
                t[10] = retryFetchingReactionSenders;
                t[11] = setReactionSendersServerError;
                t[12] = k;
            } else {
                k = t[12];
            }
            return k;
        }
        let I;
        if (t[13] !== flatListController || t[14] !== g || t[15] !== onCloseDetailsPane || t[16] !== reactionList.length) {
            I = <>{reactionList.length > 0 ? u.jsx(o("WAWebFlatList.react").FlatList, {
                data: g,
                direction: "vertical",
                renderItem: function(t) {
                    return <M14 contact={t.contact} reaction={t.reaction} onCloseDetailsPane={onCloseDetailsPane}/>;
                },
                flatListController,
                containerXstyles: [
                    c.paddingBottom8,
                    c.paddingTop8
                ]
            }) : S}{C}</>;
            t[13] = flatListController;
            t[14] = g;
            t[15] = onCloseDetailsPane;
            t[16] = reactionList.length;
            t[17] = I;
        } else {
            I = t[17];
        }
        return I;
    }
    function _({ contact, reaction }) {
        return {
            itemKey: contact.id.toJid(),
            contentKey: contact.id.toJid(),
            contact,
            reaction,
            height: d
        };
    }
    l.default = p;
}, 226);