__d("WAWebUsernameContactField.react", [
    "fbt",
    "WALogger",
    "WAWebChatEntryPoint",
    "WAWebClickable.react",
    "WAWebClickableLink.react",
    "WAWebCmd",
    "WAWebContactCollection",
    "WAWebContactLogging",
    "WAWebContactSyncLogger",
    "WAWebFindChatAction",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebQueryExistsJob",
    "WAWebRichTextField.react",
    "WAWebUsernameConstants",
    "WAWebUsernameUtils",
    "WAWebUsernameValidationUtils",
    "WAWebWidFactory",
    "WDSIconIcAlternateEmail.react",
    "WDSIconIcClose.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
    "react",
    "useLazyRef",
    "useWAWebUnmountSignal"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    const c_useState = c.useState;
    const p = {
        iconSection: {
            display: "x78zum5",
            flexGrow: "x1c4vz4f",
            flexShrink: "x2lah0s",
            justifyContent: "x1nhvcw1",
            alignItems: "x6s0dn4",
            color: "xhslqc4",
            $$css: true
        },
        marginTop28: {
            marginTop: "xevwqry",
            $$css: true
        },
        marginStart12: {
            marginInlineStart: "x1uvdrpn",
            $$css: true
        },
        paddingHoriz24: {
            paddingInlineStart: "xb0esv5",
            paddingInlineEnd: "xyo0t3i",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        },
        removeButton: {
            alignItems: "x6s0dn4",
            borderStartStartRadius: "xt8t1vi",
            borderStartEndRadius: "x1xc408v",
            borderEndEndRadius: "x129tdwq",
            borderEndStartRadius: "x15urzxu",
            color: "xhslqc4",
            cursor: "x1ypdohk",
            display: "x78zum5",
            flex: "x1okw0bk",
            height: "x1vqgdyp",
            justifyContent: "xl56j7k",
            width: "x100vrsf",
            ":hover_backgroundColor": "x17gydlx",
            $$css: true
        },
        removeSection: {
            alignItems: "x1cy8zhl",
            display: "x78zum5",
            flexGrow: "x1c4vz4f",
            flexShrink: "x2lah0s",
            marginTop: "x1de0gy",
            $$css: true
        }
    };
    function _({ contactLid, focusOnMount = true, onInvalidUsername, onRemove, onViewContact, origin, setContactLid, setUsernameInput, setUsernameState, usernameInput, usernameState }) {
        const R = c_useState("idle");
        const L = R[0];
        const E = R[1];
        const k = r("useLazyRef")(function() {
            return new AbortController;
        });
        const pending = L === "pending";
        const T = r("useWAWebUnmountSignal")();
        const D = s._("Username");
        const x = s._("Remove username");
        const $ = (text)=>{
            setUsernameInput(text);
            setContactLid(null);
            setUsernameState(null);
            k.current.abort();
            k.current = new AbortController;
            const e = o("WAWebUsernameValidationUtils").validateUsernameLocally(text);
            const e_isValid = e.isValid;
            if (!e_isValid) {
                E("idle");
                return;
            }
            E("pending");
            const signal = k.current.signal;
            window.setTimeout(function() {
                P(text, signal);
            }, 750);
        };
        var P = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
                if (r("isStringNullOrEmpty")(t) || N(n)) {
                    E("idle");
                    return;
                }
                if (!navigator.onLine) {
                    M("offline");
                    return;
                }
                let a;
                try {
                    a = yield o("WAWebQueryExistsJob").queryUsernameExists(t, null, o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.CONTACT_SAVE);
                } catch (error) {
                    if (!N(n)) {
                        M(navigator.onLine ? "generic" : "offline");
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[UsernameContactField] failed to check username availability: ",
                            ""
                        ])), error).sendLogs("check-username-availability-failed", {
                            sampling: 0.01
                        });
                    }
                    return;
                }
                if (!N(n)) {
                    w(a);
                }
            });
            return function(n, r) {
                return t.apply(this, arguments);
            };
        })();
        var N = (t)=>t.aborted || T.aborted;
        var M = (t)=>{
            setUsernameState(null);
            E(t);
        };
        var w = (t)=>{
            if (t != null && t.wid) {
                const e = o("WAWebContactCollection").ContactCollection.get(t.wid);
                const n = e != null && o("WAWebFrontendContactGetters").getIsMyContact(e);
                setUsernameState(n ? "already-contact" : "exists");
                setContactLid(o("WAWebWidFactory").asUserLidOrThrow(t.wid));
            } else {
                if (t != null && t.keyRequired) {
                    setUsernameState("key-required");
                } else {
                    setUsernameState("does-not-exist");
                    onInvalidUsername();
                }
            }
            E("idle");
        };
        const A = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (contactLid) {
                    if (onViewContact != null) {
                        onViewContact(contactLid);
                        return;
                    }
                    const e = yield o("WAWebFindChatAction").findOrCreateLatestChat(contactLid, "createContact");
                    const t = e.chat;
                    yield o("WAWebCmd").Cmd.openChatAt({
                        chat: t,
                        msgContext: null,
                        chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.ContactEdit
                    });
                    o("WAWebCmd").Cmd.chatInfoDrawer(t, {
                        showFullGroupDescription: false,
                        scrollToParticipantList: false
                    });
                } else {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[UsernameContactField] view contact: no LID"
                    ]))).sendLogs("view-existing-contact-no-lid-found", {
                        sampling: 0.01
                    });
                }
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        const F = o("WAWebUsernameUtils").usernameInputStateIsValid(usernameState);
        const showSuccessIcon = usernameInput != null && F;
        const B = s._("This username is not on WhatsApp.");
        const W = s._("This username is on WhatsApp.");
        const q = s._("This person is already in your contacts.");
        const Component = r("WDSText.react");
        const Component_1 = r("WAWebClickableLink.react");
        const U = <Component_1 onClick={A}><Component type="Body2Emphasized" colorName="contentActionEmphasized" textAlign="start">{s._("View contact")}</Component></Component_1>;
        const V = usernameState === "already-contact" && origin === o("WAWebContactLogging").ContactSourceType.NewChat;
        const H = !pending && F;
        let contextMsg;
        if (H) {
            contextMsg = V ? q : W;
        } else if (!pending && usernameState === "does-not-exist") {
            contextMsg = B;
        }
        const z = f(L);
        const Component_2 = o("WAWebFlex.react").FlexItem;
        const Component_3 = o("WAWebRichTextField.react").RichTextField;
        const Component_4 = o("WAWebFlex.react").FlexItem;
        const Component_5 = o("WAWebClickable.react").Clickable;
        const Component_6 = o("WAWebFlex.react").FlexItem;
        const Component_7 = o("WAWebFlex.react").FlexRow;
        return <Component_7 xstyle={p.paddingHoriz24}><Component_2 xstyle={p.iconSection}>{d.jsx(r("WDSIconIcAlternateEmail.react"), {
            width: 26,
            height: 26,
            xstyle: p.marginTop28,
            testid: "mentions-refreshed"
        })}</Component_2><Component_4 xstyle={p.marginStart12} grow={1} shrink={1}><Component_3 pending={pending} onChange={function({ text }) {
            $(text);
        }} theme="text-input" focusOnMount={focusOnMount} value={usernameInput} placeholder={D} ariaLabel={D} maxLength={o("WAWebUsernameConstants").USERNAME_MAX_LENGTH} showRemaining charLimit={4} spellCheck={false} showValidateIcon={pending || showSuccessIcon || z != null} showSuccessIcon={showSuccessIcon} error={z} contextMsg={contextMsg}/>{H && V ? U : null}</Component_4>{onRemove != null ? <Component_6 xstyle={p.removeSection}><Component_5 ariaLabel={x} dataTestId="remove-contact-username-btn" onClick={onRemove} xstyle={p.removeButton}>{d.jsx(r("WDSIconIcClose.react"), {
            height: 24,
            width: 24
        })}</Component_5></Component_6> : null}</Component_7>;
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    function f(e) {
        if (e === "offline") {
            return s._("No internet connection. Reconnect and try again.");
        }
        if (e === "generic") {
            return s._("Couldn't check this username. Try again.");
        }
        if (e === "idle" || e === "pending") {
            return null;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    l.default = _;
}, 226);