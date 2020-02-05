/*!
 * The MIT License
 *
 * Copyright (c) 2018-present Liquid Carrot Corporation <people@liquidcarrot.io> https://liquidcarrot.io.
 *
 * Copyright for portions of Carrot are held by the following parties as a part of project Carrot:
 * - Copyright 2017 Thomas Wagenaar <wagenaartje@protonmail.com>
 * - Copyright 2017 Juan Cazala - cazala.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
!function (t, n) {
  "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.Carrot = n() : t.Carrot = n()
}(window, (function () {
  return function (t) {
    var n = {};

    function e(r) {
      if (n[r]) return n[r].exports;
      var o = n[r] = {i: r, l: !1, exports: {}};
      return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
    }

    return e.m = t, e.c = n, e.d = function (t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, {enumerable: !0, get: r})
    }, e.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, e.t = function (t, n) {
      if (1 & n && (t = e(t)), 8 & n) return t;
      if (4 & n && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (e.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: t
      }), 2 & n && "string" != typeof t) for (var o in t) e.d(r, o, function (n) {
        return t[n]
      }.bind(null, o));
      return r
    }, e.n = function (t) {
      var n = t && t.__esModule ? function () {
        return t.default
      } : function () {
        return t
      };
      return e.d(n, "a", n), n
    }, e.o = function (t, n) {
      return Object.prototype.hasOwnProperty.call(t, n)
    }, e.p = "", e(e.s = 13)
  }([function (t, n, e) {
    const r = {
      activation: e(6),
      mutation: e(14),
      selection: e(15),
      crossover: e(16),
      cost: e(7),
      gating: e(17),
      connection: e(18),
      rate: e(19)
    };
    t.exports = r
  }, function (t, n, e) {
    (function (t, r) {
      var o;
      /**
       * @license
       * Lodash <https://lodash.com/>
       * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
       * Released under MIT license <https://lodash.com/license>
       * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
       * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
       */(function () {
        var i, u = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
          c = "Expected a function", s = "__lodash_hash_undefined__", f = 500, l = "__lodash_placeholder__", p = 1,
          h = 2, g = 4, _ = 1, d = 2, v = 1, m = 2, y = 4, w = 8, b = 16, A = 32, O = 64, E = 128, L = 256, N = 512,
          x = 30, T = "...", S = 800, M = 16, j = 1, D = 2, z = 1 / 0, I = 9007199254740991, P = 17976931348623157e292,
          R = NaN, k = 4294967295, U = k - 1, C = k >>> 1,
          q = [["ary", E], ["bind", v], ["bindKey", m], ["curry", w], ["curryRight", b], ["flip", N], ["partial", A], ["partialRight", O], ["rearg", L]],
          B = "[object Arguments]", F = "[object Array]", G = "[object AsyncFunction]", W = "[object Boolean]",
          $ = "[object Date]", V = "[object DOMException]", J = "[object Error]", H = "[object Function]",
          X = "[object GeneratorFunction]", Y = "[object Map]", K = "[object Number]", Z = "[object Null]",
          Q = "[object Object]", tt = "[object Proxy]", nt = "[object RegExp]", et = "[object Set]",
          rt = "[object String]", ot = "[object Symbol]", it = "[object Undefined]", ut = "[object WeakMap]",
          at = "[object WeakSet]", ct = "[object ArrayBuffer]", st = "[object DataView]", ft = "[object Float32Array]",
          lt = "[object Float64Array]", pt = "[object Int8Array]", ht = "[object Int16Array]",
          gt = "[object Int32Array]", _t = "[object Uint8Array]", dt = "[object Uint8ClampedArray]",
          vt = "[object Uint16Array]", mt = "[object Uint32Array]", yt = /\b__p \+= '';/g, wt = /\b(__p \+=) '' \+/g,
          bt = /(__e\(.*?\)|\b__t\)) \+\n'';/g, At = /&(?:amp|lt|gt|quot|#39);/g, Ot = /[&<>"']/g,
          Et = RegExp(At.source), Lt = RegExp(Ot.source), Nt = /<%-([\s\S]+?)%>/g, xt = /<%([\s\S]+?)%>/g,
          Tt = /<%=([\s\S]+?)%>/g, St = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Mt = /^\w*$/,
          jt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          Dt = /[\\^$.*+?()[\]{}|]/g, zt = RegExp(Dt.source), It = /^\s+|\s+$/g, Pt = /^\s+/, Rt = /\s+$/,
          kt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Ut = /\{\n\/\* \[wrapped with (.+)\] \*/, Ct = /,? & /,
          qt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Bt = /\\(\\)?/g, Ft = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
          Gt = /\w*$/, Wt = /^[-+]0x[0-9a-f]+$/i, $t = /^0b[01]+$/i, Vt = /^\[object .+?Constructor\]$/,
          Jt = /^0o[0-7]+$/i, Ht = /^(?:0|[1-9]\d*)$/, Xt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Yt = /($^)/,
          Kt = /['\n\r\u2028\u2029\\]/g, Zt = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
          Qt = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
          tn = "[\\ud800-\\udfff]", nn = "[" + Qt + "]", en = "[" + Zt + "]", rn = "\\d+", on = "[\\u2700-\\u27bf]",
          un = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
          an = "[^\\ud800-\\udfff" + Qt + rn + "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
          cn = "\\ud83c[\\udffb-\\udfff]", sn = "[^\\ud800-\\udfff]", fn = "(?:\\ud83c[\\udde6-\\uddff]){2}",
          ln = "[\\ud800-\\udbff][\\udc00-\\udfff]", pn = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
          hn = "(?:" + un + "|" + an + ")", gn = "(?:" + pn + "|" + an + ")", _n = "(?:" + en + "|" + cn + ")" + "?",
          dn = "[\\ufe0e\\ufe0f]?" + _n + ("(?:\\u200d(?:" + [sn, fn, ln].join("|") + ")[\\ufe0e\\ufe0f]?" + _n + ")*"),
          vn = "(?:" + [on, fn, ln].join("|") + ")" + dn, mn = "(?:" + [sn + en + "?", en, fn, ln, tn].join("|") + ")",
          yn = RegExp("['’]", "g"), wn = RegExp(en, "g"), bn = RegExp(cn + "(?=" + cn + ")|" + mn + dn, "g"),
          An = RegExp([pn + "?" + un + "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" + [nn, pn, "$"].join("|") + ")", gn + "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" + [nn, pn + hn, "$"].join("|") + ")", pn + "?" + hn + "+(?:['’](?:d|ll|m|re|s|t|ve))?", pn + "+(?:['’](?:D|LL|M|RE|S|T|VE))?", "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rn, vn].join("|"), "g"),
          On = RegExp("[\\u200d\\ud800-\\udfff" + Zt + "\\ufe0e\\ufe0f]"),
          En = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
          Ln = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
          Nn = -1, xn = {};
        xn[ft] = xn[lt] = xn[pt] = xn[ht] = xn[gt] = xn[_t] = xn[dt] = xn[vt] = xn[mt] = !0, xn[B] = xn[F] = xn[ct] = xn[W] = xn[st] = xn[$] = xn[J] = xn[H] = xn[Y] = xn[K] = xn[Q] = xn[nt] = xn[et] = xn[rt] = xn[ut] = !1;
        var Tn = {};
        Tn[B] = Tn[F] = Tn[ct] = Tn[st] = Tn[W] = Tn[$] = Tn[ft] = Tn[lt] = Tn[pt] = Tn[ht] = Tn[gt] = Tn[Y] = Tn[K] = Tn[Q] = Tn[nt] = Tn[et] = Tn[rt] = Tn[ot] = Tn[_t] = Tn[dt] = Tn[vt] = Tn[mt] = !0, Tn[J] = Tn[H] = Tn[ut] = !1;
        var Sn = {"\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029"}, Mn = parseFloat,
          jn = parseInt, Dn = "object" == typeof t && t && t.Object === Object && t,
          zn = "object" == typeof self && self && self.Object === Object && self,
          In = Dn || zn || Function("return this")(), Pn = n && !n.nodeType && n,
          Rn = Pn && "object" == typeof r && r && !r.nodeType && r, kn = Rn && Rn.exports === Pn, Un = kn && Dn.process,
          Cn = function () {
            try {
              var t = Rn && Rn.require && Rn.require("util").types;
              return t || Un && Un.binding && Un.binding("util")
            } catch (t) {
            }
          }(), qn = Cn && Cn.isArrayBuffer, Bn = Cn && Cn.isDate, Fn = Cn && Cn.isMap, Gn = Cn && Cn.isRegExp,
          Wn = Cn && Cn.isSet, $n = Cn && Cn.isTypedArray;

        function Vn(t, n, e) {
          switch (e.length) {
            case 0:
              return t.call(n);
            case 1:
              return t.call(n, e[0]);
            case 2:
              return t.call(n, e[0], e[1]);
            case 3:
              return t.call(n, e[0], e[1], e[2])
          }
          return t.apply(n, e)
        }

        function Jn(t, n, e, r) {
          for (var o = -1, i = null == t ? 0 : t.length; ++o < i;) {
            var u = t[o];
            n(r, u, e(u), t)
          }
          return r
        }

        function Hn(t, n) {
          for (var e = -1, r = null == t ? 0 : t.length; ++e < r && !1 !== n(t[e], e, t);) ;
          return t
        }

        function Xn(t, n) {
          for (var e = null == t ? 0 : t.length; e-- && !1 !== n(t[e], e, t);) ;
          return t
        }

        function Yn(t, n) {
          for (var e = -1, r = null == t ? 0 : t.length; ++e < r;) if (!n(t[e], e, t)) return !1;
          return !0
        }

        function Kn(t, n) {
          for (var e = -1, r = null == t ? 0 : t.length, o = 0, i = []; ++e < r;) {
            var u = t[e];
            n(u, e, t) && (i[o++] = u)
          }
          return i
        }

        function Zn(t, n) {
          return !!(null == t ? 0 : t.length) && ce(t, n, 0) > -1
        }

        function Qn(t, n, e) {
          for (var r = -1, o = null == t ? 0 : t.length; ++r < o;) if (e(n, t[r])) return !0;
          return !1
        }

        function te(t, n) {
          for (var e = -1, r = null == t ? 0 : t.length, o = Array(r); ++e < r;) o[e] = n(t[e], e, t);
          return o
        }

        function ne(t, n) {
          for (var e = -1, r = n.length, o = t.length; ++e < r;) t[o + e] = n[e];
          return t
        }

        function ee(t, n, e, r) {
          var o = -1, i = null == t ? 0 : t.length;
          for (r && i && (e = t[++o]); ++o < i;) e = n(e, t[o], o, t);
          return e
        }

        function re(t, n, e, r) {
          var o = null == t ? 0 : t.length;
          for (r && o && (e = t[--o]); o--;) e = n(e, t[o], o, t);
          return e
        }

        function oe(t, n) {
          for (var e = -1, r = null == t ? 0 : t.length; ++e < r;) if (n(t[e], e, t)) return !0;
          return !1
        }

        var ie = pe("length");

        function ue(t, n, e) {
          var r;
          return e(t, (function (t, e, o) {
            if (n(t, e, o)) return r = e, !1
          })), r
        }

        function ae(t, n, e, r) {
          for (var o = t.length, i = e + (r ? 1 : -1); r ? i-- : ++i < o;) if (n(t[i], i, t)) return i;
          return -1
        }

        function ce(t, n, e) {
          return n == n ? function (t, n, e) {
            var r = e - 1, o = t.length;
            for (; ++r < o;) if (t[r] === n) return r;
            return -1
          }(t, n, e) : ae(t, fe, e)
        }

        function se(t, n, e, r) {
          for (var o = e - 1, i = t.length; ++o < i;) if (r(t[o], n)) return o;
          return -1
        }

        function fe(t) {
          return t != t
        }

        function le(t, n) {
          var e = null == t ? 0 : t.length;
          return e ? _e(t, n) / e : R
        }

        function pe(t) {
          return function (n) {
            return null == n ? i : n[t]
          }
        }

        function he(t) {
          return function (n) {
            return null == t ? i : t[n]
          }
        }

        function ge(t, n, e, r, o) {
          return o(t, (function (t, o, i) {
            e = r ? (r = !1, t) : n(e, t, o, i)
          })), e
        }

        function _e(t, n) {
          for (var e, r = -1, o = t.length; ++r < o;) {
            var u = n(t[r]);
            u !== i && (e = e === i ? u : e + u)
          }
          return e
        }

        function de(t, n) {
          for (var e = -1, r = Array(t); ++e < t;) r[e] = n(e);
          return r
        }

        function ve(t) {
          return function (n) {
            return t(n)
          }
        }

        function me(t, n) {
          return te(n, (function (n) {
            return t[n]
          }))
        }

        function ye(t, n) {
          return t.has(n)
        }

        function we(t, n) {
          for (var e = -1, r = t.length; ++e < r && ce(n, t[e], 0) > -1;) ;
          return e
        }

        function be(t, n) {
          for (var e = t.length; e-- && ce(n, t[e], 0) > -1;) ;
          return e
        }

        var Ae = he({
          "À": "A",
          "Á": "A",
          "Â": "A",
          "Ã": "A",
          "Ä": "A",
          "Å": "A",
          "à": "a",
          "á": "a",
          "â": "a",
          "ã": "a",
          "ä": "a",
          "å": "a",
          "Ç": "C",
          "ç": "c",
          "Ð": "D",
          "ð": "d",
          "È": "E",
          "É": "E",
          "Ê": "E",
          "Ë": "E",
          "è": "e",
          "é": "e",
          "ê": "e",
          "ë": "e",
          "Ì": "I",
          "Í": "I",
          "Î": "I",
          "Ï": "I",
          "ì": "i",
          "í": "i",
          "î": "i",
          "ï": "i",
          "Ñ": "N",
          "ñ": "n",
          "Ò": "O",
          "Ó": "O",
          "Ô": "O",
          "Õ": "O",
          "Ö": "O",
          "Ø": "O",
          "ò": "o",
          "ó": "o",
          "ô": "o",
          "õ": "o",
          "ö": "o",
          "ø": "o",
          "Ù": "U",
          "Ú": "U",
          "Û": "U",
          "Ü": "U",
          "ù": "u",
          "ú": "u",
          "û": "u",
          "ü": "u",
          "Ý": "Y",
          "ý": "y",
          "ÿ": "y",
          "Æ": "Ae",
          "æ": "ae",
          "Þ": "Th",
          "þ": "th",
          "ß": "ss",
          "Ā": "A",
          "Ă": "A",
          "Ą": "A",
          "ā": "a",
          "ă": "a",
          "ą": "a",
          "Ć": "C",
          "Ĉ": "C",
          "Ċ": "C",
          "Č": "C",
          "ć": "c",
          "ĉ": "c",
          "ċ": "c",
          "č": "c",
          "Ď": "D",
          "Đ": "D",
          "ď": "d",
          "đ": "d",
          "Ē": "E",
          "Ĕ": "E",
          "Ė": "E",
          "Ę": "E",
          "Ě": "E",
          "ē": "e",
          "ĕ": "e",
          "ė": "e",
          "ę": "e",
          "ě": "e",
          "Ĝ": "G",
          "Ğ": "G",
          "Ġ": "G",
          "Ģ": "G",
          "ĝ": "g",
          "ğ": "g",
          "ġ": "g",
          "ģ": "g",
          "Ĥ": "H",
          "Ħ": "H",
          "ĥ": "h",
          "ħ": "h",
          "Ĩ": "I",
          "Ī": "I",
          "Ĭ": "I",
          "Į": "I",
          "İ": "I",
          "ĩ": "i",
          "ī": "i",
          "ĭ": "i",
          "į": "i",
          "ı": "i",
          "Ĵ": "J",
          "ĵ": "j",
          "Ķ": "K",
          "ķ": "k",
          "ĸ": "k",
          "Ĺ": "L",
          "Ļ": "L",
          "Ľ": "L",
          "Ŀ": "L",
          "Ł": "L",
          "ĺ": "l",
          "ļ": "l",
          "ľ": "l",
          "ŀ": "l",
          "ł": "l",
          "Ń": "N",
          "Ņ": "N",
          "Ň": "N",
          "Ŋ": "N",
          "ń": "n",
          "ņ": "n",
          "ň": "n",
          "ŋ": "n",
          "Ō": "O",
          "Ŏ": "O",
          "Ő": "O",
          "ō": "o",
          "ŏ": "o",
          "ő": "o",
          "Ŕ": "R",
          "Ŗ": "R",
          "Ř": "R",
          "ŕ": "r",
          "ŗ": "r",
          "ř": "r",
          "Ś": "S",
          "Ŝ": "S",
          "Ş": "S",
          "Š": "S",
          "ś": "s",
          "ŝ": "s",
          "ş": "s",
          "š": "s",
          "Ţ": "T",
          "Ť": "T",
          "Ŧ": "T",
          "ţ": "t",
          "ť": "t",
          "ŧ": "t",
          "Ũ": "U",
          "Ū": "U",
          "Ŭ": "U",
          "Ů": "U",
          "Ű": "U",
          "Ų": "U",
          "ũ": "u",
          "ū": "u",
          "ŭ": "u",
          "ů": "u",
          "ű": "u",
          "ų": "u",
          "Ŵ": "W",
          "ŵ": "w",
          "Ŷ": "Y",
          "ŷ": "y",
          "Ÿ": "Y",
          "Ź": "Z",
          "Ż": "Z",
          "Ž": "Z",
          "ź": "z",
          "ż": "z",
          "ž": "z",
          "Ĳ": "IJ",
          "ĳ": "ij",
          "Œ": "Oe",
          "œ": "oe",
          "ŉ": "'n",
          "ſ": "s"
        }), Oe = he({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"});

        function Ee(t) {
          return "\\" + Sn[t]
        }

        function Le(t) {
          return On.test(t)
        }

        function Ne(t) {
          var n = -1, e = Array(t.size);
          return t.forEach((function (t, r) {
            e[++n] = [r, t]
          })), e
        }

        function xe(t, n) {
          return function (e) {
            return t(n(e))
          }
        }

        function Te(t, n) {
          for (var e = -1, r = t.length, o = 0, i = []; ++e < r;) {
            var u = t[e];
            u !== n && u !== l || (t[e] = l, i[o++] = e)
          }
          return i
        }

        function Se(t) {
          var n = -1, e = Array(t.size);
          return t.forEach((function (t) {
            e[++n] = t
          })), e
        }

        function Me(t) {
          var n = -1, e = Array(t.size);
          return t.forEach((function (t) {
            e[++n] = [t, t]
          })), e
        }

        function je(t) {
          return Le(t) ? function (t) {
            var n = bn.lastIndex = 0;
            for (; bn.test(t);) ++n;
            return n
          }(t) : ie(t)
        }

        function De(t) {
          return Le(t) ? function (t) {
            return t.match(bn) || []
          }(t) : function (t) {
            return t.split("")
          }(t)
        }

        var ze = he({"&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'"});
        var Ie = function t(n) {
          var e, r = (n = null == n ? In : Ie.defaults(In.Object(), n, Ie.pick(In, Ln))).Array, o = n.Date,
            Zt = n.Error, Qt = n.Function, tn = n.Math, nn = n.Object, en = n.RegExp, rn = n.String, on = n.TypeError,
            un = r.prototype, an = Qt.prototype, cn = nn.prototype, sn = n["__core-js_shared__"], fn = an.toString,
            ln = cn.hasOwnProperty, pn = 0,
            hn = (e = /[^.]+$/.exec(sn && sn.keys && sn.keys.IE_PROTO || "")) ? "Symbol(src)_1." + e : "",
            gn = cn.toString, _n = fn.call(nn), dn = In._,
            vn = en("^" + fn.call(ln).replace(Dt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            mn = kn ? n.Buffer : i, bn = n.Symbol, On = n.Uint8Array, Sn = mn ? mn.allocUnsafe : i,
            Dn = xe(nn.getPrototypeOf, nn), zn = nn.create, Pn = cn.propertyIsEnumerable, Rn = un.splice,
            Un = bn ? bn.isConcatSpreadable : i, Cn = bn ? bn.iterator : i, ie = bn ? bn.toStringTag : i,
            he = function () {
              try {
                var t = Ci(nn, "defineProperty");
                return t({}, "", {}), t
              } catch (t) {
              }
            }(), Pe = n.clearTimeout !== In.clearTimeout && n.clearTimeout, Re = o && o.now !== In.Date.now && o.now,
            ke = n.setTimeout !== In.setTimeout && n.setTimeout, Ue = tn.ceil, Ce = tn.floor,
            qe = nn.getOwnPropertySymbols, Be = mn ? mn.isBuffer : i, Fe = n.isFinite, Ge = un.join,
            We = xe(nn.keys, nn), $e = tn.max, Ve = tn.min, Je = o.now, He = n.parseInt, Xe = tn.random,
            Ye = un.reverse, Ke = Ci(n, "DataView"), Ze = Ci(n, "Map"), Qe = Ci(n, "Promise"), tr = Ci(n, "Set"),
            nr = Ci(n, "WeakMap"), er = Ci(nn, "create"), rr = nr && new nr, or = {}, ir = lu(Ke), ur = lu(Ze),
            ar = lu(Qe), cr = lu(tr), sr = lu(nr), fr = bn ? bn.prototype : i, lr = fr ? fr.valueOf : i,
            pr = fr ? fr.toString : i;

          function hr(t) {
            if (Ta(t) && !va(t) && !(t instanceof vr)) {
              if (t instanceof dr) return t;
              if (ln.call(t, "__wrapped__")) return pu(t)
            }
            return new dr(t)
          }

          var gr = function () {
            function t() {
            }

            return function (n) {
              if (!xa(n)) return {};
              if (zn) return zn(n);
              t.prototype = n;
              var e = new t;
              return t.prototype = i, e
            }
          }();

          function _r() {
          }

          function dr(t, n) {
            this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = i
          }

          function vr(t) {
            this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = k, this.__views__ = []
          }

          function mr(t) {
            var n = -1, e = null == t ? 0 : t.length;
            for (this.clear(); ++n < e;) {
              var r = t[n];
              this.set(r[0], r[1])
            }
          }

          function yr(t) {
            var n = -1, e = null == t ? 0 : t.length;
            for (this.clear(); ++n < e;) {
              var r = t[n];
              this.set(r[0], r[1])
            }
          }

          function wr(t) {
            var n = -1, e = null == t ? 0 : t.length;
            for (this.clear(); ++n < e;) {
              var r = t[n];
              this.set(r[0], r[1])
            }
          }

          function br(t) {
            var n = -1, e = null == t ? 0 : t.length;
            for (this.__data__ = new wr; ++n < e;) this.add(t[n])
          }

          function Ar(t) {
            var n = this.__data__ = new yr(t);
            this.size = n.size
          }

          function Or(t, n) {
            var e = va(t), r = !e && da(t), o = !e && !r && ba(t), i = !e && !r && !o && Ra(t), u = e || r || o || i,
              a = u ? de(t.length, rn) : [], c = a.length;
            for (var s in t) !n && !ln.call(t, s) || u && ("length" == s || o && ("offset" == s || "parent" == s) || i && ("buffer" == s || "byteLength" == s || "byteOffset" == s) || Vi(s, c)) || a.push(s);
            return a
          }

          function Er(t) {
            var n = t.length;
            return n ? t[Ao(0, n - 1)] : i
          }

          function Lr(t, n) {
            return cu(ri(t), Ir(n, 0, t.length))
          }

          function Nr(t) {
            return cu(ri(t))
          }

          function xr(t, n, e) {
            (e === i || ha(t[n], e)) && (e !== i || n in t) || Dr(t, n, e)
          }

          function Tr(t, n, e) {
            var r = t[n];
            ln.call(t, n) && ha(r, e) && (e !== i || n in t) || Dr(t, n, e)
          }

          function Sr(t, n) {
            for (var e = t.length; e--;) if (ha(t[e][0], n)) return e;
            return -1
          }

          function Mr(t, n, e, r) {
            return Cr(t, (function (t, o, i) {
              n(r, t, e(t), i)
            })), r
          }

          function jr(t, n) {
            return t && oi(n, oc(n), t)
          }

          function Dr(t, n, e) {
            "__proto__" == n && he ? he(t, n, {configurable: !0, enumerable: !0, value: e, writable: !0}) : t[n] = e
          }

          function zr(t, n) {
            for (var e = -1, o = n.length, u = r(o), a = null == t; ++e < o;) u[e] = a ? i : Qa(t, n[e]);
            return u
          }

          function Ir(t, n, e) {
            return t == t && (e !== i && (t = t <= e ? t : e), n !== i && (t = t >= n ? t : n)), t
          }

          function Pr(t, n, e, r, o, u) {
            var a, c = n & p, s = n & h, f = n & g;
            if (e && (a = o ? e(t, r, o, u) : e(t)), a !== i) return a;
            if (!xa(t)) return t;
            var l = va(t);
            if (l) {
              if (a = function (t) {
                var n = t.length, e = new t.constructor(n);
                n && "string" == typeof t[0] && ln.call(t, "index") && (e.index = t.index, e.input = t.input);
                return e
              }(t), !c) return ri(t, a)
            } else {
              var _ = Fi(t), d = _ == H || _ == X;
              if (ba(t)) return Ko(t, c);
              if (_ == Q || _ == B || d && !o) {
                if (a = s || d ? {} : Wi(t), !c) return s ? function (t, n) {
                  return oi(t, Bi(t), n)
                }(t, function (t, n) {
                  return t && oi(n, ic(n), t)
                }(a, t)) : function (t, n) {
                  return oi(t, qi(t), n)
                }(t, jr(a, t))
              } else {
                if (!Tn[_]) return o ? t : {};
                a = function (t, n, e) {
                  var r = t.constructor;
                  switch (n) {
                    case ct:
                      return Zo(t);
                    case W:
                    case $:
                      return new r(+t);
                    case st:
                      return function (t, n) {
                        var e = n ? Zo(t.buffer) : t.buffer;
                        return new t.constructor(e, t.byteOffset, t.byteLength)
                      }(t, e);
                    case ft:
                    case lt:
                    case pt:
                    case ht:
                    case gt:
                    case _t:
                    case dt:
                    case vt:
                    case mt:
                      return Qo(t, e);
                    case Y:
                      return new r;
                    case K:
                    case rt:
                      return new r(t);
                    case nt:
                      return function (t) {
                        var n = new t.constructor(t.source, Gt.exec(t));
                        return n.lastIndex = t.lastIndex, n
                      }(t);
                    case et:
                      return new r;
                    case ot:
                      return o = t, lr ? nn(lr.call(o)) : {}
                  }
                  var o
                }(t, _, c)
              }
            }
            u || (u = new Ar);
            var v = u.get(t);
            if (v) return v;
            u.set(t, a), za(t) ? t.forEach((function (r) {
              a.add(Pr(r, n, e, r, t, u))
            })) : Sa(t) && t.forEach((function (r, o) {
              a.set(o, Pr(r, n, e, o, t, u))
            }));
            var m = l ? i : (f ? s ? Di : ji : s ? ic : oc)(t);
            return Hn(m || t, (function (r, o) {
              m && (r = t[o = r]), Tr(a, o, Pr(r, n, e, o, t, u))
            })), a
          }

          function Rr(t, n, e) {
            var r = e.length;
            if (null == t) return !r;
            for (t = nn(t); r--;) {
              var o = e[r], u = n[o], a = t[o];
              if (a === i && !(o in t) || !u(a)) return !1
            }
            return !0
          }

          function kr(t, n, e) {
            if ("function" != typeof t) throw new on(c);
            return ou((function () {
              t.apply(i, e)
            }), n)
          }

          function Ur(t, n, e, r) {
            var o = -1, i = Zn, a = !0, c = t.length, s = [], f = n.length;
            if (!c) return s;
            e && (n = te(n, ve(e))), r ? (i = Qn, a = !1) : n.length >= u && (i = ye, a = !1, n = new br(n));
            t:for (; ++o < c;) {
              var l = t[o], p = null == e ? l : e(l);
              if (l = r || 0 !== l ? l : 0, a && p == p) {
                for (var h = f; h--;) if (n[h] === p) continue t;
                s.push(l)
              } else i(n, p, r) || s.push(l)
            }
            return s
          }

          hr.templateSettings = {
            escape: Nt,
            evaluate: xt,
            interpolate: Tt,
            variable: "",
            imports: {_: hr}
          }, hr.prototype = _r.prototype, hr.prototype.constructor = hr, dr.prototype = gr(_r.prototype), dr.prototype.constructor = dr, vr.prototype = gr(_r.prototype), vr.prototype.constructor = vr, mr.prototype.clear = function () {
            this.__data__ = er ? er(null) : {}, this.size = 0
          }, mr.prototype.delete = function (t) {
            var n = this.has(t) && delete this.__data__[t];
            return this.size -= n ? 1 : 0, n
          }, mr.prototype.get = function (t) {
            var n = this.__data__;
            if (er) {
              var e = n[t];
              return e === s ? i : e
            }
            return ln.call(n, t) ? n[t] : i
          }, mr.prototype.has = function (t) {
            var n = this.__data__;
            return er ? n[t] !== i : ln.call(n, t)
          }, mr.prototype.set = function (t, n) {
            var e = this.__data__;
            return this.size += this.has(t) ? 0 : 1, e[t] = er && n === i ? s : n, this
          }, yr.prototype.clear = function () {
            this.__data__ = [], this.size = 0
          }, yr.prototype.delete = function (t) {
            var n = this.__data__, e = Sr(n, t);
            return !(e < 0) && (e == n.length - 1 ? n.pop() : Rn.call(n, e, 1), --this.size, !0)
          }, yr.prototype.get = function (t) {
            var n = this.__data__, e = Sr(n, t);
            return e < 0 ? i : n[e][1]
          }, yr.prototype.has = function (t) {
            return Sr(this.__data__, t) > -1
          }, yr.prototype.set = function (t, n) {
            var e = this.__data__, r = Sr(e, t);
            return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this
          }, wr.prototype.clear = function () {
            this.size = 0, this.__data__ = {hash: new mr, map: new (Ze || yr), string: new mr}
          }, wr.prototype.delete = function (t) {
            var n = ki(this, t).delete(t);
            return this.size -= n ? 1 : 0, n
          }, wr.prototype.get = function (t) {
            return ki(this, t).get(t)
          }, wr.prototype.has = function (t) {
            return ki(this, t).has(t)
          }, wr.prototype.set = function (t, n) {
            var e = ki(this, t), r = e.size;
            return e.set(t, n), this.size += e.size == r ? 0 : 1, this
          }, br.prototype.add = br.prototype.push = function (t) {
            return this.__data__.set(t, s), this
          }, br.prototype.has = function (t) {
            return this.__data__.has(t)
          }, Ar.prototype.clear = function () {
            this.__data__ = new yr, this.size = 0
          }, Ar.prototype.delete = function (t) {
            var n = this.__data__, e = n.delete(t);
            return this.size = n.size, e
          }, Ar.prototype.get = function (t) {
            return this.__data__.get(t)
          }, Ar.prototype.has = function (t) {
            return this.__data__.has(t)
          }, Ar.prototype.set = function (t, n) {
            var e = this.__data__;
            if (e instanceof yr) {
              var r = e.__data__;
              if (!Ze || r.length < u - 1) return r.push([t, n]), this.size = ++e.size, this;
              e = this.__data__ = new wr(r)
            }
            return e.set(t, n), this.size = e.size, this
          };
          var Cr = ai(Jr), qr = ai(Hr, !0);

          function Br(t, n) {
            var e = !0;
            return Cr(t, (function (t, r, o) {
              return e = !!n(t, r, o)
            })), e
          }

          function Fr(t, n, e) {
            for (var r = -1, o = t.length; ++r < o;) {
              var u = t[r], a = n(u);
              if (null != a && (c === i ? a == a && !Pa(a) : e(a, c))) var c = a, s = u
            }
            return s
          }

          function Gr(t, n) {
            var e = [];
            return Cr(t, (function (t, r, o) {
              n(t, r, o) && e.push(t)
            })), e
          }

          function Wr(t, n, e, r, o) {
            var i = -1, u = t.length;
            for (e || (e = $i), o || (o = []); ++i < u;) {
              var a = t[i];
              n > 0 && e(a) ? n > 1 ? Wr(a, n - 1, e, r, o) : ne(o, a) : r || (o[o.length] = a)
            }
            return o
          }

          var $r = ci(), Vr = ci(!0);

          function Jr(t, n) {
            return t && $r(t, n, oc)
          }

          function Hr(t, n) {
            return t && Vr(t, n, oc)
          }

          function Xr(t, n) {
            return Kn(n, (function (n) {
              return Ea(t[n])
            }))
          }

          function Yr(t, n) {
            for (var e = 0, r = (n = Jo(n, t)).length; null != t && e < r;) t = t[fu(n[e++])];
            return e && e == r ? t : i
          }

          function Kr(t, n, e) {
            var r = n(t);
            return va(t) ? r : ne(r, e(t))
          }

          function Zr(t) {
            return null == t ? t === i ? it : Z : ie && ie in nn(t) ? function (t) {
              var n = ln.call(t, ie), e = t[ie];
              try {
                t[ie] = i;
                var r = !0
              } catch (t) {
              }
              var o = gn.call(t);
              r && (n ? t[ie] = e : delete t[ie]);
              return o
            }(t) : function (t) {
              return gn.call(t)
            }(t)
          }

          function Qr(t, n) {
            return t > n
          }

          function to(t, n) {
            return null != t && ln.call(t, n)
          }

          function no(t, n) {
            return null != t && n in nn(t)
          }

          function eo(t, n, e) {
            for (var o = e ? Qn : Zn, u = t[0].length, a = t.length, c = a, s = r(a), f = 1 / 0, l = []; c--;) {
              var p = t[c];
              c && n && (p = te(p, ve(n))), f = Ve(p.length, f), s[c] = !e && (n || u >= 120 && p.length >= 120) ? new br(c && p) : i
            }
            p = t[0];
            var h = -1, g = s[0];
            t:for (; ++h < u && l.length < f;) {
              var _ = p[h], d = n ? n(_) : _;
              if (_ = e || 0 !== _ ? _ : 0, !(g ? ye(g, d) : o(l, d, e))) {
                for (c = a; --c;) {
                  var v = s[c];
                  if (!(v ? ye(v, d) : o(t[c], d, e))) continue t
                }
                g && g.push(d), l.push(_)
              }
            }
            return l
          }

          function ro(t, n, e) {
            var r = null == (t = nu(t, n = Jo(n, t))) ? t : t[fu(Ou(n))];
            return null == r ? i : Vn(r, t, e)
          }

          function oo(t) {
            return Ta(t) && Zr(t) == B
          }

          function io(t, n, e, r, o) {
            return t === n || (null == t || null == n || !Ta(t) && !Ta(n) ? t != t && n != n : function (t, n, e, r, o, u) {
              var a = va(t), c = va(n), s = a ? F : Fi(t), f = c ? F : Fi(n), l = (s = s == B ? Q : s) == Q,
                p = (f = f == B ? Q : f) == Q, h = s == f;
              if (h && ba(t)) {
                if (!ba(n)) return !1;
                a = !0, l = !1
              }
              if (h && !l) return u || (u = new Ar), a || Ra(t) ? Si(t, n, e, r, o, u) : function (t, n, e, r, o, i, u) {
                switch (e) {
                  case st:
                    if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset) return !1;
                    t = t.buffer, n = n.buffer;
                  case ct:
                    return !(t.byteLength != n.byteLength || !i(new On(t), new On(n)));
                  case W:
                  case $:
                  case K:
                    return ha(+t, +n);
                  case J:
                    return t.name == n.name && t.message == n.message;
                  case nt:
                  case rt:
                    return t == n + "";
                  case Y:
                    var a = Ne;
                  case et:
                    var c = r & _;
                    if (a || (a = Se), t.size != n.size && !c) return !1;
                    var s = u.get(t);
                    if (s) return s == n;
                    r |= d, u.set(t, n);
                    var f = Si(a(t), a(n), r, o, i, u);
                    return u.delete(t), f;
                  case ot:
                    if (lr) return lr.call(t) == lr.call(n)
                }
                return !1
              }(t, n, s, e, r, o, u);
              if (!(e & _)) {
                var g = l && ln.call(t, "__wrapped__"), v = p && ln.call(n, "__wrapped__");
                if (g || v) {
                  var m = g ? t.value() : t, y = v ? n.value() : n;
                  return u || (u = new Ar), o(m, y, e, r, u)
                }
              }
              if (!h) return !1;
              return u || (u = new Ar), function (t, n, e, r, o, u) {
                var a = e & _, c = ji(t), s = c.length, f = ji(n).length;
                if (s != f && !a) return !1;
                var l = s;
                for (; l--;) {
                  var p = c[l];
                  if (!(a ? p in n : ln.call(n, p))) return !1
                }
                var h = u.get(t);
                if (h && u.get(n)) return h == n;
                var g = !0;
                u.set(t, n), u.set(n, t);
                var d = a;
                for (; ++l < s;) {
                  p = c[l];
                  var v = t[p], m = n[p];
                  if (r) var y = a ? r(m, v, p, n, t, u) : r(v, m, p, t, n, u);
                  if (!(y === i ? v === m || o(v, m, e, r, u) : y)) {
                    g = !1;
                    break
                  }
                  d || (d = "constructor" == p)
                }
                if (g && !d) {
                  var w = t.constructor, b = n.constructor;
                  w != b && "constructor" in t && "constructor" in n && !("function" == typeof w && w instanceof w && "function" == typeof b && b instanceof b) && (g = !1)
                }
                return u.delete(t), u.delete(n), g
              }(t, n, e, r, o, u)
            }(t, n, e, r, io, o))
          }

          function uo(t, n, e, r) {
            var o = e.length, u = o, a = !r;
            if (null == t) return !u;
            for (t = nn(t); o--;) {
              var c = e[o];
              if (a && c[2] ? c[1] !== t[c[0]] : !(c[0] in t)) return !1
            }
            for (; ++o < u;) {
              var s = (c = e[o])[0], f = t[s], l = c[1];
              if (a && c[2]) {
                if (f === i && !(s in t)) return !1
              } else {
                var p = new Ar;
                if (r) var h = r(f, l, s, t, n, p);
                if (!(h === i ? io(l, f, _ | d, r, p) : h)) return !1
              }
            }
            return !0
          }

          function ao(t) {
            return !(!xa(t) || (n = t, hn && hn in n)) && (Ea(t) ? vn : Vt).test(lu(t));
            var n
          }

          function co(t) {
            return "function" == typeof t ? t : null == t ? Mc : "object" == typeof t ? va(t) ? go(t[0], t[1]) : ho(t) : Cc(t)
          }

          function so(t) {
            if (!Ki(t)) return We(t);
            var n = [];
            for (var e in nn(t)) ln.call(t, e) && "constructor" != e && n.push(e);
            return n
          }

          function fo(t) {
            if (!xa(t)) return function (t) {
              var n = [];
              if (null != t) for (var e in nn(t)) n.push(e);
              return n
            }(t);
            var n = Ki(t), e = [];
            for (var r in t) ("constructor" != r || !n && ln.call(t, r)) && e.push(r);
            return e
          }

          function lo(t, n) {
            return t < n
          }

          function po(t, n) {
            var e = -1, o = ya(t) ? r(t.length) : [];
            return Cr(t, (function (t, r, i) {
              o[++e] = n(t, r, i)
            })), o
          }

          function ho(t) {
            var n = Ui(t);
            return 1 == n.length && n[0][2] ? Qi(n[0][0], n[0][1]) : function (e) {
              return e === t || uo(e, t, n)
            }
          }

          function go(t, n) {
            return Hi(t) && Zi(n) ? Qi(fu(t), n) : function (e) {
              var r = Qa(e, t);
              return r === i && r === n ? tc(e, t) : io(n, r, _ | d)
            }
          }

          function _o(t, n, e, r, o) {
            t !== n && $r(n, (function (u, a) {
              if (o || (o = new Ar), xa(u)) !function (t, n, e, r, o, u, a) {
                var c = eu(t, e), s = eu(n, e), f = a.get(s);
                if (f) return void xr(t, e, f);
                var l = u ? u(c, s, e + "", t, n, a) : i, p = l === i;
                if (p) {
                  var h = va(s), g = !h && ba(s), _ = !h && !g && Ra(s);
                  l = s, h || g || _ ? va(c) ? l = c : wa(c) ? l = ri(c) : g ? (p = !1, l = Ko(s, !0)) : _ ? (p = !1, l = Qo(s, !0)) : l = [] : ja(s) || da(s) ? (l = c, da(c) ? l = Wa(c) : xa(c) && !Ea(c) || (l = Wi(s))) : p = !1
                }
                p && (a.set(s, l), o(l, s, r, u, a), a.delete(s));
                xr(t, e, l)
              }(t, n, a, e, _o, r, o); else {
                var c = r ? r(eu(t, a), u, a + "", t, n, o) : i;
                c === i && (c = u), xr(t, a, c)
              }
            }), ic)
          }

          function vo(t, n) {
            var e = t.length;
            if (e) return Vi(n += n < 0 ? e : 0, e) ? t[n] : i
          }

          function mo(t, n, e) {
            var r = -1;
            return n = te(n.length ? n : [Mc], ve(Ri())), function (t, n) {
              var e = t.length;
              for (t.sort(n); e--;) t[e] = t[e].value;
              return t
            }(po(t, (function (t, e, o) {
              return {
                criteria: te(n, (function (n) {
                  return n(t)
                })), index: ++r, value: t
              }
            })), (function (t, n) {
              return function (t, n, e) {
                var r = -1, o = t.criteria, i = n.criteria, u = o.length, a = e.length;
                for (; ++r < u;) {
                  var c = ti(o[r], i[r]);
                  if (c) {
                    if (r >= a) return c;
                    var s = e[r];
                    return c * ("desc" == s ? -1 : 1)
                  }
                }
                return t.index - n.index
              }(t, n, e)
            }))
          }

          function yo(t, n, e) {
            for (var r = -1, o = n.length, i = {}; ++r < o;) {
              var u = n[r], a = Yr(t, u);
              e(a, u) && xo(i, Jo(u, t), a)
            }
            return i
          }

          function wo(t, n, e, r) {
            var o = r ? se : ce, i = -1, u = n.length, a = t;
            for (t === n && (n = ri(n)), e && (a = te(t, ve(e))); ++i < u;) for (var c = 0, s = n[i], f = e ? e(s) : s; (c = o(a, f, c, r)) > -1;) a !== t && Rn.call(a, c, 1), Rn.call(t, c, 1);
            return t
          }

          function bo(t, n) {
            for (var e = t ? n.length : 0, r = e - 1; e--;) {
              var o = n[e];
              if (e == r || o !== i) {
                var i = o;
                Vi(o) ? Rn.call(t, o, 1) : Co(t, o)
              }
            }
            return t
          }

          function Ao(t, n) {
            return t + Ce(Xe() * (n - t + 1))
          }

          function Oo(t, n) {
            var e = "";
            if (!t || n < 1 || n > I) return e;
            do {
              n % 2 && (e += t), (n = Ce(n / 2)) && (t += t)
            } while (n);
            return e
          }

          function Eo(t, n) {
            return iu(tu(t, n, Mc), t + "")
          }

          function Lo(t) {
            return Er(hc(t))
          }

          function No(t, n) {
            var e = hc(t);
            return cu(e, Ir(n, 0, e.length))
          }

          function xo(t, n, e, r) {
            if (!xa(t)) return t;
            for (var o = -1, u = (n = Jo(n, t)).length, a = u - 1, c = t; null != c && ++o < u;) {
              var s = fu(n[o]), f = e;
              if (o != a) {
                var l = c[s];
                (f = r ? r(l, s, c) : i) === i && (f = xa(l) ? l : Vi(n[o + 1]) ? [] : {})
              }
              Tr(c, s, f), c = c[s]
            }
            return t
          }

          var To = rr ? function (t, n) {
            return rr.set(t, n), t
          } : Mc, So = he ? function (t, n) {
            return he(t, "toString", {configurable: !0, enumerable: !1, value: xc(n), writable: !0})
          } : Mc;

          function Mo(t) {
            return cu(hc(t))
          }

          function jo(t, n, e) {
            var o = -1, i = t.length;
            n < 0 && (n = -n > i ? 0 : i + n), (e = e > i ? i : e) < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
            for (var u = r(i); ++o < i;) u[o] = t[o + n];
            return u
          }

          function Do(t, n) {
            var e;
            return Cr(t, (function (t, r, o) {
              return !(e = n(t, r, o))
            })), !!e
          }

          function zo(t, n, e) {
            var r = 0, o = null == t ? r : t.length;
            if ("number" == typeof n && n == n && o <= C) {
              for (; r < o;) {
                var i = r + o >>> 1, u = t[i];
                null !== u && !Pa(u) && (e ? u <= n : u < n) ? r = i + 1 : o = i
              }
              return o
            }
            return Io(t, n, Mc, e)
          }

          function Io(t, n, e, r) {
            n = e(n);
            for (var o = 0, u = null == t ? 0 : t.length, a = n != n, c = null === n, s = Pa(n), f = n === i; o < u;) {
              var l = Ce((o + u) / 2), p = e(t[l]), h = p !== i, g = null === p, _ = p == p, d = Pa(p);
              if (a) var v = r || _; else v = f ? _ && (r || h) : c ? _ && h && (r || !g) : s ? _ && h && !g && (r || !d) : !g && !d && (r ? p <= n : p < n);
              v ? o = l + 1 : u = l
            }
            return Ve(u, U)
          }

          function Po(t, n) {
            for (var e = -1, r = t.length, o = 0, i = []; ++e < r;) {
              var u = t[e], a = n ? n(u) : u;
              if (!e || !ha(a, c)) {
                var c = a;
                i[o++] = 0 === u ? 0 : u
              }
            }
            return i
          }

          function Ro(t) {
            return "number" == typeof t ? t : Pa(t) ? R : +t
          }

          function ko(t) {
            if ("string" == typeof t) return t;
            if (va(t)) return te(t, ko) + "";
            if (Pa(t)) return pr ? pr.call(t) : "";
            var n = t + "";
            return "0" == n && 1 / t == -z ? "-0" : n
          }

          function Uo(t, n, e) {
            var r = -1, o = Zn, i = t.length, a = !0, c = [], s = c;
            if (e) a = !1, o = Qn; else if (i >= u) {
              var f = n ? null : Oi(t);
              if (f) return Se(f);
              a = !1, o = ye, s = new br
            } else s = n ? [] : c;
            t:for (; ++r < i;) {
              var l = t[r], p = n ? n(l) : l;
              if (l = e || 0 !== l ? l : 0, a && p == p) {
                for (var h = s.length; h--;) if (s[h] === p) continue t;
                n && s.push(p), c.push(l)
              } else o(s, p, e) || (s !== c && s.push(p), c.push(l))
            }
            return c
          }

          function Co(t, n) {
            return null == (t = nu(t, n = Jo(n, t))) || delete t[fu(Ou(n))]
          }

          function qo(t, n, e, r) {
            return xo(t, n, e(Yr(t, n)), r)
          }

          function Bo(t, n, e, r) {
            for (var o = t.length, i = r ? o : -1; (r ? i-- : ++i < o) && n(t[i], i, t);) ;
            return e ? jo(t, r ? 0 : i, r ? i + 1 : o) : jo(t, r ? i + 1 : 0, r ? o : i)
          }

          function Fo(t, n) {
            var e = t;
            return e instanceof vr && (e = e.value()), ee(n, (function (t, n) {
              return n.func.apply(n.thisArg, ne([t], n.args))
            }), e)
          }

          function Go(t, n, e) {
            var o = t.length;
            if (o < 2) return o ? Uo(t[0]) : [];
            for (var i = -1, u = r(o); ++i < o;) for (var a = t[i], c = -1; ++c < o;) c != i && (u[i] = Ur(u[i] || a, t[c], n, e));
            return Uo(Wr(u, 1), n, e)
          }

          function Wo(t, n, e) {
            for (var r = -1, o = t.length, u = n.length, a = {}; ++r < o;) {
              var c = r < u ? n[r] : i;
              e(a, t[r], c)
            }
            return a
          }

          function $o(t) {
            return wa(t) ? t : []
          }

          function Vo(t) {
            return "function" == typeof t ? t : Mc
          }

          function Jo(t, n) {
            return va(t) ? t : Hi(t, n) ? [t] : su($a(t))
          }

          var Ho = Eo;

          function Xo(t, n, e) {
            var r = t.length;
            return e = e === i ? r : e, !n && e >= r ? t : jo(t, n, e)
          }

          var Yo = Pe || function (t) {
            return In.clearTimeout(t)
          };

          function Ko(t, n) {
            if (n) return t.slice();
            var e = t.length, r = Sn ? Sn(e) : new t.constructor(e);
            return t.copy(r), r
          }

          function Zo(t) {
            var n = new t.constructor(t.byteLength);
            return new On(n).set(new On(t)), n
          }

          function Qo(t, n) {
            var e = n ? Zo(t.buffer) : t.buffer;
            return new t.constructor(e, t.byteOffset, t.length)
          }

          function ti(t, n) {
            if (t !== n) {
              var e = t !== i, r = null === t, o = t == t, u = Pa(t), a = n !== i, c = null === n, s = n == n,
                f = Pa(n);
              if (!c && !f && !u && t > n || u && a && s && !c && !f || r && a && s || !e && s || !o) return 1;
              if (!r && !u && !f && t < n || f && e && o && !r && !u || c && e && o || !a && o || !s) return -1
            }
            return 0
          }

          function ni(t, n, e, o) {
            for (var i = -1, u = t.length, a = e.length, c = -1, s = n.length, f = $e(u - a, 0), l = r(s + f), p = !o; ++c < s;) l[c] = n[c];
            for (; ++i < a;) (p || i < u) && (l[e[i]] = t[i]);
            for (; f--;) l[c++] = t[i++];
            return l
          }

          function ei(t, n, e, o) {
            for (var i = -1, u = t.length, a = -1, c = e.length, s = -1, f = n.length, l = $e(u - c, 0), p = r(l + f), h = !o; ++i < l;) p[i] = t[i];
            for (var g = i; ++s < f;) p[g + s] = n[s];
            for (; ++a < c;) (h || i < u) && (p[g + e[a]] = t[i++]);
            return p
          }

          function ri(t, n) {
            var e = -1, o = t.length;
            for (n || (n = r(o)); ++e < o;) n[e] = t[e];
            return n
          }

          function oi(t, n, e, r) {
            var o = !e;
            e || (e = {});
            for (var u = -1, a = n.length; ++u < a;) {
              var c = n[u], s = r ? r(e[c], t[c], c, e, t) : i;
              s === i && (s = t[c]), o ? Dr(e, c, s) : Tr(e, c, s)
            }
            return e
          }

          function ii(t, n) {
            return function (e, r) {
              var o = va(e) ? Jn : Mr, i = n ? n() : {};
              return o(e, t, Ri(r, 2), i)
            }
          }

          function ui(t) {
            return Eo((function (n, e) {
              var r = -1, o = e.length, u = o > 1 ? e[o - 1] : i, a = o > 2 ? e[2] : i;
              for (u = t.length > 3 && "function" == typeof u ? (o--, u) : i, a && Ji(e[0], e[1], a) && (u = o < 3 ? i : u, o = 1), n = nn(n); ++r < o;) {
                var c = e[r];
                c && t(n, c, r, u)
              }
              return n
            }))
          }

          function ai(t, n) {
            return function (e, r) {
              if (null == e) return e;
              if (!ya(e)) return t(e, r);
              for (var o = e.length, i = n ? o : -1, u = nn(e); (n ? i-- : ++i < o) && !1 !== r(u[i], i, u);) ;
              return e
            }
          }

          function ci(t) {
            return function (n, e, r) {
              for (var o = -1, i = nn(n), u = r(n), a = u.length; a--;) {
                var c = u[t ? a : ++o];
                if (!1 === e(i[c], c, i)) break
              }
              return n
            }
          }

          function si(t) {
            return function (n) {
              var e = Le(n = $a(n)) ? De(n) : i, r = e ? e[0] : n.charAt(0), o = e ? Xo(e, 1).join("") : n.slice(1);
              return r[t]() + o
            }
          }

          function fi(t) {
            return function (n) {
              return ee(Ec(dc(n).replace(yn, "")), t, "")
            }
          }

          function li(t) {
            return function () {
              var n = arguments;
              switch (n.length) {
                case 0:
                  return new t;
                case 1:
                  return new t(n[0]);
                case 2:
                  return new t(n[0], n[1]);
                case 3:
                  return new t(n[0], n[1], n[2]);
                case 4:
                  return new t(n[0], n[1], n[2], n[3]);
                case 5:
                  return new t(n[0], n[1], n[2], n[3], n[4]);
                case 6:
                  return new t(n[0], n[1], n[2], n[3], n[4], n[5]);
                case 7:
                  return new t(n[0], n[1], n[2], n[3], n[4], n[5], n[6])
              }
              var e = gr(t.prototype), r = t.apply(e, n);
              return xa(r) ? r : e
            }
          }

          function pi(t) {
            return function (n, e, r) {
              var o = nn(n);
              if (!ya(n)) {
                var u = Ri(e, 3);
                n = oc(n), e = function (t) {
                  return u(o[t], t, o)
                }
              }
              var a = t(n, e, r);
              return a > -1 ? o[u ? n[a] : a] : i
            }
          }

          function hi(t) {
            return Mi((function (n) {
              var e = n.length, r = e, o = dr.prototype.thru;
              for (t && n.reverse(); r--;) {
                var u = n[r];
                if ("function" != typeof u) throw new on(c);
                if (o && !a && "wrapper" == Ii(u)) var a = new dr([], !0)
              }
              for (r = a ? r : e; ++r < e;) {
                var s = Ii(u = n[r]), f = "wrapper" == s ? zi(u) : i;
                a = f && Xi(f[0]) && f[1] == (E | w | A | L) && !f[4].length && 1 == f[9] ? a[Ii(f[0])].apply(a, f[3]) : 1 == u.length && Xi(u) ? a[s]() : a.thru(u)
              }
              return function () {
                var t = arguments, r = t[0];
                if (a && 1 == t.length && va(r)) return a.plant(r).value();
                for (var o = 0, i = e ? n[o].apply(this, t) : r; ++o < e;) i = n[o].call(this, i);
                return i
              }
            }))
          }

          function gi(t, n, e, o, u, a, c, s, f, l) {
            var p = n & E, h = n & v, g = n & m, _ = n & (w | b), d = n & N, y = g ? i : li(t);
            return function v() {
              for (var m = arguments.length, w = r(m), b = m; b--;) w[b] = arguments[b];
              if (_) var A = Pi(v), O = function (t, n) {
                for (var e = t.length, r = 0; e--;) t[e] === n && ++r;
                return r
              }(w, A);
              if (o && (w = ni(w, o, u, _)), a && (w = ei(w, a, c, _)), m -= O, _ && m < l) {
                var E = Te(w, A);
                return bi(t, n, gi, v.placeholder, e, w, E, s, f, l - m)
              }
              var L = h ? e : this, N = g ? L[t] : t;
              return m = w.length, s ? w = function (t, n) {
                var e = t.length, r = Ve(n.length, e), o = ri(t);
                for (; r--;) {
                  var u = n[r];
                  t[r] = Vi(u, e) ? o[u] : i
                }
                return t
              }(w, s) : d && m > 1 && w.reverse(), p && f < m && (w.length = f), this && this !== In && this instanceof v && (N = y || li(N)), N.apply(L, w)
            }
          }

          function _i(t, n) {
            return function (e, r) {
              return function (t, n, e, r) {
                return Jr(t, (function (t, o, i) {
                  n(r, e(t), o, i)
                })), r
              }(e, t, n(r), {})
            }
          }

          function di(t, n) {
            return function (e, r) {
              var o;
              if (e === i && r === i) return n;
              if (e !== i && (o = e), r !== i) {
                if (o === i) return r;
                "string" == typeof e || "string" == typeof r ? (e = ko(e), r = ko(r)) : (e = Ro(e), r = Ro(r)), o = t(e, r)
              }
              return o
            }
          }

          function vi(t) {
            return Mi((function (n) {
              return n = te(n, ve(Ri())), Eo((function (e) {
                var r = this;
                return t(n, (function (t) {
                  return Vn(t, r, e)
                }))
              }))
            }))
          }

          function mi(t, n) {
            var e = (n = n === i ? " " : ko(n)).length;
            if (e < 2) return e ? Oo(n, t) : n;
            var r = Oo(n, Ue(t / je(n)));
            return Le(n) ? Xo(De(r), 0, t).join("") : r.slice(0, t)
          }

          function yi(t) {
            return function (n, e, o) {
              return o && "number" != typeof o && Ji(n, e, o) && (e = o = i), n = qa(n), e === i ? (e = n, n = 0) : e = qa(e), function (t, n, e, o) {
                for (var i = -1, u = $e(Ue((n - t) / (e || 1)), 0), a = r(u); u--;) a[o ? u : ++i] = t, t += e;
                return a
              }(n, e, o = o === i ? n < e ? 1 : -1 : qa(o), t)
            }
          }

          function wi(t) {
            return function (n, e) {
              return "string" == typeof n && "string" == typeof e || (n = Ga(n), e = Ga(e)), t(n, e)
            }
          }

          function bi(t, n, e, r, o, u, a, c, s, f) {
            var l = n & w;
            n |= l ? A : O, (n &= ~(l ? O : A)) & y || (n &= ~(v | m));
            var p = [t, n, o, l ? u : i, l ? a : i, l ? i : u, l ? i : a, c, s, f], h = e.apply(i, p);
            return Xi(t) && ru(h, p), h.placeholder = r, uu(h, t, n)
          }

          function Ai(t) {
            var n = tn[t];
            return function (t, e) {
              if (t = Ga(t), (e = null == e ? 0 : Ve(Ba(e), 292)) && Fe(t)) {
                var r = ($a(t) + "e").split("e");
                return +((r = ($a(n(r[0] + "e" + (+r[1] + e))) + "e").split("e"))[0] + "e" + (+r[1] - e))
              }
              return n(t)
            }
          }

          var Oi = tr && 1 / Se(new tr([, -0]))[1] == z ? function (t) {
            return new tr(t)
          } : Pc;

          function Ei(t) {
            return function (n) {
              var e = Fi(n);
              return e == Y ? Ne(n) : e == et ? Me(n) : function (t, n) {
                return te(n, (function (n) {
                  return [n, t[n]]
                }))
              }(n, t(n))
            }
          }

          function Li(t, n, e, o, u, a, s, f) {
            var p = n & m;
            if (!p && "function" != typeof t) throw new on(c);
            var h = o ? o.length : 0;
            if (h || (n &= ~(A | O), o = u = i), s = s === i ? s : $e(Ba(s), 0), f = f === i ? f : Ba(f), h -= u ? u.length : 0, n & O) {
              var g = o, _ = u;
              o = u = i
            }
            var d = p ? i : zi(t), N = [t, n, e, o, u, g, _, a, s, f];
            if (d && function (t, n) {
              var e = t[1], r = n[1], o = e | r, i = o < (v | m | E),
                u = r == E && e == w || r == E && e == L && t[7].length <= n[8] || r == (E | L) && n[7].length <= n[8] && e == w;
              if (!i && !u) return t;
              r & v && (t[2] = n[2], o |= e & v ? 0 : y);
              var a = n[3];
              if (a) {
                var c = t[3];
                t[3] = c ? ni(c, a, n[4]) : a, t[4] = c ? Te(t[3], l) : n[4]
              }
              (a = n[5]) && (c = t[5], t[5] = c ? ei(c, a, n[6]) : a, t[6] = c ? Te(t[5], l) : n[6]);
              (a = n[7]) && (t[7] = a);
              r & E && (t[8] = null == t[8] ? n[8] : Ve(t[8], n[8]));
              null == t[9] && (t[9] = n[9]);
              t[0] = n[0], t[1] = o
            }(N, d), t = N[0], n = N[1], e = N[2], o = N[3], u = N[4], !(f = N[9] = N[9] === i ? p ? 0 : t.length : $e(N[9] - h, 0)) && n & (w | b) && (n &= ~(w | b)), n && n != v) x = n == w || n == b ? function (t, n, e) {
              var o = li(t);
              return function u() {
                for (var a = arguments.length, c = r(a), s = a, f = Pi(u); s--;) c[s] = arguments[s];
                var l = a < 3 && c[0] !== f && c[a - 1] !== f ? [] : Te(c, f);
                return (a -= l.length) < e ? bi(t, n, gi, u.placeholder, i, c, l, i, i, e - a) : Vn(this && this !== In && this instanceof u ? o : t, this, c)
              }
            }(t, n, f) : n != A && n != (v | A) || u.length ? gi.apply(i, N) : function (t, n, e, o) {
              var i = n & v, u = li(t);
              return function n() {
                for (var a = -1, c = arguments.length, s = -1, f = o.length, l = r(f + c), p = this && this !== In && this instanceof n ? u : t; ++s < f;) l[s] = o[s];
                for (; c--;) l[s++] = arguments[++a];
                return Vn(p, i ? e : this, l)
              }
            }(t, n, e, o); else var x = function (t, n, e) {
              var r = n & v, o = li(t);
              return function n() {
                return (this && this !== In && this instanceof n ? o : t).apply(r ? e : this, arguments)
              }
            }(t, n, e);
            return uu((d ? To : ru)(x, N), t, n)
          }

          function Ni(t, n, e, r) {
            return t === i || ha(t, cn[e]) && !ln.call(r, e) ? n : t
          }

          function xi(t, n, e, r, o, u) {
            return xa(t) && xa(n) && (u.set(n, t), _o(t, n, i, xi, u), u.delete(n)), t
          }

          function Ti(t) {
            return ja(t) ? i : t
          }

          function Si(t, n, e, r, o, u) {
            var a = e & _, c = t.length, s = n.length;
            if (c != s && !(a && s > c)) return !1;
            var f = u.get(t);
            if (f && u.get(n)) return f == n;
            var l = -1, p = !0, h = e & d ? new br : i;
            for (u.set(t, n), u.set(n, t); ++l < c;) {
              var g = t[l], v = n[l];
              if (r) var m = a ? r(v, g, l, n, t, u) : r(g, v, l, t, n, u);
              if (m !== i) {
                if (m) continue;
                p = !1;
                break
              }
              if (h) {
                if (!oe(n, (function (t, n) {
                  if (!ye(h, n) && (g === t || o(g, t, e, r, u))) return h.push(n)
                }))) {
                  p = !1;
                  break
                }
              } else if (g !== v && !o(g, v, e, r, u)) {
                p = !1;
                break
              }
            }
            return u.delete(t), u.delete(n), p
          }

          function Mi(t) {
            return iu(tu(t, i, mu), t + "")
          }

          function ji(t) {
            return Kr(t, oc, qi)
          }

          function Di(t) {
            return Kr(t, ic, Bi)
          }

          var zi = rr ? function (t) {
            return rr.get(t)
          } : Pc;

          function Ii(t) {
            for (var n = t.name + "", e = or[n], r = ln.call(or, n) ? e.length : 0; r--;) {
              var o = e[r], i = o.func;
              if (null == i || i == t) return o.name
            }
            return n
          }

          function Pi(t) {
            return (ln.call(hr, "placeholder") ? hr : t).placeholder
          }

          function Ri() {
            var t = hr.iteratee || jc;
            return t = t === jc ? co : t, arguments.length ? t(arguments[0], arguments[1]) : t
          }

          function ki(t, n) {
            var e, r, o = t.__data__;
            return ("string" == (r = typeof (e = n)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== e : null === e) ? o["string" == typeof n ? "string" : "hash"] : o.map
          }

          function Ui(t) {
            for (var n = oc(t), e = n.length; e--;) {
              var r = n[e], o = t[r];
              n[e] = [r, o, Zi(o)]
            }
            return n
          }

          function Ci(t, n) {
            var e = function (t, n) {
              return null == t ? i : t[n]
            }(t, n);
            return ao(e) ? e : i
          }

          var qi = qe ? function (t) {
            return null == t ? [] : (t = nn(t), Kn(qe(t), (function (n) {
              return Pn.call(t, n)
            })))
          } : Fc, Bi = qe ? function (t) {
            for (var n = []; t;) ne(n, qi(t)), t = Dn(t);
            return n
          } : Fc, Fi = Zr;

          function Gi(t, n, e) {
            for (var r = -1, o = (n = Jo(n, t)).length, i = !1; ++r < o;) {
              var u = fu(n[r]);
              if (!(i = null != t && e(t, u))) break;
              t = t[u]
            }
            return i || ++r != o ? i : !!(o = null == t ? 0 : t.length) && Na(o) && Vi(u, o) && (va(t) || da(t))
          }

          function Wi(t) {
            return "function" != typeof t.constructor || Ki(t) ? {} : gr(Dn(t))
          }

          function $i(t) {
            return va(t) || da(t) || !!(Un && t && t[Un])
          }

          function Vi(t, n) {
            var e = typeof t;
            return !!(n = null == n ? I : n) && ("number" == e || "symbol" != e && Ht.test(t)) && t > -1 && t % 1 == 0 && t < n
          }

          function Ji(t, n, e) {
            if (!xa(e)) return !1;
            var r = typeof n;
            return !!("number" == r ? ya(e) && Vi(n, e.length) : "string" == r && n in e) && ha(e[n], t)
          }

          function Hi(t, n) {
            if (va(t)) return !1;
            var e = typeof t;
            return !("number" != e && "symbol" != e && "boolean" != e && null != t && !Pa(t)) || (Mt.test(t) || !St.test(t) || null != n && t in nn(n))
          }

          function Xi(t) {
            var n = Ii(t), e = hr[n];
            if ("function" != typeof e || !(n in vr.prototype)) return !1;
            if (t === e) return !0;
            var r = zi(e);
            return !!r && t === r[0]
          }

          (Ke && Fi(new Ke(new ArrayBuffer(1))) != st || Ze && Fi(new Ze) != Y || Qe && "[object Promise]" != Fi(Qe.resolve()) || tr && Fi(new tr) != et || nr && Fi(new nr) != ut) && (Fi = function (t) {
            var n = Zr(t), e = n == Q ? t.constructor : i, r = e ? lu(e) : "";
            if (r) switch (r) {
              case ir:
                return st;
              case ur:
                return Y;
              case ar:
                return "[object Promise]";
              case cr:
                return et;
              case sr:
                return ut
            }
            return n
          });
          var Yi = sn ? Ea : Gc;

          function Ki(t) {
            var n = t && t.constructor;
            return t === ("function" == typeof n && n.prototype || cn)
          }

          function Zi(t) {
            return t == t && !xa(t)
          }

          function Qi(t, n) {
            return function (e) {
              return null != e && (e[t] === n && (n !== i || t in nn(e)))
            }
          }

          function tu(t, n, e) {
            return n = $e(n === i ? t.length - 1 : n, 0), function () {
              for (var o = arguments, i = -1, u = $e(o.length - n, 0), a = r(u); ++i < u;) a[i] = o[n + i];
              i = -1;
              for (var c = r(n + 1); ++i < n;) c[i] = o[i];
              return c[n] = e(a), Vn(t, this, c)
            }
          }

          function nu(t, n) {
            return n.length < 2 ? t : Yr(t, jo(n, 0, -1))
          }

          function eu(t, n) {
            if (("constructor" !== n || "function" != typeof t[n]) && "__proto__" != n) return t[n]
          }

          var ru = au(To), ou = ke || function (t, n) {
            return In.setTimeout(t, n)
          }, iu = au(So);

          function uu(t, n, e) {
            var r = n + "";
            return iu(t, function (t, n) {
              var e = n.length;
              if (!e) return t;
              var r = e - 1;
              return n[r] = (e > 1 ? "& " : "") + n[r], n = n.join(e > 2 ? ", " : " "), t.replace(kt, "{\n/* [wrapped with " + n + "] */\n")
            }(r, function (t, n) {
              return Hn(q, (function (e) {
                var r = "_." + e[0];
                n & e[1] && !Zn(t, r) && t.push(r)
              })), t.sort()
            }(function (t) {
              var n = t.match(Ut);
              return n ? n[1].split(Ct) : []
            }(r), e)))
          }

          function au(t) {
            var n = 0, e = 0;
            return function () {
              var r = Je(), o = M - (r - e);
              if (e = r, o > 0) {
                if (++n >= S) return arguments[0]
              } else n = 0;
              return t.apply(i, arguments)
            }
          }

          function cu(t, n) {
            var e = -1, r = t.length, o = r - 1;
            for (n = n === i ? r : n; ++e < n;) {
              var u = Ao(e, o), a = t[u];
              t[u] = t[e], t[e] = a
            }
            return t.length = n, t
          }

          var su = function (t) {
            var n = aa(t, (function (t) {
              return e.size === f && e.clear(), t
            })), e = n.cache;
            return n
          }((function (t) {
            var n = [];
            return 46 === t.charCodeAt(0) && n.push(""), t.replace(jt, (function (t, e, r, o) {
              n.push(r ? o.replace(Bt, "$1") : e || t)
            })), n
          }));

          function fu(t) {
            if ("string" == typeof t || Pa(t)) return t;
            var n = t + "";
            return "0" == n && 1 / t == -z ? "-0" : n
          }

          function lu(t) {
            if (null != t) {
              try {
                return fn.call(t)
              } catch (t) {
              }
              try {
                return t + ""
              } catch (t) {
              }
            }
            return ""
          }

          function pu(t) {
            if (t instanceof vr) return t.clone();
            var n = new dr(t.__wrapped__, t.__chain__);
            return n.__actions__ = ri(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n
          }

          var hu = Eo((function (t, n) {
            return wa(t) ? Ur(t, Wr(n, 1, wa, !0)) : []
          })), gu = Eo((function (t, n) {
            var e = Ou(n);
            return wa(e) && (e = i), wa(t) ? Ur(t, Wr(n, 1, wa, !0), Ri(e, 2)) : []
          })), _u = Eo((function (t, n) {
            var e = Ou(n);
            return wa(e) && (e = i), wa(t) ? Ur(t, Wr(n, 1, wa, !0), i, e) : []
          }));

          function du(t, n, e) {
            var r = null == t ? 0 : t.length;
            if (!r) return -1;
            var o = null == e ? 0 : Ba(e);
            return o < 0 && (o = $e(r + o, 0)), ae(t, Ri(n, 3), o)
          }

          function vu(t, n, e) {
            var r = null == t ? 0 : t.length;
            if (!r) return -1;
            var o = r - 1;
            return e !== i && (o = Ba(e), o = e < 0 ? $e(r + o, 0) : Ve(o, r - 1)), ae(t, Ri(n, 3), o, !0)
          }

          function mu(t) {
            return (null == t ? 0 : t.length) ? Wr(t, 1) : []
          }

          function yu(t) {
            return t && t.length ? t[0] : i
          }

          var wu = Eo((function (t) {
            var n = te(t, $o);
            return n.length && n[0] === t[0] ? eo(n) : []
          })), bu = Eo((function (t) {
            var n = Ou(t), e = te(t, $o);
            return n === Ou(e) ? n = i : e.pop(), e.length && e[0] === t[0] ? eo(e, Ri(n, 2)) : []
          })), Au = Eo((function (t) {
            var n = Ou(t), e = te(t, $o);
            return (n = "function" == typeof n ? n : i) && e.pop(), e.length && e[0] === t[0] ? eo(e, i, n) : []
          }));

          function Ou(t) {
            var n = null == t ? 0 : t.length;
            return n ? t[n - 1] : i
          }

          var Eu = Eo(Lu);

          function Lu(t, n) {
            return t && t.length && n && n.length ? wo(t, n) : t
          }

          var Nu = Mi((function (t, n) {
            var e = null == t ? 0 : t.length, r = zr(t, n);
            return bo(t, te(n, (function (t) {
              return Vi(t, e) ? +t : t
            })).sort(ti)), r
          }));

          function xu(t) {
            return null == t ? t : Ye.call(t)
          }

          var Tu = Eo((function (t) {
            return Uo(Wr(t, 1, wa, !0))
          })), Su = Eo((function (t) {
            var n = Ou(t);
            return wa(n) && (n = i), Uo(Wr(t, 1, wa, !0), Ri(n, 2))
          })), Mu = Eo((function (t) {
            var n = Ou(t);
            return n = "function" == typeof n ? n : i, Uo(Wr(t, 1, wa, !0), i, n)
          }));

          function ju(t) {
            if (!t || !t.length) return [];
            var n = 0;
            return t = Kn(t, (function (t) {
              if (wa(t)) return n = $e(t.length, n), !0
            })), de(n, (function (n) {
              return te(t, pe(n))
            }))
          }

          function Du(t, n) {
            if (!t || !t.length) return [];
            var e = ju(t);
            return null == n ? e : te(e, (function (t) {
              return Vn(n, i, t)
            }))
          }

          var zu = Eo((function (t, n) {
            return wa(t) ? Ur(t, n) : []
          })), Iu = Eo((function (t) {
            return Go(Kn(t, wa))
          })), Pu = Eo((function (t) {
            var n = Ou(t);
            return wa(n) && (n = i), Go(Kn(t, wa), Ri(n, 2))
          })), Ru = Eo((function (t) {
            var n = Ou(t);
            return n = "function" == typeof n ? n : i, Go(Kn(t, wa), i, n)
          })), ku = Eo(ju);
          var Uu = Eo((function (t) {
            var n = t.length, e = n > 1 ? t[n - 1] : i;
            return e = "function" == typeof e ? (t.pop(), e) : i, Du(t, e)
          }));

          function Cu(t) {
            var n = hr(t);
            return n.__chain__ = !0, n
          }

          function qu(t, n) {
            return n(t)
          }

          var Bu = Mi((function (t) {
            var n = t.length, e = n ? t[0] : 0, r = this.__wrapped__, o = function (n) {
              return zr(n, t)
            };
            return !(n > 1 || this.__actions__.length) && r instanceof vr && Vi(e) ? ((r = r.slice(e, +e + (n ? 1 : 0))).__actions__.push({
              func: qu,
              args: [o],
              thisArg: i
            }), new dr(r, this.__chain__).thru((function (t) {
              return n && !t.length && t.push(i), t
            }))) : this.thru(o)
          }));
          var Fu = ii((function (t, n, e) {
            ln.call(t, e) ? ++t[e] : Dr(t, e, 1)
          }));
          var Gu = pi(du), Wu = pi(vu);

          function $u(t, n) {
            return (va(t) ? Hn : Cr)(t, Ri(n, 3))
          }

          function Vu(t, n) {
            return (va(t) ? Xn : qr)(t, Ri(n, 3))
          }

          var Ju = ii((function (t, n, e) {
            ln.call(t, e) ? t[e].push(n) : Dr(t, e, [n])
          }));
          var Hu = Eo((function (t, n, e) {
            var o = -1, i = "function" == typeof n, u = ya(t) ? r(t.length) : [];
            return Cr(t, (function (t) {
              u[++o] = i ? Vn(n, t, e) : ro(t, n, e)
            })), u
          })), Xu = ii((function (t, n, e) {
            Dr(t, e, n)
          }));

          function Yu(t, n) {
            return (va(t) ? te : po)(t, Ri(n, 3))
          }

          var Ku = ii((function (t, n, e) {
            t[e ? 0 : 1].push(n)
          }), (function () {
            return [[], []]
          }));
          var Zu = Eo((function (t, n) {
            if (null == t) return [];
            var e = n.length;
            return e > 1 && Ji(t, n[0], n[1]) ? n = [] : e > 2 && Ji(n[0], n[1], n[2]) && (n = [n[0]]), mo(t, Wr(n, 1), [])
          })), Qu = Re || function () {
            return In.Date.now()
          };

          function ta(t, n, e) {
            return n = e ? i : n, n = t && null == n ? t.length : n, Li(t, E, i, i, i, i, n)
          }

          function na(t, n) {
            var e;
            if ("function" != typeof n) throw new on(c);
            return t = Ba(t), function () {
              return --t > 0 && (e = n.apply(this, arguments)), t <= 1 && (n = i), e
            }
          }

          var ea = Eo((function (t, n, e) {
            var r = v;
            if (e.length) {
              var o = Te(e, Pi(ea));
              r |= A
            }
            return Li(t, r, n, e, o)
          })), ra = Eo((function (t, n, e) {
            var r = v | m;
            if (e.length) {
              var o = Te(e, Pi(ra));
              r |= A
            }
            return Li(n, r, t, e, o)
          }));

          function oa(t, n, e) {
            var r, o, u, a, s, f, l = 0, p = !1, h = !1, g = !0;
            if ("function" != typeof t) throw new on(c);

            function _(n) {
              var e = r, u = o;
              return r = o = i, l = n, a = t.apply(u, e)
            }

            function d(t) {
              var e = t - f;
              return f === i || e >= n || e < 0 || h && t - l >= u
            }

            function v() {
              var t = Qu();
              if (d(t)) return m(t);
              s = ou(v, function (t) {
                var e = n - (t - f);
                return h ? Ve(e, u - (t - l)) : e
              }(t))
            }

            function m(t) {
              return s = i, g && r ? _(t) : (r = o = i, a)
            }

            function y() {
              var t = Qu(), e = d(t);
              if (r = arguments, o = this, f = t, e) {
                if (s === i) return function (t) {
                  return l = t, s = ou(v, n), p ? _(t) : a
                }(f);
                if (h) return Yo(s), s = ou(v, n), _(f)
              }
              return s === i && (s = ou(v, n)), a
            }

            return n = Ga(n) || 0, xa(e) && (p = !!e.leading, u = (h = "maxWait" in e) ? $e(Ga(e.maxWait) || 0, n) : u, g = "trailing" in e ? !!e.trailing : g), y.cancel = function () {
              s !== i && Yo(s), l = 0, r = f = o = s = i
            }, y.flush = function () {
              return s === i ? a : m(Qu())
            }, y
          }

          var ia = Eo((function (t, n) {
            return kr(t, 1, n)
          })), ua = Eo((function (t, n, e) {
            return kr(t, Ga(n) || 0, e)
          }));

          function aa(t, n) {
            if ("function" != typeof t || null != n && "function" != typeof n) throw new on(c);
            var e = function () {
              var r = arguments, o = n ? n.apply(this, r) : r[0], i = e.cache;
              if (i.has(o)) return i.get(o);
              var u = t.apply(this, r);
              return e.cache = i.set(o, u) || i, u
            };
            return e.cache = new (aa.Cache || wr), e
          }

          function ca(t) {
            if ("function" != typeof t) throw new on(c);
            return function () {
              var n = arguments;
              switch (n.length) {
                case 0:
                  return !t.call(this);
                case 1:
                  return !t.call(this, n[0]);
                case 2:
                  return !t.call(this, n[0], n[1]);
                case 3:
                  return !t.call(this, n[0], n[1], n[2])
              }
              return !t.apply(this, n)
            }
          }

          aa.Cache = wr;
          var sa = Ho((function (t, n) {
            var e = (n = 1 == n.length && va(n[0]) ? te(n[0], ve(Ri())) : te(Wr(n, 1), ve(Ri()))).length;
            return Eo((function (r) {
              for (var o = -1, i = Ve(r.length, e); ++o < i;) r[o] = n[o].call(this, r[o]);
              return Vn(t, this, r)
            }))
          })), fa = Eo((function (t, n) {
            var e = Te(n, Pi(fa));
            return Li(t, A, i, n, e)
          })), la = Eo((function (t, n) {
            var e = Te(n, Pi(la));
            return Li(t, O, i, n, e)
          })), pa = Mi((function (t, n) {
            return Li(t, L, i, i, i, n)
          }));

          function ha(t, n) {
            return t === n || t != t && n != n
          }

          var ga = wi(Qr), _a = wi((function (t, n) {
            return t >= n
          })), da = oo(function () {
            return arguments
          }()) ? oo : function (t) {
            return Ta(t) && ln.call(t, "callee") && !Pn.call(t, "callee")
          }, va = r.isArray, ma = qn ? ve(qn) : function (t) {
            return Ta(t) && Zr(t) == ct
          };

          function ya(t) {
            return null != t && Na(t.length) && !Ea(t)
          }

          function wa(t) {
            return Ta(t) && ya(t)
          }

          var ba = Be || Gc, Aa = Bn ? ve(Bn) : function (t) {
            return Ta(t) && Zr(t) == $
          };

          function Oa(t) {
            if (!Ta(t)) return !1;
            var n = Zr(t);
            return n == J || n == V || "string" == typeof t.message && "string" == typeof t.name && !ja(t)
          }

          function Ea(t) {
            if (!xa(t)) return !1;
            var n = Zr(t);
            return n == H || n == X || n == G || n == tt
          }

          function La(t) {
            return "number" == typeof t && t == Ba(t)
          }

          function Na(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= I
          }

          function xa(t) {
            var n = typeof t;
            return null != t && ("object" == n || "function" == n)
          }

          function Ta(t) {
            return null != t && "object" == typeof t
          }

          var Sa = Fn ? ve(Fn) : function (t) {
            return Ta(t) && Fi(t) == Y
          };

          function Ma(t) {
            return "number" == typeof t || Ta(t) && Zr(t) == K
          }

          function ja(t) {
            if (!Ta(t) || Zr(t) != Q) return !1;
            var n = Dn(t);
            if (null === n) return !0;
            var e = ln.call(n, "constructor") && n.constructor;
            return "function" == typeof e && e instanceof e && fn.call(e) == _n
          }

          var Da = Gn ? ve(Gn) : function (t) {
            return Ta(t) && Zr(t) == nt
          };
          var za = Wn ? ve(Wn) : function (t) {
            return Ta(t) && Fi(t) == et
          };

          function Ia(t) {
            return "string" == typeof t || !va(t) && Ta(t) && Zr(t) == rt
          }

          function Pa(t) {
            return "symbol" == typeof t || Ta(t) && Zr(t) == ot
          }

          var Ra = $n ? ve($n) : function (t) {
            return Ta(t) && Na(t.length) && !!xn[Zr(t)]
          };
          var ka = wi(lo), Ua = wi((function (t, n) {
            return t <= n
          }));

          function Ca(t) {
            if (!t) return [];
            if (ya(t)) return Ia(t) ? De(t) : ri(t);
            if (Cn && t[Cn]) return function (t) {
              for (var n, e = []; !(n = t.next()).done;) e.push(n.value);
              return e
            }(t[Cn]());
            var n = Fi(t);
            return (n == Y ? Ne : n == et ? Se : hc)(t)
          }

          function qa(t) {
            return t ? (t = Ga(t)) === z || t === -z ? (t < 0 ? -1 : 1) * P : t == t ? t : 0 : 0 === t ? t : 0
          }

          function Ba(t) {
            var n = qa(t), e = n % 1;
            return n == n ? e ? n - e : n : 0
          }

          function Fa(t) {
            return t ? Ir(Ba(t), 0, k) : 0
          }

          function Ga(t) {
            if ("number" == typeof t) return t;
            if (Pa(t)) return R;
            if (xa(t)) {
              var n = "function" == typeof t.valueOf ? t.valueOf() : t;
              t = xa(n) ? n + "" : n
            }
            if ("string" != typeof t) return 0 === t ? t : +t;
            t = t.replace(It, "");
            var e = $t.test(t);
            return e || Jt.test(t) ? jn(t.slice(2), e ? 2 : 8) : Wt.test(t) ? R : +t
          }

          function Wa(t) {
            return oi(t, ic(t))
          }

          function $a(t) {
            return null == t ? "" : ko(t)
          }

          var Va = ui((function (t, n) {
            if (Ki(n) || ya(n)) oi(n, oc(n), t); else for (var e in n) ln.call(n, e) && Tr(t, e, n[e])
          })), Ja = ui((function (t, n) {
            oi(n, ic(n), t)
          })), Ha = ui((function (t, n, e, r) {
            oi(n, ic(n), t, r)
          })), Xa = ui((function (t, n, e, r) {
            oi(n, oc(n), t, r)
          })), Ya = Mi(zr);
          var Ka = Eo((function (t, n) {
            t = nn(t);
            var e = -1, r = n.length, o = r > 2 ? n[2] : i;
            for (o && Ji(n[0], n[1], o) && (r = 1); ++e < r;) for (var u = n[e], a = ic(u), c = -1, s = a.length; ++c < s;) {
              var f = a[c], l = t[f];
              (l === i || ha(l, cn[f]) && !ln.call(t, f)) && (t[f] = u[f])
            }
            return t
          })), Za = Eo((function (t) {
            return t.push(i, xi), Vn(ac, i, t)
          }));

          function Qa(t, n, e) {
            var r = null == t ? i : Yr(t, n);
            return r === i ? e : r
          }

          function tc(t, n) {
            return null != t && Gi(t, n, no)
          }

          var nc = _i((function (t, n, e) {
            null != n && "function" != typeof n.toString && (n = gn.call(n)), t[n] = e
          }), xc(Mc)), ec = _i((function (t, n, e) {
            null != n && "function" != typeof n.toString && (n = gn.call(n)), ln.call(t, n) ? t[n].push(e) : t[n] = [e]
          }), Ri), rc = Eo(ro);

          function oc(t) {
            return ya(t) ? Or(t) : so(t)
          }

          function ic(t) {
            return ya(t) ? Or(t, !0) : fo(t)
          }

          var uc = ui((function (t, n, e) {
            _o(t, n, e)
          })), ac = ui((function (t, n, e, r) {
            _o(t, n, e, r)
          })), cc = Mi((function (t, n) {
            var e = {};
            if (null == t) return e;
            var r = !1;
            n = te(n, (function (n) {
              return n = Jo(n, t), r || (r = n.length > 1), n
            })), oi(t, Di(t), e), r && (e = Pr(e, p | h | g, Ti));
            for (var o = n.length; o--;) Co(e, n[o]);
            return e
          }));
          var sc = Mi((function (t, n) {
            return null == t ? {} : function (t, n) {
              return yo(t, n, (function (n, e) {
                return tc(t, e)
              }))
            }(t, n)
          }));

          function fc(t, n) {
            if (null == t) return {};
            var e = te(Di(t), (function (t) {
              return [t]
            }));
            return n = Ri(n), yo(t, e, (function (t, e) {
              return n(t, e[0])
            }))
          }

          var lc = Ei(oc), pc = Ei(ic);

          function hc(t) {
            return null == t ? [] : me(t, oc(t))
          }

          var gc = fi((function (t, n, e) {
            return n = n.toLowerCase(), t + (e ? _c(n) : n)
          }));

          function _c(t) {
            return Oc($a(t).toLowerCase())
          }

          function dc(t) {
            return (t = $a(t)) && t.replace(Xt, Ae).replace(wn, "")
          }

          var vc = fi((function (t, n, e) {
            return t + (e ? "-" : "") + n.toLowerCase()
          })), mc = fi((function (t, n, e) {
            return t + (e ? " " : "") + n.toLowerCase()
          })), yc = si("toLowerCase");
          var wc = fi((function (t, n, e) {
            return t + (e ? "_" : "") + n.toLowerCase()
          }));
          var bc = fi((function (t, n, e) {
            return t + (e ? " " : "") + Oc(n)
          }));
          var Ac = fi((function (t, n, e) {
            return t + (e ? " " : "") + n.toUpperCase()
          })), Oc = si("toUpperCase");

          function Ec(t, n, e) {
            return t = $a(t), (n = e ? i : n) === i ? function (t) {
              return En.test(t)
            }(t) ? function (t) {
              return t.match(An) || []
            }(t) : function (t) {
              return t.match(qt) || []
            }(t) : t.match(n) || []
          }

          var Lc = Eo((function (t, n) {
            try {
              return Vn(t, i, n)
            } catch (t) {
              return Oa(t) ? t : new Zt(t)
            }
          })), Nc = Mi((function (t, n) {
            return Hn(n, (function (n) {
              n = fu(n), Dr(t, n, ea(t[n], t))
            })), t
          }));

          function xc(t) {
            return function () {
              return t
            }
          }

          var Tc = hi(), Sc = hi(!0);

          function Mc(t) {
            return t
          }

          function jc(t) {
            return co("function" == typeof t ? t : Pr(t, p))
          }

          var Dc = Eo((function (t, n) {
            return function (e) {
              return ro(e, t, n)
            }
          })), zc = Eo((function (t, n) {
            return function (e) {
              return ro(t, e, n)
            }
          }));

          function Ic(t, n, e) {
            var r = oc(n), o = Xr(n, r);
            null != e || xa(n) && (o.length || !r.length) || (e = n, n = t, t = this, o = Xr(n, oc(n)));
            var i = !(xa(e) && "chain" in e && !e.chain), u = Ea(t);
            return Hn(o, (function (e) {
              var r = n[e];
              t[e] = r, u && (t.prototype[e] = function () {
                var n = this.__chain__;
                if (i || n) {
                  var e = t(this.__wrapped__), o = e.__actions__ = ri(this.__actions__);
                  return o.push({func: r, args: arguments, thisArg: t}), e.__chain__ = n, e
                }
                return r.apply(t, ne([this.value()], arguments))
              })
            })), t
          }

          function Pc() {
          }

          var Rc = vi(te), kc = vi(Yn), Uc = vi(oe);

          function Cc(t) {
            return Hi(t) ? pe(fu(t)) : function (t) {
              return function (n) {
                return Yr(n, t)
              }
            }(t)
          }

          var qc = yi(), Bc = yi(!0);

          function Fc() {
            return []
          }

          function Gc() {
            return !1
          }

          var Wc = di((function (t, n) {
            return t + n
          }), 0), $c = Ai("ceil"), Vc = di((function (t, n) {
            return t / n
          }), 1), Jc = Ai("floor");
          var Hc, Xc = di((function (t, n) {
            return t * n
          }), 1), Yc = Ai("round"), Kc = di((function (t, n) {
            return t - n
          }), 0);
          return hr.after = function (t, n) {
            if ("function" != typeof n) throw new on(c);
            return t = Ba(t), function () {
              if (--t < 1) return n.apply(this, arguments)
            }
          }, hr.ary = ta, hr.assign = Va, hr.assignIn = Ja, hr.assignInWith = Ha, hr.assignWith = Xa, hr.at = Ya, hr.before = na, hr.bind = ea, hr.bindAll = Nc, hr.bindKey = ra, hr.castArray = function () {
            if (!arguments.length) return [];
            var t = arguments[0];
            return va(t) ? t : [t]
          }, hr.chain = Cu, hr.chunk = function (t, n, e) {
            n = (e ? Ji(t, n, e) : n === i) ? 1 : $e(Ba(n), 0);
            var o = null == t ? 0 : t.length;
            if (!o || n < 1) return [];
            for (var u = 0, a = 0, c = r(Ue(o / n)); u < o;) c[a++] = jo(t, u, u += n);
            return c
          }, hr.compact = function (t) {
            for (var n = -1, e = null == t ? 0 : t.length, r = 0, o = []; ++n < e;) {
              var i = t[n];
              i && (o[r++] = i)
            }
            return o
          }, hr.concat = function () {
            var t = arguments.length;
            if (!t) return [];
            for (var n = r(t - 1), e = arguments[0], o = t; o--;) n[o - 1] = arguments[o];
            return ne(va(e) ? ri(e) : [e], Wr(n, 1))
          }, hr.cond = function (t) {
            var n = null == t ? 0 : t.length, e = Ri();
            return t = n ? te(t, (function (t) {
              if ("function" != typeof t[1]) throw new on(c);
              return [e(t[0]), t[1]]
            })) : [], Eo((function (e) {
              for (var r = -1; ++r < n;) {
                var o = t[r];
                if (Vn(o[0], this, e)) return Vn(o[1], this, e)
              }
            }))
          }, hr.conforms = function (t) {
            return function (t) {
              var n = oc(t);
              return function (e) {
                return Rr(e, t, n)
              }
            }(Pr(t, p))
          }, hr.constant = xc, hr.countBy = Fu, hr.create = function (t, n) {
            var e = gr(t);
            return null == n ? e : jr(e, n)
          }, hr.curry = function t(n, e, r) {
            var o = Li(n, w, i, i, i, i, i, e = r ? i : e);
            return o.placeholder = t.placeholder, o
          }, hr.curryRight = function t(n, e, r) {
            var o = Li(n, b, i, i, i, i, i, e = r ? i : e);
            return o.placeholder = t.placeholder, o
          }, hr.debounce = oa, hr.defaults = Ka, hr.defaultsDeep = Za, hr.defer = ia, hr.delay = ua, hr.difference = hu, hr.differenceBy = gu, hr.differenceWith = _u, hr.drop = function (t, n, e) {
            var r = null == t ? 0 : t.length;
            return r ? jo(t, (n = e || n === i ? 1 : Ba(n)) < 0 ? 0 : n, r) : []
          }, hr.dropRight = function (t, n, e) {
            var r = null == t ? 0 : t.length;
            return r ? jo(t, 0, (n = r - (n = e || n === i ? 1 : Ba(n))) < 0 ? 0 : n) : []
          }, hr.dropRightWhile = function (t, n) {
            return t && t.length ? Bo(t, Ri(n, 3), !0, !0) : []
          }, hr.dropWhile = function (t, n) {
            return t && t.length ? Bo(t, Ri(n, 3), !0) : []
          }, hr.fill = function (t, n, e, r) {
            var o = null == t ? 0 : t.length;
            return o ? (e && "number" != typeof e && Ji(t, n, e) && (e = 0, r = o), function (t, n, e, r) {
              var o = t.length;
              for ((e = Ba(e)) < 0 && (e = -e > o ? 0 : o + e), (r = r === i || r > o ? o : Ba(r)) < 0 && (r += o), r = e > r ? 0 : Fa(r); e < r;) t[e++] = n;
              return t
            }(t, n, e, r)) : []
          }, hr.filter = function (t, n) {
            return (va(t) ? Kn : Gr)(t, Ri(n, 3))
          }, hr.flatMap = function (t, n) {
            return Wr(Yu(t, n), 1)
          }, hr.flatMapDeep = function (t, n) {
            return Wr(Yu(t, n), z)
          }, hr.flatMapDepth = function (t, n, e) {
            return e = e === i ? 1 : Ba(e), Wr(Yu(t, n), e)
          }, hr.flatten = mu, hr.flattenDeep = function (t) {
            return (null == t ? 0 : t.length) ? Wr(t, z) : []
          }, hr.flattenDepth = function (t, n) {
            return (null == t ? 0 : t.length) ? Wr(t, n = n === i ? 1 : Ba(n)) : []
          }, hr.flip = function (t) {
            return Li(t, N)
          }, hr.flow = Tc, hr.flowRight = Sc, hr.fromPairs = function (t) {
            for (var n = -1, e = null == t ? 0 : t.length, r = {}; ++n < e;) {
              var o = t[n];
              r[o[0]] = o[1]
            }
            return r
          }, hr.functions = function (t) {
            return null == t ? [] : Xr(t, oc(t))
          }, hr.functionsIn = function (t) {
            return null == t ? [] : Xr(t, ic(t))
          }, hr.groupBy = Ju, hr.initial = function (t) {
            return (null == t ? 0 : t.length) ? jo(t, 0, -1) : []
          }, hr.intersection = wu, hr.intersectionBy = bu, hr.intersectionWith = Au, hr.invert = nc, hr.invertBy = ec, hr.invokeMap = Hu, hr.iteratee = jc, hr.keyBy = Xu, hr.keys = oc, hr.keysIn = ic, hr.map = Yu, hr.mapKeys = function (t, n) {
            var e = {};
            return n = Ri(n, 3), Jr(t, (function (t, r, o) {
              Dr(e, n(t, r, o), t)
            })), e
          }, hr.mapValues = function (t, n) {
            var e = {};
            return n = Ri(n, 3), Jr(t, (function (t, r, o) {
              Dr(e, r, n(t, r, o))
            })), e
          }, hr.matches = function (t) {
            return ho(Pr(t, p))
          }, hr.matchesProperty = function (t, n) {
            return go(t, Pr(n, p))
          }, hr.memoize = aa, hr.merge = uc, hr.mergeWith = ac, hr.method = Dc, hr.methodOf = zc, hr.mixin = Ic, hr.negate = ca, hr.nthArg = function (t) {
            return t = Ba(t), Eo((function (n) {
              return vo(n, t)
            }))
          }, hr.omit = cc, hr.omitBy = function (t, n) {
            return fc(t, ca(Ri(n)))
          }, hr.once = function (t) {
            return na(2, t)
          }, hr.orderBy = function (t, n, e, r) {
            return null == t ? [] : (va(n) || (n = null == n ? [] : [n]), va(e = r ? i : e) || (e = null == e ? [] : [e]), mo(t, n, e))
          }, hr.over = Rc, hr.overArgs = sa, hr.overEvery = kc, hr.overSome = Uc, hr.partial = fa, hr.partialRight = la, hr.partition = Ku, hr.pick = sc, hr.pickBy = fc, hr.property = Cc, hr.propertyOf = function (t) {
            return function (n) {
              return null == t ? i : Yr(t, n)
            }
          }, hr.pull = Eu, hr.pullAll = Lu, hr.pullAllBy = function (t, n, e) {
            return t && t.length && n && n.length ? wo(t, n, Ri(e, 2)) : t
          }, hr.pullAllWith = function (t, n, e) {
            return t && t.length && n && n.length ? wo(t, n, i, e) : t
          }, hr.pullAt = Nu, hr.range = qc, hr.rangeRight = Bc, hr.rearg = pa, hr.reject = function (t, n) {
            return (va(t) ? Kn : Gr)(t, ca(Ri(n, 3)))
          }, hr.remove = function (t, n) {
            var e = [];
            if (!t || !t.length) return e;
            var r = -1, o = [], i = t.length;
            for (n = Ri(n, 3); ++r < i;) {
              var u = t[r];
              n(u, r, t) && (e.push(u), o.push(r))
            }
            return bo(t, o), e
          }, hr.rest = function (t, n) {
            if ("function" != typeof t) throw new on(c);
            return Eo(t, n = n === i ? n : Ba(n))
          }, hr.reverse = xu,hr.sampleSize = function (t, n, e) {
            return n = (e ? Ji(t, n, e) : n === i) ? 1 : Ba(n), (va(t) ? Lr : No)(t, n)
          },hr.set = function (t, n, e) {
            return null == t ? t : xo(t, n, e)
          },hr.setWith = function (t, n, e, r) {
            return r = "function" == typeof r ? r : i, null == t ? t : xo(t, n, e, r)
          },hr.shuffle = function (t) {
            return (va(t) ? Nr : Mo)(t)
          },hr.slice = function (t, n, e) {
            var r = null == t ? 0 : t.length;
            return r ? (e && "number" != typeof e && Ji(t, n, e) ? (n = 0, e = r) : (n = null == n ? 0 : Ba(n), e = e === i ? r : Ba(e)), jo(t, n, e)) : []
          },hr.sortBy = Zu,hr.sortedUniq = function (t) {
            return t && t.length ? Po(t) : []
          },hr.sortedUniqBy = function (t, n) {
            return t && t.length ? Po(t, Ri(n, 2)) : []
          },hr.split = function (t, n, e) {
            return e && "number" != typeof e && Ji(t, n, e) && (n = e = i), (e = e === i ? k : e >>> 0) ? (t = $a(t)) && ("string" == typeof n || null != n && !Da(n)) && !(n = ko(n)) && Le(t) ? Xo(De(t), 0, e) : t.split(n, e) : []
          },hr.spread = function (t, n) {
            if ("function" != typeof t) throw new on(c);
            return n = null == n ? 0 : $e(Ba(n), 0), Eo((function (e) {
              var r = e[n], o = Xo(e, 0, n);
              return r && ne(o, r), Vn(t, this, o)
            }))
          },hr.tail = function (t) {
            var n = null == t ? 0 : t.length;
            return n ? jo(t, 1, n) : []
          },hr.take = function (t, n, e) {
            return t && t.length ? jo(t, 0, (n = e || n === i ? 1 : Ba(n)) < 0 ? 0 : n) : []
          },hr.takeRight = function (t, n, e) {
            var r = null == t ? 0 : t.length;
            return r ? jo(t, (n = r - (n = e || n === i ? 1 : Ba(n))) < 0 ? 0 : n, r) : []
          },hr.takeRightWhile = function (t, n) {
            return t && t.length ? Bo(t, Ri(n, 3), !1, !0) : []
          },hr.takeWhile = function (t, n) {
            return t && t.length ? Bo(t, Ri(n, 3)) : []
          },hr.tap = function (t, n) {
            return n(t), t
          },hr.throttle = function (t, n, e) {
            var r = !0, o = !0;
            if ("function" != typeof t) throw new on(c);
            return xa(e) && (r = "leading" in e ? !!e.leading : r, o = "trailing" in e ? !!e.trailing : o), oa(t, n, {
              leading: r,
              maxWait: n,
              trailing: o
            })
          },hr.thru = qu,hr.toArray = Ca,hr.toPairs = lc,hr.toPairsIn = pc,hr.toPath = function (t) {
            return va(t) ? te(t, fu) : Pa(t) ? [t] : ri(su($a(t)))
          },hr.toPlainObject = Wa,hr.transform = function (t, n, e) {
            var r = va(t), o = r || ba(t) || Ra(t);
            if (n = Ri(n, 4), null == e) {
              var i = t && t.constructor;
              e = o ? r ? new i : [] : xa(t) && Ea(i) ? gr(Dn(t)) : {}
            }
            return (o ? Hn : Jr)(t, (function (t, r, o) {
              return n(e, t, r, o)
            })), e
          },hr.unary = function (t) {
            return ta(t, 1)
          },hr.union = Tu,hr.unionBy = Su,hr.unionWith = Mu,hr.uniq = function (t) {
            return t && t.length ? Uo(t) : []
          },hr.uniqBy = function (t, n) {
            return t && t.length ? Uo(t, Ri(n, 2)) : []
          },hr.uniqWith = function (t, n) {
            return n = "function" == typeof n ? n : i, t && t.length ? Uo(t, i, n) : []
          },hr.unset = function (t, n) {
            return null == t || Co(t, n)
          },hr.unzip = ju,hr.unzipWith = Du,hr.update = function (t, n, e) {
            return null == t ? t : qo(t, n, Vo(e))
          },hr.updateWith = function (t, n, e, r) {
            return r = "function" == typeof r ? r : i, null == t ? t : qo(t, n, Vo(e), r)
          },hr.values = hc,hr.valuesIn = function (t) {
            return null == t ? [] : me(t, ic(t))
          },hr.without = zu,hr.words = Ec,hr.wrap = function (t, n) {
            return fa(Vo(n), t)
          },hr.xor = Iu,hr.xorBy = Pu,hr.xorWith = Ru,hr.zip = ku,hr.zipObject = function (t, n) {
            return Wo(t || [], n || [], Tr)
          },hr.zipObjectDeep = function (t, n) {
            return Wo(t || [], n || [], xo)
          },hr.zipWith = Uu,hr.entries = lc,hr.entriesIn = pc,hr.extend = Ja,hr.extendWith = Ha,Ic(hr, hr),hr.add = Wc,hr.attempt = Lc,hr.camelCase = gc,hr.capitalize = _c,hr.ceil = $c,hr.clamp = function (t, n, e) {
            return e === i && (e = n, n = i), e !== i && (e = (e = Ga(e)) == e ? e : 0), n !== i && (n = (n = Ga(n)) == n ? n : 0), Ir(Ga(t), n, e)
          },hr.clone = function (t) {
            return Pr(t, g)
          },hr.cloneDeep = function (t) {
            return Pr(t, p | g)
          },hr.cloneDeepWith = function (t, n) {
            return Pr(t, p | g, n = "function" == typeof n ? n : i)
          },hr.cloneWith = function (t, n) {
            return Pr(t, g, n = "function" == typeof n ? n : i)
          },hr.conformsTo = function (t, n) {
            return null == n || Rr(t, n, oc(n))
          },hr.deburr = dc,hr.defaultTo = function (t, n) {
            return null == t || t != t ? n : t
          },hr.divide = Vc,hr.endsWith = function (t, n, e) {
            t = $a(t), n = ko(n);
            var r = t.length, o = e = e === i ? r : Ir(Ba(e), 0, r);
            return (e -= n.length) >= 0 && t.slice(e, o) == n
          },hr.eq = ha,hr.escape = function (t) {
            return (t = $a(t)) && Lt.test(t) ? t.replace(Ot, Oe) : t
          },hr.escapeRegExp = function (t) {
            return (t = $a(t)) && zt.test(t) ? t.replace(Dt, "\\$&") : t
          },hr.every = function (t, n, e) {
            var r = va(t) ? Yn : Br;
            return e && Ji(t, n, e) && (n = i), r(t, Ri(n, 3))
          },hr.find = Gu,hr.findIndex = du,hr.findKey = function (t, n) {
            return ue(t, Ri(n, 3), Jr)
          },hr.findLast = Wu,hr.findLastIndex = vu,hr.findLastKey = function (t, n) {
            return ue(t, Ri(n, 3), Hr)
          },hr.floor = Jc,hr.forEach = $u,hr.forEachRight = Vu,hr.forIn = function (t, n) {
            return null == t ? t : $r(t, Ri(n, 3), ic)
          },hr.forInRight = function (t, n) {
            return null == t ? t : Vr(t, Ri(n, 3), ic)
          },hr.forOwn = function (t, n) {
            return t && Jr(t, Ri(n, 3))
          },hr.forOwnRight = function (t, n) {
            return t && Hr(t, Ri(n, 3))
          },hr.get = Qa,hr.gt = ga,hr.gte = _a,hr.has = function (t, n) {
            return null != t && Gi(t, n, to)
          },hr.hasIn = tc,hr.head = yu,hr.identity = Mc,hr.includes = function (t, n, e, r) {
            t = ya(t) ? t : hc(t), e = e && !r ? Ba(e) : 0;
            var o = t.length;
            return e < 0 && (e = $e(o + e, 0)), Ia(t) ? e <= o && t.indexOf(n, e) > -1 : !!o && ce(t, n, e) > -1
          },hr.indexOf = function (t, n, e) {
            var r = null == t ? 0 : t.length;
            if (!r) return -1;
            var o = null == e ? 0 : Ba(e);
            return o < 0 && (o = $e(r + o, 0)), ce(t, n, o)
          },hr.inRange = function (t, n, e) {
            return n = qa(n), e === i ? (e = n, n = 0) : e = qa(e), function (t, n, e) {
              return t >= Ve(n, e) && t < $e(n, e)
            }(t = Ga(t), n, e)
          },hr.invoke = rc,hr.isArguments = da,hr.isArray = va,hr.isArrayBuffer = ma,hr.isArrayLike = ya,hr.isArrayLikeObject = wa,hr.isBoolean = function (t) {
            return !0 === t || !1 === t || Ta(t) && Zr(t) == W
          },hr.isBuffer = ba,hr.isDate = Aa,hr.isElement = function (t) {
            return Ta(t) && 1 === t.nodeType && !ja(t)
          },hr.isEmpty = function (t) {
            if (null == t) return !0;
            if (ya(t) && (va(t) || "string" == typeof t || "function" == typeof t.splice || ba(t) || Ra(t) || da(t))) return !t.length;
            var n = Fi(t);
            if (n == Y || n == et) return !t.size;
            if (Ki(t)) return !so(t).length;
            for (var e in t) if (ln.call(t, e)) return !1;
            return !0
          },hr.isEqual = function (t, n) {
            return io(t, n)
          },hr.isEqualWith = function (t, n, e) {
            var r = (e = "function" == typeof e ? e : i) ? e(t, n) : i;
            return r === i ? io(t, n, i, e) : !!r
          },hr.isError = Oa,hr.isFinite = function (t) {
            return "number" == typeof t && Fe(t)
          },hr.isFunction = Ea,hr.isInteger = La,hr.isLength = Na,hr.isMap = Sa,hr.isMatch = function (t, n) {
            return t === n || uo(t, n, Ui(n))
          },hr.isMatchWith = function (t, n, e) {
            return e = "function" == typeof e ? e : i, uo(t, n, Ui(n), e)
          },hr.isNaN = function (t) {
            return Ma(t) && t != +t
          },hr.isNative = function (t) {
            if (Yi(t)) throw new Zt(a);
            return ao(t)
          },hr.isNil = function (t) {
            return null == t
          },hr.isNull = function (t) {
            return null === t
          },hr.isNumber = Ma,hr.isObject = xa,hr.isObjectLike = Ta,hr.isPlainObject = ja,hr.isRegExp = Da,hr.isSafeInteger = function (t) {
            return La(t) && t >= -I && t <= I
          },hr.isSet = za,hr.isString = Ia,hr.isSymbol = Pa,hr.isTypedArray = Ra,hr.isUndefined = function (t) {
            return t === i
          },hr.isWeakMap = function (t) {
            return Ta(t) && Fi(t) == ut
          },hr.isWeakSet = function (t) {
            return Ta(t) && Zr(t) == at
          },hr.join = function (t, n) {
            return null == t ? "" : Ge.call(t, n)
          },hr.kebabCase = vc,hr.last = Ou,hr.lastIndexOf = function (t, n, e) {
            var r = null == t ? 0 : t.length;
            if (!r) return -1;
            var o = r;
            return e !== i && (o = (o = Ba(e)) < 0 ? $e(r + o, 0) : Ve(o, r - 1)), n == n ? function (t, n, e) {
              for (var r = e + 1; r--;) if (t[r] === n) return r;
              return r
            }(t, n, o) : ae(t, fe, o, !0)
          },hr.lowerCase = mc,hr.lowerFirst = yc,hr.lt = ka,hr.lte = Ua,hr.max = function (t) {
            return t && t.length ? Fr(t, Mc, Qr) : i
          },hr.maxBy = function (t, n) {
            return t && t.length ? Fr(t, Ri(n, 2), Qr) : i
          },hr.mean = function (t) {
            return le(t, Mc)
          },hr.meanBy = function (t, n) {
            return le(t, Ri(n, 2))
          },hr.min = function (t) {
            return t && t.length ? Fr(t, Mc, lo) : i
          },hr.minBy = function (t, n) {
            return t && t.length ? Fr(t, Ri(n, 2), lo) : i
          },hr.stubArray = Fc,hr.stubFalse = Gc,hr.stubObject = function () {
            return {}
          },hr.stubString = function () {
            return ""
          },hr.stubTrue = function () {
            return !0
          },hr.multiply = Xc,hr.nth = function (t, n) {
            return t && t.length ? vo(t, Ba(n)) : i
          },hr.noConflict = function () {
            return In._ === this && (In._ = dn), this
          },hr.noop = Pc,hr.now = Qu,hr.pad = function (t, n, e) {
            t = $a(t);
            var r = (n = Ba(n)) ? je(t) : 0;
            if (!n || r >= n) return t;
            var o = (n - r) / 2;
            return mi(Ce(o), e) + t + mi(Ue(o), e)
          },hr.padEnd = function (t, n, e) {
            t = $a(t);
            var r = (n = Ba(n)) ? je(t) : 0;
            return n && r < n ? t + mi(n - r, e) : t
          },hr.padStart = function (t, n, e) {
            t = $a(t);
            var r = (n = Ba(n)) ? je(t) : 0;
            return n && r < n ? mi(n - r, e) + t : t
          },hr.parseInt = function (t, n, e) {
            return e || null == n ? n = 0 : n && (n = +n), He($a(t).replace(Pt, ""), n || 0)
          },hr.random = function (t, n, e) {
            if (e && "boolean" != typeof e && Ji(t, n, e) && (n = e = i), e === i && ("boolean" == typeof n ? (e = n, n = i) : "boolean" == typeof t && (e = t, t = i)), t === i && n === i ? (t = 0, n = 1) : (t = qa(t), n === i ? (n = t, t = 0) : n = qa(n)), t > n) {
              var r = t;
              t = n, n = r
            }
            if (e || t % 1 || n % 1) {
              var o = Xe();
              return Ve(t + o * (n - t + Mn("1e-" + ((o + "").length - 1))), n)
            }
            return Ao(t, n)
          },hr.reduce = function (t, n, e) {
            var r = va(t) ? ee : ge, o = arguments.length < 3;
            return r(t, Ri(n, 4), e, o, Cr)
          },hr.reduceRight = function (t, n, e) {
            var r = va(t) ? re : ge, o = arguments.length < 3;
            return r(t, Ri(n, 4), e, o, qr)
          },hr.repeat = function (t, n, e) {
            return n = (e ? Ji(t, n, e) : n === i) ? 1 : Ba(n), Oo($a(t), n)
          },hr.replace = function () {
            var t = arguments, n = $a(t[0]);
            return t.length < 3 ? n : n.replace(t[1], t[2])
          },hr.result = function (t, n, e) {
            var r = -1, o = (n = Jo(n, t)).length;
            for (o || (o = 1, t = i); ++r < o;) {
              var u = null == t ? i : t[fu(n[r])];
              u === i && (r = o, u = e), t = Ea(u) ? u.call(t) : u
            }
            return t
          },hr.round = Yc,hr.runInContext = t,hr.sample = function (t) {
            return (va(t) ? Er : Lo)(t)
          },hr.size = function (t) {
            if (null == t) return 0;
            if (ya(t)) return Ia(t) ? je(t) : t.length;
            var n = Fi(t);
            return n == Y || n == et ? t.size : so(t).length
          },hr.snakeCase = wc,hr.some = function (t, n, e) {
            var r = va(t) ? oe : Do;
            return e && Ji(t, n, e) && (n = i), r(t, Ri(n, 3))
          },hr.sortedIndex = function (t, n) {
            return zo(t, n)
          },hr.sortedIndexBy = function (t, n, e) {
            return Io(t, n, Ri(e, 2))
          },hr.sortedIndexOf = function (t, n) {
            var e = null == t ? 0 : t.length;
            if (e) {
              var r = zo(t, n);
              if (r < e && ha(t[r], n)) return r
            }
            return -1
          },hr.sortedLastIndex = function (t, n) {
            return zo(t, n, !0)
          },hr.sortedLastIndexBy = function (t, n, e) {
            return Io(t, n, Ri(e, 2), !0)
          },hr.sortedLastIndexOf = function (t, n) {
            if (null == t ? 0 : t.length) {
              var e = zo(t, n, !0) - 1;
              if (ha(t[e], n)) return e
            }
            return -1
          },hr.startCase = bc,hr.startsWith = function (t, n, e) {
            return t = $a(t), e = null == e ? 0 : Ir(Ba(e), 0, t.length), n = ko(n), t.slice(e, e + n.length) == n
          },hr.subtract = Kc,hr.sum = function (t) {
            return t && t.length ? _e(t, Mc) : 0
          },hr.sumBy = function (t, n) {
            return t && t.length ? _e(t, Ri(n, 2)) : 0
          },hr.template = function (t, n, e) {
            var r = hr.templateSettings;
            e && Ji(t, n, e) && (n = i), t = $a(t), n = Ha({}, n, r, Ni);
            var o, u, a = Ha({}, n.imports, r.imports, Ni), c = oc(a), s = me(a, c), f = 0, l = n.interpolate || Yt,
              p = "__p += '",
              h = en((n.escape || Yt).source + "|" + l.source + "|" + (l === Tt ? Ft : Yt).source + "|" + (n.evaluate || Yt).source + "|$", "g"),
              g = "//# sourceURL=" + (ln.call(n, "sourceURL") ? (n.sourceURL + "").replace(/[\r\n]/g, " ") : "lodash.templateSources[" + ++Nn + "]") + "\n";
            t.replace(h, (function (n, e, r, i, a, c) {
              return r || (r = i), p += t.slice(f, c).replace(Kt, Ee), e && (o = !0, p += "' +\n__e(" + e + ") +\n'"), a && (u = !0, p += "';\n" + a + ";\n__p += '"), r && (p += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), f = c + n.length, n
            })), p += "';\n";
            var _ = ln.call(n, "variable") && n.variable;
            _ || (p = "with (obj) {\n" + p + "\n}\n"), p = (u ? p.replace(yt, "") : p).replace(wt, "$1").replace(bt, "$1;"), p = "function(" + (_ || "obj") + ") {\n" + (_ ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (o ? ", __e = _.escape" : "") + (u ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + p + "return __p\n}";
            var d = Lc((function () {
              return Qt(c, g + "return " + p).apply(i, s)
            }));
            if (d.source = p, Oa(d)) throw d;
            return d
          },hr.times = function (t, n) {
            if ((t = Ba(t)) < 1 || t > I) return [];
            var e = k, r = Ve(t, k);
            n = Ri(n), t -= k;
            for (var o = de(r, n); ++e < t;) n(e);
            return o
          },hr.toFinite = qa,hr.toInteger = Ba,hr.toLength = Fa,hr.toLower = function (t) {
            return $a(t).toLowerCase()
          },hr.toNumber = Ga,hr.toSafeInteger = function (t) {
            return t ? Ir(Ba(t), -I, I) : 0 === t ? t : 0
          },hr.toString = $a,hr.toUpper = function (t) {
            return $a(t).toUpperCase()
          },hr.trim = function (t, n, e) {
            if ((t = $a(t)) && (e || n === i)) return t.replace(It, "");
            if (!t || !(n = ko(n))) return t;
            var r = De(t), o = De(n);
            return Xo(r, we(r, o), be(r, o) + 1).join("")
          },hr.trimEnd = function (t, n, e) {
            if ((t = $a(t)) && (e || n === i)) return t.replace(Rt, "");
            if (!t || !(n = ko(n))) return t;
            var r = De(t);
            return Xo(r, 0, be(r, De(n)) + 1).join("")
          },hr.trimStart = function (t, n, e) {
            if ((t = $a(t)) && (e || n === i)) return t.replace(Pt, "");
            if (!t || !(n = ko(n))) return t;
            var r = De(t);
            return Xo(r, we(r, De(n))).join("")
          },hr.truncate = function (t, n) {
            var e = x, r = T;
            if (xa(n)) {
              var o = "separator" in n ? n.separator : o;
              e = "length" in n ? Ba(n.length) : e, r = "omission" in n ? ko(n.omission) : r
            }
            var u = (t = $a(t)).length;
            if (Le(t)) {
              var a = De(t);
              u = a.length
            }
            if (e >= u) return t;
            var c = e - je(r);
            if (c < 1) return r;
            var s = a ? Xo(a, 0, c).join("") : t.slice(0, c);
            if (o === i) return s + r;
            if (a && (c += s.length - c), Da(o)) {
              if (t.slice(c).search(o)) {
                var f, l = s;
                for (o.global || (o = en(o.source, $a(Gt.exec(o)) + "g")), o.lastIndex = 0; f = o.exec(l);) var p = f.index;
                s = s.slice(0, p === i ? c : p)
              }
            } else if (t.indexOf(ko(o), c) != c) {
              var h = s.lastIndexOf(o);
              h > -1 && (s = s.slice(0, h))
            }
            return s + r
          },hr.unescape = function (t) {
            return (t = $a(t)) && Et.test(t) ? t.replace(At, ze) : t
          },hr.uniqueId = function (t) {
            var n = ++pn;
            return $a(t) + n
          },hr.upperCase = Ac,hr.upperFirst = Oc,hr.each = $u,hr.eachRight = Vu,hr.first = yu,Ic(hr, (Hc = {}, Jr(hr, (function (t, n) {
            ln.call(hr.prototype, n) || (Hc[n] = t)
          })), Hc), {chain: !1}),hr.VERSION = "4.17.15",Hn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], (function (t) {
            hr[t].placeholder = hr
          })),Hn(["drop", "take"], (function (t, n) {
            vr.prototype[t] = function (e) {
              e = e === i ? 1 : $e(Ba(e), 0);
              var r = this.__filtered__ && !n ? new vr(this) : this.clone();
              return r.__filtered__ ? r.__takeCount__ = Ve(e, r.__takeCount__) : r.__views__.push({
                size: Ve(e, k),
                type: t + (r.__dir__ < 0 ? "Right" : "")
              }), r
            }, vr.prototype[t + "Right"] = function (n) {
              return this.reverse()[t](n).reverse()
            }
          })),Hn(["filter", "map", "takeWhile"], (function (t, n) {
            var e = n + 1, r = e == j || 3 == e;
            vr.prototype[t] = function (t) {
              var n = this.clone();
              return n.__iteratees__.push({iteratee: Ri(t, 3), type: e}), n.__filtered__ = n.__filtered__ || r, n
            }
          })),Hn(["head", "last"], (function (t, n) {
            var e = "take" + (n ? "Right" : "");
            vr.prototype[t] = function () {
              return this[e](1).value()[0]
            }
          })),Hn(["initial", "tail"], (function (t, n) {
            var e = "drop" + (n ? "" : "Right");
            vr.prototype[t] = function () {
              return this.__filtered__ ? new vr(this) : this[e](1)
            }
          })),vr.prototype.compact = function () {
            return this.filter(Mc)
          },vr.prototype.find = function (t) {
            return this.filter(t).head()
          },vr.prototype.findLast = function (t) {
            return this.reverse().find(t)
          },vr.prototype.invokeMap = Eo((function (t, n) {
            return "function" == typeof t ? new vr(this) : this.map((function (e) {
              return ro(e, t, n)
            }))
          })),vr.prototype.reject = function (t) {
            return this.filter(ca(Ri(t)))
          },vr.prototype.slice = function (t, n) {
            t = Ba(t);
            var e = this;
            return e.__filtered__ && (t > 0 || n < 0) ? new vr(e) : (t < 0 ? e = e.takeRight(-t) : t && (e = e.drop(t)), n !== i && (e = (n = Ba(n)) < 0 ? e.dropRight(-n) : e.take(n - t)), e)
          },vr.prototype.takeRightWhile = function (t) {
            return this.reverse().takeWhile(t).reverse()
          },vr.prototype.toArray = function () {
            return this.take(k)
          },Jr(vr.prototype, (function (t, n) {
            var e = /^(?:filter|find|map|reject)|While$/.test(n), r = /^(?:head|last)$/.test(n),
              o = hr[r ? "take" + ("last" == n ? "Right" : "") : n], u = r || /^find/.test(n);
            o && (hr.prototype[n] = function () {
              var n = this.__wrapped__, a = r ? [1] : arguments, c = n instanceof vr, s = a[0], f = c || va(n),
                l = function (t) {
                  var n = o.apply(hr, ne([t], a));
                  return r && p ? n[0] : n
                };
              f && e && "function" == typeof s && 1 != s.length && (c = f = !1);
              var p = this.__chain__, h = !!this.__actions__.length, g = u && !p, _ = c && !h;
              if (!u && f) {
                n = _ ? n : new vr(this);
                var d = t.apply(n, a);
                return d.__actions__.push({func: qu, args: [l], thisArg: i}), new dr(d, p)
              }
              return g && _ ? t.apply(this, a) : (d = this.thru(l), g ? r ? d.value()[0] : d.value() : d)
            })
          })),Hn(["pop", "push", "shift", "sort", "splice", "unshift"], (function (t) {
            var n = un[t], e = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(t);
            hr.prototype[t] = function () {
              var t = arguments;
              if (r && !this.__chain__) {
                var o = this.value();
                return n.apply(va(o) ? o : [], t)
              }
              return this[e]((function (e) {
                return n.apply(va(e) ? e : [], t)
              }))
            }
          })),Jr(vr.prototype, (function (t, n) {
            var e = hr[n];
            if (e) {
              var r = e.name + "";
              ln.call(or, r) || (or[r] = []), or[r].push({name: n, func: e})
            }
          })),or[gi(i, m).name] = [{name: "wrapper", func: i}],vr.prototype.clone = function () {
            var t = new vr(this.__wrapped__);
            return t.__actions__ = ri(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = ri(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = ri(this.__views__), t
          },vr.prototype.reverse = function () {
            if (this.__filtered__) {
              var t = new vr(this);
              t.__dir__ = -1, t.__filtered__ = !0
            } else (t = this.clone()).__dir__ *= -1;
            return t
          },vr.prototype.value = function () {
            var t = this.__wrapped__.value(), n = this.__dir__, e = va(t), r = n < 0, o = e ? t.length : 0,
              i = function (t, n, e) {
                var r = -1, o = e.length;
                for (; ++r < o;) {
                  var i = e[r], u = i.size;
                  switch (i.type) {
                    case"drop":
                      t += u;
                      break;
                    case"dropRight":
                      n -= u;
                      break;
                    case"take":
                      n = Ve(n, t + u);
                      break;
                    case"takeRight":
                      t = $e(t, n - u)
                  }
                }
                return {start: t, end: n}
              }(0, o, this.__views__), u = i.start, a = i.end, c = a - u, s = r ? a : u - 1, f = this.__iteratees__,
              l = f.length, p = 0, h = Ve(c, this.__takeCount__);
            if (!e || !r && o == c && h == c) return Fo(t, this.__actions__);
            var g = [];
            t:for (; c-- && p < h;) {
              for (var _ = -1, d = t[s += n]; ++_ < l;) {
                var v = f[_], m = v.iteratee, y = v.type, w = m(d);
                if (y == D) d = w; else if (!w) {
                  if (y == j) continue t;
                  break t
                }
              }
              g[p++] = d
            }
            return g
          },hr.prototype.at = Bu,hr.prototype.chain = function () {
            return Cu(this)
          },hr.prototype.commit = function () {
            return new dr(this.value(), this.__chain__)
          },hr.prototype.next = function () {
            this.__values__ === i && (this.__values__ = Ca(this.value()));
            var t = this.__index__ >= this.__values__.length;
            return {done: t, value: t ? i : this.__values__[this.__index__++]}
          },hr.prototype.plant = function (t) {
            for (var n, e = this; e instanceof _r;) {
              var r = pu(e);
              r.__index__ = 0, r.__values__ = i, n ? o.__wrapped__ = r : n = r;
              var o = r;
              e = e.__wrapped__
            }
            return o.__wrapped__ = t, n
          },hr.prototype.reverse = function () {
            var t = this.__wrapped__;
            if (t instanceof vr) {
              var n = t;
              return this.__actions__.length && (n = new vr(this)), (n = n.reverse()).__actions__.push({
                func: qu,
                args: [xu],
                thisArg: i
              }), new dr(n, this.__chain__)
            }
            return this.thru(xu)
          },hr.prototype.toJSON = hr.prototype.valueOf = hr.prototype.value = function () {
            return Fo(this.__wrapped__, this.__actions__)
          },hr.prototype.first = hr.prototype.head,Cn && (hr.prototype[Cn] = function () {
            return this
          }),hr
        }();
        In._ = Ie, (o = function () {
          return Ie
        }.call(n, e, n, r)) === i || (r.exports = o)
      }).call(this)
    }).call(this, e(12), e(20)(t))
  }, function (t, n) {
    t.exports = {warnings: !1}
  }, function (t, n, e) {
    e(1);
    const r = e(0), o = e(8);
    e(2);

    function i(t) {
      let n = this;
      Object.assign(n, {
        bias: 2 * Math.random() - 1,
        squash: r.activation.LOGISTIC,
        activation: 0,
        state: 0,
        old: 0,
        mask: 1,
        delta_bias_previous: 0,
        delta_bias_total: 0,
        delta_bias: [],
        connections_incoming: [],
        connections_outgoing: [],
        connections_gated: [],
        connections_self: new o(n, n, 0),
        error_responsibility: 0,
        error_projected: 0,
        error_gated: 0, ...t
      }), n.activate = function (t, e) {
        if (null == e && "object" == typeof t && (e = t, t = void 0), e = e || {}, e = {trace: !0, ...e}, null != t && Number.isFinite(t)) return n.activation = t;
        const r = function () {
          n.state = n.connections_self.gain * n.connections_self.weight * n.state + n.bias;
          for (let t = 0; t < n.connections_incoming.length; t++) {
            const e = n.connections_incoming[t];
            n.state += e.from.activation * e.weight * e.gain
          }
          return n.state
        };
        if (e.trace) {
          n.old = n.state, n.state = r(), n.activation = n.squash(n.state) * n.mask, n.derivative = n.squash(n.state, !0);
          const t = [], e = [];
          for (let r = 0; r < n.connections_gated.length; r++) {
            const o = n.connections_gated[r];
            o.gain = n.activation;
            const i = t.indexOf(o.to);
            i > -1 ? e[i] += o.weight * o.from.activation : (t.push(o.to), e.push(o.weight * o.from.activation + (o.to.connections_self.gater === n ? o.to.old : 0)))
          }
          for (let r = 0; r < n.connections_incoming.length; r++) {
            const o = n.connections_incoming[r];
            o.elegibility = n.connections_self.gain * n.connections_self.weight * o.elegibility + o.from.activation * o.gain;
            for (let r = 0; r < t.length; r++) {
              const [i, u] = [t[r], e[r]], a = o.xtrace_nodes.indexOf(i);
              a > -1 ? o.xtrace_values[a] = i.connections_self.gain * i.connections_self.weight * o.xtrace_values[a] + n.derivative * o.elegibility * u : (o.xtrace_nodes.push(i), o.xtrace_values.push(n.derivative * o.elegibility * u))
            }
          }
          return n.activation
        }
        if ("input" === n.type) return n.activation = 0;
        n.state = r(), n.activation = n.squash(n.state);
        for (let t = 0; t < n.connections_gated.length; t++) n.connections_gated[t].gain = n.activation;
        return n.activation
      }, n.noTraceActivate = function (t) {
        return n.activate(t, {trace: !1})
      }, n.propagate = function (t, e) {
        if (null == e && "object" == typeof t && (e = t, t = void 0), e = e || {}, e = {
          momentum: 0,
          rate: .3,
          update: !0, ...e
        }, null != t && Number.isFinite(t)) n.error_responsibility = n.error_projected = t - n.activation; else {
          n.error_projected = 0;
          for (let t = 0; t < n.connections_outgoing.length; t++) {
            const e = n.connections_outgoing[t];
            n.error_projected += e.to.error_responsibility * e.weight * e.gain
          }
          n.error_projected *= n.derivative || 1, n.error_gated = 0;
          for (let t = 0; t < n.connections_gated.length; t++) {
            const e = n.connections_gated[t], r = e.to,
              o = (r.connections_self.gater === n ? r.old : 0) + e.weight * e.from.activation;
            n.error_gated += r.error_responsibility * o
          }
          n.error_gated *= n.derivative || 1, n.error_responsibility = n.error_projected + n.error_gated
        }
        for (let t = 0; t < n.connections_incoming.length; t++) {
          const r = n.connections_incoming[t];
          let o = n.error_projected * r.elegibility;
          for (let t = 0; t < r.xtrace_nodes.length; t++) {
            o += r.xtrace_nodes[t].error_responsibility * r.xtrace_values[t]
          }
          r.delta_weights_total += e.rate * o * n.mask, e.update && (r.delta_weights_total += e.momentum * r.delta_weights_previous, r.weight += r.delta_weights_total, r.delta_weights_previous = r.delta_weights_total, r.delta_weights_total = 0)
        }
        return n.delta_bias_total += e.rate * n.error_responsibility, e.update && (n.delta_bias_total += e.momentum * n.delta_bias_previous, n.bias += n.delta_bias_total, n.delta_bias_previous = n.delta_bias_total, n.delta_bias_total = 0), {
          responsibility: n.error_responsibility,
          projected: n.error_projected,
          gated: n.error_gated
        }
      }, n.connect = function (t, e, r) {
        if (null == t) throw new ReferenceError("Missing required parameter 'nodes'");
        if (null == r && "object" == typeof e && (r = e, e = void 0), r = r || {}, t instanceof i) {
          if (t === n) return n.connections_self.weight = e || 1, n.connections_self;
          if (n.isProjectingTo(t)) throw new ReferenceError("Node is already projecting to 'target'");
          {
            const i = new o(n, t, e, r);
            return n.connections_outgoing.push(i), t.connections_incoming.push(i), r.twosided && t.connect(n), i
          }
        }
        if (Array.isArray(t)) {
          const i = [];
          for (let u = 0; u < t.length; u++) {
            const a = new o(n, t[u], e, r);
            n.connections_outgoing.push(a), t[u].connections_incoming.push(a), i.push(a), r.twosided && t[u].connect(n)
          }
          return i
        }
        throw new TypeError(`Parameter 'target': Expected 'Node' or 'Node[]' - but recieved, ${t}`)
      }, n.disconnect = function (t, e) {
        if (null == t) throw new ReferenceError("Missing required parameter 'target'");
        if (e = e || {}, !(t instanceof i)) {
          if (Array.isArray(t)) {
            const r = [];
            for (let o = 0; o < t.length; o++) for (let i = 0; i < n.connections_outgoing.length; i++) {
              const u = n.connections_outgoing[i];
              if (u.to === t[o]) {
                n.connections_outgoing.splice(i, 1), u.to.connections_incoming.splice(u.to.connections_incoming.indexOf(u), 1), null != u.gater && u.gater.ungate(u), e.twosided && t[o].disconnect(n), r.push(u);
                break
              }
            }
            return r
          }
          throw new TypeError(`Parameter 'target': Expected 'Node' or 'Node[]' - but recieved, ${t}`)
        }
        if (t === n) return n.connections_self.weight = 0, n.connections_self;
        for (let r = 0; r < n.connections_outgoing.length; r++) {
          const o = n.connections_outgoing[r];
          if (o.to === t) return n.connections_outgoing.splice(r, 1), o.to.connections_incoming.splice(o.to.connections_incoming.indexOf(o), 1), null != o.gater && o.gater.ungate(o), e.twosided && t.disconnect(n), o
        }
      }, n.gate = function (t) {
        if (null == t) throw new ReferenceError("Missing required parameter 'connections'");
        if (Array.isArray(t)) for (let e = 0; e < t.length; e++) {
          const r = t[e];
          n.connections_gated.push(r), r.gater = n
        } else n.connections_gated.push(t), t.gater = n;
        return t
      }, n.ungate = function (t) {
        if (null == t) throw new ReferenceError("Missing required parameter 'connections'");
        if (Array.isArray(t)) for (let e = 0; e < t.length; e++) {
          const r = t[e];
          n.connections_gated.splice(n.connections_gated.indexOf(r), 1), r.gater = null, r.gain = 1
        } else n.connections_gated.splice(n.connections_gated.indexOf(t), 1), t.gater = null, t.gain = 1;
        return t
      }, n.clear = function () {
        for (let t = 0; t < n.connections_incoming.length; t++) {
          const e = n.connections_incoming[t];
          e.elegibility = 0, e.xtrace_nodes = [], e.xtrace_values = []
        }
        for (let t = 0; t < n.connections_gated.length; t++) {
          n.connections_gated[t].gain = 0
        }
        n.error_responsibility = n.error_projected = n.error_gated = 0, n.old = n.state = n.activation = 0
      }, n.mutate = function (t) {
        switch ((t = {method: Math.random() < .5 ? r.mutation.MOD_ACTIVATION : r.mutation.MOD_BIAS, ...t}).method) {
          case r.mutation.MOD_ACTIVATION:
            t.allowed ? n.squash = t.allowed[(e = t.allowed.length, o = t.allowed.indexOf(n.squash), (o + Math.floor(Math.random() * (e - 1)) + 1) % e)] : n.squash = r.activation[function (t, n) {
              return t[(t.indexOf(n) + Math.floor(Math.random() * (t.length - 1)) + 1) % t.length]
            }(Object.keys(r.activation), n.squash.name)];
            break;
          case r.mutation.MOD_BIAS:
            n.bias += Math.random() * (t.method.max - t.method.min) + t.method.min
        }
        var e, o
      }, n.isProjectingTo = function (t) {
        if (null == t) throw new ReferenceError("Missing required parameter 'nodes'");
        if (t === n) return 0 !== n.connections_self.weight;
        if (Array.isArray(t)) {
          let e = 0;
          for (let r = 0; r < t.length; r++) {
            const o = t[r];
            for (let t = 0; t < n.connections_outgoing.length; t++) if (n.connections_outgoing[t].to === o) {
              e++;
              break
            }
          }
          return t.length === e
        }
        for (let e = 0; e < n.connections_outgoing.length; e++) if (n.connections_outgoing[e].to === t) return !0;
        return !1
      }, n.isProjectedBy = function (t) {
        if (null == t) throw new ReferenceError("Missing required parameter 'nodes'");
        if (t === n) return 0 !== n.connections_self.weight;
        if (Array.isArray(t)) {
          let e = 0;
          for (let r = 0; r < t.length; r++) {
            const o = t[r];
            for (let t = 0; t < n.connections_incoming.length; t++) if (n.connections_incoming[t].from === o) {
              e++;
              break
            }
          }
          return t.length === e
        }
        for (let e = 0; e < n.connections_incoming.length; e++) if (n.connections_incoming[e].from === t) return !0;
        return !1
      }, n.toJSON = function () {
        return {bias: n.bias, type: n.type, squash: n.squash.name, mask: n.mask}
      }
    }

    i.fromJSON = function (t) {
      if (null == t) throw new ReferenceError("Missing required parameter 'json'");
      "string" == typeof t && (t = JSON.parse(t));
      const n = new i;
      return Object.assign(n, {...t}, {squash: r.activation[t.squash]}), n
    }, t.exports = i
  }, function (t, n, e) {
    const r = e(2), o = e(9), u = e(0), a = e(5), c = e(11), s = e(8), f = e(3), l = e(1), p = u.mutation;

    function h(t, n) {
      if (void 0 === t || void 0 === n) throw new TypeError("No input or output size given");
      const c = this;
      c.input_size = t, c.output_size = n, c.input = t, c.output = n, c.input_nodes = new Set, c.output_nodes = new Set, c.nodes = [], c.connections = [], c.gates = [];
      for (let n = 0; n < t; n++) {
        const t = new f({type: "input"});
        c.nodes.push(t), c.input_nodes.add(t)
      }
      for (let t = 0; t < n; t++) {
        const t = new f({type: "output"});
        c.nodes.push(t), c.output_nodes.add(t)
      }
      c.connect = function (t, n, e) {
        let r = t.connect(n, e);
        r instanceof s && (r = [r]);
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          c.connections.push(n)
        }
        return r
      };
      for (let t = 0; t < c.input_size; t++) for (var h = c.input_size; h < c.output_size + c.input_size; h++) {
        const n = (Math.random() - .5) * c.input_size * Math.sqrt(2 / c.input_size);
        c.connect(c.nodes[t], c.nodes[h], n)
      }
      c.activate = function (t, {dropout_rate: n = 0, trace: e = !0} = {}) {
        let r = 0;
        for (let n = 0; n < c.nodes.length && r !== c.input_nodes.size; n++) {
          const o = c.nodes[n];
          c.input_nodes.has(o) && o.activate(t[r++], {trace: e})
        }
        if (r !== t.length) throw Error(`There are ${r} input nodes, but ${t.length} inputs were passed`);
        c.nodes.forEach((t, r) => {
          c.input_nodes.has(t) || c.output_nodes.has(t) || (n && (t.mask = Math.random() < n ? 0 : 1), t.activate({trace: e}))
        });
        const o = [];
        for (let t = 0; t < c.nodes.length && o.length !== c.output_nodes.size; t++) {
          const n = c.nodes[t];
          c.output_nodes.has(n) && o.push(n.activate({trace: e}))
        }
        if (o.length !== c.output_nodes.size) throw Error(`There are ${c.output_nodes.size} output nodes, but ${o.length} outputs were passed`);
        return o
      }, c.noTraceActivate = function (t) {
        return c.activate(t, {trace: !1})
      }, c.propagate = function (t, n, e, r) {
        const o = c.output_size || c.output;
        c.input_size || c.input;
        if (void 0 === r || r.length !== o) throw new Error("Output target length should match network output length");
        let i = 0;
        for (let u = 0; i < o; u++) c.output_nodes.has(c.nodes[u]) && (c.nodes[u].propagate(r[i], {
          rate: t,
          momentum: n,
          update: e
        }), i++);
        for (let r = c.nodes.length - 1; r >= 0; r--) {
          const o = c.nodes[r];
          c.input_nodes.has(o) || c.output_nodes.has(o) || o.propagate({rate: t, momentum: n, update: e})
        }
        c.input_nodes.forEach(r => {
          r.propagate({rate: t, momentum: n, update: e})
        })
      }, c.clear = function () {
        for (let t = 0; t < c.nodes.length; t++) c.nodes[t].clear()
      }, c.clone = function () {
        return l.cloneDeep(c)
      }, c.disconnect = function (t, n) {
        const e = c.connections;
        for (let r = 0; r < e.length; r++) {
          const o = e[r];
          if (o.from === t && o.to === n) {
            null !== o.gater && c.ungate(o), e.splice(r, 1);
            break
          }
        }
        t.disconnect(n)
      }, c.gate = function (t, n) {
        if (-1 === c.nodes.indexOf(t)) throw new ReferenceError("This node is not part of the network!");
        null == n.gater ? (t.gate(n), c.gates.push(n)) : r.warnings && console.warn("This connection is already gated!")
      }, c.ungate = function (t) {
        const n = c.gates.indexOf(t);
        if (-1 === n) throw new Error("This connection is not gated!");
        c.gates.splice(n, 1), t.gater.ungate(t)
      }, c.remove = function (t) {
        const n = c.nodes.indexOf(t);
        if (-1 === n) throw new ReferenceError("This node does not exist in the network!");
        const e = [];
        c.disconnect(t, t);
        const r = [];
        l.forEachRight(t.connections_incoming, n => {
          p.SUB_NODE.keep_gates && null !== n.gater && n.gater !== t && e.push(n.gater), r.push(n.from), c.disconnect(n.from, t)
        });
        const o = [];
        l.forEachRight(t.connections_outgoing, n => {
          p.SUB_NODE.keep_gates && null !== n.gater && n.gater !== t && e.push(n.gater), o.push(n.to), c.disconnect(t, n.to)
        });
        const u = [];
        for (l.forEach(r, t => {
          l.forEach(o, n => {
            if (!t.isProjectingTo(n)) {
              const e = c.connect(t, n);
              u.push(e[0])
            }
          })
        }); e.length > 0 && u.length > 0;) {
          const t = e.shift(), n = Math.floor(Math.random() * u.length);
          c.gate(t, u[n]), u.splice(n, 1)
        }
        for (i = t.connections_gated.length - 1; i >= 0; i--) {
          const n = t.connections_gated[i];
          c.ungate(n)
        }
        c.nodes.splice(n, 1)
      }, c.possible = function (t) {
        const n = this;
        let e = [];
        switch (t.name) {
          case"SUB_NODE":
            return !!(e = l.filter(n.nodes, (function (t) {
              return !n.input_nodes.has(t) && !n.output_nodes.has(t)
            }))).length && e;
          case"ADD_CONN":
            for (let t = 0; t < n.nodes.length - n.output_size; t++) {
              const r = n.nodes[t];
              for (let o = Math.max(t + 1, n.input_size); o < n.nodes.length; o++) {
                const t = n.nodes[o];
                r.isProjectingTo(t) || e.push([r, t])
              }
            }
            return !!e.length && e;
          case"REMOVE_CONN":
          case"SUB_CONN":
            return l.each(n.connections, t => {
              t.from.connections_outgoing.length > 1 && t.to.connections_incoming.length > 1 && n.nodes.indexOf(t.to) > n.nodes.indexOf(t.from) && e.push(t)
            }), !!e.length && e;
          case"MOD_ACTIVATION":
            return !!(e = l.filter(n.nodes, t.mutateOutput ? t => "input" !== t.type : t => "input" !== t.type && "output" !== t.type)).length && e;
          case"ADD_SELF_CONN":
            for (let t = n.input_size; t < n.nodes.length; t++) {
              const r = n.nodes[t];
              0 === r.connections_self.weight && e.push(r)
            }
            return !!e.length && e;
          case"SUB_SELF_CONN":
            for (let t = 0; t < n.connections.length; t++) {
              const r = n.connections[t];
              r.from == r.to && e.push(r)
            }
            return !!e.length && e;
          case"ADD_GATE":
            return n.connections.forEach(t => {
              null === t.gater && e.push(t)
            }), !!e.length && e;
          case"SUB_GATE":
            return n.gates.length > 0 && [];
          case"ADD_BACK_CONN":
            for (let t = n.input_size; t < n.nodes.length; t++) {
              const r = n.nodes[t];
              for (let o = n.input_size; o < t; o++) {
                const t = n.nodes[o];
                r.isProjectingTo(t) || e.push([r, t])
              }
            }
            return !!e.length && e;
          case"SUB_BACK_CONN":
            return l.each(n.connections, t => {
              t.from.connections_outgoing.length > 1 && t.to.connections_incoming.length > 1 && n.nodes.indexOf(t.from) > n.nodes.indexOf(t.to) && e.push(t)
            }), !!e.length && e;
          case"SWAP_NODES": {
            if (n.nodes.length - 1 - n.input_size - (t.mutateOutput ? 0 : n.output_size) < 2) return !1;
            const r = t.mutateOutput ? t => "input" !== t.type : t => "input" !== t.type && "output" !== t.type;
            return (e = l.filter(n.nodes, r)).length >= 2 && e
          }
        }
      }, c.mutate = function (t, n) {
        if (void 0 === t) throw new Error("Mutate method is undefined!");
        const {maxNodes: e, maxConns: r, maxGates: o} = n || {}, i = () => {
          if (c.nodes.length <= c.input_nodes.size) throw new Error("Something went wrong. Total nodes is length is somehow less than size of inputs");
          return l.sample(c.connections)
        };
        switch (t.name) {
          case"ADD_NODE": {
            if (c.nodes.length >= e) return null;
            const t = new f({type: "hidden"});
            p.ADD_NODE.randomActivation && t.mutate(p.MOD_ACTIVATION);
            const n = i(), r = n.from, o = n.to;
            c.disconnect(r, o);
            let u = c.nodes.indexOf(r);
            u = u >= c.input_nodes.size - 1 ? u : c.input_nodes.size - 1, c.nodes.splice(u + 1, 0, t);
            const a = c.connect(r, t)[0], s = c.connect(t, o)[0], l = n.gater;
            return null != l && c.gate(l, Math.random() >= .5 ? a : s), c
          }
          case"SUB_NODE": {
            const n = c.possible(t);
            return n ? (c.remove(l.sample(n)), c) : null
          }
          case"ADD_CONN": {
            if (c.connections.length >= r) return null;
            const n = c.possible(t);
            if (n) {
              const t = n[Math.floor(Math.random() * n.length)];
              return c.connect(t[0], t[1]), c
            }
            return null
          }
          case"REMOVE_CONN":
          case"SUB_CONN": {
            const n = c.possible(t);
            if (n) {
              const t = n[Math.floor(Math.random() * n.length)];
              return c.disconnect(t.from, t.to), c
            }
            return null
          }
          case"MOD_WEIGHT":
            return i().weight += Math.random() * (t.max - t.min) + t.min, c;
          case"MOD_BIAS":
            if (c.nodes.length <= c.input_size) return null;
            return c.nodes[Math.floor(Math.random() * (c.nodes.length - c.input_size) + c.input_size)].mutate(t), c;
          case"MOD_ACTIVATION": {
            const n = c.possible(t);
            return n ? (l.sample(n).mutate(t), c) : null
          }
          case"ADD_SELF_CONN": {
            const n = c.possible(t);
            if (n) {
              const t = n[Math.floor(Math.random() * n.length)];
              return c.connect(t, t), c
            }
            return null
          }
          case"SUB_SELF_CONN": {
            const n = c.possible(t);
            if (n) {
              const t = n[Math.floor(Math.random() * n.length)];
              return c.disconnect(t.from, t.to), c
            }
            return null
          }
          case"ADD_GATE": {
            if (c.gates.length >= o) return null;
            const n = c.possible(t);
            if (n) {
              const t = c.nodes[Math.floor(Math.random() * (c.nodes.length - c.input_size) + c.input_size)],
                e = n[Math.floor(Math.random() * n.length)];
              return c.gate(t, e), c
            }
            return null
          }
          case"SUB_GATE":
            return c.possible(t) ? (c.ungate(c.gates[Math.floor(Math.random() * c.gates.length)]), c) : null;
          case"ADD_BACK_CONN": {
            const n = c.possible(t);
            if (n) {
              const t = n[Math.floor(Math.random() * n.length)];
              return c.connect(t[0], t[1]), c
            }
            return null
          }
          case"SUB_BACK_CONN": {
            const n = c.possible(t);
            if (n) {
              const t = n[Math.floor(Math.random() * n.length)];
              return c.disconnect(t.from, t.to), c
            }
            return null
          }
          case"SWAP_NODES": {
            const n = c.possible(t);
            if (n) {
              const t = l.sample(n), e = l.filter(n, (n, e) => n !== t), r = l.sample(e), o = t.bias, i = t.squash;
              return t.bias = r.bias, t.squash = r.squash, r.bias = o, r.squash = i, c
            }
            return null
          }
        }
      }, c.mutateRandom = function (t, n) {
        const e = Array.isArray(t) && t.length ? l.cloneDeep(t) : l.cloneDeep(u.mutation.ALL);
        for (; e.length > 0;) {
          const t = Math.floor(Math.random() * e.length), r = e[t];
          if (c.mutate(r, n)) return c;
          e.splice(t, 1)
        }
        return null
      }, c.train = function (t, n) {
        if (t[0].input.length !== (c.input_size || c.input) || t[0].output.length !== (c.output_size || c.output)) throw new Error("Dataset input/output size should be same as network input/output size!");
        let e;
        r.warnings && n && (void 0 === n.rate && console.warn("Using default learning rate, please define a rate!"), void 0 === n.iterations && console.warn("No target iterations given, running until error is reached!")), n && (n = l.defaults(n, {
          batch_size: n.batchSize,
          rate_policy: n.ratePolicy,
          cross_validate: n.crossValidate
        })), e = (n = l.defaults(n, {
          iterations: 1e3,
          error: .05,
          cost: u.cost.MSE,
          rate: .3,
          dropout: 0,
          momentum: 0,
          batch_size: 1,
          rate_policy: u.rate.FIXED
        })).cross_validate ? n.cross_validate.test_error : n.error ? n.error : -1;
        const o = n.rate, i = Date.now();
        if (n.batch_size > t.length) throw new Error("Batch size must be smaller or equal to dataset length!");
        if (void 0 === n.iterations && void 0 === n.error) throw new Error("At least one of the following options must be specified: error, iterations");
        let a, s, f;
        void 0 === n.iterations && (n.iterations = 0), n.cross_validate ? (a = Math.ceil((1 - n.cross_validate.testSize) * t.length), s = t.slice(0, a), f = t.slice(a)) : s = t;
        let p = o, h = 0, g = 1;
        for (var _, d, v; g > e && (0 === n.iterations || h < n.iterations);) {
          h++, p = n.rate_policy(o, h);
          const e = c._trainOneEpoch(s, n.batch_size, p, n.momentum, n.cost, {dropout_rate: n.dropout});
          if (n.clear && c.clear(), n.cross_validate ? (g = c.test(f, n.cost).error, n.clear && c.clear()) : g = e, n.shuffle) for (_ = t.length; _; d = Math.floor(Math.random() * _), v = t[--_], t[_] = t[d], t[d] = v) ;
          n.log && h % n.log == 0 && console.log("iteration number", h, "error", g, "training rate", p), n.schedule && h % n.schedule.iterations == 0 && n.schedule.function({
            error: g,
            iteration_number: h
          })
        }
        return n.clear && c.clear(), {error: g, iterations: h, time: Date.now() - i}
      }, c._trainOneEpoch = function (t, n, e, r, o, {dropout_rate: i = .5} = {}) {
        let u = 0;
        for (var a = 0; a < t.length; a++) {
          const s = t[a].input, f = t[a].output, l = !((a + 1) % n != 0 && a + 1 !== t.length),
            p = c.activate(s, {dropout_rate: i});
          c.propagate(e, r, l, f), u += o(f, p)
        }
        return u / t.length
      }, c.test = function (t, n = u.cost.MSE) {
        let e = 0, r = Date.now();
        return l.times(t.length, r => {
          let o = t[r].input, i = t[r].output, u = c.activate(o, {trace: !1});
          e += n(i, u)
        }), {error: e /= t.length, time: Date.now() - r}
      }, c.toJSON = function () {
        const t = {
          nodes: [],
          connections: [],
          input_nodes: [],
          output_nodes: [],
          input_size: c.input_size,
          output_size: c.output_size,
          dropout: c.dropout,
          input: c.input_size,
          output: c.output_size
        };
        let n;
        for (n = 0; n < c.nodes.length; n++) c.nodes[n].index = n, c.input_nodes.has(c.nodes[n]) && t.input_nodes.push(n), c.output_nodes.has(c.nodes[n]) && t.output_nodes.push(n);
        for (n = 0; n < c.nodes.length; n++) {
          const e = c.nodes[n], r = e.toJSON();
          if (r.index = n, t.nodes.push(r), 0 !== e.connections_self.weight) {
            const r = e.connections_self.toJSON();
            r.from = n, r.to = n, r.gater = null != e.connections_self.gater ? e.connections_self.gater.index : null, t.connections.push(r)
          }
        }
        for (n = 0; n < c.connections.length; n++) {
          const e = c.connections[n], r = e.toJSON();
          r.from = e.from.index, r.to = e.to.index, r.gater = null != e.gater ? e.gater.index : null, t.connections.push(r)
        }
        return t
      }, c.set = function (t) {
        c.nodes.forEach(n => Object.assign(n, {bias: t.bias, squash: t.squash}))
      }, c.evolve = async function (t, n) {
        if (t[0].input.length !== (c.input_size || c.input) || t[0].output.length !== (c.output_size || c.output)) throw new Error("Dataset input/output size should be same as network input/output size!");
        let r;
        void 0 === (n = n || {}).iterations && void 0 === n.error ? (n.iterations = 1e3, r = .05) : n.iterations ? r = -1 : n.error && (r = n.error, n.iterations = 0), n = l.defaults(n, {
          fitness_population: n.fitnessPopulation,
          max_nodes: n.maxNodes,
          max_connections: n.maxConns,
          max_gates: n.maxGates = 1 / 0,
          mutation_selection: n.mutationSelection,
          efficient_mutation: n.efficientMutation
        }), n = l.defaults(n, {
          threads: "undefined" == typeof window ? e(27).cpus().length : navigator.hardwareConcurrency,
          growth: void 0 !== n.growth ? n.growth : 1e-4,
          cost: u.cost.MSE,
          amount: 1,
          fitness_population: !1,
          max_nodes: 1 / 0,
          max_connections: 1 / 0,
          max_gates: 1 / 0,
          efficient_mutation: !1
        });
        const i = Date.now(), a = o.serializeDataSet(t), s = [];
        if ("undefined" == typeof window) for (var f = 0; f < n.threads; f++) s.push(new o.workers.node.TestWorker(a, n.cost)); else for (f = 0; f < n.threads; f++) s.push(new o.workers.browser.TestWorker(a, n.cost));
        n.fitness = function (t, e) {
          return new Promise((t, r) => {
            const o = e.slice();
            let i = 0;
            const u = function (e) {
              if (!o.length) return void (++i === n.threads && t());
              const r = o.shift();
              e.evaluate(r).then((function (t) {
                r.score = -t, r.score -= (r.nodes.length - r.input_size - r.output_size + r.connections.length + r.gates.length) * n.growth, r.score = isNaN(parseFloat(t)) ? -1 / 0 : r.score, u(e)
              }))
            };
            for (let t = 0; t < s.length; t++) u(s[t])
          })
        }, n.fitness_population = !0, n.network = this, n.input = c.input_size, n.output = c.output_size;
        const p = new g(t, n);
        let h, _ = -1 / 0, d = -1 / 0;
        for (; _ < -r && (0 === n.iterations || p.generation < n.iterations);) {
          const t = await p.evolve(), e = t.score;
          _ = e + (t.nodes.length - t.input - t.output + t.connections.length + t.gates.length) * n.growth, e > d && (d = e, h = t), n.log && p.generation % n.log == 0 && console.log("iteration", p.generation, "fitness", e, "error", -_), n.schedule && p.generation % n.schedule.iterations == 0 && n.schedule.function({
            fitness: e,
            error: -_,
            iteration: p.generation
          })
        }
        for (let t = 0; t < s.length; t++) s[t].terminate();
        return void 0 !== h && (c.nodes = h.nodes, c.connections = h.connections, c.gates = h.gates, c.input_nodes = h.input_nodes, c.output_nodes = h.output_nodes, n.clear && c.clear()), {
          error: -_,
          iterations: p.generation,
          time: Date.now() - i
        }
      }, c.standalone = function () {
        const t = [], n = [], e = [], r = [], o = [];
        for (let t = 0; t < c.input_size; t++) {
          var u = c.nodes[t];
          n.push(u.activation), e.push(u.state)
        }
        for (r.push("for(var i = 0; i < input.length; i++) A[i] = input[i];"), i = 0; i < c.nodes.length; i++) c.nodes[i].index = i;
        for (i = c.input_size; i < c.nodes.length; i++) {
          let u = c.nodes[i];
          n.push(u.activation), e.push(u.state);
          let s = t.indexOf(u.squash.name);
          -1 === s && (s = t.length, t.push(u.squash.name), o.push(u.squash.toString()));
          const f = [];
          for (var a = 0; a < u.connections_incoming.length; a++) {
            const t = u.connections_incoming[a];
            t.from.index;
            let n = `A[${t.from.index}] * ${t.weight}`;
            null != t.gater && (n += ` * A[${t.gater.index}]`), f.push(n)
          }
          if (u.connections_self.weight) {
            const t = u.connections_self;
            let n = `S[${i}] * ${t.weight}`;
            null != t.gater && (n += ` * A[${t.gater.index}]`), f.push(n)
          }
          const l = `S[${i}] = ${f.join(" + ")} + ${u.bias};`,
            p = `A[${i}] = F[${s}](S[${i}])${u.mask ? "" : " * " + u.mask};`;
          r.push(l), r.push(p)
        }
        let s = [];
        for (i = c.nodes.length - c.output_size; i < c.nodes.length; i++) s.push(`A[${i}]`);
        s = `return [${s.join(",")}];`, r.push(s);
        let f = "";
        return f += `var F = [${o.toString()}];\r\n`, f += `var A = [${n.toString()}];\r\n`, f += `var S = [${e.toString()}];\r\n`, f += `function activate(input){\r\n${r.join("\r\n")}\r\n}`
      }, c.serialize = function () {
        const t = [], n = [], e = [],
          r = ["LOGISTIC", "TANH", "IDENTITY", "STEP", "RELU", "SOFTSIGN", "SINUSOID", "GAUSSIAN", "BENT_IDENTITY", "BIPOLAR", "BIPOLAR_SIGMOID", "HARD_TANH", "ABSOLUTE", "INVERSE", "SELU"];
        e.push(c.input_size), e.push(c.output_size);
        let o = 0;
        l.forEach(c.nodes, e => {
          e.index = o, o++, t.push(e.activation), n.push(e.state)
        });
        for (let t = c.input_size; t < c.nodes.length; t++) {
          const n = c.nodes[t];
          e.push(n.index), e.push(n.bias), e.push(r.indexOf(n.squash.name)), e.push(n.connections_self.weight), e.push(null == n.connections_self.gater ? -1 : n.connections_self.gater.index), l.times(n.connections_incoming.length, t => {
            const r = n.connections_incoming[t];
            e.push(r.from.index), e.push(r.weight), e.push(null == r.gater ? -1 : r.gater.index)
          }), e.push(-2)
        }
        return [t, n, e]
      }, c.addNodes = function (t) {
        t instanceof f ? t = [t] : t instanceof a && (t = t.nodes), c.nodes.push(...t);
        for (let n = 0; n < t.length; n++) c.connections.push(...t[n].connections_outgoing), c.gates.push(...t[n].connections_gated), t[n].connections_self.weight && c.connections.push(t[n].connections_self)
      }
    }

    h.fromJSON = function (t) {
      const n = new h(t.input_size, t.output_size);
      return n.dropout = t.dropout, n.nodes = [], n.connections = [], n.input_nodes = new Set, n.output_nodes = new Set, t.nodes.forEach((t, e) => {
        const r = f.fromJSON(t);
        r.index = e, n.nodes.push(r)
      }), t.connections.forEach(t => {
        const e = n.connect(n.nodes[t.from], n.nodes[t.to])[0];
        e.weight = t.weight, null != t.gater && n.gate(n.nodes[t.gater], e)
      }), t.input_nodes.forEach(t => n.input_nodes.add(n.nodes[t])), t.output_nodes.forEach(t => n.output_nodes.add(n.nodes[t])), n
    }, h.merge = function (t, n) {
      if (t = h.fromJSON(t.toJSON()), n = h.fromJSON(n.toJSON()), t.output_size !== n.input_size) throw new Error("Output size of network1 should be the same as the input size of network2!");
      let e;
      for (e = 0; e < n.connections.length; e++) {
        const r = n.connections[e];
        if ("input" === r.from.type) {
          let e = n.nodes.indexOf(r.from);
          r.from = t.nodes[t.nodes.length - 1 - e]
        }
      }
      for (e = n.input - 1; e >= 0; e--) n.nodes.splice(e, 1);
      for (e = t.nodes.length - t.output; e < t.nodes.length; e++) t.nodes[e].type = "hidden";
      return t.connections = t.connections.concat(n.connections), t.nodes = t.nodes.concat(n.nodes), t
    }, h.crossOver = function (t, n, e) {
      if (t.input_size !== n.input_size || t.output_size !== n.output_size) throw new Error("Networks don`t have the same input/output size!");
      const r = new h(t.input_size, t.output_size);
      r.connections = [], r.nodes = [], r.input_nodes = new Set, r.output_nodes = new Set;
      const o = t.score || 0, i = n.score || 0;
      let u;
      if (e || o === i) {
        const e = Math.max(t.nodes.length, n.nodes.length), r = Math.min(t.nodes.length, n.nodes.length);
        u = Math.floor(Math.random() * (e - r + 1) + r)
      } else u = o > i ? t.nodes.length : n.nodes.length;
      const a = t.input_size, c = t.output_size;
      let l;
      for (l = 0; l < t.nodes.length; l++) t.nodes[l].index = l;
      for (l = 0; l < n.nodes.length; l++) n.nodes[l].index = l;
      for (l = 0; l < u; l++) {
        let e, o = "";
        if (l < a) {
          o = "input";
          const r = Math.random() >= .5 ? t : n;
          let i = -1, u = -1;
          for (; i < l;) {
            if (++u >= r.nodes.length) throw RangeError("something is wrong with the size of the input");
            r.input_nodes.has(r.nodes[u]) && i++
          }
          e = r.nodes[u]
        } else if (l < a + c) {
          o = "output";
          const r = Math.random() >= .5 ? t : n;
          let i = -1, u = -1;
          for (; i < l - a;) {
            if (++u >= r.nodes.length) throw RangeError("something is wrong with the size of the output");
            r.output_nodes.has(r.nodes[u]) && i++
          }
          e = r.nodes[u]
        } else {
          let r;
          o = "hidden", r = l >= t.nodes.length ? n : l >= n.nodes.length ? t : Math.random() >= .5 ? t : n;
          const i = Math.floor(Math.random() * r.nodes.length);
          e = r.nodes[i]
        }
        const i = new f({bias: e.bias, squash: e.squash, type: e.type});
        "input" === o ? r.input_nodes.add(i) : "output" === o && r.output_nodes.add(i), r.nodes.push(i)
      }
      const p = {}, g = {};
      for (l = 0; l < t.connections.length; l++) {
        const n = t.connections[l],
          e = {weight: n.weight, from: n.from.index, to: n.to.index, gater: null != n.gater ? n.gater.index : -1};
        p[s.innovationID(e.from, e.to)] = e
      }
      for (l = 0; l < n.connections.length; l++) {
        const t = n.connections[l],
          e = {weight: t.weight, from: t.from.index, to: t.to.index, gater: null != t.gater ? t.gater.index : -1};
        g[s.innovationID(e.from, e.to)] = e
      }
      var _ = [], d = Object.keys(p), v = Object.keys(g);
      for (l = d.length - 1; l >= 0; l--) if (void 0 !== g[d[l]]) {
        const t = Math.random() >= .5 ? p[d[l]] : g[d[l]];
        _.push(t), g[d[l]] = void 0
      } else (o >= i || e) && _.push(p[d[l]]);
      if (i >= o || e) for (l = 0; l < v.length; l++) void 0 !== g[v[l]] && _.push(g[v[l]]);
      for (l = 0; l < _.length; l++) {
        let t = _[l];
        if (t.to < u && t.from < u) {
          const n = r.nodes[t.from], e = r.nodes[t.to], o = r.connect(n, e)[0];
          o.weight = t.weight, -1 !== t.gater && t.gater < u && r.gate(r.nodes[t.gater], o)
        }
      }
      return r
    }, h.architecture = {
      Construct: function (t) {
        const n = new h(0, 0);
        let e, r, o = [];
        for (e = 0; e < t.length; e++) if (t[e] instanceof a || t[e] instanceof c) for (r = 0; r < t[e].nodes.length; r++) o.push(t[e].nodes[r]), 0 === e ? n.input_nodes.add(t[e].nodes[r]) : e === t.length - 1 && n.output_nodes.add(t[e].nodes[r]); else t[e] instanceof f && o.push(t[e]);
        const i = l.reduce(o, (t, n) => t + ("output" === n.type), 0),
          u = l.reduce(o, (t, n) => t + ("input" === n.type), 0), s = [], p = [];
        for (e = o.length - 1; e >= 0; e--) "output" === o[e].type || !i && o[e].connections_outgoing.length + o[e].connections_gated.length === 0 ? (o[e].type = "output", n.output_size++, p.push(o[e]), o.splice(e, 1)) : "input" !== o[e].type && (u || o[e].connections_incoming.length) || (o[e].type = "input", n.input_size++, s.push(o[e]), o.splice(e, 1));
        if (n.input = n.input_size, n.output = n.output_size, o = s.concat(o).concat(p), 0 === n.input_size || 0 === n.output_size) throw new Error("Given nodes have no clear input/output node!");
        return n.addNodes(o), n
      }, Perceptron: function () {
        const t = Array.from(arguments);
        if (t.length < 3) throw new Error("You have to specify at least 3 layers");
        const n = [new a(t[0])];
        return l.times(t.length - 1, e => {
          const r = new a(t[e + 1]);
          n.push(r), n[e].connect(n[e + 1], u.connection.ALL_TO_ALL)
        }), h.architecture.Construct(n)
      }, Random: function (t, n, e, r) {
        r ? !r && l.isPlainObject(e) && (r = e, e = n, n = void 0) : (e = n, n = void 0), n = n || 0, r = l.defaults(r, {
          connections: 2 * n,
          backconnections: 0,
          selfconnections: 0,
          gates: 0
        });
        const o = new h(t, e);
        return l.times(n, () => o.mutate(u.mutation.ADD_NODE)), l.times(r.connections - n, () => o.mutate(u.mutation.ADD_CONN)), l.times(r.backconnections, () => o.mutate(u.mutation.ADD_BACK_CONN)), l.times(r.selfconnections, () => o.mutate(u.mutation.ADD_SELF_CONN)), l.times(r.gates, () => o.mutate(u.mutation.ADD_GATE)), o
      }, LSTM: function () {
        const t = Array.from(arguments), n = t.slice(-1)[0];
        let e, r;
        if ("number" == typeof n ? (e = t, r = {}) : (e = t.slice(t.length - 1), r = n), e.length < 3) throw new Error("You have to specify at least 3 layer sizes, one for each of 1.inputs, 2. hidden, 3. output");
        r = l.defaults(r, {
          memory_to_memory: !1,
          output_to_memory: !1,
          output_to_gates: !1,
          input_to_output: !0,
          input_to_deep: !0
        });
        const o = new a(e.shift());
        o.set({type: "input"});
        const i = new a(e.pop());
        i.set({type: "output"}), r.input_to_output && o.connect(i, u.connection.ALL_TO_ALL);
        const c = e, s = [];
        let f = o;
        l.times(c.length, t => {
          const n = c[t], e = new a(n), l = new a(n), p = new a(n), h = new a(n), g = t === c.length - 1 ? i : new a(n);
          e.set({bias: 1}), l.set({bias: 1}), h.set({bias: 1});
          const _ = f.connect(p, u.connection.ALL_TO_ALL);
          f.connect(e, u.connection.ALL_TO_ALL), f.connect(h, u.connection.ALL_TO_ALL), f.connect(l, u.connection.ALL_TO_ALL), p.connect(e, u.connection.ALL_TO_ALL), p.connect(l, u.connection.ALL_TO_ALL), p.connect(h, u.connection.ALL_TO_ALL);
          const d = p.connect(p, u.connection.ONE_TO_ONE), v = p.connect(g, u.connection.ALL_TO_ALL);
          if (e.gate(_, u.gating.INPUT), l.gate(d, u.gating.SELF), h.gate(v, u.gating.OUTPUT), r.input_to_deep && t > 0) {
            const t = o.connect(p, u.connection.ALL_TO_ALL);
            e.gate(t, u.gating.INPUT)
          }
          if (r.memory_to_memory) {
            const t = p.connect(p, u.connection.ALL_TO_ELSE);
            e.gate(t, u.gating.INPUT)
          }
          if (r.output_to_memory) {
            const t = i.connect(p, u.connection.ALL_TO_ALL);
            e.gate(t, u.gating.INPUT)
          }
          r.output_to_gates && (i.connect(e, u.connection.ALL_TO_ALL), i.connect(l, u.connection.ALL_TO_ALL), i.connect(h, u.connection.ALL_TO_ALL)), s.push(e), s.push(l), s.push(p), s.push(h), t !== c.length - 1 && s.push(g), f = g
        });
        const p = [];
        return p.push(o), l.forEach(s, t => p.push(t)), p.push(i), h.architecture.Construct(p)
      }, GRU: function () {
        const t = Array.from(arguments);
        if (t.length < 3) throw new Error("You have to specify at least 3 layer sizes");
        const n = new a(t.shift(), "input"), e = new a(t.pop(), "output"), r = t, o = [];
        o.push(n);
        let i = n;
        for (var u = 0; u < r.length; u++) {
          const t = c.GRU(r[u]);
          i.connect(t), i = t, o.push(t)
        }
        return i.connect(e), o.push(e), h.architecture.Construct(o)
      }, Hopfield: function (t) {
        const n = new a(t, "input"), e = new a(t, "output");
        return n.connect(e, u.connection.ALL_TO_ALL), e.set({squash: u.activation.STEP}), h.architecture.Construct([n, e])
      }, NARX: function (t, n, e, r, o) {
        Array.isArray(n) || (n = [n]);
        const i = [], a = c.Dense(t), s = c.Memory(t, r), f = [];
        for (let t = 0; t < n.length; t++) f.push(c.Dense(n[t]));
        const l = c.Dense(e), p = c.Memory(e, o);
        a.connect(f[0], u.connection.ALL_TO_ALL), a.connect(s, u.connection.ONE_TO_ONE, 1), i.push(a), s.connect(f[0], u.connection.ALL_TO_ALL), p.connect(f[0], u.connection.ALL_TO_ALL), i.push(s), i.push(p);
        for (let t = 0; t < f.length; t++) t < f.length - 1 ? f[t].connect(f[t + 1], u.connection.ALL_TO_ALL) : f[t].connect(l, u.connection.ALL_TO_ALL), i.push(f[t]);
        return l.connect(p, u.connection.ONE_TO_ONE, 1), i.push(l), a.set({type: "input"}), l.set({type: "output"}), h.architecture.Construct(i)
      }, Liquid: function () {
      }
    }, t.exports = h;
    const g = function (t, {
      generation: n = 0, input: e = 1, output: r = 1, equal: o = !0, clean: i = !1, population_size: a = 50, growth: c = 1e-4, cost: s = u.cost.MSE, amount: f = 1, elitism: p = 1, provenance: g = 0, mutation_rate: _ = .4, mutation_amount: d = 1, fitness_population: v = !1, fitness: m = function (n = t, e, r = 1, o = u.cost.MSE, i = 1e-4) {
        let a = 0;
        for (let t = 0; t < r; t++) a -= e.test(n, o).error;
        return a -= (e.nodes.length - e.input - e.output + e.connections.length + e.gates.length) * i, (a = isNaN(a) ? -1 / 0 : a) / r
      }, selection: y = u.selection.POWER, crossover: w = [u.crossover.SINGLE_POINT, u.crossover.TWO_POINT, u.crossover.UNIFORM, u.crossover.AVERAGE], mutation: b = u.mutation.FFW, efficientMutation: A = !1, template: O = new h(e, r), max_nodes: E = 1 / 0, maxConns: L = 1 / 0, maxGates: N = 1 / 0
    } = {}) {
      let x = this;
      l.assignIn(x, {
        generation: n,
        input: e,
        output: r,
        equal: o,
        clean: i,
        population_size: a,
        growth: c,
        cost: s,
        amount: f,
        elitism: p,
        provenance: g,
        mutation_rate: _,
        mutation_amount: d,
        fitness_population: v,
        fitness: m,
        selection: y,
        crossover: w,
        mutation: b,
        efficientMutation: A,
        template: O,
        max_nodes: E,
        maxConns: L,
        maxGates: N
      }), x.createPool = function (t, n) {
        return Array(n).fill(h.fromJSON({...t.toJSON(), score: void 0}))
      }, x.population = x.createPool(x.template, x.population_size), x.filterGenome = function (t, n, e, r) {
        let o = [...t];
        const i = function (t) {
          const n = e(t);
          if ("boolean" != typeof n) throw new Error("pickGenome must always return a boolean!");
          return n
        };
        if (r) {
          for (let n = 0; n < t.length; n++) if (i(o[n])) {
            const t = r(o[n]);
            if (!(t instanceof h)) throw new Error("adjustGenome must always return a network!");
            o[n] = t
          }
        } else for (let e = 0; e < t.length; e++) i(o[e]) && (o[e] = h.fromJSON(n.toJSON()));
        return o
      }, x.mutateRandom = function (t, n) {
        let e = n ? [...n] : [...x.mutation];
        e = e.filter((function (n) {
          return n !== u.mutation.ADD_NODE || t.nodes.length < x.maxNodes || n !== u.mutation.ADD_CONN || t.connections.length < x.maxConns || n !== u.mutation.ADD_GATE || t.gates.length < x.maxGates
        }));
        do {
          const n = e[Math.floor(Math.random() * e.length)];
          if (t.mutate(n)) return n;
          e = e.filter((function (t) {
            return t.name !== n.name
          }))
        } while (e && e.length > 0);
        return null
      }, x.evolve = async function (t, n, e) {
        if (x.elitism + x.provenance > x.population_size) throw new Error("Can`t evolve! Elitism + provenance exceeds population size!");
        t = t || x.dataset, void 0 === x.population[x.population.length - 1].score && await x.evaluate(t), n && (x.population = x.filterGenome(x.population, x.template, n, e)), x.sort();
        const r = [];
        for (let t = 0; t < x.elitism; t++) r.push(x.population[t]);
        const o = Array(x.provenance).fill(h.fromJSON(x.template.toJSON()));
        for (let t = 0; t < x.population_size - x.elitism - x.provenance; t++) o.push(x.getOffspring());
        x.population = o, x.mutate(), x.population.push(...r), await x.evaluate(t), n && (x.population = x.filterGenome(x.population, x.template, n, e)), x.sort();
        const i = h.fromJSON(x.population[0].toJSON());
        i.score = x.population[0].score;
        for (let t = 0; t < x.population.length; t++) x.population[t].score = void 0;
        return x.generation++, i
      }, x.getParent = function () {
        switch (x.selection.name) {
          case"POWER":
            x.population[0].score < x.population[1].score && x.sort();
            var t = Math.floor(Math.pow(Math.random(), x.selection.power) * x.population.length);
            return x.population[t];
          case"FITNESS_PROPORTIONATE":
            var n = 0, e = 0;
            for (let t = 0; t < x.population.length; t++) {
              var r = x.population[t].score;
              e = r < e ? r : e, n += r
            }
            n += (e = Math.abs(e)) * x.population.length;
            var o = Math.random() * n, i = 0;
            for (let t = 0; t < x.population.length; t++) {
              let n = x.population[t];
              if (o < (i += n.score + e)) return n
            }
            return x.population[Math.floor(Math.random() * x.population.length)];
          case"TOURNAMENT":
            if (x.selection.size > x.population_size) throw new Error("Your tournament size should be lower than the population size, please change methods.selection.TOURNAMENT.size");
            var u = [];
            for (let t = 0; t < x.selection.size; t++) {
              let t = x.population[Math.floor(Math.random() * x.population.length)];
              u.push(t)
            }
            u.sort((function (t, n) {
              return n.score - t.score
            }));
            for (let t = 0; t < x.selection.size; t++) if (Math.random() < x.selection.probability || t === x.selection.size - 1) return u[t]
        }
      }, x.getOffspring = function () {
        var t = x.getParent(), n = x.getParent();
        return h.crossOver(t, n, x.equal)
      }, x.mutate = function (t) {
        if (t) {
          for (let n = 0; n < x.population.length; n++) if (Math.random() <= x.mutation_rate) for (let e = 0; e < x.mutation_amount; e++) x.population[n].mutate(t)
        } else for (let t = 0; t < x.population.length; t++) if (Math.random() <= x.mutation_rate) for (let n = 0; n < x.mutation_amount; n++) x.mutateRandom(x.population[t], x.mutation)
      }, x.evaluate = async function (t) {
        if (t = t || x.dataset, x.fitness_population) {
          if (x.clear) for (let t = 0; t < x.population.length; t++) x.population[t].clear();
          await x.fitness(t, x.population)
        } else for (let n = 0; n < x.population.length; n++) {
          const e = x.population[n];
          x.clear && e.clear(), e.score = await x.fitness(t, e), x.population[n] = e
        }
        return x.sort(), x.population[0]
      }, x.sort = function () {
        x.population.sort((function (t, n) {
          return n.score - t.score
        }))
      }, x.getFittest = function () {
        return void 0 === x.population[x.population.length - 1].score && x.evaluate(), x.population[0].score < x.population[1].score && x.sort(), x.population[0]
      }, x.getAverage = function () {
        void 0 === x.population[x.population.length - 1].score && x.evaluate();
        let t = 0;
        for (let n = 0; n < x.population.length; n++) t += x.population[n].score;
        return t / x.population.length
      }, x.toJSON = function () {
        const t = [];
        for (let n = 0; n < x.population.length; n++) t.push(x.population[n].toJSON());
        return t
      }, x.fromJSON = function (t) {
        const n = [];
        for (let e = 0; e < t.length; e++) n.push(h.fromJSON(t[e]));
        x.population = n, x.population_size = n.length
      }
    }
  }, function (t, n, e) {
    const r = e(1), o = e(0), i = e(2), u = e(3);
    t.exports = function t(n) {
      const e = this;
      e.nodes = [], e.connections_self = [], e.connections_incoming = [], e.connections_outgoing = [];
      for (let t = 0; t < n; t++) e.nodes.push(new u);
      e.activate = function (t) {
        if (null != t && t.length !== e.nodes.length) throw new RangeError("Array with values should be same as the amount of nodes!");
        const n = [];
        for (let r = 0; r < e.nodes.length; r++) {
          const o = null == t ? e.nodes[r].activate() : e.nodes[r].activate(t[r]);
          n.push(o)
        }
        return n
      }, e.propagate = function (t, n) {
        if (!n && r.isPlainObject(t) && (n = t, t = void 0), null != t && t.length !== e.nodes.length) throw new RangeError("Array with values should be same as the amount of nodes!");
        const o = [];
        for (let r = e.nodes.length - 1; r >= 0; r--) null == t ? o.push(e.nodes[r].propagate(n)) : o.push(e.nodes[r].propagate(t[r], n));
        return o
      }, e.connect = function (t, n, r) {
        const a = !!t.nodes && e.nodes == t.nodes;
        null == n && (a ? (i.warnings && console.warn("No group connection specified, using ONE_TO_ONE"), n = o.connection.ONE_TO_ONE) : (i.warnings && console.warn("No group connection specified, using ALL_TO_ALL"), n = o.connection.ALL_TO_ALL));
        let c = [], s = [];
        if (c = e.output_nodes ? e.output_nodes : e.nodes, t.input_nodes) s = t.input_nodes; else if (t.nodes) s = t.nodes; else {
          if (!(t instanceof u)) throw new TypeError("Type of target not supported");
          s = [t]
        }
        if (n === o.connection.ONE_TO_ONE && c.length !== s.length) throw new RangeError("Method is one-to-one but there are unequal number of source and target nodes");
        const f = [];
        for (let t = 0; t < s.length; t++) {
          if (n === o.connection.ALL_TO_ELSE) {
            let n = !1;
            for (let e = 0; e < c.length; e++) if (s[t] == c[e]) {
              n = !0;
              break
            }
            if (n) continue
          }
          if (n === o.connection.ONE_TO_ONE) {
            let n = c[t].connect(s[t], r);
            f.push(n)
          } else for (let n = 0; n < c.length; n++) {
            let e = c[n].connect(s[t], r);
            f.push(e)
          }
        }
        for (let n = 0; n < f.length; n++) {
          const r = f[n];
          a ? e.connections_self.push(r) : (e.connections_outgoing.push(r), t.connections_incoming.push(r))
        }
        return f
      }, e.gate = function (t, n) {
        if (null == n) throw new TypeError("Please specify Gating.INPUT, Gating.OUTPUT");
        Array.isArray(t) || (t = [t]);
        const r = [], i = [];
        let u, a;
        for (u = 0; u < t.length; u++) {
          const n = t[u];
          r.includes(n.from) || r.push(n.from), i.includes(n.to) || i.push(n.to)
        }
        switch (n) {
          case o.gating.INPUT:
            for (u = 0; u < i.length; u++) {
              const n = i[u], r = e.nodes[u % e.nodes.length];
              for (a = 0; a < n.connections_incoming.length; a++) {
                const e = n.connections_incoming[a];
                t.includes(e) && r.gate(e)
              }
            }
            break;
          case o.gating.OUTPUT:
            for (u = 0; u < r.length; u++) {
              const n = r[u], o = e.nodes[u % this.nodes.length];
              for (a = 0; a < n.connections_outgoing.length; a++) {
                const e = n.connections_outgoing[a];
                t.includes(e) && o.gate(e)
              }
            }
            break;
          case o.gating.SELF:
            for (u = 0; u < r.length; u++) {
              const n = r[u], o = e.nodes[u % e.nodes.length];
              t.includes(n.connections_self) && o.gate(n.connections_self)
            }
        }
      }, e.set = function (t) {
        if ("object" != typeof t) throw TypeError("options_to_set has to be an object with the properties to set and the desired values");
        for (let n = 0; n < e.nodes.length; n++) Object.assign(e.nodes[n], t)
      }, e.disconnect = function (n, r) {
        if (r = r || !1, n instanceof t) for (let t = 0; t < e.nodes.length; t++) for (let o = 0; o < n.nodes.length; o++) e.nodes[t].disconnect(n.nodes[o], {twosided: r}), r && (e.connections_incoming = e.connections_incoming.filter(e => !!e && !(e.from === n.nodes[o] && e.to === this.nodes[t]))), e.connections_outgoing = e.connections_outgoing.filter(r => !!r && !(r.from === e.nodes[t] && r.to === n.nodes[o])); else if (n instanceof u) for (let t = 0; t < e.nodes.length; t++) e.nodes[t].disconnect(n, {twosided: r}), r && (e.connections_incoming = e.connections_incoming.filter(r => !(r.from === n && r.to === e.nodes[t]))), e.connections_outgoing = e.connections_outgoing.filter(r => !(r.from === e.nodes[t] && r.to === n))
      }, e.clear = function () {
        for (let t = 0; t < e.nodes.length; t++) e.nodes[t].clear();
        return e
      }, e.addNodes = function (n) {
        n instanceof u ? n = [n] : n instanceof t && (n = n.nodes), e.nodes.push(...n)
      }
    }
  }, function (t, n) {
    const e = {
      LOGISTIC: function (t, n) {
        const e = function (t) {
          const n = Number.MAX_VALUE;
          return t === 1 / 0 ? n : t === -1 / 0 ? -n : t
        };
        if (null == t) throw new ReferenceError("Parameter 'x' is required, but it was not defined");
        const r = n ? t => Math.exp(-t) / Math.pow(1 + Math.exp(-t), 2) : t => 1 / (1 + Math.exp(-t));
        return Array.isArray(t) ? t.map(e(r)) : e(r(t))
      }, TANH: function (t, n) {
        const e = function (t) {
          const n = Number.MAX_VALUE;
          return t === 1 / 0 ? n : t === -1 / 0 ? -n : t
        };
        if (null == t) throw new ReferenceError("Parameter 'x' is required, but it was not defined");
        const r = n ? t => 1 - Math.tanh(t) * Math.tanh(t) : t => Math.tanh(t);
        return Array.isArray(t) ? t.map(e(r)) : e(r(t))
      }, IDENTITY: function (t, n) {
        const e = function (t) {
          const n = Number.MAX_VALUE;
          return t === 1 / 0 ? n : t === -1 / 0 ? -n : t
        };
        if (null == t) throw new ReferenceError("Parameter 'x' is required, but it was not defined");
        const r = n ? t => 1 : t => t;
        return Array.isArray(t) ? t.map(e(r)) : e(r(t))
      }, STEP: function (t, n) {
        const e = function (t) {
          const n = Number.MAX_VALUE;
          return t === 1 / 0 ? n : t === -1 / 0 ? -n : t
        };
        if (null == t) throw new ReferenceError("Parameter 'x' is required, but it was not defined");
        const r = n ? t => 0 : t => t > 0 ? 1 : 0;
        return Array.isArray(t) ? t.map(e(r)) : e(r(t))
      }, RELU: function (t, n) {
        const e = function (t) {
          const n = Number.MAX_VALUE;
          return t === 1 / 0 ? n : t === -1 / 0 ? -n : t
        };
        if (null == t) throw new ReferenceError("Parameter 'x' is required, but it was not defined");
        const r = n ? t => t > 0 ? 1 : 0 : t => t > 0 ? t : 0;
        return Array.isArray(t) ? t.map(e(r)) : e(r(t))
      }, SOFTSIGN: function (t, n) {
        const e = function (t) {
          const n = Number.MAX_VALUE;
          return t === 1 / 0 ? n : t === -1 / 0 ? -n : t
        };
        if (null == t) throw new ReferenceError("Parameter 'x' is required, but it was not defined");
        const r = n ? t => t / ((1 + Math.abs(t)) * (1 + Math.abs(t))) : t => t / 1 + Math.abs(t);
        return Array.isArray(t) ? t.map(e(r)) : e(r(t))
      }, SINUSOID: function (t, n) {
        const e = function (t) {
          const n = Number.MAX_VALUE;
          return t === 1 / 0 ? n : t === -1 / 0 ? -n : t
        };
        if (null == t) throw new ReferenceError("Parameter 'x' is required, but it was not defined");
        const r = n ? t => Math.cos(t) : t => Math.sin(t);
        return Array.isArray(t) ? t.map(e(r)) : e(r(t))
      }, GAUSSIAN: function (t, n) {
        const e = function (t) {
          const n = Number.MAX_VALUE;
          return t === 1 / 0 ? n : t === -1 / 0 ? -n : t
        };
        if (null == t) throw new ReferenceError("Parameter 'x' is required, but it was not defined");
        const r = n ? t => -2 * t * Math.exp(-t * t) : t => Math.exp(-t * t);
        return Array.isArray(t) ? t.map(e(r)) : e(r(t))
      }, BENT_IDENTITY: function (t, n) {
        const e = function (t) {
          const n = Number.MAX_VALUE;
          return t === 1 / 0 ? n : t === -1 / 0 ? -n : t
        };
        if (null == t) throw new ReferenceError("Parameter 'x' is required, but it was not defined");
        const r = n ? t => t / (2 * Math.sqrt(t * t + 1)) + 1 : t => (Math.sqrt(t * t + 1) - 1) / 2 + t;
        return Array.isArray(t) ? t.map(e(r)) : e(r(t))
      }, BIPOLAR: function (t, n) {
        const e = function (t) {
          const n = Number.MAX_VALUE;
          return t === 1 / 0 ? n : t === -1 / 0 ? -n : t
        };
        if (null == t) throw new ReferenceError("Parameter 'x' is required, but it was not defined");
        const r = n ? t => 0 : t => t > 0 ? 1 : -1;
        return Array.isArray(t) ? t.map(e(r)) : e(r(t))
      }, BIPOLAR_SIGMOID: function (t, n) {
        const e = function (t) {
          const n = Number.MAX_VALUE;
          return t === 1 / 0 ? n : t === -1 / 0 ? -n : t
        };
        if (null == t) throw new ReferenceError("Parameter 'x' is required, but it was not defined");
        const r = n ? t => 2 * Math.exp(-t) / Math.pow(1 + Math.exp(-t), 2) : t => 2 / (1 + Math.exp(-t)) - 1;
        return Array.isArray(t) ? t.map(e(r)) : e(r(t))
      }, HARD_TANH: function (t, n) {
        const e = function (t) {
          const n = Number.MAX_VALUE;
          return t === 1 / 0 ? n : t === -1 / 0 ? -n : t
        };
        if (null == t) throw new ReferenceError("Parameter 'x' is required, but it was not defined");
        const r = n ? t => t > -1 && t < 1 ? 1 : 0 : t => Math.max(-1, Math.min(1, t));
        return Array.isArray(t) ? t.map(e(r)) : e(r(t))
      }, ABSOLUTE: function (t, n) {
        const e = function (t) {
          const n = Number.MAX_VALUE;
          return t === 1 / 0 ? n : t === -1 / 0 ? -n : t
        };
        if (null == t) throw new ReferenceError("Parameter 'x' is required, but it was not defined");
        const r = n ? t => t < 0 ? -1 : 1 : t => Math.abs(t);
        return Array.isArray(t) ? t.map(e(r)) : e(r(t))
      }, INVERSE: function (t, n) {
        const e = function (t) {
          const n = Number.MAX_VALUE;
          return t === 1 / 0 ? n : t === -1 / 0 ? -n : t
        };
        if (null == t) throw new ReferenceError("Parameter 'x' is required, but it was not defined");
        const r = n ? t => -1 : t => 1 - t;
        return Array.isArray(t) ? t.map(e(r)) : e(r(t))
      }, SELU: function (t, n) {
        const e = function (t) {
          const n = Number.MAX_VALUE;
          return t === 1 / 0 ? n : t === -1 / 0 ? -n : t
        };
        if (null == t) throw new ReferenceError("Parameter 'x' is required, but it was not defined");
        const r = 1.6732632423543772, o = 1.0507009873554805,
          i = n ? t => t > 0 ? o : ((t > 0 ? t : r * Math.exp(t) - r) + r) * o : t => (t > 0 ? t : r * Math.exp(t) - r) * o;
        return Array.isArray(t) ? t.map(e(i)) : e(i(t))
      }
    };
    t.exports = e
  }, function (t, n) {
    function e(t, n) {
      if (null == t || null == n) throw new ReferenceError("Missing at least one required parameters: `targets`, `outputs`");
      if (t = Array.isArray(t) ? t : [t], n = Array.isArray(n) ? n : [n], t.length !== n.length) throw new RangeError(`Required "targets.length === outputs.length"; Received "targets.length=${t.length}" & "outputs.length=${n.length}`);
      return [t, n]
    }

    const r = {
      CROSS_ENTROPY: function (t, n) {
        return [t, n] = e(t, n), n.reduce((function (e, r, o) {
          return e - (t[o] * Math.log(Math.max(n[o], 1e-15)) + (1 - t[o]) * Math.log(1 - Math.max(n[o], 1e-15)))
        }), 0) / n.length
      }, MSE: function (t, n) {
        return [t, n] = e(t, n), n.reduce((function (e, r, o) {
          return e + Math.pow(t[o] - n[o], 2)
        }), 0) / n.length
      }, BINARY: function (t, n) {
        return [t, n] = e(t, n), n.reduce((function (e, r, o) {
          return e + (Math.round(2 * t[o]) !== Math.round(2 * n[o]))
        }), 0)
      }, MAE: function (t, n) {
        return [t, n] = e(t, n), n.reduce((function (e, r, o) {
          return e + Math.abs(t[o] - n[o])
        }), 0) / n.length
      }, MAPE: function (t, n) {
        return [t, n] = e(t, n), n.reduce((function (e, r, o) {
          return e + Math.abs((n[o] - t[o]) / Math.max(t[o], 1e-15))
        }), 0) / n.length
      }, WAPE: function (t, n) {
        [t, n] = e(t, n);
        let r = 0, o = 0;
        for (let e = 0; e < n.length; e++) r += Math.abs(t[e] - n[e]), o += t[e];
        return r / o
      }, MSLE: function (t, n) {
        return [t, n] = e(t, n), n.reduce((function (e, r, o) {
          return e + (Math.log(Math.max(t[o], 1e-15)) - Math.log(Math.max(n[o], 1e-15)))
        }), 0)
      }, HINGE: function (t, n) {
        return [t, n] = e(t, n), n.reduce((function (e, r, o) {
          return e + Math.max(0, 1 - t[o] * n[o])
        }), 0)
      }
    };
    t.exports = r
  }, function (t, n, e) {
    const r = e(1);

    function o(t, n, e, o) {
      if (null == t || null == n) throw new ReferenceError("Missing required parameter 'from' or 'to'");
      let i = this;
      !o && r.isPlainObject(e) && (o = e, e = void 0), o = o || {}, e = null == e ? 2 * Math.random() - 1 : e, Object.assign(i, {
        gain: 1,
        gater: null,
        elegibility: 0,
        delta_weights_previous: 0,
        delta_weights_total: 0,
        delta_weights: [],
        xtrace_nodes: [],
        xtrace_values: []
      }, o, {from: t, to: n, weight: e}), o.gater && o.gater.gate(i), i.toJSON = function () {
        return {weight: i.weight}
      }
    }

    o.innovationID = function (t, n) {
      if (null == t || null == n) throw new ReferenceError("Missing required parameter 'a' or 'b'");
      return .5 * (t + n) * (t + n + 1) + n
    }, t.exports = o
  }, function (t, n, e) {
    var r = {
      workers: e(22), serializeDataSet: function (t) {
        for (var n = [t[0].input.length, t[0].output.length], e = 0; e < t.length; e++) {
          var r;
          for (r = 0; r < n[0]; r++) n.push(t[e].input[r]);
          for (r = 0; r < n[1]; r++) n.push(t[e].output[r])
        }
        return n
      }, activateSerializedNetwork: function (t, n, e, r, o) {
        for (var i = 0; i < r[0]; i++) n[i] = t[i];
        for (i = 2; i < r.length; i++) {
          let t = r[i++], u = r[i++], a = r[i++], c = r[i++], s = r[i++];
          for (e[t] = (-1 === s ? 1 : n[s]) * c * e[t] + u; -2 !== r[i];) e[t] += n[r[i++]] * r[i++] * (-1 === r[i++] ? 1 : n[r[i - 1]]);
          n[t] = o[a](e[t])
        }
        var u = [];
        for (i = n.length - r[1]; i < n.length; i++) u.push(n[i]);
        return u
      }, deserializeDataSet: function (t) {
        for (var n = [], e = t[0] + t[1], r = 0; r < (t.length - 2) / e; r++) {
          let i = [];
          for (var o = 2 + r * e; o < 2 + r * e + t[0]; o++) i.push(t[o]);
          let u = [];
          for (o = 2 + r * e + t[0]; o < 2 + r * e + e; o++) u.push(t[o]);
          n.push(i), n.push(u)
        }
        return n
      }, testSerializedSet: function (t, n, e, r, o, i) {
        for (var u = 0, a = 0; a < t.length; a += 2) {
          let c = this.activateSerializedNetwork(t[a], e, r, o, i);
          u += n(t[a + 1], c)
        }
        return u / (t.length / 2)
      }, activations: [function (t) {
        return 1 / (1 + Math.exp(-t))
      }, function (t) {
        return Math.tanh(t)
      }, function (t) {
        return t
      }, function (t) {
        return t > 0 ? 1 : 0
      }, function (t) {
        return t > 0 ? t : 0
      }, function (t) {
        return t / (1 + Math.abs(t))
      }, function (t) {
        return Math.sin(t)
      }, function (t) {
        return Math.exp(-Math.pow(t, 2))
      }, function (t) {
        return (Math.sqrt(Math.pow(t, 2) + 1) - 1) / 2 + t
      }, function (t) {
        return t > 0 ? 1 : -1
      }, function (t) {
        return 2 / (1 + Math.exp(-t)) - 1
      }, function (t) {
        return Math.max(-1, Math.min(1, t))
      }, function (t) {
        return Math.abs(t)
      }, function (t) {
        return 1 - t
      }, function (t) {
        var n = 1.6732632423543772;
        return 1.0507009873554805 * (t > 0 ? t : n * Math.exp(t) - n)
      }]
    };
    for (var o in r) t.exports[o] = r[o]
  }, function (t, n) {
    var e, r, o = t.exports = {};

    function i() {
      throw new Error("setTimeout has not been defined")
    }

    function u() {
      throw new Error("clearTimeout has not been defined")
    }

    function a(t) {
      if (e === setTimeout) return setTimeout(t, 0);
      if ((e === i || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
      try {
        return e(t, 0)
      } catch (n) {
        try {
          return e.call(null, t, 0)
        } catch (n) {
          return e.call(this, t, 0)
        }
      }
    }

    !function () {
      try {
        e = "function" == typeof setTimeout ? setTimeout : i
      } catch (t) {
        e = i
      }
      try {
        r = "function" == typeof clearTimeout ? clearTimeout : u
      } catch (t) {
        r = u
      }
    }();
    var c, s = [], f = !1, l = -1;

    function p() {
      f && c && (f = !1, c.length ? s = c.concat(s) : l = -1, s.length && h())
    }

    function h() {
      if (!f) {
        var t = a(p);
        f = !0;
        for (var n = s.length; n;) {
          for (c = s, s = []; ++l < n;) c && c[l].run();
          l = -1, n = s.length
        }
        c = null, f = !1, function (t) {
          if (r === clearTimeout) return clearTimeout(t);
          if ((r === u || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
          try {
            r(t)
          } catch (n) {
            try {
              return r.call(null, t)
            } catch (n) {
              return r.call(this, t)
            }
          }
        }(t)
      }
    }

    function g(t, n) {
      this.fun = t, this.array = n
    }

    function _() {
    }

    o.nextTick = function (t) {
      var n = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var e = 1; e < arguments.length; e++) n[e - 1] = arguments[e];
      s.push(new g(t, n)), 1 !== s.length || f || a(h)
    }, g.prototype.run = function () {
      this.fun.apply(null, this.array)
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = _, o.addListener = _, o.once = _, o.off = _, o.removeListener = _, o.removeAllListeners = _, o.emit = _, o.prependListener = _, o.prependOnceListener = _, o.listeners = function (t) {
      return []
    }, o.binding = function (t) {
      throw new Error("process.binding is not supported")
    }, o.cwd = function () {
      return "/"
    }, o.chdir = function (t) {
      throw new Error("process.chdir is not supported")
    }, o.umask = function () {
      return 0
    }
  }, function (t, n, e) {
    e(1);
    const r = e(0), o = (e(3), e(5));

    class i extends o {
      constructor() {
        super(...arguments), this.input_nodes = [], this.output_nodes = []
      }

      static Dense(t) {
        const n = new i(t);
        return n.input_nodes = n.nodes, n.output_nodes = n.nodes, n
      }

      static LSTM(t) {
        const n = new i, e = new o(t), u = new o(t), a = new o(t), c = new o(t), s = new o(t), f = new o(t);
        u.set({bias: 1}), a.set({bias: 1}), s.set({bias: 1}), c.connect(u, r.connection.ALL_TO_ALL), c.connect(a, r.connection.ALL_TO_ALL), c.connect(s, r.connection.ALL_TO_ALL);
        const l = c.connect(c, r.connection.ONE_TO_ONE), p = c.connect(f, r.connection.ALL_TO_ALL);
        e.connect(c, r.connection.ALL_TO_ALL), e.connect(s, r.connection.ALL_TO_ALL), e.connect(a, r.connection.ALL_TO_ALL);
        const h = e.connect(u, r.connection.ALL_TO_ALL);
        return a.gate(l, r.gating.SELF), s.gate(p, r.gating.OUTPUT), u.gate(h, r.gating.INPUT), n.addNodes(e), n.addNodes(u), n.addNodes(a), n.addNodes(c), n.addNodes(s), n.addNodes(f), n.input_nodes.push(...e.nodes), n.output_nodes.push(...f.nodes), n
      }

      static GRU(t) {
        const n = new i, e = new o(t), u = new o(t), a = new o(t), c = new o(t), s = new o(t), f = new o(t),
          l = new o(t);
        l.set({
          bias: 0,
          squash: r.activation.IDENTITY,
          type: "constant"
        }), s.set({squash: r.activation.TANH}), a.set({
          bias: 0,
          squash: r.activation.INVERSE,
          type: "constant"
        }), u.set({bias: 1}), c.set({bias: 0}), e.connect(u, r.connection.ALL_TO_ALL), e.connect(c, r.connection.ALL_TO_ALL), e.connect(s, r.connection.ALL_TO_ALL), l.connect(u, r.connection.ALL_TO_ALL), u.connect(a, r.connection.ONE_TO_ONE, 1), l.connect(c, r.connection.ALL_TO_ALL);
        const p = l.connect(s, r.connection.ALL_TO_ALL);
        c.gate(p, r.gating.OUTPUT);
        const h = l.connect(f, r.connection.ALL_TO_ALL), g = s.connect(f, r.connection.ALL_TO_ALL);
        return u.gate(h, r.gating.OUTPUT), a.gate(g, r.gating.OUTPUT), f.connect(l, r.connection.ONE_TO_ONE, 1), n.addNodes(e), n.addNodes(u), n.addNodes(a), n.addNodes(c), n.addNodes(s), n.addNodes(f), n.addNodes(l), n.input_nodes.push(...e.nodes), n.output_nodes.push(...f.nodes), n
      }

      static Memory(t, n) {
        const e = new i, u = new o(t);
        let a = u;
        const c = [];
        for (let e = 0; e < n; e++) {
          const n = new o(t);
          n.set({
            squash: r.activation.IDENTITY,
            bias: 0,
            type: "constant"
          }), a.connect(n, r.connection.ONE_TO_ONE, 1), c.push(n), a = n
        }
        return e.input_nodes.push(...u.nodes), e.output_nodes.push(...c.slice(-1)[0].nodes), c.reverse().forEach(t => e.addNodes(t)), e
      }
    }

    t.exports = i
  }, function (t, n) {
    var e;
    e = function () {
      return this
    }();
    try {
      e = e || new Function("return this")()
    } catch (t) {
      "object" == typeof window && (e = window)
    }
    t.exports = e
  }, function (t, n, e) {
    var r;
    const o = {
      activation: e(6),
      cost: e(7),
      methods: e(0),
      Connection: e(8),
      architect: e(21),
      Network: e(4),
      config: e(2),
      Group: e(5),
      Layer: e(11),
      Node: e(3),
      Neat: e(33),
      Population: e(34),
      GAN: e(35),
      multi: e(9)
    };
    var i;
    void 0 === (r = function () {
      return o
    }.apply(n, [])) || (t.exports = r), t.exports && (t.exports = o), "object" == typeof window && (i = window.carrot, o.ninja = function () {
      return window.carrot = i, o
    }, window.carrot = o)
  }, function (t, n, e) {
    const r = e(6), o = {
      ADD_NODE: {name: "ADD_NODE", randomActivation: !0},
      SUB_NODE: {name: "SUB_NODE", keep_gates: !0},
      ADD_CONN: {name: "ADD_CONN"},
      SUB_CONN: {name: "REMOVE_CONN"},
      MOD_WEIGHT: {name: "MOD_WEIGHT", min: -1, max: 1},
      MOD_BIAS: {name: "MOD_BIAS", min: -1, max: 1},
      MOD_ACTIVATION: {
        name: "MOD_ACTIVATION",
        mutateOutput: !1,
        allowed: [r.LOGISTIC, r.TANH, r.RELU, r.IDENTITY, r.STEP, r.SOFTSIGN, r.SINUSOID, r.GAUSSIAN, r.BENT_IDENTITY, r.BIPOLAR, r.BIPOLAR_SIGMOID, r.HARD_TANH, r.ABSOLUTE, r.INVERSE, r.SELU]
      },
      ADD_SELF_CONN: {name: "ADD_SELF_CONN"},
      SUB_SELF_CONN: {name: "SUB_SELF_CONN"},
      ADD_GATE: {name: "ADD_GATE"},
      SUB_GATE: {name: "SUB_GATE"},
      ADD_BACK_CONN: {name: "ADD_BACK_CONN"},
      SUB_BACK_CONN: {name: "SUB_BACK_CONN"},
      SWAP_NODES: {name: "SWAP_NODES", mutateOutput: !1}
    };
    o.ALL = [o.ADD_NODE, o.SUB_NODE, o.ADD_CONN, o.SUB_CONN, o.MOD_WEIGHT, o.MOD_BIAS, o.MOD_ACTIVATION, o.ADD_GATE, o.SUB_GATE, o.ADD_SELF_CONN, o.SUB_SELF_CONN, o.ADD_BACK_CONN, o.SUB_BACK_CONN, o.SWAP_NODES], o.FFW = [o.ADD_NODE, o.SUB_NODE, o.ADD_CONN, o.SUB_CONN, o.MOD_WEIGHT, o.MOD_BIAS, o.MOD_ACTIVATION, o.SWAP_NODES], t.exports = o
  }, function (t, n) {
    t.exports = {
      FITNESS_PROPORTIONATE: {name: "FITNESS_PROPORTIONATE"},
      POWER: {name: "POWER", power: 4},
      TOURNAMENT: {name: "TOURNAMENT", size: 5, probability: .5}
    }
  }, function (t, n) {
    t.exports = {
      SINGLE_POINT: {name: "SINGLE_POINT", config: [.4]},
      TWO_POINT: {name: "TWO_POINT", config: [.4, .9]},
      UNIFORM: {name: "UNIFORM"},
      AVERAGE: {name: "AVERAGE"}
    }
  }, function (t, n) {
    t.exports = {OUTPUT: {name: "OUTPUT"}, INPUT: {name: "INPUT"}, SELF: {name: "SELF"}}
  }, function (t, n) {
    t.exports = {ALL_TO_ALL: {name: "OUTPUT"}, ALL_TO_ELSE: {name: "INPUT"}, ONE_TO_ONE: {name: "SELF"}}
  }, function (t, n) {
    const e = {
      FIXED: function (t) {
        if (null == t) throw new ReferenceError("Missing required parameter 'base_rate'");
        return t
      }, STEP: function (t, n, e) {
        if (null == t || null == n) throw new ReferenceError("Missing required parameter 'base_rate' or 'iteration'");
        return e = Object.assign({gamma: .9, step_size: 100}, e), t * Math.pow(e.gamma, Math.floor(n / e.step_size))
      }, EXP: function (t, n, e) {
        if (null == t || null == n) throw new ReferenceError("Missing required parameter 'base_rate' or 'iteration'");
        return e = Object.assign({gamma: .999}, e), t * Math.pow(e.gamma, n)
      }, INV: function (t, n, e) {
        if (null == t || null == n) throw new ReferenceError("Missing required parameter 'base_rate' or 'iteration'");
        return e = Object.assign({gamma: .001, power: 2}, e), t * Math.pow(1 + e.gamma * n, -e.power)
      }
    };
    t.exports = e
  }, function (t, n) {
    t.exports = function (t) {
      return t.webpackPolyfill || (t.deprecate = function () {
      }, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
        enumerable: !0,
        get: function () {
          return t.l
        }
      }), Object.defineProperty(t, "id", {
        enumerable: !0, get: function () {
          return t.i
        }
      }), t.webpackPolyfill = 1), t
    }
  }, function (t, n, e) {
    const r = e(0), o = e(4), i = e(5), u = e(11), a = e(3), c = e(1), s = (e(28), {
      Construct: function (t) {
        const n = new o(0, 0);
        let e, r, s = [];
        for (e = 0; e < t.length; e++) if (t[e] instanceof i || t[e] instanceof u) for (r = 0; r < t[e].nodes.length; r++) s.push(t[e].nodes[r]), 0 === e ? n.input_nodes.add(t[e].nodes[r]) : e === t.length - 1 && n.output_nodes.add(t[e].nodes[r]); else t[e] instanceof a && s.push(t[e]);
        const f = c.reduce(s, (t, n) => t + ("output" === n.type), 0),
          l = c.reduce(s, (t, n) => t + ("input" === n.type), 0), p = [], h = [];
        for (e = s.length - 1; e >= 0; e--) "output" === s[e].type || !f && s[e].connections_outgoing.length + s[e].connections_gated.length === 0 ? (s[e].type = "output", n.output_size++, h.push(s[e]), s.splice(e, 1)) : "input" !== s[e].type && (l || s[e].connections_incoming.length) || (s[e].type = "input", n.input_size++, p.push(s[e]), s.splice(e, 1));
        if (n.input = n.input_size, n.output = n.output_size, s = p.concat(s).concat(h), 0 === n.input_size || 0 === n.output_size) throw new Error("Given nodes have no clear input/output node!");
        for (e = 0; e < s.length; e++) {
          for (r = 0; r < s[e].connections_gated.length; r++) n.gates.push(s[e].connections_gated[r]);
          0 !== s[e].connections_self.weight && n.connections.push(s[e].connections_self)
        }
        return n.addNodes(s), n
      }, Perceptron: function () {
        const t = Array.from(arguments);
        if (t.length < 3) throw new Error("You have to specify at least 3 layers");
        const n = [new i(t[0])];
        return c.times(t.length - 1, e => {
          const o = new i(t[e + 1]);
          n.push(o), n[e].connect(n[e + 1], r.connection.ALL_TO_ALL)
        }), s.Construct(n)
      }, Random: function (t, n, e, i) {
        i ? !i && c.isPlainObject(e) && (i = e, e = n, n = void 0) : (e = n, n = void 0), n = n || 0, i = c.defaults(i, {
          connections: 2 * n,
          backconnections: 0,
          selfconnections: 0,
          gates: 0
        });
        const u = new o(t, e);
        return c.times(n, () => u.mutate(r.mutation.ADD_NODE)), c.times(i.connections - n, () => u.mutate(r.mutation.ADD_CONN)), c.times(i.backconnections, () => u.mutate(r.mutation.ADD_BACK_CONN)), c.times(i.selfconnections, () => u.mutate(r.mutation.ADD_SELF_CONN)), c.times(i.gates, () => u.mutate(r.mutation.ADD_GATE)), u
      }, LSTM: function () {
        const t = Array.from(arguments), n = t.slice(-1)[0];
        let e, o;
        if ("number" == typeof n ? (e = t, o = {}) : (e = t.slice(t.length - 1), o = n), e.length < 3) throw new Error("You have to specify at least 3 layer sizes, one for each of 1.inputs, 2. hidden, 3. output");
        o = c.defaults(o, {
          memory_to_memory: !1,
          output_to_memory: !1,
          output_to_gates: !1,
          input_to_output: !0,
          input_to_deep: !0
        });
        const u = new i(e.shift());
        u.set({type: "input"});
        const a = new i(e.pop());
        a.set({type: "output"}), o.input_to_output && u.connect(a, r.connection.ALL_TO_ALL);
        const f = e, l = [];
        let p = u;
        c.times(f.length, t => {
          const n = f[t], e = new i(n), c = new i(n), s = new i(n), h = new i(n), g = t === f.length - 1 ? a : new i(n);
          e.set({bias: 1}), c.set({bias: 1}), h.set({bias: 1});
          const _ = p.connect(s, r.connection.ALL_TO_ALL);
          p.connect(e, r.connection.ALL_TO_ALL), p.connect(h, r.connection.ALL_TO_ALL), p.connect(c, r.connection.ALL_TO_ALL), s.connect(e, r.connection.ALL_TO_ALL), s.connect(c, r.connection.ALL_TO_ALL), s.connect(h, r.connection.ALL_TO_ALL);
          const d = s.connect(s, r.connection.ONE_TO_ONE), v = s.connect(g, r.connection.ALL_TO_ALL);
          if (e.gate(_, r.gating.INPUT), c.gate(d, r.gating.SELF), h.gate(v, r.gating.OUTPUT), o.input_to_deep && t > 0) {
            const t = u.connect(s, r.connection.ALL_TO_ALL);
            e.gate(t, r.gating.INPUT)
          }
          if (o.memory_to_memory) {
            const t = s.connect(s, r.connection.ALL_TO_ELSE);
            e.gate(t, r.gating.INPUT)
          }
          if (o.output_to_memory) {
            const t = a.connect(s, r.connection.ALL_TO_ALL);
            e.gate(t, r.gating.INPUT)
          }
          o.output_to_gates && (a.connect(e, r.connection.ALL_TO_ALL), a.connect(c, r.connection.ALL_TO_ALL), a.connect(h, r.connection.ALL_TO_ALL)), l.push(e), l.push(c), l.push(s), l.push(h), t !== f.length - 1 && l.push(g), p = g
        });
        const h = [];
        return h.push(u), c.forEach(l, t => h.push(t)), h.push(a), s.Construct(h)
      }, GRU: function () {
        const t = Array.from(arguments);
        if (t.length < 3) throw new Error("You have to specify at least 3 layer sizes");
        const n = new i(t.shift(), "input"), e = new i(t.pop(), "output"), r = t, o = [];
        o.push(n);
        let a = n;
        for (var c = 0; c < r.length; c++) {
          const t = u.GRU(r[c]);
          a.connect(t), a = t, o.push(t)
        }
        return a.connect(e), o.push(e), s.Construct(o)
      }, Hopfield: function (t) {
        const n = new i(t, "input"), e = new i(t, "output");
        return n.connect(e, r.connection.ALL_TO_ALL), e.set({squash: r.activation.STEP}), new s.Construct([n, e])
      }, NARX: function (t, n, e, o, i) {
        Array.isArray(n) || (n = [n]);
        const a = [], c = u.Dense(t), f = u.Memory(t, o), l = [];
        for (let t = 0; t < n.length; t++) l.push(u.Dense(n[t]));
        const p = u.Dense(e), h = u.Memory(e, i);
        c.connect(l[0], r.connection.ALL_TO_ALL), c.connect(f, r.connection.ONE_TO_ONE, 1), a.push(c), f.connect(l[0], r.connection.ALL_TO_ALL), h.connect(l[0], r.connection.ALL_TO_ALL), a.push(f), a.push(h);
        for (let t = 0; t < l.length; t++) t < l.length - 1 ? l[t].connect(l[t + 1], r.connection.ALL_TO_ALL) : l[t].connect(p, r.connection.ALL_TO_ALL), a.push(l[t]);
        return p.connect(h, r.connection.ONE_TO_ONE, 1), a.push(p), c.set({type: "input"}), p.set({type: "output"}), s.Construct(a)
      }, Liquid: function () {
      }
    });
    t.exports = s
  }, function (t, n, e) {
    var r = {node: {TestWorker: e(23)}, browser: {TestWorker: e(26)}};
    t.exports = r
  }, function (t, n, e) {
    (function (n, r) {
      t.exports = c;
      const o = e(24), i = e(25), u = e(7);
      let a = 9230;

      function c(t, e) {
        const c = n.execArgv.join(), s = c.includes("inspect") || c.includes("debug");
        this.worker = s ? o.fork(i.join(r, "/worker"), [], {execArgv: ["--inspect=" + a++]}) : o.fork(i.join(r, "/worker"));
        const f = e.name in u;
        this.worker.send({serialized_dataset: t, cost_function: f ? e.name : e.toString(), cost_is_standard: f})
      }

      c.prototype = {
        evaluate: function (t) {
          return new Promise((n, e) => {
            var r = t.serialize(), o = {activations: r[0], states: r[1], conns: r[2]}, i = this.worker;
            this.worker.on("message", (function t(e) {
              i.removeListener("message", t), n(e)
            })), this.worker.send(o)
          })
        }, terminate: function () {
          this.worker.kill()
        }
      }
    }).call(this, e(10), "/")
  }, function (t, n) {
  }, function (t, n, e) {
    (function (t) {
      function e(t, n) {
        for (var e = 0, r = t.length - 1; r >= 0; r--) {
          var o = t[r];
          "." === o ? t.splice(r, 1) : ".." === o ? (t.splice(r, 1), e++) : e && (t.splice(r, 1), e--)
        }
        if (n) for (; e--; e) t.unshift("..");
        return t
      }

      function r(t, n) {
        if (t.filter) return t.filter(n);
        for (var e = [], r = 0; r < t.length; r++) n(t[r], r, t) && e.push(t[r]);
        return e
      }

      n.resolve = function () {
        for (var n = "", o = !1, i = arguments.length - 1; i >= -1 && !o; i--) {
          var u = i >= 0 ? arguments[i] : t.cwd();
          if ("string" != typeof u) throw new TypeError("Arguments to path.resolve must be strings");
          u && (n = u + "/" + n, o = "/" === u.charAt(0))
        }
        return (o ? "/" : "") + (n = e(r(n.split("/"), (function (t) {
          return !!t
        })), !o).join("/")) || "."
      }, n.normalize = function (t) {
        var i = n.isAbsolute(t), u = "/" === o(t, -1);
        return (t = e(r(t.split("/"), (function (t) {
          return !!t
        })), !i).join("/")) || i || (t = "."), t && u && (t += "/"), (i ? "/" : "") + t
      }, n.isAbsolute = function (t) {
        return "/" === t.charAt(0)
      }, n.join = function () {
        var t = Array.prototype.slice.call(arguments, 0);
        return n.normalize(r(t, (function (t, n) {
          if ("string" != typeof t) throw new TypeError("Arguments to path.join must be strings");
          return t
        })).join("/"))
      }, n.relative = function (t, e) {
        function r(t) {
          for (var n = 0; n < t.length && "" === t[n]; n++) ;
          for (var e = t.length - 1; e >= 0 && "" === t[e]; e--) ;
          return n > e ? [] : t.slice(n, e - n + 1)
        }

        t = n.resolve(t).substr(1), e = n.resolve(e).substr(1);
        for (var o = r(t.split("/")), i = r(e.split("/")), u = Math.min(o.length, i.length), a = u, c = 0; c < u; c++) if (o[c] !== i[c]) {
          a = c;
          break
        }
        var s = [];
        for (c = a; c < o.length; c++) s.push("..");
        return (s = s.concat(i.slice(a))).join("/")
      }, n.sep = "/", n.delimiter = ":", n.dirname = function (t) {
        if ("string" != typeof t && (t += ""), 0 === t.length) return ".";
        for (var n = t.charCodeAt(0), e = 47 === n, r = -1, o = !0, i = t.length - 1; i >= 1; --i) if (47 === (n = t.charCodeAt(i))) {
          if (!o) {
            r = i;
            break
          }
        } else o = !1;
        return -1 === r ? e ? "/" : "." : e && 1 === r ? "/" : t.slice(0, r)
      }, n.basename = function (t, n) {
        var e = function (t) {
          "string" != typeof t && (t += "");
          var n, e = 0, r = -1, o = !0;
          for (n = t.length - 1; n >= 0; --n) if (47 === t.charCodeAt(n)) {
            if (!o) {
              e = n + 1;
              break
            }
          } else -1 === r && (o = !1, r = n + 1);
          return -1 === r ? "" : t.slice(e, r)
        }(t);
        return n && e.substr(-1 * n.length) === n && (e = e.substr(0, e.length - n.length)), e
      }, n.extname = function (t) {
        "string" != typeof t && (t += "");
        for (var n = -1, e = 0, r = -1, o = !0, i = 0, u = t.length - 1; u >= 0; --u) {
          var a = t.charCodeAt(u);
          if (47 !== a) -1 === r && (o = !1, r = u + 1), 46 === a ? -1 === n ? n = u : 1 !== i && (i = 1) : -1 !== n && (i = -1); else if (!o) {
            e = u + 1;
            break
          }
        }
        return -1 === n || -1 === r || 0 === i || 1 === i && n === r - 1 && n === e + 1 ? "" : t.slice(n, r)
      };
      var o = "b" === "ab".substr(-1) ? function (t, n, e) {
        return t.substr(n, e)
      } : function (t, n, e) {
        return n < 0 && (n = t.length + n), t.substr(n, e)
      }
    }).call(this, e(10))
  }, function (t, n, e) {
    t.exports = o;
    var r = e(9);

    function o(t, n) {
      var e = new Blob([this._createBlobString(n)]);
      this.url = window.URL.createObjectURL(e), this.worker = new Worker(this.url);
      var r = {set: new Float64Array(t).buffer};
      this.worker.postMessage(r, [r.set])
    }

    o.prototype = {
      evaluate: function (t) {
        return new Promise((n, e) => {
          var r = t.serialize(), o = {
            activations: new Float64Array(r[0]).buffer,
            states: new Float64Array(r[1]).buffer,
            conns: new Float64Array(r[2]).buffer
          };
          this.worker.onmessage = function (t) {
            var e = new Float64Array(t.data.buffer)[0];
            n(e)
          }, this.worker.postMessage(o, [o.activations, o.states, o.conns])
        })
      }, terminate: function () {
        this.worker.terminate(), window.URL.revokeObjectURL(this.url)
      }, _createBlobString: function (t) {
        return `\n      var F = [${r.activations.toString()}];\n      var cost = ${t.toString()};\n      var multi = {\n        deserializeDataSet: ${r.deserializeDataSet.toString()},\n        testSerializedSet: ${r.testSerializedSet.toString()},\n        activateSerializedNetwork: ${r.activateSerializedNetwork.toString()}\n      };\n\n      this.onmessage = function (e) {\n        if(typeof e.data.set === 'undefined'){\n          var A = new Float64Array(e.data.activations);\n          var S = new Float64Array(e.data.states);\n          var data = new Float64Array(e.data.conns);\n\n          var error = multi.testSerializedSet(set, cost, A, S, data, F);\n\n          var answer = { buffer: new Float64Array([error ]).buffer };\n          postMessage(answer, [answer.buffer]);\n        } else {\n          set = multi.deserializeDataSet(new Float64Array(e.data.set));\n        }\n      };`
      }
    }
  }, function (t, n) {
    n.endianness = function () {
      return "LE"
    }, n.hostname = function () {
      return "undefined" != typeof location ? location.hostname : ""
    }, n.loadavg = function () {
      return []
    }, n.uptime = function () {
      return 0
    }, n.freemem = function () {
      return Number.MAX_VALUE
    }, n.totalmem = function () {
      return Number.MAX_VALUE
    }, n.cpus = function () {
      return []
    }, n.type = function () {
      return "Browser"
    }, n.release = function () {
      return "undefined" != typeof navigator ? navigator.appVersion : ""
    }, n.networkInterfaces = n.getNetworkInterfaces = function () {
      return {}
    }, n.arch = function () {
      return "javascript"
    }, n.platform = function () {
      return "browser"
    }, n.tmpdir = n.tmpDir = function () {
      return "/tmp"
    }, n.EOL = "\n", n.homedir = function () {
      return "/"
    }
  }, function (t, n, e) {
    "use strict";
    (function (n) {
      var r = e(29);

      /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
   * @license  MIT
   */
      function o(t, n) {
        if (t === n) return 0;
        for (var e = t.length, r = n.length, o = 0, i = Math.min(e, r); o < i; ++o) if (t[o] !== n[o]) {
          e = t[o], r = n[o];
          break
        }
        return e < r ? -1 : r < e ? 1 : 0
      }

      function i(t) {
        return n.Buffer && "function" == typeof n.Buffer.isBuffer ? n.Buffer.isBuffer(t) : !(null == t || !t._isBuffer)
      }

      var u = e(30), a = Object.prototype.hasOwnProperty, c = Array.prototype.slice, s = "foo" === function () {
      }.name;

      function f(t) {
        return Object.prototype.toString.call(t)
      }

      function l(t) {
        return !i(t) && ("function" == typeof n.ArrayBuffer && ("function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : !!t && (t instanceof DataView || !!(t.buffer && t.buffer instanceof ArrayBuffer))))
      }

      var p = t.exports = m, h = /\s*function\s+([^\(\s]*)\s*/;

      function g(t) {
        if (u.isFunction(t)) {
          if (s) return t.name;
          var n = t.toString().match(h);
          return n && n[1]
        }
      }

      function _(t, n) {
        return "string" == typeof t ? t.length < n ? t : t.slice(0, n) : t
      }

      function d(t) {
        if (s || !u.isFunction(t)) return u.inspect(t);
        var n = g(t);
        return "[Function" + (n ? ": " + n : "") + "]"
      }

      function v(t, n, e, r, o) {
        throw new p.AssertionError({message: e, actual: t, expected: n, operator: r, stackStartFunction: o})
      }

      function m(t, n) {
        t || v(t, !0, n, "==", p.ok)
      }

      function y(t, n, e, r) {
        if (t === n) return !0;
        if (i(t) && i(n)) return 0 === o(t, n);
        if (u.isDate(t) && u.isDate(n)) return t.getTime() === n.getTime();
        if (u.isRegExp(t) && u.isRegExp(n)) return t.source === n.source && t.global === n.global && t.multiline === n.multiline && t.lastIndex === n.lastIndex && t.ignoreCase === n.ignoreCase;
        if (null !== t && "object" == typeof t || null !== n && "object" == typeof n) {
          if (l(t) && l(n) && f(t) === f(n) && !(t instanceof Float32Array || t instanceof Float64Array)) return 0 === o(new Uint8Array(t.buffer), new Uint8Array(n.buffer));
          if (i(t) !== i(n)) return !1;
          var a = (r = r || {actual: [], expected: []}).actual.indexOf(t);
          return -1 !== a && a === r.expected.indexOf(n) || (r.actual.push(t), r.expected.push(n), function (t, n, e, r) {
            if (null == t || null == n) return !1;
            if (u.isPrimitive(t) || u.isPrimitive(n)) return t === n;
            if (e && Object.getPrototypeOf(t) !== Object.getPrototypeOf(n)) return !1;
            var o = w(t), i = w(n);
            if (o && !i || !o && i) return !1;
            if (o) return t = c.call(t), n = c.call(n), y(t, n, e);
            var a, s, f = O(t), l = O(n);
            if (f.length !== l.length) return !1;
            for (f.sort(), l.sort(), s = f.length - 1; s >= 0; s--) if (f[s] !== l[s]) return !1;
            for (s = f.length - 1; s >= 0; s--) if (a = f[s], !y(t[a], n[a], e, r)) return !1;
            return !0
          }(t, n, e, r))
        }
        return e ? t === n : t == n
      }

      function w(t) {
        return "[object Arguments]" == Object.prototype.toString.call(t)
      }

      function b(t, n) {
        if (!t || !n) return !1;
        if ("[object RegExp]" == Object.prototype.toString.call(n)) return n.test(t);
        try {
          if (t instanceof n) return !0
        } catch (t) {
        }
        return !Error.isPrototypeOf(n) && !0 === n.call({}, t)
      }

      function A(t, n, e, r) {
        var o;
        if ("function" != typeof n) throw new TypeError('"block" argument must be a function');
        "string" == typeof e && (r = e, e = null), o = function (t) {
          var n;
          try {
            t()
          } catch (t) {
            n = t
          }
          return n
        }(n), r = (e && e.name ? " (" + e.name + ")." : ".") + (r ? " " + r : "."), t && !o && v(o, e, "Missing expected exception" + r);
        var i = "string" == typeof r, a = !t && o && !e;
        if ((!t && u.isError(o) && i && b(o, e) || a) && v(o, e, "Got unwanted exception" + r), t && o && e && !b(o, e) || !t && o) throw o
      }

      p.AssertionError = function (t) {
        this.name = "AssertionError", this.actual = t.actual, this.expected = t.expected, this.operator = t.operator, t.message ? (this.message = t.message, this.generatedMessage = !1) : (this.message = function (t) {
          return _(d(t.actual), 128) + " " + t.operator + " " + _(d(t.expected), 128)
        }(this), this.generatedMessage = !0);
        var n = t.stackStartFunction || v;
        if (Error.captureStackTrace) Error.captureStackTrace(this, n); else {
          var e = new Error;
          if (e.stack) {
            var r = e.stack, o = g(n), i = r.indexOf("\n" + o);
            if (i >= 0) {
              var u = r.indexOf("\n", i + 1);
              r = r.substring(u + 1)
            }
            this.stack = r
          }
        }
      }, u.inherits(p.AssertionError, Error), p.fail = v, p.ok = m, p.equal = function (t, n, e) {
        t != n && v(t, n, e, "==", p.equal)
      }, p.notEqual = function (t, n, e) {
        t == n && v(t, n, e, "!=", p.notEqual)
      }, p.deepEqual = function (t, n, e) {
        y(t, n, !1) || v(t, n, e, "deepEqual", p.deepEqual)
      }, p.deepStrictEqual = function (t, n, e) {
        y(t, n, !0) || v(t, n, e, "deepStrictEqual", p.deepStrictEqual)
      }, p.notDeepEqual = function (t, n, e) {
        y(t, n, !1) && v(t, n, e, "notDeepEqual", p.notDeepEqual)
      }, p.notDeepStrictEqual = function t(n, e, r) {
        y(n, e, !0) && v(n, e, r, "notDeepStrictEqual", t)
      }, p.strictEqual = function (t, n, e) {
        t !== n && v(t, n, e, "===", p.strictEqual)
      }, p.notStrictEqual = function (t, n, e) {
        t === n && v(t, n, e, "!==", p.notStrictEqual)
      }, p.throws = function (t, n, e) {
        A(!0, t, n, e)
      }, p.doesNotThrow = function (t, n, e) {
        A(!1, t, n, e)
      }, p.ifError = function (t) {
        if (t) throw t
      }, p.strict = r((function t(n, e) {
        n || v(n, !0, e, "==", t)
      }), p, {
        equal: p.strictEqual,
        deepEqual: p.deepStrictEqual,
        notEqual: p.notStrictEqual,
        notDeepEqual: p.notDeepStrictEqual
      }), p.strict.strict = p.strict;
      var O = Object.keys || function (t) {
        var n = [];
        for (var e in t) a.call(t, e) && n.push(e);
        return n
      }
    }).call(this, e(12))
  }, function (t, n, e) {
    "use strict";
    /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
    var r = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty,
      i = Object.prototype.propertyIsEnumerable;

    function u(t) {
      if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
      return Object(t)
    }

    t.exports = function () {
      try {
        if (!Object.assign) return !1;
        var t = new String("abc");
        if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
        for (var n = {}, e = 0; e < 10; e++) n["_" + String.fromCharCode(e)] = e;
        if ("0123456789" !== Object.getOwnPropertyNames(n).map((function (t) {
          return n[t]
        })).join("")) return !1;
        var r = {};
        return "abcdefghijklmnopqrst".split("").forEach((function (t) {
          r[t] = t
        })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
      } catch (t) {
        return !1
      }
    }() ? Object.assign : function (t, n) {
      for (var e, a, c = u(t), s = 1; s < arguments.length; s++) {
        for (var f in e = Object(arguments[s])) o.call(e, f) && (c[f] = e[f]);
        if (r) {
          a = r(e);
          for (var l = 0; l < a.length; l++) i.call(e, a[l]) && (c[a[l]] = e[a[l]])
        }
      }
      return c
    }
  }, function (t, n, e) {
    (function (t) {
      var r = Object.getOwnPropertyDescriptors || function (t) {
        for (var n = Object.keys(t), e = {}, r = 0; r < n.length; r++) e[n[r]] = Object.getOwnPropertyDescriptor(t, n[r]);
        return e
      }, o = /%[sdj%]/g;
      n.format = function (t) {
        if (!v(t)) {
          for (var n = [], e = 0; e < arguments.length; e++) n.push(a(arguments[e]));
          return n.join(" ")
        }
        e = 1;
        for (var r = arguments, i = r.length, u = String(t).replace(o, (function (t) {
          if ("%%" === t) return "%";
          if (e >= i) return t;
          switch (t) {
            case"%s":
              return String(r[e++]);
            case"%d":
              return Number(r[e++]);
            case"%j":
              try {
                return JSON.stringify(r[e++])
              } catch (t) {
                return "[Circular]"
              }
            default:
              return t
          }
        })), c = r[e]; e < i; c = r[++e]) _(c) || !w(c) ? u += " " + c : u += " " + a(c);
        return u
      }, n.deprecate = function (e, r) {
        if (void 0 !== t && !0 === t.noDeprecation) return e;
        if (void 0 === t) return function () {
          return n.deprecate(e, r).apply(this, arguments)
        };
        var o = !1;
        return function () {
          if (!o) {
            if (t.throwDeprecation) throw new Error(r);
            t.traceDeprecation ? console.trace(r) : console.error(r), o = !0
          }
          return e.apply(this, arguments)
        }
      };
      var i, u = {};

      function a(t, e) {
        var r = {seen: [], stylize: s};
        return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), g(e) ? r.showHidden = e : e && n._extend(r, e), m(r.showHidden) && (r.showHidden = !1), m(r.depth) && (r.depth = 2), m(r.colors) && (r.colors = !1), m(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = c), f(r, t, r.depth)
      }

      function c(t, n) {
        var e = a.styles[n];
        return e ? "[" + a.colors[e][0] + "m" + t + "[" + a.colors[e][1] + "m" : t
      }

      function s(t, n) {
        return t
      }

      function f(t, e, r) {
        if (t.customInspect && e && O(e.inspect) && e.inspect !== n.inspect && (!e.constructor || e.constructor.prototype !== e)) {
          var o = e.inspect(r, t);
          return v(o) || (o = f(t, o, r)), o
        }
        var i = function (t, n) {
          if (m(n)) return t.stylize("undefined", "undefined");
          if (v(n)) {
            var e = "'" + JSON.stringify(n).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
            return t.stylize(e, "string")
          }
          if (d(n)) return t.stylize("" + n, "number");
          if (g(n)) return t.stylize("" + n, "boolean");
          if (_(n)) return t.stylize("null", "null")
        }(t, e);
        if (i) return i;
        var u = Object.keys(e), a = function (t) {
          var n = {};
          return t.forEach((function (t, e) {
            n[t] = !0
          })), n
        }(u);
        if (t.showHidden && (u = Object.getOwnPropertyNames(e)), A(e) && (u.indexOf("message") >= 0 || u.indexOf("description") >= 0)) return l(e);
        if (0 === u.length) {
          if (O(e)) {
            var c = e.name ? ": " + e.name : "";
            return t.stylize("[Function" + c + "]", "special")
          }
          if (y(e)) return t.stylize(RegExp.prototype.toString.call(e), "regexp");
          if (b(e)) return t.stylize(Date.prototype.toString.call(e), "date");
          if (A(e)) return l(e)
        }
        var s, w = "", E = !1, L = ["{", "}"];
        (h(e) && (E = !0, L = ["[", "]"]), O(e)) && (w = " [Function" + (e.name ? ": " + e.name : "") + "]");
        return y(e) && (w = " " + RegExp.prototype.toString.call(e)), b(e) && (w = " " + Date.prototype.toUTCString.call(e)), A(e) && (w = " " + l(e)), 0 !== u.length || E && 0 != e.length ? r < 0 ? y(e) ? t.stylize(RegExp.prototype.toString.call(e), "regexp") : t.stylize("[Object]", "special") : (t.seen.push(e), s = E ? function (t, n, e, r, o) {
          for (var i = [], u = 0, a = n.length; u < a; ++u) T(n, String(u)) ? i.push(p(t, n, e, r, String(u), !0)) : i.push("");
          return o.forEach((function (o) {
            o.match(/^\d+$/) || i.push(p(t, n, e, r, o, !0))
          })), i
        }(t, e, r, a, u) : u.map((function (n) {
          return p(t, e, r, a, n, E)
        })), t.seen.pop(), function (t, n, e) {
          if (t.reduce((function (t, n) {
            return 0, n.indexOf("\n") >= 0 && 0, t + n.replace(/\u001b\[\d\d?m/g, "").length + 1
          }), 0) > 60) return e[0] + ("" === n ? "" : n + "\n ") + " " + t.join(",\n  ") + " " + e[1];
          return e[0] + n + " " + t.join(", ") + " " + e[1]
        }(s, w, L)) : L[0] + w + L[1]
      }

      function l(t) {
        return "[" + Error.prototype.toString.call(t) + "]"
      }

      function p(t, n, e, r, o, i) {
        var u, a, c;
        if ((c = Object.getOwnPropertyDescriptor(n, o) || {value: n[o]}).get ? a = c.set ? t.stylize("[Getter/Setter]", "special") : t.stylize("[Getter]", "special") : c.set && (a = t.stylize("[Setter]", "special")), T(r, o) || (u = "[" + o + "]"), a || (t.seen.indexOf(c.value) < 0 ? (a = _(e) ? f(t, c.value, null) : f(t, c.value, e - 1)).indexOf("\n") > -1 && (a = i ? a.split("\n").map((function (t) {
          return "  " + t
        })).join("\n").substr(2) : "\n" + a.split("\n").map((function (t) {
          return "   " + t
        })).join("\n")) : a = t.stylize("[Circular]", "special")), m(u)) {
          if (i && o.match(/^\d+$/)) return a;
          (u = JSON.stringify("" + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (u = u.substr(1, u.length - 2), u = t.stylize(u, "name")) : (u = u.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), u = t.stylize(u, "string"))
        }
        return u + ": " + a
      }

      function h(t) {
        return Array.isArray(t)
      }

      function g(t) {
        return "boolean" == typeof t
      }

      function _(t) {
        return null === t
      }

      function d(t) {
        return "number" == typeof t
      }

      function v(t) {
        return "string" == typeof t
      }

      function m(t) {
        return void 0 === t
      }

      function y(t) {
        return w(t) && "[object RegExp]" === E(t)
      }

      function w(t) {
        return "object" == typeof t && null !== t
      }

      function b(t) {
        return w(t) && "[object Date]" === E(t)
      }

      function A(t) {
        return w(t) && ("[object Error]" === E(t) || t instanceof Error)
      }

      function O(t) {
        return "function" == typeof t
      }

      function E(t) {
        return Object.prototype.toString.call(t)
      }

      function L(t) {
        return t < 10 ? "0" + t.toString(10) : t.toString(10)
      }

      n.debuglog = function (e) {
        if (m(i) && (i = t.env.NODE_DEBUG || ""), e = e.toUpperCase(), !u[e]) if (new RegExp("\\b" + e + "\\b", "i").test(i)) {
          var r = t.pid;
          u[e] = function () {
            var t = n.format.apply(n, arguments);
            console.error("%s %d: %s", e, r, t)
          }
        } else u[e] = function () {
        };
        return u[e]
      }, n.inspect = a, a.colors = {
        bold: [1, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        white: [37, 39],
        grey: [90, 39],
        black: [30, 39],
        blue: [34, 39],
        cyan: [36, 39],
        green: [32, 39],
        magenta: [35, 39],
        red: [31, 39],
        yellow: [33, 39]
      }, a.styles = {
        special: "cyan",
        number: "yellow",
        boolean: "yellow",
        undefined: "grey",
        null: "bold",
        string: "green",
        date: "magenta",
        regexp: "red"
      }, n.isArray = h, n.isBoolean = g, n.isNull = _, n.isNullOrUndefined = function (t) {
        return null == t
      }, n.isNumber = d, n.isString = v, n.isSymbol = function (t) {
        return "symbol" == typeof t
      }, n.isUndefined = m, n.isRegExp = y, n.isObject = w, n.isDate = b, n.isError = A, n.isFunction = O, n.isPrimitive = function (t) {
        return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == typeof t || void 0 === t
      }, n.isBuffer = e(31);
      var N = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

      function x() {
        var t = new Date, n = [L(t.getHours()), L(t.getMinutes()), L(t.getSeconds())].join(":");
        return [t.getDate(), N[t.getMonth()], n].join(" ")
      }

      function T(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
      }

      n.log = function () {
        console.log("%s - %s", x(), n.format.apply(n, arguments))
      }, n.inherits = e(32), n._extend = function (t, n) {
        if (!n || !w(n)) return t;
        for (var e = Object.keys(n), r = e.length; r--;) t[e[r]] = n[e[r]];
        return t
      };
      var S = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;

      function M(t, n) {
        if (!t) {
          var e = new Error("Promise was rejected with a falsy value");
          e.reason = t, t = e
        }
        return n(t)
      }

      n.promisify = function (t) {
        if ("function" != typeof t) throw new TypeError('The "original" argument must be of type Function');
        if (S && t[S]) {
          var n;
          if ("function" != typeof (n = t[S])) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
          return Object.defineProperty(n, S, {value: n, enumerable: !1, writable: !1, configurable: !0}), n
        }

        function n() {
          for (var n, e, r = new Promise((function (t, r) {
            n = t, e = r
          })), o = [], i = 0; i < arguments.length; i++) o.push(arguments[i]);
          o.push((function (t, r) {
            t ? e(t) : n(r)
          }));
          try {
            t.apply(this, o)
          } catch (t) {
            e(t)
          }
          return r
        }

        return Object.setPrototypeOf(n, Object.getPrototypeOf(t)), S && Object.defineProperty(n, S, {
          value: n,
          enumerable: !1,
          writable: !1,
          configurable: !0
        }), Object.defineProperties(n, r(t))
      }, n.promisify.custom = S, n.callbackify = function (n) {
        if ("function" != typeof n) throw new TypeError('The "original" argument must be of type Function');

        function e() {
          for (var e = [], r = 0; r < arguments.length; r++) e.push(arguments[r]);
          var o = e.pop();
          if ("function" != typeof o) throw new TypeError("The last argument must be of type Function");
          var i = this, u = function () {
            return o.apply(i, arguments)
          };
          n.apply(this, e).then((function (n) {
            t.nextTick(u, null, n)
          }), (function (n) {
            t.nextTick(M, n, u)
          }))
        }

        return Object.setPrototypeOf(e, Object.getPrototypeOf(n)), Object.defineProperties(e, r(n)), e
      }
    }).call(this, e(10))
  }, function (t, n) {
    t.exports = function (t) {
      return t && "object" == typeof t && "function" == typeof t.copy && "function" == typeof t.fill && "function" == typeof t.readUInt8
    }
  }, function (t, n) {
    "function" == typeof Object.create ? t.exports = function (t, n) {
      t.super_ = n, t.prototype = Object.create(n.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })
    } : t.exports = function (t, n) {
      t.super_ = n;
      var e = function () {
      };
      e.prototype = n.prototype, t.prototype = new e, t.prototype.constructor = t
    }
  }, function (n, e, r) {
    const o = r(1), i = r(4), u = r(0), a = (r(2), function (n, e, r, u) {
      const c = this;
      e || r || u ? !r && !u && Array.isArray(n) && o.isPlainObject(e) ? (r = n, u = e, n = e = void 0) : !u && o.isInteger(n) && o.isInteger(e) && o.isPlainObject(r) && (u = r, r = void 0) : (o.isPlainObject(n) ? u = n : Array.isArray(n) && (r = n), n = void 0), n = n || 1, e = e || 1, r = r || [], u = o.defaultsDeep(u, a.default.options), Object.assign(c, {
        inputs: n,
        outputs: e,
        dataset: r, ...u
      }), c.createPool = function (t, n) {
        const e = [];
        for (let r = 0; r < n; r++) e.push(i.fromJSON({...t.toJSON(), score: void 0}));
        return e
      }, c.createPopulation = function (t, n) {
        !n && Number.isInteger(t) && (n = t, t = void 0), n = n || c.population_size, copyNetwork = t ? () => t.clone() : c.template ? () => c.template.clone() : () => new i(c.inputs, c.outputs);
        const e = [];
        for (let t = 0; t < n; t++) e.push(copyNetwork());
        return e
      }, c.population = c.population || c.createPopulation(c.template, c.population_size), c.replace = function (n, e, r) {
        if (null == n && null == e && null == r) throw new ReferenceError("Missing required parameter 'transform'");

        function o(t) {
          return t instanceof i ? () => t : "function" == typeof t ? t : new TypeError(`Expected ${t} to be a {Network|Function}`)
        }

        function u(n) {
          return Number.isFinite(n) ? (t, e, r) => e === n : n instanceof i ? (t, e, r) => t === n : "function" == typeof n ? n : null == n ? () => !0 : new TypeError(`Expected ${t} to be a {Number|Network|Function|undefined}`)
        }

        null == e && null == r ? (r = o(n), e = u(), n = c.population) : null == r ? (r = o(e), e = u(n), n = c.population) : (r = o(r), e = u(e), n = n || c.population);
        const a = [];
        for (let t = 0; t < n.length; t++) e(n[t], t, n) ? a[t] = r(n[t], t, n) : a.push(n[t]);
        return a
      }, c.resize = function (t) {
        if ("number" == typeof t || "string" == typeof t && +t == +t) {
          let n = t - c.population.length;
          if (n > 0) for (1 === c.population.length && (c.population.push(c.population[0].clone()), n--); n-- > 0;) c.population.push(c.getOffspring()); else for (; n++ < 0;) c.population.pop()
        } else {
          if (!Array.isArray(t) || !t.length) throw new Error("Neat.resize needs a number or an array of new population members!");
          for (let n = 0; n < t.length; n++) c.population.push(t[n])
        }
        return c.population_size = c.population.length, c.population
      }, c.mutate = function (t) {
        const n = {maxNodes: c.maxNodes, maxConns: c.maxConns, maxGates: c.maxGates},
          e = t ? (t, n, e) => t.mutate(n, e) : (t, n, e) => t.mutateRandom(n, e);
        t = t || c.mutation;
        const r = [];
        for (let o = 0; o < c.population.length; o++) if (Math.random() <= c.mutation_rate) for (let i = 0; i < c.mutation_amount; i++) r.push(e(c.population[o], t, n));
        return r
      }, c.evolve = async function (t, n, e) {
        if (c.elitism + c.provenance > c.population_size) throw new Error("Can't evolve! Elitism + provenance exceeds population size!");
        "function" == typeof t && (adjustGenome = n, n = t, t = void 0);
        const r = t => Array.isArray(t) && t.length;
        let i = r(t) ? t : r(c.dataset) ? c.dataset : null, u = c.population;
        const a = o.every(u, t => "number" == typeof t.score || "string" == typeof t.score && +t.score == +t.score);
        if (i && !a) await c.evaluate(i); else if (!a) throw new Error("If no dataset is passed, all networks in population must have numeric '.score' properties!");
        n && (u = c.replace(u, n, e)), c.sort(u);
        const s = [];
        for (let t = 0; t < c.elitism; t++) s.push(u[t].clone());
        const f = [];
        for (let t = 0; t < c.provenance; t++) f.push(c.template.clone());
        for (let t = 0; t < c.population_size - c.elitism - c.provenance; t++) f.push(c.getOffspring());
        u = c.population = f, c.mutate();
        for (let t = 0; t < s.length; t++) u.push(s[t]);
        if (i && await c.evaluate(i), n && (c.population = c.replace(u, n, e)), c.sort(u), !i) for (let t = 0; t < u.length; t++) u[t].score = void 0;
        return c.generation++, c.population
      }, c.getParent = function () {
        switch (c.selection.name) {
          case"POWER": {
            c.population[0].score < c.population[1].score && c.sort();
            const t = Math.floor(Math.pow(Math.random(), c.selection.power) * c.population.length);
            return c.population[t]
          }
          case"FITNESS_PROPORTIONATE": {
            let t = 0, n = 0;
            for (let e = 0; e < c.population.length; e++) {
              const r = c.population[e].score;
              n = r < n ? r : n, t += r
            }
            t += (n = Math.abs(n)) * c.population.length;
            let e = Math.random() * t, r = 0;
            for (let t = 0; t < c.population.length; t++) {
              const o = c.population[t];
              if (e < (r += o.score + n)) return o
            }
            return c.population[Math.floor(Math.random() * c.population.length)]
          }
          case"TOURNAMENT": {
            if (c.selection.size > c.population_size) throw new Error("Your tournament size should be lower than the population size, please change methods.selection.TOURNAMENT.size");
            const t = [];
            for (let n = 0; n < c.selection.size; n++) {
              let n = c.population[Math.floor(Math.random() * c.population.length)];
              t.push(n)
            }
            t.sort((function (t, n) {
              return n.score - t.score
            }));
            for (let n = 0; n < c.selection.size; n++) if (Math.random() < c.selection.probability || n === c.selection.size - 1) return t[n]
          }
        }
      }, c.getOffspring = function () {
        const t = c.getParent(), n = c.getParent();
        return i.crossOver(t, n, c.equal)
      }, c.evaluate = async function (t) {
        if (!(t = t || c.dataset).length) throw new Error("A dataset must be passed to the Neat constructor or Neat.evaluate()!");
        if (c.fitnessPopulation) {
          if (c.clear) for (let t = 0; t < c.population.length; t++) c.population[t].clear();
          c.fitness(t, c.population)
        } else for (let n = 0; n < c.population.length; n++) {
          const e = c.population[n];
          c.clear && e.clear(), e.score = c.fitness(t, e), c.population[n] = e
        }
        return c.sort(), c.population[0]
      }, c.sort = function (t) {
        (t = Array.isArray(t) && t.length ? t : c.population).sort((function (t, n) {
          return n.score - t.score
        }))
      }, c.getFittest = function () {
        return void 0 === c.population[c.population.length - 1].score && c.evaluate(), c.population[0].score < c.population[1].score && c.sort(), c.population[0]
      }, c.getAverage = function () {
        void 0 === c.population[c.population.length - 1].score && c.evaluate();
        let t = 0;
        for (let n = 0; n < c.population.length; n++) t += c.population[n].score;
        return t / c.population.length
      }, c.toJSON = function () {
        const t = [];
        for (let n = 0; n < c.population.length; n++) t.push(c.population[n].toJSON());
        return t
      }, c.fromJSON = function (t) {
        const n = [];
        for (let e = 0; e < t.length; e++) n.push(i.fromJSON(t[e]));
        c.population = n, c.population_size = n.length
      }
    });
    a.default = {
      options: {
        generation: 0,
        equal: !0,
        clean: !1,
        population_size: 50,
        growth: 1e-4,
        cost: u.cost.MSE,
        amount: 1,
        elitism: 1,
        provenance: 0,
        mutation_rate: .4,
        mutation_amount: 1,
        fitnessPopulation: !1,
        fitness: function (t = dataset, n, e = 1, r = u.cost.MSE, o = 1e-4) {
          let i = 0;
          for (let o = 0; o < e; o++) i -= n.test(t, r).error;
          return i -= (n.nodes.length - n.input - n.output + n.connections.length + n.gates.length) * o, (i = isNaN(i) ? -1 / 0 : i) / e
        },
        selection: u.selection.POWER,
        crossover: [u.crossover.SINGLE_POINT, u.crossover.TWO_POINT, u.crossover.UNIFORM, u.crossover.AVERAGE],
        mutation: u.mutation.ALL,
        maxNodes: 1 / 0,
        maxConns: 1 / 0,
        maxGates: 1 / 0
      }
    }, n.exports = a
  }, function (t, n) {
  }, function (t, n, e) {
    e(4)
  }])
}));
