__d("WAWebMemberLabelComponents.react", [
    "fbt",
    "WAWebGroupMemberTagUpdateLogger",
    "WAWebMemberLabelCreateUpdateModalLoadable.react",
    "WAWebMemberLabelHooks",
    "WAWebMemberLabelRenderer.react",
    "WAWebMemberLabelsFrontendUtils",
    "WAWebModalManager",
    "WAWebStopEvent",
    "WAWebUnstyledButton.react",
    "WAWebUserPrefsMeUser",
    "WDSText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(12);
        const { chat, member } = e;
        let memberLabelArgs;
        let l;
        let c;
        if (t[0] !== chat || t[1] !== member) {
            memberLabelArgs = {
                from: "chat_and_member",
                chat,
                member
            };
            l = o("WAWebMemberLabelHooks").useMemberLabelValue;
            c = o("WAWebMemberLabelsFrontendUtils").memberLabelKeyFrom(memberLabelArgs);
            t[0] = chat;
            t[1] = member;
            t[2] = memberLabelArgs;
            t[3] = l;
            t[4] = c;
        } else {
            memberLabelArgs = t[2];
            l = t[3];
            c = t[4];
        }
        const m = l(c);
        if (d(m, member)) {
            let p;
            if (t[5] !== chat) {
                p = function(t) {
                    o("WAWebStopEvent").stopEvent(t);
                    o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebMemberLabelCreateUpdateModalLoadable.react").MemberLabelCreateUpdateModalLoadable, {
                        chat,
                        entryPoint: o("WAWebGroupMemberTagUpdateLogger").GroupMemberTagUpdateLogger.ENTRY_POINT.MEMBER_LIST
                    }));
                };
                t[5] = chat;
                t[6] = p;
            } else {
                p = t[6];
            }
            let _;
            if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
                const Component = r("WDSText.react");
                _ = <Component type="Body2Emphasized" colorName="accent">{s._("Add member tag")}</Component>;
                t[7] = _;
            } else {
                _ = t[7];
            }
            let f;
            if (t[8] !== p) {
                const Component = r("WAWebUnstyledButton.react");
                f = <Component onClick={p}>{_}</Component>;
                t[8] = p;
                t[9] = f;
            } else {
                f = t[9];
            }
            return f;
        }
        let g;
        if (t[10] !== memberLabelArgs) {
            g = u.jsx(r("WAWebMemberLabelRenderer.react"), {
                memberLabelArgs,
                type: "Body2"
            });
            t[10] = memberLabelArgs;
            t[11] = g;
        } else {
            g = t[11];
        }
        return g;
    }
    function d(e, member) {
        const n = e == null || e.trim() === "";
        return n && o("WAWebUserPrefsMeUser").isMeAccount(member);
    }
    l.GroupParticipantContent = c;
}, 226);