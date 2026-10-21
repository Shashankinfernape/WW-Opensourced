__d("WAWebCopyPasteClipboard", [
    "WADepthFirstTraversal",
    "WAWebCopyPasteCopyable.react",
    "WAWebCopyPasteSelectable.react",
    "WAWebDomElementIs",
    "WAWebDomIsTextNode",
    "WAWebDomRangeGetContents",
    "range"
], function(t, n, r, o, a, i, l) {
    const e = "application/whatsapp";
    const s = (()=>{
        function e(e) {
            this.$1 = e || "";
        }
        const t = e.prototype;
        t.append = function(t, n = "") {
            this.$1 = [
                this.toString(),
                t
            ].filter((e)=>e).join(n);
            return this;
        };
        t.prepend = function(t, n = "") {
            this.$1 = [
                t,
                this.toString()
            ].filter((e)=>e).join(n);
            return this;
        };
        t.toString = function() {
            return this.$1;
        };
        return e;
    })();
    const u = (()=>{
        function e(e = "", t) {
            this.$1 = new s(e);
            this.$2 = t;
        }
        e.fromEl = function(n, r = o("WAWebCopyPasteCopyable.react").isCopyable(n)) {
            const t = r ? o("WAWebCopyPasteCopyable.react").getAppTextTemplateData(n) : null;
            return new e("", t);
        };
        e.getTemplate = function(n) {
            let t = n;
            if (!t) {
                return null;
            }
            if (!(t instanceof HTMLElement)) {
                if (!t.parentElement) {
                    return null;
                }
                t = t.parentElement;
            }
            let r = new e("${appText}");
            for(var a = t, i = 5, l = 0, s = false; a && l < i;){
                if (a instanceof HTMLElement && o("WAWebCopyPasteCopyable.react").isCopyable(a)) {
                    r = e.fromEl(a, true).append(r.toString());
                    s = s || !r.isPlainText();
                    i = 5;
                } else {
                    l++;
                }
                a = a.parentElement;
            }
            if (s) {
                return r.toString();
            }
            return null;
        };
        const t = e.prototype;
        t.append = function(t, n = "") {
            this.$1.append(t, n);
            return this;
        };
        t.prepend = function(t, n = "") {
            this.$1.prepend(t, n);
            return this;
        };
        t.isPlainText = function() {
            return this.$2 == null;
        };
        t.toString = function() {
            if (this.$2 != null) {
                return this.$2.replace(/\$\{appText\}/g, this.$1.toString());
            }
            return this.$1.toString();
        };
        return e;
    })();
    const c = (()=>{
        function e(e, t) {
            const n = e || "";
            this.$1 = new s(n);
            if (t != null && t !== "") {
                this.$2 = new u(n, t);
            }
        }
        e.$3 = function(n) {
            const t = this;
            const r = o("WAWebCopyPasteCopyable.react").findCopyableChildren(n);
            return r.reduceRight((e, n)=>e.prepend(t.fromEl(n), "\n"), new e);
        };
        e.$4 = function(t, n, a) {
            for(var e = n.cloneContents().childNodes, i = r("WAWebDomRangeGetContents")(n), l = [], s = [], u = 0; u < e.length; u++){
                const c = e[u];
                const d = i[u].parentElement;
                const m = (a || o("WAWebCopyPasteSelectable.react").isSelectable(i[u]) || o("WAWebCopyPasteSelectable.react").hasSelectableChildren(c)) && (t.contains(i[u]) || d != null && d.contains(t));
                if (m) {
                    l.push(c);
                    s.push(i[u]);
                }
            }
            e = l;
            i = s;
            let p = a;
            if (e.length === 1) {
                const _ = e[0];
                p = p || o("WAWebCopyPasteSelectable.react").isSelectable(i[0]);
                if (!p) {
                    e = o("WAWebCopyPasteSelectable.react").findSelectableChildren(_);
                    p = false;
                }
            }
            return {
                rangeNodes: e,
                parentIsSelectable: p
            };
        };
        e.fromCopyableEl = function(n, a = false) {
            const t = this;
            const i = o("WAWebCopyPasteCopyable.react").getPrePlainTextData(n) || "";
            const l = new e(i);
            const s = o("WAWebCopyPasteCopyable.react").getPlainTextData(n);
            const u = o("WAWebCopyPasteCopyable.react").getAppTextTemplateData(n);
            const c = new e("", u);
            if (s != null) {
                c.appendPlainText(s);
                return l.append(c);
            }
            if (a || o("WAWebCopyPasteSelectable.react").isSelectable(n)) {
                if (r("WAWebDomElementIs")(n, "br")) {
                    return l.appendPlainText("\n");
                }
                Array.from(n.childNodes).reduceRight((e, n)=>{
                    const o = r("WAWebDomElementIs")(n, "div") ? "\n" : "";
                    return e.prepend(t.fromSelectableNode(n), o);
                }, c);
                return l.append(c);
            }
            c.append(this.$3(n));
            return l.append(c);
        };
        e.fromEl = function(t, n = false) {
            if (o("WAWebCopyPasteCopyable.react").isCopyable(t) || n) {
                return this.fromCopyableEl(t, n);
            }
            return this.$3(t);
        };
        e.fromNode = function(n, r) {
            if (n instanceof HTMLElement) {
                return this.fromEl(n, r);
            }
            if (r) {
                return this.fromSelectableNode(n);
            }
            return new e;
        };
        e.fromRange = function(n, r) {
            const t = this;
            const a = r.commonAncestorContainer;
            const i = u.getTemplate(a);
            const l = new e("", i);
            const s = o("WAWebCopyPasteSelectable.react").isSelectAll(a) ? a : o("WAWebCopyPasteSelectable.react").findSelectAllParent(a);
            if (s instanceof HTMLElement) {
                return l.append(this.fromCopyableEl(s));
            }
            const c = this.$4(n, r, o("WAWebCopyPasteSelectable.react").isSelectable(a));
            const { parentIsSelectable: d, rangeNodes: m } = c;
            return m.reduceRight((e, n)=>{
                const r = t.fromNode(n, d);
                const o = !d && !r.toAppString().endsWith("\n") ? "\n" : "";
                return e.prepend(r, o);
            }, l);
        };
        e.selectionRequiresCustomSerialization = function(t) {
            const e = this;
            for(let n = 0; n < t.rangeCount; n++){
                const r = t.getRangeAt(n);
                if (this.$5(r.commonAncestorContainer) || Array.from(r.cloneContents().childNodes).some((t)=>e.$6(t))) {
                    return true;
                }
            }
            return false;
        };
        e.$5 = function(t) {
            for(let e = t; e != null;){
                if (e instanceof HTMLElement && o("WAWebCopyPasteCopyable.react").isCopyable(e) || o("WAWebCopyPasteSelectable.react").isSelectable(e) || o("WAWebCopyPasteSelectable.react").isSelectAll(e)) {
                    return true;
                }
                e = e.parentElement;
            }
            return false;
        };
        e.$6 = function(t) {
            const e = this;
            if (t instanceof HTMLElement) {
                return o("WAWebCopyPasteCopyable.react").isCopyable(t) || o("WAWebCopyPasteSelectable.react").isSelectable(t) || o("WAWebCopyPasteSelectable.react").isSelectAll(t) || Array.from(t.childNodes).some((t)=>e.$6(t));
            }
            return false;
        };
        e.fromSelectableNode = function(n) {
            const t = this;
            if (r("WAWebDomIsTextNode")(n)) {
                return new e(n.textContent);
            }
            if (!(n instanceof HTMLElement)) {
                return new e;
            }
            const a = n;
            const i = new e;
            r("WADepthFirstTraversal")(a, function(e) {
                if (r("WAWebDomIsTextNode")(e) || e instanceof HTMLElement && o("WAWebCopyPasteCopyable.react").isCopyable(e)) {
                    return [];
                }
                return Array.from(e.childNodes);
            }, function(e) {
                let a;
                if (e instanceof HTMLElement && o("WAWebCopyPasteCopyable.react").isCopyable(e)) {
                    a = t.fromCopyableEl(e, true);
                    i.append(a);
                } else if (r("WAWebDomIsTextNode")(e)) {
                    i.appendPlainText(e.textContent);
                } else if (r("WAWebDomElementIs")(n, "br")) {
                    i.appendPlainText("\n");
                }
            });
            return i;
        };
        e.fromSelection = function(n, o) {
            const t = this;
            const a = new e;
            return r("range")(0, o.rangeCount).map((e)=>{
                const r = o.getRangeAt(e);
                return t.fromRange(n, r);
            }).reduce((e, t)=>e.append(t, "\n"), a);
        };
        const t = e.prototype;
        t.append = function(t, n = "") {
            if (t.hasAppText()) {
                this.$2 = this.$2 || new u(this.toPlainString());
                this.$2.append(t.toAppString(), n);
            } else if (this.hasAppText()) {
                this.$2.append(t.toAppString(), n);
            }
            this.$1.append(t.toPlainString(), n);
            return this;
        };
        t.appendPlainText = function(n, r = "") {
            this.append(new e(n));
            return this;
        };
        t.prepend = function(t, n = "") {
            if (t.hasAppText()) {
                this.$2 = this.$2 || new u(this.toPlainString());
                this.$2.prepend(t.toAppString(), n);
            } else if (this.hasAppText()) {
                this.$2.prepend(t.toAppString(), n);
            }
            this.$1.prepend(t.toPlainString(), n);
            return this;
        };
        t.hasAppText = function() {
            return !!this.$2;
        };
        t.toAppText = function() {
            if (this.hasAppText()) {
                return this.$2;
            }
            return new u(this.toPlainString());
        };
        t.toPlainString = function() {
            return this.$1.toString();
        };
        t.toAppString = function() {
            if (this.hasAppText()) {
                return this.$2.toString();
            }
            return this.toPlainString();
        };
        return e;
    })();
    l.APP_TEXT_MIMETYPE = e;
    l.Clipboard = c;
}, 98);