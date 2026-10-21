__d("WAWebGroupAgentOwnerLabel.react", [
    "fbt",
    "$InternalEnum",
    "WALogger",
    "WAWebApiContact",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProduct",
    "WAWebBotStaticProfiles",
    "WAWebContactCollection",
    "WAWebGroupAgentProfileRouting",
    "WAWebName.react",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = n("$InternalEnum")({
        BASIC_PROFILE: "basic_profile",
        GROUP_INFO_ROW: "group_info_row",
        MESSAGE_AUTHOR: "message_author",
        PARTICIPANT_PICKER: "participant_picker"
    });
    let m = false;
    function p(e, t, n) {
        if (!e.isFbidBot() || o("WAWebBotStaticProfiles").isStaticProfile(e) || !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) {
            return null;
        }
        const a = o("WAWebBotProduct").botProductFromServerValue(n?.product);
        if (a == null || a === o("WAWebBotProduct").BotProduct.THIRD_PARTY) {
            return {
                type: "agent"
            };
        }
        if (!o("WAWebGroupAgentProfileRouting").isMuseGroupAgentProfileProduct(e, a)) {
            return null;
        }
        if (!o("WAWebBotGroupGatingUtils").isMuseGroupAgentRenderingEnabled()) {
            return {
                type: "agent"
            };
        }
        const i = S(n?.creatorLid);
        if (i == null) {
            return {
                type: "muse_without_owner"
            };
        }
        if (i.user === o("WAWebUserPrefsMeUser").getMaybeMeLidUser()?.user) {
            return {
                type: "viewer_is_owner"
            };
        }
        const ownerContact = R(i, t);
        if (ownerContact == null) {
            return {
                type: "muse_without_owner"
            };
        }
        return {
            type: "owner",
            ownerContact
        };
    }
    function _(e, t) {
        return g(e, t) != null;
    }
    function f(e) {
        const t = o("react-compiler-runtime").c(5);
        const { attribution, surface } = e;
        let a;
        if (t[0] !== attribution || t[1] !== surface) {
            a = g(attribution, surface);
            t[0] = attribution;
            t[1] = surface;
            t[2] = a;
        } else {
            a = t[2];
        }
        const i = a;
        if (i == null) {
            return null;
        }
        let l;
        if (t[3] !== i) {
            l = <span data-testid="group-agent-owner-label" dir="auto">{i}</span>;
            t[3] = i;
            t[4] = l;
        } else {
            l = t[4];
        }
        return l;
    }
    function g(e, t) {
        if (t === d.MESSAGE_AUTHOR) {
            return h(e);
        }
        if (t === d.PARTICIPANT_PICKER && e.type !== "viewer_is_owner") {
            return null;
        }
        if (e.type === "viewer_is_owner") {
            return s._("Your Muse agent");
        }
        if (e.type === "owner") {
            return s._("{owner name}'s Muse agent", [
                s._param("owner name", <V9 ownerContact={e.ownerContact}/>)
            ]);
        }
        if (e.type === "muse_without_owner") {
            return y();
        }
        return b();
    }
    function h(e) {
        return ((e)=>{
            if ((typeof e === "object" && e !== null || typeof e === "function") && e.type === "viewer_is_owner") {
                return s._("Your Muse");
            }
            if ((typeof e === "object" && e !== null || typeof e === "function") && e.type === "owner" && "ownerContact" in e) {
                const ownerContact = e.ownerContact;
                return s._("{owner name}'s Muse", [
                    s._param("owner name", <V9 ownerContact={ownerContact}/>)
                ]);
            }
            if ((typeof e === "object" && e !== null || typeof e === "function") && e.type === "muse_without_owner") {
                return C();
            }
            if ((typeof e === "object" && e !== null || typeof e === "function") && e.type === "agent") {
                return null;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })(e);
    }
    function y() {
        return s._("Muse agent");
    }
    function C() {
        return s._("Muse");
    }
    function b() {
        return s._("Agent");
    }
    function V9(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_ownerContact = e.ownerContact;
        let r;
        if (t[0] !== e_ownerContact) {
            r = c.jsx(o("WAWebName.react").Name, {
                contact: e_ownerContact,
                elevatedPushNamesEnabled: true,
                showNotifyName: true
            });
            t[0] = e_ownerContact;
            t[1] = r;
        } else {
            r = t[1];
        }
        return r;
    }
    function S(t) {
        if (t == null || t === "") {
            return null;
        }
        try {
            return o("WAWebWidFactory").createUserWidOrThrow(`${t}@lid`);
        } catch (t) {
            if (!m) {
                m = true;
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebGroupAgentOwnerLabel: failed to parse creator LID"
                ]))).sendLogs("group-agent-owner-creator-lid-parse-failed");
            }
            return null;
        }
    }
    function R(e, t) {
        const s = t?.groupMetadata?.participants;
        const u = o("WAWebApiContact").getAlternateUserWid(e);
        const c = s?.get(e)?.contact ?? (u == null ? null : s?.get(u)?.contact);
        return c ?? o("WAWebContactCollection").ContactCollection.get(e) ?? (u == null ? null : o("WAWebContactCollection").ContactCollection.get(u));
    }
    l.GroupAgentLabelSurface = d;
    l.getGroupAgentAttribution = p;
    l.hasGroupAgentLabel = _;
    l.WAWebGroupAgentOwnerLabel = f;
}, 226);