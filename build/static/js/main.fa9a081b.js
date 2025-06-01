/*! For license information please see main.fa9a081b.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
      43: (e, t, n) => {
        e.exports = n(202);
      },
      153: (e, t, n) => {
        var r = n(43),
          a = Symbol.for("react.element"),
          o = Symbol.for("react.fragment"),
          l = Object.prototype.hasOwnProperty,
          i =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            o = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            l.call(t, r) && !s.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: u,
            ref: c,
            props: o,
            _owner: i.current,
          };
        }
        (t.jsx = u), (t.jsxs = u);
      },
      202: (e, t) => {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          l = Symbol.for("react.profiler"),
          i = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var g = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          h = {};
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = h),
            (this.updater = n || g);
        }
        function v() {}
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = h),
            (this.updater = n || g);
        }
        (b.prototype.isReactComponent = {}),
          (b.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (b.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (v.prototype = b.prototype);
        var w = (y.prototype = new v());
        (w.constructor = y), m(w, b.prototype), (w.isPureReactComponent = !0);
        var x = Array.isArray,
          S = Object.prototype.hasOwnProperty,
          E = { current: null },
          k = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, t, r) {
          var a,
            o = {},
            l = null,
            i = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (i = t.ref),
            void 0 !== t.key && (l = "" + t.key),
            t))
              S.call(t, a) && !k.hasOwnProperty(a) && (o[a] = t[a]);
          var s = arguments.length - 2;
          if (1 === s) o.children = r;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            o.children = u;
          }
          if (e && e.defaultProps)
            for (a in (s = e.defaultProps)) void 0 === o[a] && (o[a] = s[a]);
          return {
            $$typeof: n,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: E.current,
          };
        }
        function I(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var D = /\/+/g;
        function N(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function P(e, t, a, o, l) {
          var i = typeof e;
          ("undefined" !== i && "boolean" !== i) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (i) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (l = l((s = e))),
              (e = "" === o ? "." + N(s, 0) : o),
              x(l)
                ? ((a = ""),
                  null != e && (a = e.replace(D, "$&/") + "/"),
                  P(l, t, a, "", function (e) {
                    return e;
                  }))
                : null != l &&
                  (I(l) &&
                    (l = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      l,
                      a +
                        (!l.key || (s && s.key === l.key)
                          ? ""
                          : ("" + l.key).replace(D, "$&/") + "/") +
                        e
                    )),
                  t.push(l)),
              1
            );
          if (((s = 0), (o = "" === o ? "." : o + ":"), x(e)))
            for (var u = 0; u < e.length; u++) {
              var c = o + N((i = e[u]), u);
              s += P(i, t, a, c, l);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(i = e.next()).done; )
              s += P((i = i.value), t, a, (c = o + N(i, u++)), l);
          else if ("object" === i)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return s;
        }
        function O(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            P(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function R(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var _ = { current: null },
          T = { transition: null },
          L = {
            ReactCurrentDispatcher: _,
            ReactCurrentBatchConfig: T,
            ReactCurrentOwner: E,
          };
        function A() {
          throw Error(
            "act(...) is not supported in production builds of React."
          );
        }
        (t.Children = {
          map: O,
          forEach: function (e, t, n) {
            O(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              O(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              O(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!I(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = b),
          (t.Fragment = a),
          (t.Profiler = l),
          (t.PureComponent = y),
          (t.StrictMode = o),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L),
          (t.act = A),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = m({}, e.props),
              o = e.key,
              l = e.ref,
              i = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((l = t.ref), (i = E.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in t)
                S.call(t, u) &&
                  !k.hasOwnProperty(u) &&
                  (a[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) a.children = r;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              a.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: o,
              ref: l,
              props: a,
              _owner: i,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = I),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: R,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = T.transition;
            T.transition = {};
            try {
              e();
            } finally {
              T.transition = t;
            }
          }),
          (t.unstable_act = A),
          (t.useCallback = function (e, t) {
            return _.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return _.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return _.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return _.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return _.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return _.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return _.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return _.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return _.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return _.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return _.current.useRef(e);
          }),
          (t.useState = function (e) {
            return _.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return _.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return _.current.useTransition();
          }),
          (t.version = "18.3.1");
      },
      234: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < o(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, l = a >>> 1; r < l; ) {
              var i = 2 * (r + 1) - 1,
                s = e[i],
                u = i + 1,
                c = e[u];
              if (0 > o(s, n))
                u < a && 0 > o(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[i] = n), (r = i));
              else {
                if (!(u < a && 0 > o(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var l = performance;
          t.unstable_now = function () {
            return l.now();
          };
        } else {
          var i = Date,
            s = i.now();
          t.unstable_now = function () {
            return i.now() - s;
          };
        }
        var u = [],
          c = [],
          d = 1,
          f = null,
          p = 3,
          g = !1,
          m = !1,
          h = !1,
          b = "function" === typeof setTimeout ? setTimeout : null,
          v = "function" === typeof clearTimeout ? clearTimeout : null,
          y = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function x(e) {
          if (((h = !1), w(e), !m))
            if (null !== r(u)) (m = !0), T(S);
            else {
              var t = r(c);
              null !== t && L(x, t.startTime - e);
            }
        }
        function S(e, n) {
          (m = !1), h && ((h = !1), v(I), (I = -1)), (g = !0);
          var o = p;
          try {
            for (
              w(n), f = r(u);
              null !== f && (!(f.expirationTime > n) || (e && !P()));

            ) {
              var l = f.callback;
              if ("function" === typeof l) {
                (f.callback = null), (p = f.priorityLevel);
                var i = l(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof i
                    ? (f.callback = i)
                    : f === r(u) && a(u),
                  w(n);
              } else a(u);
              f = r(u);
            }
            if (null !== f) var s = !0;
            else {
              var d = r(c);
              null !== d && L(x, d.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (f = null), (p = o), (g = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var E,
          k = !1,
          C = null,
          I = -1,
          D = 5,
          N = -1;
        function P() {
          return !(t.unstable_now() - N < D);
        }
        function O() {
          if (null !== C) {
            var e = t.unstable_now();
            N = e;
            var n = !0;
            try {
              n = C(!0, e);
            } finally {
              n ? E() : ((k = !1), (C = null));
            }
          } else k = !1;
        }
        if ("function" === typeof y)
          E = function () {
            y(O);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var R = new MessageChannel(),
            _ = R.port2;
          (R.port1.onmessage = O),
            (E = function () {
              _.postMessage(null);
            });
        } else
          E = function () {
            b(O, 0);
          };
        function T(e) {
          (C = e), k || ((k = !0), E());
        }
        function L(e, n) {
          I = b(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || g || ((m = !0), T(S));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (D = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var l = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? l + o : l)
                : (o = l),
              e)
            ) {
              case 1:
                var i = -1;
                break;
              case 2:
                i = 250;
                break;
              case 5:
                i = 1073741823;
                break;
              case 4:
                i = 1e4;
                break;
              default:
                i = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (i = o + i),
                sortIndex: -1,
              }),
              o > l
                ? ((e.sortIndex = o),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (h ? (v(I), (I = -1)) : (h = !0), L(x, o - l)))
                : ((e.sortIndex = i), n(u, e), m || g || ((m = !0), T(S))),
              e
            );
          }),
          (t.unstable_shouldYield = P),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      237: (e, t, n) => {
        n(365);
      },
      365: (e, t, n) => {
        var r = n(43);
        var a =
            "function" === typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e === 1 / t)) ||
                    (e !== e && t !== t)
                  );
                },
          o = r.useSyncExternalStore,
          l = r.useRef,
          i = r.useEffect,
          s = r.useMemo,
          u = r.useDebugValue;
      },
      391: (e, t, n) => {
        var r = n(950);
        (t.H = r.createRoot), r.hydrateRoot;
      },
      579: (e, t, n) => {
        e.exports = n(153);
      },
      730: (e, t, n) => {
        var r = n(43),
          a = n(853);
        function o(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var l = new Set(),
          i = {};
        function s(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (i[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          g = {};
        function m(e, t, n, r, a, o, l) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = l);
        }
        var h = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            h[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            h[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              h[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            h[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              h[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            h[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            h[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            h[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            h[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var b = /[\-:]([a-z])/g;
        function v(e) {
          return e[1].toUpperCase();
        }
        function y(e, t, n, r) {
          var a = h.hasOwnProperty(t) ? h[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(g, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (g[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(b, v);
            h[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(b, v);
              h[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(b, v);
            h[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            h[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (h.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            h[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          x = Symbol.for("react.element"),
          S = Symbol.for("react.portal"),
          E = Symbol.for("react.fragment"),
          k = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          I = Symbol.for("react.provider"),
          D = Symbol.for("react.context"),
          N = Symbol.for("react.forward_ref"),
          P = Symbol.for("react.suspense"),
          O = Symbol.for("react.suspense_list"),
          R = Symbol.for("react.memo"),
          _ = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var T = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var L = Symbol.iterator;
        function A(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (L && e[L]) || e["@@iterator"])
            ? e
            : null;
        }
        var B,
          M = Object.assign;
        function j(e) {
          if (void 0 === B)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              B = (t && t[1]) || "";
            }
          return "\n" + B + e;
        }
        var F = !1;
        function z(e, t) {
          if (!e || F) return "";
          F = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var a = u.stack.split("\n"),
                  o = r.stack.split("\n"),
                  l = a.length - 1,
                  i = o.length - 1;
                1 <= l && 0 <= i && a[l] !== o[i];

              )
                i--;
              for (; 1 <= l && 0 <= i; l--, i--)
                if (a[l] !== o[i]) {
                  if (1 !== l || 1 !== i)
                    do {
                      if ((l--, 0 > --i || a[l] !== o[i])) {
                        var s = "\n" + a[l].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= l && 0 <= i);
                  break;
                }
            }
          } finally {
            (F = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? j(e) : "";
        }
        function U(e) {
          switch (e.tag) {
            case 5:
              return j(e.type);
            case 16:
              return j("Lazy");
            case 13:
              return j("Suspense");
            case 19:
              return j("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = z(e.type, !1));
            case 11:
              return (e = z(e.type.render, !1));
            case 1:
              return (e = z(e.type, !0));
            default:
              return "";
          }
        }
        function G(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case E:
              return "Fragment";
            case S:
              return "Portal";
            case C:
              return "Profiler";
            case k:
              return "StrictMode";
            case P:
              return "Suspense";
            case O:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case D:
                return (e.displayName || "Context") + ".Consumer";
              case I:
                return (e._context.displayName || "Context") + ".Provider";
              case N:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case R:
                return null !== (t = e.displayName || null)
                  ? t
                  : G(e.type) || "Memo";
              case _:
                (t = e._payload), (e = e._init);
                try {
                  return G(e(t));
                } catch (n) {}
            }
          return null;
        }
        function W(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return G(t);
            case 8:
              return t === k ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function H(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function V(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function $(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = V(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = V(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Q(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Y(e, t) {
          var n = t.checked;
          return M({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function K(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = H(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function X(e, t) {
          null != (t = t.checked) && y(e, "checked", t, !1);
        }
        function J(e, t) {
          X(e, t);
          var n = H(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, H(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && Q(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + H(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return M({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (te(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: H(n) };
        }
        function oe(e, t) {
          var n = H(t.value),
            r = H(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function le(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function ie(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? ie(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          ce,
          de =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          ge = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function he(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          ge.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var be = M(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ve(e, t) {
          if (t) {
            if (
              be[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(o(62));
          }
        }
        function ye(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function xe(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Se = null,
          Ee = null,
          ke = null;
        function Ce(e) {
          if ((e = ya(e))) {
            if ("function" !== typeof Se) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = xa(t)), Se(e.stateNode, e.type, t));
          }
        }
        function Ie(e) {
          Ee ? (ke ? ke.push(e) : (ke = [e])) : (Ee = e);
        }
        function De() {
          if (Ee) {
            var e = Ee,
              t = ke;
            if (((ke = Ee = null), Ce(e), t))
              for (e = 0; e < t.length; e++) Ce(t[e]);
          }
        }
        function Ne(e, t) {
          return e(t);
        }
        function Pe() {}
        var Oe = !1;
        function Re(e, t, n) {
          if (Oe) return e(t, n);
          Oe = !0;
          try {
            return Ne(e, t, n);
          } finally {
            (Oe = !1), (null !== Ee || null !== ke) && (Pe(), De());
          }
        }
        function _e(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = xa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var Te = !1;
        if (c)
          try {
            var Le = {};
            Object.defineProperty(Le, "passive", {
              get: function () {
                Te = !0;
              },
            }),
              window.addEventListener("test", Le, Le),
              window.removeEventListener("test", Le, Le);
          } catch (ce) {
            Te = !1;
          }
        function Ae(e, t, n, r, a, o, l, i, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var Be = !1,
          Me = null,
          je = !1,
          Fe = null,
          ze = {
            onError: function (e) {
              (Be = !0), (Me = e);
            },
          };
        function Ue(e, t, n, r, a, o, l, i, s) {
          (Be = !1), (Me = null), Ae.apply(ze, arguments);
        }
        function Ge(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function We(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function He(e) {
          if (Ge(e) !== e) throw Error(o(188));
        }
        function Ve(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ge(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var l = a.alternate;
                if (null === l) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === l.child) {
                  for (l = a.child; l; ) {
                    if (l === n) return He(a), e;
                    if (l === r) return He(a), t;
                    l = l.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = a), (r = l);
                else {
                  for (var i = !1, s = a.child; s; ) {
                    if (s === n) {
                      (i = !0), (n = a), (r = l);
                      break;
                    }
                    if (s === r) {
                      (i = !0), (r = a), (n = l);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!i) {
                    for (s = l.child; s; ) {
                      if (s === n) {
                        (i = !0), (n = l), (r = a);
                        break;
                      }
                      if (s === r) {
                        (i = !0), (r = l), (n = a);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!i) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? $e(e)
            : null;
        }
        function $e(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = $e(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var qe = a.unstable_scheduleCallback,
          Qe = a.unstable_cancelCallback,
          Ye = a.unstable_shouldYield,
          Ke = a.unstable_requestPaint,
          Xe = a.unstable_now,
          Je = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          ot = null;
        var lt = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((it(e) / st) | 0)) | 0;
              },
          it = Math.log,
          st = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes,
            l = 268435455 & n;
          if (0 !== l) {
            var i = l & ~a;
            0 !== i ? (r = dt(i)) : 0 !== (o &= l) && (r = dt(o));
          } else 0 !== (l = n & ~a) ? (r = dt(l)) : 0 !== o && (r = dt(o));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (o = t & -t) || (16 === a && 0 !== (4194240 & o)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - lt(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function gt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function ht(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function bt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - lt(t))] = n);
        }
        function vt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - lt(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var yt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var xt,
          St,
          Et,
          kt,
          Ct,
          It = !1,
          Dt = [],
          Nt = null,
          Pt = null,
          Ot = null,
          Rt = new Map(),
          _t = new Map(),
          Tt = [],
          Lt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function At(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Nt = null;
              break;
            case "dragenter":
            case "dragleave":
              Pt = null;
              break;
            case "mouseover":
            case "mouseout":
              Ot = null;
              break;
            case "pointerover":
            case "pointerout":
              Rt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              _t.delete(t.pointerId);
          }
        }
        function Bt(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ya(t)) && St(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Mt(e) {
          var t = va(e.target);
          if (null !== t) {
            var n = Ge(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = We(n)))
                  return (
                    (e.blockedOn = t),
                    void Ct(e.priority, function () {
                      Et(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function jt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ya(n)) && St(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function Ft(e, t, n) {
          jt(e) && n.delete(t);
        }
        function zt() {
          (It = !1),
            null !== Nt && jt(Nt) && (Nt = null),
            null !== Pt && jt(Pt) && (Pt = null),
            null !== Ot && jt(Ot) && (Ot = null),
            Rt.forEach(Ft),
            _t.forEach(Ft);
        }
        function Ut(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            It ||
              ((It = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, zt)));
        }
        function Gt(e) {
          function t(t) {
            return Ut(t, e);
          }
          if (0 < Dt.length) {
            Ut(Dt[0], e);
            for (var n = 1; n < Dt.length; n++) {
              var r = Dt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Nt && Ut(Nt, e),
              null !== Pt && Ut(Pt, e),
              null !== Ot && Ut(Ot, e),
              Rt.forEach(t),
              _t.forEach(t),
              n = 0;
            n < Tt.length;
            n++
          )
            (r = Tt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Tt.length && null === (n = Tt[0]).blockedOn; )
            Mt(n), null === n.blockedOn && Tt.shift();
        }
        var Wt = w.ReactCurrentBatchConfig,
          Ht = !0;
        function Vt(e, t, n, r) {
          var a = yt,
            o = Wt.transition;
          Wt.transition = null;
          try {
            (yt = 1), qt(e, t, n, r);
          } finally {
            (yt = a), (Wt.transition = o);
          }
        }
        function $t(e, t, n, r) {
          var a = yt,
            o = Wt.transition;
          Wt.transition = null;
          try {
            (yt = 4), qt(e, t, n, r);
          } finally {
            (yt = a), (Wt.transition = o);
          }
        }
        function qt(e, t, n, r) {
          if (Ht) {
            var a = Yt(e, t, n, r);
            if (null === a) Hr(e, t, r, Qt, n), At(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Nt = Bt(Nt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Pt = Bt(Pt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Ot = Bt(Ot, e, t, n, r, a)), !0;
                  case "pointerover":
                    var o = a.pointerId;
                    return Rt.set(o, Bt(Rt.get(o) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (o = a.pointerId),
                      _t.set(o, Bt(_t.get(o) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((At(e, r), 4 & t && -1 < Lt.indexOf(e))) {
              for (; null !== a; ) {
                var o = ya(a);
                if (
                  (null !== o && xt(o),
                  null === (o = Yt(e, t, n, r)) && Hr(e, t, r, Qt, n),
                  o === a)
                )
                  break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else Hr(e, t, r, null, n);
          }
        }
        var Qt = null;
        function Yt(e, t, n, r) {
          if (((Qt = null), null !== (e = va((e = xe(r))))))
            if (null === (t = Ge(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = We(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Qt = e), null;
        }
        function Kt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Je()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Xt = null,
          Jt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Jt,
            r = n.length,
            a = "value" in Xt ? Xt.value : Xt.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var l = r - e;
          for (t = 1; t <= l && n[r - t] === a[o - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, o) {
            for (var l in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(l) && ((t = e[l]), (this[l] = t ? t(a) : a[l]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            M(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          ln,
          sn,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(un),
          dn = M({}, un, { view: 0, detail: 0 }),
          fn = an(dn),
          pn = M({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((on = e.screenX - sn.screenX),
                        (ln = e.screenY - sn.screenY))
                      : (ln = on = 0),
                    (sn = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          gn = an(pn),
          mn = an(M({}, pn, { dataTransfer: 0 })),
          hn = an(M({}, dn, { relatedTarget: 0 })),
          bn = an(
            M({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          vn = M({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          yn = an(vn),
          wn = an(M({}, un, { data: 0 })),
          xn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          Sn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          En = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function kn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = En[e]) && !!t[e];
        }
        function Cn() {
          return kn;
        }
        var In = M({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = xn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? Sn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Dn = an(In),
          Nn = an(
            M({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Pn = an(
            M({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            })
          ),
          On = an(
            M({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Rn = M({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          _n = an(Rn),
          Tn = [9, 13, 27, 32],
          Ln = c && "CompositionEvent" in window,
          An = null;
        c && "documentMode" in document && (An = document.documentMode);
        var Bn = c && "TextEvent" in window && !An,
          Mn = c && (!Ln || (An && 8 < An && 11 >= An)),
          jn = String.fromCharCode(32),
          Fn = !1;
        function zn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Tn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Un(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Gn = !1;
        var Wn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Hn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Wn[e.type] : "textarea" === t;
        }
        function Vn(e, t, n, r) {
          Ie(r),
            0 < (t = $r(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var $n = null,
          qn = null;
        function Qn(e) {
          jr(e, 0);
        }
        function Yn(e) {
          if (q(wa(e))) return e;
        }
        function Kn(e, t) {
          if ("change" === e) return t;
        }
        var Xn = !1;
        if (c) {
          var Jn;
          if (c) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Jn = Zn;
          } else Jn = !1;
          Xn = Jn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          $n && ($n.detachEvent("onpropertychange", nr), (qn = $n = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Yn(qn)) {
            var t = [];
            Vn(t, qn, e, xe(e)), Re(Qn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (qn = n), ($n = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Yn(qn);
        }
        function or(e, t) {
          if ("click" === e) return Yn(t);
        }
        function lr(e, t) {
          if ("input" === e || "change" === e) return Yn(t);
        }
        var ir =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function sr(e, t) {
          if (ir(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!d.call(t, a) || !ir(e[a], t[a])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = Q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = Q((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function gr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  o = Math.min(r.start, a);
                (r = void 0 === r.end ? o : Math.min(r.end, a)),
                  !e.extend && o > r && ((a = r), (r = o), (o = a)),
                  (a = cr(n, o));
                var l = cr(n, r);
                a &&
                  l &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== l.node ||
                    e.focusOffset !== l.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(t), e.extend(l.node, l.offset))
                    : (t.setEnd(l.node, l.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          hr = null,
          br = null,
          vr = null,
          yr = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          yr ||
            null == hr ||
            hr !== Q(r) ||
            ("selectionStart" in (r = hr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (vr && sr(vr, r)) ||
              ((vr = r),
              0 < (r = $r(br, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = hr))));
        }
        function xr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var Sr = {
            animationend: xr("Animation", "AnimationEnd"),
            animationiteration: xr("Animation", "AnimationIteration"),
            animationstart: xr("Animation", "AnimationStart"),
            transitionend: xr("Transition", "TransitionEnd"),
          },
          Er = {},
          kr = {};
        function Cr(e) {
          if (Er[e]) return Er[e];
          if (!Sr[e]) return e;
          var t,
            n = Sr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in kr) return (Er[e] = n[t]);
          return e;
        }
        c &&
          ((kr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete Sr.animationend.animation,
            delete Sr.animationiteration.animation,
            delete Sr.animationstart.animation),
          "TransitionEvent" in window || delete Sr.transitionend.transition);
        var Ir = Cr("animationend"),
          Dr = Cr("animationiteration"),
          Nr = Cr("animationstart"),
          Pr = Cr("transitionend"),
          Or = new Map(),
          Rr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function _r(e, t) {
          Or.set(e, t), s(t, [e]);
        }
        for (var Tr = 0; Tr < Rr.length; Tr++) {
          var Lr = Rr[Tr];
          _r(Lr.toLowerCase(), "on" + (Lr[0].toUpperCase() + Lr.slice(1)));
        }
        _r(Ir, "onAnimationEnd"),
          _r(Dr, "onAnimationIteration"),
          _r(Nr, "onAnimationStart"),
          _r("dblclick", "onDoubleClick"),
          _r("focusin", "onFocus"),
          _r("focusout", "onBlur"),
          _r(Pr, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Ar =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Br = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Ar)
          );
        function Mr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, l, i, s, u) {
              if ((Ue.apply(this, arguments), Be)) {
                if (!Be) throw Error(o(198));
                var c = Me;
                (Be = !1), (Me = null), je || ((je = !0), (Fe = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function jr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                  var i = r[l],
                    s = i.instance,
                    u = i.currentTarget;
                  if (((i = i.listener), s !== o && a.isPropagationStopped()))
                    break e;
                  Mr(a, i, u), (o = s);
                }
              else
                for (l = 0; l < r.length; l++) {
                  if (
                    ((s = (i = r[l]).instance),
                    (u = i.currentTarget),
                    (i = i.listener),
                    s !== o && a.isPropagationStopped())
                  )
                    break e;
                  Mr(a, i, u), (o = s);
                }
            }
          }
          if (je) throw ((e = Fe), (je = !1), (Fe = null), e);
        }
        function Fr(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Wr(t, e, 2, !1), n.add(r));
        }
        function zr(e, t, n) {
          var r = 0;
          t && (r |= 4), Wr(n, e, r, t);
        }
        var Ur = "_reactListening" + Math.random().toString(36).slice(2);
        function Gr(e) {
          if (!e[Ur]) {
            (e[Ur] = !0),
              l.forEach(function (t) {
                "selectionchange" !== t &&
                  (Br.has(t) || zr(t, !1, e), zr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Ur] || ((t[Ur] = !0), zr("selectionchange", !1, t));
          }
        }
        function Wr(e, t, n, r) {
          switch (Kt(t)) {
            case 1:
              var a = Vt;
              break;
            case 4:
              a = $t;
              break;
            default:
              a = qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Te ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Hr(e, t, n, r, a) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var l = r.tag;
              if (3 === l || 4 === l) {
                var i = r.stateNode.containerInfo;
                if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
                if (4 === l)
                  for (l = r.return; null !== l; ) {
                    var s = l.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = l.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return;
                    l = l.return;
                  }
                for (; null !== i; ) {
                  if (null === (l = va(i))) return;
                  if (5 === (s = l.tag) || 6 === s) {
                    r = o = l;
                    continue e;
                  }
                  i = i.parentNode;
                }
              }
              r = r.return;
            }
          Re(function () {
            var r = o,
              a = xe(n),
              l = [];
            e: {
              var i = Or.get(e);
              if (void 0 !== i) {
                var s = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = Dn;
                    break;
                  case "focusin":
                    (u = "focus"), (s = hn);
                    break;
                  case "focusout":
                    (u = "blur"), (s = hn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = hn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = gn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = Pn;
                    break;
                  case Ir:
                  case Dr:
                  case Nr:
                    s = bn;
                    break;
                  case Pr:
                    s = On;
                    break;
                  case "scroll":
                    s = fn;
                    break;
                  case "wheel":
                    s = _n;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = yn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = Nn;
                }
                var c = 0 !== (4 & t),
                  d = !c && "scroll" === e,
                  f = c ? (null !== i ? i + "Capture" : null) : i;
                c = [];
                for (var p, g = r; null !== g; ) {
                  var m = (p = g).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== f &&
                        null != (m = _e(g, f)) &&
                        c.push(Vr(g, m, p))),
                    d)
                  )
                    break;
                  g = g.return;
                }
                0 < c.length &&
                  ((i = new s(i, u, null, n, a)),
                  l.push({ event: i, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(i = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!va(u) && !u[ga])) &&
                  (s || i) &&
                  ((i =
                    a.window === a
                      ? a
                      : (i = a.ownerDocument)
                      ? i.defaultView || i.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? va(u)
                          : null) &&
                        (u !== (d = Ge(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = gn),
                  (m = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (g = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Nn),
                    (m = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (g = "pointer")),
                  (d = null == s ? i : wa(s)),
                  (p = null == u ? i : wa(u)),
                  ((i = new c(m, g + "leave", s, n, a)).target = d),
                  (i.relatedTarget = p),
                  (m = null),
                  va(a) === r &&
                    (((c = new c(f, g + "enter", u, n, a)).target = p),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  s && u)
                )
                  e: {
                    for (f = u, g = 0, p = c = s; p; p = qr(p)) g++;
                    for (p = 0, m = f; m; m = qr(m)) p++;
                    for (; 0 < g - p; ) (c = qr(c)), g--;
                    for (; 0 < p - g; ) (f = qr(f)), p--;
                    for (; g--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = qr(c)), (f = qr(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && Qr(l, i, s, c, !1),
                  null !== u && null !== d && Qr(l, d, u, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (i = r ? wa(r) : window).nodeName &&
                    i.nodeName.toLowerCase()) ||
                ("input" === s && "file" === i.type)
              )
                var h = Kn;
              else if (Hn(i))
                if (Xn) h = lr;
                else {
                  h = ar;
                  var b = rr;
                }
              else
                (s = i.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === i.type || "radio" === i.type) &&
                  (h = or);
              switch (
                (h && (h = h(e, r))
                  ? Vn(l, h, n, a)
                  : (b && b(e, i, r),
                    "focusout" === e &&
                      (b = i._wrapperState) &&
                      b.controlled &&
                      "number" === i.type &&
                      ee(i, "number", i.value)),
                (b = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  (Hn(b) || "true" === b.contentEditable) &&
                    ((hr = b), (br = r), (vr = null));
                  break;
                case "focusout":
                  vr = br = hr = null;
                  break;
                case "mousedown":
                  yr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (yr = !1), wr(l, n, a);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  wr(l, n, a);
              }
              var v;
              if (Ln)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var y = "onCompositionStart";
                      break e;
                    case "compositionend":
                      y = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      y = "onCompositionUpdate";
                      break e;
                  }
                  y = void 0;
                }
              else
                Gn
                  ? zn(e, n) && (y = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (y = "onCompositionStart");
              y &&
                (Mn &&
                  "ko" !== n.locale &&
                  (Gn || "onCompositionStart" !== y
                    ? "onCompositionEnd" === y && Gn && (v = en())
                    : ((Jt = "value" in (Xt = a) ? Xt.value : Xt.textContent),
                      (Gn = !0))),
                0 < (b = $r(r, y)).length &&
                  ((y = new wn(y, e, null, n, a)),
                  l.push({ event: y, listeners: b }),
                  v ? (y.data = v) : null !== (v = Un(n)) && (y.data = v))),
                (v = Bn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Un(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Fn = !0), jn);
                        case "textInput":
                          return (e = t.data) === jn && Fn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Gn)
                        return "compositionend" === e || (!Ln && zn(e, t))
                          ? ((e = en()), (Zt = Jt = Xt = null), (Gn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Mn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = $r(r, "onBeforeInput")).length &&
                  ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                  l.push({ event: a, listeners: r }),
                  (a.data = v));
            }
            jr(l, t);
          });
        }
        function Vr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function $r(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = _e(e, n)) && r.unshift(Vr(e, o, a)),
              null != (o = _e(e, t)) && r.push(Vr(e, o, a))),
              (e = e.return);
          }
          return r;
        }
        function qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Qr(e, t, n, r, a) {
          for (var o = t._reactName, l = []; null !== n && n !== r; ) {
            var i = n,
              s = i.alternate,
              u = i.stateNode;
            if (null !== s && s === r) break;
            5 === i.tag &&
              null !== u &&
              ((i = u),
              a
                ? null != (s = _e(n, o)) && l.unshift(Vr(n, s, i))
                : a || (null != (s = _e(n, o)) && l.push(Vr(n, s, i)))),
              (n = n.return);
          }
          0 !== l.length && e.push({ event: t, listeners: l });
        }
        var Yr = /\r\n?/g,
          Kr = /\u0000|\uFFFD/g;
        function Xr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Yr, "\n")
            .replace(Kr, "");
        }
        function Jr(e, t, n) {
          if (((t = Xr(t)), Xr(e) !== t && n)) throw Error(o(425));
        }
        function Zr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          oa = "function" === typeof Promise ? Promise : void 0,
          la =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof oa
              ? function (e) {
                  return oa.resolve(null).then(e).catch(ia);
                }
              : ra;
        function ia(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function sa(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Gt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Gt(t);
        }
        function ua(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          fa = "__reactFiber$" + da,
          pa = "__reactProps$" + da,
          ga = "__reactContainer$" + da,
          ma = "__reactEvents$" + da,
          ha = "__reactListeners$" + da,
          ba = "__reactHandles$" + da;
        function va(e) {
          var t = e[fa];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ga] || n[fa])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[fa])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ya(e) {
          return !(e = e[fa] || e[ga]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function xa(e) {
          return e[pa] || null;
        }
        var Sa = [],
          Ea = -1;
        function ka(e) {
          return { current: e };
        }
        function Ca(e) {
          0 > Ea || ((e.current = Sa[Ea]), (Sa[Ea] = null), Ea--);
        }
        function Ia(e, t) {
          Ea++, (Sa[Ea] = e.current), (e.current = t);
        }
        var Da = {},
          Na = ka(Da),
          Pa = ka(!1),
          Oa = Da;
        function Ra(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Da;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in n) o[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function _a(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Ta() {
          Ca(Pa), Ca(Na);
        }
        function La(e, t, n) {
          if (Na.current !== Da) throw Error(o(168));
          Ia(Na, t), Ia(Pa, n);
        }
        function Aa(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(o(108, W(e) || "Unknown", a));
          return M({}, n, r);
        }
        function Ba(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Da),
            (Oa = Na.current),
            Ia(Na, e),
            Ia(Pa, Pa.current),
            !0
          );
        }
        function Ma(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = Aa(e, t, Oa)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ca(Pa),
              Ca(Na),
              Ia(Na, e))
            : Ca(Pa),
            Ia(Pa, n);
        }
        var ja = null,
          Fa = !1,
          za = !1;
        function Ua(e) {
          null === ja ? (ja = [e]) : ja.push(e);
        }
        function Ga() {
          if (!za && null !== ja) {
            za = !0;
            var e = 0,
              t = yt;
            try {
              var n = ja;
              for (yt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (ja = null), (Fa = !1);
            } catch (a) {
              throw (null !== ja && (ja = ja.slice(e + 1)), qe(Ze, Ga), a);
            } finally {
              (yt = t), (za = !1);
            }
          }
          return null;
        }
        var Wa = [],
          Ha = 0,
          Va = null,
          $a = 0,
          qa = [],
          Qa = 0,
          Ya = null,
          Ka = 1,
          Xa = "";
        function Ja(e, t) {
          (Wa[Ha++] = $a), (Wa[Ha++] = Va), (Va = e), ($a = t);
        }
        function Za(e, t, n) {
          (qa[Qa++] = Ka), (qa[Qa++] = Xa), (qa[Qa++] = Ya), (Ya = e);
          var r = Ka;
          e = Xa;
          var a = 32 - lt(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var o = 32 - lt(t) + a;
          if (30 < o) {
            var l = a - (a % 5);
            (o = (r & ((1 << l) - 1)).toString(32)),
              (r >>= l),
              (a -= l),
              (Ka = (1 << (32 - lt(t) + a)) | (n << a) | r),
              (Xa = o + e);
          } else (Ka = (1 << o) | (n << a) | r), (Xa = e);
        }
        function eo(e) {
          null !== e.return && (Ja(e, 1), Za(e, 1, 0));
        }
        function to(e) {
          for (; e === Va; )
            (Va = Wa[--Ha]), (Wa[Ha] = null), ($a = Wa[--Ha]), (Wa[Ha] = null);
          for (; e === Ya; )
            (Ya = qa[--Qa]),
              (qa[Qa] = null),
              (Xa = qa[--Qa]),
              (qa[Qa] = null),
              (Ka = qa[--Qa]),
              (qa[Qa] = null);
        }
        var no = null,
          ro = null,
          ao = !1,
          oo = null;
        function lo(e, t) {
          var n = Ru(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function io(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (no = e), (ro = ua(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ya ? { id: Ka, overflow: Xa } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Ru(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (no = e),
                (ro = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function so(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function uo(e) {
          if (ao) {
            var t = ro;
            if (t) {
              var n = t;
              if (!io(e, t)) {
                if (so(e)) throw Error(o(418));
                t = ua(n.nextSibling);
                var r = no;
                t && io(e, t)
                  ? lo(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e));
              }
            } else {
              if (so(e)) throw Error(o(418));
              (e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e);
            }
          }
        }
        function co(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          no = e;
        }
        function fo(e) {
          if (e !== no) return !1;
          if (!ao) return co(e), (ao = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ro))
          ) {
            if (so(e)) throw (po(), Error(o(418)));
            for (; t; ) lo(e, t), (t = ua(t.nextSibling));
          }
          if ((co(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ro = ua(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ro = null;
            }
          } else ro = no ? ua(e.stateNode.nextSibling) : null;
          return !0;
        }
        function po() {
          for (var e = ro; e; ) e = ua(e.nextSibling);
        }
        function go() {
          (ro = no = null), (ao = !1);
        }
        function mo(e) {
          null === oo ? (oo = [e]) : oo.push(e);
        }
        var ho = w.ReactCurrentBatchConfig;
        function bo(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var a = r,
                l = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === l
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    null === e ? delete t[l] : (t[l] = e);
                  }),
                  (t._stringRef = l),
                  t);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function vo(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function yo(e) {
          return (0, e._init)(e._payload);
        }
        function wo(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Tu(e, t)).index = 0), (e.sibling = null), e;
          }
          function l(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function i(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Mu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var o = n.type;
            return o === E
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === o ||
                  ("object" === typeof o &&
                    null !== o &&
                    o.$$typeof === _ &&
                    yo(o) === t.type))
              ? (((r = a(t, n.props)).ref = bo(e, t, n)), (r.return = e), r)
              : (((r = Lu(n.type, n.key, n.props, null, e.mode, r)).ref = bo(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = ju(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = Au(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Mu("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case x:
                  return (
                    ((n = Lu(t.type, t.key, t.props, null, e.mode, n)).ref = bo(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case S:
                  return ((t = ju(t, e.mode, n)).return = e), t;
                case _:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || A(t))
                return ((t = Au(t, e.mode, n, null)).return = e), t;
              vo(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case x:
                  return n.key === a ? u(e, t, n, r) : null;
                case S:
                  return n.key === a ? c(e, t, n, r) : null;
                case _:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || A(n)) return null !== a ? null : d(e, t, n, r, null);
              vo(e, n);
            }
            return null;
          }
          function g(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case x:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case S:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case _:
                  return g(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || A(r))
                return d(t, (e = e.get(n) || null), r, a, null);
              vo(t, r);
            }
            return null;
          }
          function m(a, o, i, s) {
            for (
              var u = null, c = null, d = o, m = (o = 0), h = null;
              null !== d && m < i.length;
              m++
            ) {
              d.index > m ? ((h = d), (d = null)) : (h = d.sibling);
              var b = p(a, d, i[m], s);
              if (null === b) {
                null === d && (d = h);
                break;
              }
              e && d && null === b.alternate && t(a, d),
                (o = l(b, o, m)),
                null === c ? (u = b) : (c.sibling = b),
                (c = b),
                (d = h);
            }
            if (m === i.length) return n(a, d), ao && Ja(a, m), u;
            if (null === d) {
              for (; m < i.length; m++)
                null !== (d = f(a, i[m], s)) &&
                  ((o = l(d, o, m)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return ao && Ja(a, m), u;
            }
            for (d = r(a, d); m < i.length; m++)
              null !== (h = g(d, a, m, i[m], s)) &&
                (e &&
                  null !== h.alternate &&
                  d.delete(null === h.key ? m : h.key),
                (o = l(h, o, m)),
                null === c ? (u = h) : (c.sibling = h),
                (c = h));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Ja(a, m),
              u
            );
          }
          function h(a, i, s, u) {
            var c = A(s);
            if ("function" !== typeof c) throw Error(o(150));
            if (null == (s = c.call(s))) throw Error(o(151));
            for (
              var d = (c = null), m = i, h = (i = 0), b = null, v = s.next();
              null !== m && !v.done;
              h++, v = s.next()
            ) {
              m.index > h ? ((b = m), (m = null)) : (b = m.sibling);
              var y = p(a, m, v.value, u);
              if (null === y) {
                null === m && (m = b);
                break;
              }
              e && m && null === y.alternate && t(a, m),
                (i = l(y, i, h)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y),
                (m = b);
            }
            if (v.done) return n(a, m), ao && Ja(a, h), c;
            if (null === m) {
              for (; !v.done; h++, v = s.next())
                null !== (v = f(a, v.value, u)) &&
                  ((i = l(v, i, h)),
                  null === d ? (c = v) : (d.sibling = v),
                  (d = v));
              return ao && Ja(a, h), c;
            }
            for (m = r(a, m); !v.done; h++, v = s.next())
              null !== (v = g(m, a, h, v.value, u)) &&
                (e &&
                  null !== v.alternate &&
                  m.delete(null === v.key ? h : v.key),
                (i = l(v, i, h)),
                null === d ? (c = v) : (d.sibling = v),
                (d = v));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Ja(a, h),
              c
            );
          }
          return function e(r, o, l, s) {
            if (
              ("object" === typeof l &&
                null !== l &&
                l.type === E &&
                null === l.key &&
                (l = l.props.children),
              "object" === typeof l && null !== l)
            ) {
              switch (l.$$typeof) {
                case x:
                  e: {
                    for (var u = l.key, c = o; null !== c; ) {
                      if (c.key === u) {
                        if ((u = l.type) === E) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((o = a(c, l.props.children)).return = r),
                              (r = o);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === _ &&
                            yo(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((o = a(c, l.props)).ref = bo(r, c, l)),
                            (o.return = r),
                            (r = o);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    l.type === E
                      ? (((o = Au(l.props.children, r.mode, s, l.key)).return =
                          r),
                        (r = o))
                      : (((s = Lu(
                          l.type,
                          l.key,
                          l.props,
                          null,
                          r.mode,
                          s
                        )).ref = bo(r, o, l)),
                        (s.return = r),
                        (r = s));
                  }
                  return i(r);
                case S:
                  e: {
                    for (c = l.key; null !== o; ) {
                      if (o.key === c) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === l.containerInfo &&
                          o.stateNode.implementation === l.implementation
                        ) {
                          n(r, o.sibling),
                            ((o = a(o, l.children || [])).return = r),
                            (r = o);
                          break e;
                        }
                        n(r, o);
                        break;
                      }
                      t(r, o), (o = o.sibling);
                    }
                    ((o = ju(l, r.mode, s)).return = r), (r = o);
                  }
                  return i(r);
                case _:
                  return e(r, o, (c = l._init)(l._payload), s);
              }
              if (te(l)) return m(r, o, l, s);
              if (A(l)) return h(r, o, l, s);
              vo(r, l);
            }
            return ("string" === typeof l && "" !== l) || "number" === typeof l
              ? ((l = "" + l),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = a(o, l)).return = r), (r = o))
                  : (n(r, o), ((o = Mu(l, r.mode, s)).return = r), (r = o)),
                i(r))
              : n(r, o);
          };
        }
        var xo = wo(!0),
          So = wo(!1),
          Eo = ka(null),
          ko = null,
          Co = null,
          Io = null;
        function Do() {
          Io = Co = ko = null;
        }
        function No(e) {
          var t = Eo.current;
          Ca(Eo), (e._currentValue = t);
        }
        function Po(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Oo(e, t) {
          (ko = e),
            (Io = Co = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (yi = !0), (e.firstContext = null));
        }
        function Ro(e) {
          var t = e._currentValue;
          if (Io !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === Co)
            ) {
              if (null === ko) throw Error(o(308));
              (Co = e), (ko.dependencies = { lanes: 0, firstContext: e });
            } else Co = Co.next = e;
          return t;
        }
        var _o = null;
        function To(e) {
          null === _o ? (_o = [e]) : _o.push(e);
        }
        function Lo(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), To(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Ao(e, r)
          );
        }
        function Ao(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Bo = !1;
        function Mo(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function jo(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Fo(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function zo(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Ns))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Ao(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), To(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Ao(e, n)
          );
        }
        function Uo(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n);
          }
        }
        function Go(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var l = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (a = o = l) : (o = o.next = l), (n = n.next);
              } while (null !== n);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Wo(e, t, n, r) {
          var a = e.updateQueue;
          Bo = !1;
          var o = a.firstBaseUpdate,
            l = a.lastBaseUpdate,
            i = a.shared.pending;
          if (null !== i) {
            a.shared.pending = null;
            var s = i,
              u = s.next;
            (s.next = null), null === l ? (o = u) : (l.next = u), (l = s);
            var c = e.alternate;
            null !== c &&
              (i = (c = c.updateQueue).lastBaseUpdate) !== l &&
              (null === i ? (c.firstBaseUpdate = u) : (i.next = u),
              (c.lastBaseUpdate = s));
          }
          if (null !== o) {
            var d = a.baseState;
            for (l = 0, c = u = s = null, i = o; ; ) {
              var f = i.lane,
                p = i.eventTime;
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: i.tag,
                      payload: i.payload,
                      callback: i.callback,
                      next: null,
                    });
                e: {
                  var g = e,
                    m = i;
                  switch (((f = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (g = m.payload)) {
                        d = g.call(p, d, f);
                        break e;
                      }
                      d = g;
                      break e;
                    case 3:
                      g.flags = (-65537 & g.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (g = m.payload)
                              ? g.call(p, d, f)
                              : g) ||
                        void 0 === f
                      )
                        break e;
                      d = M({}, d, f);
                      break e;
                    case 2:
                      Bo = !0;
                  }
                }
                null !== i.callback &&
                  0 !== i.lane &&
                  ((e.flags |= 64),
                  null === (f = a.effects) ? (a.effects = [i]) : f.push(i));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (s = d)) : (c = c.next = p),
                  (l |= f);
              if (null === (i = i.next)) {
                if (null === (i = a.shared.pending)) break;
                (i = (f = i).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (s = d),
              (a.baseState = s),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (l |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === o && (a.shared.lanes = 0);
            (Bs |= l), (e.lanes = l), (e.memoizedState = d);
          }
        }
        function Ho(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(o(191, a));
                a.call(r);
              }
            }
        }
        var Vo = {},
          $o = ka(Vo),
          qo = ka(Vo),
          Qo = ka(Vo);
        function Yo(e) {
          if (e === Vo) throw Error(o(174));
          return e;
        }
        function Ko(e, t) {
          switch ((Ia(Qo, t), Ia(qo, e), Ia($o, Vo), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ca($o), Ia($o, t);
        }
        function Xo() {
          Ca($o), Ca(qo), Ca(Qo);
        }
        function Jo(e) {
          Yo(Qo.current);
          var t = Yo($o.current),
            n = se(t, e.type);
          t !== n && (Ia(qo, e), Ia($o, n));
        }
        function Zo(e) {
          qo.current === e && (Ca($o), Ca(qo));
        }
        var el = ka(0);
        function tl(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var nl = [];
        function rl() {
          for (var e = 0; e < nl.length; e++)
            nl[e]._workInProgressVersionPrimary = null;
          nl.length = 0;
        }
        var al = w.ReactCurrentDispatcher,
          ol = w.ReactCurrentBatchConfig,
          ll = 0,
          il = null,
          sl = null,
          ul = null,
          cl = !1,
          dl = !1,
          fl = 0,
          pl = 0;
        function gl() {
          throw Error(o(321));
        }
        function ml(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!ir(e[n], t[n])) return !1;
          return !0;
        }
        function hl(e, t, n, r, a, l) {
          if (
            ((ll = l),
            (il = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (al.current = null === e || null === e.memoizedState ? Zl : ei),
            (e = n(r, a)),
            dl)
          ) {
            l = 0;
            do {
              if (((dl = !1), (fl = 0), 25 <= l)) throw Error(o(301));
              (l += 1),
                (ul = sl = null),
                (t.updateQueue = null),
                (al.current = ti),
                (e = n(r, a));
            } while (dl);
          }
          if (
            ((al.current = Jl),
            (t = null !== sl && null !== sl.next),
            (ll = 0),
            (ul = sl = il = null),
            (cl = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function bl() {
          var e = 0 !== fl;
          return (fl = 0), e;
        }
        function vl() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === ul ? (il.memoizedState = ul = e) : (ul = ul.next = e), ul
          );
        }
        function yl() {
          if (null === sl) {
            var e = il.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = sl.next;
          var t = null === ul ? il.memoizedState : ul.next;
          if (null !== t) (ul = t), (sl = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (sl = e).memoizedState,
              baseState: sl.baseState,
              baseQueue: sl.baseQueue,
              queue: sl.queue,
              next: null,
            }),
              null === ul ? (il.memoizedState = ul = e) : (ul = ul.next = e);
          }
          return ul;
        }
        function wl(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function xl(e) {
          var t = yl(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = sl,
            a = r.baseQueue,
            l = n.pending;
          if (null !== l) {
            if (null !== a) {
              var i = a.next;
              (a.next = l.next), (l.next = i);
            }
            (r.baseQueue = a = l), (n.pending = null);
          }
          if (null !== a) {
            (l = a.next), (r = r.baseState);
            var s = (i = null),
              u = null,
              c = l;
            do {
              var d = c.lane;
              if ((ll & d) === d)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((s = u = f), (i = r)) : (u = u.next = f),
                  (il.lanes |= d),
                  (Bs |= d);
              }
              c = c.next;
            } while (null !== c && c !== l);
            null === u ? (i = r) : (u.next = s),
              ir(r, t.memoizedState) || (yi = !0),
              (t.memoizedState = r),
              (t.baseState = i),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (l = a.lane), (il.lanes |= l), (Bs |= l), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Sl(e) {
          var t = yl(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            l = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var i = (a = a.next);
            do {
              (l = e(l, i.action)), (i = i.next);
            } while (i !== a);
            ir(l, t.memoizedState) || (yi = !0),
              (t.memoizedState = l),
              null === t.baseQueue && (t.baseState = l),
              (n.lastRenderedState = l);
          }
          return [l, r];
        }
        function El() {}
        function kl(e, t) {
          var n = il,
            r = yl(),
            a = t(),
            l = !ir(r.memoizedState, a);
          if (
            (l && ((r.memoizedState = a), (yi = !0)),
            (r = r.queue),
            Bl(Dl.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              l ||
              (null !== ul && 1 & ul.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Rl(9, Il.bind(null, n, r, a, t), void 0, null),
              null === Ps)
            )
              throw Error(o(349));
            0 !== (30 & ll) || Cl(n, t, a);
          }
          return a;
        }
        function Cl(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = il.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (il.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Il(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Nl(t) && Pl(e);
        }
        function Dl(e, t, n) {
          return n(function () {
            Nl(t) && Pl(e);
          });
        }
        function Nl(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !ir(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Pl(e) {
          var t = Ao(e, 1);
          null !== t && nu(t, e, 1, -1);
        }
        function Ol(e) {
          var t = vl();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: wl,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = Ql.bind(null, il, e)),
            [t.memoizedState, e]
          );
        }
        function Rl(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = il.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (il.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function _l() {
          return yl().memoizedState;
        }
        function Tl(e, t, n, r) {
          var a = vl();
          (il.flags |= e),
            (a.memoizedState = Rl(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Ll(e, t, n, r) {
          var a = yl();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== sl) {
            var l = sl.memoizedState;
            if (((o = l.destroy), null !== r && ml(r, l.deps)))
              return void (a.memoizedState = Rl(t, n, o, r));
          }
          (il.flags |= e), (a.memoizedState = Rl(1 | t, n, o, r));
        }
        function Al(e, t) {
          return Tl(8390656, 8, e, t);
        }
        function Bl(e, t) {
          return Ll(2048, 8, e, t);
        }
        function Ml(e, t) {
          return Ll(4, 2, e, t);
        }
        function jl(e, t) {
          return Ll(4, 4, e, t);
        }
        function Fl(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function zl(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Ll(4, 4, Fl.bind(null, t, e), n)
          );
        }
        function Ul() {}
        function Gl(e, t) {
          var n = yl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ml(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Wl(e, t) {
          var n = yl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ml(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Hl(e, t, n) {
          return 0 === (21 & ll)
            ? (e.baseState && ((e.baseState = !1), (yi = !0)),
              (e.memoizedState = n))
            : (ir(n, t) ||
                ((n = mt()), (il.lanes |= n), (Bs |= n), (e.baseState = !0)),
              t);
        }
        function Vl(e, t) {
          var n = yt;
          (yt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = ol.transition;
          ol.transition = {};
          try {
            e(!1), t();
          } finally {
            (yt = n), (ol.transition = r);
          }
        }
        function $l() {
          return yl().memoizedState;
        }
        function ql(e, t, n) {
          var r = tu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            Yl(e))
          )
            Kl(t, n);
          else if (null !== (n = Lo(e, t, n, r))) {
            nu(n, e, r, eu()), Xl(n, t, r);
          }
        }
        function Ql(e, t, n) {
          var r = tu(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (Yl(e)) Kl(t, a);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var l = t.lastRenderedState,
                  i = o(l, n);
                if (((a.hasEagerState = !0), (a.eagerState = i), ir(i, l))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((a.next = a), To(t))
                      : ((a.next = s.next), (s.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (u) {}
            null !== (n = Lo(e, t, a, r)) &&
              (nu(n, e, r, (a = eu())), Xl(n, t, r));
          }
        }
        function Yl(e) {
          var t = e.alternate;
          return e === il || (null !== t && t === il);
        }
        function Kl(e, t) {
          dl = cl = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function Xl(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n);
          }
        }
        var Jl = {
            readContext: Ro,
            useCallback: gl,
            useContext: gl,
            useEffect: gl,
            useImperativeHandle: gl,
            useInsertionEffect: gl,
            useLayoutEffect: gl,
            useMemo: gl,
            useReducer: gl,
            useRef: gl,
            useState: gl,
            useDebugValue: gl,
            useDeferredValue: gl,
            useTransition: gl,
            useMutableSource: gl,
            useSyncExternalStore: gl,
            useId: gl,
            unstable_isNewReconciler: !1,
          },
          Zl = {
            readContext: Ro,
            useCallback: function (e, t) {
              return (vl().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Ro,
            useEffect: Al,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Tl(4194308, 4, Fl.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Tl(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Tl(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = vl();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = vl();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = ql.bind(null, il, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (vl().memoizedState = e);
            },
            useState: Ol,
            useDebugValue: Ul,
            useDeferredValue: function (e) {
              return (vl().memoizedState = e);
            },
            useTransition: function () {
              var e = Ol(!1),
                t = e[0];
              return (
                (e = Vl.bind(null, e[1])), (vl().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = il,
                a = vl();
              if (ao) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === Ps)) throw Error(o(349));
                0 !== (30 & ll) || Cl(r, t, n);
              }
              a.memoizedState = n;
              var l = { value: n, getSnapshot: t };
              return (
                (a.queue = l),
                Al(Dl.bind(null, r, l, e), [e]),
                (r.flags |= 2048),
                Rl(9, Il.bind(null, r, l, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = vl(),
                t = Ps.identifierPrefix;
              if (ao) {
                var n = Xa;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ka & ~(1 << (32 - lt(Ka) - 1))).toString(32) + n)),
                  0 < (n = fl++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = pl++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ei = {
            readContext: Ro,
            useCallback: Gl,
            useContext: Ro,
            useEffect: Bl,
            useImperativeHandle: zl,
            useInsertionEffect: Ml,
            useLayoutEffect: jl,
            useMemo: Wl,
            useReducer: xl,
            useRef: _l,
            useState: function () {
              return xl(wl);
            },
            useDebugValue: Ul,
            useDeferredValue: function (e) {
              return Hl(yl(), sl.memoizedState, e);
            },
            useTransition: function () {
              return [xl(wl)[0], yl().memoizedState];
            },
            useMutableSource: El,
            useSyncExternalStore: kl,
            useId: $l,
            unstable_isNewReconciler: !1,
          },
          ti = {
            readContext: Ro,
            useCallback: Gl,
            useContext: Ro,
            useEffect: Bl,
            useImperativeHandle: zl,
            useInsertionEffect: Ml,
            useLayoutEffect: jl,
            useMemo: Wl,
            useReducer: Sl,
            useRef: _l,
            useState: function () {
              return Sl(wl);
            },
            useDebugValue: Ul,
            useDeferredValue: function (e) {
              var t = yl();
              return null === sl
                ? (t.memoizedState = e)
                : Hl(t, sl.memoizedState, e);
            },
            useTransition: function () {
              return [Sl(wl)[0], yl().memoizedState];
            },
            useMutableSource: El,
            useSyncExternalStore: kl,
            useId: $l,
            unstable_isNewReconciler: !1,
          };
        function ni(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = M({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        function ri(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : M({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var ai = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ge(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              a = tu(e),
              o = Fo(r, a);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = zo(e, o, a)) && (nu(t, e, a, r), Uo(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              a = tu(e),
              o = Fo(r, a);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = zo(e, o, a)) && (nu(t, e, a, r), Uo(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = eu(),
              r = tu(e),
              a = Fo(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = zo(e, a, r)) && (nu(t, e, r, n), Uo(t, e, r));
          },
        };
        function oi(e, t, n, r, a, o, l) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, l)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(a, o);
        }
        function li(e, t, n) {
          var r = !1,
            a = Da,
            o = t.contextType;
          return (
            "object" === typeof o && null !== o
              ? (o = Ro(o))
              : ((a = _a(t) ? Oa : Na.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Ra(e, a)
                  : Da)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = ai),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function ii(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && ai.enqueueReplaceState(t, t.state, null);
        }
        function si(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = {}), Mo(e);
          var o = t.contextType;
          "object" === typeof o && null !== o
            ? (a.context = Ro(o))
            : ((o = _a(t) ? Oa : Na.current), (a.context = Ra(e, o))),
            (a.state = e.memoizedState),
            "function" === typeof (o = t.getDerivedStateFromProps) &&
              (ri(e, t, o, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && ai.enqueueReplaceState(a, a.state, null),
              Wo(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function ui(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += U(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (o) {
            a = "\nError generating stack: " + o.message + "\n" + o.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function ci(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function di(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var fi = "function" === typeof WeakMap ? WeakMap : Map;
        function pi(e, t, n) {
          ((n = Fo(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Hs || ((Hs = !0), (Vs = r)), di(0, t);
            }),
            n
          );
        }
        function gi(e, t, n) {
          (n = Fo(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                di(0, t);
              });
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" === typeof o.componentDidCatch &&
              (n.callback = function () {
                di(0, t),
                  "function" !== typeof r &&
                    (null === $s ? ($s = new Set([this])) : $s.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function mi(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new fi();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Cu.bind(null, e, t, n)), t.then(e, e));
        }
        function hi(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function bi(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Fo(-1, 1)).tag = 2), zo(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var vi = w.ReactCurrentOwner,
          yi = !1;
        function wi(e, t, n, r) {
          t.child = null === e ? So(t, null, n, r) : xo(t, e.child, n, r);
        }
        function xi(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          return (
            Oo(t, a),
            (r = hl(e, t, n, r, o, a)),
            (n = bl()),
            null === e || yi
              ? (ao && n && eo(t), (t.flags |= 1), wi(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Hi(e, t, a))
          );
        }
        function Si(e, t, n, r, a) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              _u(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Lu(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), Ei(e, t, o, r, a));
          }
          if (((o = e.child), 0 === (e.lanes & a))) {
            var l = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : sr)(l, r) &&
              e.ref === t.ref
            )
              return Hi(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Tu(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Ei(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (sr(o, r) && e.ref === t.ref) {
              if (((yi = !1), (t.pendingProps = r = o), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Hi(e, t, a);
              0 !== (131072 & e.flags) && (yi = !0);
            }
          }
          return Ii(e, t, n, r, a);
        }
        function ki(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ia(Ts, _s),
                (_s |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ia(Ts, _s),
                  (_s |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== o ? o.baseLanes : n),
                Ia(Ts, _s),
                (_s |= r);
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ia(Ts, _s),
              (_s |= r);
          return wi(e, t, a, n), t.child;
        }
        function Ci(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Ii(e, t, n, r, a) {
          var o = _a(n) ? Oa : Na.current;
          return (
            (o = Ra(t, o)),
            Oo(t, a),
            (n = hl(e, t, n, r, o, a)),
            (r = bl()),
            null === e || yi
              ? (ao && r && eo(t), (t.flags |= 1), wi(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Hi(e, t, a))
          );
        }
        function Di(e, t, n, r, a) {
          if (_a(n)) {
            var o = !0;
            Ba(t);
          } else o = !1;
          if ((Oo(t, a), null === t.stateNode))
            Wi(e, t), li(t, n, r), si(t, n, r, a), (r = !0);
          else if (null === e) {
            var l = t.stateNode,
              i = t.memoizedProps;
            l.props = i;
            var s = l.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = Ro(u))
              : (u = Ra(t, (u = _a(n) ? Oa : Na.current)));
            var c = n.getDerivedStateFromProps,
              d =
                "function" === typeof c ||
                "function" === typeof l.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof l.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof l.componentWillReceiveProps) ||
              ((i !== r || s !== u) && ii(t, l, r, u)),
              (Bo = !1);
            var f = t.memoizedState;
            (l.state = f),
              Wo(t, r, l, a),
              (s = t.memoizedState),
              i !== r || f !== s || Pa.current || Bo
                ? ("function" === typeof c &&
                    (ri(t, n, c, r), (s = t.memoizedState)),
                  (i = Bo || oi(t, n, i, r, f, s, u))
                    ? (d ||
                        ("function" !== typeof l.UNSAFE_componentWillMount &&
                          "function" !== typeof l.componentWillMount) ||
                        ("function" === typeof l.componentWillMount &&
                          l.componentWillMount(),
                        "function" === typeof l.UNSAFE_componentWillMount &&
                          l.UNSAFE_componentWillMount()),
                      "function" === typeof l.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof l.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (l.props = r),
                  (l.state = s),
                  (l.context = u),
                  (r = i))
                : ("function" === typeof l.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (l = t.stateNode),
              jo(e, t),
              (i = t.memoizedProps),
              (u = t.type === t.elementType ? i : ni(t.type, i)),
              (l.props = u),
              (d = t.pendingProps),
              (f = l.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = Ro(s))
                : (s = Ra(t, (s = _a(n) ? Oa : Na.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof l.getSnapshotBeforeUpdate) ||
              ("function" !== typeof l.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof l.componentWillReceiveProps) ||
              ((i !== d || f !== s) && ii(t, l, r, s)),
              (Bo = !1),
              (f = t.memoizedState),
              (l.state = f),
              Wo(t, r, l, a);
            var g = t.memoizedState;
            i !== d || f !== g || Pa.current || Bo
              ? ("function" === typeof p &&
                  (ri(t, n, p, r), (g = t.memoizedState)),
                (u = Bo || oi(t, n, u, r, f, g, s) || !1)
                  ? (c ||
                      ("function" !== typeof l.UNSAFE_componentWillUpdate &&
                        "function" !== typeof l.componentWillUpdate) ||
                      ("function" === typeof l.componentWillUpdate &&
                        l.componentWillUpdate(r, g, s),
                      "function" === typeof l.UNSAFE_componentWillUpdate &&
                        l.UNSAFE_componentWillUpdate(r, g, s)),
                    "function" === typeof l.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof l.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof l.componentDidUpdate ||
                      (i === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof l.getSnapshotBeforeUpdate ||
                      (i === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = g)),
                (l.props = r),
                (l.state = g),
                (l.context = s),
                (r = u))
              : ("function" !== typeof l.componentDidUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof l.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Ni(e, t, n, r, o, a);
        }
        function Ni(e, t, n, r, a, o) {
          Ci(e, t);
          var l = 0 !== (128 & t.flags);
          if (!r && !l) return a && Ma(t, n, !1), Hi(e, t, o);
          (r = t.stateNode), (vi.current = t);
          var i =
            l && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && l
              ? ((t.child = xo(t, e.child, null, o)),
                (t.child = xo(t, null, i, o)))
              : wi(e, t, i, o),
            (t.memoizedState = r.state),
            a && Ma(t, n, !0),
            t.child
          );
        }
        function Pi(e) {
          var t = e.stateNode;
          t.pendingContext
            ? La(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && La(0, t.context, !1),
            Ko(e, t.containerInfo);
        }
        function Oi(e, t, n, r, a) {
          return go(), mo(a), (t.flags |= 256), wi(e, t, n, r), t.child;
        }
        var Ri,
          _i,
          Ti,
          Li,
          Ai = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Bi(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Mi(e, t, n) {
          var r,
            a = t.pendingProps,
            l = el.current,
            i = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & l)),
            r
              ? ((i = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (l |= 1),
            Ia(el, 1 & l),
            null === e)
          )
            return (
              uo(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((s = a.children),
                  (e = a.fallback),
                  i
                    ? ((a = t.mode),
                      (i = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & a) && null !== i
                        ? ((i.childLanes = 0), (i.pendingProps = s))
                        : (i = Bu(s, a, 0, null)),
                      (e = Au(e, a, n, null)),
                      (i.return = t),
                      (e.return = t),
                      (i.sibling = e),
                      (t.child = i),
                      (t.child.memoizedState = Bi(n)),
                      (t.memoizedState = Ai),
                      e)
                    : ji(t, s))
            );
          if (null !== (l = e.memoizedState) && null !== (r = l.dehydrated))
            return (function (e, t, n, r, a, l, i) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Fi(e, t, i, (r = ci(Error(o(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((l = r.fallback),
                    (a = t.mode),
                    (r = Bu(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((l = Au(l, a, i, null)).flags |= 2),
                    (r.return = t),
                    (l.return = t),
                    (r.sibling = l),
                    (t.child = r),
                    0 !== (1 & t.mode) && xo(t, e.child, null, i),
                    (t.child.memoizedState = Bi(i)),
                    (t.memoizedState = Ai),
                    l);
              if (0 === (1 & t.mode)) return Fi(e, t, i, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), Fi(e, t, i, (r = ci((l = Error(o(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (i & e.childLanes)), yi || s)) {
                if (null !== (r = Ps)) {
                  switch (i & -i) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | i)) ? 0 : a) &&
                    a !== l.retryLane &&
                    ((l.retryLane = a), Ao(e, a), nu(r, e, a, -1));
                }
                return mu(), Fi(e, t, i, (r = ci(Error(o(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Du.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = l.treeContext),
                  (ro = ua(a.nextSibling)),
                  (no = t),
                  (ao = !0),
                  (oo = null),
                  null !== e &&
                    ((qa[Qa++] = Ka),
                    (qa[Qa++] = Xa),
                    (qa[Qa++] = Ya),
                    (Ka = e.id),
                    (Xa = e.overflow),
                    (Ya = t)),
                  (t = ji(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, s, a, r, l, n);
          if (i) {
            (i = a.fallback), (s = t.mode), (r = (l = e.child).sibling);
            var u = { mode: "hidden", children: a.children };
            return (
              0 === (1 & s) && t.child !== l
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = u),
                  (t.deletions = null))
                : ((a = Tu(l, u)).subtreeFlags = 14680064 & l.subtreeFlags),
              null !== r
                ? (i = Tu(r, i))
                : ((i = Au(i, s, n, null)).flags |= 2),
              (i.return = t),
              (a.return = t),
              (a.sibling = i),
              (t.child = a),
              (a = i),
              (i = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Bi(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (i.memoizedState = s),
              (i.childLanes = e.childLanes & ~n),
              (t.memoizedState = Ai),
              a
            );
          }
          return (
            (e = (i = e.child).sibling),
            (a = Tu(i, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function ji(e, t) {
          return (
            ((t = Bu(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Fi(e, t, n, r) {
          return (
            null !== r && mo(r),
            xo(t, e.child, null, n),
            ((e = ji(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function zi(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Po(e.return, t, n);
        }
        function Ui(e, t, n, r, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a));
        }
        function Gi(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((wi(e, t, r.children, n), 0 !== (2 & (r = el.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && zi(e, n, t);
                else if (19 === e.tag) zi(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ia(el, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === tl(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Ui(t, !1, a, n, o);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === tl(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Ui(t, !0, n, null, o);
                break;
              case "together":
                Ui(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Wi(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Hi(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Bs |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Tu((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Tu(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Vi(e, t) {
          if (!ao)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function $i(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function qi(e, t, n) {
          var r = t.pendingProps;
          switch ((to(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return $i(t), null;
            case 1:
            case 17:
              return _a(t.type) && Ta(), $i(t), null;
            case 3:
              return (
                (r = t.stateNode),
                Xo(),
                Ca(Pa),
                Ca(Na),
                rl(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fo(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== oo && (lu(oo), (oo = null)))),
                _i(e, t),
                $i(t),
                null
              );
            case 5:
              Zo(t);
              var a = Yo(Qo.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Ti(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return $i(t), null;
                }
                if (((e = Yo($o.current)), fo(t))) {
                  (r = t.stateNode), (n = t.type);
                  var l = t.memoizedProps;
                  switch (
                    ((r[fa] = t), (r[pa] = l), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Fr("cancel", r), Fr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Fr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Ar.length; a++) Fr(Ar[a], r);
                      break;
                    case "source":
                      Fr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Fr("error", r), Fr("load", r);
                      break;
                    case "details":
                      Fr("toggle", r);
                      break;
                    case "input":
                      K(r, l), Fr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!l.multiple }),
                        Fr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, l), Fr("invalid", r);
                  }
                  for (var s in (ve(n, l), (a = null), l))
                    if (l.hasOwnProperty(s)) {
                      var u = l[s];
                      "children" === s
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== l.suppressHydrationWarning &&
                              Jr(r.textContent, u, e),
                            (a = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== l.suppressHydrationWarning &&
                              Jr(r.textContent, u, e),
                            (a = ["children", "" + u]))
                        : i.hasOwnProperty(s) &&
                          null != u &&
                          "onScroll" === s &&
                          Fr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      $(r), Z(r, l, !0);
                      break;
                    case "textarea":
                      $(r), le(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof l.onClick && (r.onclick = Zr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = ie(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          "select" === n &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[fa] = t),
                    (e[pa] = r),
                    Ri(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((s = ye(n, r)), n)) {
                      case "dialog":
                        Fr("cancel", e), Fr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Fr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Ar.length; a++) Fr(Ar[a], e);
                        a = r;
                        break;
                      case "source":
                        Fr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Fr("error", e), Fr("load", e), (a = r);
                        break;
                      case "details":
                        Fr("toggle", e), (a = r);
                        break;
                      case "input":
                        K(e, r), (a = Y(e, r)), Fr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = M({}, r, { value: void 0 })),
                          Fr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Fr("invalid", e);
                    }
                    for (l in (ve(n, a), (u = a)))
                      if (u.hasOwnProperty(l)) {
                        var c = u[l];
                        "style" === l
                          ? he(e, c)
                          : "dangerouslySetInnerHTML" === l
                          ? null != (c = c ? c.__html : void 0) && de(e, c)
                          : "children" === l
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && fe(e, c)
                            : "number" === typeof c && fe(e, "" + c)
                          : "suppressContentEditableWarning" !== l &&
                            "suppressHydrationWarning" !== l &&
                            "autoFocus" !== l &&
                            (i.hasOwnProperty(l)
                              ? null != c && "onScroll" === l && Fr("scroll", e)
                              : null != c && y(e, l, c, s));
                      }
                    switch (n) {
                      case "input":
                        $(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        $(e), le(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + H(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (l = r.value)
                            ? ne(e, !!r.multiple, l, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return $i(t), null;
            case 6:
              if (e && null != t.stateNode) Li(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((n = Yo(Qo.current)), Yo($o.current), fo(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fa] = t),
                    (l = r.nodeValue !== n) && null !== (e = no))
                  )
                    switch (e.tag) {
                      case 3:
                        Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  l && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[fa] = t),
                    (t.stateNode = r);
              }
              return $i(t), null;
            case 13:
              if (
                (Ca(el),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ao &&
                  null !== ro &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  po(), go(), (t.flags |= 98560), (l = !1);
                else if (((l = fo(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!l) throw Error(o(318));
                    if (
                      !(l =
                        null !== (l = t.memoizedState) ? l.dehydrated : null)
                    )
                      throw Error(o(317));
                    l[fa] = t;
                  } else
                    go(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  $i(t), (l = !1);
                } else null !== oo && (lu(oo), (oo = null)), (l = !0);
                if (!l) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & el.current)
                        ? 0 === Ls && (Ls = 3)
                        : mu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  $i(t),
                  null);
            case 4:
              return (
                Xo(),
                _i(e, t),
                null === e && Gr(t.stateNode.containerInfo),
                $i(t),
                null
              );
            case 10:
              return No(t.type._context), $i(t), null;
            case 19:
              if ((Ca(el), null === (l = t.memoizedState))) return $i(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = l.rendering)))
                if (r) Vi(l, !1);
                else {
                  if (0 !== Ls || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = tl(e))) {
                        for (
                          t.flags |= 128,
                            Vi(l, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((l = n).flags &= 14680066),
                            null === (s = l.alternate)
                              ? ((l.childLanes = 0),
                                (l.lanes = e),
                                (l.child = null),
                                (l.subtreeFlags = 0),
                                (l.memoizedProps = null),
                                (l.memoizedState = null),
                                (l.updateQueue = null),
                                (l.dependencies = null),
                                (l.stateNode = null))
                              : ((l.childLanes = s.childLanes),
                                (l.lanes = s.lanes),
                                (l.child = s.child),
                                (l.subtreeFlags = 0),
                                (l.deletions = null),
                                (l.memoizedProps = s.memoizedProps),
                                (l.memoizedState = s.memoizedState),
                                (l.updateQueue = s.updateQueue),
                                (l.type = s.type),
                                (e = s.dependencies),
                                (l.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ia(el, (1 & el.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== l.tail &&
                    Xe() > Gs &&
                    ((t.flags |= 128),
                    (r = !0),
                    Vi(l, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = tl(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Vi(l, !0),
                      null === l.tail &&
                        "hidden" === l.tailMode &&
                        !s.alternate &&
                        !ao)
                    )
                      return $i(t), null;
                  } else
                    2 * Xe() - l.renderingStartTime > Gs &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Vi(l, !1),
                      (t.lanes = 4194304));
                l.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = l.last) ? (n.sibling = s) : (t.child = s),
                    (l.last = s));
              }
              return null !== l.tail
                ? ((t = l.tail),
                  (l.rendering = t),
                  (l.tail = t.sibling),
                  (l.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (n = el.current),
                  Ia(el, r ? (1 & n) | 2 : 1 & n),
                  t)
                : ($i(t), null);
            case 22:
            case 23:
              return (
                du(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & _s) &&
                    ($i(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : $i(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Qi(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                _a(t.type) && Ta(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                Xo(),
                Ca(Pa),
                Ca(Na),
                rl(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return Zo(t), null;
            case 13:
              if (
                (Ca(el),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                go();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ca(el), null;
            case 4:
              return Xo(), null;
            case 10:
              return No(t.type._context), null;
            case 22:
            case 23:
              return du(), null;
            default:
              return null;
          }
        }
        (Ri = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (_i = function () {}),
          (Ti = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), Yo($o.current);
              var o,
                l = null;
              switch (n) {
                case "input":
                  (a = Y(e, a)), (r = Y(e, r)), (l = []);
                  break;
                case "select":
                  (a = M({}, a, { value: void 0 })),
                    (r = M({}, r, { value: void 0 })),
                    (l = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (l = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (c in (ve(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var s = a[c];
                    for (o in s)
                      s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (i.hasOwnProperty(c)
                        ? l || (l = [])
                        : (l = l || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((s = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                )
                  if ("style" === c)
                    if (s) {
                      for (o in s)
                        !s.hasOwnProperty(o) ||
                          (u && u.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ""));
                      for (o in u)
                        u.hasOwnProperty(o) &&
                          s[o] !== u[o] &&
                          (n || (n = {}), (n[o] = u[o]));
                    } else n || (l || (l = []), l.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (l = l || []).push(c, u))
                      : "children" === c
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (l = l || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (i.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && Fr("scroll", e),
                            l || s === u || (l = []))
                          : (l = l || []).push(c, u));
              }
              n && (l = l || []).push("style", n);
              var c = l;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Li = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Yi = !1,
          Ki = !1,
          Xi = "function" === typeof WeakSet ? WeakSet : Set,
          Ji = null;
        function Zi(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                ku(e, t, r);
              }
            else n.current = null;
        }
        function es(e, t, n) {
          try {
            n();
          } catch (r) {
            ku(e, t, r);
          }
        }
        var ts = !1;
        function ns(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var o = a.destroy;
                (a.destroy = void 0), void 0 !== o && es(t, n, o);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function rs(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function as(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function os(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), os(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fa],
              delete t[pa],
              delete t[ma],
              delete t[ha],
              delete t[ba]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ls(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function is(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ls(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ss(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (ss(e, t, n), e = e.sibling; null !== e; )
              ss(e, t, n), (e = e.sibling);
        }
        function us(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (us(e, t, n), e = e.sibling; null !== e; )
              us(e, t, n), (e = e.sibling);
        }
        var cs = null,
          ds = !1;
        function fs(e, t, n) {
          for (n = n.child; null !== n; ) ps(e, t, n), (n = n.sibling);
        }
        function ps(e, t, n) {
          if (ot && "function" === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(at, n);
            } catch (i) {}
          switch (n.tag) {
            case 5:
              Ki || Zi(n, t);
            case 6:
              var r = cs,
                a = ds;
              (cs = null),
                fs(e, t, n),
                (ds = a),
                null !== (cs = r) &&
                  (ds
                    ? ((e = cs),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : cs.removeChild(n.stateNode));
              break;
            case 18:
              null !== cs &&
                (ds
                  ? ((e = cs),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? sa(e.parentNode, n)
                      : 1 === e.nodeType && sa(e, n),
                    Gt(e))
                  : sa(cs, n.stateNode));
              break;
            case 4:
              (r = cs),
                (a = ds),
                (cs = n.stateNode.containerInfo),
                (ds = !0),
                fs(e, t, n),
                (cs = r),
                (ds = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Ki &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var o = a,
                    l = o.destroy;
                  (o = o.tag),
                    void 0 !== l &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      es(n, t, l),
                    (a = a.next);
                } while (a !== r);
              }
              fs(e, t, n);
              break;
            case 1:
              if (
                !Ki &&
                (Zi(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (i) {
                  ku(n, t, i);
                }
              fs(e, t, n);
              break;
            case 21:
              fs(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Ki = (r = Ki) || null !== n.memoizedState),
                  fs(e, t, n),
                  (Ki = r))
                : fs(e, t, n);
              break;
            default:
              fs(e, t, n);
          }
        }
        function gs(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Xi()),
              t.forEach(function (t) {
                var r = Nu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function ms(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var l = e,
                  i = t,
                  s = i;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (cs = s.stateNode), (ds = !1);
                      break e;
                    case 3:
                    case 4:
                      (cs = s.stateNode.containerInfo), (ds = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === cs) throw Error(o(160));
                ps(l, i, a), (cs = null), (ds = !1);
                var u = a.alternate;
                null !== u && (u.return = null), (a.return = null);
              } catch (c) {
                ku(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) hs(t, e), (t = t.sibling);
        }
        function hs(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((ms(t, e), bs(e), 4 & r)) {
                try {
                  ns(3, e, e.return), rs(3, e);
                } catch (h) {
                  ku(e, e.return, h);
                }
                try {
                  ns(5, e, e.return);
                } catch (h) {
                  ku(e, e.return, h);
                }
              }
              break;
            case 1:
              ms(t, e), bs(e), 512 & r && null !== n && Zi(n, n.return);
              break;
            case 5:
              if (
                (ms(t, e),
                bs(e),
                512 & r && null !== n && Zi(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  fe(a, "");
                } catch (h) {
                  ku(e, e.return, h);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var l = e.memoizedProps,
                  i = null !== n ? n.memoizedProps : l,
                  s = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === s &&
                      "radio" === l.type &&
                      null != l.name &&
                      X(a, l),
                      ye(s, i);
                    var c = ye(s, l);
                    for (i = 0; i < u.length; i += 2) {
                      var d = u[i],
                        f = u[i + 1];
                      "style" === d
                        ? he(a, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(a, f)
                        : "children" === d
                        ? fe(a, f)
                        : y(a, d, f, c);
                    }
                    switch (s) {
                      case "input":
                        J(a, l);
                        break;
                      case "textarea":
                        oe(a, l);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!l.multiple;
                        var g = l.value;
                        null != g
                          ? ne(a, !!l.multiple, g, !1)
                          : p !== !!l.multiple &&
                            (null != l.defaultValue
                              ? ne(a, !!l.multiple, l.defaultValue, !0)
                              : ne(a, !!l.multiple, l.multiple ? [] : "", !1));
                    }
                    a[pa] = l;
                  } catch (h) {
                    ku(e, e.return, h);
                  }
              }
              break;
            case 6:
              if ((ms(t, e), bs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (a = e.stateNode), (l = e.memoizedProps);
                try {
                  a.nodeValue = l;
                } catch (h) {
                  ku(e, e.return, h);
                }
              }
              break;
            case 3:
              if (
                (ms(t, e),
                bs(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Gt(t.containerInfo);
                } catch (h) {
                  ku(e, e.return, h);
                }
              break;
            case 4:
            default:
              ms(t, e), bs(e);
              break;
            case 13:
              ms(t, e),
                bs(e),
                8192 & (a = e.child).flags &&
                  ((l = null !== a.memoizedState),
                  (a.stateNode.isHidden = l),
                  !l ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Us = Xe())),
                4 & r && gs(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Ki = (c = Ki) || d), ms(t, e), (Ki = c))
                  : ms(t, e),
                bs(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                )
                  for (Ji = e, d = e.child; null !== d; ) {
                    for (f = Ji = d; null !== Ji; ) {
                      switch (((g = (p = Ji).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ns(4, p, p.return);
                          break;
                        case 1:
                          Zi(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (h) {
                              ku(r, n, h);
                            }
                          }
                          break;
                        case 5:
                          Zi(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            xs(f);
                            continue;
                          }
                      }
                      null !== g ? ((g.return = p), (Ji = g)) : xs(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (a = f.stateNode),
                          c
                            ? "function" === typeof (l = a.style).setProperty
                              ? l.setProperty("display", "none", "important")
                              : (l.display = "none")
                            : ((s = f.stateNode),
                              (i =
                                void 0 !== (u = f.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (s.style.display = me("display", i)));
                      } catch (h) {
                        ku(e, e.return, h);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                      } catch (h) {
                        ku(e, e.return, h);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              ms(t, e), bs(e), 4 & r && gs(e);
            case 21:
          }
        }
        function bs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ls(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(o(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (fe(a, ""), (r.flags &= -33)),
                    us(e, is(e), a);
                  break;
                case 3:
                case 4:
                  var l = r.stateNode.containerInfo;
                  ss(e, is(e), l);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (i) {
              ku(e, e.return, i);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function vs(e, t, n) {
          (Ji = e), ys(e, t, n);
        }
        function ys(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Ji; ) {
            var a = Ji,
              o = a.child;
            if (22 === a.tag && r) {
              var l = null !== a.memoizedState || Yi;
              if (!l) {
                var i = a.alternate,
                  s = (null !== i && null !== i.memoizedState) || Ki;
                i = Yi;
                var u = Ki;
                if (((Yi = l), (Ki = s) && !u))
                  for (Ji = a; null !== Ji; )
                    (s = (l = Ji).child),
                      22 === l.tag && null !== l.memoizedState
                        ? Ss(a)
                        : null !== s
                        ? ((s.return = l), (Ji = s))
                        : Ss(a);
                for (; null !== o; ) (Ji = o), ys(o, t, n), (o = o.sibling);
                (Ji = a), (Yi = i), (Ki = u);
              }
              ws(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== o
                ? ((o.return = a), (Ji = o))
                : ws(e);
          }
        }
        function ws(e) {
          for (; null !== Ji; ) {
            var t = Ji;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ki || rs(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Ki)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : ni(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var l = t.updateQueue;
                      null !== l && Ho(t, l, r);
                      break;
                    case 3:
                      var i = t.updateQueue;
                      if (null !== i) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Ho(t, i, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var d = c.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Gt(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Ki || (512 & t.flags && as(t));
              } catch (p) {
                ku(t, t.return, p);
              }
            }
            if (t === e) {
              Ji = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Ji = n);
              break;
            }
            Ji = t.return;
          }
        }
        function xs(e) {
          for (; null !== Ji; ) {
            var t = Ji;
            if (t === e) {
              Ji = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Ji = n);
              break;
            }
            Ji = t.return;
          }
        }
        function Ss(e) {
          for (; null !== Ji; ) {
            var t = Ji;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    rs(4, t);
                  } catch (s) {
                    ku(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      ku(t, a, s);
                    }
                  }
                  var o = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    ku(t, o, s);
                  }
                  break;
                case 5:
                  var l = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    ku(t, l, s);
                  }
              }
            } catch (s) {
              ku(t, t.return, s);
            }
            if (t === e) {
              Ji = null;
              break;
            }
            var i = t.sibling;
            if (null !== i) {
              (i.return = t.return), (Ji = i);
              break;
            }
            Ji = t.return;
          }
        }
        var Es,
          ks = Math.ceil,
          Cs = w.ReactCurrentDispatcher,
          Is = w.ReactCurrentOwner,
          Ds = w.ReactCurrentBatchConfig,
          Ns = 0,
          Ps = null,
          Os = null,
          Rs = 0,
          _s = 0,
          Ts = ka(0),
          Ls = 0,
          As = null,
          Bs = 0,
          Ms = 0,
          js = 0,
          Fs = null,
          zs = null,
          Us = 0,
          Gs = 1 / 0,
          Ws = null,
          Hs = !1,
          Vs = null,
          $s = null,
          qs = !1,
          Qs = null,
          Ys = 0,
          Ks = 0,
          Xs = null,
          Js = -1,
          Zs = 0;
        function eu() {
          return 0 !== (6 & Ns) ? Xe() : -1 !== Js ? Js : (Js = Xe());
        }
        function tu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Ns) && 0 !== Rs
            ? Rs & -Rs
            : null !== ho.transition
            ? (0 === Zs && (Zs = mt()), Zs)
            : 0 !== (e = yt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Kt(e.type));
        }
        function nu(e, t, n, r) {
          if (50 < Ks) throw ((Ks = 0), (Xs = null), Error(o(185)));
          bt(e, n, r),
            (0 !== (2 & Ns) && e === Ps) ||
              (e === Ps && (0 === (2 & Ns) && (Ms |= n), 4 === Ls && iu(e, Rs)),
              ru(e, r),
              1 === n &&
                0 === Ns &&
                0 === (1 & t.mode) &&
                ((Gs = Xe() + 500), Fa && Ga()));
        }
        function ru(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var l = 31 - lt(o),
                i = 1 << l,
                s = a[l];
              -1 === s
                ? (0 !== (i & n) && 0 === (i & r)) || (a[l] = pt(i, t))
                : s <= t && (e.expiredLanes |= i),
                (o &= ~i);
            }
          })(e, t);
          var r = ft(e, e === Ps ? Rs : 0);
          if (0 === r)
            null !== n && Qe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Qe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Fa = !0), Ua(e);
                  })(su.bind(null, e))
                : Ua(su.bind(null, e)),
                la(function () {
                  0 === (6 & Ns) && Ga();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Pu(n, au.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function au(e, t) {
          if (((Js = -1), (Zs = 0), 0 !== (6 & Ns))) throw Error(o(327));
          var n = e.callbackNode;
          if (Su() && e.callbackNode !== n) return null;
          var r = ft(e, e === Ps ? Rs : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = hu(e, r);
          else {
            t = r;
            var a = Ns;
            Ns |= 2;
            var l = gu();
            for (
              (Ps === e && Rs === t) ||
              ((Ws = null), (Gs = Xe() + 500), fu(e, t));
              ;

            )
              try {
                vu();
                break;
              } catch (s) {
                pu(e, s);
              }
            Do(),
              (Cs.current = l),
              (Ns = a),
              null !== Os ? (t = 0) : ((Ps = null), (Rs = 0), (t = Ls));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = gt(e)) && ((r = a), (t = ou(e, a))),
              1 === t)
            )
              throw ((n = As), fu(e, 0), iu(e, r), ru(e, Xe()), n);
            if (6 === t) iu(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              o = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!ir(o(), a)) return !1;
                            } catch (i) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = hu(e, r)) &&
                    0 !== (l = gt(e)) &&
                    ((r = l), (t = ou(e, l))),
                  1 === t))
              )
                throw ((n = As), fu(e, 0), iu(e, r), ru(e, Xe()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  xu(e, zs, Ws);
                  break;
                case 3:
                  if (
                    (iu(e, r),
                    (130023424 & r) === r && 10 < (t = Us + 500 - Xe()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      eu(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(xu.bind(null, e, zs, Ws), t);
                    break;
                  }
                  xu(e, zs, Ws);
                  break;
                case 4:
                  if ((iu(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var i = 31 - lt(r);
                    (l = 1 << i), (i = t[i]) > a && (a = i), (r &= ~l);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Xe() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * ks(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(xu.bind(null, e, zs, Ws), r);
                    break;
                  }
                  xu(e, zs, Ws);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return ru(e, Xe()), e.callbackNode === n ? au.bind(null, e) : null;
        }
        function ou(e, t) {
          var n = Fs;
          return (
            e.current.memoizedState.isDehydrated && (fu(e, t).flags |= 256),
            2 !== (e = hu(e, t)) && ((t = zs), (zs = n), null !== t && lu(t)),
            e
          );
        }
        function lu(e) {
          null === zs ? (zs = e) : zs.push.apply(zs, e);
        }
        function iu(e, t) {
          for (
            t &= ~js,
              t &= ~Ms,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - lt(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function su(e) {
          if (0 !== (6 & Ns)) throw Error(o(327));
          Su();
          var t = ft(e, 0);
          if (0 === (1 & t)) return ru(e, Xe()), null;
          var n = hu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = gt(e);
            0 !== r && ((t = r), (n = ou(e, r)));
          }
          if (1 === n) throw ((n = As), fu(e, 0), iu(e, t), ru(e, Xe()), n);
          if (6 === n) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            xu(e, zs, Ws),
            ru(e, Xe()),
            null
          );
        }
        function uu(e, t) {
          var n = Ns;
          Ns |= 1;
          try {
            return e(t);
          } finally {
            0 === (Ns = n) && ((Gs = Xe() + 500), Fa && Ga());
          }
        }
        function cu(e) {
          null !== Qs && 0 === Qs.tag && 0 === (6 & Ns) && Su();
          var t = Ns;
          Ns |= 1;
          var n = Ds.transition,
            r = yt;
          try {
            if (((Ds.transition = null), (yt = 1), e)) return e();
          } finally {
            (yt = r), (Ds.transition = n), 0 === (6 & (Ns = t)) && Ga();
          }
        }
        function du() {
          (_s = Ts.current), Ca(Ts);
        }
        function fu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Os))
            for (n = Os.return; null !== n; ) {
              var r = n;
              switch ((to(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Ta();
                  break;
                case 3:
                  Xo(), Ca(Pa), Ca(Na), rl();
                  break;
                case 5:
                  Zo(r);
                  break;
                case 4:
                  Xo();
                  break;
                case 13:
                case 19:
                  Ca(el);
                  break;
                case 10:
                  No(r.type._context);
                  break;
                case 22:
                case 23:
                  du();
              }
              n = n.return;
            }
          if (
            ((Ps = e),
            (Os = e = Tu(e.current, null)),
            (Rs = _s = t),
            (Ls = 0),
            (As = null),
            (js = Ms = Bs = 0),
            (zs = Fs = null),
            null !== _o)
          ) {
            for (t = 0; t < _o.length; t++)
              if (null !== (r = (n = _o[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  o = n.pending;
                if (null !== o) {
                  var l = o.next;
                  (o.next = a), (r.next = l);
                }
                n.pending = r;
              }
            _o = null;
          }
          return e;
        }
        function pu(e, t) {
          for (;;) {
            var n = Os;
            try {
              if ((Do(), (al.current = Jl), cl)) {
                for (var r = il.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                cl = !1;
              }
              if (
                ((ll = 0),
                (ul = sl = il = null),
                (dl = !1),
                (fl = 0),
                (Is.current = null),
                null === n || null === n.return)
              ) {
                (Ls = 1), (As = t), (Os = null);
                break;
              }
              e: {
                var l = e,
                  i = n.return,
                  s = n,
                  u = t;
                if (
                  ((t = Rs),
                  (s.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    d = s,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var g = hi(i);
                  if (null !== g) {
                    (g.flags &= -257),
                      bi(g, i, s, 0, t),
                      1 & g.mode && mi(l, c, t),
                      (u = c);
                    var m = (t = g).updateQueue;
                    if (null === m) {
                      var h = new Set();
                      h.add(u), (t.updateQueue = h);
                    } else m.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    mi(l, c, t), mu();
                    break e;
                  }
                  u = Error(o(426));
                } else if (ao && 1 & s.mode) {
                  var b = hi(i);
                  if (null !== b) {
                    0 === (65536 & b.flags) && (b.flags |= 256),
                      bi(b, i, s, 0, t),
                      mo(ui(u, s));
                    break e;
                  }
                }
                (l = u = ui(u, s)),
                  4 !== Ls && (Ls = 2),
                  null === Fs ? (Fs = [l]) : Fs.push(l),
                  (l = i);
                do {
                  switch (l.tag) {
                    case 3:
                      (l.flags |= 65536),
                        (t &= -t),
                        (l.lanes |= t),
                        Go(l, pi(0, u, t));
                      break e;
                    case 1:
                      s = u;
                      var v = l.type,
                        y = l.stateNode;
                      if (
                        0 === (128 & l.flags) &&
                        ("function" === typeof v.getDerivedStateFromError ||
                          (null !== y &&
                            "function" === typeof y.componentDidCatch &&
                            (null === $s || !$s.has(y))))
                      ) {
                        (l.flags |= 65536),
                          (t &= -t),
                          (l.lanes |= t),
                          Go(l, gi(l, s, t));
                        break e;
                      }
                  }
                  l = l.return;
                } while (null !== l);
              }
              wu(n);
            } catch (w) {
              (t = w), Os === n && null !== n && (Os = n = n.return);
              continue;
            }
            break;
          }
        }
        function gu() {
          var e = Cs.current;
          return (Cs.current = Jl), null === e ? Jl : e;
        }
        function mu() {
          (0 !== Ls && 3 !== Ls && 2 !== Ls) || (Ls = 4),
            null === Ps ||
              (0 === (268435455 & Bs) && 0 === (268435455 & Ms)) ||
              iu(Ps, Rs);
        }
        function hu(e, t) {
          var n = Ns;
          Ns |= 2;
          var r = gu();
          for ((Ps === e && Rs === t) || ((Ws = null), fu(e, t)); ; )
            try {
              bu();
              break;
            } catch (a) {
              pu(e, a);
            }
          if ((Do(), (Ns = n), (Cs.current = r), null !== Os))
            throw Error(o(261));
          return (Ps = null), (Rs = 0), Ls;
        }
        function bu() {
          for (; null !== Os; ) yu(Os);
        }
        function vu() {
          for (; null !== Os && !Ye(); ) yu(Os);
        }
        function yu(e) {
          var t = Es(e.alternate, e, _s);
          (e.memoizedProps = e.pendingProps),
            null === t ? wu(e) : (Os = t),
            (Is.current = null);
        }
        function wu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = qi(n, t, _s))) return void (Os = n);
            } else {
              if (null !== (n = Qi(n, t)))
                return (n.flags &= 32767), void (Os = n);
              if (null === e) return (Ls = 6), void (Os = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Os = t);
            Os = t = e;
          } while (null !== t);
          0 === Ls && (Ls = 5);
        }
        function xu(e, t, n) {
          var r = yt,
            a = Ds.transition;
          try {
            (Ds.transition = null),
              (yt = 1),
              (function (e, t, n, r) {
                do {
                  Su();
                } while (null !== Qs);
                if (0 !== (6 & Ns)) throw Error(o(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var l = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - lt(n),
                        o = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
                    }
                  })(e, l),
                  e === Ps && ((Os = Ps = null), (Rs = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    qs ||
                    ((qs = !0),
                    Pu(tt, function () {
                      return Su(), null;
                    })),
                  (l = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || l)
                ) {
                  (l = Ds.transition), (Ds.transition = null);
                  var i = yt;
                  yt = 1;
                  var s = Ns;
                  (Ns |= 4),
                    (Is.current = null),
                    (function (e, t) {
                      if (((ea = Ht), pr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                l = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, l.nodeType;
                              } catch (x) {
                                n = null;
                                break e;
                              }
                              var i = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var g;
                                  f !== n ||
                                    (0 !== a && 3 !== f.nodeType) ||
                                    (s = i + a),
                                    f !== l ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (u = i + r),
                                    3 === f.nodeType &&
                                      (i += f.nodeValue.length),
                                    null !== (g = f.firstChild);

                                )
                                  (p = f), (f = g);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++c === a && (s = i),
                                    p === l && ++d === r && (u = i),
                                    null !== (g = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = g;
                              }
                              n =
                                -1 === s || -1 === u
                                  ? null
                                  : { start: s, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Ht = !1,
                          Ji = t;
                        null !== Ji;

                      )
                        if (
                          ((e = (t = Ji).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Ji = e);
                        else
                          for (; null !== Ji; ) {
                            t = Ji;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var h = m.memoizedProps,
                                        b = m.memoizedState,
                                        v = t.stateNode,
                                        y = v.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? h
                                            : ni(t.type, h),
                                          b
                                        );
                                      v.__reactInternalSnapshotBeforeUpdate = y;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (x) {
                              ku(t, t.return, x);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Ji = e);
                              break;
                            }
                            Ji = t.return;
                          }
                      (m = ts), (ts = !1);
                    })(e, n),
                    hs(n, e),
                    gr(ta),
                    (Ht = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    vs(n, e, a),
                    Ke(),
                    (Ns = s),
                    (yt = i),
                    (Ds.transition = l);
                } else e.current = n;
                if (
                  (qs && ((qs = !1), (Qs = e), (Ys = a)),
                  (l = e.pendingLanes),
                  0 === l && ($s = null),
                  (function (e) {
                    if (ot && "function" === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  ru(e, Xe()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Hs) throw ((Hs = !1), (e = Vs), (Vs = null), e);
                0 !== (1 & Ys) && 0 !== e.tag && Su(),
                  (l = e.pendingLanes),
                  0 !== (1 & l)
                    ? e === Xs
                      ? Ks++
                      : ((Ks = 0), (Xs = e))
                    : (Ks = 0),
                  Ga();
              })(e, t, n, r);
          } finally {
            (Ds.transition = a), (yt = r);
          }
          return null;
        }
        function Su() {
          if (null !== Qs) {
            var e = wt(Ys),
              t = Ds.transition,
              n = yt;
            try {
              if (((Ds.transition = null), (yt = 16 > e ? 16 : e), null === Qs))
                var r = !1;
              else {
                if (((e = Qs), (Qs = null), (Ys = 0), 0 !== (6 & Ns)))
                  throw Error(o(331));
                var a = Ns;
                for (Ns |= 4, Ji = e.current; null !== Ji; ) {
                  var l = Ji,
                    i = l.child;
                  if (0 !== (16 & Ji.flags)) {
                    var s = l.deletions;
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        for (Ji = c; null !== Ji; ) {
                          var d = Ji;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ns(8, d, l);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Ji = f);
                          else
                            for (; null !== Ji; ) {
                              var p = (d = Ji).sibling,
                                g = d.return;
                              if ((os(d), d === c)) {
                                Ji = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = g), (Ji = p);
                                break;
                              }
                              Ji = g;
                            }
                        }
                      }
                      var m = l.alternate;
                      if (null !== m) {
                        var h = m.child;
                        if (null !== h) {
                          m.child = null;
                          do {
                            var b = h.sibling;
                            (h.sibling = null), (h = b);
                          } while (null !== h);
                        }
                      }
                      Ji = l;
                    }
                  }
                  if (0 !== (2064 & l.subtreeFlags) && null !== i)
                    (i.return = l), (Ji = i);
                  else
                    e: for (; null !== Ji; ) {
                      if (0 !== (2048 & (l = Ji).flags))
                        switch (l.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ns(9, l, l.return);
                        }
                      var v = l.sibling;
                      if (null !== v) {
                        (v.return = l.return), (Ji = v);
                        break e;
                      }
                      Ji = l.return;
                    }
                }
                var y = e.current;
                for (Ji = y; null !== Ji; ) {
                  var w = (i = Ji).child;
                  if (0 !== (2064 & i.subtreeFlags) && null !== w)
                    (w.return = i), (Ji = w);
                  else
                    e: for (i = y; null !== Ji; ) {
                      if (0 !== (2048 & (s = Ji).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(9, s);
                          }
                        } catch (S) {
                          ku(s, s.return, S);
                        }
                      if (s === i) {
                        Ji = null;
                        break e;
                      }
                      var x = s.sibling;
                      if (null !== x) {
                        (x.return = s.return), (Ji = x);
                        break e;
                      }
                      Ji = s.return;
                    }
                }
                if (
                  ((Ns = a),
                  Ga(),
                  ot && "function" === typeof ot.onPostCommitFiberRoot)
                )
                  try {
                    ot.onPostCommitFiberRoot(at, e);
                  } catch (S) {}
                r = !0;
              }
              return r;
            } finally {
              (yt = n), (Ds.transition = t);
            }
          }
          return !1;
        }
        function Eu(e, t, n) {
          (e = zo(e, (t = pi(0, (t = ui(n, t)), 1)), 1)),
            (t = eu()),
            null !== e && (bt(e, 1, t), ru(e, t));
        }
        function ku(e, t, n) {
          if (3 === e.tag) Eu(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Eu(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === $s || !$s.has(r)))
                ) {
                  (t = zo(t, (e = gi(t, (e = ui(n, e)), 1)), 1)),
                    (e = eu()),
                    null !== t && (bt(t, 1, e), ru(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Cu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = eu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ps === e &&
              (Rs & n) === n &&
              (4 === Ls ||
              (3 === Ls && (130023424 & Rs) === Rs && 500 > Xe() - Us)
                ? fu(e, 0)
                : (js |= n)),
            ru(e, t);
        }
        function Iu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = eu();
          null !== (e = Ao(e, t)) && (bt(e, t, n), ru(e, n));
        }
        function Du(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Iu(e, n);
        }
        function Nu(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), Iu(e, n);
        }
        function Pu(e, t) {
          return qe(e, t);
        }
        function Ou(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Ru(e, t, n, r) {
          return new Ou(e, t, n, r);
        }
        function _u(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Tu(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Ru(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Lu(e, t, n, r, a, l) {
          var i = 2;
          if (((r = e), "function" === typeof e)) _u(e) && (i = 1);
          else if ("string" === typeof e) i = 5;
          else
            e: switch (e) {
              case E:
                return Au(n.children, a, l, t);
              case k:
                (i = 8), (a |= 8);
                break;
              case C:
                return (
                  ((e = Ru(12, n, t, 2 | a)).elementType = C), (e.lanes = l), e
                );
              case P:
                return (
                  ((e = Ru(13, n, t, a)).elementType = P), (e.lanes = l), e
                );
              case O:
                return (
                  ((e = Ru(19, n, t, a)).elementType = O), (e.lanes = l), e
                );
              case T:
                return Bu(n, a, l, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case I:
                      i = 10;
                      break e;
                    case D:
                      i = 9;
                      break e;
                    case N:
                      i = 11;
                      break e;
                    case R:
                      i = 14;
                      break e;
                    case _:
                      (i = 16), (r = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Ru(i, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = l),
            t
          );
        }
        function Au(e, t, n, r) {
          return ((e = Ru(7, e, r, t)).lanes = n), e;
        }
        function Bu(e, t, n, r) {
          return (
            ((e = Ru(22, e, r, t)).elementType = T),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Mu(e, t, n) {
          return ((e = Ru(6, e, null, t)).lanes = n), e;
        }
        function ju(e, t, n) {
          return (
            ((t = Ru(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Fu(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = ht(0)),
            (this.expirationTimes = ht(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = ht(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function zu(e, t, n, r, a, o, l, i, s) {
          return (
            (e = new Fu(e, t, n, i, s)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = Ru(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Mo(o),
            e
          );
        }
        function Uu(e) {
          if (!e) return Da;
          e: {
            if (Ge((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(o(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (_a(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (_a(n)) return Aa(e, n, t);
          }
          return t;
        }
        function Gu(e, t, n, r, a, o, l, i, s) {
          return (
            ((e = zu(n, r, !0, e, 0, o, 0, i, s)).context = Uu(null)),
            (n = e.current),
            ((o = Fo((r = eu()), (a = tu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            zo(n, o, a),
            (e.current.lanes = a),
            bt(e, a, r),
            ru(e, r),
            e
          );
        }
        function Wu(e, t, n, r) {
          var a = t.current,
            o = eu(),
            l = tu(a);
          return (
            (n = Uu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Fo(o, l)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = zo(a, t, l)) && (nu(e, a, l, o), Uo(e, a, l)),
            l
          );
        }
        function Hu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Vu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function $u(e, t) {
          Vu(e, t), (e = e.alternate) && Vu(e, t);
        }
        Es = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Pa.current) yi = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (yi = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Pi(t), go();
                        break;
                      case 5:
                        Jo(t);
                        break;
                      case 1:
                        _a(t.type) && Ba(t);
                        break;
                      case 4:
                        Ko(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ia(Eo, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ia(el, 1 & el.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Mi(e, t, n)
                            : (Ia(el, 1 & el.current),
                              null !== (e = Hi(e, t, n)) ? e.sibling : null);
                        Ia(el, 1 & el.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Gi(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ia(el, el.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), ki(e, t, n);
                    }
                    return Hi(e, t, n);
                  })(e, t, n)
                );
              yi = 0 !== (131072 & e.flags);
            }
          else (yi = !1), ao && 0 !== (1048576 & t.flags) && Za(t, $a, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Wi(e, t), (e = t.pendingProps);
              var a = Ra(t, Na.current);
              Oo(t, n), (a = hl(null, t, r, e, a, n));
              var l = bl();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    _a(r) ? ((l = !0), Ba(t)) : (l = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Mo(t),
                    (a.updater = ai),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    si(t, r, e, n),
                    (t = Ni(null, t, r, !0, l, n)))
                  : ((t.tag = 0),
                    ao && l && eo(t),
                    wi(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Wi(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return _u(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === N) return 11;
                        if (e === R) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = ni(r, e)),
                  a)
                ) {
                  case 0:
                    t = Ii(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Di(null, t, r, e, n);
                    break e;
                  case 11:
                    t = xi(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Si(null, t, r, ni(r.type, e), n);
                    break e;
                }
                throw Error(o(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ii(e, t, r, (a = t.elementType === r ? a : ni(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Di(e, t, r, (a = t.elementType === r ? a : ni(r, a)), n)
              );
            case 3:
              e: {
                if ((Pi(t), null === e)) throw Error(o(387));
                (r = t.pendingProps),
                  (a = (l = t.memoizedState).element),
                  jo(e, t),
                  Wo(t, r, null, n);
                var i = t.memoizedState;
                if (((r = i.element), l.isDehydrated)) {
                  if (
                    ((l = {
                      element: r,
                      isDehydrated: !1,
                      cache: i.cache,
                      pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                      transitions: i.transitions,
                    }),
                    (t.updateQueue.baseState = l),
                    (t.memoizedState = l),
                    256 & t.flags)
                  ) {
                    t = Oi(e, t, r, n, (a = ui(Error(o(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Oi(e, t, r, n, (a = ui(Error(o(424)), t)));
                    break e;
                  }
                  for (
                    ro = ua(t.stateNode.containerInfo.firstChild),
                      no = t,
                      ao = !0,
                      oo = null,
                      n = So(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((go(), r === a)) {
                    t = Hi(e, t, n);
                    break e;
                  }
                  wi(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                Jo(t),
                null === e && uo(t),
                (r = t.type),
                (a = t.pendingProps),
                (l = null !== e ? e.memoizedProps : null),
                (i = a.children),
                na(r, a)
                  ? (i = null)
                  : null !== l && na(r, l) && (t.flags |= 32),
                Ci(e, t),
                wi(e, t, i, n),
                t.child
              );
            case 6:
              return null === e && uo(t), null;
            case 13:
              return Mi(e, t, n);
            case 4:
              return (
                Ko(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = xo(t, null, r, n)) : wi(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                xi(e, t, r, (a = t.elementType === r ? a : ni(r, a)), n)
              );
            case 7:
              return wi(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return wi(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (l = t.memoizedProps),
                  (i = a.value),
                  Ia(Eo, r._currentValue),
                  (r._currentValue = i),
                  null !== l)
                )
                  if (ir(l.value, i)) {
                    if (l.children === a.children && !Pa.current) {
                      t = Hi(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (l = t.child) && (l.return = t);
                      null !== l;

                    ) {
                      var s = l.dependencies;
                      if (null !== s) {
                        i = l.child;
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === l.tag) {
                              (u = Fo(-1, n & -n)).tag = 2;
                              var c = l.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d
                                  ? (u.next = u)
                                  : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (l.lanes |= n),
                              null !== (u = l.alternate) && (u.lanes |= n),
                              Po(l.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === l.tag)
                        i = l.type === t.type ? null : l.child;
                      else if (18 === l.tag) {
                        if (null === (i = l.return)) throw Error(o(341));
                        (i.lanes |= n),
                          null !== (s = i.alternate) && (s.lanes |= n),
                          Po(i, n, t),
                          (i = l.sibling);
                      } else i = l.child;
                      if (null !== i) i.return = l;
                      else
                        for (i = l; null !== i; ) {
                          if (i === t) {
                            i = null;
                            break;
                          }
                          if (null !== (l = i.sibling)) {
                            (l.return = i.return), (i = l);
                            break;
                          }
                          i = i.return;
                        }
                      l = i;
                    }
                wi(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Oo(t, n),
                (r = r((a = Ro(a)))),
                (t.flags |= 1),
                wi(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = ni((r = t.type), t.pendingProps)),
                Si(e, t, r, (a = ni(r.type, a)), n)
              );
            case 15:
              return Ei(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : ni(r, a)),
                Wi(e, t),
                (t.tag = 1),
                _a(r) ? ((e = !0), Ba(t)) : (e = !1),
                Oo(t, n),
                li(t, r, a),
                si(t, r, a, n),
                Ni(null, t, r, !0, e, n)
              );
            case 19:
              return Gi(e, t, n);
            case 22:
              return ki(e, t, n);
          }
          throw Error(o(156, t.tag));
        };
        var qu =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Qu(e) {
          this._internalRoot = e;
        }
        function Yu(e) {
          this._internalRoot = e;
        }
        function Ku(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Xu(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Ju() {}
        function Zu(e, t, n, r, a) {
          var o = n._reactRootContainer;
          if (o) {
            var l = o;
            if ("function" === typeof a) {
              var i = a;
              a = function () {
                var e = Hu(l);
                i.call(e);
              };
            }
            Wu(t, l, e, a);
          } else
            l = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var o = r;
                  r = function () {
                    var e = Hu(l);
                    o.call(e);
                  };
                }
                var l = Gu(t, r, e, 0, null, !1, 0, "", Ju);
                return (
                  (e._reactRootContainer = l),
                  (e[ga] = l.current),
                  Gr(8 === e.nodeType ? e.parentNode : e),
                  cu(),
                  l
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var i = r;
                r = function () {
                  var e = Hu(s);
                  i.call(e);
                };
              }
              var s = zu(e, 0, !1, null, 0, !1, 0, "", Ju);
              return (
                (e._reactRootContainer = s),
                (e[ga] = s.current),
                Gr(8 === e.nodeType ? e.parentNode : e),
                cu(function () {
                  Wu(t, s, n, r);
                }),
                s
              );
            })(n, t, e, a, r);
          return Hu(l);
        }
        (Yu.prototype.render = Qu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Wu(e, t, null, null);
          }),
          (Yu.prototype.unmount = Qu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cu(function () {
                  Wu(null, e, null, null);
                }),
                  (t[ga] = null);
              }
            }),
          (Yu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = kt();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Tt.length && 0 !== t && t < Tt[n].priority;
                n++
              );
              Tt.splice(n, 0, e), 0 === n && Mt(e);
            }
          }),
          (xt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (vt(t, 1 | n),
                    ru(t, Xe()),
                    0 === (6 & Ns) && ((Gs = Xe() + 500), Ga()));
                }
                break;
              case 13:
                cu(function () {
                  var t = Ao(e, 1);
                  if (null !== t) {
                    var n = eu();
                    nu(t, e, 1, n);
                  }
                }),
                  $u(e, 1);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = Ao(e, 134217728);
              if (null !== t) nu(t, e, 134217728, eu());
              $u(e, 134217728);
            }
          }),
          (Et = function (e) {
            if (13 === e.tag) {
              var t = tu(e),
                n = Ao(e, t);
              if (null !== n) nu(n, e, t, eu());
              $u(e, t);
            }
          }),
          (kt = function () {
            return yt;
          }),
          (Ct = function (e, t) {
            var n = yt;
            try {
              return (yt = e), t();
            } finally {
              yt = n;
            }
          }),
          (Se = function (e, t, n) {
            switch (t) {
              case "input":
                if ((J(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = xa(r);
                      if (!a) throw Error(o(90));
                      q(r), J(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                oe(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Ne = uu),
          (Pe = cu);
        var ec = {
            usingClientEntryPoint: !1,
            Events: [ya, wa, xa, Ie, De, uu],
          },
          tc = {
            findFiberByHostInstance: va,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom",
          },
          nc = {
            bundleType: tc.bundleType,
            version: tc.version,
            rendererPackageName: tc.rendererPackageName,
            rendererConfig: tc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Ve(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              tc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var rc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!rc.isDisabled && rc.supportsFiber)
            try {
              (at = rc.inject(nc)), (ot = rc);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ec),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Ku(t)) throw Error(o(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: S,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Ku(e)) throw Error(o(299));
            var n = !1,
              r = "",
              a = qu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = zu(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ga] = t.current),
              Gr(8 === e.nodeType ? e.parentNode : e),
              new Qu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
            }
            return (e = null === (e = Ve(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return cu(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Xu(t)) throw Error(o(200));
            return Zu(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Ku(e)) throw Error(o(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              l = "",
              i = qu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (l = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (i = n.onRecoverableError)),
              (t = Gu(t, null, e, 1, null != n ? n : null, a, 0, l, i)),
              (e[ga] = t.current),
              Gr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Yu(t);
          }),
          (t.render = function (e, t, n) {
            if (!Xu(t)) throw Error(o(200));
            return Zu(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Xu(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (cu(function () {
                Zu(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ga] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = uu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Xu(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return Zu(e, t, n, !1, r);
          }),
          (t.version = "18.3.1-next-f1338f8080-20240426");
      },
      853: (e, t, n) => {
        e.exports = n(234);
      },
      950: (e, t, n) => {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(730));
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  var r = n(43),
    a = n(391),
    o = n(579);
  const l = (e) => {
      let { setCurrentView: t } = e;
      return (0, o.jsx)("header", {
        className: "app-header",
        children: (0, o.jsxs)("div", {
          className: "header-content",
          children: [
            (0, o.jsxs)("div", {
              className: "logo-container",
              onClick: () => t("leaderboard"),
              children: [
                (0, o.jsx)("div", { className: "f1-logo-mark" }),
                (0, o.jsxs)("div", {
                  className: "logo-text",
                  children: [
                    (0, o.jsx)("h1", {
                      className: "main-title",
                      children: "CHAMPIONSHIP PREDICTOR",
                    }),
                    (0, o.jsx)("div", {
                      className: "season-subtitle",
                      children: "2025 SEASON",
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsxs)("nav", {
              className: "main-nav",
              children: [
                (0, o.jsxs)("button", {
                  onClick: () => t("leaderboard"),
                  children: [
                    (0, o.jsx)("span", {
                      className: "nav-icon",
                      children: "\ud83c\udfc6",
                    }),
                    (0, o.jsx)("span", {
                      className: "nav-text",
                      children: "Standings",
                    }),
                  ],
                }),
                (0, o.jsxs)("button", {
                  onClick: () => t("scenario"),
                  children: [
                    (0, o.jsx)("span", {
                      className: "nav-icon",
                      children: "\ud83c\udfc1",
                    }),
                    (0, o.jsx)("span", {
                      className: "nav-text",
                      children: "Simulator",
                    }),
                  ],
                }),
                (0, o.jsxs)("button", {
                  onClick: () => t("calculator"),
                  children: [
                    (0, o.jsx)("span", {
                      className: "nav-icon",
                      children: "\ud83e\uddee",
                    }),
                    (0, o.jsx)("span", {
                      className: "nav-text",
                      children: "Calculator",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      });
    },
    i = async (e) => {
      try {
        const t = await fetch(
          "".concat("https://api.jolpi.ca/ergast/f1", "/").concat(e, ".json")
        );
        if (!t.ok) throw new Error("Network response was not ok");
        const n = await t.json();
        return n.MRData || n;
      } catch (t) {
        throw (console.error("Error fetching from F1 2025 API:", t), t);
      }
    },
    s = async () => {
      var e;
      return (
        (null ===
          (e = (await i("2025/driverstandings")).StandingsTable
            .StandingsLists[0]) || void 0 === e
          ? void 0
          : e.DriverStandings) || []
      );
    },
    u = async () => (await i("2025/races")).RaceTable.Races || [];
  let c = { standings: null, races: null };
  const d = async () => {
      try {
        const [e, t] = await Promise.all([s(), u()]);
        return (c = { standings: e, races: t }), c;
      } catch (e) {
        return console.error("Error loading 2025 season data:", e), c;
      }
    },
    f = () => {
      var e;
      return (
        (null === (e = c.standings) || void 0 === e
          ? void 0
          : e.map((e) => {
              var t;
              return {
                id: e.Driver.driverId,
                number: e.Driver.permanentNumber || "N/A",
                name: ""
                  .concat(e.Driver.givenName, " ")
                  .concat(e.Driver.familyName),
                team:
                  (null === (t = e.Constructors[0]) || void 0 === t
                    ? void 0
                    : t.name) || "Unknown",
                points: parseInt(e.points, 10),
                wins: parseInt(e.wins, 10),
                position: parseInt(e.position, 10),
                sprintPoints: 0,
              };
            })) || []
      );
    },
    p = () => {
      var e;
      const t = new Date();
      return (
        (null === (e = c.races) || void 0 === e
          ? void 0
          : e
              .filter((e) => new Date(e.date) > t)
              .map((e) => ({
                id: e.round,
                name: e.raceName,
                date: e.date,
                circuit: e.Circuit.circuitName,
                completed: !1,
                hasSprint: !1,
              }))) || []
      );
    },
    g = {
      race: {
        1: 25,
        2: 18,
        3: 15,
        4: 12,
        5: 10,
        6: 8,
        7: 6,
        8: 4,
        9: 2,
        10: 1,
        fastestLap: 1,
      },
      sprint: { 1: 8, 2: 7, 3: 6, 4: 5, 5: 4, 6: 3, 7: 2, 8: 1, fastestLap: 0 },
    },
    m = (e) => {
      let { customization: t } = e;
      const [n, a] = (0, r.useState)([]),
        [l, i] = (0, r.useState)(!0),
        [s, u] = (0, r.useState)(null),
        [p, g] = (0, r.useState)(null),
        m = {
          "Red Bull": "red-bull",
          Mercedes: "mercedes",
          Ferrari: "ferrari",
          McLaren: "mclaren",
          "Alpine F1 Team": "alpine",
          "Aston Martin": "aston-martin",
          Sauber: "sauber",
          "Haas F1 Team": "haas",
          Williams: "williams",
          "RB F1 Team": "rb",
        },
        h = async () => {
          try {
            i(!0), await d();
            const e = f();
            a(e), g(new Date()), u(null);
          } catch (e) {
            console.error("Error loading standings:", e),
              u("Failed to load standings. Please try again.");
          } finally {
            i(!1);
          }
        };
      return (
        (0, r.useEffect)(() => {
          h();
        }, []),
        l && 0 === n.length
          ? (0, o.jsx)("div", {
              className: "loading",
              children: "Loading 2025 standings...",
            })
          : s
          ? (0, o.jsxs)("div", {
              className: "error",
              children: [
                (0, o.jsx)("p", { children: s }),
                (0, o.jsx)("button", {
                  onClick: h,
                  className: "refresh-btn",
                  children: "Retry",
                }),
              ],
            })
          : (0, o.jsxs)("div", {
              className: "leaderboard-container",
              children: [
                (0, o.jsxs)("div", {
                  className: "leaderboard-header",
                  children: [
                    (0, o.jsx)("h2", {
                      children: "2025 FIA Formula One World Championship",
                    }),
                    (0, o.jsxs)("div", {
                      className: "leaderboard-controls",
                      children: [
                        (0, o.jsx)("button", {
                          onClick: async () => {
                            try {
                              i(!0),
                                await (async () => {
                                  try {
                                    return (
                                      (c = { standings: null, races: null }),
                                      await d()
                                    );
                                  } catch (s) {
                                    throw (
                                      (console.error(
                                        "Error refreshing data:",
                                        s
                                      ),
                                      s)
                                    );
                                  }
                                })();
                              const e = f();
                              a(e), g(new Date()), u(null);
                            } catch (e) {
                              console.error("Error refreshing standings:", e),
                                u(
                                  "Failed to refresh data. Please check your connection."
                                );
                            } finally {
                              i(!1);
                            }
                          },
                          className: "refresh-btn",
                          disabled: l,
                          children: l ? "Refreshing..." : "Refresh Data",
                        }),
                        p &&
                          (0, o.jsxs)("div", {
                            className: "last-updated",
                            children: [
                              "Last updated: ",
                              p.toLocaleTimeString(),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
                (0, o.jsxs)("table", {
                  className: "leaderboard-table",
                  children: [
                    (0, o.jsx)("thead", {
                      children: (0, o.jsxs)("tr", {
                        children: [
                          (0, o.jsx)("th", { children: "Pos" }),
                          (0, o.jsx)("th", { children: "Driver" }),
                          t.showTeams && (0, o.jsx)("th", { children: "Team" }),
                          (0, o.jsx)("th", { children: "Points" }),
                          t.showWins && (0, o.jsx)("th", { children: "Wins" }),
                        ],
                      }),
                    }),
                    (0, o.jsx)("tbody", {
                      children: n.map((e) =>
                        (0, o.jsxs)(
                          "tr",
                          {
                            className: "driver-row ".concat(m[e.team] || ""),
                            children: [
                              (0, o.jsx)("td", { children: e.position }),
                              (0, o.jsxs)("td", {
                                children: [
                                  (0, o.jsx)("span", {
                                    className: "driver-number",
                                    children: e.number,
                                  }),
                                  e.name,
                                ],
                              }),
                              t.showTeams &&
                                (0, o.jsx)("td", { children: e.team }),
                              (0, o.jsx)("td", {
                                className: "points",
                                children: e.points,
                              }),
                              t.showWins &&
                                (0, o.jsx)("td", { children: e.wins }),
                            ],
                          },
                          e.id
                        )
                      ),
                    }),
                  ],
                }),
              ],
            })
      );
    };
  function h(e) {
    return (
      (h =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      h(e)
    );
  }
  function b(e) {
    var t = (function (e, t) {
      if ("object" != h(e) || !e) return e;
      var n = e[Symbol.toPrimitive];
      if (void 0 !== n) {
        var r = n.call(e, t || "default");
        if ("object" != h(r)) return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t ? String : Number)(e);
    })(e, "string");
    return "symbol" == h(t) ? t : t + "";
  }
  function v(e, t, n) {
    return (
      (t = b(t)) in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function w(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? y(Object(n), !0).forEach(function (t) {
            v(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : y(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  var x = n(950);
  function S(e) {
    return "Minified Redux error #"
      .concat(e, "; visit https://redux.js.org/Errors?code=")
      .concat(
        e,
        " for the full message or use the non-minified dev environment for full errors. "
      );
  }
  var E = (() =>
      ("function" === typeof Symbol && Symbol.observable) || "@@observable")(),
    k = () => Math.random().toString(36).substring(7).split("").join("."),
    C = {
      INIT: "@@redux/INIT".concat(k()),
      REPLACE: "@@redux/REPLACE".concat(k()),
      PROBE_UNKNOWN_ACTION: () => "@@redux/PROBE_UNKNOWN_ACTION".concat(k()),
    };
  function I(e) {
    if ("object" !== typeof e || null === e) return !1;
    let t = e;
    for (; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t || null === Object.getPrototypeOf(e);
  }
  function D(e, t, n) {
    if ("function" !== typeof e) throw new Error(S(2));
    if (
      ("function" === typeof t && "function" === typeof n) ||
      ("function" === typeof n && "function" === typeof arguments[3])
    )
      throw new Error(S(0));
    if (
      ("function" === typeof t &&
        "undefined" === typeof n &&
        ((n = t), (t = void 0)),
      "undefined" !== typeof n)
    ) {
      if ("function" !== typeof n) throw new Error(S(1));
      return n(D)(e, t);
    }
    let r = e,
      a = t,
      o = new Map(),
      l = o,
      i = 0,
      s = !1;
    function u() {
      l === o &&
        ((l = new Map()),
        o.forEach((e, t) => {
          l.set(t, e);
        }));
    }
    function c() {
      if (s) throw new Error(S(3));
      return a;
    }
    function d(e) {
      if ("function" !== typeof e) throw new Error(S(4));
      if (s) throw new Error(S(5));
      let t = !0;
      u();
      const n = i++;
      return (
        l.set(n, e),
        function () {
          if (t) {
            if (s) throw new Error(S(6));
            (t = !1), u(), l.delete(n), (o = null);
          }
        }
      );
    }
    function f(e) {
      if (!I(e)) throw new Error(S(7));
      if ("undefined" === typeof e.type) throw new Error(S(8));
      if ("string" !== typeof e.type) throw new Error(S(17));
      if (s) throw new Error(S(9));
      try {
        (s = !0), (a = r(a, e));
      } finally {
        s = !1;
      }
      return (
        (o = l).forEach((e) => {
          e();
        }),
        e
      );
    }
    f({ type: C.INIT });
    return {
      dispatch: f,
      subscribe: d,
      getState: c,
      replaceReducer: function (e) {
        if ("function" !== typeof e) throw new Error(S(10));
        (r = e), f({ type: C.REPLACE });
      },
      [E]: function () {
        const e = d;
        return {
          subscribe(t) {
            if ("object" !== typeof t || null === t) throw new Error(S(11));
            function n() {
              const e = t;
              e.next && e.next(c());
            }
            n();
            return { unsubscribe: e(n) };
          },
          [E]() {
            return this;
          },
        };
      },
    };
  }
  function N(e, t) {
    return function () {
      for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
        r[a] = arguments[a];
      return t(e.apply(this, r));
    };
  }
  function P(e, t) {
    if ("function" === typeof e) return N(e, t);
    if ("object" !== typeof e || null === e) throw new Error(S(16));
    const n = {};
    for (const r in e) {
      const a = e[r];
      "function" === typeof a && (n[r] = N(a, t));
    }
    return n;
  }
  function O() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return 0 === t.length
      ? (e) => e
      : 1 === t.length
      ? t[0]
      : t.reduce(
          (e, t) =>
            function () {
              return e(t(...arguments));
            }
        );
  }
  function R(e, t) {
    if (null == e) return {};
    var n,
      r,
      a = (function (e, t) {
        if (null == e) return {};
        var n = {};
        for (var r in e)
          if ({}.hasOwnProperty.call(e, r)) {
            if (-1 !== t.indexOf(r)) continue;
            n[r] = e[r];
          }
        return n;
      })(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (r = 0; r < o.length; r++)
        (n = o[r]),
          -1 === t.indexOf(n) &&
            {}.propertyIsEnumerable.call(e, n) &&
            (a[n] = e[n]);
    }
    return a;
  }
  n(237);
  const _ = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"],
    T = ["reactReduxForwardedRef"];
  var L = r.version.startsWith("19"),
    A = Symbol.for(L ? "react.transitional.element" : "react.element"),
    B = Symbol.for("react.portal"),
    M = Symbol.for("react.fragment"),
    j = Symbol.for("react.strict_mode"),
    F = Symbol.for("react.profiler"),
    z = Symbol.for("react.consumer"),
    U = Symbol.for("react.context"),
    G = Symbol.for("react.forward_ref"),
    W = Symbol.for("react.suspense"),
    H = Symbol.for("react.suspense_list"),
    V = Symbol.for("react.memo"),
    $ = Symbol.for("react.lazy"),
    q = G,
    Q = V;
  function Y(e) {
    if ("object" === typeof e && null !== e) {
      const { $$typeof: t } = e;
      switch (t) {
        case A:
          switch ((e = e.type)) {
            case M:
            case F:
            case j:
            case W:
            case H:
              return e;
            default:
              switch ((e = e && e.$$typeof)) {
                case U:
                case G:
                case $:
                case V:
                case z:
                  return e;
                default:
                  return t;
              }
          }
        case B:
          return t;
      }
    }
  }
  function K(e, t, n, r, a) {
    let o,
      l,
      i,
      s,
      u,
      { areStatesEqual: c, areOwnPropsEqual: d, areStatePropsEqual: f } = a,
      p = !1;
    function g(a, p) {
      const g = !d(p, l),
        m = !c(a, o, p, l);
      return (
        (o = a),
        (l = p),
        g && m
          ? ((i = e(o, l)),
            t.dependsOnOwnProps && (s = t(r, l)),
            (u = n(i, s, l)),
            u)
          : g
          ? (e.dependsOnOwnProps && (i = e(o, l)),
            t.dependsOnOwnProps && (s = t(r, l)),
            (u = n(i, s, l)),
            u)
          : m
          ? (function () {
              const t = e(o, l),
                r = !f(t, i);
              return (i = t), r && (u = n(i, s, l)), u;
            })()
          : u
      );
    }
    return function (a, c) {
      return p
        ? g(a, c)
        : ((o = a),
          (l = c),
          (i = e(o, l)),
          (s = t(r, l)),
          (u = n(i, s, l)),
          (p = !0),
          u);
    };
  }
  function X(e) {
    return function (t) {
      const n = e(t);
      function r() {
        return n;
      }
      return (r.dependsOnOwnProps = !1), r;
    };
  }
  function J(e) {
    return e.dependsOnOwnProps ? Boolean(e.dependsOnOwnProps) : 1 !== e.length;
  }
  function Z(e, t) {
    return function (t, n) {
      let { displayName: r } = n;
      const a = function (e, t) {
        return a.dependsOnOwnProps
          ? a.mapToProps(e, t)
          : a.mapToProps(e, void 0);
      };
      return (
        (a.dependsOnOwnProps = !0),
        (a.mapToProps = function (t, n) {
          (a.mapToProps = e), (a.dependsOnOwnProps = J(e));
          let r = a(t, n);
          return (
            "function" === typeof r &&
              ((a.mapToProps = r), (a.dependsOnOwnProps = J(r)), (r = a(t, n))),
            r
          );
        }),
        a
      );
    };
  }
  function ee(e, t) {
    return (n, r) => {
      throw new Error(
        "Invalid value of type "
          .concat(typeof e, " for ")
          .concat(t, " argument when connecting component ")
          .concat(r.wrappedComponentName, ".")
      );
    };
  }
  function te(e, t, n) {
    return w(w(w({}, n), e), t);
  }
  function ne(e) {
    e();
  }
  var re = { notify() {}, get: () => [] };
  function ae(e, t) {
    let n,
      r = re,
      a = 0,
      o = !1;
    function l() {
      u.onStateChange && u.onStateChange();
    }
    function i() {
      a++,
        n ||
          ((n = t ? t.addNestedSub(l) : e.subscribe(l)),
          (r = (function () {
            let e = null,
              t = null;
            return {
              clear() {
                (e = null), (t = null);
              },
              notify() {
                ne(() => {
                  let t = e;
                  for (; t; ) t.callback(), (t = t.next);
                });
              },
              get() {
                const t = [];
                let n = e;
                for (; n; ) t.push(n), (n = n.next);
                return t;
              },
              subscribe(n) {
                let r = !0;
                const a = (t = { callback: n, next: null, prev: t });
                return (
                  a.prev ? (a.prev.next = a) : (e = a),
                  function () {
                    r &&
                      null !== e &&
                      ((r = !1),
                      a.next ? (a.next.prev = a.prev) : (t = a.prev),
                      a.prev ? (a.prev.next = a.next) : (e = a.next));
                  }
                );
              },
            };
          })()));
    }
    function s() {
      a--, n && 0 === a && (n(), (n = void 0), r.clear(), (r = re));
    }
    const u = {
      addNestedSub: function (e) {
        i();
        const t = r.subscribe(e);
        let n = !1;
        return () => {
          n || ((n = !0), t(), s());
        };
      },
      notifyNestedSubs: function () {
        r.notify();
      },
      handleChangeWrapper: l,
      isSubscribed: function () {
        return o;
      },
      trySubscribe: function () {
        o || ((o = !0), i());
      },
      tryUnsubscribe: function () {
        o && ((o = !1), s());
      },
      getListeners: () => r,
    };
    return u;
  }
  var oe = (() =>
      !(
        "undefined" === typeof window ||
        "undefined" === typeof window.document ||
        "undefined" === typeof window.document.createElement
      ))(),
    le = (() =>
      "undefined" !== typeof navigator &&
      "ReactNative" === navigator.product)(),
    ie = (() => (oe || le ? r.useLayoutEffect : r.useEffect))();
  function se(e, t) {
    return e === t ? 0 !== e || 0 !== t || 1 / e === 1 / t : e !== e && t !== t;
  }
  function ue(e, t) {
    if (se(e, t)) return !0;
    if (
      "object" !== typeof e ||
      null === e ||
      "object" !== typeof t ||
      null === t
    )
      return !1;
    const n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (let a = 0; a < n.length; a++)
      if (
        !Object.prototype.hasOwnProperty.call(t, n[a]) ||
        !se(e[n[a]], t[n[a]])
      )
        return !1;
    return !0;
  }
  var ce = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    de = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    fe = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    pe = {
      [q]: {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      },
      [Q]: fe,
    };
  function ge(e) {
    return Y(e) === V ? fe : pe[e.$$typeof] || ce;
  }
  var me = Object.defineProperty,
    he = Object.getOwnPropertyNames,
    be = Object.getOwnPropertySymbols,
    ve = Object.getOwnPropertyDescriptor,
    ye = Object.getPrototypeOf,
    we = Object.prototype;
  function xe(e, t) {
    if ("string" !== typeof t) {
      if (we) {
        const n = ye(t);
        n && n !== we && xe(e, n);
      }
      let r = he(t);
      be && (r = r.concat(be(t)));
      const a = ge(e),
        o = ge(t);
      for (let l = 0; l < r.length; ++l) {
        const i = r[l];
        if (!de[i] && (!o || !o[i]) && (!a || !a[i])) {
          const r = ve(t, i);
          try {
            me(e, i, r);
          } catch (n) {}
        }
      }
    }
    return e;
  }
  var Se = Symbol.for("react-redux-context"),
    Ee = "undefined" !== typeof globalThis ? globalThis : {};
  function ke() {
    var e;
    if (!r.createContext) return {};
    const t = null !== (e = Ee[Se]) && void 0 !== e ? e : (Ee[Se] = new Map());
    let n = t.get(r.createContext);
    return n || ((n = r.createContext(null)), t.set(r.createContext, n)), n;
  }
  var Ce = ke(),
    Ie = [null, null];
  function De(e, t, n, r, a, o) {
    (e.current = r), (n.current = !1), a.current && ((a.current = null), o());
  }
  function Ne(e, t) {
    return e === t;
  }
  var Pe = function (e, t, n) {
    let {
      pure: a,
      areStatesEqual: o = Ne,
      areOwnPropsEqual: l = ue,
      areStatePropsEqual: i = ue,
      areMergedPropsEqual: s = ue,
      forwardRef: u = !1,
      context: c = Ce,
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    const d = c,
      f = (function (e) {
        return e
          ? "function" === typeof e
            ? Z(e)
            : ee(e, "mapStateToProps")
          : X(() => ({}));
      })(e),
      p = (function (e) {
        return e && "object" === typeof e
          ? X((t) =>
              (function (e, t) {
                const n = {};
                for (const r in e) {
                  const a = e[r];
                  "function" === typeof a &&
                    (n[r] = function () {
                      return t(a(...arguments));
                    });
                }
                return n;
              })(e, t)
            )
          : e
          ? "function" === typeof e
            ? Z(e)
            : ee(e, "mapDispatchToProps")
          : X((e) => ({ dispatch: e }));
      })(t),
      g = (function (e) {
        return e
          ? "function" === typeof e
            ? (function (e) {
                return function (t, n) {
                  let r,
                    { displayName: a, areMergedPropsEqual: o } = n,
                    l = !1;
                  return function (t, n, a) {
                    const i = e(t, n, a);
                    return l ? o(i, r) || (r = i) : ((l = !0), (r = i)), r;
                  };
                };
              })(e)
            : ee(e, "mergeProps")
          : () => te;
      })(n),
      m = Boolean(e);
    return (e) => {
      const t = e.displayName || e.name || "Component",
        n = "Connect(".concat(t, ")"),
        a = {
          shouldHandleStateChanges: m,
          displayName: n,
          wrappedComponentName: t,
          WrappedComponent: e,
          initMapStateToProps: f,
          initMapDispatchToProps: p,
          initMergeProps: g,
          areStatesEqual: o,
          areStatePropsEqual: i,
          areOwnPropsEqual: l,
          areMergedPropsEqual: s,
        };
      function c(t) {
        const [n, o, l] = r.useMemo(() => {
            const { reactReduxForwardedRef: e } = t,
              n = R(t, T);
            return [t.context, e, n];
          }, [t]),
          i = r.useMemo(() => {
            let e = d;
            return null !== n && void 0 !== n && n.Consumer, e;
          }, [n, d]),
          s = r.useContext(i),
          u =
            Boolean(t.store) &&
            Boolean(t.store.getState) &&
            Boolean(t.store.dispatch),
          c = Boolean(s) && Boolean(s.store);
        const f = u ? t.store : s.store,
          p = c ? s.getServerState : f.getState,
          g = r.useMemo(
            () =>
              (function (e, t) {
                let {
                    initMapStateToProps: n,
                    initMapDispatchToProps: r,
                    initMergeProps: a,
                  } = t,
                  o = R(t, _);
                return K(n(e, o), r(e, o), a(e, o), e, o);
              })(f.dispatch, a),
            [f]
          ),
          [h, b] = r.useMemo(() => {
            if (!m) return Ie;
            const e = ae(f, u ? void 0 : s.subscription),
              t = e.notifyNestedSubs.bind(e);
            return [e, t];
          }, [f, u, s]),
          v = r.useMemo(
            () => (u ? s : w(w({}, s), {}, { subscription: h })),
            [u, s, h]
          ),
          y = r.useRef(void 0),
          x = r.useRef(l),
          S = r.useRef(void 0),
          E = r.useRef(!1),
          k = r.useRef(!1),
          C = r.useRef(void 0);
        ie(
          () => (
            (k.current = !0),
            () => {
              k.current = !1;
            }
          ),
          []
        );
        const I = r.useMemo(
            () => () =>
              S.current && l === x.current ? S.current : g(f.getState(), l),
            [f, l]
          ),
          D = r.useMemo(
            () => (e) =>
              h
                ? (function (e, t, n, r, a, o, l, i, s, u, c) {
                    if (!e) return () => {};
                    let d = !1,
                      f = null;
                    const p = () => {
                      if (d || !i.current) return;
                      const e = t.getState();
                      let n, p;
                      try {
                        n = r(e, a.current);
                      } catch (g) {
                        (p = g), (f = g);
                      }
                      p || (f = null),
                        n === o.current
                          ? l.current || u()
                          : ((o.current = n),
                            (s.current = n),
                            (l.current = !0),
                            c());
                    };
                    return (
                      (n.onStateChange = p),
                      n.trySubscribe(),
                      p(),
                      () => {
                        if (
                          ((d = !0),
                          n.tryUnsubscribe(),
                          (n.onStateChange = null),
                          f)
                        )
                          throw f;
                      }
                    );
                  })(m, f, h, g, x, y, E, k, S, b, e)
                : () => {},
            [h]
          );
        var N, P, O;
        let L;
        (N = De), (P = [x, y, E, l, S, b]), ie(() => N(...P), O);
        try {
          L = r.useSyncExternalStore(D, I, p ? () => g(p(), l) : I);
        } catch (B) {
          throw (
            (C.current &&
              (B.message +=
                "\nThe error may be correlated with this previous error:\n".concat(
                  C.current.stack,
                  "\n\n"
                )),
            B)
          );
        }
        ie(() => {
          (C.current = void 0), (S.current = void 0), (y.current = L);
        });
        const A = r.useMemo(
          () => r.createElement(e, w(w({}, L), {}, { ref: o })),
          [o, e, L]
        );
        return r.useMemo(
          () => (m ? r.createElement(i.Provider, { value: v }, A) : A),
          [i, A, v]
        );
      }
      const h = r.memo(c);
      if (((h.WrappedComponent = e), (h.displayName = c.displayName = n), u)) {
        const t = r.forwardRef(function (e, t) {
          return r.createElement(
            h,
            w(w({}, e), {}, { reactReduxForwardedRef: t })
          );
        });
        return (t.displayName = n), (t.WrappedComponent = e), xe(t, e);
      }
      return xe(h, e);
    };
  };
  var Oe = function (e) {
    const { children: t, context: n, serverState: a, store: o } = e,
      l = r.useMemo(() => {
        const e = ae(o);
        return {
          store: o,
          subscription: e,
          getServerState: a ? () => a : void 0,
        };
      }, [o, a]),
      i = r.useMemo(() => o.getState(), [o]);
    ie(() => {
      const { subscription: e } = l;
      return (
        (e.onStateChange = e.notifyNestedSubs),
        e.trySubscribe(),
        i !== o.getState() && e.notifyNestedSubs(),
        () => {
          e.tryUnsubscribe(), (e.onStateChange = void 0);
        }
      );
    }, [l, i]);
    const s = n || Ce;
    return r.createElement(s.Provider, { value: l }, t);
  };
  var Re = "Invariant failed";
  var _e = function (e) {
      var t = e.top,
        n = e.right,
        r = e.bottom,
        a = e.left;
      return {
        top: t,
        right: n,
        bottom: r,
        left: a,
        width: n - a,
        height: r - t,
        x: a,
        y: t,
        center: { x: (n + a) / 2, y: (r + t) / 2 },
      };
    },
    Te = function (e, t) {
      return {
        top: e.top - t.top,
        left: e.left - t.left,
        bottom: e.bottom + t.bottom,
        right: e.right + t.right,
      };
    },
    Le = function (e, t) {
      return {
        top: e.top + t.top,
        left: e.left + t.left,
        bottom: e.bottom - t.bottom,
        right: e.right - t.right,
      };
    },
    Ae = { top: 0, right: 0, bottom: 0, left: 0 },
    Be = function (e) {
      var t = e.borderBox,
        n = e.margin,
        r = void 0 === n ? Ae : n,
        a = e.border,
        o = void 0 === a ? Ae : a,
        l = e.padding,
        i = void 0 === l ? Ae : l,
        s = _e(Te(t, r)),
        u = _e(Le(t, o)),
        c = _e(Le(u, i));
      return {
        marginBox: s,
        borderBox: _e(t),
        paddingBox: u,
        contentBox: c,
        margin: r,
        border: o,
        padding: i,
      };
    },
    Me = function (e) {
      var t = e.slice(0, -2);
      if ("px" !== e.slice(-2)) return 0;
      var n = Number(t);
      return (
        isNaN(n) &&
          (function (e) {
            if (!e) throw new Error(Re);
          })(!1),
        n
      );
    },
    je = function (e, t) {
      var n,
        r,
        a = e.borderBox,
        o = e.border,
        l = e.margin,
        i = e.padding,
        s =
          ((r = t),
          {
            top: (n = a).top + r.y,
            left: n.left + r.x,
            bottom: n.bottom + r.y,
            right: n.right + r.x,
          });
      return Be({ borderBox: s, border: o, margin: l, padding: i });
    },
    Fe = function (e, t) {
      return (
        void 0 === t && (t = { x: window.pageXOffset, y: window.pageYOffset }),
        je(e, t)
      );
    },
    ze = function (e, t) {
      var n = {
          top: Me(t.marginTop),
          right: Me(t.marginRight),
          bottom: Me(t.marginBottom),
          left: Me(t.marginLeft),
        },
        r = {
          top: Me(t.paddingTop),
          right: Me(t.paddingRight),
          bottom: Me(t.paddingBottom),
          left: Me(t.paddingLeft),
        },
        a = {
          top: Me(t.borderTopWidth),
          right: Me(t.borderRightWidth),
          bottom: Me(t.borderBottomWidth),
          left: Me(t.borderLeftWidth),
        };
      return Be({ borderBox: e, margin: n, padding: r, border: a });
    },
    Ue = function (e) {
      var t = e.getBoundingClientRect(),
        n = window.getComputedStyle(e);
      return ze(t, n);
    };
  const Ge = function (e) {
    var t = [],
      n = null,
      r = function () {
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
          a[o] = arguments[o];
        (t = a),
          n ||
            (n = requestAnimationFrame(function () {
              (n = null), e.apply(void 0, t);
            }));
      };
    return (
      (r.cancel = function () {
        n && (cancelAnimationFrame(n), (n = null));
      }),
      r
    );
  };
  function We() {
    return (
      (We = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      We.apply(null, arguments)
    );
  }
  function He(e, t) {}
  He.bind(null, "warn"), He.bind(null, "error");
  function Ve() {}
  function $e(e, t, n) {
    const r = t.map((t) => {
      const r = (function (e, t) {
        return w(w({}, e), t);
      })(n, t.options);
      return (
        e.addEventListener(t.eventName, t.fn, r),
        function () {
          e.removeEventListener(t.eventName, t.fn, r);
        }
      );
    });
    return function () {
      r.forEach((e) => {
        e();
      });
    };
  }
  const qe = "Invariant failed";
  class Qe extends Error {}
  function Ye(e, t) {
    throw new Qe(qe);
  }
  Qe.prototype.toString = function () {
    return this.message;
  };
  class Ke extends r.Component {
    constructor() {
      super(...arguments),
        (this.callbacks = null),
        (this.unbind = Ve),
        (this.onWindowError = (e) => {
          const t = this.getCallbacks();
          t.isDragging() && t.tryAbort();
          e.error instanceof Qe && e.preventDefault();
        }),
        (this.getCallbacks = () => {
          if (!this.callbacks)
            throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
          return this.callbacks;
        }),
        (this.setCallbacks = (e) => {
          this.callbacks = e;
        });
    }
    componentDidMount() {
      this.unbind = $e(window, [
        { eventName: "error", fn: this.onWindowError },
      ]);
    }
    componentDidCatch(e) {
      if (!(e instanceof Qe)) throw e;
      this.setState({});
    }
    componentWillUnmount() {
      this.unbind();
    }
    render() {
      return this.props.children(this.setCallbacks);
    }
  }
  const Xe = (e) => e + 1,
    Je = (e, t) => {
      const n = e.droppableId === t.droppableId,
        r = Xe(e.index),
        a = Xe(t.index);
      return n
        ? "\n      You have moved the item from position "
            .concat(r, "\n      to position ")
            .concat(a, "\n    ")
        : "\n    You have moved the item from position "
            .concat(r, "\n    in list ")
            .concat(e.droppableId, "\n    to list ")
            .concat(t.droppableId, "\n    in position ")
            .concat(a, "\n  ");
    },
    Ze = (e, t, n) =>
      t.droppableId === n.droppableId
        ? "\n      The item "
            .concat(e, "\n      has been combined with ")
            .concat(n.draggableId)
        : "\n      The item "
            .concat(e, "\n      in list ")
            .concat(t.droppableId, "\n      has been combined with ")
            .concat(n.draggableId, "\n      in list ")
            .concat(n.droppableId, "\n    "),
    et = (e) =>
      "\n  The item has returned to its starting position\n  of ".concat(
        Xe(e.index),
        "\n"
      ),
    tt =
      "\n  Press space bar to start a drag.\n  When dragging you can use the arrow keys to move the item around and escape to cancel.\n  Some screen readers may require you to be in focus mode or to use your pass through key\n",
    nt = (e) =>
      "\n  You have lifted an item in position ".concat(
        Xe(e.source.index),
        "\n"
      ),
    rt = (e) => {
      const t = e.destination;
      if (t) return Je(e.source, t);
      const n = e.combine;
      return n
        ? Ze(e.draggableId, e.source, n)
        : "You are over an area that cannot be dropped on";
    },
    at = (e) => {
      if ("CANCEL" === e.reason)
        return "\n      Movement cancelled.\n      ".concat(
          et(e.source),
          "\n    "
        );
      const t = e.destination,
        n = e.combine;
      return t
        ? "\n      You have dropped the item.\n      ".concat(
            Je(e.source, t),
            "\n    "
          )
        : n
        ? "\n      You have dropped the item.\n      ".concat(
            Ze(e.draggableId, e.source, n),
            "\n    "
          )
        : "\n    The item has been dropped while not over a drop area.\n    ".concat(
            et(e.source),
            "\n  "
          );
    };
  function ot(e, t) {
    if (e.length !== t.length) return !1;
    for (let a = 0; a < e.length; a++)
      if (
        ((n = e[a]),
        (r = t[a]),
        !(n === r || (Number.isNaN(n) && Number.isNaN(r))))
      )
        return !1;
    var n, r;
    return !0;
  }
  function lt(e, t) {
    const n = (0, r.useState)(() => ({ inputs: t, result: e() }))[0],
      a = (0, r.useRef)(!0),
      o = (0, r.useRef)(n),
      l =
        a.current || Boolean(t && o.current.inputs && ot(t, o.current.inputs))
          ? o.current
          : { inputs: t, result: e() };
    return (
      (0, r.useEffect)(() => {
        (a.current = !1), (o.current = l);
      }, [l]),
      l.result
    );
  }
  function it(e, t) {
    return lt(() => e, t);
  }
  const st = { x: 0, y: 0 },
    ut = (e, t) => ({ x: e.x + t.x, y: e.y + t.y }),
    ct = (e, t) => ({ x: e.x - t.x, y: e.y - t.y }),
    dt = (e, t) => e.x === t.x && e.y === t.y,
    ft = (e) => ({ x: 0 !== e.x ? -e.x : 0, y: 0 !== e.y ? -e.y : 0 }),
    pt = function (e, t) {
      let n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      return "x" === e ? { x: t, y: n } : { x: n, y: t };
    },
    gt = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2),
    mt = (e, t) => Math.min(...t.map((t) => gt(e, t))),
    ht = (e) => (t) => ({ x: e(t.x), y: e(t.y) });
  const bt = (e, t) => ({
      top: e.top + t.y,
      left: e.left + t.x,
      bottom: e.bottom + t.y,
      right: e.right + t.x,
    }),
    vt = (e) => [
      { x: e.left, y: e.top },
      { x: e.right, y: e.top },
      { x: e.left, y: e.bottom },
      { x: e.right, y: e.bottom },
    ],
    yt = (e, t) =>
      t && t.shouldClipSubject
        ? ((e, t) => {
            const n = _e({
              top: Math.max(t.top, e.top),
              right: Math.min(t.right, e.right),
              bottom: Math.min(t.bottom, e.bottom),
              left: Math.max(t.left, e.left),
            });
            return n.width <= 0 || n.height <= 0 ? null : n;
          })(t.pageMarginBox, e)
        : _e(e);
  var wt = (e) => {
      let { page: t, withPlaceholder: n, axis: r, frame: a } = e;
      const o = ((e, t) => (t ? bt(e, t.scroll.diff.displacement) : e))(
          t.marginBox,
          a
        ),
        l = ((e, t, n) =>
          n && n.increasedBy
            ? w(w({}, e), {}, { [t.end]: e[t.end] + n.increasedBy[t.line] })
            : e)(o, r, n);
      return { page: t, withPlaceholder: n, active: yt(l, a) };
    },
    xt = (e, t) => {
      e.frame || Ye();
      const n = e.frame,
        r = ct(t, n.scroll.initial),
        a = ft(r),
        o = w(
          w({}, n),
          {},
          {
            scroll: {
              initial: n.scroll.initial,
              current: t,
              diff: { value: r, displacement: a },
              max: n.scroll.max,
            },
          }
        ),
        l = wt({
          page: e.subject.page,
          withPlaceholder: e.subject.withPlaceholder,
          axis: e.axis,
          frame: o,
        });
      return w(w({}, e), {}, { frame: o, subject: l });
    };
  function St(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ot,
      n = null;
    function r() {
      for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
        a[o] = arguments[o];
      if (n && n.lastThis === this && t(a, n.lastArgs)) return n.lastResult;
      const l = e.apply(this, a);
      return (n = { lastResult: l, lastArgs: a, lastThis: this }), l;
    }
    return (
      (r.clear = function () {
        n = null;
      }),
      r
    );
  }
  const Et = St((e) => e.reduce((e, t) => ((e[t.descriptor.id] = t), e), {})),
    kt = St((e) => e.reduce((e, t) => ((e[t.descriptor.id] = t), e), {})),
    Ct = St((e) => Object.values(e)),
    It = St((e) => Object.values(e));
  var Dt = St((e, t) => {
    const n = It(t)
      .filter((t) => e === t.descriptor.droppableId)
      .sort((e, t) => e.descriptor.index - t.descriptor.index);
    return n;
  });
  function Nt(e) {
    return e.at && "REORDER" === e.at.type ? e.at.destination : null;
  }
  function Pt(e) {
    return e.at && "COMBINE" === e.at.type ? e.at.combine : null;
  }
  var Ot = St((e, t) => t.filter((t) => t.descriptor.id !== e.descriptor.id)),
    Rt = (e, t) => e.descriptor.droppableId === t.descriptor.id;
  const _t = { point: st, value: 0 },
    Tt = { invisible: {}, visible: {}, all: [] },
    Lt = { displaced: Tt, displacedBy: _t, at: null };
  var At = (e, t) => (n) => e <= n && n <= t,
    Bt = (e) => {
      const t = At(e.top, e.bottom),
        n = At(e.left, e.right);
      return (r) => {
        if (t(r.top) && t(r.bottom) && n(r.left) && n(r.right)) return !0;
        const a = t(r.top) || t(r.bottom),
          o = n(r.left) || n(r.right);
        if (a && o) return !0;
        const l = r.top < e.top && r.bottom > e.bottom,
          i = r.left < e.left && r.right > e.right;
        if (l && i) return !0;
        return (l && o) || (i && a);
      };
    },
    Mt = (e) => {
      const t = At(e.top, e.bottom),
        n = At(e.left, e.right);
      return (e) => t(e.top) && t(e.bottom) && n(e.left) && n(e.right);
    };
  const jt = {
      direction: "vertical",
      line: "y",
      crossAxisLine: "x",
      start: "top",
      end: "bottom",
      size: "height",
      crossAxisStart: "left",
      crossAxisEnd: "right",
      crossAxisSize: "width",
    },
    Ft = {
      direction: "horizontal",
      line: "x",
      crossAxisLine: "y",
      start: "left",
      end: "right",
      size: "width",
      crossAxisStart: "top",
      crossAxisEnd: "bottom",
      crossAxisSize: "height",
    };
  const zt = (e) => {
      let {
        target: t,
        destination: n,
        viewport: r,
        withDroppableDisplacement: a,
        isVisibleThroughFrameFn: o,
      } = e;
      const l = a
        ? ((e, t) => {
            const n = t.frame ? t.frame.scroll.diff.displacement : st;
            return bt(e, n);
          })(t, n)
        : t;
      return (
        ((e, t, n) => !!t.subject.active && n(t.subject.active)(e))(l, n, o) &&
        ((e, t, n) => n(t)(e))(l, r, o)
      );
    },
    Ut = (e) => zt(w(w({}, e), {}, { isVisibleThroughFrameFn: Mt }));
  function Gt(e) {
    let {
      afterDragging: t,
      destination: n,
      displacedBy: r,
      viewport: a,
      forceShouldAnimate: o,
      last: l,
    } = e;
    return t.reduce(
      function (e, t) {
        const i = (function (e, t) {
            const n = e.page.marginBox,
              r = { top: t.point.y, right: 0, bottom: 0, left: t.point.x };
            return _e(Te(n, r));
          })(t, r),
          s = t.descriptor.id;
        e.all.push(s);
        if (
          !zt(
            w(
              w(
                {},
                {
                  target: i,
                  destination: n,
                  viewport: a,
                  withDroppableDisplacement: !0,
                }
              ),
              {},
              { isVisibleThroughFrameFn: Bt }
            )
          )
        )
          return (e.invisible[t.descriptor.id] = !0), e;
        const u = ((e, t, n) => {
            if ("boolean" === typeof n) return n;
            if (!t) return !0;
            const { invisible: r, visible: a } = t;
            if (r[e]) return !1;
            const o = a[e];
            return !o || o.shouldAnimate;
          })(s, l, o),
          c = { draggableId: s, shouldAnimate: u };
        return (e.visible[s] = c), e;
      },
      { all: [], visible: {}, invisible: {} }
    );
  }
  function Wt(e) {
    let {
      insideDestination: t,
      inHomeList: n,
      displacedBy: r,
      destination: a,
    } = e;
    const o = (function (e, t) {
      if (!e.length) return 0;
      const n = e[e.length - 1].descriptor.index;
      return t.inHomeList ? n : n + 1;
    })(t, { inHomeList: n });
    return {
      displaced: Tt,
      displacedBy: r,
      at: {
        type: "REORDER",
        destination: { droppableId: a.descriptor.id, index: o },
      },
    };
  }
  function Ht(e) {
    let {
      draggable: t,
      insideDestination: n,
      destination: r,
      viewport: a,
      displacedBy: o,
      last: l,
      index: i,
      forceShouldAnimate: s,
    } = e;
    const u = Rt(t, r);
    if (null == i)
      return Wt({
        insideDestination: n,
        inHomeList: u,
        displacedBy: o,
        destination: r,
      });
    const c = n.find((e) => e.descriptor.index === i);
    if (!c)
      return Wt({
        insideDestination: n,
        inHomeList: u,
        displacedBy: o,
        destination: r,
      });
    const d = Ot(t, n),
      f = n.indexOf(c);
    return {
      displaced: Gt({
        afterDragging: d.slice(f),
        destination: r,
        displacedBy: o,
        last: l,
        viewport: a.frame,
        forceShouldAnimate: s,
      }),
      displacedBy: o,
      at: {
        type: "REORDER",
        destination: { droppableId: r.descriptor.id, index: i },
      },
    };
  }
  function Vt(e, t) {
    return Boolean(t.effected[e]);
  }
  var $t = (e) => {
      let {
        isMovingForward: t,
        isInHomeList: n,
        draggable: r,
        draggables: a,
        destination: o,
        insideDestination: l,
        previousImpact: i,
        viewport: s,
        afterCritical: u,
      } = e;
      const c = i.at;
      if ((c || Ye(), "REORDER" === c.type)) {
        const e = ((e) => {
          let {
            isMovingForward: t,
            isInHomeList: n,
            insideDestination: r,
            location: a,
          } = e;
          if (!r.length) return null;
          const o = a.index,
            l = t ? o + 1 : o - 1,
            i = r[0].descriptor.index,
            s = r[r.length - 1].descriptor.index;
          return l < i || l > (n ? s : s + 1) ? null : l;
        })({
          isMovingForward: t,
          isInHomeList: n,
          location: c.destination,
          insideDestination: l,
        });
        return null == e
          ? null
          : Ht({
              draggable: r,
              insideDestination: l,
              destination: o,
              viewport: s,
              last: i.displaced,
              displacedBy: i.displacedBy,
              index: e,
            });
      }
      const d = ((e) => {
        let {
          isMovingForward: t,
          destination: n,
          draggables: r,
          combine: a,
          afterCritical: o,
        } = e;
        if (!n.isCombineEnabled) return null;
        const l = a.draggableId,
          i = r[l].descriptor.index;
        return Vt(l, o) ? (t ? i : i - 1) : t ? i + 1 : i;
      })({
        isMovingForward: t,
        destination: o,
        displaced: i.displaced,
        draggables: a,
        combine: c.combine,
        afterCritical: u,
      });
      return null == d
        ? null
        : Ht({
            draggable: r,
            insideDestination: l,
            destination: o,
            viewport: s,
            last: i.displaced,
            displacedBy: i.displacedBy,
            index: d,
          });
    },
    qt = (e) => {
      let { afterCritical: t, impact: n, draggables: r } = e;
      const a = Pt(n);
      a || Ye();
      const o = a.draggableId,
        l = r[o].page.borderBox.center,
        i = ((e) => {
          let {
            displaced: t,
            afterCritical: n,
            combineWith: r,
            displacedBy: a,
          } = e;
          const o = Boolean(t.visible[r] || t.invisible[r]);
          return Vt(r, n) ? (o ? st : ft(a.point)) : o ? a.point : st;
        })({
          displaced: n.displaced,
          afterCritical: t,
          combineWith: o,
          displacedBy: n.displacedBy,
        });
      return ut(l, i);
    };
  const Qt = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2,
    Yt = (e, t, n) =>
      t[e.crossAxisStart] +
      n.margin[e.crossAxisStart] +
      n.borderBox[e.crossAxisSize] / 2,
    Kt = (e) => {
      let { axis: t, moveRelativeTo: n, isMoving: r } = e;
      return pt(t.line, n.marginBox[t.end] + Qt(t, r), Yt(t, n.marginBox, r));
    },
    Xt = (e) => {
      let { axis: t, moveRelativeTo: n, isMoving: r } = e;
      return pt(
        t.line,
        n.marginBox[t.start] -
          ((e, t) => t.margin[e.end] + t.borderBox[e.size] / 2)(t, r),
        Yt(t, n.marginBox, r)
      );
    };
  var Jt = (e) => {
      let {
        impact: t,
        draggable: n,
        draggables: r,
        droppable: a,
        afterCritical: o,
      } = e;
      const l = Dt(a.descriptor.id, r),
        i = n.page,
        s = a.axis;
      if (!l.length)
        return ((e) => {
          let { axis: t, moveInto: n, isMoving: r } = e;
          return pt(
            t.line,
            n.contentBox[t.start] + Qt(t, r),
            Yt(t, n.contentBox, r)
          );
        })({ axis: s, moveInto: a.page, isMoving: i });
      const { displaced: u, displacedBy: c } = t,
        d = u.all[0];
      if (d) {
        const e = r[d];
        if (Vt(d, o))
          return Xt({ axis: s, moveRelativeTo: e.page, isMoving: i });
        const t = je(e.page, c.point);
        return Xt({ axis: s, moveRelativeTo: t, isMoving: i });
      }
      const f = l[l.length - 1];
      if (f.descriptor.id === n.descriptor.id) return i.borderBox.center;
      if (Vt(f.descriptor.id, o)) {
        const e = je(f.page, ft(o.displacedBy.point));
        return Kt({ axis: s, moveRelativeTo: e, isMoving: i });
      }
      return Kt({ axis: s, moveRelativeTo: f.page, isMoving: i });
    },
    Zt = (e, t) => {
      const n = e.frame;
      return n ? ut(t, n.scroll.diff.displacement) : t;
    };
  var en = (e) => {
      const t = ((e) => {
          let {
            impact: t,
            draggable: n,
            droppable: r,
            draggables: a,
            afterCritical: o,
          } = e;
          const l = n.page.borderBox.center,
            i = t.at;
          return r && i
            ? "REORDER" === i.type
              ? Jt({
                  impact: t,
                  draggable: n,
                  draggables: a,
                  droppable: r,
                  afterCritical: o,
                })
              : qt({ impact: t, draggables: a, afterCritical: o })
            : l;
        })(e),
        n = e.droppable;
      return n ? Zt(n, t) : t;
    },
    tn = (e, t) => {
      const n = ct(t, e.scroll.initial),
        r = ft(n);
      return {
        frame: _e({
          top: t.y,
          bottom: t.y + e.frame.height,
          left: t.x,
          right: t.x + e.frame.width,
        }),
        scroll: {
          initial: e.scroll.initial,
          max: e.scroll.max,
          current: t,
          diff: { value: n, displacement: r },
        },
      };
    };
  function nn(e, t) {
    return e.map((e) => t[e]);
  }
  var rn = (e) => {
      let { pageBorderBoxCenter: t, draggable: n, viewport: r } = e;
      const a = ((e, t) => ut(e.scroll.diff.displacement, t))(r, t),
        o = ct(a, n.page.borderBox.center);
      return ut(n.client.borderBox.center, o);
    },
    an = (e) => {
      let {
        draggable: t,
        destination: n,
        newPageBorderBoxCenter: r,
        viewport: a,
        withDroppableDisplacement: o,
        onlyOnMainAxis: l = !1,
      } = e;
      const i = ct(r, t.page.borderBox.center),
        s = {
          target: bt(t.page.borderBox, i),
          destination: n,
          withDroppableDisplacement: o,
          viewport: a,
        };
      return l
        ? ((e) => {
            return zt(
              w(
                w({}, e),
                {},
                {
                  isVisibleThroughFrameFn:
                    ((t = e.destination.axis),
                    (e) => {
                      const n = At(e.top, e.bottom),
                        r = At(e.left, e.right);
                      return (e) =>
                        t === jt
                          ? n(e.top) && n(e.bottom)
                          : r(e.left) && r(e.right);
                    }),
                }
              )
            );
            var t;
          })(s)
        : Ut(s);
    },
    on = (e) => {
      let {
        isMovingForward: t,
        draggable: n,
        destination: r,
        draggables: a,
        previousImpact: o,
        viewport: l,
        previousPageBorderBoxCenter: i,
        previousClientSelection: s,
        afterCritical: u,
      } = e;
      if (!r.isEnabled) return null;
      const c = Dt(r.descriptor.id, a),
        d = Rt(n, r),
        f =
          ((e) => {
            let {
              isMovingForward: t,
              draggable: n,
              destination: r,
              insideDestination: a,
              previousImpact: o,
            } = e;
            if (!r.isCombineEnabled) return null;
            if (!Nt(o)) return null;
            function l(e) {
              const t = {
                type: "COMBINE",
                combine: { draggableId: e, droppableId: r.descriptor.id },
              };
              return w(w({}, o), {}, { at: t });
            }
            const i = o.displaced.all,
              s = i.length ? i[0] : null;
            if (t) return s ? l(s) : null;
            const u = Ot(n, a);
            if (!s) return u.length ? l(u[u.length - 1].descriptor.id) : null;
            const c = u.findIndex((e) => e.descriptor.id === s);
            -1 === c && Ye();
            const d = c - 1;
            return d < 0 ? null : l(u[d].descriptor.id);
          })({
            isMovingForward: t,
            draggable: n,
            destination: r,
            insideDestination: c,
            previousImpact: o,
          }) ||
          $t({
            isMovingForward: t,
            isInHomeList: d,
            draggable: n,
            draggables: a,
            destination: r,
            insideDestination: c,
            previousImpact: o,
            viewport: l,
            afterCritical: u,
          });
      if (!f) return null;
      const p = en({
        impact: f,
        draggable: n,
        droppable: r,
        draggables: a,
        afterCritical: u,
      });
      if (
        an({
          draggable: n,
          destination: r,
          newPageBorderBoxCenter: p,
          viewport: l.frame,
          withDroppableDisplacement: !1,
          onlyOnMainAxis: !0,
        })
      ) {
        return {
          clientSelection: rn({
            pageBorderBoxCenter: p,
            draggable: n,
            viewport: l,
          }),
          impact: f,
          scrollJumpRequest: null,
        };
      }
      const g = ct(p, i),
        m = ((e) => {
          let {
            impact: t,
            viewport: n,
            destination: r,
            draggables: a,
            maxScrollChange: o,
          } = e;
          const l = tn(n, ut(n.scroll.current, o)),
            i = r.frame ? xt(r, ut(r.frame.scroll.current, o)) : r,
            s = t.displaced,
            u = Gt({
              afterDragging: nn(s.all, a),
              destination: r,
              displacedBy: t.displacedBy,
              viewport: l.frame,
              last: s,
              forceShouldAnimate: !1,
            }),
            c = Gt({
              afterDragging: nn(s.all, a),
              destination: i,
              displacedBy: t.displacedBy,
              viewport: n.frame,
              last: s,
              forceShouldAnimate: !1,
            }),
            d = {},
            f = {},
            p = [s, u, c];
          return (
            s.all.forEach((e) => {
              const t = (function (e, t) {
                for (let n = 0; n < t.length; n++) {
                  const r = t[n].visible[e];
                  if (r) return r;
                }
                return null;
              })(e, p);
              t ? (f[e] = t) : (d[e] = !0);
            }),
            w(
              w({}, t),
              {},
              { displaced: { all: s.all, invisible: d, visible: f } }
            )
          );
        })({
          impact: f,
          viewport: l,
          destination: r,
          draggables: a,
          maxScrollChange: g,
        });
      return { clientSelection: s, impact: m, scrollJumpRequest: g };
    };
  const ln = (e) => {
    const t = e.subject.active;
    return t || Ye(), t;
  };
  const sn = (e, t) => {
      const n = e.page.borderBox.center;
      return Vt(e.descriptor.id, t) ? ct(n, t.displacedBy.point) : n;
    },
    un = (e, t) => {
      const n = e.page.borderBox;
      return Vt(e.descriptor.id, t) ? bt(n, ft(t.displacedBy.point)) : n;
    };
  var cn = St(function (e, t) {
    const n = t[e.line];
    return { value: n, point: pt(e.line, n) };
  });
  const dn = (e, t) =>
      w(w({}, e), {}, { scroll: w(w({}, e.scroll), {}, { max: t }) }),
    fn = (e, t, n) => {
      const r = e.frame;
      Rt(t, e) && Ye(), e.subject.withPlaceholder && Ye();
      const a = cn(e.axis, t.displaceBy).point,
        o = ((e, t, n) => {
          const r = e.axis;
          if ("virtual" === e.descriptor.mode) return pt(r.line, t[r.line]);
          const a = e.subject.page.contentBox[r.size],
            o =
              Dt(e.descriptor.id, n).reduce(
                (e, t) => e + t.client.marginBox[r.size],
                0
              ) +
              t[r.line] -
              a;
          return o <= 0 ? null : pt(r.line, o);
        })(e, a, n),
        l = {
          placeholderSize: a,
          increasedBy: o,
          oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null,
        };
      if (!r) {
        const t = wt({
          page: e.subject.page,
          withPlaceholder: l,
          axis: e.axis,
          frame: e.frame,
        });
        return w(w({}, e), {}, { subject: t });
      }
      const i = o ? ut(r.scroll.max, o) : r.scroll.max,
        s = dn(r, i),
        u = wt({
          page: e.subject.page,
          withPlaceholder: l,
          axis: e.axis,
          frame: s,
        });
      return w(w({}, e), {}, { subject: u, frame: s });
    };
  var pn = (e) => {
      let {
        isMovingForward: t,
        previousPageBorderBoxCenter: n,
        draggable: r,
        isOver: a,
        draggables: o,
        droppables: l,
        viewport: i,
        afterCritical: s,
      } = e;
      const u = ((e) => {
        let {
          isMovingForward: t,
          pageBorderBoxCenter: n,
          source: r,
          droppables: a,
          viewport: o,
        } = e;
        const l = r.subject.active;
        if (!l) return null;
        const i = r.axis,
          s = At(l[i.start], l[i.end]),
          u = Ct(a)
            .filter((e) => e !== r)
            .filter((e) => e.isEnabled)
            .filter((e) => Boolean(e.subject.active))
            .filter((e) => Bt(o.frame)(ln(e)))
            .filter((e) => {
              const n = ln(e);
              return t
                ? l[i.crossAxisEnd] < n[i.crossAxisEnd]
                : n[i.crossAxisStart] < l[i.crossAxisStart];
            })
            .filter((e) => {
              const t = ln(e),
                n = At(t[i.start], t[i.end]);
              return (
                s(t[i.start]) || s(t[i.end]) || n(l[i.start]) || n(l[i.end])
              );
            })
            .sort((e, n) => {
              const r = ln(e)[i.crossAxisStart],
                a = ln(n)[i.crossAxisStart];
              return t ? r - a : a - r;
            })
            .filter(
              (e, t, n) =>
                ln(e)[i.crossAxisStart] === ln(n[0])[i.crossAxisStart]
            );
        if (!u.length) return null;
        if (1 === u.length) return u[0];
        const c = u.filter((e) => At(ln(e)[i.start], ln(e)[i.end])(n[i.line]));
        return 1 === c.length
          ? c[0]
          : c.length > 1
          ? c.sort((e, t) => ln(e)[i.start] - ln(t)[i.start])[0]
          : u.sort((e, t) => {
              const r = mt(n, vt(ln(e))),
                a = mt(n, vt(ln(t)));
              return r !== a ? r - a : ln(e)[i.start] - ln(t)[i.start];
            })[0];
      })({
        isMovingForward: t,
        pageBorderBoxCenter: n,
        source: a,
        droppables: l,
        viewport: i,
      });
      if (!u) return null;
      const c = Dt(u.descriptor.id, o),
        d = ((e) => {
          let {
            pageBorderBoxCenter: t,
            viewport: n,
            destination: r,
            insideDestination: a,
            afterCritical: o,
          } = e;
          const l = a
            .filter((e) =>
              Ut({
                target: un(e, o),
                destination: r,
                viewport: n.frame,
                withDroppableDisplacement: !0,
              })
            )
            .sort((e, n) => {
              const a = gt(t, Zt(r, sn(e, o))),
                l = gt(t, Zt(r, sn(n, o)));
              return a < l
                ? -1
                : l < a
                ? 1
                : e.descriptor.index - n.descriptor.index;
            });
          return l[0] || null;
        })({
          pageBorderBoxCenter: n,
          viewport: i,
          destination: u,
          insideDestination: c,
          afterCritical: s,
        }),
        f = ((e) => {
          let {
            previousPageBorderBoxCenter: t,
            moveRelativeTo: n,
            insideDestination: r,
            draggable: a,
            draggables: o,
            destination: l,
            viewport: i,
            afterCritical: s,
          } = e;
          if (!n) {
            if (r.length) return null;
            const e = {
                displaced: Tt,
                displacedBy: _t,
                at: {
                  type: "REORDER",
                  destination: { droppableId: l.descriptor.id, index: 0 },
                },
              },
              t = en({
                impact: e,
                draggable: a,
                droppable: l,
                draggables: o,
                afterCritical: s,
              }),
              n = Rt(a, l) ? l : fn(l, a, o);
            return an({
              draggable: a,
              destination: n,
              newPageBorderBoxCenter: t,
              viewport: i.frame,
              withDroppableDisplacement: !1,
              onlyOnMainAxis: !0,
            })
              ? e
              : null;
          }
          const u = Boolean(
              t[l.axis.line] <= n.page.borderBox.center[l.axis.line]
            ),
            c = (() => {
              const e = n.descriptor.index;
              return n.descriptor.id === a.descriptor.id || u ? e : e + 1;
            })(),
            d = cn(l.axis, a.displaceBy);
          return Ht({
            draggable: a,
            insideDestination: r,
            destination: l,
            viewport: i,
            displacedBy: d,
            last: Tt,
            index: c,
          });
        })({
          previousPageBorderBoxCenter: n,
          destination: u,
          draggable: r,
          draggables: o,
          moveRelativeTo: d,
          insideDestination: c,
          viewport: i,
          afterCritical: s,
        });
      if (!f) return null;
      const p = en({
        impact: f,
        draggable: r,
        droppable: u,
        draggables: o,
        afterCritical: s,
      });
      return {
        clientSelection: rn({
          pageBorderBoxCenter: p,
          draggable: r,
          viewport: i,
        }),
        impact: f,
        scrollJumpRequest: null,
      };
    },
    gn = (e) => {
      const t = e.at;
      return t
        ? "REORDER" === t.type
          ? t.destination.droppableId
          : t.combine.droppableId
        : null;
    };
  var mn = (e) => {
    let { state: t, type: n } = e;
    const r = ((e, t) => {
        const n = gn(e);
        return n ? t[n] : null;
      })(t.impact, t.dimensions.droppables),
      a = Boolean(r),
      o = t.dimensions.droppables[t.critical.droppable.id],
      l = r || o,
      i = l.axis.direction,
      s =
        ("vertical" === i && ("MOVE_UP" === n || "MOVE_DOWN" === n)) ||
        ("horizontal" === i && ("MOVE_LEFT" === n || "MOVE_RIGHT" === n));
    if (s && !a) return null;
    const u = "MOVE_DOWN" === n || "MOVE_RIGHT" === n,
      c = t.dimensions.draggables[t.critical.draggable.id],
      d = t.current.page.borderBoxCenter,
      { draggables: f, droppables: p } = t.dimensions;
    return s
      ? on({
          isMovingForward: u,
          previousPageBorderBoxCenter: d,
          draggable: c,
          destination: l,
          draggables: f,
          viewport: t.viewport,
          previousClientSelection: t.current.client.selection,
          previousImpact: t.impact,
          afterCritical: t.afterCritical,
        })
      : pn({
          isMovingForward: u,
          previousPageBorderBoxCenter: d,
          draggable: c,
          isOver: l,
          draggables: f,
          droppables: p,
          viewport: t.viewport,
          afterCritical: t.afterCritical,
        });
  };
  function hn(e) {
    return "DRAGGING" === e.phase || "COLLECTING" === e.phase;
  }
  function bn(e) {
    const t = At(e.top, e.bottom),
      n = At(e.left, e.right);
    return function (e) {
      return t(e.y) && n(e.x);
    };
  }
  function vn(e) {
    let { pageBorderBox: t, draggable: n, droppables: r } = e;
    const a = Ct(r).filter((e) => {
      if (!e.isEnabled) return !1;
      const n = e.subject.active;
      if (!n) return !1;
      if (
        ((a = n),
        !(
          (r = t).left < a.right &&
          r.right > a.left &&
          r.top < a.bottom &&
          r.bottom > a.top
        ))
      )
        return !1;
      var r, a;
      if (bn(n)(t.center)) return !0;
      const o = e.axis,
        l = n.center[o.crossAxisLine],
        i = t[o.crossAxisStart],
        s = t[o.crossAxisEnd],
        u = At(n[o.crossAxisStart], n[o.crossAxisEnd]),
        c = u(i),
        d = u(s);
      return (!c && !d) || (c ? i < l : s > l);
    });
    return a.length
      ? 1 === a.length
        ? a[0].descriptor.id
        : (function (e) {
            let { pageBorderBox: t, draggable: n, candidates: r } = e;
            const a = n.page.borderBox.center,
              o = r
                .map((e) => {
                  const n = e.axis,
                    r = pt(
                      e.axis.line,
                      t.center[n.line],
                      e.page.borderBox.center[n.crossAxisLine]
                    );
                  return { id: e.descriptor.id, distance: gt(a, r) };
                })
                .sort((e, t) => t.distance - e.distance);
            return o[0] ? o[0].id : null;
          })({ pageBorderBox: t, draggable: n, candidates: a })
      : null;
  }
  const yn = (e, t) => _e(bt(e, t));
  function wn(e) {
    let { displaced: t, id: n } = e;
    return Boolean(t.visible[n] || t.invisible[n]);
  }
  var xn = (e) => {
      let {
        pageOffset: t,
        draggable: n,
        draggables: r,
        droppables: a,
        previousImpact: o,
        viewport: l,
        afterCritical: i,
      } = e;
      const s = yn(n.page.borderBox, t),
        u = vn({ pageBorderBox: s, draggable: n, droppables: a });
      if (!u) return Lt;
      const c = a[u],
        d = Dt(c.descriptor.id, r),
        f = ((e, t) => {
          const n = e.frame;
          return n ? yn(t, n.scroll.diff.value) : t;
        })(c, s);
      return (
        ((e) => {
          let {
            draggable: t,
            pageBorderBoxWithDroppableScroll: n,
            previousImpact: r,
            destination: a,
            insideDestination: o,
            afterCritical: l,
          } = e;
          if (!a.isCombineEnabled) return null;
          const i = a.axis,
            s = cn(a.axis, t.displaceBy),
            u = s.value,
            c = n[i.start],
            d = n[i.end],
            f = Ot(t, o).find((e) => {
              const t = e.descriptor.id,
                n = e.page.borderBox,
                a = n[i.size] / 4,
                o = Vt(t, l),
                s = wn({ displaced: r.displaced, id: t });
              return o
                ? s
                  ? d > n[i.start] + a && d < n[i.end] - a
                  : c > n[i.start] - u + a && c < n[i.end] - u - a
                : s
                ? d > n[i.start] + u + a && d < n[i.end] + u - a
                : c > n[i.start] + a && c < n[i.end] - a;
            });
          return f
            ? {
                displacedBy: s,
                displaced: r.displaced,
                at: {
                  type: "COMBINE",
                  combine: {
                    draggableId: f.descriptor.id,
                    droppableId: a.descriptor.id,
                  },
                },
              }
            : null;
        })({
          pageBorderBoxWithDroppableScroll: f,
          draggable: n,
          previousImpact: o,
          destination: c,
          insideDestination: d,
          afterCritical: i,
        }) ||
        ((e) => {
          let {
            pageBorderBoxWithDroppableScroll: t,
            draggable: n,
            destination: r,
            insideDestination: a,
            last: o,
            viewport: l,
            afterCritical: i,
          } = e;
          const s = r.axis,
            u = cn(r.axis, n.displaceBy),
            c = u.value,
            d = t[s.start],
            f = t[s.end],
            p = (function (e) {
              let { draggable: t, closest: n, inHomeList: r } = e;
              return n
                ? r && n.descriptor.index > t.descriptor.index
                  ? n.descriptor.index - 1
                  : n.descriptor.index
                : null;
            })({
              draggable: n,
              closest:
                Ot(n, a).find((e) => {
                  const t = e.descriptor.id,
                    n = e.page.borderBox.center[s.line],
                    r = Vt(t, i),
                    a = wn({ displaced: o, id: t });
                  return r ? (a ? f <= n : d < n - c) : a ? f <= n + c : d < n;
                }) || null,
              inHomeList: Rt(n, r),
            });
          return Ht({
            draggable: n,
            insideDestination: a,
            destination: r,
            viewport: l,
            last: o,
            displacedBy: u,
            index: p,
          });
        })({
          pageBorderBoxWithDroppableScroll: f,
          draggable: n,
          destination: c,
          insideDestination: d,
          last: o.displaced,
          viewport: l,
          afterCritical: i,
        })
      );
    },
    Sn = (e, t) => w(w({}, e), {}, { [t.descriptor.id]: t });
  const En = (e) => {
    let { previousImpact: t, impact: n, droppables: r } = e;
    const a = gn(t),
      o = gn(n);
    if (!a) return r;
    if (a === o) return r;
    const l = r[a];
    if (!l.subject.withPlaceholder) return r;
    const i = ((e) => {
      const t = e.subject.withPlaceholder;
      t || Ye();
      const n = e.frame;
      if (!n) {
        const t = wt({
          page: e.subject.page,
          axis: e.axis,
          frame: null,
          withPlaceholder: null,
        });
        return w(w({}, e), {}, { subject: t });
      }
      const r = t.oldFrameMaxScroll;
      r || Ye();
      const a = dn(n, r),
        o = wt({
          page: e.subject.page,
          axis: e.axis,
          frame: a,
          withPlaceholder: null,
        });
      return w(w({}, e), {}, { subject: o, frame: a });
    })(l);
    return Sn(r, i);
  };
  var kn = (e) => {
    let {
      state: t,
      clientSelection: n,
      dimensions: r,
      viewport: a,
      impact: o,
      scrollJumpRequest: l,
    } = e;
    const i = a || t.viewport,
      s = r || t.dimensions,
      u = n || t.current.client.selection,
      c = ct(u, t.initial.client.selection),
      d = {
        offset: c,
        selection: u,
        borderBoxCenter: ut(t.initial.client.borderBoxCenter, c),
      },
      f = {
        selection: ut(d.selection, i.scroll.current),
        borderBoxCenter: ut(d.borderBoxCenter, i.scroll.current),
        offset: ut(d.offset, i.scroll.diff.value),
      },
      p = { client: d, page: f };
    if ("COLLECTING" === t.phase)
      return w(w({}, t), {}, { dimensions: s, viewport: i, current: p });
    const g = s.draggables[t.critical.draggable.id],
      m =
        o ||
        xn({
          pageOffset: f.offset,
          draggable: g,
          draggables: s.draggables,
          droppables: s.droppables,
          previousImpact: t.impact,
          viewport: i,
          afterCritical: t.afterCritical,
        }),
      h = ((e) => {
        let {
          draggable: t,
          draggables: n,
          droppables: r,
          previousImpact: a,
          impact: o,
        } = e;
        const l = En({ previousImpact: a, impact: o, droppables: r }),
          i = gn(o);
        if (!i) return l;
        const s = r[i];
        if (Rt(t, s)) return l;
        if (s.subject.withPlaceholder) return l;
        const u = fn(s, t, n);
        return Sn(l, u);
      })({
        draggable: g,
        impact: m,
        previousImpact: t.impact,
        draggables: s.draggables,
        droppables: s.droppables,
      });
    return w(
      w({}, t),
      {},
      {
        current: p,
        dimensions: { draggables: s.draggables, droppables: h },
        impact: m,
        viewport: i,
        scrollJumpRequest: l || null,
        forceShouldAnimate: !l && null,
      }
    );
  };
  var Cn = (e) => {
      let {
        impact: t,
        viewport: n,
        draggables: r,
        destination: a,
        forceShouldAnimate: o,
      } = e;
      const l = t.displaced,
        i = (function (e, t) {
          return e.map((e) => t[e]);
        })(l.all, r),
        s = Gt({
          afterDragging: i,
          destination: a,
          displacedBy: t.displacedBy,
          viewport: n.frame,
          forceShouldAnimate: o,
          last: l,
        });
      return w(w({}, t), {}, { displaced: s });
    },
    In = (e) => {
      let {
        impact: t,
        draggable: n,
        droppable: r,
        draggables: a,
        viewport: o,
        afterCritical: l,
      } = e;
      const i = en({
        impact: t,
        draggable: n,
        draggables: a,
        droppable: r,
        afterCritical: l,
      });
      return rn({ pageBorderBoxCenter: i, draggable: n, viewport: o });
    },
    Dn = (e) => {
      let { state: t, dimensions: n, viewport: r } = e;
      "SNAP" !== t.movementMode && Ye();
      const a = t.impact,
        o = r || t.viewport,
        l = n || t.dimensions,
        { draggables: i, droppables: s } = l,
        u = i[t.critical.draggable.id],
        c = gn(a);
      c || Ye();
      const d = s[c],
        f = Cn({ impact: a, viewport: o, destination: d, draggables: i }),
        p = In({
          impact: f,
          draggable: u,
          droppable: d,
          draggables: i,
          viewport: o,
          afterCritical: t.afterCritical,
        });
      return kn({
        impact: f,
        clientSelection: p,
        state: t,
        dimensions: l,
        viewport: o,
      });
    },
    Nn = (e) => {
      let { draggable: t, home: n, draggables: r, viewport: a } = e;
      const o = cn(n.axis, t.displaceBy),
        l = Dt(n.descriptor.id, r),
        i = l.indexOf(t);
      -1 === i && Ye();
      const s = l.slice(i + 1),
        u = s.reduce((e, t) => ((e[t.descriptor.id] = !0), e), {}),
        c = {
          inVirtualList: "virtual" === n.descriptor.mode,
          displacedBy: o,
          effected: u,
        };
      var d;
      return {
        impact: {
          displaced: Gt({
            afterDragging: s,
            destination: n,
            displacedBy: o,
            last: null,
            viewport: a.frame,
            forceShouldAnimate: !1,
          }),
          displacedBy: o,
          at: {
            type: "REORDER",
            destination:
              ((d = t.descriptor),
              { index: d.index, droppableId: d.droppableId }),
          },
        },
        afterCritical: c,
      };
    };
  const Pn = (e) => {
      0;
    },
    On = (e) => {
      0;
    };
  var Rn = (e) => {
    let { additions: t, updatedDroppables: n, viewport: r } = e;
    const a = r.scroll.diff.value;
    return t.map((e) => {
      const t = e.descriptor.droppableId,
        o = ((e) => {
          const t = e.frame;
          return t || Ye(), t;
        })(n[t]),
        l = o.scroll.diff.value,
        i = ((e) => {
          let { draggable: t, offset: n, initialWindowScroll: r } = e;
          const a = je(t.client, n),
            o = Fe(a, r);
          return w(
            w({}, t),
            {},
            {
              placeholder: w(w({}, t.placeholder), {}, { client: a }),
              client: a,
              page: o,
            }
          );
        })({
          draggable: e,
          offset: ut(a, l),
          initialWindowScroll: r.scroll.initial,
        });
      return i;
    });
  };
  const _n = (e) => "SNAP" === e.movementMode,
    Tn = (e, t, n) => {
      const r = ((e, t) => ({
        draggables: e.draggables,
        droppables: Sn(e.droppables, t),
      }))(e.dimensions, t);
      return !_n(e) || n
        ? kn({ state: e, dimensions: r })
        : Dn({ state: e, dimensions: r });
    };
  function Ln(e) {
    return e.isDragging && "SNAP" === e.movementMode
      ? w(w({}, e), {}, { scrollJumpRequest: null })
      : e;
  }
  const An = { phase: "IDLE", completed: null, shouldFlush: !1 };
  var Bn = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : An,
      t = arguments.length > 1 ? arguments[1] : void 0;
    if ("FLUSH" === t.type) return w(w({}, An), {}, { shouldFlush: !0 });
    if ("INITIAL_PUBLISH" === t.type) {
      "IDLE" !== e.phase && Ye();
      const {
          critical: n,
          clientSelection: r,
          viewport: a,
          dimensions: o,
          movementMode: l,
        } = t.payload,
        i = o.draggables[n.draggable.id],
        s = o.droppables[n.droppable.id],
        u = {
          selection: r,
          borderBoxCenter: i.client.borderBox.center,
          offset: st,
        },
        c = {
          client: u,
          page: {
            selection: ut(u.selection, a.scroll.initial),
            borderBoxCenter: ut(u.selection, a.scroll.initial),
            offset: ut(u.selection, a.scroll.diff.value),
          },
        },
        d = Ct(o.droppables).every((e) => !e.isFixedOnPage),
        { impact: f, afterCritical: p } = Nn({
          draggable: i,
          home: s,
          draggables: o.draggables,
          viewport: a,
        });
      return {
        phase: "DRAGGING",
        isDragging: !0,
        critical: n,
        movementMode: l,
        dimensions: o,
        initial: c,
        current: c,
        isWindowScrollAllowed: d,
        impact: f,
        afterCritical: p,
        onLiftImpact: f,
        viewport: a,
        scrollJumpRequest: null,
        forceShouldAnimate: null,
      };
    }
    if ("COLLECTION_STARTING" === t.type) {
      if ("COLLECTING" === e.phase || "DROP_PENDING" === e.phase) return e;
      "DRAGGING" !== e.phase && Ye();
      return w(w({}, e), {}, { phase: "COLLECTING" });
    }
    if ("PUBLISH_WHILE_DRAGGING" === t.type)
      return (
        "COLLECTING" !== e.phase && "DROP_PENDING" !== e.phase && Ye(),
        ((e) => {
          let { state: t, published: n } = e;
          Pn();
          const r = n.modified.map((e) => {
              const n = t.dimensions.droppables[e.droppableId];
              return xt(n, e.scroll);
            }),
            a = w(w({}, t.dimensions.droppables), Et(r)),
            o = kt(
              Rn({
                additions: n.additions,
                updatedDroppables: a,
                viewport: t.viewport,
              })
            ),
            l = w(w({}, t.dimensions.draggables), o);
          n.removals.forEach((e) => {
            delete l[e];
          });
          const i = { droppables: a, draggables: l },
            s = gn(t.impact),
            u = s ? i.droppables[s] : null,
            c = i.draggables[t.critical.draggable.id],
            d = i.droppables[t.critical.droppable.id],
            { impact: f, afterCritical: p } = Nn({
              draggable: c,
              home: d,
              draggables: l,
              viewport: t.viewport,
            }),
            g = u && u.isCombineEnabled ? t.impact : f,
            m = xn({
              pageOffset: t.current.page.offset,
              draggable: i.draggables[t.critical.draggable.id],
              draggables: i.draggables,
              droppables: i.droppables,
              previousImpact: g,
              viewport: t.viewport,
              afterCritical: p,
            });
          On();
          const h = w(
            w({}, t),
            {},
            {
              phase: "DRAGGING",
              impact: m,
              onLiftImpact: f,
              dimensions: i,
              afterCritical: p,
              forceShouldAnimate: !1,
            }
          );
          return "COLLECTING" === t.phase
            ? h
            : w(
                w({}, h),
                {},
                { phase: "DROP_PENDING", reason: t.reason, isWaiting: !1 }
              );
        })({ state: e, published: t.payload })
      );
    if ("MOVE" === t.type) {
      if ("DROP_PENDING" === e.phase) return e;
      hn(e) || Ye();
      const { client: n } = t.payload;
      return dt(n, e.current.client.selection)
        ? e
        : kn({ state: e, clientSelection: n, impact: _n(e) ? e.impact : null });
    }
    if ("UPDATE_DROPPABLE_SCROLL" === t.type) {
      if ("DROP_PENDING" === e.phase) return Ln(e);
      if ("COLLECTING" === e.phase) return Ln(e);
      hn(e) || Ye();
      const { id: n, newScroll: r } = t.payload,
        a = e.dimensions.droppables[n];
      if (!a) return e;
      const o = xt(a, r);
      return Tn(e, o, !1);
    }
    if ("UPDATE_DROPPABLE_IS_ENABLED" === t.type) {
      if ("DROP_PENDING" === e.phase) return e;
      hn(e) || Ye();
      const { id: n, isEnabled: r } = t.payload,
        a = e.dimensions.droppables[n];
      a || Ye(), a.isEnabled === r && Ye();
      const o = w(w({}, a), {}, { isEnabled: r });
      return Tn(e, o, !0);
    }
    if ("UPDATE_DROPPABLE_IS_COMBINE_ENABLED" === t.type) {
      if ("DROP_PENDING" === e.phase) return e;
      hn(e) || Ye();
      const { id: n, isCombineEnabled: r } = t.payload,
        a = e.dimensions.droppables[n];
      a || Ye(), a.isCombineEnabled === r && Ye();
      const o = w(w({}, a), {}, { isCombineEnabled: r });
      return Tn(e, o, !0);
    }
    if ("MOVE_BY_WINDOW_SCROLL" === t.type) {
      if ("DROP_PENDING" === e.phase || "DROP_ANIMATING" === e.phase) return e;
      hn(e) || Ye(), e.isWindowScrollAllowed || Ye();
      const n = t.payload.newScroll;
      if (dt(e.viewport.scroll.current, n)) return Ln(e);
      const r = tn(e.viewport, n);
      return _n(e)
        ? Dn({ state: e, viewport: r })
        : kn({ state: e, viewport: r });
    }
    if ("UPDATE_VIEWPORT_MAX_SCROLL" === t.type) {
      if (!hn(e)) return e;
      const n = t.payload.maxScroll;
      if (dt(n, e.viewport.scroll.max)) return e;
      const r = w(
        w({}, e.viewport),
        {},
        { scroll: w(w({}, e.viewport.scroll), {}, { max: n }) }
      );
      return w(w({}, e), {}, { viewport: r });
    }
    if (
      "MOVE_UP" === t.type ||
      "MOVE_DOWN" === t.type ||
      "MOVE_LEFT" === t.type ||
      "MOVE_RIGHT" === t.type
    ) {
      if ("COLLECTING" === e.phase || "DROP_PENDING" === e.phase) return e;
      "DRAGGING" !== e.phase && Ye();
      const n = mn({ state: e, type: t.type });
      return n
        ? kn({
            state: e,
            impact: n.impact,
            clientSelection: n.clientSelection,
            scrollJumpRequest: n.scrollJumpRequest,
          })
        : e;
    }
    if ("DROP_PENDING" === t.type) {
      const n = t.payload.reason;
      "COLLECTING" !== e.phase && Ye();
      return w(
        w({}, e),
        {},
        { phase: "DROP_PENDING", isWaiting: !0, reason: n }
      );
    }
    if ("DROP_ANIMATE" === t.type) {
      const {
        completed: n,
        dropDuration: r,
        newHomeClientOffset: a,
      } = t.payload;
      "DRAGGING" !== e.phase && "DROP_PENDING" !== e.phase && Ye();
      return {
        phase: "DROP_ANIMATING",
        completed: n,
        dropDuration: r,
        newHomeClientOffset: a,
        dimensions: e.dimensions,
      };
    }
    if ("DROP_COMPLETE" === t.type) {
      const { completed: e } = t.payload;
      return { phase: "IDLE", completed: e, shouldFlush: !1 };
    }
    return e;
  };
  function Mn(e, t) {
    return e instanceof Object && "type" in e && e.type === t;
  }
  const jn = (e) => ({ type: "PUBLISH_WHILE_DRAGGING", payload: e }),
    Fn = () => ({ type: "COLLECTION_STARTING", payload: null }),
    zn = (e) => ({ type: "UPDATE_DROPPABLE_SCROLL", payload: e }),
    Un = (e) => ({ type: "UPDATE_DROPPABLE_IS_ENABLED", payload: e }),
    Gn = (e) => ({ type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED", payload: e }),
    Wn = (e) => ({ type: "MOVE", payload: e }),
    Hn = () => ({ type: "MOVE_UP", payload: null }),
    Vn = () => ({ type: "MOVE_DOWN", payload: null }),
    $n = () => ({ type: "MOVE_RIGHT", payload: null }),
    qn = () => ({ type: "MOVE_LEFT", payload: null }),
    Qn = (e) => ({ type: "DROP_COMPLETE", payload: e }),
    Yn = (e) => ({ type: "DROP", payload: e }),
    Kn = () => ({ type: "DROP_ANIMATION_FINISHED", payload: null });
  const Xn = "cubic-bezier(0.2, 0, 0, 1)",
    Jn = "cubic-bezier(.2,1,.1,1)",
    Zn = { drop: 0, combining: 0.7 },
    er = { drop: 0.75 },
    tr = { outOfTheWay: 0.2, minDropTime: 0.33, maxDropTime: 0.55 },
    nr = "".concat(tr.outOfTheWay, "s ").concat(Xn),
    rr = {
      fluid: "opacity ".concat(nr),
      snap: "transform ".concat(nr, ", opacity ").concat(nr),
      drop: (e) => {
        const t = "".concat(e, "s ").concat(Jn);
        return "transform ".concat(t, ", opacity ").concat(t);
      },
      outOfTheWay: "transform ".concat(nr),
      placeholder: "height "
        .concat(nr, ", width ")
        .concat(nr, ", margin ")
        .concat(nr),
    },
    ar = (e) =>
      dt(e, st) ? void 0 : "translate(".concat(e.x, "px, ").concat(e.y, "px)"),
    or = ar,
    lr = (e, t) => {
      const n = ar(e);
      if (n) return t ? "".concat(n, " scale(").concat(er.drop, ")") : n;
    },
    { minDropTime: ir, maxDropTime: sr } = tr,
    ur = sr - ir;
  const cr = (e) => {
    let { getState: t, dispatch: n } = e;
    return (e) => (r) => {
      if (!Mn(r, "DROP")) return void e(r);
      const a = t(),
        o = r.payload.reason;
      if ("COLLECTING" === a.phase)
        return void n(
          ((e) => ({ type: "DROP_PENDING", payload: e }))({ reason: o })
        );
      if ("IDLE" === a.phase) return;
      "DROP_PENDING" === a.phase && a.isWaiting && Ye(),
        "DRAGGING" !== a.phase && "DROP_PENDING" !== a.phase && Ye();
      const l = a.critical,
        i = a.dimensions,
        s = i.draggables[a.critical.draggable.id],
        { impact: u, didDropInsideDroppable: c } = ((e) => {
          let {
            draggables: t,
            reason: n,
            lastImpact: r,
            home: a,
            viewport: o,
            onLiftImpact: l,
          } = e;
          if (!r.at || "DROP" !== n)
            return {
              impact: Cn({
                draggables: t,
                impact: l,
                destination: a,
                viewport: o,
                forceShouldAnimate: !0,
              }),
              didDropInsideDroppable: !1,
            };
          return "REORDER" === r.at.type
            ? { impact: r, didDropInsideDroppable: !0 }
            : {
                impact: w(w({}, r), {}, { displaced: Tt }),
                didDropInsideDroppable: !0,
              };
        })({
          reason: o,
          lastImpact: a.impact,
          afterCritical: a.afterCritical,
          onLiftImpact: a.onLiftImpact,
          home: a.dimensions.droppables[a.critical.droppable.id],
          viewport: a.viewport,
          draggables: a.dimensions.draggables,
        }),
        d = c ? Nt(u) : null,
        f = c ? Pt(u) : null,
        p = { index: l.draggable.index, droppableId: l.droppable.id },
        g = {
          draggableId: s.descriptor.id,
          type: s.descriptor.type,
          source: p,
          reason: o,
          mode: a.movementMode,
          destination: d,
          combine: f,
        },
        m = ((e) => {
          let {
            impact: t,
            draggable: n,
            dimensions: r,
            viewport: a,
            afterCritical: o,
          } = e;
          const { draggables: l, droppables: i } = r,
            s = gn(t),
            u = s ? i[s] : null,
            c = i[n.descriptor.droppableId],
            d = In({
              impact: t,
              draggable: n,
              draggables: l,
              afterCritical: o,
              droppable: u || c,
              viewport: a,
            });
          return ct(d, n.client.borderBox.center);
        })({
          impact: u,
          draggable: s,
          dimensions: i,
          viewport: a.viewport,
          afterCritical: a.afterCritical,
        }),
        h = {
          critical: a.critical,
          afterCritical: a.afterCritical,
          result: g,
          impact: u,
        };
      if (!(!dt(a.current.client.offset, m) || Boolean(g.combine)))
        return void n(Qn({ completed: h }));
      const b = ((e) => {
        let { current: t, destination: n, reason: r } = e;
        const a = gt(t, n);
        if (a <= 0) return ir;
        if (a >= 1500) return sr;
        const o = ir + ur * (a / 1500);
        return Number(("CANCEL" === r ? 0.6 * o : o).toFixed(2));
      })({ current: a.current.client.offset, destination: m, reason: o });
      n(
        ((e) => ({ type: "DROP_ANIMATE", payload: e }))({
          newHomeClientOffset: m,
          dropDuration: b,
          completed: h,
        })
      );
    };
  };
  var dr = () => ({ x: window.pageXOffset, y: window.pageYOffset });
  function fr(e) {
    let { onWindowScroll: t } = e;
    const n = Ge(function () {
        t(dr());
      }),
      r = (function (e) {
        return {
          eventName: "scroll",
          options: { passive: !0, capture: !1 },
          fn: (t) => {
            (t.target !== window && t.target !== window.document) || e();
          },
        };
      })(n);
    let a = Ve;
    function o() {
      return a !== Ve;
    }
    return {
      start: function () {
        o() && Ye(), (a = $e(window, [r]));
      },
      stop: function () {
        o() || Ye(), n.cancel(), a(), (a = Ve);
      },
      isActive: o,
    };
  }
  const pr = (e) => {
    const t = fr({
      onWindowScroll: (t) => {
        e.dispatch({
          type: "MOVE_BY_WINDOW_SCROLL",
          payload: { newScroll: t },
        });
      },
    });
    return (e) => (n) => {
      !t.isActive() && Mn(n, "INITIAL_PUBLISH") && t.start(),
        t.isActive() &&
          ((e) =>
            Mn(e, "DROP_COMPLETE") || Mn(e, "DROP_ANIMATE") || Mn(e, "FLUSH"))(
            n
          ) &&
          t.stop(),
        e(n);
    };
  };
  var gr = () => {
    const e = [];
    return {
      add: (t) => {
        const n = setTimeout(() =>
            ((t) => {
              const n = e.findIndex((e) => e.timerId === t);
              -1 === n && Ye();
              const [r] = e.splice(n, 1);
              r.callback();
            })(n)
          ),
          r = { timerId: n, callback: t };
        e.push(r);
      },
      flush: () => {
        if (!e.length) return;
        const t = [...e];
        (e.length = 0),
          t.forEach((e) => {
            clearTimeout(e.timerId), e.callback();
          });
      },
    };
  };
  const mr = (e, t) => {
      Pn(), t(), On();
    },
    hr = (e, t) => ({
      draggableId: e.draggable.id,
      type: e.droppable.type,
      source: { droppableId: e.droppable.id, index: e.draggable.index },
      mode: t,
    });
  function br(e, t, n, r) {
    if (!e) return void n(r(t));
    const a = ((e) => {
      let t = !1,
        n = !1;
      const r = setTimeout(() => {
          n = !0;
        }),
        a = (a) => {
          t || n || ((t = !0), e(a), clearTimeout(r));
        };
      return (a.wasCalled = () => t), a;
    })(n);
    e(t, { announce: a }), a.wasCalled() || n(r(t));
  }
  var vr = (e, t) => {
    const n = ((e, t) => {
      const n = gr();
      let r = null;
      const a = (n) => {
        r || Ye(), (r = null), mr(0, () => br(e().onDragEnd, n, t, at));
      };
      return {
        beforeCapture: (t, n) => {
          r && Ye(),
            mr(0, () => {
              const r = e().onBeforeCapture;
              r && r({ draggableId: t, mode: n });
            });
        },
        beforeStart: (t, n) => {
          r && Ye(),
            mr(0, () => {
              const r = e().onBeforeDragStart;
              r && r(hr(t, n));
            });
        },
        start: (a, o) => {
          r && Ye();
          const l = hr(a, o);
          (r = {
            mode: o,
            lastCritical: a,
            lastLocation: l.source,
            lastCombine: null,
          }),
            n.add(() => {
              mr(0, () => br(e().onDragStart, l, t, nt));
            });
        },
        update: (a, o) => {
          const l = Nt(o),
            i = Pt(o);
          r || Ye();
          const s = !((e, t) => {
            if (e === t) return !0;
            const n =
                e.draggable.id === t.draggable.id &&
                e.draggable.droppableId === t.draggable.droppableId &&
                e.draggable.type === t.draggable.type &&
                e.draggable.index === t.draggable.index,
              r =
                e.droppable.id === t.droppable.id &&
                e.droppable.type === t.droppable.type;
            return n && r;
          })(a, r.lastCritical);
          s && (r.lastCritical = a);
          const u =
            ((d = l),
            !(
              (null == (c = r.lastLocation) && null == d) ||
              (null != c &&
                null != d &&
                c.droppableId === d.droppableId &&
                c.index === d.index)
            ));
          var c, d;
          u && (r.lastLocation = l);
          const f = !((e, t) =>
            (null == e && null == t) ||
            (null != e &&
              null != t &&
              e.draggableId === t.draggableId &&
              e.droppableId === t.droppableId))(r.lastCombine, i);
          if ((f && (r.lastCombine = i), !s && !u && !f)) return;
          const p = w(w({}, hr(a, r.mode)), {}, { combine: i, destination: l });
          n.add(() => {
            mr(0, () => br(e().onDragUpdate, p, t, rt));
          });
        },
        flush: () => {
          r || Ye(), n.flush();
        },
        drop: a,
        abort: () => {
          if (!r) return;
          const e = w(
            w({}, hr(r.lastCritical, r.mode)),
            {},
            { combine: null, destination: null, reason: "CANCEL" }
          );
          a(e);
        },
      };
    })(e, t);
    return (e) => (t) => (r) => {
      if (Mn(r, "BEFORE_INITIAL_CAPTURE"))
        return void n.beforeCapture(
          r.payload.draggableId,
          r.payload.movementMode
        );
      if (Mn(r, "INITIAL_PUBLISH")) {
        const e = r.payload.critical;
        return (
          n.beforeStart(e, r.payload.movementMode),
          t(r),
          void n.start(e, r.payload.movementMode)
        );
      }
      if (Mn(r, "DROP_COMPLETE")) {
        const e = r.payload.completed.result;
        return n.flush(), t(r), void n.drop(e);
      }
      if ((t(r), Mn(r, "FLUSH"))) return void n.abort();
      const a = e.getState();
      "DRAGGING" === a.phase && n.update(a.critical, a.impact);
    };
  };
  const yr = (e) => (t) => (n) => {
      if (!Mn(n, "DROP_ANIMATION_FINISHED")) return void t(n);
      const r = e.getState();
      "DROP_ANIMATING" !== r.phase && Ye(),
        e.dispatch(Qn({ completed: r.completed }));
    },
    wr = (e) => {
      let t = null,
        n = null;
      return (r) => (a) => {
        if (
          ((Mn(a, "FLUSH") ||
            Mn(a, "DROP_COMPLETE") ||
            Mn(a, "DROP_ANIMATION_FINISHED")) &&
            (n && (cancelAnimationFrame(n), (n = null)),
            t && (t(), (t = null))),
          r(a),
          !Mn(a, "DROP_ANIMATE"))
        )
          return;
        const o = {
          eventName: "scroll",
          options: { capture: !0, passive: !1, once: !0 },
          fn: function () {
            "DROP_ANIMATING" === e.getState().phase &&
              e.dispatch({ type: "DROP_ANIMATION_FINISHED", payload: null });
          },
        };
        n = requestAnimationFrame(() => {
          (n = null), (t = $e(window, [o]));
        });
      };
    };
  var xr = (e) => (t) => (n) => (r) => {
    if (
      ((e) =>
        Mn(e, "DROP_COMPLETE") || Mn(e, "DROP_ANIMATE") || Mn(e, "FLUSH"))(r)
    )
      return e.stop(), void n(r);
    if (Mn(r, "INITIAL_PUBLISH")) {
      n(r);
      const a = t.getState();
      return "DRAGGING" !== a.phase && Ye(), void e.start(a);
    }
    n(r), e.scroll(t.getState());
  };
  const Sr = (e) => (t) => (n) => {
      if ((t(n), !Mn(n, "PUBLISH_WHILE_DRAGGING"))) return;
      const r = e.getState();
      "DROP_PENDING" === r.phase &&
        (r.isWaiting || e.dispatch(Yn({ reason: r.reason })));
    },
    Er = O;
  var kr = (e) => {
    let {
      dimensionMarshal: t,
      focusMarshal: n,
      styleMarshal: r,
      getResponders: a,
      announce: o,
      autoScroller: l,
    } = e;
    return D(
      Bn,
      Er(
        (function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return (e) => (n, r) => {
            const a = e(n, r);
            let o = () => {
              throw new Error(S(15));
            };
            const l = {
                getState: a.getState,
                dispatch: function (e) {
                  for (
                    var t = arguments.length,
                      n = new Array(t > 1 ? t - 1 : 0),
                      r = 1;
                    r < t;
                    r++
                  )
                    n[r - 1] = arguments[r];
                  return o(e, ...n);
                },
              },
              i = t.map((e) => e(l));
            return (o = O(...i)(a.dispatch)), w(w({}, a), {}, { dispatch: o });
          };
        })(
          ((i = r),
          () => (e) => (t) => {
            Mn(t, "INITIAL_PUBLISH") && i.dragging(),
              Mn(t, "DROP_ANIMATE") &&
                i.dropping(t.payload.completed.result.reason),
              (Mn(t, "FLUSH") || Mn(t, "DROP_COMPLETE")) && i.resting(),
              e(t);
          }),
          ((e) => () => (t) => (n) => {
            (Mn(n, "DROP_COMPLETE") ||
              Mn(n, "FLUSH") ||
              Mn(n, "DROP_ANIMATE")) &&
              e.stopPublishing(),
              t(n);
          })(t),
          ((e) => (t) => {
            let { getState: n, dispatch: r } = t;
            return (t) => (a) => {
              if (!Mn(a, "LIFT")) return void t(a);
              const { id: o, clientSelection: l, movementMode: i } = a.payload,
                s = n();
              "DROP_ANIMATING" === s.phase && r(Qn({ completed: s.completed })),
                "IDLE" !== n().phase && Ye(),
                r({ type: "FLUSH", payload: null }),
                r({
                  type: "BEFORE_INITIAL_CAPTURE",
                  payload: { draggableId: o, movementMode: i },
                });
              const u = {
                  draggableId: o,
                  scrollOptions: { shouldPublishImmediately: "SNAP" === i },
                },
                {
                  critical: c,
                  dimensions: d,
                  viewport: f,
                } = e.startPublishing(u);
              r({
                type: "INITIAL_PUBLISH",
                payload: {
                  critical: c,
                  dimensions: d,
                  clientSelection: l,
                  movementMode: i,
                  viewport: f,
                },
              });
            };
          })(t),
          cr,
          yr,
          wr,
          Sr,
          xr(l),
          pr,
          ((e) => {
            let t = !1;
            return () => (n) => (r) => {
              if (Mn(r, "INITIAL_PUBLISH"))
                return (
                  (t = !0),
                  e.tryRecordFocus(r.payload.critical.draggable.id),
                  n(r),
                  void e.tryRestoreFocusRecorded()
                );
              if ((n(r), t)) {
                if (Mn(r, "FLUSH"))
                  return (t = !1), void e.tryRestoreFocusRecorded();
                if (Mn(r, "DROP_COMPLETE")) {
                  t = !1;
                  const n = r.payload.completed.result;
                  n.combine &&
                    e.tryShiftRecord(n.draggableId, n.combine.draggableId),
                    e.tryRestoreFocusRecorded();
                }
              }
            };
          })(n),
          vr(a, o)
        )
      )
    );
    var i;
  };
  var Cr = (e) => {
      let { scrollHeight: t, scrollWidth: n, height: r, width: a } = e;
      const o = ct({ x: n, y: t }, { x: a, y: r });
      return { x: Math.max(0, o.x), y: Math.max(0, o.y) };
    },
    Ir = () => {
      const e = document.documentElement;
      return e || Ye(), e;
    },
    Dr = () => {
      const e = Ir();
      return Cr({
        scrollHeight: e.scrollHeight,
        scrollWidth: e.scrollWidth,
        width: e.clientWidth,
        height: e.clientHeight,
      });
    },
    Nr = (e) => {
      let { critical: t, scrollOptions: n, registry: r } = e;
      Pn();
      const a = (() => {
          const e = dr(),
            t = Dr(),
            n = e.y,
            r = e.x,
            a = Ir(),
            o = a.clientWidth,
            l = a.clientHeight;
          return {
            frame: _e({ top: n, left: r, right: r + o, bottom: n + l }),
            scroll: {
              initial: e,
              current: e,
              max: t,
              diff: { value: st, displacement: st },
            },
          };
        })(),
        o = a.scroll.current,
        l = t.droppable,
        i = r.droppable
          .getAllByType(l.type)
          .map((e) => e.callbacks.getDimensionAndWatchScroll(o, n)),
        s = r.draggable
          .getAllByType(t.draggable.type)
          .map((e) => e.getDimension(o)),
        u = { draggables: kt(s), droppables: Et(i) };
      On();
      return { dimensions: u, critical: t, viewport: a };
    };
  function Pr(e, t, n) {
    if (n.descriptor.id === t.id) return !1;
    if (n.descriptor.type !== t.type) return !1;
    return (
      "virtual" ===
      e.droppable.getById(n.descriptor.droppableId).descriptor.mode
    );
  }
  var Or = (e, t) => {
      let n = null;
      const r = (function (e) {
          let { registry: t, callbacks: n } = e,
            r = { additions: {}, removals: {}, modified: {} },
            a = null;
          const o = () => {
            a ||
              (n.collectionStarting(),
              (a = requestAnimationFrame(() => {
                (a = null), Pn();
                const { additions: e, removals: o, modified: l } = r,
                  i = Object.keys(e)
                    .map((e) => t.draggable.getById(e).getDimension(st))
                    .sort((e, t) => e.descriptor.index - t.descriptor.index),
                  s = Object.keys(l).map((e) => ({
                    droppableId: e,
                    scroll: t.droppable
                      .getById(e)
                      .callbacks.getScrollWhileDragging(),
                  })),
                  u = { additions: i, removals: Object.keys(o), modified: s };
                (r = { additions: {}, removals: {}, modified: {} }),
                  On(),
                  n.publish(u);
              })));
          };
          return {
            add: (e) => {
              const t = e.descriptor.id;
              (r.additions[t] = e),
                (r.modified[e.descriptor.droppableId] = !0),
                r.removals[t] && delete r.removals[t],
                o();
            },
            remove: (e) => {
              const t = e.descriptor;
              (r.removals[t.id] = !0),
                (r.modified[t.droppableId] = !0),
                r.additions[t.id] && delete r.additions[t.id],
                o();
            },
            stop: () => {
              a &&
                (cancelAnimationFrame(a),
                (a = null),
                (r = { additions: {}, removals: {}, modified: {} }));
            },
          };
        })({
          callbacks: {
            publish: t.publishWhileDragging,
            collectionStarting: t.collectionStarting,
          },
          registry: e,
        }),
        a = (t) => {
          n || Ye();
          const a = n.critical.draggable;
          "ADDITION" === t.type && Pr(e, a, t.value) && r.add(t.value),
            "REMOVAL" === t.type && Pr(e, a, t.value) && r.remove(t.value);
        },
        o = {
          updateDroppableIsEnabled: (r, a) => {
            e.droppable.exists(r) || Ye(),
              n && t.updateDroppableIsEnabled({ id: r, isEnabled: a });
          },
          updateDroppableIsCombineEnabled: (r, a) => {
            n &&
              (e.droppable.exists(r) || Ye(),
              t.updateDroppableIsCombineEnabled({
                id: r,
                isCombineEnabled: a,
              }));
          },
          scrollDroppable: (t, r) => {
            n && e.droppable.getById(t).callbacks.scroll(r);
          },
          updateDroppableScroll: (r, a) => {
            n &&
              (e.droppable.exists(r) || Ye(),
              t.updateDroppableScroll({ id: r, newScroll: a }));
          },
          startPublishing: (t) => {
            n && Ye();
            const r = e.draggable.getById(t.draggableId),
              o = e.droppable.getById(r.descriptor.droppableId),
              l = { draggable: r.descriptor, droppable: o.descriptor },
              i = e.subscribe(a);
            return (
              (n = { critical: l, unsubscribe: i }),
              Nr({ critical: l, registry: e, scrollOptions: t.scrollOptions })
            );
          },
          stopPublishing: () => {
            if (!n) return;
            r.stop();
            const t = n.critical.droppable;
            e.droppable
              .getAllByType(t.type)
              .forEach((e) => e.callbacks.dragStopped()),
              n.unsubscribe(),
              (n = null);
          },
        };
      return o;
    },
    Rr = (e, t) =>
      "IDLE" === e.phase ||
      ("DROP_ANIMATING" === e.phase &&
        e.completed.result.draggableId !== t &&
        "DROP" === e.completed.result.reason),
    _r = (e) => {
      window.scrollBy(e.x, e.y);
    };
  const Tr = St((e) => Ct(e).filter((e) => !!e.isEnabled && !!e.frame));
  var Lr = (e) => {
    let { center: t, destination: n, droppables: r } = e;
    if (n) {
      const e = r[n];
      return e.frame ? e : null;
    }
    const a = ((e, t) => {
      const n =
        Tr(t).find((t) => (t.frame || Ye(), bn(t.frame.pageMarginBox)(e))) ||
        null;
      return n;
    })(t, r);
    return a;
  };
  const Ar = {
    startFromPercentage: 0.25,
    maxScrollAtPercentage: 0.05,
    maxPixelScroll: 28,
    ease: (e) => e ** 2,
    durationDampening: { stopDampeningAt: 1200, accelerateAt: 360 },
    disabled: !1,
  };
  var Br = (e) => {
      let { startOfRange: t, endOfRange: n, current: r } = e;
      const a = n - t;
      if (0 === a) return 0;
      return (r - t) / a;
    },
    Mr = (e) => {
      let {
        distanceToEdge: t,
        thresholds: n,
        dragStartTime: r,
        shouldUseTimeDampening: a,
        getAutoScrollerOptions: o,
      } = e;
      const l = (function (e, t) {
        const n = (
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : () => Ar
        )();
        if (e > t.startScrollingFrom) return 0;
        if (e <= t.maxScrollValueAt) return n.maxPixelScroll;
        if (e === t.startScrollingFrom) return 1;
        const r =
            1 -
            Br({
              startOfRange: t.maxScrollValueAt,
              endOfRange: t.startScrollingFrom,
              current: e,
            }),
          a = n.maxPixelScroll * n.ease(r);
        return Math.ceil(a);
      })(t, n, o);
      return 0 === l
        ? 0
        : a
        ? Math.max(
            ((e, t, n) => {
              const r = n(),
                a = r.durationDampening.accelerateAt,
                o = r.durationDampening.stopDampeningAt,
                l = t,
                i = o,
                s = Date.now() - l;
              if (s >= o) return e;
              if (s < a) return 1;
              const u = Br({ startOfRange: a, endOfRange: i, current: s }),
                c = e * r.ease(u);
              return Math.ceil(c);
            })(l, r, o),
            1
          )
        : l;
    },
    jr = (e) => {
      let {
        container: t,
        distanceToEdges: n,
        dragStartTime: r,
        axis: a,
        shouldUseTimeDampening: o,
        getAutoScrollerOptions: l,
      } = e;
      const i = (function (e, t) {
        const n = (
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : () => Ar
        )();
        return {
          startScrollingFrom: e[t.size] * n.startFromPercentage,
          maxScrollValueAt: e[t.size] * n.maxScrollAtPercentage,
        };
      })(t, a, l);
      return n[a.end] < n[a.start]
        ? Mr({
            distanceToEdge: n[a.end],
            thresholds: i,
            dragStartTime: r,
            shouldUseTimeDampening: o,
            getAutoScrollerOptions: l,
          })
        : -1 *
            Mr({
              distanceToEdge: n[a.start],
              thresholds: i,
              dragStartTime: r,
              shouldUseTimeDampening: o,
              getAutoScrollerOptions: l,
            });
    };
  const Fr = ht((e) => (0 === e ? 0 : e));
  var zr = (e) => {
    let {
      dragStartTime: t,
      container: n,
      subject: r,
      center: a,
      shouldUseTimeDampening: o,
      getAutoScrollerOptions: l,
    } = e;
    const i = {
        top: a.y - n.top,
        right: n.right - a.x,
        bottom: n.bottom - a.y,
        left: a.x - n.left,
      },
      s = jr({
        container: n,
        distanceToEdges: i,
        dragStartTime: t,
        axis: jt,
        shouldUseTimeDampening: o,
        getAutoScrollerOptions: l,
      }),
      u = jr({
        container: n,
        distanceToEdges: i,
        dragStartTime: t,
        axis: Ft,
        shouldUseTimeDampening: o,
        getAutoScrollerOptions: l,
      }),
      c = Fr({ x: u, y: s });
    if (dt(c, st)) return null;
    const d = ((e) => {
      let { container: t, subject: n, proposedScroll: r } = e;
      const a = n.height > t.height,
        o = n.width > t.width;
      return o || a ? (o && a ? null : { x: o ? 0 : r.x, y: a ? 0 : r.y }) : r;
    })({ container: n, subject: r, proposedScroll: c });
    return d ? (dt(d, st) ? null : d) : null;
  };
  const Ur = ht((e) => (0 === e ? 0 : e > 0 ? 1 : -1)),
    Gr = (() => {
      const e = (e, t) => (e < 0 ? e : e > t ? e - t : 0);
      return (t) => {
        let { current: n, max: r, change: a } = t;
        const o = ut(n, a),
          l = { x: e(o.x, r.x), y: e(o.y, r.y) };
        return dt(l, st) ? null : l;
      };
    })(),
    Wr = (e) => {
      let { max: t, current: n, change: r } = e;
      const a = { x: Math.max(n.x, t.x), y: Math.max(n.y, t.y) },
        o = Ur(r),
        l = Gr({ max: a, current: n, change: o });
      return !l || (0 !== o.x && 0 === l.x) || (0 !== o.y && 0 === l.y);
    },
    Hr = (e, t) =>
      Wr({ current: e.scroll.current, max: e.scroll.max, change: t }),
    Vr = (e, t) => {
      const n = e.frame;
      return (
        !!n && Wr({ current: n.scroll.current, max: n.scroll.max, change: t })
      );
    };
  var $r = (e) => {
      let {
        state: t,
        dragStartTime: n,
        shouldUseTimeDampening: r,
        scrollWindow: a,
        scrollDroppable: o,
        getAutoScrollerOptions: l,
      } = e;
      const i = t.current.page.borderBoxCenter,
        s = t.dimensions.draggables[t.critical.draggable.id].page.marginBox;
      if (t.isWindowScrollAllowed) {
        const e = ((e) => {
          let {
            viewport: t,
            subject: n,
            center: r,
            dragStartTime: a,
            shouldUseTimeDampening: o,
            getAutoScrollerOptions: l,
          } = e;
          const i = zr({
            dragStartTime: a,
            container: t.frame,
            subject: n,
            center: r,
            shouldUseTimeDampening: o,
            getAutoScrollerOptions: l,
          });
          return i && Hr(t, i) ? i : null;
        })({
          dragStartTime: n,
          viewport: t.viewport,
          subject: s,
          center: i,
          shouldUseTimeDampening: r,
          getAutoScrollerOptions: l,
        });
        if (e) return void a(e);
      }
      const u = Lr({
        center: i,
        destination: gn(t.impact),
        droppables: t.dimensions.droppables,
      });
      if (!u) return;
      const c = ((e) => {
        let {
          droppable: t,
          subject: n,
          center: r,
          dragStartTime: a,
          shouldUseTimeDampening: o,
          getAutoScrollerOptions: l,
        } = e;
        const i = t.frame;
        if (!i) return null;
        const s = zr({
          dragStartTime: a,
          container: i.pageMarginBox,
          subject: n,
          center: r,
          shouldUseTimeDampening: o,
          getAutoScrollerOptions: l,
        });
        return s && Vr(t, s) ? s : null;
      })({
        dragStartTime: n,
        droppable: u,
        subject: s,
        center: i,
        shouldUseTimeDampening: r,
        getAutoScrollerOptions: l,
      });
      c && o(u.descriptor.id, c);
    },
    qr = (e) => {
      let { move: t, scrollDroppable: n, scrollWindow: r } = e;
      const a = (e, t) => {
          if (!Vr(e, t)) return t;
          const r = ((e, t) => {
            const n = e.frame;
            return n && Vr(e, t)
              ? Gr({ current: n.scroll.current, max: n.scroll.max, change: t })
              : null;
          })(e, t);
          if (!r) return n(e.descriptor.id, t), null;
          const a = ct(t, r);
          n(e.descriptor.id, a);
          return ct(t, a);
        },
        o = (e, t, n) => {
          if (!e) return n;
          if (!Hr(t, n)) return n;
          const a = ((e, t) => {
            if (!Hr(e, t)) return null;
            const n = e.scroll.max,
              r = e.scroll.current;
            return Gr({ current: r, max: n, change: t });
          })(t, n);
          if (!a) return r(n), null;
          const o = ct(n, a);
          r(o);
          return ct(n, o);
        };
      return (e) => {
        const n = e.scrollJumpRequest;
        if (!n) return;
        const r = gn(e.impact);
        r || Ye();
        const l = a(e.dimensions.droppables[r], n);
        if (!l) return;
        const i = e.viewport,
          s = o(e.isWindowScrollAllowed, i, l);
        s &&
          ((e, n) => {
            const r = ut(e.current.client.selection, n);
            t({ client: r });
          })(e, s);
      };
    },
    Qr = (e) => {
      let {
        scrollDroppable: t,
        scrollWindow: n,
        move: r,
        getAutoScrollerOptions: a,
      } = e;
      const o = ((e) => {
          let {
            scrollWindow: t,
            scrollDroppable: n,
            getAutoScrollerOptions: r = () => Ar,
          } = e;
          const a = Ge(t),
            o = Ge(n);
          let l = null;
          const i = (e) => {
            l || Ye();
            const { shouldUseTimeDampening: t, dragStartTime: n } = l;
            $r({
              state: e,
              scrollWindow: a,
              scrollDroppable: o,
              dragStartTime: n,
              shouldUseTimeDampening: t,
              getAutoScrollerOptions: r,
            });
          };
          return {
            start: (e) => {
              Pn(), l && Ye();
              const t = Date.now();
              let n = !1;
              const a = () => {
                n = !0;
              };
              $r({
                state: e,
                dragStartTime: 0,
                shouldUseTimeDampening: !1,
                scrollWindow: a,
                scrollDroppable: a,
                getAutoScrollerOptions: r,
              }),
                (l = { dragStartTime: t, shouldUseTimeDampening: n }),
                On(),
                n && i(e);
            },
            stop: () => {
              l && (a.cancel(), o.cancel(), (l = null));
            },
            scroll: i,
          };
        })({ scrollWindow: n, scrollDroppable: t, getAutoScrollerOptions: a }),
        l = qr({ move: r, scrollWindow: n, scrollDroppable: t });
      return {
        scroll: (e) => {
          a().disabled ||
            "DRAGGING" !== e.phase ||
            ("FLUID" !== e.movementMode
              ? e.scrollJumpRequest && l(e)
              : o.scroll(e));
        },
        start: o.start,
        stop: o.stop,
      };
    };
  const Yr = "data-rfd",
    Kr = (() => {
      const e = "".concat(Yr, "-drag-handle");
      return {
        base: e,
        draggableId: "".concat(e, "-draggable-id"),
        contextId: "".concat(e, "-context-id"),
      };
    })(),
    Xr = (() => {
      const e = "".concat(Yr, "-draggable");
      return {
        base: e,
        contextId: "".concat(e, "-context-id"),
        id: "".concat(e, "-id"),
      };
    })(),
    Jr = (() => {
      const e = "".concat(Yr, "-droppable");
      return {
        base: e,
        contextId: "".concat(e, "-context-id"),
        id: "".concat(e, "-id"),
      };
    })(),
    Zr = { contextId: "".concat(Yr, "-scroll-container-context-id") },
    ea = (e, t) =>
      e
        .map((e) => {
          const n = e.styles[t];
          return n ? "".concat(e.selector, " { ").concat(n, " }") : "";
        })
        .join(" ");
  const ta =
      "undefined" !== typeof window &&
      "undefined" !== typeof window.document &&
      "undefined" !== typeof window.document.createElement
        ? r.useLayoutEffect
        : r.useEffect,
    na = () => {
      const e = document.querySelector("head");
      return e || Ye(), e;
    },
    ra = (e) => {
      const t = document.createElement("style");
      return e && t.setAttribute("nonce", e), (t.type = "text/css"), t;
    };
  function aa(e, t) {
    const n = lt(
        () =>
          ((e) => {
            const t = ((n = e), (e) => "[".concat(e, '="').concat(n, '"]'));
            var n;
            const r = (() => {
                const e =
                  "\n      cursor: -webkit-grab;\n      cursor: grab;\n    ";
                return {
                  selector: t(Kr.contextId),
                  styles: {
                    always:
                      "\n          -webkit-touch-callout: none;\n          -webkit-tap-highlight-color: rgba(0,0,0,0);\n          touch-action: manipulation;\n        ",
                    resting: e,
                    dragging: "pointer-events: none;",
                    dropAnimating: e,
                  },
                };
              })(),
              a = [
                (() => {
                  const e = "\n      transition: ".concat(
                    rr.outOfTheWay,
                    ";\n    "
                  );
                  return {
                    selector: t(Xr.contextId),
                    styles: { dragging: e, dropAnimating: e, userCancel: e },
                  };
                })(),
                r,
                {
                  selector: t(Jr.contextId),
                  styles: { always: "overflow-anchor: none;" },
                },
                {
                  selector: "body",
                  styles: {
                    dragging:
                      "\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        overflow-anchor: none;\n      ",
                  },
                },
              ];
            return {
              always: ea(a, "always"),
              resting: ea(a, "resting"),
              dragging: ea(a, "dragging"),
              dropAnimating: ea(a, "dropAnimating"),
              userCancel: ea(a, "userCancel"),
            };
          })(e),
        [e]
      ),
      a = (0, r.useRef)(null),
      o = (0, r.useRef)(null),
      l = it(
        St((e) => {
          const t = o.current;
          t || Ye(), (t.textContent = e);
        }),
        []
      ),
      i = it((e) => {
        const t = a.current;
        t || Ye(), (t.textContent = e);
      }, []);
    ta(() => {
      (a.current || o.current) && Ye();
      const r = ra(t),
        s = ra(t);
      return (
        (a.current = r),
        (o.current = s),
        r.setAttribute("".concat(Yr, "-always"), e),
        s.setAttribute("".concat(Yr, "-dynamic"), e),
        na().appendChild(r),
        na().appendChild(s),
        i(n.always),
        l(n.resting),
        () => {
          const e = (e) => {
            const t = e.current;
            t || Ye(), na().removeChild(t), (e.current = null);
          };
          e(a), e(o);
        }
      );
    }, [t, i, l, n.always, n.resting, e]);
    const s = it(() => l(n.dragging), [l, n.dragging]),
      u = it(
        (e) => {
          l("DROP" !== e ? n.userCancel : n.dropAnimating);
        },
        [l, n.dropAnimating, n.userCancel]
      ),
      c = it(() => {
        o.current && l(n.resting);
      }, [l, n.resting]);
    return lt(() => ({ dragging: s, dropping: u, resting: c }), [s, u, c]);
  }
  function oa(e, t) {
    return Array.from(e.querySelectorAll(t));
  }
  var la = (e) =>
    e && e.ownerDocument && e.ownerDocument.defaultView
      ? e.ownerDocument.defaultView
      : window;
  function ia(e) {
    return e instanceof la(e).HTMLElement;
  }
  function sa(e, t) {
    const n = "[".concat(Kr.contextId, '="').concat(e, '"]'),
      r = oa(document, n);
    if (!r.length) return null;
    const a = r.find((e) => e.getAttribute(Kr.draggableId) === t);
    return a && ia(a) ? a : null;
  }
  function ua() {
    const e = { draggables: {}, droppables: {} },
      t = [];
    function n(e) {
      t.length && t.forEach((t) => t(e));
    }
    function r(t) {
      return e.draggables[t] || null;
    }
    function a(t) {
      return e.droppables[t] || null;
    }
    return {
      draggable: {
        register: (t) => {
          (e.draggables[t.descriptor.id] = t),
            n({ type: "ADDITION", value: t });
        },
        update: (t, n) => {
          const r = e.draggables[n.descriptor.id];
          r &&
            r.uniqueId === t.uniqueId &&
            (delete e.draggables[n.descriptor.id],
            (e.draggables[t.descriptor.id] = t));
        },
        unregister: (t) => {
          const a = t.descriptor.id,
            o = r(a);
          o &&
            t.uniqueId === o.uniqueId &&
            (delete e.draggables[a],
            e.droppables[t.descriptor.droppableId] &&
              n({ type: "REMOVAL", value: t }));
        },
        getById: function (e) {
          const t = r(e);
          return t || Ye(), t;
        },
        findById: r,
        exists: (e) => Boolean(r(e)),
        getAllByType: (t) =>
          Object.values(e.draggables).filter((e) => e.descriptor.type === t),
      },
      droppable: {
        register: (t) => {
          e.droppables[t.descriptor.id] = t;
        },
        unregister: (t) => {
          const n = a(t.descriptor.id);
          n &&
            t.uniqueId === n.uniqueId &&
            delete e.droppables[t.descriptor.id];
        },
        getById: function (e) {
          const t = a(e);
          return t || Ye(), t;
        },
        findById: a,
        exists: (e) => Boolean(a(e)),
        getAllByType: (t) =>
          Object.values(e.droppables).filter((e) => e.descriptor.type === t),
      },
      subscribe: function (e) {
        return (
          t.push(e),
          function () {
            const n = t.indexOf(e);
            -1 !== n && t.splice(n, 1);
          }
        );
      },
      clean: function () {
        (e.draggables = {}), (e.droppables = {}), (t.length = 0);
      },
    };
  }
  var ca = r.createContext(null),
    da = () => {
      const e = document.body;
      return e || Ye(), e;
    };
  const fa = {
    position: "absolute",
    width: "1px",
    height: "1px",
    margin: "-1px",
    border: "0",
    padding: "0",
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    "clip-path": "inset(100%)",
  };
  const pa = { separator: "::" };
  function ga(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pa;
    const n = r.useId();
    return lt(
      () => "".concat(e).concat(t.separator).concat(n),
      [t.separator, e, n]
    );
  }
  var ma = r.createContext(null);
  function ha(e) {
    0;
  }
  function ba(e, t) {
    ha();
  }
  function va() {
    ba();
  }
  function ya(e) {
    const t = (0, r.useRef)(e);
    return (
      (0, r.useEffect)(() => {
        t.current = e;
      }),
      t
    );
  }
  function wa(e) {
    return "IDLE" !== e.phase && "DROP_ANIMATING" !== e.phase && e.isDragging;
  }
  const xa = 9,
    Sa = 13,
    Ea = 33,
    ka = 34,
    Ca = 35,
    Ia = 36,
    Da = { [Sa]: !0, [xa]: !0 };
  var Na = (e) => {
    Da[e.keyCode] && e.preventDefault();
  };
  const Pa = (() => {
    const e = "visibilitychange";
    if ("undefined" === typeof document) return e;
    return (
      [
        e,
        "ms".concat(e),
        "webkit".concat(e),
        "moz".concat(e),
        "o".concat(e),
      ].find((e) => "on".concat(e) in document) || e
    );
  })();
  const Oa = { type: "IDLE" };
  function Ra(e) {
    let { cancel: t, completed: n, getPhase: r, setPhase: a } = e;
    return [
      {
        eventName: "mousemove",
        fn: (e) => {
          const { button: t, clientX: n, clientY: o } = e;
          if (0 !== t) return;
          const l = { x: n, y: o },
            i = r();
          if ("DRAGGING" === i.type)
            return e.preventDefault(), void i.actions.move(l);
          "PENDING" !== i.type && Ye();
          const s = i.point;
          if (
            ((u = s),
            (c = l),
            !(Math.abs(c.x - u.x) >= 5 || Math.abs(c.y - u.y) >= 5))
          )
            return;
          var u, c;
          e.preventDefault();
          const d = i.actions.fluidLift(l);
          a({ type: "DRAGGING", actions: d });
        },
      },
      {
        eventName: "mouseup",
        fn: (e) => {
          const a = r();
          "DRAGGING" === a.type
            ? (e.preventDefault(),
              a.actions.drop({ shouldBlockNextClick: !0 }),
              n())
            : t();
        },
      },
      {
        eventName: "mousedown",
        fn: (e) => {
          "DRAGGING" === r().type && e.preventDefault(), t();
        },
      },
      {
        eventName: "keydown",
        fn: (e) => {
          if ("PENDING" !== r().type)
            return 27 === e.keyCode
              ? (e.preventDefault(), void t())
              : void Na(e);
          t();
        },
      },
      { eventName: "resize", fn: t },
      {
        eventName: "scroll",
        options: { passive: !0, capture: !1 },
        fn: () => {
          "PENDING" === r().type && t();
        },
      },
      {
        eventName: "webkitmouseforcedown",
        fn: (e) => {
          const n = r();
          "IDLE" === n.type && Ye(),
            n.actions.shouldRespectForcePress() ? t() : e.preventDefault();
        },
      },
      { eventName: Pa, fn: t },
    ];
  }
  function _a() {}
  const Ta = { [ka]: !0, [Ea]: !0, [Ia]: !0, [Ca]: !0 };
  function La(e, t) {
    function n() {
      t(), e.cancel();
    }
    return [
      {
        eventName: "keydown",
        fn: (r) =>
          27 === r.keyCode
            ? (r.preventDefault(), void n())
            : 32 === r.keyCode
            ? (r.preventDefault(), t(), void e.drop())
            : 40 === r.keyCode
            ? (r.preventDefault(), void e.moveDown())
            : 38 === r.keyCode
            ? (r.preventDefault(), void e.moveUp())
            : 39 === r.keyCode
            ? (r.preventDefault(), void e.moveRight())
            : 37 === r.keyCode
            ? (r.preventDefault(), void e.moveLeft())
            : void (Ta[r.keyCode] ? r.preventDefault() : Na(r)),
      },
      { eventName: "mousedown", fn: n },
      { eventName: "mouseup", fn: n },
      { eventName: "click", fn: n },
      { eventName: "touchstart", fn: n },
      { eventName: "resize", fn: n },
      { eventName: "wheel", fn: n, options: { passive: !0 } },
      { eventName: Pa, fn: n },
    ];
  }
  const Aa = { type: "IDLE" };
  const Ba = [
    "input",
    "button",
    "textarea",
    "select",
    "option",
    "optgroup",
    "video",
    "audio",
  ];
  function Ma(e, t) {
    if (null == t) return !1;
    if (Ba.includes(t.tagName.toLowerCase())) return !0;
    const n = t.getAttribute("contenteditable");
    return "true" === n || "" === n || (t !== e && Ma(e, t.parentElement));
  }
  function ja(e, t) {
    const n = t.target;
    return !!ia(n) && Ma(e, n);
  }
  var Fa = (e) => _e(e.getBoundingClientRect()).center;
  const za = (() => {
    const e = "matches";
    if ("undefined" === typeof document) return e;
    return (
      [e, "msMatchesSelector", "webkitMatchesSelector"].find(
        (e) => e in Element.prototype
      ) || e
    );
  })();
  function Ua(e, t) {
    return null == e ? null : e[za](t) ? e : Ua(e.parentElement, t);
  }
  function Ga(e, t) {
    return e.closest ? e.closest(t) : Ua(e, t);
  }
  function Wa(e, t) {
    const n = t.target;
    if (!((r = n) instanceof la(r).Element)) return null;
    var r;
    const a = (function (e) {
        return "[".concat(Kr.contextId, '="').concat(e, '"]');
      })(e),
      o = Ga(n, a);
    return o && ia(o) ? o : null;
  }
  function Ha(e) {
    e.preventDefault();
  }
  function Va(e) {
    let { expected: t, phase: n, isLockActive: r, shouldWarn: a } = e;
    return !!r() && t === n;
  }
  function $a(e) {
    let { lockAPI: t, store: n, registry: r, draggableId: a } = e;
    if (t.isClaimed()) return !1;
    const o = r.draggable.findById(a);
    return !!o && !!o.options.isEnabled && !!Rr(n.getState(), a);
  }
  function qa(e) {
    let {
      lockAPI: t,
      contextId: n,
      store: r,
      registry: a,
      draggableId: o,
      forceSensorStop: l,
      sourceEvent: i,
    } = e;
    if (!$a({ lockAPI: t, store: r, registry: a, draggableId: o })) return null;
    const s = a.draggable.getById(o),
      u = (function (e, t) {
        const n = "[".concat(Xr.contextId, '="').concat(e, '"]'),
          r = oa(document, n).find((e) => e.getAttribute(Xr.id) === t);
        return r && ia(r) ? r : null;
      })(n, s.descriptor.id);
    if (!u) return null;
    if (i && !s.options.canDragInteractiveElements && ja(u, i)) return null;
    const c = t.claim(l || Ve);
    let d = "PRE_DRAG";
    function f() {
      return s.options.shouldRespectForcePress;
    }
    function p() {
      return t.isActive(c);
    }
    const g = function (e, t) {
      Va({ expected: e, phase: d, isLockActive: p, shouldWarn: !0 }) &&
        r.dispatch(t());
    }.bind(null, "DRAGGING");
    function m(e) {
      function n() {
        t.release(), (d = "COMPLETED");
      }
      function a(t) {
        let a =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : { shouldBlockNextClick: !1 };
        if ((e.cleanup(), a.shouldBlockNextClick)) {
          const e = $e(window, [
            {
              eventName: "click",
              fn: Ha,
              options: { once: !0, passive: !1, capture: !0 },
            },
          ]);
          setTimeout(e);
        }
        n(), r.dispatch(Yn({ reason: t }));
      }
      return (
        "PRE_DRAG" !== d && (n(), Ye()),
        r.dispatch(((e) => ({ type: "LIFT", payload: e }))(e.liftActionArgs)),
        (d = "DRAGGING"),
        w(
          {
            isActive: () =>
              Va({
                expected: "DRAGGING",
                phase: d,
                isLockActive: p,
                shouldWarn: !1,
              }),
            shouldRespectForcePress: f,
            drop: (e) => a("DROP", e),
            cancel: (e) => a("CANCEL", e),
          },
          e.actions
        )
      );
    }
    const h = {
      isActive: () =>
        Va({ expected: "PRE_DRAG", phase: d, isLockActive: p, shouldWarn: !1 }),
      shouldRespectForcePress: f,
      fluidLift: function (e) {
        const t = Ge((e) => {
          g(() => Wn({ client: e }));
        });
        return w(
          w(
            {},
            m({
              liftActionArgs: {
                id: o,
                clientSelection: e,
                movementMode: "FLUID",
              },
              cleanup: () => t.cancel(),
              actions: { move: t },
            })
          ),
          {},
          { move: t }
        );
      },
      snapLift: function () {
        const e = {
          moveUp: () => g(Hn),
          moveRight: () => g($n),
          moveDown: () => g(Vn),
          moveLeft: () => g(qn),
        };
        return m({
          liftActionArgs: {
            id: o,
            clientSelection: Fa(u),
            movementMode: "SNAP",
          },
          cleanup: Ve,
          actions: e,
        });
      },
      abort: function () {
        Va({
          expected: "PRE_DRAG",
          phase: d,
          isLockActive: p,
          shouldWarn: !0,
        }) && t.release();
      },
    };
    return h;
  }
  const Qa = [
    function (e) {
      const t = (0, r.useRef)(Oa),
        n = (0, r.useRef)(Ve),
        a = lt(
          () => ({
            eventName: "mousedown",
            fn: function (t) {
              if (t.defaultPrevented) return;
              if (0 !== t.button) return;
              if (t.ctrlKey || t.metaKey || t.shiftKey || t.altKey) return;
              const r = e.findClosestDraggableId(t);
              if (!r) return;
              const a = e.tryGetLock(r, i, { sourceEvent: t });
              if (!a) return;
              t.preventDefault();
              const o = { x: t.clientX, y: t.clientY };
              n.current(), c(a, o);
            },
          }),
          [e]
        ),
        o = lt(
          () => ({
            eventName: "webkitmouseforcewillbegin",
            fn: (t) => {
              if (t.defaultPrevented) return;
              const n = e.findClosestDraggableId(t);
              if (!n) return;
              const r = e.findOptionsForDraggable(n);
              r &&
                (r.shouldRespectForcePress ||
                  (e.canGetLock(n) && t.preventDefault()));
            },
          }),
          [e]
        ),
        l = it(
          function () {
            n.current = $e(window, [o, a], { passive: !1, capture: !0 });
          },
          [o, a]
        ),
        i = it(() => {
          "IDLE" !== t.current.type && ((t.current = Oa), n.current(), l());
        }, [l]),
        s = it(() => {
          const e = t.current;
          i(),
            "DRAGGING" === e.type &&
              e.actions.cancel({ shouldBlockNextClick: !0 }),
            "PENDING" === e.type && e.actions.abort();
        }, [i]),
        u = it(
          function () {
            const e = Ra({
              cancel: s,
              completed: i,
              getPhase: () => t.current,
              setPhase: (e) => {
                t.current = e;
              },
            });
            n.current = $e(window, e, { capture: !0, passive: !1 });
          },
          [s, i]
        ),
        c = it(
          function (e, n) {
            "IDLE" !== t.current.type && Ye(),
              (t.current = { type: "PENDING", point: n, actions: e }),
              u();
          },
          [u]
        );
      ta(
        function () {
          return (
            l(),
            function () {
              n.current();
            }
          );
        },
        [l]
      );
    },
    function (e) {
      const t = (0, r.useRef)(_a),
        n = lt(
          () => ({
            eventName: "keydown",
            fn: function (n) {
              if (n.defaultPrevented) return;
              if (32 !== n.keyCode) return;
              const r = e.findClosestDraggableId(n);
              if (!r) return;
              const o = e.tryGetLock(r, s, { sourceEvent: n });
              if (!o) return;
              n.preventDefault();
              let l = !0;
              const i = o.snapLift();
              function s() {
                l || Ye(), (l = !1), t.current(), a();
              }
              t.current(),
                (t.current = $e(window, La(i, s), {
                  capture: !0,
                  passive: !1,
                }));
            },
          }),
          [e]
        ),
        a = it(
          function () {
            t.current = $e(window, [n], { passive: !1, capture: !0 });
          },
          [n]
        );
      ta(
        function () {
          return (
            a(),
            function () {
              t.current();
            }
          );
        },
        [a]
      );
    },
    function (e) {
      const t = (0, r.useRef)(Aa),
        n = (0, r.useRef)(Ve),
        a = it(function () {
          return t.current;
        }, []),
        o = it(function (e) {
          t.current = e;
        }, []),
        l = lt(
          () => ({
            eventName: "touchstart",
            fn: function (t) {
              if (t.defaultPrevented) return;
              const r = e.findClosestDraggableId(t);
              if (!r) return;
              const a = e.tryGetLock(r, s, { sourceEvent: t });
              if (!a) return;
              const o = t.touches[0],
                { clientX: l, clientY: i } = o,
                u = { x: l, y: i };
              n.current(), f(a, u);
            },
          }),
          [e]
        ),
        i = it(
          function () {
            n.current = $e(window, [l], { capture: !0, passive: !1 });
          },
          [l]
        ),
        s = it(() => {
          const e = t.current;
          "IDLE" !== e.type &&
            ("PENDING" === e.type && clearTimeout(e.longPressTimerId),
            o(Aa),
            n.current(),
            i());
        }, [i, o]),
        u = it(() => {
          const e = t.current;
          s(),
            "DRAGGING" === e.type &&
              e.actions.cancel({ shouldBlockNextClick: !0 }),
            "PENDING" === e.type && e.actions.abort();
        }, [s]),
        c = it(
          function () {
            const e = { capture: !0, passive: !1 },
              t = { cancel: u, completed: s, getPhase: a },
              r = $e(
                window,
                (function (e) {
                  let { cancel: t, completed: n, getPhase: r } = e;
                  return [
                    {
                      eventName: "touchmove",
                      options: { capture: !1 },
                      fn: (e) => {
                        const n = r();
                        if ("DRAGGING" !== n.type) return void t();
                        n.hasMoved = !0;
                        const { clientX: a, clientY: o } = e.touches[0],
                          l = { x: a, y: o };
                        e.preventDefault(), n.actions.move(l);
                      },
                    },
                    {
                      eventName: "touchend",
                      fn: (e) => {
                        const a = r();
                        "DRAGGING" === a.type
                          ? (e.preventDefault(),
                            a.actions.drop({ shouldBlockNextClick: !0 }),
                            n())
                          : t();
                      },
                    },
                    {
                      eventName: "touchcancel",
                      fn: (e) => {
                        "DRAGGING" === r().type
                          ? (e.preventDefault(), t())
                          : t();
                      },
                    },
                    {
                      eventName: "touchforcechange",
                      fn: (e) => {
                        const n = r();
                        "IDLE" === n.type && Ye();
                        const a = e.touches[0];
                        if (!a) return;
                        if (!(a.force >= 0.15)) return;
                        const o = n.actions.shouldRespectForcePress();
                        if ("PENDING" !== n.type)
                          return o
                            ? n.hasMoved
                              ? void e.preventDefault()
                              : void t()
                            : void e.preventDefault();
                        o && t();
                      },
                    },
                    { eventName: Pa, fn: t },
                  ];
                })(t),
                e
              ),
              o = $e(
                window,
                (function (e) {
                  let { cancel: t, getPhase: n } = e;
                  return [
                    { eventName: "orientationchange", fn: t },
                    { eventName: "resize", fn: t },
                    {
                      eventName: "contextmenu",
                      fn: (e) => {
                        e.preventDefault();
                      },
                    },
                    {
                      eventName: "keydown",
                      fn: (e) => {
                        "DRAGGING" === n().type
                          ? (27 === e.keyCode && e.preventDefault(), t())
                          : t();
                      },
                    },
                    { eventName: Pa, fn: t },
                  ];
                })(t),
                e
              );
            n.current = function () {
              r(), o();
            };
          },
          [u, a, s]
        ),
        d = it(
          function () {
            const e = a();
            "PENDING" !== e.type && Ye();
            const t = e.actions.fluidLift(e.point);
            o({ type: "DRAGGING", actions: t, hasMoved: !1 });
          },
          [a, o]
        ),
        f = it(
          function (e, t) {
            "IDLE" !== a().type && Ye();
            const n = setTimeout(d, 120);
            o({ type: "PENDING", point: t, actions: e, longPressTimerId: n }),
              c();
          },
          [c, a, o, d]
        );
      ta(
        function () {
          return (
            i(),
            function () {
              n.current();
              const e = a();
              "PENDING" === e.type && (clearTimeout(e.longPressTimerId), o(Aa));
            }
          );
        },
        [a, i, o]
      ),
        ta(function () {
          return $e(window, [
            {
              eventName: "touchmove",
              fn: () => {},
              options: { capture: !1, passive: !1 },
            },
          ]);
        }, []);
    },
  ];
  function Ya(e) {
    let {
      contextId: t,
      store: n,
      registry: a,
      customSensors: o,
      enableDefaultSensors: l,
    } = e;
    const i = [...(l ? Qa : []), ...(o || [])],
      s = (0, r.useState)(() =>
        (function () {
          let e = null;
          function t() {
            e || Ye(), (e = null);
          }
          return {
            isClaimed: function () {
              return Boolean(e);
            },
            isActive: function (t) {
              return t === e;
            },
            claim: function (t) {
              e && Ye();
              const n = { abandon: t };
              return (e = n), n;
            },
            release: t,
            tryAbandon: function () {
              e && (e.abandon(), t());
            },
          };
        })()
      )[0],
      u = it(
        function (e, t) {
          wa(e) && !wa(t) && s.tryAbandon();
        },
        [s]
      );
    ta(
      function () {
        let e = n.getState();
        return n.subscribe(() => {
          const t = n.getState();
          u(e, t), (e = t);
        });
      },
      [s, n, u]
    ),
      ta(() => s.tryAbandon, [s.tryAbandon]);
    const c = it(
        (e) => $a({ lockAPI: s, registry: a, store: n, draggableId: e }),
        [s, a, n]
      ),
      d = it(
        (e, r, o) =>
          qa({
            lockAPI: s,
            registry: a,
            contextId: t,
            store: n,
            draggableId: e,
            forceSensorStop: r || null,
            sourceEvent: o && o.sourceEvent ? o.sourceEvent : null,
          }),
        [t, s, a, n]
      ),
      f = it(
        (e) =>
          (function (e, t) {
            const n = Wa(e, t);
            return n ? n.getAttribute(Kr.draggableId) : null;
          })(t, e),
        [t]
      ),
      p = it(
        (e) => {
          const t = a.draggable.findById(e);
          return t ? t.options : null;
        },
        [a.draggable]
      ),
      g = it(
        function () {
          s.isClaimed() &&
            (s.tryAbandon(),
            "IDLE" !== n.getState().phase &&
              n.dispatch({ type: "FLUSH", payload: null }));
        },
        [s, n]
      ),
      m = it(() => s.isClaimed(), [s]),
      h = lt(
        () => ({
          canGetLock: c,
          tryGetLock: d,
          findClosestDraggableId: f,
          findOptionsForDraggable: p,
          tryReleaseLock: g,
          isLockClaimed: m,
        }),
        [c, d, f, p, g, m]
      );
    ha();
    for (let r = 0; r < i.length; r++) i[r](h);
  }
  function Ka(e) {
    return e.current || Ye(), e.current;
  }
  function Xa(e) {
    const {
        contextId: t,
        setCallbacks: n,
        sensors: a,
        nonce: o,
        dragHandleUsageInstructions: l,
      } = e,
      i = (0, r.useRef)(null);
    va();
    const s = ya(e),
      u = it(
        () =>
          ((e) => ({
            onBeforeCapture: (t) => {
              (0, x.flushSync)(() => {
                e.onBeforeCapture && e.onBeforeCapture(t);
              });
            },
            onBeforeDragStart: e.onBeforeDragStart,
            onDragStart: e.onDragStart,
            onDragEnd: e.onDragEnd,
            onDragUpdate: e.onDragUpdate,
          }))(s.current),
        [s]
      ),
      c = it(
        () =>
          ((e) =>
            w(
              w(w({}, Ar), e.autoScrollerOptions),
              {},
              {
                durationDampening: w(
                  w({}, Ar.durationDampening),
                  e.autoScrollerOptions
                ),
              }
            ))(s.current),
        [s]
      ),
      d = (function (e) {
        const t = lt(() => ((e) => "rfd-announcement-".concat(e))(e), [e]),
          n = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(
            function () {
              const e = document.createElement("div");
              return (
                (n.current = e),
                (e.id = t),
                e.setAttribute("aria-live", "assertive"),
                e.setAttribute("aria-atomic", "true"),
                We(e.style, fa),
                da().appendChild(e),
                function () {
                  setTimeout(function () {
                    const t = da();
                    t.contains(e) && t.removeChild(e),
                      e === n.current && (n.current = null);
                  });
                }
              );
            },
            [t]
          ),
          it((e) => {
            const t = n.current;
            t && (t.textContent = e);
          }, [])
        );
      })(t),
      f = (function (e) {
        let { contextId: t, text: n } = e;
        const a = ga("hidden-text", { separator: "-" }),
          o = lt(
            () =>
              (function (e) {
                let { contextId: t, uniqueId: n } = e;
                return "rfd-hidden-text-".concat(t, "-").concat(n);
              })({ contextId: t, uniqueId: a }),
            [a, t]
          );
        return (
          (0, r.useEffect)(
            function () {
              const e = document.createElement("div");
              return (
                (e.id = o),
                (e.textContent = n),
                (e.style.display = "none"),
                da().appendChild(e),
                function () {
                  const t = da();
                  t.contains(e) && t.removeChild(e);
                }
              );
            },
            [o, n]
          ),
          o
        );
      })({ contextId: t, text: l }),
      p = aa(t, o),
      g = it((e) => {
        Ka(i).dispatch(e);
      }, []),
      m = lt(
        () =>
          P(
            {
              publishWhileDragging: jn,
              updateDroppableScroll: zn,
              updateDroppableIsEnabled: Un,
              updateDroppableIsCombineEnabled: Gn,
              collectionStarting: Fn,
            },
            g
          ),
        [g]
      ),
      h = (function () {
        const e = lt(ua, []);
        return (
          (0, r.useEffect)(
            () =>
              function () {
                e.clean();
              },
            [e]
          ),
          e
        );
      })(),
      b = lt(() => Or(h, m), [h, m]),
      v = lt(
        () =>
          Qr(
            w(
              {
                scrollWindow: _r,
                scrollDroppable: b.scrollDroppable,
                getAutoScrollerOptions: c,
              },
              P({ move: Wn }, g)
            )
          ),
        [b.scrollDroppable, g, c]
      ),
      y = (function (e) {
        const t = (0, r.useRef)({}),
          n = (0, r.useRef)(null),
          a = (0, r.useRef)(null),
          o = (0, r.useRef)(!1),
          l = it(function (e, n) {
            const r = { id: e, focus: n };
            return (
              (t.current[e] = r),
              function () {
                const n = t.current;
                n[e] !== r && delete n[e];
              }
            );
          }, []),
          i = it(
            function (t) {
              const n = sa(e, t);
              n && n !== document.activeElement && n.focus();
            },
            [e]
          ),
          s = it(function (e, t) {
            n.current === e && (n.current = t);
          }, []),
          u = it(
            function () {
              a.current ||
                (o.current &&
                  (a.current = requestAnimationFrame(() => {
                    a.current = null;
                    const e = n.current;
                    e && i(e);
                  })));
            },
            [i]
          ),
          c = it(function (e) {
            n.current = null;
            const t = document.activeElement;
            t && t.getAttribute(Kr.draggableId) === e && (n.current = e);
          }, []);
        return (
          ta(
            () => (
              (o.current = !0),
              function () {
                o.current = !1;
                const e = a.current;
                e && cancelAnimationFrame(e);
              }
            ),
            []
          ),
          lt(
            () => ({
              register: l,
              tryRecordFocus: c,
              tryRestoreFocusRecorded: u,
              tryShiftRecord: s,
            }),
            [l, c, u, s]
          )
        );
      })(t),
      S = lt(
        () =>
          kr({
            announce: d,
            autoScroller: v,
            dimensionMarshal: b,
            focusMarshal: y,
            getResponders: u,
            styleMarshal: p,
          }),
        [d, v, b, y, u, p]
      );
    i.current = S;
    const E = it(() => {
        const e = Ka(i);
        "IDLE" !== e.getState().phase &&
          e.dispatch({ type: "FLUSH", payload: null });
      }, []),
      k = it(() => {
        const e = Ka(i).getState();
        return (
          "DROP_ANIMATING" === e.phase || ("IDLE" !== e.phase && e.isDragging)
        );
      }, []);
    n(lt(() => ({ isDragging: k, tryAbort: E }), [k, E]));
    const C = it((e) => Rr(Ka(i).getState(), e), []),
      I = it(() => hn(Ka(i).getState()), []),
      D = lt(
        () => ({
          marshal: b,
          focus: y,
          contextId: t,
          canLift: C,
          isMovementAllowed: I,
          dragHandleUsageInstructionsId: f,
          registry: h,
        }),
        [t, b, f, y, C, I, h]
      );
    return (
      Ya({
        contextId: t,
        store: S,
        registry: h,
        customSensors: a || null,
        enableDefaultSensors: !1 !== e.enableDefaultSensors,
      }),
      (0, r.useEffect)(() => E, [E]),
      r.createElement(
        ma.Provider,
        { value: D },
        r.createElement(Oe, { context: ca, store: S }, e.children)
      )
    );
  }
  function Ja(e) {
    const t = r.useId(),
      n = e.dragHandleUsageInstructions || tt;
    return r.createElement(Ke, null, (a) =>
      r.createElement(
        Xa,
        {
          nonce: e.nonce,
          contextId: t,
          setCallbacks: a,
          dragHandleUsageInstructions: n,
          enableDefaultSensors: e.enableDefaultSensors,
          sensors: e.sensors,
          onBeforeCapture: e.onBeforeCapture,
          onBeforeDragStart: e.onBeforeDragStart,
          onDragStart: e.onDragStart,
          onDragUpdate: e.onDragUpdate,
          onDragEnd: e.onDragEnd,
          autoScrollerOptions: e.autoScrollerOptions,
        },
        e.children
      )
    );
  }
  const Za = 5e3,
    eo = 4500,
    to = (e, t) => (t ? rr.drop(t.duration) : e ? rr.snap : rr.fluid),
    no = (e, t) => {
      if (e) return t ? Zn.drop : Zn.combining;
    };
  function ro(e) {
    return "DRAGGING" === e.type
      ? (function (e) {
          const t = e.dimension.client,
            { offset: n, combineWith: r, dropping: a } = e,
            o = Boolean(r),
            l = ((e) =>
              null != e.forceShouldAnimate
                ? e.forceShouldAnimate
                : "SNAP" === e.mode)(e),
            i = Boolean(a),
            s = i ? lr(n, o) : or(n);
          return {
            position: "fixed",
            top: t.marginBox.top,
            left: t.marginBox.left,
            boxSizing: "border-box",
            width: t.borderBox.width,
            height: t.borderBox.height,
            transition: to(l, a),
            transform: s,
            opacity: no(o, i),
            zIndex: i ? eo : Za,
            pointerEvents: "none",
          };
        })(e)
      : {
          transform: or((t = e).offset),
          transition: t.shouldAnimateDisplacement ? void 0 : "none",
        };
    var t;
  }
  function ao(e) {
    const t = ga("draggable"),
      {
        descriptor: n,
        registry: a,
        getDraggableRef: o,
        canDragInteractiveElements: l,
        shouldRespectForcePress: i,
        isEnabled: s,
      } = e,
      u = lt(
        () => ({
          canDragInteractiveElements: l,
          shouldRespectForcePress: i,
          isEnabled: s,
        }),
        [l, s, i]
      ),
      c = it(
        (e) => {
          const t = o();
          return (
            t || Ye(),
            (function (e, t) {
              let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : st;
              const r = window.getComputedStyle(t),
                a = t.getBoundingClientRect(),
                o = ze(a, r),
                l = Fe(o, n);
              return {
                descriptor: e,
                placeholder: {
                  client: o,
                  tagName: t.tagName.toLowerCase(),
                  display: r.display,
                },
                displaceBy: { x: o.marginBox.width, y: o.marginBox.height },
                client: o,
                page: l,
              };
            })(n, t, e)
          );
        },
        [n, o]
      ),
      d = lt(
        () => ({ uniqueId: t, descriptor: n, options: u, getDimension: c }),
        [n, c, u, t]
      ),
      f = (0, r.useRef)(d),
      p = (0, r.useRef)(!0);
    ta(
      () => (
        a.draggable.register(f.current), () => a.draggable.unregister(f.current)
      ),
      [a.draggable]
    ),
      ta(() => {
        if (p.current) return void (p.current = !1);
        const e = f.current;
        (f.current = d), a.draggable.update(d, e);
      }, [d, a.draggable]);
  }
  var oo = r.createContext(null);
  function lo(e) {
    const t = (0, r.useContext)(e);
    return t || Ye(), t;
  }
  function io(e) {
    e.preventDefault();
  }
  var so = (e, t) => e === t,
    uo = (e) => {
      const { combine: t, destination: n } = e;
      return n ? n.droppableId : t ? t.droppableId : null;
    };
  function co() {
    return {
      isDragging: !1,
      isDropAnimating: !1,
      isClone: !1,
      dropAnimation: null,
      mode: null,
      draggingOver: null,
      combineTargetFor:
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
      combineWith: null,
    };
  }
  const fo = {
    mapped: {
      type: "SECONDARY",
      offset: st,
      combineTargetFor: null,
      shouldAnimateDisplacement: !0,
      snapshot: co(null),
    },
  };
  const po = Pe(
    () => {
      const e = (function () {
          const e = St((e, t) => ({ x: e, y: t })),
            t = St(function (e, t) {
              let n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : null,
                r =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : null,
                a =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : null;
              return {
                isDragging: !0,
                isClone: t,
                isDropAnimating: Boolean(a),
                dropAnimation: a,
                mode: e,
                draggingOver: n,
                combineWith: r,
                combineTargetFor: null,
              };
            }),
            n = St(function (e, n, r, a) {
              let o =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : null,
                l =
                  arguments.length > 5 && void 0 !== arguments[5]
                    ? arguments[5]
                    : null;
              return {
                mapped: {
                  type: "DRAGGING",
                  dropping: null,
                  draggingOver: o,
                  combineWith: l,
                  mode: n,
                  offset: e,
                  dimension: r,
                  forceShouldAnimate:
                    arguments.length > 6 && void 0 !== arguments[6]
                      ? arguments[6]
                      : null,
                  snapshot: t(n, a, o, l, null),
                },
              };
            });
          return (r, a) => {
            if (wa(r)) {
              if (r.critical.draggable.id !== a.draggableId) return null;
              const t = r.current.client.offset,
                l = r.dimensions.draggables[a.draggableId],
                i = gn(r.impact),
                s =
                  (o = r.impact).at && "COMBINE" === o.at.type
                    ? o.at.combine.draggableId
                    : null,
                u = r.forceShouldAnimate;
              return n(e(t.x, t.y), r.movementMode, l, a.isClone, i, s, u);
            }
            var o;
            if ("DROP_ANIMATING" === r.phase) {
              const e = r.completed;
              if (e.result.draggableId !== a.draggableId) return null;
              const n = a.isClone,
                o = r.dimensions.draggables[a.draggableId],
                l = e.result,
                i = l.mode,
                s = uo(l),
                u = ((e) => (e.combine ? e.combine.draggableId : null))(l),
                c = {
                  duration: r.dropDuration,
                  curve: Jn,
                  moveTo: r.newHomeClientOffset,
                  opacity: u ? Zn.drop : null,
                  scale: u ? er.drop : null,
                };
              return {
                mapped: {
                  type: "DRAGGING",
                  offset: r.newHomeClientOffset,
                  dimension: o,
                  dropping: c,
                  draggingOver: s,
                  combineWith: u,
                  mode: i,
                  forceShouldAnimate: null,
                  snapshot: t(i, n, s, u, c),
                },
              };
            }
            return null;
          };
        })(),
        t = (function () {
          const e = St((e, t) => ({ x: e, y: t })),
            t = St(co),
            n = St(function (e) {
              let n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
              return {
                mapped: {
                  type: "SECONDARY",
                  offset: e,
                  combineTargetFor: n,
                  shouldAnimateDisplacement:
                    arguments.length > 2 ? arguments[2] : void 0,
                  snapshot: t(n),
                },
              };
            }),
            r = (e) => (e ? n(st, e, !0) : null),
            a = (t, a, o, l) => {
              const i = o.displaced.visible[t],
                s = Boolean(l.inVirtualList && l.effected[t]),
                u = Pt(o),
                c = u && u.draggableId === t ? a : null;
              if (!i) {
                if (!s) return r(c);
                if (o.displaced.invisible[t]) return null;
                const a = ft(l.displacedBy.point),
                  i = e(a.x, a.y);
                return n(i, c, !0);
              }
              if (s) return r(c);
              const d = o.displacedBy.point,
                f = e(d.x, d.y);
              return n(f, c, i.shouldAnimate);
            };
          return (e, t) => {
            if (wa(e))
              return e.critical.draggable.id === t.draggableId
                ? null
                : a(
                    t.draggableId,
                    e.critical.draggable.id,
                    e.impact,
                    e.afterCritical
                  );
            if ("DROP_ANIMATING" === e.phase) {
              const n = e.completed;
              return n.result.draggableId === t.draggableId
                ? null
                : a(
                    t.draggableId,
                    n.result.draggableId,
                    n.impact,
                    n.afterCritical
                  );
            }
            return null;
          };
        })();
      return (n, r) => e(n, r) || t(n, r) || fo;
    },
    { dropAnimationFinished: Kn },
    null,
    { context: ca, areStatePropsEqual: so }
  )((e) => {
    const t = (0, r.useRef)(null),
      n = it(function () {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        t.current = e;
      }, []),
      a = it(() => t.current, []),
      { contextId: o, dragHandleUsageInstructionsId: l, registry: i } = lo(ma),
      { type: s, droppableId: u } = lo(oo),
      c = lt(
        () => ({ id: e.draggableId, index: e.index, type: s, droppableId: u }),
        [e.draggableId, e.index, s, u]
      ),
      {
        children: d,
        draggableId: f,
        isEnabled: p,
        shouldRespectForcePress: g,
        canDragInteractiveElements: m,
        isClone: h,
        mapped: b,
        dropAnimationFinished: v,
      } = e;
    if ((ba(), ha(), !h)) {
      ao(
        lt(
          () => ({
            descriptor: c,
            registry: i,
            getDraggableRef: a,
            canDragInteractiveElements: m,
            shouldRespectForcePress: g,
            isEnabled: p,
          }),
          [c, i, a, m, g, p]
        )
      );
    }
    const y = lt(
        () =>
          p
            ? {
                tabIndex: 0,
                role: "button",
                "aria-describedby": l,
                "data-rfd-drag-handle-draggable-id": f,
                "data-rfd-drag-handle-context-id": o,
                draggable: !1,
                onDragStart: io,
              }
            : null,
        [o, l, f, p]
      ),
      w = it(
        (e) => {
          "DRAGGING" === b.type &&
            b.dropping &&
            "transform" === e.propertyName &&
            (0, x.flushSync)(v);
        },
        [v, b]
      ),
      S = lt(() => {
        const e = ro(b),
          t = "DRAGGING" === b.type && b.dropping ? w : void 0;
        return {
          innerRef: n,
          draggableProps: {
            "data-rfd-draggable-context-id": o,
            "data-rfd-draggable-id": f,
            style: e,
            onTransitionEnd: t,
          },
          dragHandleProps: y,
        };
      }, [o, y, f, b, w, n]),
      E = lt(
        () => ({
          draggableId: c.id,
          type: c.type,
          source: { index: c.index, droppableId: c.droppableId },
        }),
        [c.droppableId, c.id, c.index, c.type]
      );
    return r.createElement(r.Fragment, null, d(S, b.snapshot, E));
  });
  function go(e) {
    return lo(oo).isUsingCloneFor !== e.draggableId || e.isClone
      ? r.createElement(po, e)
      : null;
  }
  function mo(e) {
    const t = "boolean" !== typeof e.isDragDisabled || !e.isDragDisabled,
      n = Boolean(e.disableInteractiveElementBlocking),
      a = Boolean(e.shouldRespectForcePress);
    return r.createElement(
      go,
      We({}, e, {
        isClone: !1,
        isEnabled: t,
        canDragInteractiveElements: n,
        shouldRespectForcePress: a,
      })
    );
  }
  const ho = (e) => (t) => e === t,
    bo = ho("scroll"),
    vo = ho("auto"),
    yo = (ho("visible"), (e, t) => t(e.overflowX) || t(e.overflowY)),
    wo = (e) =>
      null == e || e === document.body || e === document.documentElement
        ? null
        : ((e) => {
            const t = window.getComputedStyle(e),
              n = { overflowX: t.overflowX, overflowY: t.overflowY };
            return yo(n, bo) || yo(n, vo);
          })(e)
        ? e
        : wo(e.parentElement);
  var xo = (e) => ({ x: e.scrollLeft, y: e.scrollTop });
  const So = (e) => {
    if (!e) return !1;
    return (
      "fixed" === window.getComputedStyle(e).position || So(e.parentElement)
    );
  };
  var Eo = (e) => {
    let {
      ref: t,
      descriptor: n,
      env: r,
      windowScroll: a,
      direction: o,
      isDropDisabled: l,
      isCombineEnabled: i,
      shouldClipSubject: s,
    } = e;
    const u = r.closestScrollable,
      c = ((e, t) => {
        const n = Ue(e);
        if (!t) return n;
        if (e !== t) return n;
        const r = n.paddingBox.top - t.scrollTop,
          a = n.paddingBox.left - t.scrollLeft,
          o = r + t.scrollHeight,
          l = a + t.scrollWidth,
          i = Te({ top: r, right: l, bottom: o, left: a }, n.border);
        return Be({
          borderBox: i,
          margin: n.margin,
          border: n.border,
          padding: n.padding,
        });
      })(t, u),
      d = Fe(c, a),
      f = (() => {
        if (!u) return null;
        const e = Ue(u),
          t = { scrollHeight: u.scrollHeight, scrollWidth: u.scrollWidth };
        return {
          client: e,
          page: Fe(e, a),
          scroll: xo(u),
          scrollSize: t,
          shouldClipSubject: s,
        };
      })(),
      p = ((e) => {
        let {
          descriptor: t,
          isEnabled: n,
          isCombineEnabled: r,
          isFixedOnPage: a,
          direction: o,
          client: l,
          page: i,
          closest: s,
        } = e;
        const u = (() => {
            if (!s) return null;
            const { scrollSize: e, client: t } = s,
              n = Cr({
                scrollHeight: e.scrollHeight,
                scrollWidth: e.scrollWidth,
                height: t.paddingBox.height,
                width: t.paddingBox.width,
              });
            return {
              pageMarginBox: s.page.marginBox,
              frameClient: t,
              scrollSize: e,
              shouldClipSubject: s.shouldClipSubject,
              scroll: {
                initial: s.scroll,
                current: s.scroll,
                max: n,
                diff: { value: st, displacement: st },
              },
            };
          })(),
          c = "vertical" === o ? jt : Ft;
        return {
          descriptor: t,
          isCombineEnabled: r,
          isFixedOnPage: a,
          axis: c,
          isEnabled: n,
          client: l,
          page: i,
          frame: u,
          subject: wt({ page: i, withPlaceholder: null, axis: c, frame: u }),
        };
      })({
        descriptor: n,
        isEnabled: !l,
        isCombineEnabled: i,
        isFixedOnPage: r.isFixedOnPage,
        direction: o,
        client: c,
        page: d,
        closest: f,
      });
    return p;
  };
  const ko = { passive: !1 },
    Co = { passive: !0 };
  var Io = (e) => (e.shouldPublishImmediately ? ko : Co);
  const Do = (e) => (e && e.env.closestScrollable) || null;
  function No(e) {
    const t = (0, r.useRef)(null),
      n = lo(ma),
      a = ga("droppable"),
      { registry: o, marshal: l } = n,
      i = ya(e),
      s = lt(
        () => ({ id: e.droppableId, type: e.type, mode: e.mode }),
        [e.droppableId, e.mode, e.type]
      ),
      u = (0, r.useRef)(s),
      c = lt(
        () =>
          St((e, n) => {
            t.current || Ye();
            const r = { x: e, y: n };
            l.updateDroppableScroll(s.id, r);
          }),
        [s.id, l]
      ),
      d = it(() => {
        const e = t.current;
        return e && e.env.closestScrollable ? xo(e.env.closestScrollable) : st;
      }, []),
      f = it(() => {
        const e = d();
        c(e.x, e.y);
      }, [d, c]),
      p = lt(() => Ge(f), [f]),
      g = it(() => {
        const e = t.current,
          n = Do(e);
        (e && n) || Ye();
        e.scrollOptions.shouldPublishImmediately ? f() : p();
      }, [p, f]),
      m = it(
        (e, r) => {
          t.current && Ye();
          const a = i.current,
            o = a.getDroppableRef();
          o || Ye();
          const l = ((e) => ({
              closestScrollable: wo(e),
              isFixedOnPage: So(e),
            }))(o),
            u = { ref: o, descriptor: s, env: l, scrollOptions: r };
          t.current = u;
          const c = Eo({
              ref: o,
              descriptor: s,
              env: l,
              windowScroll: e,
              direction: a.direction,
              isDropDisabled: a.isDropDisabled,
              isCombineEnabled: a.isCombineEnabled,
              shouldClipSubject: !a.ignoreContainerClipping,
            }),
            d = l.closestScrollable;
          return (
            d &&
              (d.setAttribute(Zr.contextId, n.contextId),
              d.addEventListener("scroll", g, Io(u.scrollOptions))),
            c
          );
        },
        [n.contextId, s, g, i]
      ),
      h = it(() => {
        const e = t.current,
          n = Do(e);
        return (e && n) || Ye(), xo(n);
      }, []),
      b = it(() => {
        const e = t.current;
        e || Ye();
        const n = Do(e);
        (t.current = null),
          n &&
            (p.cancel(),
            n.removeAttribute(Zr.contextId),
            n.removeEventListener("scroll", g, Io(e.scrollOptions)));
      }, [g, p]),
      v = it((e) => {
        const n = t.current;
        n || Ye();
        const r = Do(n);
        r || Ye(), (r.scrollTop += e.y), (r.scrollLeft += e.x);
      }, []),
      y = lt(
        () => ({
          getDimensionAndWatchScroll: m,
          getScrollWhileDragging: h,
          dragStopped: b,
          scroll: v,
        }),
        [b, m, h, v]
      ),
      w = lt(() => ({ uniqueId: a, descriptor: s, callbacks: y }), [y, s, a]);
    ta(
      () => (
        (u.current = w.descriptor),
        o.droppable.register(w),
        () => {
          t.current && b(), o.droppable.unregister(w);
        }
      ),
      [y, s, b, w, l, o.droppable]
    ),
      ta(() => {
        t.current &&
          l.updateDroppableIsEnabled(u.current.id, !e.isDropDisabled);
      }, [e.isDropDisabled, l]),
      ta(() => {
        t.current &&
          l.updateDroppableIsCombineEnabled(u.current.id, e.isCombineEnabled);
      }, [e.isCombineEnabled, l]);
  }
  function Po() {}
  const Oo = {
      width: 0,
      height: 0,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    },
    Ro = (e) => {
      let { isAnimatingOpenOnMount: t, placeholder: n, animate: r } = e;
      const a = ((e) => {
        let { isAnimatingOpenOnMount: t, placeholder: n, animate: r } = e;
        return t || "close" === r
          ? Oo
          : {
              height: n.client.borderBox.height,
              width: n.client.borderBox.width,
              margin: n.client.margin,
            };
      })({ isAnimatingOpenOnMount: t, placeholder: n, animate: r });
      return {
        display: n.display,
        boxSizing: "border-box",
        width: a.width,
        height: a.height,
        marginTop: a.margin.top,
        marginRight: a.margin.right,
        marginBottom: a.margin.bottom,
        marginLeft: a.margin.left,
        flexShrink: "0",
        flexGrow: "0",
        pointerEvents: "none",
        transition: "none" !== r ? rr.placeholder : null,
      };
    };
  var _o = r.memo((e) => {
    const t = (0, r.useRef)(null),
      n = it(() => {
        t.current && (clearTimeout(t.current), (t.current = null));
      }, []),
      { animate: a, onTransitionEnd: o, onClose: l, contextId: i } = e,
      [s, u] = (0, r.useState)("open" === e.animate);
    (0, r.useEffect)(
      () =>
        s
          ? "open" !== a
            ? (n(), u(!1), Po)
            : t.current
            ? Po
            : ((t.current = setTimeout(() => {
                (t.current = null), u(!1);
              })),
              n)
          : Po,
      [a, s, n]
    );
    const c = it(
        (e) => {
          "height" === e.propertyName && (o(), "close" === a && l());
        },
        [a, l, o]
      ),
      d = Ro({
        isAnimatingOpenOnMount: s,
        animate: e.animate,
        placeholder: e.placeholder,
      });
    return r.createElement(e.placeholder.tagName, {
      style: d,
      "data-rfd-placeholder-context-id": i,
      onTransitionEnd: c,
      ref: e.innerRef,
    });
  });
  class To extends r.PureComponent {
    constructor() {
      super(...arguments),
        (this.state = {
          isVisible: Boolean(this.props.on),
          data: this.props.on,
          animate: this.props.shouldAnimate && this.props.on ? "open" : "none",
        }),
        (this.onClose = () => {
          "close" === this.state.animate && this.setState({ isVisible: !1 });
        });
    }
    static getDerivedStateFromProps(e, t) {
      return e.shouldAnimate
        ? e.on
          ? { isVisible: !0, data: e.on, animate: "open" }
          : t.isVisible
          ? { isVisible: !0, data: t.data, animate: "close" }
          : { isVisible: !1, animate: "close", data: null }
        : { isVisible: Boolean(e.on), data: e.on, animate: "none" };
    }
    render() {
      if (!this.state.isVisible) return null;
      const e = {
        onClose: this.onClose,
        data: this.state.data,
        animate: this.state.animate,
      };
      return this.props.children(e);
    }
  }
  const Lo = {
      mode: "standard",
      type: "DEFAULT",
      direction: "vertical",
      isDropDisabled: !1,
      isCombineEnabled: !1,
      ignoreContainerClipping: !1,
      renderClone: null,
      getContainerForClone: function () {
        return document.body || Ye(), document.body;
      },
    },
    Ao = (e) => {
      let t,
        n = w({}, e);
      for (t in Lo) void 0 === e[t] && (n = w(w({}, n), {}, { [t]: Lo[t] }));
      return n;
    },
    Bo = (e, t) => e === t.droppable.type,
    Mo = (e, t) => t.draggables[e.draggable.id],
    jo = Pe(
      () => {
        const e = {
            placeholder: null,
            shouldAnimatePlaceholder: !0,
            snapshot: {
              isDraggingOver: !1,
              draggingOverWith: null,
              draggingFromThisWith: null,
              isUsingPlaceholder: !1,
            },
            useClone: null,
          },
          t = w(w({}, e), {}, { shouldAnimatePlaceholder: !1 }),
          n = St((e) => ({
            draggableId: e.id,
            type: e.type,
            source: { index: e.index, droppableId: e.droppableId },
          })),
          r = St((r, a, o, l, i, s) => {
            const u = i.descriptor.id;
            if (i.descriptor.droppableId === r) {
              const e = s ? { render: s, dragging: n(i.descriptor) } : null,
                t = {
                  isDraggingOver: o,
                  draggingOverWith: o ? u : null,
                  draggingFromThisWith: u,
                  isUsingPlaceholder: !0,
                };
              return {
                placeholder: i.placeholder,
                shouldAnimatePlaceholder: !1,
                snapshot: t,
                useClone: e,
              };
            }
            if (!a) return t;
            if (!l) return e;
            const c = {
              isDraggingOver: o,
              draggingOverWith: u,
              draggingFromThisWith: null,
              isUsingPlaceholder: !0,
            };
            return {
              placeholder: i.placeholder,
              shouldAnimatePlaceholder: !0,
              snapshot: c,
              useClone: null,
            };
          });
        return (n, a) => {
          const o = Ao(a),
            l = o.droppableId,
            i = o.type,
            s = !o.isDropDisabled,
            u = o.renderClone;
          if (wa(n)) {
            const e = n.critical;
            if (!Bo(i, e)) return t;
            const a = Mo(e, n.dimensions),
              o = gn(n.impact) === l;
            return r(l, s, o, o, a, u);
          }
          if ("DROP_ANIMATING" === n.phase) {
            const e = n.completed;
            if (!Bo(i, e.critical)) return t;
            const a = Mo(e.critical, n.dimensions);
            return r(l, s, uo(e.result) === l, gn(e.impact) === l, a, u);
          }
          if ("IDLE" === n.phase && n.completed && !n.shouldFlush) {
            const r = n.completed;
            if (!Bo(i, r.critical)) return t;
            const a = gn(r.impact) === l,
              o = Boolean(r.impact.at && "COMBINE" === r.impact.at.type),
              s = r.critical.droppable.id === l;
            return a ? (o ? e : t) : s ? e : t;
          }
          return t;
        };
      },
      {
        updateViewportMaxScroll: (e) => ({
          type: "UPDATE_VIEWPORT_MAX_SCROLL",
          payload: e,
        }),
      },
      (e, t, n) => w(w(w({}, Ao(n)), e), t),
      { context: ca, areStatePropsEqual: so }
    )((e) => {
      const t = (0, r.useContext)(ma);
      t || Ye();
      const { contextId: n, isMovementAllowed: a } = t,
        o = (0, r.useRef)(null),
        l = (0, r.useRef)(null),
        {
          children: i,
          droppableId: s,
          type: u,
          mode: c,
          direction: d,
          ignoreContainerClipping: f,
          isDropDisabled: p,
          isCombineEnabled: g,
          snapshot: m,
          useClone: h,
          updateViewportMaxScroll: b,
          getContainerForClone: v,
        } = e,
        y = it(() => o.current, []),
        w = it(function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null;
          o.current = e;
        }, []),
        S =
          (it(() => l.current, []),
          it(function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null;
            l.current = e;
          }, []));
      ba();
      const E = it(() => {
        a() && b({ maxScroll: Dr() });
      }, [a, b]);
      No({
        droppableId: s,
        type: u,
        mode: c,
        direction: d,
        isDropDisabled: p,
        isCombineEnabled: g,
        ignoreContainerClipping: f,
        getDroppableRef: y,
      });
      const k = lt(
          () =>
            r.createElement(
              To,
              { on: e.placeholder, shouldAnimate: e.shouldAnimatePlaceholder },
              (e) => {
                let { onClose: t, data: a, animate: o } = e;
                return r.createElement(_o, {
                  placeholder: a,
                  onClose: t,
                  innerRef: S,
                  animate: o,
                  contextId: n,
                  onTransitionEnd: E,
                });
              }
            ),
          [n, E, e.placeholder, e.shouldAnimatePlaceholder, S]
        ),
        C = lt(
          () => ({
            innerRef: w,
            placeholder: k,
            droppableProps: {
              "data-rfd-droppable-id": s,
              "data-rfd-droppable-context-id": n,
            },
          }),
          [n, s, k, w]
        ),
        I = h ? h.dragging.draggableId : null,
        D = lt(
          () => ({ droppableId: s, type: u, isUsingCloneFor: I }),
          [s, I, u]
        );
      return r.createElement(
        oo.Provider,
        { value: D },
        i(C, m),
        (function () {
          if (!h) return null;
          const { dragging: e, render: t } = h,
            n = r.createElement(
              go,
              {
                draggableId: e.draggableId,
                index: e.source.index,
                isClone: !0,
                isEnabled: !0,
                shouldRespectForcePress: !1,
                canDragInteractiveElements: !0,
              },
              (n, r) => t(n, r, e)
            );
          return x.createPortal(n, v());
        })()
      );
    }),
    Fo = (e) => {
      let { setScenarioResults: t } = e;
      const [n, a] = (0, r.useState)([]),
        [l, i] = (0, r.useState)([]),
        [s, u] = (0, r.useState)([]),
        [c, m] = (0, r.useState)(""),
        [h, b] = (0, r.useState)(!0);
      (0, r.useEffect)(() => {
        (async () => {
          var e;
          await d();
          const t = f(),
            n = p();
          a([...t]),
            i([...t]),
            u(n),
            m((null === (e = n[0]) || void 0 === e ? void 0 : e.name) || ""),
            b(!1);
        })();
      }, []);
      const v = (0, r.useCallback)(
        (e) => {
          if (!e.destination) return;
          const t = Array.from(l),
            [n] = t.splice(e.source.index, 1);
          t.splice(e.destination.index, 0, n),
            i(t.map((e, t) => w(w({}, e), {}, { position: t + 1 })));
        },
        [l]
      );
      return h
        ? (0, o.jsx)("div", {
            className: "loading",
            children: "Loading 2025 season data...",
          })
        : (0, o.jsx)("div", {
            className: "scenario-form",
            children: (0, o.jsxs)("form", {
              onSubmit: (e) => {
                e.preventDefault();
                const r = (function (e, t) {
                  let n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : [],
                    r = arguments.length > 3 ? arguments[3] : void 0;
                  const a = JSON.parse(JSON.stringify(r));
                  return (
                    t.forEach((e) => {
                      const t = a.find((t) => t.id === e.driver);
                      if (!t) return;
                      const n = g.race[e.position] || 0;
                      (t.points += n),
                        1 === e.position && (t.wins += 1),
                        e.position <= 3 && (t.podiums = (t.podiums || 0) + 1);
                    }),
                    n.forEach((e) => {
                      const t = a.find((t) => t.id === e.driver);
                      if (!t) return;
                      const n = g.sprint[e.position] || 0;
                      (t.points += n),
                        (t.sprintPoints = (t.sprintPoints || 0) + n);
                    }),
                    a.sort((e, t) => t.points - e.points),
                    a.forEach((e, t) => {
                      e.position = t + 1;
                    }),
                    { race: e, standings: a, hasSprint: n.length > 0 }
                  );
                })(
                  c,
                  l.map((e, t) => ({ position: t + 1, driver: e.id })),
                  [],
                  n
                );
                t(r);
              },
              children: [
                (0, o.jsxs)("div", {
                  className: "form-group",
                  children: [
                    (0, o.jsx)("label", { children: "Select Grand Prix:" }),
                    (0, o.jsx)("select", {
                      value: c,
                      onChange: (e) => m(e.target.value),
                      required: !0,
                      children: s.map((e) =>
                        (0, o.jsxs)(
                          "option",
                          {
                            value: e.name,
                            children: [e.name, " (", e.circuit, ")"],
                          },
                          e.id
                        )
                      ),
                    }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  className: "race-results-input",
                  children: [
                    (0, o.jsx)("h3", { children: "Set Race Finish Order:" }),
                    (0, o.jsx)(Ja, {
                      onDragEnd: v,
                      children: (0, o.jsx)(jo, {
                        droppableId: "drivers",
                        children: (e) =>
                          (0, o.jsxs)(
                            "div",
                            w(
                              w({}, e.droppableProps),
                              {},
                              {
                                ref: e.innerRef,
                                className: "driver-list",
                                children: [
                                  l.map((e, t) =>
                                    (0, o.jsx)(
                                      mo,
                                      {
                                        draggableId: e.id,
                                        index: t,
                                        children: (n) =>
                                          (0, o.jsxs)(
                                            "div",
                                            w(
                                              w(
                                                w(
                                                  { ref: n.innerRef },
                                                  n.draggableProps
                                                ),
                                                n.dragHandleProps
                                              ),
                                              {},
                                              {
                                                className: "driver-item",
                                                children: [
                                                  (0, o.jsxs)("span", {
                                                    className: "position",
                                                    children: [t + 1, "."],
                                                  }),
                                                  (0, o.jsxs)("div", {
                                                    className: "driver-info",
                                                    children: [
                                                      (0, o.jsx)("span", {
                                                        className:
                                                          "driver-name",
                                                        children: e.name,
                                                      }),
                                                      (0, o.jsx)("span", {
                                                        className:
                                                          "driver-team",
                                                        children: e.team,
                                                      }),
                                                      (0, o.jsxs)("span", {
                                                        className:
                                                          "driver-points",
                                                        children: [
                                                          e.points,
                                                          " pts",
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }
                                            )
                                          ),
                                      },
                                      e.id
                                    )
                                  ),
                                  e.placeholder,
                                ],
                              }
                            )
                          ),
                      }),
                    }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  className: "form-actions",
                  children: [
                    (0, o.jsx)("button", {
                      type: "submit",
                      className: "calculate-btn",
                      children: "Calculate Projection",
                    }),
                    (0, o.jsx)("button", {
                      type: "button",
                      onClick: () => {
                        i([...n]), t(null);
                      },
                      className: "reset-btn",
                      children: "Reset Projection",
                    }),
                  ],
                }),
              ],
            }),
          });
    },
    zo = (e) => {
      let { results: t } = e;
      const n = f();
      return t
        ? (0, o.jsxs)("div", {
            className: "scenario-results",
            children: [
              (0, o.jsxs)("h3", {
                children: ["2025 Projection After ", t.race],
              }),
              (0, o.jsxs)("div", {
                className: "results-comparison",
                children: [
                  (0, o.jsxs)("div", {
                    className: "current-standings",
                    children: [
                      (0, o.jsx)("h4", { children: "Current Standings" }),
                      (0, o.jsxs)("table", {
                        children: [
                          (0, o.jsx)("thead", {
                            children: (0, o.jsxs)("tr", {
                              children: [
                                (0, o.jsx)("th", { children: "Pos" }),
                                (0, o.jsx)("th", { children: "Driver" }),
                                (0, o.jsx)("th", { children: "Points" }),
                              ],
                            }),
                          }),
                          (0, o.jsx)("tbody", {
                            children: n
                              .slice(0, 10)
                              .map((e) =>
                                (0, o.jsxs)(
                                  "tr",
                                  {
                                    children: [
                                      (0, o.jsx)("td", {
                                        children: e.position,
                                      }),
                                      (0, o.jsx)("td", { children: e.name }),
                                      (0, o.jsx)("td", { children: e.points }),
                                    ],
                                  },
                                  e.id
                                )
                              ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, o.jsxs)("div", {
                    className: "projected-standings",
                    children: [
                      (0, o.jsx)("h4", { children: "Projected Standings" }),
                      (0, o.jsxs)("table", {
                        children: [
                          (0, o.jsx)("thead", {
                            children: (0, o.jsxs)("tr", {
                              children: [
                                (0, o.jsx)("th", { children: "Pos" }),
                                (0, o.jsx)("th", { children: "Driver" }),
                                (0, o.jsx)("th", { children: "Points" }),
                                (0, o.jsx)("th", { children: "Change" }),
                              ],
                            }),
                          }),
                          (0, o.jsx)("tbody", {
                            children: t.standings.slice(0, 10).map((e) => {
                              const t = n.find((t) => t.id === e.id),
                                r = t ? t.position - e.position : 0,
                                a =
                                  e.points -
                                  ((null === t || void 0 === t
                                    ? void 0
                                    : t.points) || 0);
                              return (0, o.jsxs)(
                                "tr",
                                {
                                  children: [
                                    (0, o.jsx)("td", { children: e.position }),
                                    (0, o.jsx)("td", { children: e.name }),
                                    (0, o.jsx)("td", { children: e.points }),
                                    (0, o.jsxs)("td", {
                                      className:
                                        r > 0
                                          ? "positive"
                                          : r < 0
                                          ? "negative"
                                          : "",
                                      children: [
                                        0 !== r &&
                                          "".concat(r > 0 ? "+" : "").concat(r),
                                        a > 0 && " (+".concat(a, ")"),
                                      ],
                                    }),
                                  ],
                                },
                                e.id
                              );
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        : null;
    },
    Uo = () => {
      const [e, t] = (0, r.useState)([]),
        [n, a] = (0, r.useState)([]),
        [l, i] = (0, r.useState)(""),
        [s, u] = (0, r.useState)(""),
        [c, d] = (0, r.useState)(null),
        [m, h] = (0, r.useState)(!0);
      (0, r.useEffect)(() => {
        (() => {
          const e = f(),
            n = p();
          t(e), a(n), e.length > 1 && (i(e[0].id), u(e[1].id)), h(!1);
        })();
      }, []);
      return m
        ? (0, o.jsx)("div", {
            className: "loading",
            children: "Loading 2025 data...",
          })
        : (0, o.jsxs)("div", {
            className: "points-calculator",
            children: [
              (0, o.jsx)("h2", {
                children: "2025 Championship Points Calculator",
              }),
              (0, o.jsxs)("div", {
                className: "calculator-form",
                children: [
                  (0, o.jsxs)("div", {
                    className: "driver-selection",
                    children: [
                      (0, o.jsxs)("div", {
                        className: "form-group",
                        children: [
                          (0, o.jsx)("label", { children: "Current Leader:" }),
                          (0, o.jsx)("select", {
                            value: l,
                            onChange: (e) => i(e.target.value),
                            children: e.map((e) =>
                              (0, o.jsxs)(
                                "option",
                                {
                                  value: e.id,
                                  children: [
                                    e.name,
                                    " (",
                                    e.team,
                                    ") - ",
                                    e.points,
                                    " pts",
                                  ],
                                },
                                e.id
                              )
                            ),
                          }),
                        ],
                      }),
                      (0, o.jsxs)("div", {
                        className: "form-group",
                        children: [
                          (0, o.jsx)("label", { children: "Challenger:" }),
                          (0, o.jsx)("select", {
                            value: s,
                            onChange: (e) => u(e.target.value),
                            children: e.map((e) =>
                              (0, o.jsxs)(
                                "option",
                                {
                                  value: e.id,
                                  children: [
                                    e.name,
                                    " (",
                                    e.team,
                                    ") - ",
                                    e.points,
                                    " pts",
                                  ],
                                },
                                e.id
                              )
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, o.jsx)("button", {
                    onClick: () => {
                      if (!l || !s) return;
                      const t = ((e, t, n, r) => {
                        const a = n.find((t) => t.id === e),
                          o = n.find((e) => e.id === t);
                        if (!a || !o) return null;
                        const l = a.points - o.points,
                          i = r.length;
                        return {
                          driver1: a,
                          driver2: o,
                          pointsNeeded: l + 1,
                          avgPerRace: (l + 1) / i,
                          racesLeft: i,
                          maxPossiblePoints: i * (g.race[1] + g.sprint[1]),
                        };
                      })(l, s, e, n);
                      d(t);
                    },
                    className: "calculate-btn",
                    children: "Calculate Points Needed",
                  }),
                  c &&
                    (0, o.jsxs)("div", {
                      className: "calculation-result",
                      children: [
                        (0, o.jsx)("h3", {
                          children: "2025 Championship Outlook:",
                        }),
                        (0, o.jsxs)("p", {
                          children: [
                            (0, o.jsx)("strong", { children: c.driver2.name }),
                            " needs to gain",
                            (0, o.jsxs)("strong", {
                              children: [" ", c.pointsNeeded, " points"],
                            }),
                            " on",
                            (0, o.jsxs)("strong", {
                              children: [" ", c.driver1.name],
                            }),
                            " over",
                            (0, o.jsxs)("strong", {
                              children: [" ", c.racesLeft, " races"],
                            }),
                            " to win.",
                          ],
                        }),
                        (0, o.jsxs)("p", {
                          children: [
                            "Average needed per race: ",
                            (0, o.jsxs)("strong", {
                              children: [c.avgPerRace.toFixed(1), " points"],
                            }),
                          ],
                        }),
                        (0, o.jsxs)("p", {
                          children: [
                            "Maximum points available: ",
                            (0, o.jsx)("strong", {
                              children: c.maxPossiblePoints,
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
            ],
          });
    },
    Go = (e) => {
      let { customization: t, setCustomization: n } = e;
      const r = (e) => {
        n((t) => w(w({}, t), {}, { [e]: !t[e] }));
      };
      return (0, o.jsxs)("div", {
        className: "customize-container",
        children: [
          (0, o.jsx)("h2", { children: "Customize Leaderboard View" }),
          (0, o.jsxs)("div", {
            className: "customize-options",
            children: [
              (0, o.jsxs)("label", {
                className: "customize-option",
                children: [
                  (0, o.jsx)("input", {
                    type: "checkbox",
                    checked: t.showTeams,
                    onChange: () => r("showTeams"),
                  }),
                  "Show Teams",
                ],
              }),
              (0, o.jsxs)("label", {
                className: "customize-option",
                children: [
                  (0, o.jsx)("input", {
                    type: "checkbox",
                    checked: t.showPoints,
                    onChange: () => r("showPoints"),
                  }),
                  "Show Points",
                ],
              }),
              (0, o.jsxs)("label", {
                className: "customize-option",
                children: [
                  (0, o.jsx)("input", {
                    type: "checkbox",
                    checked: t.showWins,
                    onChange: () => r("showWins"),
                  }),
                  "Show Wins",
                ],
              }),
              (0, o.jsxs)("label", {
                className: "customize-option",
                children: [
                  (0, o.jsx)("input", {
                    type: "checkbox",
                    checked: t.showPodiums,
                    onChange: () => r("showPodiums"),
                  }),
                  "Show Podiums",
                ],
              }),
              (0, o.jsxs)("label", {
                className: "customize-option",
                children: [
                  (0, o.jsx)("input", {
                    type: "checkbox",
                    checked: t.showLastRace,
                    onChange: () => r("showLastRace"),
                  }),
                  "Show Last Race Result",
                ],
              }),
            ],
          }),
        ],
      });
    },
    Wo = () =>
      (0, o.jsx)("footer", {
        className: "app-footer",
        children: (0, o.jsxs)("div", {
          className: "footer-content",
          children: [
            (0, o.jsxs)("p", {
              children: [
                "Developed with \u2764\ufe0f by ",
                (0, o.jsx)("a", {
                  href: "https://www.abisek.dev",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "Abhishek Nepal",
                }),
              ],
            }),
            (0, o.jsxs)("div", {
              className: "footer-links",
              children: [
                (0, o.jsx)("a", {
                  href: "https://github.com/absknpl",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "GitHub",
                }),
                (0, o.jsx)("a", {
                  href: "https://linkedin.com/in/absknpl",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "LinkedIn",
                }),
              ],
            }),
            (0, o.jsx)("p", {
              className: "footer-tech",
              children:
                "Built with React, DnD, and Formula 1 passion. This interactive tool showcases advanced React patterns including: drag-and-drop interfaces, complex state management, and responsive design.",
            }),
          ],
        }),
      });
  const Ho = function () {
    const [e, t] = (0, r.useState)("leaderboard"),
      [n, a] = (0, r.useState)(null),
      [i, s] = (0, r.useState)({
        showTeams: !0,
        showPoints: !0,
        showWins: !0,
        showPodiums: !0,
        showLastRace: !0,
      });
    return (0, o.jsxs)("div", {
      className: "app",
      children: [
        (0, o.jsx)(l, { setCurrentView: t }),
        (0, o.jsxs)("main", {
          className: "main-content",
          children: [
            "leaderboard" === e && (0, o.jsx)(m, { customization: i }),
            "scenario" === e &&
              (0, o.jsxs)("div", {
                className: "scenario-container",
                children: [
                  (0, o.jsx)(Fo, { setScenarioResults: a }),
                  n && (0, o.jsx)(zo, { results: n }),
                ],
              }),
            "calculator" === e && (0, o.jsx)(Uo, {}),
            "customize" === e &&
              (0, o.jsx)(Go, { customization: i, setCustomization: s }),
          ],
        }),
        (0, o.jsx)(Wo, {}),
      ],
    });
  };
  class Vo extends r.Component {
    constructor(e) {
      super(e), (this.state = { hasError: !1 });
    }
    static getDerivedStateFromError(e) {
      return { hasError: !0 };
    }
    componentDidCatch(e, t) {
      console.error("Error caught by boundary:", e, t);
    }
    render() {
      return this.state.hasError
        ? (0, o.jsxs)("div", {
            className: "error-fallback",
            children: [
              (0, o.jsx)("h2", { children: "Something went wrong" }),
              (0, o.jsx)("button", {
                onClick: () => window.location.reload(),
                children: "Refresh",
              }),
            ],
          })
        : this.props.children;
    }
  }
  const $o = Vo,
    qo = document.getElementById("root");
  (0, a.H)(qo).render(
    (0, o.jsx)(r.StrictMode, {
      children: (0, o.jsx)($o, { children: (0, o.jsx)(Ho, {}) }),
    })
  );
})();
//# sourceMappingURL=main.fa9a081b.js.map
