__d("WAWebChatLockSettingsSync", [
    "WALogger",
    "WAWebChatLockSettings",
    "WAWebProtobufsUserPassword.pb",
    "WAWebSyncdAction",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    const f = ((t)=>{
        function r(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.collectionName = o("WAWebSyncdConst").CollectionName.RegularLow;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.getVersion = function() {
            return 7;
        };
        r_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.ChatLockSettings;
        };
        r_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const n = this;
                let r;
                let a = 0;
                const i = [];
                let l = 0;
                let f = 0;
                let g = 0;
                let h = 0;
                let y = 0;
                const C = t.map((e)=>{
                    if (e.operation !== "set") {
                        a++;
                        if (i.length < 3) {
                            i.push(e.operation);
                        }
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                        };
                    }
                    const chatLockSettings = e.value.chatLockSettings;
                    if (chatLockSettings == null) {
                        l++;
                        return o("WAWebSyncdIndexUtils").malformedActionValue(n.collectionName);
                    }
                    const { hideLockedChats, secretCode } = chatLockSettings;
                    if (hideLockedChats == null) {
                        f++;
                        return o("WAWebSyncdIndexUtils").malformedActionValue(n.collectionName);
                    }
                    r = {
                        hideLockedChats,
                        secretCode: null
                    };
                    if (secretCode != null) {
                        const { encoding, transformedData, transformer, transformerArg } = secretCode;
                        if (transformerArg == null || transformer == null || transformedData == null || encoding == null) {
                            g++;
                            return o("WAWebSyncdIndexUtils").malformedActionValue(n.collectionName);
                        }
                        if (transformer !== o("WAWebProtobufsUserPassword.pb").UserPassword$Transformer.PBKDF2_HMAC_SHA512) {
                            h++;
                            return o("WAWebSyncdIndexUtils").malformedActionValue(n.collectionName);
                        }
                        const _ = transformerArg.reduce((acc, item)=>{
                            if (item.value != null) {
                                if (item.key === "iterations") {
                                    acc.iterations = item.value.asUnsignedInteger;
                                } else if (item.key === "salt") {
                                    acc.salt = item.value.asBlob;
                                }
                            }
                            return acc;
                        }, {});
                        if (_.iterations == null || _.salt == null) {
                            y++;
                            return o("WAWebSyncdIndexUtils").malformedActionValue(n.collectionName);
                        }
                        r.secretCode = {
                            iterations: _.iterations,
                            encoding,
                            salt: _.salt,
                            transformer,
                            data: transformedData
                        };
                    }
                    return {
                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                    };
                });
                if (a > 0) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "ChatLockSettingsSync: ",
                        " operations not supported => ",
                        ""
                    ])), a, i);
                }
                if (l > 0) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "ChatLockSettingsSync: ",
                        " malformed mutations: settings is null"
                    ])), l);
                }
                if (f > 0) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "ChatLockSettingsSync: ",
                        " malformed: hideLockedChats null"
                    ])), f);
                }
                if (g > 0) {
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "ChatLockSettingsSync: ",
                        " malformed: secret data missing"
                    ])), g);
                }
                if (h > 0) {
                    o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "ChatLockSettingsSync: ",
                        " malformed: transformer incompatible"
                    ])), h);
                }
                if (y > 0) {
                    o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "ChatLockSettingsSync: ",
                        " malformed: transformer args missing"
                    ])), y);
                }
                if (r != null) {
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "ChatLockSettingsSync: saving chatlock settings"
                    ])));
                    const b = o("WAWebChatLockSettings").getChatLockSettings();
                    b.updateAndSave(r);
                } else {
                    o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "ChatLockSettingsSync: mutations parse failed"
                    ])));
                }
                return C;
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        return r;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const g = new f;
    l.default = g;
}, 98);