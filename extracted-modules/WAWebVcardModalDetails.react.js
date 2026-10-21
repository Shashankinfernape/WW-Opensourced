__d("WAWebVcardModalDetails.react", [
    "fbt",
    "WAWebButton.react",
    "WAWebCellFrame.react",
    "WAWebChatEntryPoint",
    "WAWebContactCollection",
    "WAWebContactManagementGating",
    "WAWebContactUtils",
    "WAWebCopyPasteSelectable.react",
    "WAWebDrawerItem.react",
    "WAWebEmojiText.react",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebInitialsFromNameUtils",
    "WAWebL10N",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebOpenChatWithContactAction",
    "WAWebProfilePicThumbCollection",
    "WAWebProfilePicThumbGetters",
    "WAWebUsernameTypes",
    "WAWebUsernameWorkerCompatibleGatingUtils",
    "WAWebVcardGetNameFromParsed",
    "WAWebVcardParsingUtils",
    "WAWebVcardUtils",
    "WAWebWidFactory",
    "WAWebWidFormat",
    "WDSBaseCheckbox.react",
    "WDSButton.react",
    "WDSIconWdsIcChatFilled.react",
    "WDSProfilePhoto.react",
    "WDSTooltip.react",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "useWAWebDefaultProfileColors",
    "useWAWebProfilePicThumbValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useEffect = e.useEffect;
    const d = {
        content: {
            paddingTop: "xexx8yu",
            paddingInlineEnd: "x1pic42t",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1onr9mi",
            marginTop: "xdj266r",
            backgroundColor: "x1280gxy",
            $$css: true
        },
        itemWithCheckbox: {
            paddingInlineStart: "x12w63v0",
            $$css: true
        }
    };
    function m(e) {
        return e.join(" ");
    }
    function P2Component(e) {
        const t = o("react-compiler-runtime").c(35);
        const { onSaveContact, parsedVcard, thumbnail, username } = e;
        let c;
        if (t[0] !== parsedVcard || t[1] !== username) {
            const m = o("WAWebVcardGetNameFromParsed").vcardGetNameFromParsed(parsedVcard);
            const p = o("WAWebUsernameTypes").asMaybeUsername(username);
            if (r("isStringNullOrEmpty")(m) && p != null) {
                c = o("WAWebUsernameTypes").displayUsername(p);
            } else {
                c = m;
            }
            t[0] = parsedVcard;
            t[1] = username;
            t[2] = c;
        } else {
            c = t[2];
        }
        let f;
        if (t[3] !== c) {
            f = u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: c,
                direction: "auto",
                titlify: true,
                ellipsify: true,
                selectable: true
            });
            t[3] = c;
            t[4] = f;
        } else {
            f = t[4];
        }
        const g = f;
        let h;
        if (t[5] !== parsedVcard) {
            const y = o("WAWebVcardUtils").vcardGetOrganizationString(parsedVcard);
            h = r("isStringNullOrEmpty")(y) ? undefined : y;
            t[5] = parsedVcard;
            t[6] = h;
        } else {
            h = t[6];
        }
        const C = h;
        let b;
        if (t[7] !== parsedVcard) {
            b = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.getThumbnailWidFromVcard(parsedVcard);
            t[7] = parsedVcard;
            t[8] = b;
        } else {
            b = t[8];
        }
        const v = b;
        const S = c ?? "";
        let R;
        if (t[9] !== S || t[10] !== thumbnail || t[11] !== v) {
            R = <_ name={S} thumbnail={thumbnail} wid={v}/>;
            t[9] = S;
            t[10] = thumbnail;
            t[11] = v;
            t[12] = R;
        } else {
            R = t[12];
        }
        const L = R;
        if (o("WAWebContactManagementGating").contactManagementEnabled()) {
            let E;
            let k;
            let I;
            if (t[13] !== parsedVcard) {
                k = o("WAWebContactUtils").getContactDataFromVcard(parsedVcard);
                E = k?.phoneNumber != null && o("WAWebContactUtils").canSaveAsMyContact(k?.phoneNumber);
                I = k?.lid != null && o("WAWebContactUtils").canSaveAsMyContact(k?.lid);
                t[13] = parsedVcard;
                t[14] = E;
                t[15] = k;
                t[16] = I;
            } else {
                E = t[14];
                k = t[15];
                I = t[16];
            }
            const N = E || I && o("WAWebUsernameWorkerCompatibleGatingUtils").usernameContactUIEnabled();
            if (k && N) {
                let M;
                if (t[17] !== k || t[18] !== onSaveContact) {
                    M = function() {
                        if (onSaveContact) {
                            o("WAWebModalManager").ModalManager.close();
                            onSaveContact(k);
                        }
                    };
                    t[17] = k;
                    t[18] = onSaveContact;
                    t[19] = M;
                } else {
                    M = t[19];
                }
                const w = M;
                let A;
                if (t[20] !== L || t[21] !== C || t[22] !== g) {
                    const Component = o("WAWebFlex.react").FlexItem;
                    A = <Component grow={1}>{u.jsx(r("WAWebCellFrame.react"), {
                        image: L,
                        theme: "plain",
                        primary: g,
                        secondary: C
                    })}</Component>;
                    t[20] = L;
                    t[21] = C;
                    t[22] = g;
                    t[23] = A;
                } else {
                    A = t[23];
                }
                let F;
                if (t[24] !== k || t[25] !== w || t[26] !== onSaveContact) {
                    const Component = o("WAWebButton.react").WAWebButtonPrimary;
                    const Component_1 = o("WAWebFlex.react").FlexItem;
                    F = onSaveContact && <Component_1 xstyle={d.content}><Component onClick={w}>{k.isExistingContact ? s._("View") : s._("Save")}</Component></Component_1>;
                    t[24] = k;
                    t[25] = w;
                    t[26] = onSaveContact;
                    t[27] = F;
                } else {
                    F = t[27];
                }
                let O;
                if (t[28] !== A || t[29] !== F) {
                    const Component = o("WAWebFlex.react").FlexRow;
                    O = <Component align="center">{A}{F}</Component>;
                    t[28] = A;
                    t[29] = F;
                    t[30] = O;
                } else {
                    O = t[30];
                }
                return O;
            }
        }
        let B;
        if (t[31] !== L || t[32] !== C || t[33] !== g) {
            B = u.jsx(r("WAWebCellFrame.react"), {
                image: L,
                theme: "plain",
                primary: g,
                secondary: C
            });
            t[31] = L;
            t[32] = C;
            t[33] = g;
            t[34] = B;
        } else {
            B = t[34];
        }
        return B;
    }
    function _(e) {
        const n = o("react-compiler-runtime").c(25);
        const { name, thumbnail, wid } = e;
        let s;
        if (n[0] !== wid) {
            s = wid != null ? o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(wid) : null;
            n[0] = wid;
            n[1] = s;
        } else {
            s = n[1];
        }
        const d = s;
        let m;
        if (n[2] === Symbol.for("react.memo_cache_sentinel")) {
            m = [
                o("WAWebProfilePicThumbGetters").getImg
            ];
            n[2] = m;
        } else {
            m = n[2];
        }
        const p = o("useWAWebProfilePicThumbValues").useOptionalProfilePicThumbValues(d?.id, m);
        let _;
        let f;
        if (n[3] !== wid) {
            _ = function() {
                if (wid != null) {
                    o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.find(wid).catch(r("WAWebNoop"));
                }
            };
            f = [
                wid
            ];
            n[3] = wid;
            n[4] = _;
            n[5] = f;
        } else {
            _ = n[4];
            f = n[5];
        }
        e_useEffect(_, f);
        let g;
        if (n[6] !== name || n[7] !== wid) {
            const h = wid != null ? o("WAWebContactCollection").ContactCollection.get(wid) : null;
            g = h != null ? o("WAWebInitialsFromNameUtils").getInitialsFromContact(h) : o("WAWebInitialsFromNameUtils").getInitialsFromNames({
                name,
                shortName: name.split(" ")[0],
                pushname: null
            });
            n[6] = name;
            n[7] = wid;
            n[8] = g;
        } else {
            g = n[8];
        }
        const y = g;
        let C;
        if (n[9] !== y.firstInitial || n[10] !== y.secondInitial) {
            C = [
                y.firstInitial,
                y.secondInitial
            ].filter(Boolean).join("") || undefined;
            n[9] = y.firstInitial;
            n[10] = y.secondInitial;
            n[11] = C;
        } else {
            C = n[11];
        }
        const initials = C;
        const v = p?.[0] ?? thumbnail;
        let S;
        if (n[12] !== wid) {
            S = wid != null ? o("useWAWebDefaultProfileColors").getWDSProfilePhotoColor(wid) : undefined;
            n[12] = wid;
            n[13] = S;
        } else {
            S = n[13];
        }
        let customColor;
        if (n[14] !== wid) {
            customColor = wid != null ? o("useWAWebDefaultProfileColors").getWDSProfilePhotoCustomColor(wid) : undefined;
            n[14] = wid;
            n[15] = customColor;
        } else {
            customColor = n[15];
        }
        let placeholderIcon;
        if (n[16] !== wid) {
            placeholderIcon = wid != null ? o("useWAWebDefaultProfileColors").getProfilePhotoPlaceholderIcon(wid) : undefined;
            n[16] = wid;
            n[17] = placeholderIcon;
        } else {
            placeholderIcon = n[17];
        }
        let E;
        if (n[18] !== initials || n[19] !== name || n[20] !== placeholderIcon || n[21] !== v || n[22] !== S || n[23] !== customColor) {
            E = u.jsx(r("WDSProfilePhoto.react"), {
                type: "person",
                name,
                src: v,
                size: "medium",
                color: S,
                customColor,
                placeholderIcon,
                isDecorative: true,
                initials,
                testid: "vcard_modal_header_photo"
            });
            n[18] = initials;
            n[19] = name;
            n[20] = placeholderIcon;
            n[21] = v;
            n[22] = S;
            n[23] = customColor;
            n[24] = E;
        } else {
            E = n[24];
        }
        return E;
    }
    const f = (t, parsedVcard)=>{
        const e = o("WAWebVcardGetNameFromParsed").vcardGetNameFromParsed(parsedVcard);
        const a = s._("Message to {contact-name}", [
            s._param("contact-name", e)
        ]);
        const i = s._("Message");
        const Component = r("WDSButton.react");
        const Component_1 = r("WDSTooltip.react");
        const l = <Component_1 label={i}><Component testid="vcard_chat_button" Icon={r("WDSIconWdsIcChatFilled.react")} variant="borderless" onPress={function() {
            return g(t);
        }} aria-label={a}/></Component_1>;
        return l;
    };
    var g = (t)=>{
        o("WAWebModalManager").ModalManager.close();
        o("WAWebOpenChatWithContactAction").openChatWithContact({
            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Vcard,
            findChatOrigin: "vCardModalDetails",
            targetId: t
        });
    };
    const h = (t)=>{
        const e = `mailto:${t}`;
        o("WAWebExternalLink.react").openExternalLink(e);
    };
    const y = (t)=>{
        const e = t.filter(Boolean).map(encodeURIComponent).join(", ");
        const n = `https://maps.google.com/maps/search/${e}?hl=${r("WAWebL10N").getNormalizedLocale()}`;
        o("WAWebExternalLink.react").openExternalLink(n);
    };
    function C(e) {
        const t = o("react-compiler-runtime").c(21);
        const { onSaveContact, parsedVcard, thumbnail, username } = e;
        let c;
        if (t[0] !== parsedVcard || t[1] !== e.includePhoneNumber || t[2] !== e.includeUsername || t[3] !== e.onTogglePhoneNumber || t[4] !== e.onToggleUsername || t[5] !== username) {
            const T = o("WAWebVcardParsingUtils").vcardLidWid(parsedVcard);
            const D = parsedVcard.TEL?.filter(v) ?? [];
            const x = parsedVcard.TEL?.filter(b);
            const $ = T ?? (D[0]?.properties?.waid?.[0] != null ? o("WAWebWidFactory").createUserWidOrThrow(D[0].properties.waid[0]) : null);
            c = [];
            D.forEach((t)=>{
                const n = o("WAWebWidFactory").createUserWidOrThrow(t.properties.waid[0]);
                const Component = o("WAWebCopyPasteSelectable.react").SelectableSpan;
                const r = <Component selectable>{o("WAWebWidFormat").widToFormattedUser(n)}</Component>;
                c.push({
                    title: r,
                    icon: f(n, parsedVcard),
                    checkboxValue: e.includePhoneNumber,
                    onCheckboxChange: e.onTogglePhoneNumber,
                    text: o("WAWebVcardUtils").vcardGetType(t),
                    key: `vCard-${String(t.index)}`
                });
            });
            if (username != null && $ != null) {
                c.push({
                    title: `@${username}`,
                    icon: f($, parsedVcard),
                    text: s._("USERNAME"),
                    key: "vCard-username",
                    checkboxValue: e.includeUsername,
                    onCheckboxChange: e.onToggleUsername
                });
            }
            parsedVcard.EMAIL?.forEach(function(e) {
                c.push({
                    title: r("WAWebL10N").forceLTR(e.value),
                    text: o("WAWebVcardUtils").vcardGetType(e),
                    key: `vCard-${String(e.index)}`,
                    onClick: function() {
                        return h(e.value);
                    }
                });
            });
            parsedVcard.ADR?.forEach(function(e) {
                const t = m(e.value);
                c.push({
                    title: t,
                    text: o("WAWebVcardUtils").vcardGetType(e),
                    key: `vCard-${String(e.index)}`,
                    onClick: function() {
                        return y(e.value);
                    }
                });
            });
            x?.forEach(function(e) {
                c.push({
                    title: r("WAWebL10N").forceLTR(e.value),
                    text: o("WAWebVcardUtils").vcardGetType(e),
                    key: `vCard-${String(e.index)}`
                });
            });
            parsedVcard.BDAY?.forEach(function(e) {
                c.push({
                    title: o("WAWebVcardParsingUtils").vcardGetDate(e.value),
                    text: s._("Birthday"),
                    key: `vCard-${String(e.index)}`
                });
            });
            parsedVcard.NICKNAME?.forEach(function(e) {
                c.push({
                    title: e.value,
                    text: s._("Nickname"),
                    key: `vCard-${String(e.index)}`
                });
            });
            parsedVcard.SERVICE?.forEach(function(e) {
                if (!(e.type === "WA-LID" || e.type === "WA-BIZ-AUTOMATED-TYPE")) {
                    c.push({
                        testid: `vcard-service-${e.type}`,
                        title: e.value,
                        text: o("WAWebVcardUtils").vcardGetType(e),
                        key: `vCard-${String(e.index)}`
                    });
                }
            });
            t[0] = parsedVcard;
            t[1] = e.includePhoneNumber;
            t[2] = e.includeUsername;
            t[3] = e.onTogglePhoneNumber;
            t[4] = e.onToggleUsername;
            t[5] = username;
            t[6] = c;
        } else {
            c = t[6];
        }
        let P;
        if (t[7] !== onSaveContact || t[8] !== parsedVcard || t[9] !== thumbnail || t[10] !== username) {
            P = <P2Component parsedVcard={parsedVcard} thumbnail={thumbnail} onSaveContact={onSaveContact} username={username}/>;
            t[7] = onSaveContact;
            t[8] = parsedVcard;
            t[9] = thumbnail;
            t[10] = username;
            t[11] = P;
        } else {
            P = t[11];
        }
        const N = P;
        let M;
        if (t[12] !== c) {
            M = c.map((e, t)=>{
                const isLastItem = t === c.length - 1;
                const Component = r("WAWebDrawerItem.react");
                const a = <Component key={e.key} testid={e.testid} title={e.title} icon={e.icon} onClick={e.onClick} isLastItem={isLastItem}>{e.text}</Component>;
                if (e.onCheckboxChange != null) {
                    const Component = r("WDSBaseCheckbox.react");
                    const Component_1 = o("WAWebFlex.react").FlexItem;
                    const Component_2 = o("WAWebFlex.react").FlexRow;
                    return <Component_2 key={e.key} align="center" gap={8} xstyle={d.itemWithCheckbox}><Component value={e.checkboxValue ?? true} onChange={e.onCheckboxChange}/><Component_1 grow={1}>{a}</Component_1></Component_2>;
                }
                return a;
            });
            t[12] = c;
            t[13] = M;
        } else {
            M = t[13];
        }
        const w = M;
        let A;
        if (t[14] === Symbol.for("react.memo_cache_sentinel")) {
            A = {
                className: "x1280gxy"
            };
            t[14] = A;
        } else {
            A = t[14];
        }
        let F;
        if (t[15] === Symbol.for("react.memo_cache_sentinel")) {
            F = {
                className: "xexx8yu x1pic42t x18d9i69 x1onr9mi xdj266r x1280gxy"
            };
            t[15] = F;
        } else {
            F = t[15];
        }
        let O;
        if (t[16] !== w) {
            O = <div {...babelHelpers.extends({}, F, {
                children: w
            })}/>;
            t[16] = w;
            t[17] = O;
        } else {
            O = t[17];
        }
        let B;
        if (t[18] !== N || t[19] !== O) {
            B = <div {...babelHelpers.extends({}, A, {
                children: [
                    N,
                    O
                ]
            })}/>;
            t[18] = N;
            t[19] = O;
            t[20] = B;
        } else {
            B = t[20];
        }
        return B;
    }
    function b(e) {
        return !e.properties.waid;
    }
    function v(e) {
        return e.properties.waid;
    }
    l.default = C;
}, 226);