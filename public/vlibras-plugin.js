window.VLibras = function (t) {
    function e(e) {
      for (var n, o, r = e[0], a = e[1], s = 0, l = []; s < r.length; s++)
        o = r[s], Object.prototype.hasOwnProperty.call(i, o) && i[o] && l.push(i[o][0]), i[o] = 0;
      for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
      for (c && c(e); l.length;) l.shift();
    }
  
    var n = {}, i = { 1: 0 };
  
    function o(e) {
      if (n[e]) return n[e].exports;
      var i = n[e] = { i: e, l: !1, exports: {} };
      return t[e].call(i.exports, i, i.exports, o), i.l = !0, i.exports;
    }
  
    o.e = function (t) {
      var e = [], n = i[t];
      if (0 !== n)
        if (n) e.push(n[2]);
        else {
          var r = new Promise(function (e, o) { n = i[t] = [e, o]; });
          e.push(n[2] = r);
          var a, s = document.createElement("script");
          s.charset = "utf-8", s.timeout = 120, o.nc && s.setAttribute("nonce", o.nc),
          s.src = function (t) { return o.p + "" + t + ".vlibras-plugin.js"; }(t);
          var c = new Error;
          a = function (e) {
            s.onerror = s.onload = null, clearTimeout(l);
            var n = i[t];
            if (0 !== n) {
              if (n) {
                var o = e && ("load" === e.type ? "missing" : e.type),
                  r = e && e.target && e.target.src;
                c.message = "Loading chunk " + t + " failed.\n(" + o + ": " + r + ")", c.name = "ChunkLoadError",
                  c.type = o, c.request = r, n[1](c);
              }
              i[t] = void 0;
            }
          };
          var l = setTimeout(function () { a({ type: "timeout", target: s }); }, 12e4);
          s.onerror = s.onload = a, document.head.appendChild(s);
        }
      return Promise.all(e);
    };
  
    o.m = t, o.c = n, o.d = function (t, e, n) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    };
    o.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
      Object.defineProperty(t, "__esModule", { value: !0 });
    };
    o.t = function (t, e) {
      if (1 & e && (t = o(t)), 8 & e) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (o.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
        for (var i in t) o.d(n, i, function (e) { return t[e]; }.bind(null, i));
      return n;
    };
    o.n = function (t) {
      var e = t && t.__esModule ? function () { return t.default; } : function () { return t; };
      return o.d(e, "a", e), e;
    };
    o.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e); };
    o.p = "https://www.vlibras.gov.br/app/", o.oe = function (t) { throw t; };
  
    var r = window.webpackJsonpVLibras = window.webpackJsonpVLibras || [], a = r.push.bind(r);
    r.push = e, r = r.slice();
    for (var s = 0; s < r.length; s++) e(r[s]);
    var c = a;
    return o(o.s = 4);
  }([function (t, e, n) {
    "use strict";
    var i, o = function () { return void 0 === i && (i = Boolean(window && document && document.all && !window.atob)), i },
      r = function () { var t = {}; return function (e) { if (void 0 === t[e]) { var n = document.querySelector(e); if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try { n = n.contentDocument.head } catch (t) { n = null } t[e] = n } return t[e] } },
      a = [];
  
    function s(t) {
      for (var e = -1, n = 0; n < a.length; n++) if (a[n].identifier === t) { e = n; break }
      return e;
    }
  
    function c(t, e) {
      for (var n = {}, i = [], o = 0; o < t.length; o++) {
        var r = t[o], c = e.base ? r[0] + e.base : r[0], l = n[c] || 0, u = "".concat(c, " ").concat(l);
        n[c] = l + 1;
        var d = s(u), p = { css: r[1], media: r[2], sourceMap: r[3] };
        -1 !== d ? (a[d].references++, a[d].updater(p)) : a.push({ identifier: u, updater: g(p, e), references: 1 });
        i.push(u);
      }
      return i;
    }
  
    function l(t) {
      var e = document.createElement("style"), i = t.attributes || {};
      if (void 0 === i.nonce) { var o = n.nc; o && (i.nonce = o) }
      if (Object.keys(i).forEach(function (t) { e.setAttribute(t, i[t]) }), "function" == typeof t.insert) t.insert(e);
      else {
        var a = r(t.insert || "head");
        if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        a.appendChild(e);
      }
      return e;
    }
  
    var u, d = (u = [], function (t, e) { return u[t] = e, u.filter(Boolean).join("\n") });
  
    function p(t, e, n, i) {
      var o = n ? "" : i.media ? "@media ".concat(i.media, " {").concat(i.css, "}") : i.css;
      if (t.styleSheet) t.styleSheet.cssText = d(e, o);
      else {
        var r = document.createTextNode(o), a = t.childNodes;
        a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(r, a[e]) : t.appendChild(r);
      }
    }
  
    function v(t, e, n) {
      var i = n.css, o = n.media, r = n.sourceMap;
      if (o) t.setAttribute("media", o);
      else t.removeAttribute("media");
      r && "undefined" != typeof btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r)))), " */"));
      if (t.styleSheet) t.styleSheet.cssText = i;
      else {
        for (; t.firstChild;) t.removeChild(t.firstChild);
        t.appendChild(document.createTextNode(i));
      }
    }
  
    var f = null, w = 0;
  
    function g(t, e) {
      var n, i, o;
      if (e.singleton) {
        var r = w++;
        n = f || (f = l(e)), i = p.bind(null, n, r, !1), o = p.bind(null, n, r, !0);
      }
      else n = l(e), i = v.bind(null, n, e), o = function () { !function (t) { if (null === t.parentNode) return !1; t.parentNode.removeChild(t) }(n) };
      return i(t), function (e) { if (e) { if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return; i(t = e) } else o() };
    }
  
    t.exports = function (t, e) {
      (e = e || {}).singleton || "boolean" == typeof e.singleton || (e.singleton = o());
      var n = c(t = t || [], e);
      return function (t) {
        if (t = t || [], "[object Array]" === Object.prototype.toString.call(t)) {
          for (var i = 0; i < n.length; i++) {
            var o = s(n[i]);
            a[o].references--;
          }
          for (var r = c(t, e), l = 0; l < n.length; l++) {
            var u = s(n[l]);
             a[u].references++;
          }
          n = r;
        }
      }
    };
  }, function (t, e, n) {
    t.exports = n(0);
  }, function (t, e, n) {
    "use strict";
    n(4);
  }, function (t, e, n) {
    t.exports = function () {};
  }, function (t, e, n) {
    "use strict";
    var i = n(1);
    (function (t, e) {
      if ("object" == typeof t && "object" == typeof e) {
        var n = n.n(i);
        e.exports = n;
      }
    })();
  }]);
  