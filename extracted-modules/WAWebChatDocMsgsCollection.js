__d("WAWebChatDocMsgsCollection", [
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBaseCollection",
    "WAWebFrontendMsgGetters",
    "WAWebMsgCollection",
    "WAWebMsgModel",
    "WAWebMsgQueryUtils",
    "WAWebNoop",
    "WAWebThreadMsgUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = ((t)=>{
        function a(...l_1) {
            let a;
            a = t.call(this, ...l_1) || this;
            a.hasDocBefore = true;
            a.$ChatDocMsgsCollection$p_1 = null;
            a.$ChatDocMsgsCollection$p_2 = null;
            a.count = (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
                    if (n && !n.equals(a.$ChatDocMsgsCollection$p_2)) {
                        a.$ChatDocMsgsCollection$p_1 = null;
                        a.$ChatDocMsgsCollection$p_2 = n;
                    } else if (a.$ChatDocMsgsCollection$p_1 != null) {
                        return a.$ChatDocMsgsCollection$p_1;
                    }
                    const l = n != null ? t.msgs.filter((e)=>c(e) && o("WAWebThreadMsgUtils").isMsgInThread(e, n)) : t.msgs.filter(c);
                    const s = l[0] ?? t.msgs.head();
                    if (s == null) {
                        return 0;
                    }
                    try {
                        const d = yield o("WAWebMsgQueryUtils").queryMedia(s.id.remote, Infinity, "before", s.id, "document");
                        const m = n != null ? d.filter((e)=>o("WAWebThreadMsgUtils").isMsgInThread(e, n)) : d;
                        const p = m.length ?? 0;
                        const _ = p > 0 && l.length > 0 ? 1 : 0;
                        a.$ChatDocMsgsCollection$p_1 = p + l.length - _;
                        return a.$ChatDocMsgsCollection$p_1;
                    } catch (error) {
                        const f = r("getErrorSafe")(error);
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Failed to count docs for chat ",
                            ""
                        ])), t.id).verbose().sendLogs(`md-failed-docs-count: ${f.message}`);
                        return null;
                    }
                });
                return function(e, n) {
                    return t.apply(this, arguments);
                };
            })();
            return babelHelpers.assertThisInitialized(a) || babelHelpers.assertThisInitialized(a);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.delete = function() {
            t.prototype.delete.call(this);
            this.stopListening();
            this.reset();
        };
        a_prototype.add = function(n, r) {
            this.$ChatDocMsgsCollection$p_1 = null;
            return t.prototype.add.call(this, n, r);
        };
        a_prototype.remove = function(n, r) {
            this.$ChatDocMsgsCollection$p_1 = null;
            return t.prototype.remove.call(this, n, r);
        };
        a_prototype.queryDocs = function(t, a) {
            const e = this;
            if (a) {
                if (this.queryDocBefore) {
                    return this.queryDocBefore;
                }
                const i = this.queryDocBefore = o("WAWebMsgQueryUtils").queryMedia(a.id.remote, o("WAWebMsgCollection").MEDIA_QUERY_LIMIT, "before", a.id, "document").then((t)=>{
                    if (!t || t.length < o("WAWebMsgCollection").MEDIA_QUERY_LIMIT) {
                        e.hasDocBefore = false;
                    }
                    e.add(t.filter(c), {
                        at: 0
                    });
                }).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").E404, r("WAWebNoop"))).finally(()=>{
                    e.queryDocBefore = null;
                    e.trigger("query_doc_before");
                });
                this.trigger("query_doc_before");
                return i;
            }
            const t_msgs = t.msgs;
            if (this.length === 0) {
                if (!t_msgs || t_msgs.length === 0) {
                    this.hasDocBefore = false;
                    return (s || (s = n("Promise"))).resolve();
                }
                this.add(t_msgs.filter(c), {
                    at: 0
                });
            }
            if (t.msgs.msgLoadState.noEarlierMsgs) {
                this.hasDocBefore = false;
                return (s || (s = n("Promise"))).resolve();
            }
            if (this.length <= 2 * o("WAWebMsgCollection").MEDIA_QUERY_LIMIT) {
                const u = this.length === 0 ? t_msgs.head() : this.head();
                return this.queryDocs(t, u);
            }
            return (s || (s = n("Promise"))).resolve();
        };
        return a;
    })(o("WAWebBaseCollection").BaseCollection);
    u.model = o("WAWebMsgModel").Msg;
    function c(e) {
        return o("WAWebFrontendMsgGetters").getAsDoc(e) != null && !e.isVcardOverMmsDocument;
    }
    l.default = u;
}, 98);