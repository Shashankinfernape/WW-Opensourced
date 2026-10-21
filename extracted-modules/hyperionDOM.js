__d("hyperionDOM", [
    "hyperionCore",
    "hyperionGlobals"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = new Map;
    const u = new Map;
    (e || (e = o("hyperionCore"))).registerShadowPrototypeGetter(function(e) {
        if (e instanceof Node) {
            return u.get(e.nodeName) ?? s.get(e.nodeType);
        }
        return null;
    });
    const c = ((t)=>{
        function n(n, r, a) {
            let l;
            let c = a?.targetPrototype ?? n?.prototype;
            if (!c && a) {
                const { sampleObject, nodeName, nodeType } = a;
                let f = sampleObject;
                if (!f && nodeType) {
                    switch(nodeType){
                        case window.document.DOCUMENT_NODE:
                            f = window.document;
                            break;
                        case window.document.ELEMENT_NODE:
                            f = head;
                            break;
                        default:
                            o("hyperionGlobals").assert(false, `Unsupported and unexpected nodeType ${nodeType}`);
                            break;
                    }
                }
                if (!f && nodeName) {
                    f = window.document.createElement(nodeName);
                }
                if (f) {
                    c = Object.getPrototypeOf(f);
                }
            }
            o("hyperionGlobals").assert(c && typeof c === "object", "Cannot create shadow prototype for undefined");
            l = t.call(this, c, r) || this;
            if (a) {
                const { nodeName, nodeType } = a;
                if (nodeName) {
                    u.set(nodeName.toUpperCase(), l);
                }
                if (nodeType) {
                    s.set(nodeType, l);
                }
            }
            if (a?.registerOnPrototype && c) {
                try {
                    (e || (e = o("hyperionCore"))).registerShadowPrototype(c, l);
                } catch (e) {}
            }
            return l;
        }
        babelHelpers.inheritsLoose(n, t);
        return n;
    })(e.ShadowPrototype);
    var head = window.document.head;
    function m(t, n) {
        const a = (e || (e = o("hyperionCore"))).getObjectExtension(t, true)?.shadowPrototype;
        if (a) {
            return a.getVirtualProperty(n);
        }
        return null;
    }
    const IEventPrototype = new c(Event, null, {
        sampleObject: new Event("tmp"),
        registerOnPrototype: true
    });
    const stopPropagation = e.interceptMethod("stopPropagation", IEventPrototype);
    const f = Object.freeze({
        __proto__: null,
        IEventPrototype,
        stopPropagation
    });
    const IEventTargetPrototype = new c(EventTarget, null, {
        sampleObject: head
    });
    const addEventListener = e.interceptMethod("addEventListener", IEventTargetPrototype);
    const dispatchEvent = e.interceptMethod("dispatchEvent", IEventTargetPrototype);
    const removeEventListener = e.interceptMethod("removeEventListener", IEventTargetPrototype);
    const b = Object.freeze({
        __proto__: null,
        IEventTargetPrototype,
        addEventListener,
        dispatchEvent,
        removeEventListener
    });
    const INodePrototype = new c(Node, IEventTargetPrototype, {
        sampleObject: head
    });
    const appendChild = e.interceptMethod("appendChild", INodePrototype);
    const cloneNode = e.interceptMethod("cloneNode", INodePrototype, true);
    const insertBefore = e.interceptMethod("insertBefore", INodePrototype);
    const removeChild = e.interceptMethod("removeChild", INodePrototype);
    const replaceChild = e.interceptMethod("replaceChild", INodePrototype);
    const I = Object.freeze({
        __proto__: null,
        INodePrototype,
        appendChild,
        cloneNode,
        insertBefore,
        removeChild,
        replaceChild
    });
    const ICSSStyleDeclarationPrototype = new c(CSSStyleDeclaration, null, {
        sampleObject: head.style
    });
    ICSSStyleDeclarationPrototype.extension.useCaseInsensitivePropertyName = true;
    const getPropertyValue = e.interceptMethod("getPropertyValue", ICSSStyleDeclarationPrototype);
    const removeProperty = e.interceptMethod("removeProperty", ICSSStyleDeclarationPrototype);
    const setProperty = e.interceptMethod("setProperty", ICSSStyleDeclarationPrototype);
    const P = Object.freeze({
        __proto__: null,
        ICSSStyleDeclarationPrototype,
        getPropertyValue,
        removeProperty,
        setProperty
    });
    const N = new c(Attr, INodePrototype, {
        sampleObject: head.attributes[0],
        nodeType: document.ATTRIBUTE_NODE
    });
    const M = e.interceptAttribute("value", N);
    function w() {
        M.getter.setCustom(function() {
            const e = this;
            const e_ownerElement = e.ownerElement;
            if (e_ownerElement) {
                const n = m(e_ownerElement, e.name);
                if (n) {
                    const r = n.getRawValue(e_ownerElement);
                    if (r != null) {
                        return r;
                    }
                }
            }
            return M.getter.getOriginal().call(e);
        });
        M.setter.setCustom(function(e) {
            const t = this;
            const t_ownerElement = t.ownerElement;
            if (t_ownerElement) {
                const r = m(t_ownerElement, t.name);
                if (r) {
                    return r.setRawValue(t_ownerElement, e);
                }
            }
            return M.setter.getOriginal().call(t, e);
        });
    }
    const A = new c(Element, INodePrototype, {
        sampleObject: head,
        nodeType: document.ELEMENT_NODE
    });
    A.extension.useCaseInsensitivePropertyName = true;
    const getAttribute = e.interceptMethod("getAttribute", A);
    const getAttributeNS = e.interceptMethod("getAttributeNS", A);
    const setAttribute = e.interceptMethod("setAttribute", A);
    const setAttributeNS = e.interceptMethod("setAttributeNS", A);
    const setAttributeNode = e.interceptMethod("setAttributeNode", A);
    const setAttributeNodeNS = e.interceptMethod("setAttributeNodeNS", A);
    function V() {
        getAttribute.setCustom(function(e) {
            const t = m(this, e);
            if (t) {
                const n = t.getRawValue(this);
                if (n !== null) {
                    return n;
                }
            }
            return getAttribute.getOriginal().apply(this, arguments);
        });
        setAttribute.setCustom(function(e, t) {
            const n = m(this, e);
            if (n) {
                return n.setRawValue(this, t);
            }
            return setAttribute.getOriginal().apply(this, arguments);
        });
        getAttributeNS.setCustom(function(e, t) {
            const n = m(this, t);
            if (n) {
                const r = n.getRawValue(this);
                if (r !== null) {
                    return r;
                }
            }
            return getAttributeNS.getOriginal().apply(this, arguments);
        });
        setAttributeNS.setCustom(function(e, t, n) {
            const r = m(this, t);
            if (r) {
                return r.setRawValue(this, n);
            }
            return setAttributeNS.getOriginal().apply(this, arguments);
        });
        function e(e) {
            return function(t) {
                let n;
                const r = !t.ownerElement;
                const o = m(this, t.name);
                if (r && o) {
                    const a = t.value;
                    n = e.call(this, t);
                    o.setRawValue(this, a);
                } else {
                    n = e.call(this, t);
                }
                return n;
            };
        }
        setAttributeNode.setCustom(e(setAttributeNode.getOriginal()));
        setAttributeNodeNS.setCustom(e(setAttributeNodeNS.getOriginal()));
    }
    class H {
        constructor(e, t){
            this.rawValue = e;
            this.processedValue = t;
        }
        getRawValue(t) {
            return this.rawValue.getter.interceptor.call(t);
        }
        setRawValue(t, n) {
            return this.rawValue.setter.interceptor.call(t, n);
        }
        getProcessedValue(t) {
            return this.processedValue.getter.interceptor.call(t);
        }
        setProcessedValue(t, n) {
            return this.processedValue.setter.interceptor.call(t, n);
        }
    }
    let G = function() {
        w();
        V();
        G = function() {};
    };
    const z = ((t)=>{
        function n(n, r, a) {
            let i;
            i = t.call(this, n, r, a) || this;
            i.raw = new (e || (e = o("hyperionCore"))).AttributeInterceptorBase(n, function() {
                return getAttribute.getOriginal().call(this, n);
            }, function(e) {
                return setAttribute.getOriginal().call(this, n, e);
            });
            A.setVirtualProperty(n, new H(i.raw, i));
            G();
            return i;
        }
        babelHelpers.inheritsLoose(n, t);
        return n;
    })(e.AttributeInterceptor);
    function j(t, n) {
        return (e || (e = o("hyperionCore"))).interceptAttributeBase(t, n, z);
    }
    const IElementtPrototype = A;
    const after = e.interceptMethod("after", IElementtPrototype);
    const append = e.interceptMethod("append", IElementtPrototype);
    const before = e.interceptMethod("before", IElementtPrototype);
    const getAttributeNames = e.interceptMethod("getAttributeNames", IElementtPrototype);
    const getAttributeNode = e.interceptMethod("getAttributeNode", IElementtPrototype, true);
    const getAttributeNodeNS = e.interceptMethod("getAttributeNodeNS", IElementtPrototype, true);
    const getBoundingClientRect = e.interceptMethod("getBoundingClientRect", IElementtPrototype);
    const getClientRects = e.interceptMethod("getClientRects", IElementtPrototype);
    const getElementsByClassName = e.interceptMethod("getElementsByClassName", IElementtPrototype);
    const getElementsByTagName = e.interceptMethod("getElementsByTagName", IElementtPrototype);
    const getElementsByTagNameNS = e.interceptMethod("getElementsByTagNameNS", IElementtPrototype);
    const hasAttribute = e.interceptMethod("hasAttribute", IElementtPrototype);
    const hasAttributeNS = e.interceptMethod("hasAttributeNS", IElementtPrototype);
    const hasAttributes = e.interceptMethod("hasAttributes", IElementtPrototype);
    const insertAdjacentElement = e.interceptMethod("insertAdjacentElement", IElementtPrototype);
    const insertAdjacentHTML = e.interceptMethod("insertAdjacentHTML", IElementtPrototype);
    const insertAdjacentText = e.interceptMethod("insertAdjacentText", IElementtPrototype);
    const prepend = e.interceptMethod("prepend", IElementtPrototype);
    const remove = e.interceptMethod("remove", IElementtPrototype);
    const removeAttribute = e.interceptMethod("removeAttribute", IElementtPrototype);
    const removeAttributeNode = e.interceptMethod("removeAttributeNode", IElementtPrototype);
    const removeAttributeNS = e.interceptMethod("removeAttributeNS", IElementtPrototype);
    const replaceChildren = e.interceptMethod("replaceChildren", IElementtPrototype);
    const replaceWith = e.interceptMethod("replaceWith", IElementtPrototype);
    const toggleAttribute = e.interceptMethod("toggleAttribute", IElementtPrototype);
    const be = j("id", IElementtPrototype);
    const innerHTML = e.interceptAttribute("innerHTML", IElementtPrototype);
    const Se = Object.freeze({
        __proto__: null,
        IElementtPrototype,
        after,
        append,
        before,
        getAttribute,
        getAttributeNS,
        getAttributeNames,
        getAttributeNode,
        getAttributeNodeNS,
        getBoundingClientRect,
        getClientRects,
        getElementsByClassName,
        getElementsByTagName,
        getElementsByTagNameNS,
        hasAttribute,
        hasAttributeNS,
        hasAttributes,
        id: be,
        innerHTML,
        insertAdjacentElement,
        insertAdjacentHTML,
        insertAdjacentText,
        prepend,
        remove,
        removeAttribute,
        removeAttributeNS,
        removeAttributeNode,
        replaceChildren,
        replaceWith,
        setAttribute,
        setAttributeNS,
        setAttributeNode,
        setAttributeNodeNS,
        toggleAttribute
    });
    const IHTMLElementtPrototype = new c(HTMLElement, IElementtPrototype, {
        sampleObject: head,
        nodeType: document.ELEMENT_NODE
    });
    const style = e.interceptAttribute("style", IHTMLElementtPrototype);
    const Ee = Object.freeze({
        __proto__: null,
        IHTMLElementtPrototype,
        style
    });
    const IHTMLInputElementPrototype = new c(HTMLInputElement, IHTMLElementtPrototype, {
        sampleObject: document.createElement("input"),
        nodeType: document.ELEMENT_NODE
    });
    const checked = e.interceptAttribute("checked", IHTMLInputElementPrototype);
    const Te = Object.freeze({
        __proto__: null,
        IHTMLInputElementPrototype,
        checked
    });
    const De = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e.AttributeInterceptor);
    function xe(t, n) {
        return (e || (e = o("hyperionCore"))).interceptAttributeBase(t, n, De);
    }
    const IWindowPrototype = new c(Window, IEventTargetPrototype, {
        targetPrototype: window,
        registerOnPrototype: true
    });
    const fetch = e.interceptMethod("fetch", IWindowPrototype);
    const requestAnimationFrame = e.interceptMethod("requestAnimationFrame", IWindowPrototype);
    const requestIdleCallback = e.interceptMethod("requestIdleCallback", IWindowPrototype);
    const IntersectionObserver = e.interceptConstructorMethod("IntersectionObserver", IWindowPrototype);
    const MutationObserver = e.interceptConstructorMethod("MutationObserver", IWindowPrototype);
    const onerror = xe("onerror", IWindowPrototype);
    const ondevicemotion = xe("ondevicemotion", IWindowPrototype);
    const ondeviceorientation = xe("ondeviceorientation", IWindowPrototype);
    const onorientationchange = xe("onorientationchange", IWindowPrototype);
    const qe = Object.freeze({
        __proto__: null,
        IWindowPrototype,
        IntersectionObserver,
        MutationObserver,
        fetch,
        ondevicemotion,
        ondeviceorientation,
        onerror,
        onorientationchange,
        requestAnimationFrame,
        requestIdleCallback
    });
    const IHistoryPrototype = new c(History, null, {
        sampleObject: window.history,
        registerOnPrototype: true
    });
    const back = e.interceptMethod("back", IHistoryPrototype);
    const forward = e.interceptMethod("forward", IHistoryPrototype);
    const go = e.interceptMethod("go", IHistoryPrototype);
    const pushState = e.interceptMethod("pushState", IHistoryPrototype);
    const replaceState = e.interceptMethod("replaceState", IHistoryPrototype);
    const Ke = Object.freeze({
        __proto__: null,
        IHistoryPrototype,
        back,
        forward,
        go,
        pushState,
        replaceState
    });
    const Qe = new c(XMLHttpRequest, IEventTargetPrototype, {
        sampleObject: new XMLHttpRequest,
        registerOnPrototype: true
    });
    const Xe = e.interceptConstructorMethod("XMLHttpRequest", IWindowPrototype);
    const Ye = e.interceptMethod("open", Qe);
    const Je = e.interceptMethod("send", Qe);
    const Ze = xe("onabort", Qe);
    const et = xe("onerror", Qe);
    const tt = xe("onload", Qe);
    const nt = xe("onloadend", Qe);
    const rt = xe("onloadstart", Qe);
    const ot = xe("onprogress", Qe);
    const at = xe("readystatechange", Qe);
    const it = xe("ontimeout", Qe);
    l.ICSSStyleDeclaration = P;
    l.IElement = Se;
    l.IElementtPrototype = IElementtPrototype;
    l.IEvent = f;
    l.IEventTarget = b;
    l.IHTMLElement = Ee;
    l.IHTMLInputElement = Te;
    l.IHistory = Ke;
    l.INode = I;
    l.IWindow = qe;
    l.addEventListener = addEventListener;
    l.after = after;
    l.append = append;
    l.appendChild = appendChild;
    l.before = before;
    l.checked = checked;
    l.constructor = Xe;
    l.fetch = fetch;
    l.innerHTML = innerHTML;
    l.insertAdjacentElement = insertAdjacentElement;
    l.insertBefore = insertBefore;
    l.interceptElementAttribute = j;
    l.onabort = Ze;
    l.onerror = et;
    l.onload = tt;
    l.onloadend = nt;
    l.onloadstart = rt;
    l.onprogress = ot;
    l.ontimeout = it;
    l.open = Ye;
    l.prepend = prepend;
    l.pushState = pushState;
    l.readystatechange = at;
    l.remove = remove;
    l.removeChild = removeChild;
    l.removeEventListener = removeEventListener;
    l.replaceChild = replaceChild;
    l.replaceChildren = replaceChildren;
    l.replaceState = replaceState;
    l.replaceWith = replaceWith;
    l.requestAnimationFrame = requestAnimationFrame;
    l.requestIdleCallback = requestIdleCallback;
    l.send = Je;
    l.stopPropagation = stopPropagation;
}, 98);