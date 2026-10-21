__d("WAWebMessageMultiVcard.react", [
    "fbt",
    "Promise",
    "WADeepEquals",
    "WALogger",
    "WAMemoizeOne",
    "WAWebConfirmPopup.react",
    "WAWebContactEditUtils",
    "WAWebContactLogging",
    "WAWebDisplayType",
    "WAWebEmojiText.react",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMessageAuthor.react",
    "WAWebMessageBubbleActions.react",
    "WAWebMessageComponentContext.react",
    "WAWebMessageMeta.react",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebMultiVcardModalLoadable.react",
    "WAWebProfileImage.react",
    "WAWebProfilePicThumbCollection",
    "WAWebQueryExistsJob",
    "WAWebReleaseToEventLoop",
    "WAWebUsernameGatingUtils",
    "WAWebVcardParsingUtils",
    "WAWebVcardUtils",
    "compactMap",
    "err",
    "react",
    "useLazyRef",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useCallback, useContext, useEffect, useRef, useState } = m;
    const y = {
        name: {
            color: "x14ug900",
            fontSize: "x1f6kntn",
            fontWeight: "x1s688f",
            lineHeight: "x16h55sf",
            textAlign: "x1yc453h",
            $$css: true
        },
        emoji: {
            verticalAlign: "xg49k01",
            $$css: true
        }
    };
    const C = 3;
    function BComponent(t) {
        const t_msgKey = t.msgKey;
        const i = o("useWAWebMsgValues").useMsgValues(t_msgKey, [
            o("WAWebFrontendMsgGetters").getRtl,
            o("WAWebFrontendMsgGetters").getDir,
            o("WAWebFrontendMsgGetters").getSenderObj,
            o("WAWebMsgGetters").getIsSentByMe,
            o("WAWebMsgGetters").getIsGroupMsg
        ]);
        const l = i[0];
        const c = i[1];
        const m = i[2];
        const b = i[3];
        const v = i[4];
        const L = useState(true);
        const E = L[0];
        const k = L[1];
        const I = useState(null);
        const T = I[0];
        const D = I[1];
        const x = useState(t.vcardList);
        const vcardList = x[0];
        const P = x[1];
        const N = useContext(o("WAWebMessageComponentContext.react").MessageComponentContext);
        const N_onSaveContact = N.onSaveContact;
        if (!o("WADeepEquals").deepEqual(vcardList, t.vcardList)) {
            P(t.vcardList);
            k(true);
            D(null);
        }
        const onSaveContact = function(t) {
            if (N_onSaveContact) {
                N_onSaveContact(t);
            } else {
                o("WAWebContactEditUtils").openContactEditDrawer(t, o("WAWebContactLogging").ContactSourceType.VCard);
            }
        };
        const AComponent = function() {
            if (vcardList) {
                const vcards = vcardList.map((e)=>e.parsedVcard);
                if (o("WAWebUsernameGatingUtils").usernameContactUiVcardEnabled()) {
                    const a = r("compactMap")(vcards, function(e) {
                        return o("WAWebVcardParsingUtils").vcardLidWid(e) ?? o("WAWebVcardParsingUtils").vcardPhoneNumberWids(e)[0];
                    });
                    (u || (u = n("Promise"))).all(a.map((e)=>{
                        const t = e.isLid() ? o("WAWebQueryExistsJob").queryWidUsernameExists(e) : o("WAWebQueryExistsJob").queryWidExists(e);
                        return t.then((t)=>({
                                wid: e,
                                result: t
                            }));
                    })).then((e)=>{
                        const usernames = new Map;
                        let r = false;
                        e.forEach(({ result, wid })=>{
                            const a = result?.username;
                            if (a != null) {
                                usernames.set(wid.toString(), a);
                            } else if (wid.isLid()) {
                                r = true;
                            }
                        });
                        if (r) {
                            R();
                        } else {
                            const Component = o("WAWebMultiVcardModalLoadable.react").WAWebMultiVcardModalLoadable;
                            o("WAWebModalManager").ModalManager.open(<Component vcards={vcards} onSaveContact={onSaveContact} usernames={usernames}/>);
                        }
                    }).catch((t)=>{
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[WAWebMessageMultiVcard] usync query failed"
                        ]))).catching(t instanceof Error ? t : r("err")(String(t))).sendLogs("multi-vcard-username-query-failed", {
                            sampling: 0.01
                        });
                        R();
                    });
                } else {
                    const Component = o("WAWebMultiVcardModalLoadable.react").WAWebMultiVcardModalLoadable;
                    o("WAWebModalManager").ModalManager.open(<Component vcards={vcards} onSaveContact={onSaveContact}/>);
                }
            }
        };
        const F = r("useLazyRef")(function() {
            return r("WAMemoizeOne")(function(e) {
                return e.vcardList.map(({ displayName, parsedVcard })=>{
                    const wids = o("WAWebVcardParsingUtils").vcardAllWids(parsedVcard);
                    const thumbnail = o("WAWebVcardParsingUtils").vcardThumbnail(parsedVcard);
                    return {
                        displayName,
                        wids,
                        thumbnail
                    };
                });
            });
        });
        const O = useCallback(function() {
            const F_current = F.current;
            return F_current({
                vcardList
            });
        }, [
            F,
            vcardList
        ]);
        const BRef = useRef(vcardList);
        BRef.current = vcardList;
        useEffect(function() {
            const t = vcardList;
            const r = O();
            const a = [].concat(...r.map(({ wids })=>wids)).slice(0, 10);
            (u || (u = n("Promise"))).all(a.map((e)=>o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.find(e))).then(()=>o("WAWebReleaseToEventLoop").releaseToEventLoop()).then(()=>{
                if (BRef.current === t) {
                    k(false);
                    D(S(r));
                }
            });
        }, [
            O,
            vcardList
        ]);
        const W = o("WAWebDisplayType").isWideDisplay(t.displayType);
        const q = t.displayAuthor ? <div {...babelHelpers.extends({}, {
            0: {
                className: "xso031l x1q0q8m5 x120ee7l xzueoph xs9asl8"
            },
            1: {
                className: "xso031l x120ee7l xs9asl8 x1sy0etr xat24cr"
            }
        }[!!t.quotedMsg << 0], {
            children: d.jsx(r("WAWebMessageAuthor.react"), {
                msgKey: t_msgKey,
                contact: m,
                displayType: t.displayType
            })
        })}/> : null;
        const U = T || O();
        const V = U.map(({ displayName })=>displayName);
        const H = o("WAWebVcardUtils").getNameStringFromNames(V);
        for(var G = Math.min(U.length, C), z = [], j = 0; j < G; j++){
            const K = U[j];
            const { thumbnail, wids } = K;
            const Y = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.findThumbnailWid(wids);
            const J = {
                0: "x1n2onr6 x11uqc5h x1rg5ohu",
                2: "x1n2onr6 x1rg5ohu xeut3pp x14437wl",
                1: "x1n2onr6 x1rg5ohu xqqomq6 x14437wl",
                3: "x1n2onr6 x1rg5ohu xqqomq6 x14437wl"
            }[(j === 1) << 1 | (j === 2) << 0];
            if (!E && (Y || thumbnail != null && thumbnail !== "")) {
                z.push(<div key={`profile-pic-${j}`} className={J}>{d.jsx(r("WAWebProfileImage.react"), {
                    wid: Y,
                    thumb: thumbnail,
                    size: 39,
                    border: true
                })}</div>);
            } else {
                z.push(<div key={`default-pic-${j}`} className={J}>{d.jsx(r("WAWebProfileImage.react"), {
                    size: 39,
                    border: true
                })}</div>);
            }
        }
        const Z = t.quotedMsg ? <div {...babelHelpers.extends({}, {
            0: {
                className: "x1198e8h x1lxpwgx xwoyzhm xw01apr"
            },
            1: {
                className: "x1lxpwgx xwoyzhm xw01apr xdj266r"
            }
        }[!!q << 0], {
            children: t.quotedMsg
        })}/> : null;
        const ee = {
            0: "x9f619 x1yrsyyn x1bjonze xwib8y2 x7coems x3orp4s",
            4: "x9f619 x1yrsyyn x1bjonze xwib8y2 x7coems x13nahy2 xh8yej3",
            2: "x9f619 x1yrsyyn x1bjonze xwib8y2 x7coems x1yuel0x",
            6: "x9f619 x1yrsyyn x1bjonze xwib8y2 x7coems x13nahy2 x1yuel0x",
            1: "x9f619 x1yrsyyn x1bjonze xwib8y2 x7coems x13nahy2 xh8yej3",
            5: "x9f619 x1yrsyyn x1bjonze xwib8y2 x7coems x13nahy2 xh8yej3",
            3: "x9f619 x1yrsyyn x1bjonze xwib8y2 x7coems x13nahy2 xh8yej3",
            7: "x9f619 x1yrsyyn x1bjonze xwib8y2 x7coems x13nahy2 xh8yej3"
        }[(t.displayType === o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO) << 2 | !!W << 1 | (t.displayType === o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS || t.displayType === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY || t.displayType === o("WAWebDisplayType").DISPLAY_TYPE.CONTACT_CARD) << 0];
        return <div className={ee}>{q}{Z}<div className="x1n2onr6 x78zum5 x6s0dn4 xng8ra xdzw4kq xqf2s3x" role={vcardList ? "button" : null} title={H} onClick={AComponent}><div className="x2lah0s x1c4vz4f xdl72j9 x1g6eq07">{z}</div><div className="xs83m0k x1iyjqo2 xdl72j9 x18wx58x x6ikm8r x10wlt62">{d.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: H,
            element: "div",
            xstyle: y.name,
            emojiXstyle: y.emoji,
            dirMismatch: l !== r("WAWebL10N").isRTL(),
            direction: c,
            wbr: 15
        })}</div><div className="x1o583il x10l6tqk x13niomq">{d.jsx(o("WAWebMessageMeta.react").Meta, {
            msgKey: t_msgKey
        })}</div></div>{d.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
            items: [
                {
                    label: s._("View all"),
                    onClick: AComponent
                }
            ]
        })}</div>;
    }
    BComponent.displayName = `${BComponent.name} [from ${i.id}]`;
    function v(e) {
        return !!(o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.findThumbnailWid(e.wids) || e.thumbnail);
    }
    function S(e) {
        return e.toSorted(function(e, t) {
            const i = v(e);
            const l = v(t);
            if (i && !l) {
                return -1;
            }
            if (!i && l) {
                return 1;
            }
            const s = e.displayName?.toString() ?? "";
            const u = t.displayName?.toString() ?? "";
            if (s < u) {
                return -1;
            }
            if (s > u) {
                return 1;
            }
            return 0;
        });
    }
    var R = ()=>{
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        o("WAWebModalManager").ModalManager.open(<Component tsNavigationData={{
            surface: "unknown",
            viewName: "multi-vcard"
        }} onOK={function() {
            return o("WAWebModalManager").ModalManager.close();
        }}>{s._("Couldn't load contact information. Please try again later.")}</Component>);
    };
    l.default = BComponent;
}, 226);