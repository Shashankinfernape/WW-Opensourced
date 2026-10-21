__d("WAJids", [
    "WAAssertUnreachable",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 0;
    const s = "@me";
    const u = "@system";
    const c = "status@broadcast";
    const d = "0@s.whatsapp.net";
    const m = "call";
    const p = "@g.us";
    const _ = /^([1-9][0-9]{0,19}|(?!10)[1-9][0-9]{4,19}-[1-9][0-9]{9})@g.us$/;
    const f = "@call";
    const g = "@msgr";
    const h = "msgr";
    const y = "@interop";
    const C = "interop";
    const b = /^([1-9][0-9]{0,2}-[1-9][0-9]{0,14}(:[0])?)@interop$/;
    const v = /^([1-9][0-9]{0,2}-[1-9][0-9]{0,14}(:[0])?)@interop$/;
    const S = /^([1-9][0-9]{0,19}(:[1-9][0-9]{0,2})?)@msgr$/;
    const R = /^([1-9][0-9]{0,19})@msgr$/;
    const L = /^([1-9][0-9]{0,19})(:0)?@msgr$/;
    const E = "@s.whatsapp.net";
    const k = "s.whatsapp.net";
    const I = "@s.whatsapp.net";
    const T = "s.whatsapp.net";
    const D = "lid";
    const x = "@newsletter";
    const $ = /^([1-9][0-9]{0,19})@newsletter$/;
    const P = /^(0|((?!10)[1-9][0-9]{4,19}(\.[0-9]{1,2})?(:[0-9]{1,2})))@s.whatsapp.net$/;
    const N = /^(0|((?!10)[1-9][0-9]{4,19})(\.[0-9]{1,2})?)@s.whatsapp.net$/;
    const M = "@lid";
    const w = "lid";
    const A = /^([1-9][0-9]{0,14})@lid$/;
    const F = /^([1-9][0-9]{0,14}(:[0-9]{1,2})?)@lid$/;
    const O = "@broadcast";
    const B = /^(status|location|[1-9][0-9]{0,19})@broadcast$/;
    const W = /^([0-9a-fA-F]{18,32})@call$/;
    const q = "@hosted";
    const U = "hosted";
    const V = /^(((?!10)[1-9][0-9]{4,19})):99@hosted$/;
    const H = "@hosted.lid";
    const G = "hosted.lid";
    const z = /^([1-9][0-9]{0,14}):99@hosted.lid$/;
    const j = "@bot";
    const K = /^[1-9][0-9]{0,19}(:0)?@bot$/;
    const Q = `16505361212${I}`;
    const X = /([0-9a-zA-Z-:]+)@(g\.us|call|s\.whatsapp\.net|broadcast|msgr|lid)/g;
    function Y(e) {
        return `${e}${I}`;
    }
    function J(e) {
        return `${e}${M}`;
    }
    function Z(e) {
        return `${e}${g}`;
    }
    function ee(e) {
        if (e.endsWith(p)) {
            return e;
        }
        return `${e}${p}`;
    }
    function te(e) {
        if (e.endsWith(x)) {
            return e;
        }
        return `${e}${x}`;
    }
    function ne(e) {
        if (e.endsWith(q)) {
            return e;
        }
        return `${e}${q}`;
    }
    function re(e) {
        if (e.endsWith(H)) {
            return e;
        }
        return `${e}${H}`;
    }
    function oe() {
        return p;
    }
    function ae(e) {
        if (e.endsWith(I)) {
            return e.slice(0, -I.length);
        }
        if (e.endsWith(g)) {
            return e.slice(0, -g.length);
        }
        if (e.endsWith(y)) {
            return e.slice(0, -y.length);
        }
        if (e.endsWith(M)) {
            return e.slice(0, -M.length);
        }
        if (e.endsWith(j)) {
            return e.slice(0, -j.length);
        }
        throw r("err")(`userIdFromJid called with non-user jid "${e}"`);
    }
    function ie(e, t) {
        return `${ae(e)}:${t}${I}`;
    }
    function le(e, t) {
        return `${ae(e)}:${t}${g}`;
    }
    function se(e, t) {
        return `${Ee(e)}:${t}${M}`;
    }
    function ue(e, t) {
        return `${ae(e)}:${t}${Ct(e)}`;
    }
    function ce(e) {
        return `${e}${O}`;
    }
    function de(e) {
        return e.split("@")[0];
    }
    function me(e) {
        return e.split("@")[0];
    }
    function pe(e) {
        const t = e.split("@")[0];
        const n = t.split(":");
        const r = n[0];
        const o = n[1];
        const a = parseInt(o, 10);
        return {
            userId: r,
            deviceID: a
        };
    }
    function _e(e) {
        const t = pe(e);
        return t.deviceID;
    }
    function fe(e, t) {
        if (e === s || e === u) {
            return t;
        }
        return de(e);
    }
    function ge(e) {
        if (e === s || e === u) {
            return null;
        }
        return e;
    }
    function he(e) {
        if (e === s || e === u || !e.endsWith(I)) {
            return null;
        }
        return e;
    }
    function ye(e) {
        if (!e.endsWith(I)) {
            throw r("err")(`phoneNumberFromJid called with non-user jid "${e}"`);
        }
        return e.slice(0, -I.length);
    }
    function Ce(e) {
        if (e.endsWith(I)) {
            return ye(e);
        }
        if (e.endsWith(M)) {
            return Ee(e);
        }
        throw r("err")(`lidOrPhoneFromUserJid called with non phone or lid jid "${e}"`);
    }
    function be(e) {
        if (e.endsWith(I) || e.endsWith(y) || e.endsWith(g) || e.endsWith(M)) {
            return e;
        }
        return null;
    }
    function ve(e) {
        if (e.endsWith(I)) {
            return e;
        }
        return null;
    }
    function Se(e) {
        if (e === c) {
            return null;
        }
        return e;
    }
    function Re(e) {
        if (e === c) {
            return null;
        }
        return e;
    }
    function Le(e) {
        if (e === c) {
            return c;
        }
        return null;
    }
    function Ee(e) {
        if (!e.endsWith(M)) {
            throw r("err")(`lidFromLidUserJid called with non-LidUserJid "${e}"`);
        }
        return e.slice(0, -M.length);
    }
    function ke(e) {
        const t = e.split("@");
        let n = t[0];
        let r = t[1];
        n = n.split(":")[0];
        n = n.split(".")[0];
        if (r === U) {
            r = T;
        }
        if (r === G) {
            r = D;
        }
        return `${n}@${r}`;
    }
    function Ie(e) {
        return ke(e);
    }
    function Te(e) {
        return ke(e);
    }
    function De(e) {
        if (e.jidType === "phoneDevice" || e.jidType === "interopDevice" || e.jidType === "lidDevice" || e.jidType === "msgrDevice") {
            return e.deviceJid;
        }
        if (e.jidType === "lidUser" || e.jidType === "interopUser" || e.jidType === "msgrUser" || e.jidType === "phoneUser") {
            return e.userJid;
        }
        if (e.jidType === "group") {
            return e.groupJid;
        }
        if (e.jidType === "status") {
            return e.statusJid;
        }
        if (e.jidType === "call") {
            return e.callJid;
        }
        if (e.jidType === "newsletter") {
            return e.newsletterJid;
        }
        if (e.jidType === "hosted") {
            return e.hostedDeviceJid;
        }
        if (e.jidType === "hostedLid") {
            return e.hostedLidDeviceJid;
        }
        if (e.jidType === "bot") {
            return e.botJid;
        }
        e.jidType;
        return e.broadcastJid;
    }
    function xe(t) {
        return `${ae(t)}:${e}${I}`;
    }
    function $e(t) {
        return `${ae(t)}:${e}${g}`;
    }
    function Pe(t) {
        return se(t, e);
    }
    function Ne(t) {
        return _e(t) === e;
    }
    function Me(e) {
        return e;
    }
    function we(e) {
        return e;
    }
    function Ae(e) {
        const t = e.split("@");
        const n = t[0];
        const r = t[1];
        const o = n.split(":");
        const a = o[0];
        const i = o[1];
        const l = a.split(".");
        const s = l[0];
        const u = l[1];
        return {
            user: s,
            device: i,
            agent: u,
            server: r
        };
    }
    function Fe(e) {
        const t = Ae(e);
        const n = t.agent;
        const r = n === void 0 ? "0" : n;
        const o = t.device;
        const a = o === void 0 ? "0" : o;
        const { server: i, user: l } = t;
        return `${l}.${r}:${a}@${i}`;
    }
    function Oe(e) {
        switch(e.jidType){
            case "interopUser":
                return e.userJid;
            case "lidUser":
                return e.userJid;
            case "msgrUser":
                return e.userJid;
            case "phoneUser":
                return e.userJid;
            case "group":
                return e.groupJid;
            case "status":
                return e.statusJid;
            case "interopDevice":
                return e.deviceJid;
            case "lidDevice":
                return e.deviceJid;
            case "msgrDevice":
                return e.deviceJid;
            case "phoneDevice":
                return e.deviceJid;
            case "broadcast":
                return e.broadcastJid;
            case "call":
                return e.callJid;
            case "newsletter":
                return e.newsletterJid;
            case "hosted":
                return e.hostedDeviceJid;
            case "hostedLid":
                return e.hostedLidDeviceJid;
            case "bot":
                return e.botJid;
            default:
                return r("WAAssertUnreachable")(e.jidType);
        }
    }
    function Be(e) {
        if (e === m) {
            return {
                jidType: "call",
                callJid: m
            };
        }
        if (e === c) {
            return {
                jidType: "status",
                statusJid: c
            };
        }
        if (N.test(e)) {
            return {
                jidType: "phoneUser",
                userJid: e
            };
        }
        if (v.test(e)) {
            return {
                jidType: "interopUser",
                userJid: e
            };
        }
        if (R.test(e)) {
            return {
                jidType: "msgrUser",
                userJid: e
            };
        }
        if (L.test(e)) {
            const t = e.substr(0, e.indexOf(":"));
            return {
                jidType: "msgrUser",
                userJid: Z(t)
            };
        } else {
            if (P.test(e)) {
                return {
                    jidType: "phoneDevice",
                    deviceJid: e
                };
            }
            if (b.test(e)) {
                return {
                    jidType: "interopDevice",
                    deviceJid: e
                };
            }
            if (S.test(e)) {
                return {
                    jidType: "msgrDevice",
                    deviceJid: e
                };
            }
            if (_.test(e)) {
                return {
                    jidType: "group",
                    groupJid: e.endsWith(p) ? e : `${e}${p}`
                };
            }
            if (B.test(e)) {
                return {
                    jidType: "broadcast",
                    broadcastJid: e
                };
            }
            if (W.test(e)) {
                return {
                    jidType: "call",
                    callJid: e
                };
            }
            if (A.test(e)) {
                return {
                    jidType: "lidUser",
                    userJid: e
                };
            }
            if (F.test(e)) {
                return {
                    jidType: "lidDevice",
                    deviceJid: e
                };
            }
            if ($.test(e)) {
                return {
                    jidType: "newsletter",
                    newsletterJid: e
                };
            }
            if (V.test(e)) {
                return {
                    jidType: "hosted",
                    hostedDeviceJid: e
                };
            }
            if (z.test(e)) {
                return {
                    jidType: "hostedLid",
                    hostedLidDeviceJid: e
                };
            }
            if (K.test(e)) {
                return {
                    jidType: "bot",
                    botJid: e
                };
            }
            return {
                jidType: "unknown"
            };
        }
    }
    function We(e) {
        if (e === "status@broadcast") {
            return e;
        }
        return null;
    }
    function qe(e) {
        if (N.test(e) || v.test(e) || R.test(e) || A.test(e) || K.test(e)) {
            return e;
        }
        if (L.test(e)) {
            const t = e.substr(0, e.indexOf(":"));
            return Z(t);
        } else {
            return null;
        }
    }
    function Ue(e) {
        if (A.test(e)) {
            return e;
        }
        return null;
    }
    function Ve(e) {
        if (B.test(e)) {
            return e;
        }
        return null;
    }
    function He(e) {
        if (P.test(e) || S.test(e) || b.test(e) || F.test(e) || V.test(e) || z.test(e)) {
            return e;
        }
        if (N.test(e)) {
            return bt(e);
        }
        if (K.test(e)) {
            return vt(e);
        }
        return null;
    }
    function Ge(e) {
        if (b.test(e)) {
            return e;
        }
        return null;
    }
    function ze(e) {
        if (_.test(e)) {
            return e;
        }
        return null;
    }
    function je(e) {
        if (We(e) || ze(e) || Ve(e)) {
            return e;
        }
        return null;
    }
    function Ke(e) {
        if (W.test(e)) {
            return e;
        }
        return null;
    }
    function Qe(e) {
        if (e === "s.whatsapp.net" || e === "g.us" || e === "call") {
            return e;
        }
        return null;
    }
    function Xe(e) {
        return qe(e) || ze(e);
    }
    function Ye(e) {
        if ($.test(e)) {
            return e;
        }
        return null;
    }
    function Je(e) {
        if (V.test(e)) {
            return e;
        }
        return null;
    }
    function Ze(e) {
        if (z.test(e)) {
            return e;
        }
        return null;
    }
    function et(e) {
        if (be(e) == null) {
            return e;
        }
        return null;
    }
    function tt(e) {
        const t = Ae(e);
        const n = t.device;
        const r = n === void 0 ? "0" : n;
        const { server: o, user: a } = t;
        return `${a}:${r}@${o}`;
    }
    function nt(e) {
        if (e.endsWith(p)) {
            return e.slice(0, -p.length);
        }
        throw r("err")(`groupId called with non-group jid "${e}"`);
    }
    function rt(e) {
        const t = Be(e);
        if (t.jidType === "unknown") {
            return e;
        }
        if (t.jidType === "status") {
            return t.statusJid;
        }
        t.jidType;
        return Oe(t).replace(/^([^@]*)([^@][^@][^@][^@])@(.*)$/, "...$2@$3");
    }
    function ot(e) {
        if (e.includes("@")) {
            return e.replace(X, rt);
        }
        return e;
    }
    function at(e) {
        if (e.endsWith(p)) {
            return e;
        }
        return null;
    }
    function it(e, t) {
        if (e.endsWith(I)) {
            return t.phoneUser(e);
        }
        if (e.endsWith(g)) {
            return t.msgrUser(e);
        }
        if (e.endsWith(y)) {
            return t.interopUser(e);
        }
        if (e.endsWith(M)) {
            return t.lidUser(e);
        }
        if (at(e) != null) {
            return t.group(e);
        }
        throw r("err")(`Can not switch on chat jid ${e}`);
    }
    function lt(e, t) {
        if (e.endsWith(g)) {
            return t.user(e);
        }
        if (at(e) != null) {
            return t.group(e);
        }
        throw r("err")(`Can not switch on chat jid ${e}`);
    }
    function st(e, t) {
        if (e.endsWith(I)) {
            return t.user(e);
        }
        if (at(e) != null) {
            return t.group(e);
        }
        throw r("err")(`Can not switch on chat jid ${e}`);
    }
    function ut(e, t) {
        return it(e, {
            lidUser: function(n) {
                return t.user(n);
            },
            interopUser: function(n) {
                return t.user(n);
            },
            msgrUser: function(n) {
                return t.user(n);
            },
            phoneUser: function(n) {
                return t.user(n);
            },
            group: function(n) {
                return t.group(n);
            }
        });
    }
    function ct(e, t) {
        if (e === c) {
            return t.status();
        }
        return st(e, {
            user: t.user,
            group: t.group
        });
    }
    function dt(e, t) {
        if (e === c) {
            return t.status();
        }
        return it(e, {
            interopUser: t.interopUser,
            phoneUser: t.phoneUser,
            msgrUser: t.msgrUser,
            lidUser: t.lidUser,
            group: t.group
        });
    }
    function mt(e, t) {
        if (e === c) {
            return t.multicast(c);
        }
        return st(e, {
            user: t.user,
            group: t.multicast
        });
    }
    function pt(e) {
        return e.endsWith(M);
    }
    function _t(e) {
        return e === "@me";
    }
    function ft(e) {
        return e === "@system";
    }
    function gt() {
        return g;
    }
    function ht() {
        return I;
    }
    function yt() {
        return E;
    }
    function Ct(e) {
        if (e.endsWith(I)) {
            return I;
        }
        if (e.endsWith(g)) {
            return g;
        }
        if (e.endsWith(M)) {
            return M;
        }
        if (e.endsWith(j)) {
            return j;
        }
        throw r("err")(`userDomainFromJid called with non-user jid "${e}"`);
    }
    function bt(t) {
        return `${ae(t)}:${e}${Ct(t)}`;
    }
    function vt(e) {
        return `${ae(e)}${Ct(e)}`;
    }
    function St({ platform: t }) {
        const n = t === "msgr" ? g : I;
        function r(e) {
            return `${e}${n}`;
        }
        function o() {
            return n;
        }
        return {
            toUserJid: r,
            getUserDomain: o
        };
    }
    function Rt(e) {
        return e;
    }
    function Lt(e) {
        return e;
    }
    function Et(e) {
        return e;
    }
    function kt(e) {
        return e;
    }
    function It(e) {
        return e;
    }
    function Tt(e) {
        return e;
    }
    function Dt(e) {
        return e;
    }
    function xt(e) {
        return e;
    }
    function $t(e) {
        return e;
    }
    function Pt(e) {
        return e;
    }
    function Nt(e) {
        return e;
    }
    function Mt(e) {
        return e;
    }
    function wt(e) {
        return e;
    }
    function At(e) {
        return e;
    }
    function Ft(e) {
        return e;
    }
    function Ot(e) {
        return e;
    }
    function Bt(e) {
        return it(e, {
            group: function(t) {
                return nt(t);
            },
            lidUser: function(t) {
                return ae(t);
            },
            interopUser: function(t) {
                return ae(t);
            },
            phoneUser: function(t) {
                return ae(t);
            },
            msgrUser: function(t) {
                return ae(t);
            }
        });
    }
    function Wt() {
        return f;
    }
    l.DEFAULT_DEVICE_ID = e;
    l.AUTHOR_ME = s;
    l.AUTHOR_SYSTEM = u;
    l.STATUS_JID = c;
    l.PSA_JID = d;
    l.CALL_LINK_JID = m;
    l.MSGR_USER_DOMAIN = g;
    l.MSGR_USER_JID_SUFFIX = h;
    l.INTEROP_DOMAIN = y;
    l.INTEROP_USER_JID_SUFFIX = C;
    l.WA_SERVER_JID_SUFFIX = k;
    l.WA_USER_DOMAIN = I;
    l.WA_USER_JID_SUFFIX = T;
    l.WA_LID_SUFFIX = D;
    l.WA_NEWSLETTER_JID_DOMAIN = x;
    l.LID_DOMAIN = M;
    l.LID_SUFFIX = w;
    l.HOSTED_DOMAIN = q;
    l.HOSTED_SUFFIX = U;
    l.HOSTED_LID_DOMAIN = H;
    l.HOSTED_LID_SUFFIX = G;
    l.BOT_DOMAIN = j;
    l.SURVEY_USER_JID = Q;
    l.toPhoneUserJid = Y;
    l.toLidUserJid = J;
    l.toMsgrUserJid = Z;
    l.toGroupJid = ee;
    l.toNewsletterJid = te;
    l.toHostedDeviceJid = ne;
    l.toHostedLidDeviceJid = re;
    l.getGroupDomain = oe;
    l.userIdFromJid = ae;
    l.toPhoneDeviceJid = ie;
    l.toMsgrDeviceJid = le;
    l.toLidDeviceJid = se;
    l.toDeviceJid = ue;
    l.toBroadcastJid = ce;
    l.extractUserId = de;
    l.extractChatId__DANGEROUS = me;
    l.extractDeviceIDParts = pe;
    l.extractDeviceId = _e;
    l.authorToUserId = fe;
    l.authorAsUserJid = ge;
    l.authorAsPhoneUserJid = he;
    l.phoneNumberFromJid = ye;
    l.lidOrPhoneFromUserJid = Ce;
    l.interpretAsUserJid = be;
    l.interpretAsPhoneUserJid = ve;
    l.asChatJid = Se;
    l.asPhoneChatJid = Re;
    l.asStatusJid = Le;
    l.lidFromLidUserJid = Ee;
    l.extractUserJid = ke;
    l.extractPhoneUserJid = Ie;
    l.extractLidUserJid = Te;
    l.extractJidFromJidWithType = De;
    l.defaultPhoneDeviceJidForUser = xe;
    l.defaultMsgrDeviceJidForUser = $e;
    l.defaultLidDeviceJidForLidUserJid = Pe;
    l.isPrimaryDevice = Ne;
    l.interpretAsDeviceId = Me;
    l.interpretAsNumber = we;
    l.parseJidParts = Ae;
    l.fullFormDeviceJidString = Fe;
    l.extractFromJid = Oe;
    l.interpretAndValidateJid = Be;
    l.validateStatusJid = We;
    l.validateUserJid = qe;
    l.validateLidUserJid = Ue;
    l.validateBroadcastJid = Ve;
    l.validateDeviceJid = He;
    l.validateInteropDeviceJid = Ge;
    l.validateGroupJid = ze;
    l.validateMulticastJid = je;
    l.validateCallJid = Ke;
    l.validateDomainJid = Qe;
    l.validateChatJid = Xe;
    l.validateNewsletterJid = Ye;
    l.validateHostedDeviceJid = Je;
    l.validateHostedLidDeviceJid = Ze;
    l.asMulticastJid = et;
    l.stripAgentIdFromPhoneDeviceJid = tt;
    l.groupIdFromJid = nt;
    l.sanitizeJidForLogging = rt;
    l.maybeSanitizeLogLineText = ot;
    l.interpretAsGroupJid = at;
    l.switchOnChatJidType = it;
    l.switchOnMsgrChatJidType = lt;
    l.switchOnPhoneChatJidType = st;
    l.switchOnUserChatJidType = ut;
    l.switchOnPhoneJidType = ct;
    l.switchOnJidType = dt;
    l.switchOnMulticastJidType = mt;
    l.isLidUser = pt;
    l.isAuthorMe = _t;
    l.isAuthorSystem = ft;
    l.getMsgrUserDomain = gt;
    l.getWhatsappUserDomain = ht;
    l.getServerDomain = yt;
    l.defaultDeviceJidForUser = bt;
    l.defaultDeviceJidForBot = vt;
    l.createJidUtils = St;
    l.unsafeCoerceToChatJid = Rt;
    l.unsafeCoerceToDeviceJid = Lt;
    l.unsafeCoerceToPhoneDeviceJid = Et;
    l.unsafeCoerceToMsgrDeviceJid = kt;
    l.unsafeCoerceToInteropDeviceJid = It;
    l.unsafeCoerceToLidDeviceJid = Tt;
    l.unsafeCoerceToUserJid = Dt;
    l.unsafeCoerceToLidUserJid = xt;
    l.unsafeCoerceToPhoneUserJid = $t;
    l.unsafeCoerceToInteropUserJid = Pt;
    l.unsafeCoerceToMsgrUserJid = Nt;
    l.unsafeCoerceToGroupJid = Mt;
    l.unsafeCoerceToDeviceId = wt;
    l.unsafeCoerceToNewsletterJid = At;
    l.unsafeCoerceToHostedDeviceJid = Ft;
    l.unsafeCoerceToHostedLidDeviceJid = Ot;
    l.threadIdForChatJid = Bt;
    l.getGroupCallDomain = Wt;
}, 98);