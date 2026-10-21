__d("WAWebMentionNode", [
    "$InternalEnum",
    "Lexical",
    "WAWebClassnames",
    "WAWebCopyPasteCopyable.react",
    "WAWebRichTextInputConst",
    "WAWebWidFactory",
    "err"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum").Mirrored([
        "GROUP",
        "CONTACT"
    ]);
    const s = ((t)=>{
        function n({ key, name, text, type, wid }) {
            let n;
            n = t.call(this, text, key) || this;
            n.name = name;
            n.wid = wid;
            n.type = type;
            return n;
        }
        babelHelpers.inheritsLoose(n, t);
        n.clone = function(t) {
            return new n({
                text: t.__text,
                name: t.name,
                wid: t.wid,
                type: t.type,
                key: t.__key
            });
        };
        n.getType = function() {
            return "mention";
        };
        n.importJSON = function() {
            throw r("err")("Deserialization of MentionNode is unsupported");
        };
        const n_prototype = n.prototype;
        n_prototype.createDOM = function(n) {
            const e = t.prototype.createDOM.call(this, n);
            e.className = o("WAWebClassnames").classnamesConvertMeToStylexPlease(e.className, "x1ph7ams");
            e.dataset[o("WAWebCopyPasteCopyable.react").APP_TEXT_TEMPLATE_DATA_ATTR] = `${o("WAWebRichTextInputConst").ZWS}${this.wid}${o("WAWebRichTextInputConst").ZWS}`;
            return e;
        };
        n_prototype.getNodeMetadata = function() {
            const t = o("WAWebWidFactory").createWid(this.wid);
            let n = o("WAWebRichTextInputConst").AT_SYMBOL + t.user;
            if (this.type === e.GROUP) {
                n = o("WAWebRichTextInputConst").AT_SYMBOL + t.toString();
            }
            return {
                text: n,
                parsableText: `${o("WAWebRichTextInputConst").ZWS}${this.wid}${o("WAWebRichTextInputConst").ZWS}`,
                type: this.type,
                name: this.name,
                wid: t
            };
        };
        n_prototype.exportJSON = function() {
            return babelHelpers.extends({}, t.prototype.exportJSON.call(this), {
                type: "mention-node"
            });
        };
        return n;
    })(o("Lexical").TextNode);
    function u(e, wid, n) {
        return new s({
            text: o("WAWebRichTextInputConst").AT_SYMBOL + e,
            name: e,
            wid,
            type: n
        });
    }
    function c(e) {
        return e instanceof s;
    }
    l.MentionTypeEnum = e;
    l.MentionNode = s;
    l.$createMentionNode = u;
    l.$isMentionNode = c;
}, 98);