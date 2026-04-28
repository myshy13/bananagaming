/*! For license information please see 1897.0ec92f17.js.LICENSE.txt */
;(self.webpackChunkportal_frontend_vue = self.webpackChunkportal_frontend_vue || []).push([
  ["1897"],
  {
    17958: function (e, t, n) {
      "use strict"
      function r(e, t, n, r, i) {
        for (r = 0, t = t.split ? t.split(".") : t; r < t.length; r++) e = e ? e[t[r]] : i
        return e === i ? n : e
      }
      n.d(t, {
        A: function () {
          return r
        },
      })
    },
    18114: function (e) {
      ;((o.SYNC = 1), (o.ASYNC = 2), (o.QUEUE = 4))
      var t = "fun-hooks",
        n = Object.freeze({ ready: 0 }),
        r = new WeakMap()
      function i(e, t) {
        return Array.prototype.slice.call(e, t)
      }
      function o(e) {
        var a,
          s = {},
          l = []
        function d(e, t) {
          return "function" == typeof e
            ? g.call(null, "sync", e, t)
            : "string" == typeof e && "function" == typeof t
              ? g.apply(null, arguments)
              : "object" == typeof e
                ? u.apply(null, arguments)
                : void 0
        }
        function u(e, t, n) {
          var r = !0
          void 0 === t &&
            ((t = Object.getOwnPropertyNames(e).filter((e) => !e.match(/^_/))), (r = !1))
          var i = {},
            o = ["constructor"]
          do
            (t.forEach(function (t) {
              var r = t.match(/(?:(sync|async):)?(.+)/),
                a = r[1] || "sync",
                s = r[2]
              if (!i[s] && "function" == typeof e[s] && -1 === o.indexOf(s)) {
                var l = e[s]
                i[s] = e[s] = g(a, l, n ? [n, s] : void 0)
              }
            }),
              (e = Object.getPrototypeOf(e)))
          while (r && e)
          return i
        }
        function c(e) {
          var n = Array.isArray(e) ? e : e.split(".")
          return n.reduce(function (r, i, o) {
            var s = r[i],
              d = !1
            return (
              s ||
              (o === n.length - 1
                ? (a ||
                    l.push(function () {
                      d || console.warn(t + ": referenced '" + e + "' but it was never created")
                    }),
                  (r[i] = f(function (e) {
                    ;((r[i] = e), (d = !0))
                  })))
                : (r[i] = {}))
            )
          }, s)
        }
        function f(e) {
          var t = [],
            n = [],
            i = function () {},
            o = {
              before: function (e, n) {
                return a.call(this, t, "before", e, n)
              },
              after: function (e, t) {
                return a.call(this, n, "after", e, t)
              },
              getHooks: function (e) {
                var r = t.concat(n)
                "object" == typeof e &&
                  (r = r.filter(function (t) {
                    return Object.keys(e).every(function (n) {
                      return t[n] === e[n]
                    })
                  }))
                try {
                  Object.assign(r, {
                    remove: function () {
                      return (
                        r.forEach(function (e) {
                          e.remove()
                        }),
                        this
                      )
                    },
                  })
                } catch (e) {
                  console.error("error adding `remove` to array, did you modify Array.prototype?")
                }
                return r
              },
              removeAll: function () {
                return this.getHooks().remove()
              },
            }
          return (
            r.set(o.after, {
              install: function (r, o, a) {
                ;((this.type = r), (i = a), a(t, n), e && e(o))
              },
            }),
            o
          )
          function a(e, r, o, a) {
            var s = {
              hook: o,
              type: r,
              priority: a || 10,
              remove: function () {
                var r = e.indexOf(s)
                ;-1 !== r && (e.splice(r, 1), i(t, n))
              },
            }
            return (
              e.push(s),
              e.sort(function (e, t) {
                return t.priority - e.priority
              }),
              i(t, n),
              this
            )
          }
        }
        function g(n, s, d) {
          var u,
            g = s.after && r.get(s.after)
          if (g)
            if (g.type === n) return s
            else throw t + ": recreated hookable with different type"
          var p = d ? c(d) : f(),
            m = {
              get: function (e, t) {
                return p[t] || Reflect.get.apply(Reflect, arguments)
              },
            }
          a || l.push(b)
          var h = new Proxy(s, m)
          return (
            r.get(h.after).install(n, h, function (e, t) {
              var r,
                o = []
              function a(e) {
                o.push(e.hook)
              }
              ;(e.length || t.length
                ? (e.forEach(a),
                  (r = o.push(void 0) - 1),
                  t.forEach(a),
                  (u = function (e, t, a) {
                    var s,
                      l = o.slice(),
                      d = 0,
                      u = "async" === n && "function" == typeof a[a.length - 1] && a.pop()
                    function c(e) {
                      "sync" === n ? (s = e) : u && u.apply(null, arguments)
                    }
                    function f(e) {
                      if (l[d]) {
                        var r = i(arguments)
                        return ((f.bail = c), r.unshift(f), l[d++].apply(t, r))
                      }
                      "sync" === n ? (s = e) : u && u.apply(null, arguments)
                    }
                    return (
                      (l[r] = function () {
                        var r = i(arguments, 1)
                        "async" === n && u && (delete f.bail, r.push(f))
                        var o = e.apply(t, r)
                        "sync" === n && f(o)
                      }),
                      f.apply(null, a),
                      s
                    )
                  }))
                : (u = void 0),
                b())
            }),
            h
          )
          function b() {
            !a && ("sync" !== n || e.ready & o.SYNC) && ("async" !== n || e.ready & o.ASYNC)
              ? "sync" !== n && e.ready & o.QUEUE
                ? (m.apply = function () {
                    var e = arguments
                    l.push(function () {
                      h.apply(e[1], e[2])
                    })
                  })
                : (m.apply = function () {
                    throw t + ": hooked function not ready"
                  })
              : (m.apply = u)
          }
        }
        return (
          (e = Object.assign({}, n, e)).ready
            ? (d.ready = function () {
                a = !0
                for (var e; (e = l.shift()); ) e()
              })
            : (a = !0),
          (d.get = c),
          d
        )
      }
      e.exports = o
    },
    61064: function (e, t, n) {
      "use strict"
      n.d(t, {
        c5: function () {
          return o
        },
        q4: function () {
          return i
        },
      })
      var r = n(16886)
      let i = 2
      function o(e) {
        let t,
          {
            apiName: n,
            apiVersion: o,
            apiArgs: a = ["command", "callback", "parameter", "version"],
            callbackArgs: s = ["returnValue", "success"],
            mode: l = 0,
          } = e,
          d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window,
          u = {},
          c = `${n}Call`,
          f = `${n}Return`
        function g(e) {
          let t = "string" == typeof e.data && e.data.includes(f) ? JSON.parse(e.data) : e.data
          if (t?.[f]?.callId) {
            let e = t[f]
            u.hasOwnProperty(e.callId) && u[e.callId](...s.map((t) => e[t]))
          }
        }
        let [p, m] = (function () {
          let e,
            t = d,
            r = !1
          for (; null != t; ) {
            try {
              if ("function" == typeof t[n]) {
                ;((e = t), (r = !0))
                break
              }
            } catch (e) {}
            try {
              if (t.frames[`${n}Locator`]) {
                e = t
                break
              }
            } catch (e) {}
            if (t === d.top) break
            t = t.parent
          }
          return [e, r]
        })()
        if (p)
          return (
            m
              ? (t = function () {
                  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  return new r.U9((t, r) => {
                    let o = p[n](
                      ...h({
                        ...e,
                        callback: e.callback || l === i ? b(e.callback, t, r) : void 0,
                      }).map((e) => {
                        let [t, n] = e
                        return n
                      }),
                    )
                    ;(1 === l || (null == e.callback && 0 === l)) && t(o)
                  })
                })
              : (d.addEventListener("message", g, !1),
                (t = function (e) {
                  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  return new r.U9((n, r) => {
                    let i = Math.random().toString(),
                      o = {
                        [c]: {
                          ...Object.fromEntries(
                            h(e).filter((e) => {
                              let [t] = e
                              return "callback" !== t
                            }),
                          ),
                          callId: i,
                        },
                      }
                    ;((u[i] = b(
                      e?.callback,
                      n,
                      r,
                      (t || e?.callback == null) &&
                        (() => {
                          delete u[i]
                        }),
                    )),
                      p.postMessage(o, "*"),
                      1 === l && n())
                  })
                })),
            Object.assign(t, {
              isDirect: m,
              close() {
                m || d.removeEventListener("message", g)
              },
            })
          )
        function h(e) {
          return ((e = Object.assign({ version: o }, e)), a.map((t) => [t, e[t]]))
        }
        function b(e, t, n, r) {
          let i = "function" == typeof e
          return function (o, a) {
            ;(r && r(),
              1 !== l && (null == a || a ? t : n)(i ? void 0 : o),
              i && e.apply(this, arguments))
          }
        }
      }
    },
    72562: function (e, t, n) {
      "use strict"
      n.d(t, {
        Al: function () {
          return s
        },
      })
      var r = n(31360)
      class i {
        cmpApi = null
        listenerId = void 0
        setCmpApi(e) {
          this.cmpApi = e
        }
        getCmpApi() {
          return this.cmpApi
        }
        setCmpListenerId(e) {
          this.listenerId = e
        }
        getCmpListenerId() {
          return this.listenerId
        }
        resetCmpApis() {
          ;((this.cmpApi = null), (this.listenerId = void 0))
        }
        getRemoveListenerParams() {
          let e = this.getCmpApi(),
            t = this.getCmpListenerId()
          return e && "function" == typeof e && null != t
            ? { command: "removeEventListener", callback: () => this.resetCmpApis(), parameter: t }
            : null
        }
      }
      class o extends i {
        constructor(e) {
          ;(super(), (this.getConsentData = e || (() => null)))
        }
        removeCmpEventListener() {
          let e = this.getRemoveListenerParams()
          if (e) {
            let t = this.getConsentData()
            ;((e.apiVersion = t?.apiVersion || 2),
              (0, r.logInfo)("Removing TCF CMP event listener"),
              this.getCmpApi()(e))
          }
        }
      }
      class a extends i {
        removeCmpEventListener() {
          let e = this.getRemoveListenerParams()
          e && ((0, r.logInfo)("Removing GPP CMP event listener"), this.getCmpApi()(e))
        }
      }
      function s(e, t) {
        switch (e) {
          case "tcf":
            return new o(t)
          case "gpp":
            return new a()
          default:
            return ((0, r.logError)(`Unknown CMP type: ${e}`), null)
        }
      }
    },
    21999: function (e, t, n) {
      "use strict"
      n.d(t, {
        yq: function () {
          return d
        },
      })
      var r = n(9423),
        i = n(31360),
        o = n(10208),
        a = n(16886),
        s = n(67085),
        l = n(27426)
      function d() {
        let e,
          t,
          n,
          {
            namespace: d,
            displayName: u,
            consentDataHandler: c,
            parseConsentData: f,
            getNullConsent: g,
            cmpHandlers: p,
            cmpEventCleanup: m,
            DEFAULT_CMP: h = "iab",
            DEFAULT_CONSENT_TIMEOUT: b = 1e4,
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        function y(e) {
          return `consentManagement.${d} ${e}`
        }
        function v(e, t) {
          return e(Object.assign({ [`${d}Consent`]: c.getConsentData() }, t))
        }
        function E() {
          return t().then((e) => {
            let { error: t } = e
            return { error: t, consentData: c.getConsentData() }
          })
        }
        function w() {
          null != e &&
            ((0, l.Yn)("requestBids").getHooks({ hook: e }).remove(),
            s.U3.getHooks({ hook: v }).remove(),
            (e = null),
            (0, i.logInfo)(`${u} consentManagement module has been deactivated...`))
        }
        return function (I) {
          let A,
            C,
            S,
            O,
            T = I?.[d]
          if (!T || "object" != typeof T)
            return (
              (0, i.logWarn)(y("config not defined, exiting consent manager module")),
              w(),
              {}
            )
          if (T?.enabled === !1) {
            if (
              ((0, i.logWarn)(
                y("config enabled is set to false, disabling consent manager module"),
              ),
              w(),
              "function" == typeof m)
            )
              try {
                m()
              } catch (e) {
                ;(0, i.logError)(`Error during CMP event cleanup for ${u}:`, e)
              }
            return {}
          }
          ;((0, o.O8)(T.cmpApi)
            ? (A = T.cmpApi)
            : ((A = h),
              (0, i.logInfo)(
                y(`config did not specify cmp.  Using system default setting (${h}).`),
              )),
            (0, o.Et)(T.timeout)
              ? (C = T.timeout)
              : ((C = b),
                (0, i.logInfo)(
                  y(`config did not specify timeout.  Using system default setting (${b}).`),
                )))
          let D = (0, o.Et)(T.actionTimeout) ? T.actionTimeout : null
          if (
            ("static" === A
              ? (0, o.Qd)(T.consentData)
                ? ((n = T.consentData),
                  (C = null),
                  (S = () => new a.U9((e) => e(c.setConsentData(f(n))))))
                : (0, i.logError)(
                    y(
                      "config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.",
                    ),
                  )
              : p.hasOwnProperty(A)
                ? (S = p[A])
                : (c.setConsentData(null),
                  (0, i.logWarn)(
                    `${u} CMP framework (${A}) is not a supported framework.  Aborting consentManagement module and resuming auction.`,
                  ),
                  (S = () => a.U9.resolve())),
            (t = function () {
              return (
                null == O &&
                  (O = (function (e) {
                    let t,
                      {
                        name: n,
                        consentDataHandler: r,
                        setupCmp: i,
                        cmpTimeout: o,
                        actionTimeout: a,
                        getNullConsent: s,
                      } = e
                    return (
                      r.enable(),
                      new Promise((e, l) => {
                        let d,
                          u = !1
                        function c(i) {
                          ;(null != t && clearTimeout(t),
                            (t =
                              null != i
                                ? setTimeout(() => {
                                    let t = r.getConsentData() ?? (u ? d : s()),
                                      i = `timeout waiting for ${u ? "user action on CMP" : "CMP to load"}`
                                    ;(r.setConsentData(t),
                                      e({ consentData: t, error: Error(`${n} ${i}`) }))
                                  }, i)
                                : null))
                        }
                        ;(i(function (e) {
                          ;((d = e), u || ((u = !0), null != a && c(a)))
                        }).then(() => e({ consentData: r.getConsentData() }), l),
                          null != o && c(o))
                      })
                        .finally(() => {
                          t && clearTimeout(t)
                        })
                        .catch((e) => {
                          throw (r.setConsentData(null), e)
                        })
                    )
                  })({
                    name: u,
                    consentDataHandler: c,
                    setupCmp: S,
                    cmpTimeout: C,
                    actionTimeout: D,
                    getNullConsent: g,
                  }).catch((e) => {
                    throw ((O = null), e)
                  })),
                O
              )
            }),
            null == e)
          ) {
            let n
            ;((n = new WeakSet()),
              (e = (0, r.Ak)(d, function (e, r) {
                return (() => t())()
                  .then((t) => {
                    let { consentData: o, error: a } = t
                    ;(!a ||
                      (o && n.has(a)) ||
                      (n.add(a), (0, i.logWarn)(a.message, ...(a.args || []))),
                      e.call(this, r))
                  })
                  .catch((t) => {
                    ;((0, i.logError)(
                      `${t?.message} Canceling auction as per consentManagement config.`,
                      ...(t?.args || []),
                    ),
                      e.stopTiming(),
                      "function" == typeof r.bidsBackHandler
                        ? r.bidsBackHandler()
                        : (0, i.logError)("Error executing bidsBackHandler"))
                  })
              })),
              (0, l.Yn)("requestBids").before(e, 50),
              s.U3.before(v),
              (0, i.logInfo)(`${u} consentManagement module has been activated...`))
          }
          return {
            cmpHandler: A,
            cmpTimeout: C,
            actionTimeout: D,
            staticConsentData: n,
            loadConsentData: E,
            requestBidsHook: e,
          }
        }
      }
    },
    74931: function (e, t, n) {
      "use strict"
      let r, i, o, a
      n.d(t, {
        l: function () {
          return b
        },
      })
      var s = n(39248),
        l = n(37830),
        d = n(98875),
        u = n(31360)
      function c(e) {
        return null != e && 0 !== e
      }
      function f(e) {
        return (
          ["MspaServiceProviderMode", "Gpc"].some((t) => 1 === e[t]) ||
          2 === e.PersonalDataConsents ||
          1 === e.KnownChildSensitiveDataConsents[0] ||
          1 === e.KnownChildSensitiveDataConsents[2] ||
          c(e.KnownChildSensitiveDataConsents[1]) ||
          0 === e.MspaCoveredTransaction
        )
      }
      function g(e, t) {
        return ["SensitiveDataProcessingOptOutNotice", "SensitiveDataLimitUseNotice"].some(
          (n) => e[n] === t,
        )
      }
      function p(e) {
        return (
          f(e) ||
          ["Sale", "Sharing", "TargetedAdvertising"].some((t) => {
            let n = e[`${t}OptOut`],
              r = e[`${t}OptOutNotice`]
            return 1 === n || 2 === r || (2 === n && 0 === r)
          }) ||
          2 === e.SharingNotice ||
          (2 === e.SharingOptOut && 0 === e.SharingNotice)
        )
      }
      let m =
          ((r = [6, 7, 9, 10, 12, 14, 16].map((e) => --e)),
          (o = (i = Array.from(Array(16).keys()).filter((e) => 7 !== e)).filter(
            (e) => !r.includes(e),
          )),
          (a = Object.fromEntries(
            Object.entries({ 1: 12, 2: 16 }).map((e) => {
              let [t, n] = e,
                a = (e) => e < n
              return [
                t,
                {
                  cannotBeInScope: r.filter(a),
                  allExceptGeo: i.filter(a),
                  mustHaveConsent: o.filter(a),
                },
              ]
            }),
          )),
          function (e) {
            let { cannotBeInScope: t, mustHaveConsent: n, allExceptGeo: r } = a[e.Version]
            return (
              p(e) ||
              g(e, 2) ||
              t.some((t) => c(e.SensitiveDataProcessing[t])) ||
              n.some((t) => 1 === e.SensitiveDataProcessing[t]) ||
              (g(e, 0) && r.some((t) => 2 === e.SensitiveDataProcessing[t]))
            )
          }),
        h = {
          [l.Ml]: p,
          [l.yl]: p,
          [l.qX]: m,
          [l.hE]: function (e) {
            let t = e.SensitiveDataProcessing[7]
            return 1 === t || f(e) || g(e, 2) || (g(e, 0) && 2 === t)
          },
        }
      function b(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (e) => e,
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : h,
          i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : s.qB,
          o =
            arguments.length > 5 && void 0 !== arguments[5]
              ? arguments[5]
              : () => d.ad.getConsentData(),
          a = [],
          l = `MSPA (GPP '${e}' for section${t.length > 1 ? "s" : ""} ${t.join(", ")})`
        return (
          (0, u.logInfo)(`Enabling activity controls for ${l}`),
          Object.entries(r).forEach((r) => {
            let [s, u] = r
            a.push(
              i(
                s,
                l,
                (function (e, t, n) {
                  let r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : () => d.ad.getConsentData()?.applicableSections
                  return function () {
                    if (r().some((t) => e.includes(t))) {
                      let e = t()
                      if (null == e) return { allow: !1, reason: "consent data not available" }
                      if (![1, 2].includes(e.Version))
                        return {
                          allow: !1,
                          reason: `unsupported consent specification version "${e.Version}"`,
                        }
                      if (n(e)) return { allow: !1 }
                    }
                  }
                })(
                  t,
                  () => {
                    var t
                    return n(
                      Array.isArray((t = o()?.parsedSections?.[e]))
                        ? t.reduceRight((e, t) => Object.assign(t, e), {})
                        : t,
                    )
                  },
                  u,
                  () => o()?.applicableSections || [],
                ),
              ),
            )
          }),
          () => a.forEach((e) => e())
        )
      }
    },
    2651: function (e, t, n) {
      "use strict"
      var r = n(76030),
        i = n(31360),
        o = n(10208),
        a = n(67166),
        s = n(41831),
        l = n(98875),
        d = n(64626),
        u = n(61064),
        c = n(16886),
        f = n(21999),
        g = n(72562)
      let p = {},
        m = null
      class h {
        constructor(e, t) {
          ;((this.message = e), (this.args = null == t ? [] : [t]))
        }
      }
      class b {
        apiVersion = "1.1"
        static get() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.c5
          if (null == this.INST) {
            let t = e({
              apiName: "__gpp",
              apiArgs: ["command", "callback", "parameter"],
              mode: u.q4,
            })
            if (null == t) throw new h("GPP CMP not found")
            this.INST = new this(t)
          }
          return this.INST
        }
        #e
        #t
        #n = []
        initialized = !1
        constructor(e) {
          ;((this.cmp = e),
            ([this.#e, this.#t] = ["resolve", "reject"].map((e) => (t) => {
              for (; this.#n.length; ) this.#n.pop()[e](t)
            })))
        }
        init(e) {
          let t = this.updateWhenReady(e)
          return (
            this.initialized ||
              (e.gppVersion !== this.apiVersion &&
                (0, i.logWarn)(
                  `Unrecognized GPP CMP version: ${e.apiVersion}. Continuing using GPP API version ${this.apiVersion}...`,
                ),
              (this.initialized = !0),
              m || (m = (0, g.Al)("gpp")),
              m.setCmpApi(this.cmp),
              this.cmp({
                command: "addEventListener",
                callback: (e, t) => {
                  ;(null == t || t
                    ? e?.pingData?.cmpStatus === "error"
                      ? this.#t(new h('CMP status is "error"; please check CMP setup', e))
                      : this.isCMPReady(e?.pingData || {}) &&
                        ["sectionChange", "signalStatus"].includes(e?.eventName) &&
                        this.#e(this.updateConsent(e.pingData))
                    : this.#t(new h("Received error response from CMP", e)),
                    null == l.ad.getConsentData() ||
                      e?.pingData == null ||
                      this.isCMPReady(e.pingData) ||
                      l.ad.setConsentData(null),
                    e?.listenerId !== null &&
                      e?.listenerId !== void 0 &&
                      m?.setCmpListenerId(e?.listenerId))
                },
              })),
            t
          )
        }
        refresh() {
          return this.cmp({ command: "ping" }).then(this.init.bind(this))
        }
        updateConsent(e) {
          return new c.U9((t) => {
            if (null == e || (0, i.isEmpty)(e)) throw new h("Received empty response from CMP", e)
            let n = y(e)
            ;((0, i.logInfo)("Retrieved GPP consent from CMP:", n), l.ad.setConsentData(n), t(n))
          })
        }
        nextUpdate() {
          let e = (0, c.v6)()
          return (this.#n.push(e), e.promise)
        }
        updateWhenReady(e) {
          return this.isCMPReady(e) ? this.updateConsent(e) : this.nextUpdate()
        }
        isCMPReady(e) {
          return "ready" === e.signalStatus
        }
      }
      function y(e) {
        if (
          (e?.applicableSections != null && !Array.isArray(e.applicableSections)) ||
          (e?.gppString != null && !(0, o.O8)(e.gppString)) ||
          (e?.parsedSections != null && !(0, o.Qd)(e.parsedSections))
        )
          throw new h("CMP returned unexpected value during lookup process.", e)
        return (
          ["usnatv1", "uscav1"].forEach((t) => {
            e?.parsedSections?.[t] &&
              (0, i.logWarn)(
                `Received invalid section from cmp: '${t}'. Some functionality may not work as expected`,
                e,
              )
          }),
          v(e)
        )
      }
      function v() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return {
          gppString: e?.gppString,
          applicableSections: e?.applicableSections || [],
          parsedSections: e?.parsedSections || {},
          gppData: e,
        }
      }
      let E = (0, f.yq)({
        namespace: "gpp",
        displayName: "GPP",
        consentDataHandler: l.ad,
        parseConsentData: y,
        getNullConsent: () => v(null),
        cmpHandlers: {
          iab: function () {
            return new c.U9((e) => e(b.get().refresh()))
          },
        },
        cmpEventCleanup: function () {
          ;(m && (m.removeCmpEventListener(), (m = null)), (p = {}), l.ad.reset(), (b.INST = null))
        },
      })
      ;(s.$W.getConfig(
        "consentManagement",
        (e) => ((p = E(e.consentManagement)), p.loadConsentData?.()?.catch?.(() => null)),
      ),
        d.wU.before(function (e, t) {
          return e(
            t.then((e) => {
              let t = l.ad.getConsentData()
              return (
                t &&
                  (Array.isArray(t.applicableSections) &&
                    (0, a.J)(e, "regs.gpp_sid", t.applicableSections),
                  (0, a.J)(e, "regs.gpp", t.gppString)),
                e
              )
            }),
          )
        }),
        (0, r.E)("consentManagementGpp"))
    },
    57189: function (e, t, n) {
      "use strict"
      let r, i, o
      var a = n(76030),
        s = n(31360),
        l = n(10208),
        d = n(67166),
        u = n(41831),
        c = n(98875)
      let f = ["request", "imp", "bidResponse", "response"],
        [g, p, m, h] = f,
        [b, y] = ["default", "pbs"],
        v = new Set(f),
        { registerOrtbProcessor: E, getProcessors: w } =
          ((o = {}),
          {
            registerOrtbProcessor(e) {
              let { type: t, name: n, fn: r, priority: i = 0, dialects: a = [b] } = e
              if (!v.has(t)) throw Error(`ORTB processor type must be one of: ${f.join(", ")}`)
              a.forEach((e) => {
                ;(o.hasOwnProperty(e) || (o[e] = {}),
                  o[e].hasOwnProperty(t) || (o[e][t] = {}),
                  (o[e][t][n] = { priority: i, fn: r }))
              })
            },
            getProcessors: (e) => o[e] || {},
          })
      var I = n(64626),
        A = n(61064),
        C = n(21999),
        S = n(72562)
      let O = {},
        T = null
      function D(e) {
        let t, n
        if (
          ((t = e && "boolean" == typeof e.gdprApplies ? e.gdprApplies : r),
          (n = e && e.tcString),
          !("boolean" != typeof t || (!0 === t && (!n || !(0, l.O8)(n)))))
        )
          return k(e)
        throw Object.assign(Error("CMP returned unexpected value during lookup process."), {
          args: [e],
        })
      }
      function k(e) {
        let t = {
          consentString: e ? e.tcString : void 0,
          vendorData: e || void 0,
          gdprApplies: e && "boolean" == typeof e.gdprApplies ? e.gdprApplies : r,
          apiVersion: 2,
        }
        return (
          e && e.addtlConsent && (0, l.O8)(e.addtlConsent) && (t.addtlConsent = e.addtlConsent),
          t
        )
      }
      let $ = (0, C.yq)({
        namespace: "gdpr",
        displayName: "TCF",
        consentDataHandler: c.mW,
        cmpHandlers: {
          iab: function (e) {
            return new Promise((t, n) => {
              let r = (0, A.c5)({
                apiName: "__tcfapi",
                apiVersion: 2,
                apiArgs: ["command", "version", "callback", "parameter"],
              })
              ;(r || n(Error("TCF2 CMP not found.")),
                r.isDirect
                  ? (0, s.logInfo)("Detected CMP API is directly accessible, calling it now...")
                  : (0, s.logInfo)(
                      "Detected CMP is outside the current iframe where Prebid.js is located, calling it now...",
                    ),
                T || (T = (0, S.Al)("tcf", () => c.mW.getConsentData())),
                T.setCmpApi(r),
                r({
                  command: "addEventListener",
                  callback: function (r, i) {
                    if (((0, s.logInfo)("Received a response from CMP", r), i)) {
                      try {
                        e(D(r))
                      } catch (e) {}
                      if (
                        !1 === r.gdprApplies ||
                        "tcloaded" === r.eventStatus ||
                        "useractioncomplete" === r.eventStatus
                      )
                        try {
                          ;(null !== r.listenerId &&
                            void 0 !== r.listenerId &&
                            T?.setCmpListenerId(r.listenerId),
                            c.mW.setConsentData(D(r)),
                            t())
                        } catch (e) {
                          n(e)
                        }
                    } else
                      n(Error("CMP unable to register callback function.  Please check CMP setup."))
                  },
                }))
            })
          },
        },
        parseConsentData: D,
        getNullConsent: () => k(null),
        cmpEventCleanup: function () {
          ;(T && (T.removeCmpEventListener(), (T = null)), (O = {}), c.mW.reset())
        },
      })
      ;(u.$W.getConfig("consentManagement", (e) => {
        var t
        let n
        return (
          (n = (t = e.consentManagement) && (t.gdpr || t.usp || t.gpp ? t.gdpr : t)),
          n?.consentData?.getTCData != null && (n.consentData = n.consentData.getTCData),
          (r = n?.defaultGdprScope === !0),
          (i = !!n?.dsaPlatform),
          (O = $({ gdpr: n })),
          O.loadConsentData?.()?.catch?.(() => null)
        )
      }),
        I.wU.before(function (e, t) {
          return e(
            t.then((e) => {
              let t = c.mW.getConsentData()
              return (
                t &&
                  ("boolean" == typeof t.gdprApplies &&
                    (0, d.J)(e, "regs.ext.gdpr", +!!t.gdprApplies),
                  (0, d.J)(e, "user.ext.consent", t.consentString)),
                i && (0, d.J)(e, "regs.ext.dsa.dsarequired", 3),
                e
              )
            }),
          )
        }),
        E({
          type: g,
          name: "gdprAddtlConsent",
          fn: function (e, t) {
            let n = t.gdprConsent?.addtlConsent
            n &&
              "string" == typeof n &&
              (0, d.J)(e, "user.ext.ConsentedProvidersSettings.consented_providers", n)
          },
        }),
        (0, a.E)("consentManagementTcf"))
    },
    46589: function (e, t, n) {
      "use strict"
      var r = n(76030),
        i = n(41831),
        o = n(74931)
      let a = !1
      ;(i.$W.getConfig("consentManagement", (e) => {
        e?.consentManagement?.gpp == null || a || ((0, o.l)("usnat", [7]), (a = !0))
      }),
        (0, r.E)("gppControl_usnat"))
    },
    44071: function (e, t, n) {
      "use strict"
      let r
      var i = n(76030),
        o = n(41831),
        a = n(74931),
        s = n(67166),
        l = n(31360)
      let d = {
        Version: 0,
        Gpc: 0,
        SharingNotice: 0,
        SaleOptOutNotice: 0,
        SharingOptOutNotice: 0,
        TargetedAdvertisingOptOutNotice: 0,
        SensitiveDataProcessingOptOutNotice: 0,
        SensitiveDataLimitUseNotice: 0,
        SaleOptOut: 0,
        SharingOptOut: 0,
        TargetedAdvertisingOptOut: 0,
        SensitiveDataProcessing: 12,
        KnownChildSensitiveDataConsents: 2,
        PersonalDataConsents: 0,
        MspaCoveredTransaction: 0,
        MspaOptOutOptionMode: 0,
        MspaServiceProviderMode: 0,
      }
      function u(e) {
        let { nullify: t = [], move: n = {}, fn: r } = e,
          i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d
        return (
          (n = Object.fromEntries(
            Object.entries(n).map((e) => {
              let [t, n] = e
              return [
                t,
                Object.fromEntries(
                  Object.entries(n)
                    .map((e) => {
                      let [t, n] = e
                      return [t, Array.isArray(n) ? n : [n]]
                    })
                    .map((e) => {
                      let [t, n] = e
                      return [--t, n.map((e) => --e)]
                    }),
                ),
              ]
            }),
          )),
          function (e) {
            let o = Object.fromEntries(
              Object.entries(i).map((t) => {
                let [r, i] = t,
                  o = null
                if (i > 0) {
                  if (((o = Array(i).fill(null)), Array.isArray(e[r]))) {
                    let t = n[r] || {},
                      a = []
                    e[r].forEach((e, n) => {
                      let [r, s] = t.hasOwnProperty(n) ? [t[n], !0] : [[n], !1]
                      r.forEach((t) => {
                        t < i && !a.includes(t) && ((o[t] = e), s && a.push(t))
                      })
                    })
                  }
                } else null != e[r] && (o = Array.isArray(e[r]) ? null : e[r])
                return [r, o]
              }),
            )
            return (t.forEach((e) => (0, s.J)(o, e, null)), r && r(e, o), o)
          }
        )
      }
      function c(e, t) {
        t.KnownChildSensitiveDataConsents =
          0 === e.KnownChildSensitiveDataConsents ? [0, 0] : [1, 1]
      }
      let f = {
          7: (e) => e,
          8: u({
            move: { SensitiveDataProcessing: { 1: 9, 2: 10, 3: 8, 4: [1, 2], 5: 12, 8: 3, 9: 4 } },
            fn(e, t) {
              e.KnownChildSensitiveDataConsents.some((e) => 0 !== e) &&
                (t.KnownChildSensitiveDataConsents = [1, 1])
            },
          }),
          9: u({ fn: c }),
          10: u({ fn: c }),
          11: u({ move: { SensitiveDataProcessing: { 3: 4, 4: 5, 5: 3 } }, fn: c }),
          12: u({
            fn(e, t) {
              let n = e.KnownChildSensitiveDataConsents
              t.KnownChildSensitiveDataConsents = n.some((e) => 0 !== e)
                ? 2 === n[1] && 2 === n[2]
                  ? [2, 1]
                  : [1, 1]
                : [0, 0]
            },
          }),
        },
        g = { 8: "usca", 9: "usva", 10: "usco", 11: "usut", 12: "usct" },
        p =
          ((r = Object.keys(g).map(Number)),
          function () {
            let { sections: e = {}, sids: t = r } =
              arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
            return t
              .map((t) => {
                let n = (0, l.prefixLog)(`Cannot set up MSPA controls for SID ${t}:`),
                  r = e[t] || {},
                  i = r.normalizeAs || t
                if (!f.hasOwnProperty(i))
                  return (n.logError(`no normalization rules are known for SID ${i}`), null)
                let o = r.name || g[t]
                return "string" != typeof o
                  ? (n.logError("cannot determine GPP section name"), null)
                  : [o, [t], f[i]]
              })
              .filter((e) => null != e)
          }),
        m = []
      ;(o.$W.getConfig("consentManagement", (e) => {
        let t = e.consentManagement?.gpp
        if (t) {
          for (; m.length; ) m.pop()()
          p(t?.mspa || {}).forEach((e) => {
            let [t, n, r] = e
            return m.push((0, a.l)(t, n, r))
          })
        }
      }),
        (0, i.E)("gppControl_usstates"))
    },
    9383: function (e, t, n) {
      "use strict"
      var r = n(76030),
        i = n(10208),
        o = n(17958),
        a = n(31360),
        s = n(67166),
        l = n(86451),
        d = n(27426),
        u = n(91965),
        c = n(98349),
        f = n(16886),
        g = n(20095)
      let p = "id5id",
        m = "User ID - ID5 submodule: ",
        h = "id5-sync.com",
        b = (0, c.vM)({ moduleType: "userId", moduleName: "id5Id" }),
        y = {
          id5id: {
            getValue: function (e) {
              return e.uid
            },
            source: h,
            atype: 1,
            getUidExt: function (e) {
              if (e.ext) return e.ext
            },
          },
          euid: {
            getValue: function (e) {
              return e.uid
            },
            getSource: function (e) {
              return e.source
            },
            atype: 3,
            getUidExt: function (e) {
              if (e.ext) return e.ext
            },
          },
          trueLinkId: {
            getValue: function (e) {
              return e.uid
            },
            getSource: function () {
              return "true-link-id5-sync.com"
            },
            atype: 1,
            getUidExt: function (e) {
              if (e.ext) return e.ext
            },
          },
        }
      class v {
        constructor(e, t, n, r, o) {
          ;((this.submoduleConfig = e),
            (this.gdprConsentData = t),
            (this.cacheIdObj = (0, i.Qd)(n?.pbjs) ? n.pbjs[e.params.partner] : n),
            (this.usPrivacyData = r),
            (this.gppData = o))
        }
        async execute() {
          let e = this.#r()
          if (!this.#i()) return this.#o(e)
          try {
            return await this.#a(e)
          } catch (t) {
            return (
              (0, a.logError)(
                m +
                  "Error while performing ID5 external module flow. Continuing with regular flow.",
                t,
              ),
              this.#o(e)
            )
          }
        }
        #i() {
          return "string" == typeof this.submoduleConfig.params.externalModuleUrl
        }
        async #a(e) {
          await E(this.submoduleConfig.params.externalModuleUrl)
          let t = await e
          return this.#s().fetchId5Id(
            t,
            this.submoduleConfig.params,
            (0, u.EN)(),
            this.gdprConsentData,
            this.usPrivacyData,
            this.gppData,
          )
        }
        #s() {
          return window.id5Prebid && window.id5Prebid.integration
        }
        async #o(e) {
          let t = await e,
            n = await this.#l(t.extensionsCall),
            r = await this.#d(t.fetchCall, n)
          return this.#u(r)
        }
        async #r() {
          let e = this.submoduleConfig.params.configUrl || "https://id5-sync.com/api/config/prebid",
            t = await (0, l.hd)(e, {
              method: "POST",
              body: JSON.stringify({ ...this.submoduleConfig, bounce: !0 }),
              credentials: "include",
            })
          if (!t.ok) throw Error("Error while calling config endpoint: ", t)
          let n = await t.json()
          return ((0, a.logInfo)(m + "config response received from the server", n), n)
        }
        async #l(e) {
          if (void 0 === e) return
          let t = e.url,
            n = e.method || "GET",
            r = "GET" === n ? void 0 : JSON.stringify(e.body || {}),
            i = await (0, l.hd)(t, { method: n, body: r })
          if (!i.ok) throw Error("Error while calling extensions endpoint: ", i)
          let o = await i.json()
          return ((0, a.logInfo)(m + "extensions response received from the server", o), o)
        }
        async #d(e, t) {
          let n = e.url,
            r = e.overrides || {},
            i = JSON.stringify({ ...this.#c(), ...r, extensions: t }),
            o = await (0, l.hd)(n, { method: "POST", body: i, credentials: "include" })
          if (!o.ok) throw Error("Error while calling fetch endpoint: ", o)
          let s = await o.json()
          return ((0, a.logInfo)(m + "fetch response received from the server", s), s)
        }
        #c() {
          let e = this.submoduleConfig.params,
            t =
              this.gdprConsentData &&
              "boolean" == typeof this.gdprConsentData.gdprApplies &&
              this.gdprConsentData.gdprApplies
                ? 1
                : 0,
            n = (0, u.EN)(),
            r = this.cacheIdObj ? this.cacheIdObj.signature : void 0,
            i = w(this.cacheIdObj),
            o = window.id5Bootstrap ? window.id5Bootstrap.getTrueLinkInfo() : { booted: !1 },
            s = {
              partner: e.partner,
              gdpr: t,
              nbPage: i,
              o: "pbjs",
              tml: n.topmostLocation,
              ref: n.ref,
              cu: n.canonicalUrl,
              top: +!!n.reachedTop,
              u: n.stack[0] || window.location.href,
              v: "11.1.0",
              storage: this.submoduleConfig.storage,
              localStorage: +!!b.localStorageIsEnabled(),
              true_link: o,
            }
          ;(!t ||
            void 0 === this.gdprConsentData.consentString ||
            (0, a.isEmpty)(this.gdprConsentData.consentString) ||
            (0, a.isEmptyStr)(this.gdprConsentData.consentString) ||
            (s.gdpr_consent = this.gdprConsentData.consentString),
            void 0 === this.usPrivacyData ||
              (0, a.isEmpty)(this.usPrivacyData) ||
              (0, a.isEmptyStr)(this.usPrivacyData) ||
              (s.us_privacy = this.usPrivacyData),
            this.gppData &&
              ((s.gpp_string = this.gppData.gppString),
              (s.gpp_sid = this.gppData.applicableSections)),
            void 0 === r || (0, a.isEmptyStr)(r) || (s.s = r),
            void 0 === e.pd || (0, a.isEmptyStr)(e.pd) || (s.pd = e.pd),
            void 0 === e.provider || (0, a.isEmptyStr)(e.provider) || (s.provider = e.provider))
          let l = e.abTesting || { enabled: !1 }
          return (
            l.enabled && (s.ab_testing = { enabled: !0, control_group_pct: l.controlGroupPct }),
            s
          )
        }
        #u(e) {
          try {
            e.privacy &&
              window.id5Bootstrap &&
              window.id5Bootstrap.setPrivacy &&
              window.id5Bootstrap.setPrivacy(e.privacy)
          } catch (e) {
            ;(0, a.logError)(m + "Error while writing privacy info into local storage.", e)
          }
          return e
        }
      }
      async function E(e) {
        return new f.U9((t, n) => {
          if (window.id5Prebid) t()
          else
            try {
              ;(0, g.R)(e, "userId", "id5", t)
            } catch (e) {
              n(e)
            }
        })
      }
      function w(e) {
        return e && void 0 !== e.nbPage ? e.nbPage + 1 : 1
      }
      function I(e, t) {
        let n = e.tags
        n &&
          (t.params.gamTargetingPrefix &&
            ((window.googletag = window.googletag || { cmd: [] }),
            (window.googletag.cmd = window.googletag.cmd || []),
            window.googletag.cmd.push(() => {
              for (let e in n)
                window.googletag.setConfig({
                  targeting: { [t.params.gamTargetingPrefix + "_" + e]: n[e] },
                })
            })),
          t.params.exposeTargeting &&
            !(0, a.deepEqual)(window.id5tags?.tags, n) &&
            ((window.id5tags = window.id5tags || { cmd: [] }),
            (window.id5tags.cmd = window.id5tags.cmd || []),
            window.id5tags.cmd.forEach((e) => {
              setTimeout(() => e(n), 0)
            }),
            (window.id5tags.cmd.push = function (e) {
              ;(e(n), Array.prototype.push.call(window.id5tags.cmd, e))
            }),
            (window.id5tags.tags = n)))
      }
      function A(e) {
        let t = e && "boolean" == typeof e.gdprApplies && e.gdprApplies,
          n = (0, o.A)(e, "vendorData.purpose.consents.1"),
          r = (0, o.A)(e, "vendorData.vendor.consents.131")
        return !(t && (!n || !r))
      }
      function C(e, t) {
        if (e?.pbjs && (0, i.Qd)(e.pbjs)) return e.pbjs[t.partner]
      }
      ;((0, d.bz)("userId", {
        name: "id5Id",
        gvlid: 131,
        decode(e, t) {
          let n = C(e, t.params)
          return this._decodeResponse(n || e, t)
        },
        _decodeResponse(e, t) {
          let n, r
          if (e && void 0 !== e.ids) {
            let n = {},
              r = {}
            return (
              Object.entries(e.ids).forEach((e) => {
                let [t, i] = e,
                  o = i.eid,
                  a = o?.uids?.[0]
                ;((n[t] = { uid: a?.id, ext: a?.ext }),
                  (r[t] = function () {
                    return o
                  }))
              }),
              (this.eids = r),
              I(e, t),
              n
            )
          }
          let l = {}
          if (!e || "string" != typeof e.universal_uid) return
          ;((n = e.universal_uid), (l = e.ext || l), (r = e.publisherTrueLinkId), (this.eids = y))
          let d = { id5id: { uid: n, ext: l } }
          switch (
            ((0, i.Qd)(l.euid) &&
              (d.euid = { uid: l.euid.uids[0].id, source: l.euid.source, ext: { provider: h } }),
            r && (d.trueLinkId = { uid: r }),
            (0, o.A)(e, "ab_testing.result"))
          ) {
            case "control":
              ;((0, a.logInfo)(
                m + "A/B Testing - user is in the Control Group: ID5 ID is NOT exposed",
              ),
                (0, s.J)(d, "id5id.ext.abTestingControlGroup", !0))
              break
            case "error":
              ;(0, a.logError)(
                m + "A/B Testing ERROR! controlGroupPct must be a number >= 0 and <= 1",
              )
              break
            case "normal":
              ;((0, a.logInfo)(m + "A/B Testing - user is NOT in the Control Group"),
                (0, s.J)(d, "id5id.ext.abTestingControlGroup", !1))
          }
          return ((0, a.logInfo)(m + "Decoded ID", d), I(e, t), d)
        },
        getId: (e, t, n) =>
          !(function (e) {
            if (!e || !e.params || !e.params.partner)
              return ((0, a.logError)(m + "partner required to be defined"), !1)
            let t = e.params.partner
            if ("string" == typeof t || t instanceof String) {
              let n = parseInt(t)
              if (isNaN(n) || n < 0)
                return (
                  (0, a.logError)(
                    m +
                      "partner required to be a number or a String parsable to a positive integer",
                  ),
                  !1
                )
              e.params.partner = n
            } else if ("number" != typeof t)
              return (
                (0, a.logError)(
                  m + "partner required to be a number or a String parsable to a positive integer",
                ),
                !1
              )
            return e.storage && e.storage.type && e.storage.name
              ? (e.storage.name !== p &&
                  (0, a.logWarn)(m + `storage name recommended to be '${p}'.`),
                !0)
              : ((0, a.logError)(m + "storage required to be set"), !1)
          })(e)
            ? void 0
            : A(t?.gdpr)
              ? {
                  callback: function (r) {
                    new v(e, t?.gdpr, n, t?.usp, t?.gpp)
                      .execute()
                      .then((t) => {
                        var o, a, s
                        let l
                        r(
                          ((o = t),
                          (a = e.params),
                          (s = n),
                          (l = {}),
                          (0, i.Qd)(s) &&
                            (void 0 !== s.universal_uid || (0, i.Qd)(s.pbjs)) &&
                            Object.assign(l, (0, i.Go)(s)),
                          Object.assign(l, (0, i.Go)(o)),
                          (l.signature = o.signature),
                          (0, i.Qd)(l.pbjs) || (l.pbjs = {}),
                          (l.pbjs[a.partner] = (0, i.Go)(o)),
                          l),
                        )
                      })
                      .catch((e) => {
                        ;((0, a.logError)(m + "getId fetch encountered an error", e), r())
                      })
                  },
                }
              : void (0, a.logInfo)(
                  m + "Skipping ID5 local storage write because no consent given.",
                ),
        extendId(e, t, n) {
          if (!A(t?.gdpr))
            return (
              (0, a.logInfo)(
                m + "No consent given for ID5 local storage writing, skipping nb increment.",
              ),
              { id: n }
            )
          if (!C(n, e.params))
            return (
              (0, a.logInfo)(m + " refreshing ID.  Cached object does not have ID for partner", n),
              this.getId(e, t, n)
            )
          {
            ;(0, a.logInfo)(m + "using cached ID", n)
            let t = (0, i.Go)(n),
              r = C(t, e.params)
            return ((r.nbPage = w(r)), { id: t })
          }
        },
        primaryIds: ["id5id", "trueLinkId"],
        eids: y,
        _reset() {
          this.eids = y
        },
      }),
        (0, r.E)("id5IdSystem"))
    },
    63157: function (e, t, n) {
      "use strict"
      var r = n(76030),
        i = n(20335),
        o = n(10208),
        a = n(78068),
        s = n(31360),
        l = n(52345)
      let d = new Map()
      l.gH.before((e, t) => {
        ;(d.clear(), e(t))
      })
      let u = Object.freeze({ DESKTOP: 0, MOBILE: 1, TABLET: 2 })
      ;(Object.freeze({
        CHROME: 0,
        FIREFOX: 1,
        SAFARI: 2,
        EDGE: 3,
        INTERNET_EXPLORER: 4,
        OTHER: 5,
      }),
        Object.freeze({ WINDOWS: 0, MAC: 1, LINUX: 2, UNIX: 3, IOS: 4, ANDROID: 5, OTHER: 6 }))
      let c = "[Nexverse error]: ",
        f = "[Nexverse info]: ",
        g = "user_nexverse",
        p = { 3: "image", 1: "icon" },
        m = {
          1: "sponsoredBy",
          2: "body",
          3: "rating",
          4: "likes",
          5: "downloads",
          6: "price",
          7: "salePrice",
          8: "phone",
          9: "address",
          10: "body2",
          11: "displayUrl",
          12: "cta",
        }
      function h(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
          n[r - 1] = arguments[r]
        let i = n.map((e) => (e instanceof Error ? `${e.name}: ${e.message}` : e)).join(" "),
          o = `${{ error: c, warning: "[Nexverse warn]: ", info: f }[e] || f} ${i}${"info" === e ? "." : ""}`
        ;(({ error: s.logError, warning: s.logWarn, info: s.logInfo })[e] || s.logInfo)(o)
      }
      let b = (e) => {
          let t = e.getCookie(g)
          t || (t = (0, s.generateUUID)())
          try {
            let n = new Date(Date.now() + 31536e6)
            e.setCookie(g, t, n.toUTCString())
          } catch (e) {
            h("error", `Failed to set UID cookie: ${e.message}`)
          }
          return t
        },
        y = (e, t) => {
          let n = (0, o.fp)(e.getFloor)
            ? e.getFloor({ currency: "USD", mediaType: t, size: "*" })
            : {}
          return (0, o.Qd)(n) && !isNaN(n.floor)
            ? n.floor
            : e.params.bidFloor
              ? e.params.bidFloor
              : 0
        }
      var v = n(98349),
        E = n(41831),
        w = n(9655)
      let I = "nexverse",
        A = "https://rtb.nexverse.ai",
        C = (0, v.vM)({ moduleType: "userId", moduleName: I })
      ;((0, i.a$)({
        code: I,
        supportedMediaTypes: ["banner", "video", "native"],
        isBidRequestValid: function (e) {
          let t = !!(
            e.params &&
            e.params.uid &&
            e.params.uid.trim() &&
            e.params.pubId &&
            e.params.pubId.trim() &&
            e.params.pubEpid &&
            e.params.pubEpid.trim()
          )
          return (t || (0, s.logError)(`${c} Missing required bid parameters.`), t)
        },
        buildRequests: (e, t) =>
          e
            .map((e) => {
              let n = (function (e, t) {
                  let { uid: n, pubId: r, pubEpid: i } = t.params,
                    o = t.isDebug,
                    a = `${e}?uid=${encodeURIComponent(n)}&pub_id=${encodeURIComponent(r)}&pub_epid=${encodeURIComponent(i)}`
                  return (o && (a = `${a}&test=1`), a)
                })(A, e),
                r = (function (e, t) {
                  if (!e || !t)
                    return (h("error", "Missing required parameters for OpenRTB request."), null)
                  let n = [],
                    r = (0, w.o)(e),
                    i = 0
                  if (r) {
                    let e,
                      t =
                        (d.has(r) ? (e = d.get(r)) : ((e = r.getBoundingClientRect()), d.set(r, e)),
                        e),
                      { innerWidth: n, innerHeight: o } = (0, a.Ot)()
                    if (t && n && o) {
                      let e = Math.min(t.bottom, o) - Math.max(t.top, 0),
                        n = Math.min(t.right, o) - Math.max(t.left, 0)
                      e > 0 && n > 0 && (i = Math.round(((e * n) / (t.width * t.height)) * 100))
                    }
                  }
                  let l = [{ type: "viewability", value: i / 100, vendor: "nexverse.ai" }],
                    c = { gpid: e.adUnitCode }
                  if (e.mediaTypes.banner) {
                    let t = {
                      id: e.bidId,
                      banner: {
                        format: e.sizes.map((e) => ({ w: e[0], h: e[1] })),
                        w: e.sizes[0][0],
                        h: e.sizes[0][1],
                      },
                      secure: +("https:" === window.location.protocol),
                      metric: l,
                      ext: c,
                    }
                    ;((t.bidFloor = y(e, "banner")), n.push(t))
                  }
                  if (e.mediaTypes.video) {
                    let t = {
                      id: e.bidId,
                      video: {
                        w: e.sizes[0][0],
                        h: e.sizes[0][1],
                        mimes: e.mediaTypes.video.mimes || ["video/mp4"],
                        protocols: e.mediaTypes.video.protocols || [2, 3, 5, 6],
                        maxduration: e.mediaTypes.video.maxduration || 30,
                        linearity: e.mediaTypes.video.linearity || 1,
                        playbackmethod: e.mediaTypes.video.playbackmethod || [2],
                      },
                      secure: +("https:" === window.location.protocol),
                      metric: l,
                      ext: c,
                    }
                    ;((t.bidFloor = y(e, "video")), n.push(t))
                  }
                  if (e.mediaTypes.native) {
                    let t = {
                      id: e.bidId,
                      native: { request: JSON.stringify(e.mediaTypes.native) },
                      secure: +("https:" === window.location.protocol),
                      metric: l,
                      ext: c,
                    }
                    ;((t.bidFloor = y(e, "native")), n.push(t))
                  }
                  let f = +!!E.$W.getConfig("debug")
                  e.isDebug && (f = 1)
                  let g = parseInt(e.params.yob)
                  ;(0, o.Et)(g) || (g = null)
                  let p = e.params.gender || "",
                    m = e.params.keywords || "",
                    v = (() => {
                      let e = navigator.userAgent
                      if (/windows phone/i.test(e)) return { os: "Windows Phone", osv: void 0 }
                      if (/windows nt/i.test(e)) {
                        let t = e.match(/Windows NT ([\d.]+)/)
                        return { os: "Windows", osv: t?.[1] }
                      }
                      if (/android/i.test(e)) {
                        let t = e.match(/Android ([\d.]+)/)
                        return { os: "Android", osv: t?.[1] }
                      }
                      if (/iPad|iPhone|iPod/.test(e) && !window.MSStream) {
                        let t = e.match(/OS (\d+[_\d]*)/)
                        return { os: "iOS", osv: t?.[1]?.replace(/_/g, ".") }
                      }
                      if (/Mac OS X/.test(e)) {
                        let t = e.match(/Mac OS X (\d+[_.]\d+[_.]?\d*)/)
                        return { os: "Mac OS", osv: t?.[1]?.replace(/_/g, ".") }
                      }
                      return /Linux/.test(e)
                        ? { os: "Linux", osv: void 0 }
                        : { os: "Unknown", osv: void 0 }
                    })(),
                    I = {
                      id: t.auctionId ?? (0, s.generateUUID)(),
                      imp: n,
                      site: {
                        page: t.refererInfo.page,
                        domain: t.refererInfo.domain,
                        ref: t.refererInfo.ref || "",
                      },
                      device: {
                        ua: navigator.userAgent,
                        devicetype: /ipad|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(
                          navigator.userAgent.toLowerCase(),
                        )
                          ? u.TABLET
                          : /iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(
                                navigator.userAgent.toLowerCase(),
                              )
                            ? u.MOBILE
                            : u.DESKTOP,
                        os: v.os,
                        osv: v.osv,
                        make: navigator.vendor || "",
                        model: (function () {
                          let e = navigator.userAgent
                          if (/iPhone/i.test(e)) return "iPhone"
                          if (/iPad/i.test(e)) return "iPad"
                          if (/Android/i.test(e)) {
                            let t = e.match(/Android.*;\s([a-zA-Z0-9\s]+)\sBuild/)
                            return t ? t[1].trim() : "Unknown Android Device"
                          }
                          if (/Windows Phone/i.test(e)) return "Windows Phone"
                          if (/Macintosh/i.test(e)) return "Mac"
                          else if (/Linux/i.test(e)) return "Linux"
                          else if (/Windows/i.test(e)) return "Windows PC"
                          return ""
                        })(),
                        connectiontype: (function () {
                          let e,
                            t,
                            n = (t =
                              ((e =
                                "u" > typeof window && window.navigator
                                  ? window.navigator
                                  : "u" > typeof navigator
                                    ? navigator
                                    : null) &&
                                (e.connection || e.mozConnection || e.webkitConnection)) ||
                              null)
                              ? {
                                  type: t.type ?? null,
                                  effectiveType: t.effectiveType ?? null,
                                  downlink: "number" == typeof t.downlink ? t.downlink : null,
                                  downlinkMax:
                                    "number" == typeof t.downlinkMax ? t.downlinkMax : null,
                                  rtt: "number" == typeof t.rtt ? t.rtt : null,
                                  saveData: "boolean" == typeof t.saveData ? t.saveData : null,
                                  bandwidth: "number" == typeof t.bandwidth ? t.bandwidth : null,
                                }
                              : null
                          if (!n) return 0
                          switch (n.type) {
                            case "ethernet":
                              return 1
                            case "wifi":
                              return 2
                            case "wimax":
                              return 6
                            default:
                              switch (n.effectiveType) {
                                case "slow-2g":
                                case "2g":
                                  return 4
                                case "3g":
                                  return 5
                                case "4g":
                                  return 6
                                case "5g":
                                  return 7
                                default:
                                  return 3 * ("cellular" === n.type)
                              }
                          }
                        })(),
                        geo: { lat: e.params.geoLat || 0, lon: e.params.geoLon || 0 },
                        language: navigator.language || "en",
                        dnt: 0,
                      },
                      user: {
                        id: b(C),
                        buyeruid: t.userId || "",
                        yob: g,
                        gender: p,
                        keywords: m,
                        ext: { consent: t.gdprConsent ? t.gdprConsent.consentString : null },
                      },
                      regs: { ext: { gdpr: t.gdprConsent ? +!!t.gdprConsent.gdprApplies : 0 } },
                      ext: { prebid: { auctiontimestamp: t.auctionStart } },
                      test: f,
                    }
                  return (
                    t.app &&
                      (I.app = {
                        id: t.app.id,
                        name: t.app.name,
                        bundle: t.app.bundle,
                        domain: t.app.domain,
                        storeurl: t.app.storeUrl,
                        cat: t.app.cat || [],
                      }),
                    t.uspConsent && (I.regs.ext.us_privacy = t.uspConsent),
                    I
                  )
                })(e, t)
              return r
                ? { method: "POST", url: n, data: JSON.stringify(r), bidRequest: e }
                : (h("error", "Payload could not be built."), null)
            })
            .filter((e) => null !== e),
        interpretResponse(e, t) {
          if (e && 204 === e.status) return (h("info", "No ad available (204 response)."), [])
          let n = [],
            r = e.body
          return (
            r && r.seatbid && (0, o.cy)(r.seatbid)
              ? r.seatbid.forEach((e) => {
                  e.bid.forEach((e) => {
                    let t = {
                      requestId: e.impid,
                      cpm: e.price,
                      currency: r.cur || "USD",
                      width: e.w || 0,
                      height: e.h || 0,
                      creativeId: e.crid || e.id,
                      ttl: 300,
                      netRevenue: !0,
                      meta: {},
                    }
                    ;(e.ext && e.ext.mediaType
                      ? (t.mediaType = e.ext.mediaType)
                      : e.adm && -1 !== e.adm.indexOf("<VAST")
                        ? ((t.mediaType = "video"), (t.vastXml = e.adm))
                        : e.adm && -1 !== e.adm.indexOf('"native"')
                          ? ((t.mediaType = "native"),
                            (t.native = (function (e) {
                              try {
                                let t = JSON.parse(e)
                                if (!t || !t.native) return {}
                                let { assets: n, link: r, imptrackers: i, jstracker: a } = t.native,
                                  l = {
                                    clickUrl: r && r.url ? r.url : "",
                                    clickTrackers:
                                      r && r.clicktrackers && (0, o.cy)(r.clicktrackers)
                                        ? r.clicktrackers
                                        : [],
                                    impressionTrackers: i && (0, o.cy)(i) ? i : [],
                                    javascriptTrackers: a && (0, o.cy)(a) ? a : [],
                                  }
                                return (
                                  (0, o.cy)(n) &&
                                    n.forEach((e) => {
                                      ;(0, s.isEmpty)(e.title) || (0, s.isEmpty)(e.title.text)
                                        ? (0, s.isEmpty)(e.img)
                                          ? (0, s.isEmpty)(e.data) ||
                                            (l[m[e.data.type]] = e.data.value)
                                          : (l[p[e.img.type]] = {
                                              url: e.img.url,
                                              height: e.img.h,
                                              width: e.img.w,
                                            })
                                        : (l.title = e.title.text)
                                    }),
                                  l
                                )
                              } catch (e) {
                                return (
                                  h("error", "Error parsing native response: ", e),
                                  (0, s.logError)(`${c} Error parsing native response: `, e),
                                  {}
                                )
                              }
                            })(e.adm)))
                          : ((t.mediaType = "banner"), (t.ad = e.adm || "")),
                      e.adomain && (0, o.cy)(e.adomain)
                        ? (t.meta.advertiserDomains = e.adomain)
                        : (t.meta.advertiserDomains = e.bundle),
                      e.attr && (0, o.cy)(e.attr) ? (t.meta.attr = e.attr) : (t.meta.attr = []),
                      (t.meta.primaryCatId = e.cat),
                      (t.meta.secondaryCatIds = e.cat.slice(1)),
                      e.nurl && (t.nurl = e.nurl),
                      n.push(t))
                  })
                })
              : h("warning", "No valid bids in the response."),
            n
          )
        },
        getUserSyncs: (e, t, n, r, i) => {
          let o = e.iframeEnabled ? "iframe" : "image",
            a = A + `/${o}?pbjs=1`
          ;(n &&
            n.consentString &&
            ("boolean" == typeof n.gdprApplies
              ? (a += `&gdpr=${Number(n.gdprApplies)}&gdpr_consent=${n.consentString}`)
              : (a += `&gdpr=0&gdpr_consent=${n.consentString}`)),
            r && r.consentString && (a += `&ccpa_consent=${r.consentString}`),
            i?.gppString &&
              i?.applicableSections?.length &&
              (a += "&gpp=" + i.gppString + "&gpp_sid=" + i.applicableSections.join(",")))
          let s = +!!E.$W.getConfig("coppa")
          return [{ type: o, url: (a += `&coppa=${s}&uid=${b(C)}`) }]
        },
      }),
        (0, r.E)("nexverseBidAdapter"))
    },
    49417: function (e, t, n) {
      "use strict"
      var r = n(76030),
        i = n(31360),
        o = n(27426),
        a = n(98349),
        s = n(98875)
      let l = (0, a.vM)({ moduleType: "userId", moduleName: "sharedId" }),
        d = "cookie",
        u = "html5",
        c = "_pubcid_optout",
        f = "PublisherCommonId"
      function g(e, t) {
        if (t === d) return l.getCookie(e)
        if (t === u && l.hasLocalStorage()) {
          let t = l.getDataFromLocalStorage(`${e}_exp`)
          if (!t || new Date(t).getTime() - Date.now() > 0) return l.getDataFromLocalStorage(e)
        }
      }
      function p(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = arguments.length > 2 ? arguments[2] : void 0
        if (!e) return
        let r = (0, i.parseUrl)(e)
        r.search.id = encodeURIComponent("pubcid:" + t)
        let o = (0, i.buildUrl)(r)
        return function () {
          ;(0, i.triggerPixel)(o, n)
        }
      }
      function m() {
        return !!((l.cookiesAreEnabled() && g(c, d)) || (l.hasLocalStorage() && g(c, u)))
      }
      let h = {
        name: "sharedId",
        aliasName: "pubCommonId",
        gvlid: s.B1,
        disclosureURL: "local://prebid/sharedId-optout.json",
        decode: (e, t) =>
          m()
            ? void (0, i.logInfo)("PubCommonId decode: Has opted-out")
            : ((0, i.logInfo)(" Decoded value PubCommonId " + e), { pubcid: e }),
        getId: function () {
          var e
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = arguments.length > 1 ? arguments[1] : void 0,
            r = arguments.length > 2 ? arguments[2] : void 0
          if (m()) return void (0, i.logInfo)("PubCommonId: Has opted-out")
          if (n?.coppa)
            return void (0, i.logInfo)(
              "PubCommonId: IDs not provided for coppa requests, exiting PubCommonId",
            )
          let { params: { create: o = !0, pixelUrl: a } = {} } = t,
            s = r
          if (!s) {
            try {
              "object" == typeof window[f] && (s = window[f].getId())
            } catch (e) {}
            s || (s = o && (0, i.hasDeviceAccess)() ? (0, i.generateUUID)() : void 0)
          }
          return {
            id: s,
            callback:
              ((e = s),
              function (t, n) {
                a
                  ? p(a, e, () => {
                      t(n() || e)
                    })()
                  : t(e)
              }),
          }
        },
        extendId: function () {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = arguments.length > 2 ? arguments[2] : void 0
          if (m()) return ((0, i.logInfo)("PubCommonId: Has opted-out"), { id: void 0 })
          if (t?.coppa)
            return void (0, i.logInfo)(
              "PubCommonId: IDs not provided for coppa requests, exiting PubCommonId",
            )
          let { params: { extend: r = !1, pixelUrl: o } = {} } = e
          if (r)
            if (o) return { callback: p(o, n) }
            else return { id: n }
        },
        domainOverride: function () {
          let e = document.domain.split("."),
            t = `_gd${Date.now()}_sharedId`
          for (let n = 0, r, i; n < e.length; n++) {
            let o = e.slice(n).join(".")
            if (
              (l.setCookie(t, "1", void 0, void 0, o),
              (i = l.getCookie(t)),
              l.setCookie(t, "", "Thu, 01 Jan 1970 00:00:01 GMT", void 0, o),
              "1" !== i)
            )
              return r
            r = o
          }
        },
        eids: {
          pubcid(e, t) {
            let n = { source: "pubcid.org", uids: e.map((e) => ({ id: e, atype: 1 })) }
            return (t?.params?.inserter != null && (n.inserter = t.params.inserter), n)
          },
        },
      }
      ;((0, o.bz)("userId", h), (0, r.E)("sharedIdSystem"))
    },
    49658: function (e, t, n) {
      "use strict"
      let r, i, o, a, s, l
      var d = n(76030),
        u = n(41831)
      let c =
        ((i = {}),
        (o = {}),
        (a = {}),
        (s = {
          register(e, t) {
            ;(Array.isArray(t.components) &&
              (a.hasOwnProperty(e) || (a[e] = []),
              t.components.forEach((t) => {
                ;(i.hasOwnProperty(t.componentType) || (i[t.componentType] = {}),
                  (i[t.componentType][t.componentName] = t),
                  a[e].push([t.componentType, t.componentName]))
              })),
              t.disclosures && Object.assign(o, t.disclosures))
          },
          getMetadata: (e, t) => i?.[e]?.[t],
          getStorageDisclosure: (e) => o?.[e],
          getModuleMetadata(e) {
            let t = (a[e] ?? []).map((e) => {
              let [t, n] = e
              return s.getMetadata(t, n)
            })
            return 0 === t.length
              ? null
              : {
                  disclosures: Object.fromEntries(
                    t
                      .filter((e) => {
                        let { disclosureURL: t } = e
                        return null != t
                      })
                      .map((e) => {
                        let { disclosureURL: t } = e
                        return [t, s.getStorageDisclosure(t)]
                      }),
                  ),
                  components: t,
                }
          },
        }))
      var f = n(67085),
        g = n(98349),
        p = n(31360),
        m = n(39248),
        h = n(37830),
        b = n(52345)
      let y = "strict"
      function v(e) {
        return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
      }
      function E(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c,
          n = [],
          r = {},
          i = t.getMetadata(e[f.Dk], e[f.iK])
        if (!i) return null
        if (((r[e[f.iK]] = i.disclosureURL), i.aliasOf)) {
          let n = t.getMetadata(e[f.Dk], i.aliasOf)
          n && (r[i.aliasOf] = n.disclosureURL)
        }
        return (
          Object.entries(r).forEach((r) => {
            let [i, o] = r
            t.getStorageDisclosure(o)
              ?.disclosures?.filter(
                (t) =>
                  !!["cookie", "web"].includes(t.type) &&
                  ("cookie" !== t.type || e[f.Zw] === g.X0) &&
                  ("web" !== t.type || e[f.Zw] === g.qk) &&
                  RegExp(`^${t.identifier.split("*").map(v).join(".*?")}$`).test(e[f.Ez]),
              )
              ?.forEach((e) => {
                n.push({ [f.iK]: i, disclosureURL: o, disclosure: e })
              })
          }),
          { matches: n, disclosureURLs: r }
        )
      }
      function w(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E,
          n = !1,
          r = !1,
          i = null,
          o = e[f.Ez],
          a = e[f.Ii]
        if (o) {
          let s = t(e)
          if (null == s)
            i = `Cannot determine if storage key "${o}" is disclosed by "${a}" because the necessary metadata is missing - was it included in the build?`
          else {
            let { disclosureURLs: t, matches: l } = s,
              d = e[f.iK]
            for (let { componentName: e } of l)
              if (
                (e === d
                  ? (n = !0)
                  : ((r = !0),
                    (i = `Storage key "${o}" is disclosed by module "${e}", but not by "${d}" itself (the latter is an alias of the former)`)),
                n || r)
              )
                break
            n ||
              r ||
              ((i = `Storage key "${o}" (for ${e[f.Zw]} storage) is not disclosed by "${a}"`),
              t[d]
                ? (i += ` @ ${t[d]}`)
                : (i += " - no disclosure URL was provided, or it could not be retrieved"))
          }
        } else n = null
        return { disclosed: n, parent: r, reason: i }
      }
      ;((0, m.qB)(
        h.Ue,
        "storageControl",
        (function () {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => r,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w
          return function (n) {
            let { disclosed: r, parent: i, reason: o } = t(n)
            if (null !== r && !r) {
              let t = e() ?? y
              if (t === y || ("allowAliases" === t && !i)) return { allow: !1, reason: o }
              o && (0, p.logWarn)("storageControl:", o)
            }
          }
        })(),
      ),
        u.$W.getConfig("storageControl", (e) => {
          r = e?.storageControl?.enforcement ?? y
        }))
      let { hook: I, getDisclosures: A } =
        ((l = {}),
        {
          hook(e, t, n) {
            var r
            let i,
              o = `${n.type}::${n.identifier}`
            ;(l.hasOwnProperty(o) || (l[o] = { disclosedBy: [], ...n }),
              Object.assign(
                l[o],
                ((r = l[o]),
                (i = {
                  ...r,
                  purposes: (r.purposes ?? []).concat(n.purposes ?? []).filter(p.uniques),
                }),
                "cookie" === r.type &&
                  ((null != r.maxAgeSeconds || null != n.maxAgeSeconds) &&
                    (i.maxAgeSeconds =
                      (r.maxAgeSeconds ?? 0) > (n.maxAgeSeconds ?? 0)
                        ? r.maxAgeSeconds
                        : n.maxAgeSeconds),
                  (null != r.cookieRefresh || null != n.cookieRefresh) &&
                    (i.cookieRefresh = r.cookieRefresh || n.cookieRefresh)),
                i),
              ),
              l[o].disclosedBy.includes(t) || l[o].disclosedBy.push(t),
              e(t, n))
          },
          getDisclosures: () => Object.values(l),
        })
      g.p6.before(I)
      let C = (function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A,
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : () => {
                  var e, t
                  let n
                  return (
                    (e = (0, d.m)().installedModules),
                    (t = c.getModuleMetadata),
                    (n = {}),
                    e.forEach((e) => {
                      let r = t(e)?.disclosures
                      r &&
                        Object.entries(r).forEach((t) => {
                          let [r, { disclosures: i }] = t
                          n.hasOwnProperty(r)
                            ? n[r].forEach((t) => {
                                let { disclosedBy: n } = t
                                return n.push(e)
                              })
                            : i?.length > 0 &&
                              (n[r] = i.map((t) => ({ disclosedIn: r, disclosedBy: [e], ...t })))
                        })
                    }),
                    [].concat(...Object.values(n))
                  )
                }
        return function () {
          return [].concat(
            e().map((e) => ({ disclosedIn: null, ...e })),
            t(),
          )
        }
      })()
      ;((0, b.xu)("getStorageUseDisclosures", C), (0, d.E)("storageControl"))
    },
    89773: function (e, t, n) {
      "use strict"
      let r, i, o
      var a = n(76030),
        s = n(31360),
        l = n(17958),
        d = n(41831),
        u = n(16155),
        c = n(98875),
        f = n(62504),
        g = n(57788),
        p = n(71318),
        m = n(67085),
        h = n(39248),
        b = n(37830),
        y = n(86451)
      let v = { purpose: {}, feature: {} },
        E = { purpose: !1, feature: "specialFeatureOptins" },
        w = {
          storage: {
            type: "purpose",
            default: {
              purpose: "storage",
              enforcePurpose: !0,
              enforceVendor: !0,
              vendorExceptions: [],
            },
            id: 1,
          },
          basicAds: {
            type: "purpose",
            id: 2,
            default: {
              purpose: "basicAds",
              enforcePurpose: !0,
              enforceVendor: !0,
              vendorExceptions: [],
              deferS2Sbidders: !1,
            },
          },
          personalizedAds: {
            type: "purpose",
            id: 4,
            default: {
              purpose: "personalizedAds",
              enforcePurpose: !0,
              enforceVendor: !0,
              vendorExceptions: [],
              eidsRequireP4Consent: !1,
            },
          },
          measurement: {
            type: "purpose",
            id: 7,
            default: {
              purpose: "measurement",
              enforcePurpose: !0,
              enforceVendor: !0,
              vendorExceptions: [],
            },
          },
          transmitPreciseGeo: {
            type: "feature",
            id: 1,
            default: {
              purpose: "transmitPreciseGeo",
              enforcePurpose: !0,
              enforceVendor: !0,
              vendorExceptions: [],
            },
          },
        },
        I = new Set(),
        A = new Set(),
        C = new Set(),
        S = new Set(),
        O = new Set(),
        T = new Set(),
        D = !1,
        k = !1,
        $ = ["bidder", "userId", p.T, "rtd"],
        B = "TCF2",
        R = [],
        U = [2],
        x = [2, 7, 9, 10]
      function j(e, t, n, r) {
        let i = (0, l.A)(e, `vendorData.${t}`)
        return !!i?.consents?.[n] || (r && !!i?.legitimateInterests?.[n])
      }
      function _(e, t, n, r) {
        let i
        if (!1 !== E[t]) i = !!(0, l.A)(e, `vendorData.${E[t]}.${n}`)
        else {
          let [t, o] = r === c.B1 ? ["publisher", x] : ["purpose", U]
          i = j(e, t, n, o.includes(n))
        }
        return { purpose: i, vendor: j(e, "vendor", r, U.includes(n)) }
      }
      function P(e, t, n, r) {
        let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
          o = w[e.purpose]
        if ((e.vendorExceptions || []).includes(n)) return !0
        let a = e.enforceVendor && !(r === c.B1 || (e.softVendorExceptions || []).includes(n)),
          s = i.isS2S && "basicAds" === e.purpose && e.deferS2Sbidders && !r,
          { purpose: l, vendor: d } = _(t, o.type, o.id, r)
        return (!e.enforcePurpose || l) && (!a || s || d)
      }
      function q(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => null
        return function (i) {
          let o = c.mW.getConsentData(),
            a = i[m.iK]
          if (
            null == o && c.mW.enabled
              ? ((0, s.logWarn)(
                  `Attempting operation that requires purpose ${e} consent while consent data is not available${a ? ` (module: ${a})` : ""}. Assuming no consent was given.`,
                ),
                !0)
              : o && o.gdprApplies
          ) {
            let e = (function (e, t, n) {
                if (t) {
                  let r = d.$W.getConfig("gvlMapping")
                  if (r && r[t]) return r[t]
                  {
                    if ("prebid" === e) return c.B1
                    let { gvlid: r, modules: i } = c.o2.get(t)
                    if (null == r && Object.keys(i).length > 0) {
                      for (let n of $)
                        if (i.hasOwnProperty(n)) {
                          ;((r = i[n]),
                            n !== e &&
                              (0, s.logWarn)(
                                `Multiple GVL IDs found for module '${t}'; using the ${n} module's ID (${r}) instead of the ${e}'s ID (${i[e]})`,
                              ))
                          break
                        }
                    }
                    return (null == r && n && (r = n()), r || null)
                  }
                }
                return null
              })(i[m.Dk], a, r(i)),
              l = !!t(o, a, e, i)
            if (!l) return (n && n.add(a), { allow: l })
          }
        }
      }
      function N(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null
        return q(e, (t, n, r, i) => !!P(v.purpose[e], t, n, r, i), t, n)
      }
      function W(e) {
        return function (t) {
          if ("prebid" !== t[m.Dk]) return e(t)
        }
      }
      let M =
          ((r = N(1, I)),
          function (e) {
            if ("prebid" !== e[m.Dk] || k) return r(e)
          }),
        L = N(1, I),
        F = N(1, I),
        G = W(N(2, A)),
        z = N(7, C, (e) =>
          (function (e, t) {
            let n = u.Ay.getAnalyticsAdapter(e)
            var r = n?.adapter?.gvlid
            if ("function" != typeof r) return r
            try {
              return r.call(n.adapter, t)
            } catch (t) {
              ;(0, s.logError)(`Error invoking ${e} adapter.gvlid()`, t)
            }
          })(e[m.iK], e[m.TQ]),
        ),
        H = N(4, S),
        V = W(
          ((i = q(
            "2-10",
            function (e, t, n) {
              for (let r = 2; r <= 10; r++) {
                if (v.purpose[r]?.vendorExceptions?.includes(t)) return !0
                let { purpose: i, vendor: o } = _(e, "purpose", r, n)
                if (i && (o || v.purpose[r]?.softVendorExceptions?.includes(t))) return !0
              }
              return !1
            },
            O,
          )),
          (o = N(4, O)),
          function () {
            let e = v.purpose[4]?.eidsRequireP4Consent ? o : i
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r]
            return e.apply(this, n)
          }),
        ),
        J = q("Special Feature 1", (e, t, n) => P(v.feature[1], e, t, n), T)
      function K(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 ? arguments[2] : void 0,
          r = arguments.length > 3 ? arguments[3] : void 0
        if (!t.withCredentials || (n && r)) return void e(t)
        let i = c.mW.getConsentData(),
          o = v.purpose[1],
          a = w[o.purpose],
          { purpose: l } = _(i, a.type, a.id, null)
        ;(!l &&
          o.enforcePurpose &&
          ((t.withCredentials = !1), (0, s.logWarn)(`${B} denied ${b.yg}`)),
          e(t))
      }
      ;(f.on(g.qY.AUCTION_END, function () {
        let e = function (e) {
            return Array.from(e.keys()).filter((e) => null != e)
          },
          t = {
            storageBlocked: e(I),
            biddersBlocked: e(A),
            analyticsBlocked: e(C),
            ufpdBlocked: e(S),
            eidsBlocked: e(O),
            geoBlocked: e(T),
          }
        ;(f.Ic(g.qY.TCF2_ENFORCEMENT, t), [I, A, C, S, O, T].forEach((e) => e.clear()))
      }),
        d.$W.getConfig("consentManagement", (e) => {
          var t
          let n
          return (
            (t = e.consentManagement),
            void (!(n = (0, l.A)(t, "gdpr.rules")) &&
              (0, s.logWarn)("TCF2: enforcing P1 and P2 by default"),
            (n = Object.fromEntries((n || []).map((e) => [e.purpose, e]))),
            (k = !!(0, l.A)(t, "strictStorageEnforcement")),
            Object.entries(w).forEach((e) => {
              let [t, r] = e
              v[r.type][r.id] = n[t] ?? r.default
            }),
            !D &&
              (null != v.purpose[1] &&
                ((D = !0),
                R.push((0, h.qB)(b.Ue, B, M)),
                R.push((0, h.qB)(b.Ml, B, L)),
                R.push((0, h.qB)(b.yl, B, F)),
                y.p3.after(K)),
              null != v.purpose[2] && R.push((0, h.qB)(b.uc, B, G)),
              null != v.purpose[4] && R.push((0, h.qB)(b.DL, B, H), (0, h.qB)(b.qX, B, H)),
              null != v.purpose[7] && R.push((0, h.qB)(b.mo, B, z)),
              null != v.feature[1] && R.push((0, h.qB)(b.hE, B, J)),
              R.push((0, h.qB)(b.hq, B, V))))
          )
        }),
        (0, a.E)("tcfControl"))
    },
    67248: function (e, t, n) {
      "use strict"
      let r, i, o, a, s, l, d, u
      var c = n(76030),
        f = n(41831),
        g = n(62504),
        p = n(52345),
        m = n(16155),
        h = n(57788),
        b = n(27426),
        y = n(10208),
        v = n(31360)
      let E = new Map()
      function w(e) {
        let t = new Map(),
          n = {}
        return (
          Object.entries(e).forEach((e) => {
            let [r, i] = e,
              o = i()
            if (o) {
              let e
              n[r] = o.idObj[r]
              let i = o.submodule.eids?.[r]
              ;("function" == typeof i &&
                ((e = i),
                (i = function () {
                  for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
                    n[r] = arguments[r]
                  return e(...n, o.config)
                })),
                t.set(r, i))
            }
          }),
          (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E,
              n = {}
            function r(e) {
              let t = JSON.stringify([
                e.source?.toLowerCase(),
                ...Object.keys(e)
                  .filter((e) => !["uids", "source"].includes(e))
                  .sort()
                  .map((t) => e[t]),
              ])
              n.hasOwnProperty(t) ? n[t].uids.push(...e.uids) : (n[t] = e)
            }
            return (
              Object.entries(e).forEach((e) => {
                let n,
                  [i, o] = e
                o = Array.isArray(o) ? o : [o]
                let a = t.get(i)
                if ("pubProvidedId" === i) n = (0, y.Go)(o)
                else if ("function" == typeof a)
                  try {
                    ;((n = (0, y.Go)(a(o))),
                      Array.isArray(n) || (n = [n]),
                      n.forEach((e) => {
                        e.uids = e.uids.filter((e) => {
                          let { id: t } = e
                          return (0, y.O8)(t)
                        })
                      }),
                      (n = n.filter((e) => {
                        let { uids: t } = e
                        return t?.length > 0
                      })))
                  } catch (e) {
                    ;(0, v.logError)(`Could not generate EID for "${i}"`, e)
                  }
                else
                  n = o.map((e) =>
                    (function (e, t, n) {
                      if (n && e) {
                        let t = {}
                        t.source = (0, y.fp)(n.getSource) ? n.getSource(e) : n.source
                        let r = (0, y.fp)(n.getValue) ? n.getValue(e) : e
                        if ((0, y.O8)(r)) {
                          let i = { id: r, atype: n.atype }
                          if ((0, y.fp)(n.getUidExt)) {
                            let t = n.getUidExt(e)
                            t && (i.ext = t)
                          }
                          if (((t.uids = [i]), n.inserter || (0, y.fp)(n.getInserter))) {
                            let r = (0, y.fp)(n.getInserter) ? n.getInserter(e) : n.inserter
                            null != r && (t.inserter = r)
                          }
                          if (n.matcher || (0, y.fp)(n.getMatcher)) {
                            let r = (0, y.fp)(n.getMatcher) ? n.getMatcher(e) : n.matcher
                            null != r && (t.matcher = r)
                          }
                          if ((null != n.mm && (t.mm = n.mm), (0, y.fp)(n.getEidExt))) {
                            let r = n.getEidExt(e)
                            r && (t.ext = r)
                          }
                          return t
                        }
                      }
                      return null
                    })(e, 0, a),
                  )
                Array.isArray(n) && n.filter((e) => null != e).forEach(r)
              }),
              Object.values(n)
            )
          })(n, t)
        )
      }
      var I = n(98349),
        A = n(67166)
      let C = (0, b.A_)("sync", () => void 0)
      var S = n(16886),
        O = n(9423),
        T = n(95654),
        D = n(98875),
        k = n(39248),
        $ = n(37830),
        B = n(25260),
        R = n(74689),
        U = n(67085),
        x = n(7729)
      let j = "User ID",
        _ = I.X0,
        P = I.qk,
        q = "_pbjs_id_optout",
        N = (0, I.CK)("userId"),
        W = { isAllowed: k.io },
        M = [],
        L = [],
        F = {},
        G = [],
        z = () => (null == u && (u = (0, O.K7)()), u)
      function H(e) {
        return z()
          .fork()
          .renameWith((t) => [`userId.mod.${t}`, `userId.mods.${e}.${t}`])
      }
      function V(e, t) {
        t = t || e.storageMgr
        let n =
            "function" == typeof e.submodule.domainOverride ? e.submodule.domainOverride() : null,
          r = e.config.storage.name
        return function (e, i, o) {
          t.setCookie(r + (e || ""), i, o, "Lax", n)
        }
      }
      function J(e, t) {
        let n = e.config.storage
        try {
          let r = new Date(Date.now() + 864e5 * n.expires).toUTCString(),
            i = (0, y.Qd)(t) ? JSON.stringify(t) : t
          e.enabledStorageTypes.forEach((t) => {
            switch (t) {
              case _:
                let n, o
                ;((n = e.config.storage),
                  (o = V(e))(null, i, r),
                  o("_cst", ep(), r),
                  "number" == typeof n.refreshInSeconds && o("_last", new Date().toUTCString(), r))
                break
              case P:
                let a, s
                ;((a = e.config.storage),
                  (s = e.storageMgr).setDataInLocalStorage(`${a.name}_exp`, r),
                  s.setDataInLocalStorage(`${a.name}_cst`, ep()),
                  s.setDataInLocalStorage(a.name, encodeURIComponent(i)),
                  "number" == typeof a.refreshInSeconds &&
                    s.setDataInLocalStorage(`${a.name}_last`, new Date().toUTCString()))
            }
          })
        } catch (e) {
          ;(0, v.logError)(e)
        }
      }
      let K = ["", "_last", "_cst"],
        Q = ["", "_last", "_exp", "_cst"]
      function Y(e) {
        let t,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
          r = e.config.storage,
          i = n ? `${r.name}_${n}` : r.name
        try {
          ;(e.enabledStorageTypes.find((n) => {
            switch (n) {
              case _:
                t = e.storageMgr.getCookie(i)
                break
              case P:
                let r, o, a
                ;((r = e.storageMgr),
                  (o = e.config.storage),
                  (a = r.getDataFromLocalStorage(`${o.name}_exp`)),
                  (t =
                    "" === a
                      ? r.getDataFromLocalStorage(i)
                      : a && new Date(a).getTime() - Date.now() > 0
                        ? decodeURIComponent(r.getDataFromLocalStorage(i))
                        : void 0))
            }
            return !!t
          }),
            "string" == typeof t && "{" === t.trim().charAt(0) && (t = JSON.parse(t)))
        } catch (e) {
          ;(0, v.logError)(e)
        }
        return t
      }
      function X(e, t, n) {
        t = z().fork().startTiming("userId.callbacks.total").stopBefore(t)
        let r = (0, v.delayExecution)(() => {
          ;(clearTimeout(i), t())
        }, e.length)
        e.forEach(function (e) {
          let t = H(e.submodule.name).startTiming("callback").stopBefore(r)
          try {
            e.callback(
              function (r) {
                ;(r
                  ? (e.config.storage && J(e, r),
                    (e.idObj = e.submodule.decode(r, e.config)),
                    n.refresh(),
                    em(n))
                  : (0, v.logInfo)(
                      `${j}: ${e.submodule.name} - request id responded with an empty value`,
                    ),
                  t())
              },
              Y.bind(null, e),
            )
          } catch (n) {
            ;((0, v.logError)(`Error in userID module '${e.submodule.name}':`, n), t())
          }
          e.callback = void 0
        })
      }
      function Z(e, t, n) {
        let r = {}
        return (
          e.forEach((e) => {
            let i = n(e),
              o = (function (e) {
                if (e.primaryIds) return e.primaryIds
                let t = Object.keys(e.eids ?? {})
                if (t.length > 1)
                  throw Error(
                    `ID submodule ${e.name} can provide multiple IDs, but does not specify 'primaryIds'`,
                  )
                return t
              })(i)
            t(e).forEach((t) => {
              let n = (r[t] = r[t] ?? []),
                a = F[t]?.indexOf(i.name) ?? (o.includes(t) ? 0 : -1),
                s = n.findIndex((e) => {
                  let [t] = e
                  return t < a
                })
              n.splice(-1 === s ? n.length : s, 0, [a, e])
            })
          }),
          Object.fromEntries(
            Object.entries(r).map((e) => {
              let [t, n] = e
              return [
                t,
                n.map((e) => {
                  let [t, n] = e
                  return n
                }),
              ]
            }),
          )
        )
      }
      let ee = {}
      function et() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ea() || [],
          t = s && e.find((e) => e.source === s)
        if (t && "string" == typeof t?.uids?.[0]?.id) {
          let e = t.uids[0].id.replace(/[\W_]/g, "")
          if (e.length >= 32 && e.length <= 150) return e
          ;(0, v.logWarn)(
            `User ID - Googletag Publisher Provided ID for ${s} is not between 32 and 150 characters - ${e}`,
          )
        }
      }
      let en = (0, O.Ak)("userId", function (e, t) {
        let { mkDelay: n = S.cb, getIds: i = eg } =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
        S.U9.race([i().catch(() => null), n(a)]).then(() => {
          ;(!(function (e) {
            let { ortb2Fragments: t } = e
            !(function (e) {
              let { global: t, bidder: n } = e,
                { global: i, bidder: o } = r,
                a = w(i)
              ;(a.length > 0 && (0, A.J)(t, "user.ext.eids", (t.user?.ext?.eids ?? []).concat(a)),
                Object.entries(o).forEach((e) => {
                  let [t, r] = e,
                    i = w(r)
                  i.length > 0 &&
                    (0, A.J)(n, `${t}.user.ext.eids`, (n[t]?.user?.ext?.eids ?? []).concat(i))
                }))
            })((t = t ?? { global: {}, bidder: {} }))
          })(t),
            z().join((0, O.BO)(t.metrics), { propagate: !1, includeGroups: !0 }),
            e.call(this, t))
        })
      })
      function er(e, t) {
        ;(t.forEach((e) => {
          e.bids.forEach((t) =>
            Object.defineProperty(t, "userIdAsEids", {
              configurable: !0,
              get: () => e.ortb2.user?.ext?.eids ?? [],
            }),
          )
        }),
          e(t))
      }
      function ei(e, t) {
        let n = {},
          r = t.getFPD()?.global?.user?.ext?.eids ?? []
        ;(t
          .getAdUnits()
          .flatMap((e) => e.bids)
          .forEach((e) => {
            var i
            let o =
              null == (i = e.bidder)
                ? r
                : (n.hasOwnProperty(i) ||
                    (n[i] = (0, v.mergeDeep)(
                      { eids: [] },
                      { eids: r },
                      { eids: t.getFPD()?.bidder?.[i]?.user?.ext?.eids ?? [] },
                    ).eids),
                  n[i])
            o.length > 0 && (e.userIdAsEids = o)
          }),
          e(t))
      }
      function eo() {
        return Object.fromEntries(
          Object.entries(r.combined)
            .map((e) => {
              let [t, n] = e
              return [t, n()?.idObj?.[t]]
            })
            .filter((e) => {
              let [t, n] = e
              return null != n
            }),
        )
      }
      function ea() {
        return w(r.combined)
      }
      function es(e) {
        return ea().filter((t) => t.source === e)[0]
      }
      function el(e, t, n) {
        return ec().then(() => {
          let r = {}
          if ((0, y.fp)(n)) {
            ;(0, v.logInfo)(
              `${j} - Getting encrypted signal from custom function : ${n.name} & source : ${e} `,
            )
            let t = n(e)
            r[e] = t ? ed(t) : null
          } else {
            let n = es(e)
            ;((0, v.logInfo)(`${j} - Getting encrypted signal for eids :${JSON.stringify(n)}`),
              (0, v.isEmpty)(n) || (r[n.source] = !0 === t ? ed(n) : n.uids[0].id))
          }
          return ((0, v.logInfo)(`${j} - Fetching encrypted eids: ${r[e]}`), r[e])
        })
      }
      function ed(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          n = ""
        return (
          1 === t && (n = "object" == typeof e ? window.btoa(JSON.stringify(e)) : window.btoa(e)),
          `${t}||${n}`
        )
      }
      function eu() {
        if (!(0, v.isGptPubadsDefined)()) return
        let e = f.$W.getConfig("userSync.encryptedSignalSources")
        e
          ? setTimeout(() => {
              e.sources &&
                e.sources.forEach((e) => {
                  let { source: t, encrypt: n, customFunc: r } = e
                  t.forEach((e) => {
                    window.googletag.secureSignalProviders.push({
                      id: e,
                      collectorFunction: () => el(e, n, r),
                    })
                  })
                })
            }, e.registerDelay || 0)
          : (0, v.logWarn)(
              `${j} - ESP : encryptedSignalSources config not defined under userSync Object`,
            )
      }
      function ec(e) {
        return d(e).then(
          () => eo(),
          (e) =>
            e === ee
              ? Promise.resolve().then(eg)
              : ((0, v.logError)("Error initializing userId", e), S.U9.reject(e)),
        )
      }
      function ef() {
        let { submoduleNames: e } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0
        return ec({ refresh: !0, submoduleNames: e }).then((e) => (t && (0, y.fp)(t) && t(), e))
      }
      function eg() {
        return ec()
      }
      function ep() {
        let e = Number(D.SL.hash),
          t = []
        for (; e > 0; ) (t.push(String.fromCharCode(255 & e)), (e >>>= 8))
        return btoa(t.join(""))
      }
      function em(e) {
        let t = w(e.combined)
        if (t.length && s) {
          let e = et(t)
          e &&
            ((0, v.isGptPubadsDefined)()
              ? window.googletag.pubads().setPublisherProvidedId(e)
              : ((window.googletag = window.googletag || {}),
                (window.googletag.cmd = window.googletag.cmd || []),
                window.googletag.cmd.push(function () {
                  window.googletag.pubads().setPublisherProvidedId(e)
                })))
        }
      }
      function eh(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
        return z()
          .fork()
          .measureTime("userId.init.modules", function () {
            if (!t.length) return []
            if (
              (t.forEach((e) => eE(e)),
              !(t = t.filter(
                (e) =>
                  (!e.config.storage || !!e.enabledStorageTypes.length) &&
                  W.isAllowed($.yl, (0, B.s)("userId", e.config.name)),
              )).length)
            )
              return ((0, v.logWarn)(`${j} - no ID module configured`), [])
            let r = t.reduce(
              (e, t) =>
                H(t.submodule.name).measureTime("init", () => {
                  try {
                    ;(!(function (e, t) {
                      let n = D.SL.getConsentData()
                      if (e.config.storage) {
                        let r,
                          i,
                          o = Y(e),
                          a = !1
                        if ("number" == typeof e.config.storage.refreshInSeconds) {
                          let t = new Date(Y(e, "last"))
                          a =
                            t && Date.now() - t.getTime() > 1e3 * e.config.storage.refreshInSeconds
                        }
                        if (o && !a && !t && (r = Y(e, "cst")) && r === ep())
                          "function" == typeof e.submodule.extendId &&
                            (i = e.submodule.extendId(e.config, n, o))
                        else {
                          let t = Object.assign(
                            { enabledStorageTypes: e.enabledStorageTypes },
                            e.config,
                          )
                          i = e.submodule.getId(t, n, o)
                        }
                        ;((0, y.Qd)(i) &&
                          (i.id && (J(e, i.id), (o = i.id)),
                          "function" == typeof i.callback && (e.callback = i.callback)),
                          o && (e.idObj = e.submodule.decode(o, e.config)))
                      } else if (e.config.value) e.idObj = e.config.value
                      else {
                        let t = e.submodule.getId(e.config, n)
                        ;(0, y.Qd)(t) &&
                          ("function" == typeof t.callback && (e.callback = t.callback),
                          t.id && (e.idObj = e.submodule.decode(t.id, e.config)))
                      }
                    })(t, n),
                      e.push(t))
                  } catch (e) {
                    ;(0, v.logError)(`Error in userID module '${t.submodule.name}':`, e)
                  }
                  return e
                }),
              [],
            )
            return (e.refresh(r), em(e), r)
          })
      }
      function eb(e) {
        return e?.storage?.type?.trim().split(/\s*&\s*/) || []
      }
      let ey = new Set([P, _]),
        ev = [1, 2, 3, 4, 7]
      function eE(e) {
        if (e.enabledStorageTypes) return
        let t = eb(e.config)
        e.enabledStorageTypes = t.filter((t) => {
          switch (t) {
            case P:
              return (
                Q.forEach((t) => {
                  ;(0, I.p6)("userId", {
                    type: "web",
                    identifier: e.config.storage.name + t,
                    purposes: ev,
                  })
                }),
                !!e.storageMgr.localStorageIsEnabled() &&
                  (!N.getDataFromLocalStorage(q) ||
                    ((0, v.logInfo)(`${j} - opt-out localStorage found, storage disabled`), !1))
              )
            case _:
              return (
                K.forEach((t) => {
                  ;(0, I.p6)("userId", {
                    type: "cookie",
                    identifier: e.config.storage.name + t,
                    purposes: ev,
                    maxAgeSeconds: (e.config.storage.expires ?? 0) * 86400,
                    cookieRefresh: !0,
                  })
                }),
                !!e.storageMgr.cookiesAreEnabled() &&
                  (!N.getCookie(q) ||
                    ((0, v.logInfo)(`${j} - opt-out cookie found, storage disabled`), !1))
              )
          }
          return !1
        })
      }
      function ew(e) {
        ;(E.clear(),
          Object.entries(
            Z(
              e,
              (e) => Object.keys(e.eids || {}),
              (e) => e,
            ),
          ).forEach((e) => {
            let [t, n] = e
            return E.set(t, n[0].eids[t])
          }))
      }
      function eI() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        ew(G)
        let t = (function (e) {
          function t(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
              n[r - 1] = arguments[r]
            ;(0, v.logWarn)(`Invalid userSync.userId config: ${e}`, ...n)
          }
          return Array.isArray(e)
            ? e.filter((e) => {
                if (!e?.name) return t('must specify "name"', e)
                if (e.storage) {
                  if (!e.storage.name || !e.storage.type)
                    return t('must specify "storage.name" and "storage.type"', e)
                  if (!eb(e).every((e) => ey.has(e))) return t('invalid "storage.type"', e)
                  ;["expires", "refreshInSeconds"].forEach((n) => {
                    let r = e.storage[n]
                    null != r &&
                      "number" != typeof r &&
                      (isNaN((r = Number(r)))
                        ? (t(`storage.${n} must be a number and will be ignored`, e),
                          delete e.storage[n])
                        : (e.storage[n] = r))
                  })
                }
                return !0
              })
            : (null != e && t("must be an array", e), [])
        })(L)
        if (!t.length) return
        let n = (function (e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : M,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : G,
            { autoRefresh: i, retainConfig: o } = e
          return r.reduce((e, r) => {
            let { name: a, aliasName: s } = r,
              l = (e) => [a, s].some((t) => t?.toLowerCase() === e.toLowerCase()),
              d = t.find((e) => l(e.name))
            if (!d) {
              if (!o) return e
              let t = n.find((e) => l(e.config.name))
              return t ? [...e, t] : e
            }
            let u = {
              submodule: r,
              config: { ...d, name: r.name },
              callback: void 0,
              idObj: void 0,
              storageMgr: (0, I.le)({
                moduleType: "userId",
                moduleName: d.name,
                advertiseKeys: !1,
              }),
            }
            if (i) {
              let e = n.find((e) => l(e.config.name))
              u.refreshIds = !e || !(0, v.deepEqual)(u.config, e.config)
            }
            return [...e, u]
          }, [])
        })(e, t)
        ;(M.splice(0, M.length),
          M.push(...n),
          M.length &&
            (p.gH.getHooks({ hook: en }).length ||
              (p.gH.before(en, 100),
              m.Ay.callDataDeletionRequest.before(eA),
              C.after((e) => e(et()))),
            (0, v.logInfo)(
              `${j} - usersync config updated for ${M.length} submodules: `,
              M.map((e) => e.submodule.name),
            )))
      }
      function eA(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
          n[r - 1] = arguments[r]
        ;((0, v.logInfo)("UserID: received data deletion request; deleting all stored IDs..."),
          M.forEach((e) => {
            if ("function" == typeof e.submodule.onDataDeletionRequest)
              try {
                e.submodule.onDataDeletionRequest(e.config, e.idObj, ...n)
              } catch (t) {
                ;(0, v.logError)(
                  `Error calling onDataDeletionRequest for ID submodule ${e.submodule.name}`,
                  t,
                )
              }
            ;(eE(e),
              e.enabledStorageTypes.forEach((t) => {
                switch (t) {
                  case _:
                    let n, r
                    ;((n = V(e, N)),
                      (r = new Date(Date.now() - 864e5).toUTCString()),
                      K.forEach((e) => {
                        try {
                          n(e, "", r)
                        } catch (e) {
                          ;(0, v.logError)(e)
                        }
                      }))
                    break
                  case P:
                    Q.forEach((t) => {
                      try {
                        N.removeDataFromLocalStorage(e.config.storage.name + t)
                      } catch (e) {
                        ;(0, v.logError)(e)
                      }
                    })
                }
              }))
          }),
          e.apply(this, n))
      }
      function eC(e) {
        return function () {
          for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r]
          return Promise.resolve(e.apply(this, n))
        }
      }
      ;(!(function (e) {
        let t,
          n,
          { mkDelay: i = S.cb } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        ;((s = void 0),
          (M = []),
          (L = []),
          (r = t =
            {
              submodules: [],
              global: {},
              bidder: {},
              combined: {},
              refresh() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                  n = new Set(e.map((e) => e.submodule))
                ;((t.submodules = t.submodules.filter((e) => !n.has(e.submodule)).concat(e)),
                  (function () {
                    let e = Z(
                        t.submodules,
                        (e) => Object.keys(e.idObj ?? {}),
                        (e) => e.submodule,
                      ),
                      n = {},
                      r = {}
                    function i(e, t, n) {
                      return function () {
                        for (let { allowed: r, bidders: i, module: o } of n)
                          if (
                            W.isAllowed($.yl, (0, B.s)("userId", o?.config?.name, { init: !1 })) &&
                            null != o.idObj?.[e]
                          ) {
                            if (r) return o
                            else if (t) {
                              let t = (e) => e.map((e) => e.module.submodule.name).join(", ")
                              ;(0, v.logWarn)(
                                `userID modules ${t(n)} provide the same ID ('${e}'); ${o.submodule.name} is the preferred source, but it's configured only for some bidders, unlike ${t(n.filter((e) => null == e.bidders))}. Other bidders will not see the "${e}" ID.`,
                              )
                              break
                            } else if (null == i) break
                          }
                        return null
                      }
                    }
                    Object.entries(e).forEach((e) => {
                      let [t, o] = e,
                        a = !0,
                        s = new Set()
                      ;((o = o.map((e) => {
                        let t = null
                        return (
                          Array.isArray(e.config.bidders) && e.config.bidders.length > 0
                            ? (t = e.config.bidders).forEach((e) => s.add(e))
                            : (a = !1),
                          { module: e, bidders: t }
                        )
                      })),
                        a ||
                          (n[t] = i(
                            t,
                            !0,
                            o.map((e) => {
                              let { bidders: t, module: n } = e
                              return { allowed: null == t, bidders: t, module: n }
                            }),
                          )),
                        s.forEach((e) => {
                          ;((r[e] = r[e] ?? {}),
                            (r[e][t] = i(
                              t,
                              !1,
                              o.map((t) => {
                                let { bidders: n, module: r } = t
                                return { allowed: n?.includes(e), bidders: n, module: r }
                              }),
                            )))
                        }))
                    })
                    let o = Object.values(r)
                      .concat([n])
                      .reduce((e, t) => Object.assign(e, t), {})
                    Object.assign(t, { global: n, bidder: r, combined: o })
                  })())
              },
            }),
          (d = (function () {
            let e,
              t,
              { mkDelay: n = S.cb } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              i = (0, S.v6)(),
              s = (0, S.v6)(),
              l = !1
            function d(n) {
              return (
                (t = z().fork()),
                null != e && e.reject(ee),
                (e = (0, S.v6)()),
                S.U9.race([n, e.promise]).finally(t.startTiming("userId.total"))
              )
            }
            let u = r,
              c = M
            function f(e) {
              return function () {
                if (u === r && c === M) return e(...arguments)
              }
            }
            function p() {
              return D.SL.promise.finally(t.startTiming("userId.init.consent"))
            }
            let m = d(
              S.U9.all([b.Gc, i.promise])
                .then(p)
                .then(
                  f(() => {
                    eh(u, c)
                  }),
                )
                .then(() => s.promise.finally(t.startTiming("userId.callbacks.pending")))
                .then(
                  f(() => {
                    let e = u.submodules.filter((e) => (0, y.fp)(e.callback))
                    if (e.length) return new S.U9((t) => X(e, t, u))
                  }),
                ),
            )
            return function () {
              let {
                refresh: e = !1,
                submoduleNames: t = null,
                ready: r = !1,
              } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              return (
                r &&
                  !l &&
                  ((l = !0),
                  i.resolve(),
                  a > 0
                    ? s.resolve()
                    : g.on(h.qY.AUCTION_END, function e() {
                        ;(g.AU(h.qY.AUCTION_END, e), n(o).then(s.resolve))
                      })),
                e &&
                  l &&
                  (m = d(
                    m
                      .catch(() => null)
                      .then(p)
                      .then(
                        f(() => {
                          let e = eh(
                            u,
                            c.filter((e) => null == t || t.includes(e.submodule.name)),
                            !0,
                          ).filter((e) => null != e.callback)
                          if (e.length) return new S.U9((t) => X(e, t, u))
                        }),
                      ),
                  )),
                m
              )
            }
          })({ mkDelay: i })),
          null != l && l(),
          (G = []),
          (l = e.getConfig("userSync", (e) => {
            let t = e.userSync
            if (t && ((s = t.ppid), t.userIds)) {
              let e,
                { autoRefresh: s = !1, retainConfig: u = !0, enforceStorageType: c } = t
              ;((L = t.userIds),
                (o = (0, y.Et)(t.syncDelay) ? t.syncDelay : R.qh.syncDelay),
                (a = (0, y.Et)(t.auctionDelay) ? t.auctionDelay : R.qh.auctionDelay),
                eI({ retainConfig: u, autoRefresh: s }),
                n?.(),
                (n = (0, k.qB)(
                  $.Ue,
                  "enforceStorageTypeRule",
                  ((e = M.map((e) => {
                    let { config: t } = e
                    return t
                  })),
                  (t) => {
                    if ("userId" !== t[U.Dk] || !t[U.OI]) return
                    let n = e.find((e) => {
                      let n
                      return ((n = e.name), t[U.iK]?.toLowerCase() === n?.toLowerCase())
                    })
                    if (n && n.storage && t[U.Zw] !== n.storage.type) {
                      let e = `${n.name} attempts to store data in ${t[U.Zw]} while configuration allows ${n.storage.type}.`
                      if (c) return { allow: !1, reason: e }
                      ;(0, v.logWarn)(e)
                    }
                  }),
                )))
              var i = t.idPriority,
                l = G
              if (i) {
                let e = {},
                  t = new Map(l.map((e) => (e.aliasName ? [e.aliasName, e.name] : [])))
                ;(Object.keys(i).forEach((n) => {
                  let r = (0, y.cy)(i[n]) ? [...i[n]].reverse() : []
                  e[n] = r.map((e) => (t.has(e) ? t.get(e) : e))
                }),
                  (F = e))
              } else F = {}
              ;(r.refresh(), ew(l), d({ ready: !0 }))
              let f = M.filter((e) => e.refreshIds)
              f.length && ef({ submoduleNames: f.map((e) => e.submodule.name) })
            }
          })),
          m.Ay.makeBidRequests.after(er),
          x.NE.before(ei),
          (0, p.xu)("getUserIds", eo),
          (0, p.xu)("getUserIdsAsEids", ea),
          (0, p.xu)("getEncryptedEidsForSource", eC(el)),
          (0, p.xu)("registerSignalSources", eu),
          (0, p.xu)("refreshUserIds", eC(ef)),
          (0, p.xu)("getUserIdsAsync", eC(eg)),
          (0, p.xu)("getUserIdsAsEidBySource", es))
      })(f.$W),
        (0, b.xG)(
          "userId",
          function (e) {
            ;((e.findRootDomain = T.S),
              (G || []).find((t) => t.name === e.name) ||
                (G.push(e),
                D.o2.register("userId", e.name, e.gvlid),
                eI(),
                d({ refresh: !0, submoduleNames: [e.name] })))
          },
          { postInstallAllowed: !0 },
        ),
        (0, c.E)("userId"))
    },
    40580: function (e, t, n) {
      "use strict"
      var r = n(76030),
        i = n(31360),
        o = n(27426),
        a = n(98349)
      let s = "utiqId",
        l = "Utiq module",
        d = (0, a.vM)({ moduleType: "userId", moduleName: s })
      function u() {
        let e,
          t = JSON.parse(d.getDataFromLocalStorage("utiqPass")),
          n = d.getDataFromLocalStorage("netid_utiq_adtechpass")
        return n
          ? ((0, i.logInfo)(`${l}: Local storage netid_utiq_adtechpass: ${n}`), { utiq: n })
          : (t &&
              t.connectId &&
              Array.isArray(t.connectId.idGraph) &&
              t.connectId.idGraph.length > 0 &&
              ((e = t.connectId.idGraph[0]),
              (0, i.logInfo)(`${l}: Local storage utiqPass: ${JSON.stringify(t)}`),
              (0, i.logInfo)(`${l}: Graph of utiqPass: ${JSON.stringify(e)}`)),
            { utiq: e && e.atid ? e.atid : null })
      }
      let c = (0, r.m)(),
        f = c && "function" == typeof c.refreshUserIds ? c.refreshUserIds.bind(c) : () => {},
        g,
        p = window
      for (; p; ) {
        try {
          if (p.frames.__utiqLocator) {
            g = p
            break
          }
        } catch (e) {}
        if (p === window.top) break
        p = p.parent
      }
      ;((0, i.logInfo)(`${l}: frame found: `, !!g),
        g &&
          (window.addEventListener("message", (e) => {
            let { action: t, idGraphData: n, description: r } = e.data
            "returnIdGraphEntry" === t &&
              r.moduleName === s &&
              e.origin !== window.origin &&
              ((0, i.logInfo)(`${l}: Setting local storage pass: `, n),
              n
                ? d.setDataInLocalStorage(
                    "utiqPass",
                    JSON.stringify({ connectId: { idGraph: [n] } }),
                  )
                : ((0, i.logInfo)(`${l}: removing local storage pass`),
                  d.removeDataFromLocalStorage("utiqPass")),
              f())
          }),
          g.postMessage({ action: "getIdGraphEntry", description: { moduleName: s } }, "*")),
        (0, o.bz)("userId", {
          name: s,
          disclosureURL: "local://modules/utiqDeviceStorageDisclosure.json",
          decode: (e) => (
            (0, i.logInfo)(`${l}: Decoded ID value ${JSON.stringify(e)}`),
            e.utiq ? e : null
          ),
          getId: function (e) {
            let t = u()
            if (t.utiq)
              return (
                (0, i.logInfo)(`${l}: Local storage ID value ${JSON.stringify(t)}`),
                { id: { utiq: t.utiq } }
              )
            {
              ;(e || (e = {}),
                e.params || (e.params = {}),
                (void 0 === e.params.maxDelayTime || null === e.params.maxDelayTime) &&
                  (e.params.maxDelayTime = 1e3))
              let t = 0,
                n = (r) => {
                  let o = u()
                  if (o.utiq) {
                    let e = { utiq: o.utiq }
                    ;((0, i.logInfo)(`${l}: Returning ID value data of ${JSON.stringify(e)}`), r(e))
                  } else
                    t > e.params.maxDelayTime
                      ? ((0, i.logInfo)(
                          `${l}: No utiq value set after ${e.params.maxDelayTime} max allowed delay time`,
                        ),
                        r(null))
                      : ((t += 50),
                        setTimeout(() => {
                          n(r)
                        }, 50))
                }
              return { callback: n }
            }
          },
          eids: {
            utiq: {
              source: "utiq.com",
              atype: 1,
              getValue: function (e) {
                return e
              },
            },
          },
        }),
        (0, r.E)("utiqIdSystem"))
    },
    638: function (e, t, n) {
      "use strict"
      n.d(t, {
        A4: function () {
          return a
        },
        J7: function () {
          return s
        },
        Pg: function () {
          return l
        },
      })
      var r = n(20095),
        i = n(31360)
      let o = (0, n(76030).m)()
      function a(e) {
        let { url: t, config: n, id: a, callback: s, loaded: l, adUnitCode: d, renderNow: u } = e
        ;((this.url = t),
          (this.config = n),
          (this.handlers = {}),
          (this.id = a),
          (this.renderNow = u),
          (this.adUnitCode = d),
          (this.loaded = l),
          (this.cmd = []),
          (this.push = (e) => {
            "function" != typeof e
              ? (0, i.logError)("Commands given to Renderer.push must be wrapped in a function")
              : this.loaded
                ? e.call()
                : this.cmd.push(e)
          }),
          (this.callback =
            s ||
            (() => {
              ;((this.loaded = !0), this.process())
            })),
          (this.render = function () {
            let e = arguments,
              n = () => {
                this._render
                  ? this._render.apply(this, e)
                  : (0, i.logWarn)(
                      "No render function was provided, please use .setRender on the renderer",
                    )
              }
            !(function (e) {
              let t = o.adUnits.find((t) => t.code === e)
              if (!t) return !1
              let n = t?.renderer,
                r = !!(n && n.url && n.render),
                i = t?.mediaTypes?.video?.renderer,
                a = !!(i && i.url && i.render)
              return !!((r && !0 !== n.backupOnly) || (a && !0 !== i.backupOnly))
            })(d)
              ? u
                ? n()
                : (this.cmd.unshift(n),
                  (0, r.R)(t, "prebid", "outstream", this.callback, this.documentContext))
              : ((0, i.logWarn)(
                  `External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ${d}`,
                ),
                n())
          }.bind(this)))
      }
      function s(e) {
        return !!(e && (e.url || e.renderNow))
      }
      function l(e, t, n) {
        let r = null
        ;(e.config && e.config.documentResolver && (r = e.config.documentResolver(t, document, n)),
          r || (r = document),
          (e.documentContext = r),
          e.render(t, e.documentContext))
      }
      ;((a.install = function (e) {
        let { url: t, config: n, id: r, callback: i, loaded: o, adUnitCode: s, renderNow: l } = e
        return new a({
          url: t,
          config: n,
          id: r,
          callback: i,
          loaded: o,
          adUnitCode: s,
          renderNow: l,
        })
      }),
        (a.prototype.getConfig = function () {
          return this.config
        }),
        (a.prototype.setRender = function (e) {
          this._render = e
        }),
        (a.prototype.setEventHandlers = function (e) {
          this.handlers = e
        }),
        (a.prototype.handleVideoEvent = function (e) {
          let { id: t, eventName: n } = e
          ;("function" == typeof this.handlers[n] && this.handlers[n](),
            (0, i.logMessage)(`Prebid Renderer event for id ${t} type ${n}`))
        }),
        (a.prototype.process = function () {
          for (; this.cmd.length > 0; )
            try {
              this.cmd.shift().call()
            } catch (e) {
              ;(0, i.logError)(
                `Error processing Renderer command on ad unit '${this.adUnitCode}':`,
                e,
              )
            }
        }))
    },
    37830: function (e, t, n) {
      "use strict"
      n.d(t, {
        DL: function () {
          return u
        },
        Ml: function () {
          return i
        },
        Ue: function () {
          return r
        },
        VJ: function () {
          return f
        },
        hE: function () {
          return c
        },
        hq: function () {
          return d
        },
        it: function () {
          return m
        },
        mo: function () {
          return l
        },
        pY: function () {
          return g
        },
        qX: function () {
          return o
        },
        uc: function () {
          return s
        },
        yg: function () {
          return p
        },
        yl: function () {
          return a
        },
      })
      let r = "accessDevice",
        i = "syncUser",
        o = "enrichUfpd",
        a = "enrichEids",
        s = "fetchBids",
        l = "reportAnalytics",
        d = "transmitEids",
        u = "transmitUfpd",
        c = "transmitPreciseGeo",
        f = "transmitTid",
        g = "loadExternalScript",
        p = "accessRequestCredentials",
        m = "acceptBid"
    },
    25260: function (e, t, n) {
      "use strict"
      n.d(t, {
        s: function () {
          return i
        },
      })
      var r = n(16155)
      let i = (0, n(67085).ZI)((e) => r.Ay.resolveAlias(e))
    },
    71318: function (e, t, n) {
      "use strict"
      n.d(t, {
        T: function () {
          return r
        },
      })
      let r = "analytics"
    },
    67085: function (e, t, n) {
      "use strict"
      n.d(t, {
        Dk: function () {
          return o
        },
        Ez: function () {
          return d
        },
        Ii: function () {
          return i
        },
        OI: function () {
          return u
        },
        TQ: function () {
          return p
        },
        U3: function () {
          return h
        },
        XG: function () {
          return c
        },
        ZI: function () {
          return m
        },
        Zw: function () {
          return l
        },
        bt: function () {
          return f
        },
        e3: function () {
          return g
        },
        iK: function () {
          return a
        },
        q7: function () {
          return s
        },
      })
      var r = n(27426)
      let i = "component",
        o = i + "Type",
        a = i + "Name",
        s = "adapterCode",
        l = "storageType",
        d = "storageKey",
        u = "write",
        c = "configName",
        f = "syncType",
        g = "syncUrl",
        p = "_config"
      function m(e) {
        return function (t, n, r) {
          let l = { [o]: t, [a]: n, [i]: `${t}.${n}` }
          return ("bidder" === t && (l[s] = e(n)), h(Object.assign(l, r)))
        }
      }
      let h = (0, r.A_)("sync", (e) => e)
    },
    39248: function (e, t, n) {
      "use strict"
      n.d(t, {
        io: function () {
          return a
        },
        qB: function () {
          return o
        },
      })
      var r = n(31360),
        i = n(67085)
      let [o, a] = (function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : (0, r.prefixLog)("Activity control:"),
          t = {}
        function n(e) {
          return ((t[e] = t[e] || []), t[e])
        }
        let o = {}
        function a(t) {
          let { activity: n, name: r, allow: i, reason: a, component: s } = t,
            l = `${r} ${i ? "allowed" : "denied"} '${n}' for '${s}'${a ? ":" : ""}`,
            d = o.hasOwnProperty(l)
          if ((d && clearTimeout(o[l]), (o[l] = setTimeout(() => delete o[l], 1e3)), !d)) {
            let t = [l]
            ;(a && t.push(a), (i ? e.logInfo : e.logWarn).apply(e, t))
          }
        }
        return [
          function (e, t, r) {
            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10,
              o = n(e),
              a = o.findIndex((e) => {
                let [t] = e
                return i < t
              }),
              s = [i, t, r]
            return (
              o.splice(a < 0 ? o.length : a, 0, s),
              function () {
                let e = o.indexOf(s)
                e >= 0 && o.splice(e, 1)
              }
            )
          },
          function (t, r) {
            let o, s
            for (let [l, d, u] of n(t)) {
              if (o !== l && s) break
              o = l
              let n = (function (t, n, r, o) {
                let a
                try {
                  a = r(o)
                } catch (r) {
                  ;(e.logError(`Exception in rule ${n} for '${t}'`, r),
                    (a = { allow: !1, reason: r }))
                }
                return a && Object.assign({ activity: t, name: n, component: o[i.Ii] }, a)
              })(t, d, u, r)
              if (n)
                if (!n.allow) return (a(n), !1)
                else s = n
            }
            return (s && a(s), !0)
          },
        ]
      })()
    },
    27410: function (e, t, n) {
      "use strict"
      n.d(t, {
        BS: function () {
          return W
        },
        Hh: function () {
          return _
        },
        Pk: function () {
          return P
        },
        Uc: function () {
          return T
        },
        XO: function () {
          return M
        },
        bw: function () {
          return R
        },
        n6: function () {
          return C
        },
        qn: function () {
          return U
        },
        vB: function () {
          return q
        },
        vW: function () {
          return D
        },
        vd: function () {
          return $
        },
      })
      var r = n(31360),
        i = n(62504),
        o = n(57788),
        a = n(41831),
        s = n(638),
        l = n(19539),
        d = n(9479),
        u = n(27426),
        c = n(62450),
        f = n(16155),
        g = n(9423),
        p = n(47965),
        m = n(61768),
        h = n(31918),
        b = n(16886)
      let {
          AD_RENDER_FAILED: y,
          AD_RENDER_SUCCEEDED: v,
          STALE_RENDER: E,
          BID_WON: w,
          EXPIRED_RENDER: I,
        } = o.qY,
        { EXCEPTION: A } = o.as,
        C = (0, u.A_)("sync", function (e) {
          ;(((0, m.$)(e.eventtrackers)[500]?.[1] || []).forEach((e) => (0, r.triggerPixel)(e)),
            i.Ic(w, e),
            l.n.addWinningBid(e))
        })
      function S(e) {
        let { reason: t, message: n, bid: o, id: a } = e,
          s = { reason: t, message: n }
        ;(o && ((s.bid = o), (s.adId = o.adId)),
          a && (s.adId = a),
          (0, r.logError)(`Error rendering ad (id: ${a}): ${n}`),
          i.Ic(y, s))
      }
      function O(e) {
        let { doc: t, bid: n, id: r } = e
        ;(f.Ay.callAdRenderSucceededBidder(n.adapterCode || n.bidder, n),
          i.Ic(v, { doc: t, bid: n, adId: r }))
      }
      function T(e, t) {
        switch (e.event) {
          case o.qY.AD_RENDER_FAILED:
            S({ bid: t, id: t.adId, reason: e.info.reason, message: e.info.message })
            break
          case o.qY.AD_RENDER_SUCCEEDED:
            O({ doc: null, bid: t, id: t.adId })
            break
          case o.qY.BROWSER_INTERVENTION:
            !(function (e) {
              let { bid: t, intervention: n } = e
              ;(f.Ay.callOnInterventionBidder(t.adapterCode || t.bidder, t, n),
                i.Ic(o.qY.BROWSER_INTERVENTION, e))
            })({ bid: t, adId: t.adId, intervention: e.intervention })
            break
          default:
            ;(0, r.logError)(
              `Received event request for unsupported event: '${e.event}' (adId: '${t.adId}')`,
            )
        }
      }
      function D(e, t, n) {
        let { resizeFn: r, fireTrackers: i = c.vO } = n
        "resizeNativeHeight" === e.action ? r(e.width, e.height) : i(e, t)
      }
      let k = { [o.nl.EVENT]: T }
      k[o.nl.NATIVE] = D
      let $ = (0, u.A_)("sync", function (e, t) {
          let { ad: n, adUrl: i, cpm: o, originalCpm: a, width: s, height: l, instl: d } = e,
            u = { AUCTION_PRICE: a || o, CLICKTHROUGH: t?.clickUrl || "" }
          return {
            ad: (0, r.replaceMacros)(n, u),
            adUrl: (0, r.replaceMacros)(i, u),
            width: s,
            height: l,
            instl: d,
          }
        }),
        B = (0, u.A_)("sync", function (e) {
          let {
              renderFn: t,
              resizeFn: n,
              bidResponse: i,
              options: a,
              doc: s,
              isMainDocument: l = s === document && !(0, r.inIframe)(),
            } = e,
            d = "video" === i.mediaType
          if (l || d)
            return void S({
              reason: o.as.PREVENT_WRITING_ON_MAIN_DOCUMENT,
              message: d
                ? "Cannot render video ad without a renderer"
                : "renderAd was prevented from writing to the main document.",
              bid: i,
              id: i.adId,
            })
          let u = $(i, a)
          t(Object.assign({ adId: i.adId }, u))
          let { width: c, height: f } = u
          ;(c ?? f) != null && n(c, f)
        })
      function R(e) {
        let { renderFn: t, resizeFn: n, adId: s, options: l, bidResponse: d, doc: u } = e
        _(d, () => {
          if (null == d)
            return void S({ reason: o.as.CANNOT_FIND_AD, message: `Cannot find ad '${s}'`, id: s })
          if (
            !(
              d.status === o.tl.RENDERED &&
              ((0, r.logWarn)(`Ad id ${s} has been rendered before`),
              i.Ic(E, d),
              a.$W.getConfig("auctionOptions")?.suppressStaleRender)
            )
          ) {
            if (
              !(
                !p.uW.isBidNotExpired(d) &&
                ((0, r.logWarn)(`Ad id ${s} has been expired`),
                i.Ic(I, d),
                a.$W.getConfig("auctionOptions")?.suppressExpiredRender)
              )
            )
              try {
                B({ renderFn: t, resizeFn: n, bidResponse: d, options: l, doc: u })
              } catch (e) {
                S({ reason: o.as.EXCEPTION, message: e.message, id: s, bid: d })
              }
          }
        })
      }
      function U(e) {
        let t = (0, g.BO)(e.metrics)
        ;(t.checkpoint("bidRender"),
          t.timeBetween("bidWon", "bidRender", "render.deferred"),
          t.timeBetween("auctionEnd", "bidRender", "render.pending"),
          t.timeBetween("requestBids", "bidRender", "render.e2e"),
          (e.status = o.tl.RENDERED))
      }
      B.before(function (e, t) {
        let { bidResponse: n, doc: r } = t
        ;(0, s.J7)(n.renderer)
          ? ((0, s.Pg)(n.renderer, n, r), O({ doc: r, bid: n, id: n.adId }), e.bail())
          : e(t)
      }, 100)
      let x = new WeakMap(),
        j = new WeakSet()
      function _(e, t) {
        null == e ? t() : (x.set(e, t), e.deferRendering || q(e), P(e))
      }
      function P(e) {
        j.has(e) || (j.add(e), C(e))
      }
      function q(e) {
        let t = x.get(e)
        t && (t(), U(e), x.delete(e))
      }
      let N = !1
      a.$W.getConfig("auctionOptions", (e) => {
        N = e.auctionOptions?.legacyRender ?? !1
      })
      let W = (0, h.o1)(
        () => !N,
        function (e, t, n) {
          var i
          let a
          function s(e, n) {
            S(Object.assign({ id: t, bid: a }, { reason: e, message: n }))
          }
          function u(t, n) {
            let r = e.defaultView?.frameElement
            r &&
              (t && ((r.width = t), r.style.width && (r.style.width = `${t}px`)),
              n && ((r.height = n), r.style.height && (r.style.height = `${n}px`)))
          }
          let c =
            ((i = { resizeFn: u }),
            function (e, t, n) {
              k.hasOwnProperty(e) && k[e](t, n, i)
            })
          try {
            t && e
              ? ((a = l.n.findBidByAdId(t)),
                R({
                  renderFn: function (t) {
                    if (t.ad && N) (e.write(t.ad), e.close(), O({ doc: e, bid: a, id: a.adId }))
                    else
                      b.U9.all([
                        (0, d.HH)(a),
                        new b.U9((t) => {
                          "loading" === e.readyState
                            ? e.addEventListener("DOMContentLoaded", t)
                            : t()
                        }),
                      ])
                        .then((n) => {
                          let [i] = n
                          return i(
                            t,
                            { sendMessage: (e, t) => c(e, t, a), mkFrame: r.createIframe },
                            e.defaultView,
                          )
                        })
                        .then(
                          () => O({ doc: e, bid: a, id: a.adId }),
                          (e) => {
                            ;(s(e?.reason || o.as.EXCEPTION, e?.message),
                              e?.stack && (0, r.logError)(e))
                          },
                        )
                    let n = document.createComment(
                      `Creative ${a.creativeId} served by ${a.bidder} Prebid.js Header Bidding`,
                    )
                    ;(0, r.insertElement)(n, e, "html")
                  },
                  resizeFn: u,
                  adId: t,
                  options: { clickUrl: n?.clickThrough },
                  bidResponse: a,
                  doc: e,
                }))
              : s(o.as.MISSING_DOC_OR_ADID, `missing ${t ? "doc" : "adId"}`)
          } catch (e) {
            s(A, e.message)
          }
        },
      )
      function M() {
        if (!window.frames[o.IY])
          if (document.body) {
            let e = (0, r.createInvisibleIframe)()
            ;((e.name = o.IY), document.body.appendChild(e))
          } else window.requestAnimationFrame(M)
      }
    },
    16155: function (e, t, n) {
      "use strict"
      let r
      n.d(t, {
        sc: function () {
          return en
        },
        pX: function () {
          return el
        },
        Ay: function () {
          return ep
        },
      })
      var i = n(10208),
        o = n(31360),
        a = n(62450),
        s = n(20335),
        l = n(86451),
        d = n(41831),
        u = n(27426)
      let c = "requests",
        f = "wins",
        g = "auctions",
        p = {}
      function m(e, t) {
        let n = (p[e] = p[e] || { bidders: {} })
        return t ? ((n.bidders[t] = n.bidders[t] || {}), n.bidders[t]) : n
      }
      function h(e, t) {
        return function (n, r) {
          let i = m(n, t && r)
          return ((i[e] = (i[e] ?? 0) + 1), i[e])
        }
      }
      function b(e, t) {
        return function (n, r) {
          return m(n, t && r)[e] ?? 0
        }
      }
      let y = h(c, !1),
        v = h(c, !0),
        E = h(f, !0),
        w = h(g, !1),
        I = b(c, !1),
        A = b(c, !0),
        C = b(f, !0),
        S = b(g, !1)
      var O = n(91965),
        T = n(98875),
        D = n(62504),
        k = n(57788),
        $ = n(9423),
        B = n(19539),
        R = n(71318),
        U = n(39248),
        x = n(37830),
        j = n(67085),
        _ = n(17958)
      let P = [
          "data",
          "ext.data",
          "yob",
          "gender",
          "keywords",
          "kwarray",
          "id",
          "buyeruid",
          "customdata",
        ]
          .map((e) => `user.${e}`)
          .concat("device.ext.cdep"),
        q = ["user.eids", "user.ext.eids"],
        N = ["user.geo.lat", "user.geo.lon", "device.geo.lat", "device.geo.lon"],
        W = ["device.ip"],
        M = ["device.ipv6"]
      function L(e) {
        return Object.assign(
          {
            get() {},
            run(e, t, n, r, i) {
              var o
              let a = n && n[r]
              if (null != (o = a) && ("object" != typeof o || Object.keys(o).length > 0) && i()) {
                let e = this.get(a)
                void 0 === e ? delete n[r] : (n[r] = e)
              }
            },
          },
          e,
        )
      }
      function F(e) {
        return (
          e.forEach((e) => {
            e.paths = e.paths.map((e) => {
              let t = e.split("."),
                n = t.pop()
              return [t.length > 0 ? t.join(".") : null, n]
            })
          }),
          function (t, n) {
            let r = []
            for (var i = arguments.length, o = Array(i > 2 ? i - 2 : 0), a = 2; a < i; a++)
              o[a - 2] = arguments[a]
            let s = (function (e) {
              for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                n[r - 1] = arguments[r]
              return function (t) {
                return (e.hasOwnProperty(t.name) || (e[t.name] = !!t.applies(...n)), e[t.name])
              }
            })(t, ...o)
            return (
              e.forEach((e) => {
                if (!1 !== t[e.name])
                  for (let [i, o] of e.paths) {
                    let a = null == i ? n : (0, _.A)(n, i)
                    if ((r.push(e.run(n, i, a, o, s.bind(null, e))), !1 === t[e.name])) return
                  }
              }),
              r.filter((e) => null != e)
            )
          }
        )
      }
      function G(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U.io
        return function (n) {
          return !t(e, n)
        }
      }
      let z = (function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U.io,
          t = F(
            (function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U.io
              return [
                { name: x.DL, paths: P, applies: G(x.DL, e) },
                { name: x.hq, paths: q, applies: G(x.hq, e) },
                {
                  name: x.hE,
                  paths: N,
                  applies: G(x.hE, e),
                  get: (e) => Math.round((e + Number.EPSILON) * 100) / 100,
                },
                {
                  name: x.hE,
                  paths: W,
                  applies: G(x.hE, e),
                  get: (e) =>
                    (function (e) {
                      if (!e) return null
                      let t = e.split(".").map(Number)
                      if (4 !== t.length) return null
                      let n = []
                      for (let e = 0; e < 4; e++) {
                        let t = Math.max(0, Math.min(8, 24 - 8 * e))
                        n.push((255 << (8 - t)) & 255)
                      }
                      return t.map((e, t) => e & n[t]).join(".")
                    })(e),
                },
                {
                  name: x.hE,
                  paths: M,
                  applies: G(x.hE, e),
                  get: (e) =>
                    (function (e) {
                      if (!e) return null
                      let t = e.split(":").map((e) => parseInt(e, 16))
                      for (t = t.map((e) => (isNaN(e) ? 0 : e)); t.length < 8; ) t.push(0)
                      if (8 !== t.length) return null
                      let n = []
                      for (let e = 0; e < 8; e++) {
                        let t = Math.max(0, Math.min(16, 64 - 16 * e))
                        n.push((65535 << (16 - t)) & 65535)
                      }
                      return t
                        .map((e, t) => e & n[t])
                        .map((e) => e.toString(16))
                        .join(":")
                    })(e),
                },
                { name: x.VJ, paths: ["source.tid", "source.ext.tidSource"], applies: G(x.VJ, e) },
              ].map(L)
            })(e),
          ),
          n = F(
            (function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U.io
              return [
                { name: x.hq, paths: ["userId", "userIdAsEids"], applies: G(x.hq, e) },
                {
                  name: x.VJ,
                  paths: ["ortb2Imp.ext.tid", "ortb2Imp.ext.tidSource"],
                  applies: G(x.VJ, e),
                },
              ].map(L)
            })(e),
          )
        return function (e) {
          let r = {}
          return { ortb2: (n) => (t(r, n, e), n), bidRequest: (t) => (n(r, t, e), t) }
        }
      })()
      ;(0, U.qB)(x.VJ, "enableTIDs config", () => {
        if (!d.$W.getConfig("enableTIDs")) return { allow: !1, reason: "TIDs are disabled" }
      })
      var H = n(61768),
        V = n(76030)
      let J = "pbsBidAdapter",
        K = "client",
        Q = "server",
        Y = { isAllowed: U.io, redact: z },
        X = {},
        Z = {},
        ee = {},
        et = []
      d.$W.getConfig("s2sConfig", (e) => {
        e && e.s2sConfig && (et = (0, i.cy)(e.s2sConfig) ? e.s2sConfig : [e.s2sConfig])
      })
      let en = (0, j.ZI)((e) => eu.resolveAlias(e))
      function er(e) {
        return e.configName ?? e.name
      }
      let ei = ["nativeParams", "nativeOrtbRequest", "renderer", "element"]
      function eo(e) {
        let {
          bidderCode: t,
          auctionId: n,
          bidderRequestId: r,
          adUnits: a,
          src: s,
          metrics: l,
          getTid: d,
        } = e
        return a
          .reduce((e, a) => {
            let u = a.bids.filter((e) => e.bidder === t)
            return (
              null == t && 0 === u.length && null != a.s2sBid && u.push({ bidder: null }),
              e.push(
                u.reduce((e, u) => {
                  let [c, f] = d(
                      u.bidder,
                      a.transactionId,
                      u.ortb2Imp?.ext?.tid ?? a.ortb2Imp?.ext?.tid,
                    ),
                    g =
                      null ==
                      (u = Object.assign(
                        {},
                        u,
                        {
                          ortb2Imp: (0, o.mergeDeep)({}, a.ortb2Imp, u.ortb2Imp, {
                            ext: { tid: c, tidSource: f },
                          }),
                        },
                        (0, i.SH)(a, ei),
                      )).mediaTypes
                        ? a.mediaTypes
                        : u.mediaTypes
                  return (
                    (0, o.isValidMediaTypes)(g)
                      ? (u = Object.assign({}, u, { mediaTypes: g }))
                      : (0, o.logError)(
                          `mediaTypes is not correctly configured for adunit ${a.code}`,
                        ),
                    "client" === s && v(a.code, t),
                    e.push(
                      Object.assign({}, u, {
                        adUnitCode: a.code,
                        transactionId: a.transactionId,
                        adUnitId: a.adUnitId,
                        sizes: g?.banner?.sizes || g?.video?.playerSize || [],
                        bidId: u.bid_id || (0, o.generateUUID)(),
                        bidderRequestId: r,
                        auctionId: n,
                        src: s,
                        metrics: l,
                        auctionsCount: S(a.code),
                        bidRequestsCount: I(a.code),
                        bidderRequestsCount: A(a.code, u.bidder),
                        bidderWinsCount: C(a.code, u.bidder),
                        deferBilling: !!a.deferBilling,
                      }),
                    ),
                    e
                  )
                }, []),
              ),
              e
            )
          }, [])
          .reduce(o.flatten, [])
          .filter((e) => "" !== e)
      }
      let ea = (0, u.A_)(
          "sync",
          function (e, t) {
            let { getS2SBidders: n = el } =
              arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
            if (null == t) return e
            {
              let r = n(t)
              return e.filter((e) => {
                if (!r.has(e.bidder)) return !1
                if (null == e.s2sConfigName) return !0
                let n = er(t)
                return (
                  Array.isArray(e.s2sConfigName) ? e.s2sConfigName : [e.s2sConfigName]
                ).includes(n)
              })
            }
          },
          "filterBidsForAdUnit",
        ),
        es = (0, u.A_)("sync", (e, t) => e, "setupAdUnitMediaTypes")
      function el(e) {
        ;(0, i.cy)(e) || (e = [e])
        let t = new Set([null])
        return (
          e
            .filter((e) => e && e.enabled)
            .flatMap((e) => e.bidders)
            .forEach((e) => t.add(e)),
          t
        )
      }
      let ed = (0, u.A_)(
          "sync",
          function (e, t) {
            let { getS2SBidders: n = el } =
                arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
              r = n(t)
            return (0, o.getBidderCodes)(e).reduce((e, t) => (e[r.has(t) ? Q : K].push(t), e), {
              [K]: [],
              [Q]: [],
            })
          },
          "partitionBidders",
        ),
        eu = {
          bidderRegistry: X,
          analyticsRegistry: ee,
          aliasRegistry: Z,
          makeBidRequests: (0, u.A_)(
            "sync",
            function (e, t, n, r, s) {
              var l
              let u,
                c,
                f = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
                g = arguments.length > 6 ? arguments[6] : void 0
              ;((g = (0, $.BO)(g)),
                D.Ic(k.qY.BEFORE_REQUEST_BIDS, e),
                (0, a.nk)(e),
                e
                  .map((e) => e.code)
                  .filter(o.uniques)
                  .forEach(w))
              let p = f.global || {},
                m = f.bidder || {},
                h = (function () {
                  let e, t
                  if (d.$W.getConfig("consistentTIDs")) ((e = "pbjsStable"), (t = (e) => e))
                  else {
                    let n
                    ;((e = "pbjs"),
                      (n = {}),
                      (t = (e, t) => (
                        n.hasOwnProperty(t) || (n[t] = {}),
                        n[t].hasOwnProperty(e) || (n[t][e] = `u${(0, o.generateUUID)()}`),
                        n[t][e]
                      )))
                  }
                  return function (n, r, i) {
                    return [i ?? t(r, n), null != i ? "pub" : e]
                  }
                })(),
                b =
                  ((u = {}),
                  function (e, t, n) {
                    let r,
                      i = (r = null != n ? n[j.XG] : "") ? `${t}:${r}` : `${t}:`,
                      a = Y.redact(null != n ? n : en("bidder", t))
                    if (void 0 !== u[i]) return [u[i], a]
                    let [s, l] = h(t, e, m[t]?.source?.tid ?? p.source?.tid),
                      d = Object.freeze(
                        a.ortb2(
                          (0, o.mergeDeep)({}, p, m[t], {
                            source: { tid: s, ext: { tidSource: l } },
                          }),
                        ),
                      )
                    return ((u[i] = d), [d, a])
                  }),
                { [K]: v, [Q]: E } = ed(e, et),
                I = new Set()
              ;(e.forEach((e) => {
                ;((0, i.Qd)(e.mediaTypes) || (e.mediaTypes = {}),
                  (e.bids = e.bids.filter((t) => {
                    if (!t.bidder) return !0
                    let [r] = b(n, t.bidder),
                      i = E.includes(t.bidder) && !v.includes(t.bidder)
                    return Y.isAllowed(
                      x.uc,
                      en("bidder", t.bidder, {
                        bid: t,
                        ortb2: r,
                        adUnit: e,
                        auctionId: n,
                        isS2S: i,
                      }),
                    )
                  })),
                  e.bids.forEach((e) => {
                    I.add(e.bidder)
                  }),
                  y(e.code))
              }),
                (v = v.filter((e) => I.has(e))),
                (E = E.filter((e) => I.has(e))),
                (e = es(e, s)),
                d.$W.getConfig("bidderSequence") === d.Ov && (v = (0, o.shuffle)(v)))
              let A = (0, O.EN)(),
                C = []
              function S(e, t) {
                let [n, r] = b(e.auctionId, e.bidderCode, t)
                return (
                  (e.ortb2 = n),
                  (e.bids = e.bids.map((e) => ((e.ortb2 = n), r.bidRequest(e)))),
                  e
                )
              }
              let B = (0, V.m)()
              function R(e) {
                return (
                  B.pageViewIdPerBidder.has(e) ||
                    B.pageViewIdPerBidder.set(e, (0, o.generateUUID)()),
                  B.pageViewIdPerBidder.get(e)
                )
              }
              et.forEach((r) => {
                var a
                let s = en("prebid", J, { [j.XG]: er(r) })
                if (r && r.enabled && Y.isAllowed(x.uc, s)) {
                  let l,
                    d,
                    { adUnits: u, hasModuleBids: c } =
                      ((a = e),
                      (l = (0, i.Go)(a)),
                      (d = !1),
                      l.forEach((e) => {
                        let t = e.bids.filter(
                          (e) => e.module === J && e.params?.configName === er(r),
                        )
                        ;(1 === t.length
                          ? ((e.s2sBid = t[0]),
                            (d = !0),
                            (e.ortb2Imp = (0, o.mergeDeep)({}, e.s2sBid.ortb2Imp, e.ortb2Imp)))
                          : t.length > 1 &&
                            (0, o.logWarn)(
                              'Multiple "module" bids for the same s2s configuration; all will be ignored',
                              t,
                            ),
                          (e.bids = ea(e.bids, r).map(
                            (e) => ((e.bid_id = (0, o.getUniqueIdentifierStr)()), e),
                          )))
                      }),
                      {
                        adUnits: (l = l.filter(
                          (e) =>
                            (!r.filterBidderlessCalls ||
                              1 !== e.bids.length ||
                              null != e.bids[0].bidder) &&
                            (0 !== e.bids.length || null != e.s2sBid),
                        )),
                        hasModuleBids: d,
                      }),
                    f = (0, o.generateUUID)()
                  ;((0 === E.length && c ? [null] : E).forEach((e) => {
                    let a = (0, o.generateUUID)(),
                      l = R(e),
                      d = g.fork(),
                      c = S(
                        {
                          bidderCode: e,
                          auctionId: n,
                          bidderRequestId: a,
                          pageViewId: l,
                          uniquePbsTid: f,
                          bids: eo({
                            bidderCode: e,
                            auctionId: n,
                            bidderRequestId: a,
                            adUnits: (0, i.Go)(u),
                            src: k.RW.SRC,
                            metrics: d,
                            getTid: h,
                          }),
                          auctionStart: t,
                          timeout: r.timeout,
                          src: k.RW.SRC,
                          refererInfo: A,
                          metrics: d,
                          alwaysHasCapacity: r.alwaysHasCapacity,
                        },
                        s,
                      )
                    0 !== c.bids.length && C.push(c)
                  }),
                    u.forEach((e) => {
                      let t = e.bids.filter((e) =>
                        C.find((t) => t.bids.find((t) => t.bidId === e.bid_id)),
                      )
                      e.bids = t
                    }),
                    C.forEach((e) => {
                      void 0 === e.adUnitsS2SCopy &&
                        (e.adUnitsS2SCopy = u.filter((e) => e.bids.length > 0 || null != e.s2sBid))
                    }))
                }
              })
              let U =
                ((l = e),
                (c = (0, i.Go)(l)).forEach((e) => {
                  e.bids = ea(e.bids, null)
                }),
                (c = c.filter((e) => 0 !== e.bids.length)))
              return (
                v.forEach((e) => {
                  let a = (0, o.generateUUID)(),
                    s = R(e),
                    l = g.fork(),
                    d = X[e],
                    u = S({
                      bidderCode: e,
                      auctionId: n,
                      pageViewId: s,
                      bidderRequestId: a,
                      bids: eo({
                        bidderCode: e,
                        auctionId: n,
                        bidderRequestId: a,
                        adUnits: (0, i.Go)(U),
                        src: "client",
                        metrics: l,
                        getTid: h,
                      }),
                      auctionStart: t,
                      timeout: r,
                      refererInfo: A,
                      metrics: l,
                      src: "client",
                      alwaysHasCapacity: d?.getSpec?.().alwaysHasCapacity,
                    })
                  ;(d ||
                    (0, o.logError)(
                      `Trying to make a request for bidder that does not exist: ${e}`,
                    ),
                    d && u.bids && 0 !== u.bids.length && C.push(u))
                }),
                C.forEach((e) => {
                  ;(T.mW.getConsentData() && (e.gdprConsent = T.mW.getConsentData()),
                    T.t6.getConsentData() && (e.uspConsent = T.t6.getConsentData()),
                    T.ad.getConsentData() && (e.gppConsent = T.ad.getConsentData()))
                }),
                C
              )
            },
            "makeBidRequests",
          ),
          callBids(e, t, n, r, i, a, s) {
            let u = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : {}
            if (!t.length)
              return void (0, o.logWarn)(
                "callBids executed with no bidRequests.  Were they filtered by labels or sizing?",
              )
            let [c, f] = t.reduce(
              (e, t) => (e[Number(void 0 !== t.src && t.src === k.RW.SRC)].push(t), e),
              [[], []],
            )
            var g = []
            f.forEach((e) => {
              for (var t = -1, n = 0; n < g.length; ++n)
                if (e.uniquePbsTid === g[n].uniquePbsTid) {
                  t = n
                  break
                }
              t <= -1 && g.push(e)
            })
            let p = 0
            ;(et.forEach((e) => {
              if (e && g[p] && el(e).has(g[p].bidderCode)) {
                let t = (0, l.g4)(
                    a,
                    i ? { request: i.request.bind(null, "s2s"), done: i.done } : void 0,
                  ),
                  d = e.bidders,
                  c = X[e.adapter],
                  m = g[p].uniquePbsTid,
                  h = g[p].adUnitsS2SCopy,
                  b = f.filter((e) => e.uniquePbsTid === m)
                if (c) {
                  let i = { ad_units: h, s2sConfig: e, ortb2Fragments: u, requestBidsTimeout: a }
                  if (i.ad_units.length) {
                    let e = b.map(
                        (e) => (
                          (e.start = (0, o.timestamp)()),
                          function (t) {
                            t || s(e.bidderRequestId)
                            for (
                              var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1;
                              o < n;
                              o++
                            )
                              i[o - 1] = arguments[o]
                            r.apply(e, [t, ...i])
                          }
                        ),
                      ),
                      a = (0, o.getBidderCodes)(i.ad_units).filter((e) => d.includes(e))
                    ;((0, o.logMessage)(
                      `CALLING S2S HEADER BIDDERS ==== ${a.length > 0 ? a.join(", ") : 'No bidder specified, using "ortb2Imp" definition(s) only'}`,
                    ),
                      b.forEach((e) => {
                        D.Ic(k.qY.BID_REQUESTED, { ...e, tid: e.auctionId })
                      }),
                      c.callBids(i, f, n, (t) => e.forEach((e) => e(t)), t))
                  }
                } else (0, o.logError)("missing " + e.adapter)
                p++
              }
            }),
              c.forEach((e) => {
                e.start = (0, o.timestamp)()
                let t = X[e.bidderCode]
                d.$W.runWithBidder(e.bidderCode, () => {
                  ;((0, o.logMessage)("CALLING BIDDER"), D.Ic(k.qY.BID_REQUESTED, e))
                })
                let u = (0, l.g4)(
                    a,
                    i ? { request: i.request.bind(null, e.bidderCode), done: i.done } : void 0,
                  ),
                  c = r.bind(e)
                try {
                  d.$W.runWithBidder(
                    e.bidderCode,
                    t.callBids.bind(
                      t,
                      e,
                      n,
                      c,
                      u,
                      () => s(e.bidderRequestId),
                      d.$W.callbackWithBidder(e.bidderCode),
                    ),
                  )
                } catch (t) {
                  ;((0, o.logError)(
                    `${e.bidderCode} Bid Adapter emitted an uncaught error when parsing their bidRequest`,
                    { e: t, bidRequest: e },
                  ),
                    c())
                }
              }))
          },
          videoAdapters: [],
          registerBidAdapter(e, t) {
            let { supportedMediaTypes: n = [] } =
              arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
            e && t
              ? "function" == typeof e.callBids
                ? ((X[t] = e),
                  T.o2.register("bidder", t, e.getSpec?.().gvlid),
                  n.includes("video") && eu.videoAdapters.push(t),
                  n.includes("native") && a.mT.push(t))
                : (0, o.logError)(
                    "Bidder adaptor error for bidder code: " +
                      t +
                      "bidder must implement a callBids() function",
                  )
              : (0, o.logError)("bidAdapter or bidderCode not specified")
          },
          aliasBidAdapter(e, t, n) {
            if (void 0 === X[t]) {
              let i = X[e]
              if (void 0 === i) {
                let n = []
                ;(et.forEach((r) => {
                  if (r.bidders && r.bidders.length) {
                    let i = r && r.bidders
                    r && i.includes(t) ? (Z[t] = e) : n.push(e)
                  }
                }),
                  n.forEach((e) => {
                    ;(0, o.logError)(
                      'bidderCode "' + e + '" is not an existing bidder.',
                      "adapterManager.aliasBidAdapter",
                    )
                  }))
              } else
                try {
                  var r
                  let l,
                    d,
                    u =
                      ((r = e),
                      (l = []),
                      eu.videoAdapters.includes(r) && l.push("video"),
                      a.mT.includes(r) && l.push("native"),
                      l)
                  if (i.constructor.prototype !== Object.prototype)
                    (d = new i.constructor()).setBidderCode(t)
                  else {
                    let { useBaseGvlid: r = !1 } = n || {},
                      a = i.getSpec(),
                      l = r ? a.gvlid : n?.gvlid
                    null == l &&
                      null != a.gvlid &&
                      (0, o.logWarn)(
                        `Alias '${t}' will NOT re-use the GVL ID of the original adapter ('${a.code}', gvlid: ${a.gvlid}). Functionality that requires TCF consent may not work as expected.`,
                      )
                    let u = n && n.skipPbsAliasing
                    ;((d = (0, s.xb)(
                      Object.assign({}, a, { code: t, gvlid: l, skipPbsAliasing: u }),
                    )),
                      (Z[t] = e))
                  }
                  eu.registerBidAdapter(d, t, { supportedMediaTypes: u })
                } catch (t) {
                  ;(0, o.logError)(
                    e + " bidder does not currently support aliasing.",
                    "adapterManager.aliasBidAdapter",
                  )
                }
            } else (0, o.logMessage)('alias name "' + t + '" has been already specified.')
          },
          resolveAlias(e) {
            let t,
              n = e
            for (; Z[n] && (!t || !t.has(n)); ) ((n = Z[n]), (t = t || new Set()).add(n))
            return n
          },
          registerAnalyticsAdapter(e) {
            let { adapter: t, code: n, gvlid: r } = e
            t && n
              ? "function" == typeof t.enableAnalytics
                ? ((t.code = n), (ee[n] = { adapter: t, gvlid: r }), T.o2.register(R.T, n, r))
                : (0, o.logError)(`Prebid Error: Analytics adaptor error for analytics "${n}"
        analytics adapter must implement an enableAnalytics() function`)
              : (0, o.logError)("Prebid Error: analyticsAdapter or analyticsCode not specified")
          },
          enableAnalytics(e) {
            ;((0, i.cy)(e) || (e = [e]),
              e.forEach((e) => {
                let t = ee[e.provider]
                t && t.adapter
                  ? Y.isAllowed(x.mo, en(R.T, e.provider, { [j.TQ]: e })) &&
                    t.adapter.enableAnalytics(e)
                  : (0, o.logError)(
                      `Prebid Error: no analytics adapter found in registry for '${e.provider}'.`,
                    )
              }))
          },
          getBidAdapter: (e) => X[e],
          getAnalyticsAdapter: (e) => ee[e],
          callTimedOutBidders(e, t, n) {
            ;((t = t.map(
              (t) => (
                (t.params = (0, o.getUserConfiguredParams)(e, t.adUnitCode, t.bidder)),
                (t.timeout = n),
                t
              ),
            )),
              Object.keys((t = (0, o.groupBy)(t, "bidder"))).forEach((e) => {
                eg(e, "onTimeout", t[e])
              }))
          },
          callBidWonBidder(e, t, n) {
            ;((t.params = (0, o.getUserConfiguredParams)(n, t.adUnitCode, t.bidder)),
              E(t.adUnitCode, t.bidder),
              eg(e, "onBidWon", t))
          },
          triggerBilling:
            ((r = new WeakSet()),
            (e) => {
              r.has(e) ||
                (r.add(e),
                ((0, H.$)(e.eventtrackers)[1]?.[1] || []).forEach((e) =>
                  o.internal.triggerPixel(e),
                ),
                eg(e.bidder, "onBidBillable", e))
            }),
          callSetTargetingBidder(e, t) {
            eg(e, "onSetTargeting", t)
          },
          callBidViewableBidder(e, t) {
            eg(e, "onBidViewable", t)
          },
          callBidderError(e, t, n) {
            eg(e, "onBidderError", { error: t, bidderRequest: n })
          },
          callAdRenderSucceededBidder(e, t) {
            eg(e, "onAdRenderSucceeded", t)
          },
          callOnInterventionBidder(e, t, n) {
            eg(e, "onIntervention", { bid: t, intervention: n })
          },
          callDataDeletionRequest: (0, u.A_)("sync", function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]
            let r = "onDataDeletionRequest"
            ;(Object.keys(X)
              .filter((e) => !Z.hasOwnProperty(e))
              .forEach((e) => {
                let n = ec(e, r)
                if (null != n) {
                  let i = B.n.getBidsRequested().filter(
                    (t) =>
                      (function (e) {
                        let t = new Set()
                        for (; Z.hasOwnProperty(e) && !t.has(e); ) (t.add(e), (e = Z[e]))
                        return e
                      })(t.bidderCode) === e,
                  )
                  ef(e, r, ...n, i, ...t)
                }
              }),
              Object.entries(ee).forEach((e) => {
                let [n, i] = e,
                  a = i?.adapter?.[r]
                if ("function" == typeof a)
                  try {
                    a.apply(i.adapter, t)
                  } catch (e) {
                    ;(0, o.logError)(`error calling ${r} of ${n}`, e)
                  }
              }))
          }),
        }
      function ec(e, t) {
        let n = X[e],
          r = n?.getSpec && n.getSpec()
        if (r && r[t] && "function" == typeof r[t]) return [r, r[t]]
      }
      function ef(e, t, n, r) {
        try {
          ;(0, o.logInfo)(`Invoking ${e}.${t}`)
          for (var i = arguments.length, a = Array(i > 4 ? i - 4 : 0), s = 4; s < i; s++)
            a[s - 4] = arguments[s]
          d.$W.runWithBidder(e, r.bind(n, ...a))
        } catch (n) {
          ;(0, o.logWarn)(`Error calling ${t} of ${e}`)
        }
      }
      function eg(e, t, n) {
        if (n?.source !== k.RW.SRC) {
          let r = ec(e, t)
          null != r && ef(e, t, ...r, n)
        }
      }
      var ep = eu
    },
    20335: function (e, t, n) {
      "use strict"
      n.d(t, {
        xb: function () {
          return C
        },
        a$: function () {
          return I
        },
      })
      var r = n(16155),
        i = n(41831),
        o = n(21770),
        a = n(74689),
        s = n(62450),
        l = n(33622),
        d = n(57788),
        u = n(62504),
        c = n(10208),
        f = n(31360),
        g = n(27426),
        p = n(19539),
        m = n(33242),
        h = n(9423),
        b = n(39248),
        y = n(25260),
        v = n(37830)
      let E = ["cpm", "ttl", "creativeId", "netRevenue", "currency"],
        w = { auctionId: (e) => e.ortb2?.source?.tid, transactionId: (e) => e.ortb2Imp?.ext?.tid }
      function I(e) {
        let t = Array.isArray(e.supportedMediaTypes)
          ? { supportedMediaTypes: e.supportedMediaTypes }
          : void 0
        function n(e) {
          let n = C(e)
          r.Ay.registerBidAdapter(n, e.code, t)
        }
        ;(n(e),
          Array.isArray(e.aliases) &&
            e.aliases.forEach((t) => {
              let i,
                o,
                a = t
              ;((0, c.Qd)(t) && ((a = t.code), (i = t.gvlid), (o = t.skipPbsAliasing)),
                (r.Ay.aliasRegistry[a] = e.code),
                n(Object.assign({}, e, { code: a, gvlid: i, skipPbsAliasing: o })))
            }))
      }
      let A = (0, f.memoize)((e) => {
        let { bidderCode: t } = e,
          n = (0, b.io)(v.VJ, (0, y.s)("bidder", t))
        function r(e, t, r) {
          return w.hasOwnProperty(t) ? (n ? w[t](e) : null) : Reflect.get(e, t, r)
        }
        function i(e, t) {
          let n = new Proxy(e, t)
          return (
            Object.entries(e)
              .filter((e) => {
                let [t, n] = e
                return "function" == typeof n
              })
              .forEach((t) => {
                let [r, i] = t
                n[r] = i.bind(e)
              }),
            n
          )
        }
        let o = (0, f.memoize)(
          (e) => i(e, { get: r }),
          (e) => e.bidId,
        )
        return {
          bidRequest: o,
          bidderRequest: (e) =>
            i(e, { get: (t, n, i) => ("bids" === n ? e.bids.map(o) : r(t, n, i)) }),
        }
      })
      function C(e) {
        var t
        return Object.assign(
          ((t = e.code),
          {
            callBids: function () {},
            setBidderCode: function (e) {
              t = e
            },
            getBidderCode: function () {
              return t
            },
          }),
          {
            getSpec: function () {
              return Object.freeze(Object.assign({}, e))
            },
            registerSyncs: n,
            callBids: function (t, a, g, b, y, v) {
              if (!Array.isArray(t.bids)) return
              let I = A(t),
                C = {},
                S = []
              function T() {
                ;(g(),
                  i.$W.runWithBidder(e.code, () => {
                    ;(u.Ic(d.qY.BIDDER_DONE, t), n(S, t.gdprConsent, t.uspConsent, t.gppConsent))
                  }))
              }
              let k = D(t).measureTime("validate", () =>
                t.bids.filter((t) => {
                  var n
                  return (
                    (n = I.bidRequest(t)),
                    !!e.isBidRequestValid(n) ||
                      ((0, f.logWarn)(`Invalid bid sent to bidder ${e.code}: ${JSON.stringify(n)}`),
                      !1)
                  )
                }),
              )
              if (0 === k.length) return void T()
              let $ = {}
              ;(k.forEach((e) => {
                $[e.bidId] = e
              }),
                O(e, k, t, b, v, {
                  onRequest: (e) => u.Ic(d.qY.BEFORE_BIDDER_HTTP, t, e),
                  onResponse: (t) => {
                    ;(y(e.code), S.push(t))
                  },
                  onError: (n, i) => {
                    ;(i.timedOut || y(e.code),
                      r.Ay.callBidderError(e.code, i, t),
                      u.Ic(d.qY.BIDDER_ERROR, { error: i, bidderRequest: t }),
                      (0, f.logError)(
                        `Server call for ${e.code} failed: ${n} ${i.status}. Continuing without bids.`,
                        { bidRequests: k },
                      ))
                  },
                  onBid: (t) => {
                    let n = $[t.requestId]
                    if (n) {
                      var r, u
                      let g, b
                      if (
                        ((t.adapterCode = n.bidder),
                        (r = t.bidderCode),
                        (u = n.bidder),
                        (g = m.u.get(u, "allowAlternateBidderCodes") || !1),
                        (b = m.u.get(u, "allowedAlternateBidderCodes")),
                        (r &&
                          u &&
                          u !== r &&
                          ((b = (0, c.cy)(b)
                            ? b
                                .map((e) => e.trim().toLowerCase())
                                .filter((e) => !!e)
                                .filter(f.uniques)
                            : b),
                          !g || ((0, c.cy)(b) && "*" !== b[0] && !b.includes(r)))) ||
                          0)
                      ) {
                        ;((0, f.logWarn)(
                          `${t.bidderCode} is not a registered partner or known bidder of ${n.bidder}, hence continuing without bid. If you wish to support this bidder, please mark allowAlternateBidderCodes as true in bidderSettings.`,
                        ),
                          a.reject(n.adUnitCode, t, d.Tf.BIDDER_DISALLOWED))
                        return
                      }
                      ;((t.originalCpm = t.cpm),
                        (t.originalCurrency = t.currency),
                        (t.meta = t.meta || Object.assign({}, t[n.bidder])),
                        (t.deferBilling = n.deferBilling),
                        (t.deferRendering =
                          t.deferBilling &&
                          (t.deferRendering ?? "function" != typeof e.onBidBillable)))
                      let y = Object.assign((0, o.O)(n), t, (0, f.pick)(n, Object.keys(w))),
                        v = Object.prototype.hasOwnProperty.call(t, "mediaType")
                          ? t.mediaType
                          : null
                      !(function (e, t) {
                        let n =
                            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                          r = (0, h.BO)(t.metrics)
                        ;(r.checkpoint("addBidResponse"),
                          (C[e] = !0),
                          r.measureTime("addBidResponse.validate", () =>
                            (function (e, t) {
                              let n,
                                { index: r = p.n.index, responseMediaType: o = t.mediaType } =
                                  arguments.length > 2 && void 0 !== arguments[2]
                                    ? arguments[2]
                                    : {}
                              function a(e) {
                                return `Invalid bid from ${t.bidderCode}. Ignoring bid: ${e}`
                              }
                              if (!e)
                                return (
                                  (0, f.logWarn)("No adUnitCode was supplied to addBidResponse."),
                                  !1
                                )
                              if (!t)
                                return (
                                  (0, f.logWarn)(
                                    `Some adapter tried to add an undefined bid for ${e}.`,
                                  ),
                                  !1
                                )
                              if (
                                ((n = Object.keys(t)),
                                !E.every((e) => n.includes(e) && ![void 0, null].includes(t[e])))
                              )
                                return (
                                  (0, f.logError)(
                                    a(
                                      `Bidder ${t.bidderCode} is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params.`,
                                    ),
                                  ),
                                  !1
                                )
                              let d = i.$W.getConfig("auctionOptions") || {},
                                u = !0 === d.rejectUnknownMediaTypes,
                                c = !1 !== d.rejectInvalidMediaTypes,
                                g = r.getMediaTypes(t)
                              if (g && Object.keys(g).length > 0) {
                                if (null == o && u)
                                  return (
                                    (0, f.logError)(
                                      a(
                                        `Bid mediaType is required. Allowed: ${Object.keys(g).join(", ")}`,
                                      ),
                                    ),
                                    !1
                                  )
                                if (null != o && c && !g.hasOwnProperty(o))
                                  return (
                                    (0, f.logError)(
                                      a(
                                        `Bid mediaType '${o}' is not supported by the ad unit. Allowed: ${Object.keys(g).join(", ")}`,
                                      ),
                                    ),
                                    !1
                                  )
                              }
                              return "native" !== t.mediaType || (0, s.Bm)(t, { index: r })
                                ? "video" !== t.mediaType || (0, l.vk)(t, { index: r })
                                  ? "banner" !== t.mediaType ||
                                    !!(function (e, t) {
                                      let { index: n = p.n.index } =
                                        arguments.length > 2 && void 0 !== arguments[2]
                                          ? arguments[2]
                                          : {}
                                      if (
                                        (t.width || 0 === parseInt(t.width, 10)) &&
                                        (t.height || 0 === parseInt(t.height, 10))
                                      )
                                        return (
                                          (t.width = parseInt(t.width, 10)),
                                          (t.height = parseInt(t.height, 10)),
                                          !0
                                        )
                                      if (null != t.wratio && null != t.hratio)
                                        return (
                                          (t.wratio = parseInt(t.wratio, 10)),
                                          (t.hratio = parseInt(t.hratio, 10)),
                                          !0
                                        )
                                      let r = n.getBidRequest(t),
                                        i = n.getMediaTypes(t),
                                        o = (r && r.sizes) || (i && i.banner && i.banner.sizes),
                                        a = (0, f.parseSizesInput)(o)
                                      if (1 === a.length) {
                                        let [e, n] = a[0].split("x")
                                        return (
                                          (t.width = parseInt(e, 10)),
                                          (t.height = parseInt(n, 10)),
                                          !0
                                        )
                                      }
                                      return !1
                                    })(e, t, { index: r }) ||
                                    ((0, f.logError)(a("Banner bids require a width and height")),
                                    !1)
                                  : ((0, f.logError)(
                                      a(
                                        "Video bid does not have required vastUrl or renderer property",
                                      ),
                                    ),
                                    !1)
                                : ((0, f.logError)(
                                    a("Native bid missing some required properties."),
                                  ),
                                  !1)
                            })(e, t, { responseMediaType: n }),
                          )
                            ? a(e, t)
                            : a.reject(e, t, d.Tf.INVALID))
                      })(n.adUnitCode, y, v)
                    } else
                      ((0, f.logWarn)(
                        `Bidder ${e.code} made bid for unknown request ID: ${t.requestId}. Ignoring.`,
                      ),
                        a.reject(null, t, d.Tf.INVALID_REQUEST_ID))
                  },
                  onCompletion: T,
                }))
            },
          },
        )
        function n(t, n, r, i) {
          T(e, t, n, r, i)
        }
      }
      let S = ["bids", "paapi"],
        O = (0, g.A_)(
          "async",
          function (e, t, n, r, i, o) {
            let { onRequest: a, onResponse: s, onError: l, onBid: u, onCompletion: g } = o,
              p = D(n)
            g = p.startTiming("total").stopBefore(g)
            let h = A(n),
              E = p.measureTime("buildRequests", () =>
                e.buildRequests(t.map(h.bidRequest), h.bidderRequest(n)),
              )
            if ((Array.isArray(E) || (E = [E]), !E || 0 === E.length)) return void g()
            let w = (0, f.delayExecution)(g, E.length)
            E.forEach((t) => {
              let n = p.fork()
              function o(e) {
                ;(null != e && (e.metrics = n.fork().renameWith()), u(e))
              }
              let g = i(function (r, i) {
                  var a
                  let l
                  E()
                  try {
                    r = JSON.parse(r)
                  } catch (e) {}
                  s((r = { body: r, headers: ((a = 0), { get: i.getResponseHeader.bind(i) }) }))
                  try {
                    r = n.measureTime("interpretResponse", () => e.interpretResponse(r, t))
                  } catch (t) {
                    ;((0, f.logError)(
                      `Bidder ${e.code} failed to interpret the server's response. Continuing without bids`,
                      null,
                      t,
                    ),
                      w())
                    return
                  }
                  ;((l = r && !Object.keys(r).some((e) => !S.includes(e)) ? r.bids : r) &&
                    ((0, c.cy)(l) ? l.forEach(o) : o(l)),
                    w())
                }),
                h = i(function (e, t) {
                  ;(E(), l(e, t), w())
                })
              a(t)
              let E = n.startTiming("net"),
                I =
                  "TRUE" === (0, f.getParameterByName)(d.M).toUpperCase() || (0, f.debugTurnedOn)()
              function A(n) {
                let r = t.options
                return Object.assign(n, r, {
                  browsingTopics:
                    (!r?.hasOwnProperty("browsingTopics") || !!r.browsingTopics) &&
                    (m.u.get(e.code, "topicsHeader") ?? !0) &&
                    (0, b.io)(v.DL, (0, y.s)("bidder", e.code)),
                  suppressTopicsEnrollmentWarning: r?.hasOwnProperty(
                    "suppressTopicsEnrollmentWarning",
                  )
                    ? r.suppressTopicsEnrollmentWarning
                    : !I,
                })
              }
              switch (t.method) {
                case "GET":
                  var C
                  r(
                    `${t.url}${(C = t.data) ? `?${"object" == typeof C ? (0, f.parseQueryStringParameters)(C) : C}` : ""}`,
                    { success: g, error: h },
                    void 0,
                    A({ method: "GET", withCredentials: !0 }),
                  )
                  break
                case "POST":
                  let O = t.options?.endpointCompression,
                    T = (e) => {
                      let { url: t, payload: n } = e
                      r(
                        t,
                        { success: g, error: h },
                        n,
                        A({ method: "POST", contentType: "text/plain", withCredentials: !0 }),
                      )
                    }
                  ;(O &&
                    I &&
                    (0, f.logWarn)(
                      `Skipping GZIP compression for ${e.code} as debug mode is enabled`,
                    ),
                    O && !I && (0, f.isGzipCompressionSupported)()
                      ? (0, f.compressDataWithGZip)(t.data).then((e) => {
                          let n = new URL(t.url)
                          ;(n.searchParams.has("gzip") || n.searchParams.set("gzip", "1"),
                            T({ url: n.href, payload: e }))
                        })
                      : T({
                          url: t.url,
                          payload: "string" == typeof t.data ? t.data : JSON.stringify(t.data),
                        }))
                  break
                default:
                  ;((0, f.logWarn)(
                    `Skipping invalid request from ${e.code}. Request type ${t.method} must be GET or POST`,
                  ),
                    w())
              }
            })
          },
          "processBidderRequests",
        ),
        T = (0, g.A_)(
          "async",
          function (e, t, n, o, s) {
            let l = i.$W.getConfig("userSync.aliasSyncEnabled")
            if (e.getUserSyncs && (l || !r.Ay.aliasRegistry[e.code])) {
              let r = e.getUserSyncs(
                {
                  iframeEnabled: a.zt.canBidderRegisterSync("iframe", e.code),
                  pixelEnabled: a.zt.canBidderRegisterSync("image", e.code),
                },
                t,
                n,
                o,
                s,
              )
              r &&
                (Array.isArray(r) || (r = [r]),
                r.forEach((t) => {
                  a.zt.registerSync(t.type, e.code, t.url)
                }),
                a.zt.bidderDone(e.code))
            }
          },
          "registerSyncs",
        )
      function D(e) {
        return (0, h.BO)(e.metrics).renameWith((t) => [
          `adapter.client.${t}`,
          `adapters.client.${e.bidderCode}.${t}`,
        ])
      }
    },
    20095: function (e, t, n) {
      "use strict"
      n.d(t, {
        R: function () {
          return l
        },
      })
      var r = n(37830),
        i = n(25260),
        o = n(39248),
        a = n(31360)
      let s = new WeakMap()
      function l(e, t, n, l, d, u) {
        if (!(0, o.io)(r.pY, (0, i.s)(t, n))) return
        if (!n || !e)
          return void (0, a.logError)("cannot load external script without url and moduleCode")
        let c =
          "function" == typeof l || "function" == typeof l?.success || "function" == typeof l?.error
        function f(e, t) {
          null == t ? ("function" == typeof e ? e() : e.success?.()) : e.error?.(t)
        }
        d || (d = document)
        let g = h(d, e)
        if (g) return (c && (g.loaded ? f(l, g.error) : g.callbacks.push(l)), g.tag)
        let p = s.get(d) || {},
          m = { error: null, loaded: !1, tag: null, callbacks: [] }
        return (
          (p[e] = m),
          s.set(d, p),
          c && m.callbacks.push(l),
          (0, a.logWarn)(`module ${n} is loading external JavaScript`),
          (function (t, n, r, i) {
            r || (r = document)
            var o = r.createElement("script")
            ;((o.type = "text/javascript"), (o.async = !0))
            let s = h(r, e)
            function l(e) {
              ;((s.error = e), d())
            }
            function d() {
              ;(o.removeEventListener("error", l), n())
            }
            return (
              s && (s.tag = o),
              o.addEventListener("error", l),
              o.readyState
                ? (o.onreadystatechange = function () {
                    ;("loaded" === o.readyState || "complete" === o.readyState) &&
                      ((o.onreadystatechange = null), d())
                  })
                : (o.onload = function () {
                    d()
                  }),
              (o.src = t),
              i && (0, a.setScriptAttributes)(o, i),
              (0, a.insertElement)(o, r),
              o
            )
          })(
            e,
            function () {
              m.loaded = !0
              try {
                for (let e = 0; e < m.callbacks.length; e++) f(m.callbacks[e], m.error)
              } catch (e) {
                ;(0, a.logError)("Error executing callback", "adloader.js:loadExternalScript", e)
              }
            },
            d,
            u,
          )
        )
        function h(e, t) {
          let n = s.get(e)
          return n && n[t] ? n[t] : null
        }
      }
    },
    86451: function (e, t, n) {
      "use strict"
      n.d(t, {
        g4: function () {
          return p
        },
        hd: function () {
          return m
        },
        p3: function () {
          return c
        },
      })
      var r = n(37830),
        i = n(25260),
        o = n(39248),
        a = n(41831),
        s = n(27426),
        l = n(31360)
      let d = {
          fetch: window.fetch.bind(window),
          makeRequest: (e, t) => new Request(e, t),
          timeout(e, t) {
            let n = new AbortController(),
              r = setTimeout(() => {
                ;(n.abort(), (0, l.logError)(`Request timeout after ${e}ms`, t), (r = null))
              }, e)
            return {
              signal: n.signal,
              done() {
                r && clearTimeout(r)
              },
            }
          },
        },
        u = "Content-Type",
        c = (0, s.A_)(
          "async",
          function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = arguments.length > 1 ? arguments[1] : void 0,
              n = arguments.length > 2 ? arguments[2] : void 0
            return (
              e.withCredentials &&
                (e.withCredentials =
                  t && n ? (0, o.io)(r.yg, (0, i.s)(t, n)) : (0, l.hasDeviceAccess)()),
              e
            )
          },
          "processRequestOptions",
        )
      function f() {
        let e,
          t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e3,
          { request: n, done: r } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i = arguments.length > 2 ? arguments[2] : void 0,
          o = arguments.length > 3 ? arguments[3] : void 0,
          s = (e, n) => {
            let r
            ;(null == t ||
              n?.signal != null ||
              a.$W.getConfig("disableAjaxTimeout") ||
              (n = Object.assign({ signal: (r = d.timeout(t, e)).signal }, n)),
              c(n, i, o))
            let s = d.fetch(e, n)
            return (r?.done != null && (s = s.finally(r.done)), s)
          }
        return (
          (null != n || null != r) &&
            ((e = s),
            (s = function (t, i) {
              let o = new URL(t?.url == null ? t : t.url, document.location).origin,
                a = e(t, i)
              return (n && n(o), r && (a = a.finally(() => r(o))), a)
            })),
          s
        )
      }
      function g(e, t) {
        let n,
          { status: r, statusText: i = "", headers: o, url: a } = e
        function s(e) {
          if (void 0 === n)
            try {
              n = new DOMParser().parseFromString(t, o?.get(u)?.split(";")?.[0])
            } catch (t) {
              ;((n = null), e && e(t))
            }
          return n
        }
        return {
          readyState: XMLHttpRequest.DONE,
          status: r,
          statusText: i,
          responseText: t,
          response: t,
          responseType: "",
          responseURL: a,
          get responseXML() {
            return s(l.logError)
          },
          getResponseHeader: (e) => (o?.has(e) ? o.get(e) : null),
          toJSON() {
            return Object.assign({ responseXML: s() }, this)
          },
          timedOut: !1,
        }
      }
      function p() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e3,
          { request: t, done: n } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = arguments.length > 2 ? arguments[2] : void 0,
          i = arguments.length > 3 ? arguments[3] : void 0,
          o = f(e, { request: t, done: n }, r, i)
        return function (e, t, n) {
          let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
          !(function (e, t) {
            let { success: n, error: r } =
              "object" == typeof t && null != t
                ? t
                : {
                    success: "function" == typeof t ? t : () => null,
                    error: (e, t) => (0, l.logError)("Network error", e, t),
                  }
            e.then((e) => e.text().then((t) => [e, t])).then(
              (e) => {
                let [t, i] = e,
                  o = g(t, i)
                t.ok || 304 === t.status ? n(i, o) : r(t.statusText, o)
              },
              (e) =>
                r(
                  "",
                  Object.assign(g({ status: 0 }, ""), {
                    reason: e,
                    timedOut: e?.name === "AbortError",
                  }),
                ),
            )
          })(
            o(
              (function (e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  r = n.method || (t ? "POST" : "GET")
                if ("GET" === r && t) {
                  let r = (0, l.parseUrl)(e, n)
                  ;(Object.assign(r.search, t), (e = (0, l.buildUrl)(r)))
                }
                let i = new Headers(n.customHeaders)
                i.set(u, n.contentType || "text/plain")
                let o = { method: r, headers: i }
                return (
                  "GET" !== r && t && (o.body = t),
                  n.withCredentials && (o.credentials = "include"),
                  isSecureContext &&
                    (["browsingTopics"].forEach((e) => {
                      n[e] && (o[e] = !0)
                    }),
                    null != n.suppressTopicsEnrollmentWarning &&
                      (o.suppressTopicsEnrollmentWarning = n.suppressTopicsEnrollmentWarning)),
                  n.keepalive && (o.keepalive = !0),
                  d.makeRequest(e, o)
                )
              })(e, n, r),
            ),
            t,
          )
        }
      }
      p()
      let m = f()
    },
    7729: function (e, t, n) {
      "use strict"
      let r, i, o
      n.d(t, {
        UZ: function () {
          return j
        },
        NE: function () {
          return W
        },
        v8: function () {
          return H
        },
        HN: function () {
          return X
        },
        mX: function () {
          return M
        },
      })
      var a = n(31360),
        s = n(10208),
        l = n(40198),
        d = n(62450),
        u = n(86451),
        c = n(41831),
        f = n(19539)
      let g = new Map()
      function p(e) {
        var t, n
        let r
        return e.vastXml
          ? e.vastXml
          : ((t = e.vastUrl),
            (r = (n = (n = e.vastImpUrl) && (Array.isArray(n) ? n : [n]))
              ? n.map((e) => `<Impression><![CDATA[${e}]]></Impression>`).join("")
              : ""),
            `<VAST version="3.0">
    <Ad>
      <Wrapper>
        <AdSystem>prebid.org wrapper</AdSystem>
        <VASTAdTagURI><![CDATA[${t}]]></VASTAdTagURI>
        ${r}
        <Creatives></Creatives>
      </Wrapper>
    </Ad>
  </VAST>`)
      }
      let m = (e, t, n) => {
          ;((e.videoCacheKey = n || (0, a.generateUUID)()), e.vastUrl || (e.vastUrl = t))
        },
        h = function (e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.g4,
            r = {
              puts: e.map((e) =>
                (function (e) {
                  let { index: t = f.n.index } =
                      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = p(e),
                    r = t.getAuction(e),
                    i = { type: "xml", value: n, ttlseconds: Number(e.ttl) + 15 }
                  return (
                    c.$W.getConfig("cache.vasttrack") &&
                      ((i.bidder = e.bidder), (i.bidid = e.requestId), (i.aid = e.auctionId)),
                    null != r && (i.timestamp = r.getAuctionStart()),
                    "string" == typeof e.customCacheKey &&
                      "" !== e.customCacheKey &&
                      (i.key = e.customCacheKey),
                    i
                  )
                })(e),
              ),
            }
          n(c.$W.getConfig("cache.timeout"))(
            c.$W.getConfig("cache.url"),
            {
              success: function (e) {
                let n
                try {
                  n = JSON.parse(e).responses
                } catch (e) {
                  t(e, [])
                  return
                }
                n
                  ? t(null, n)
                  : t(Error("The cache server didn't respond with a responses property."), [])
              },
              error: function (e, n) {
                t(Error(`Error storing video ad in the cache: ${e}: ${JSON.stringify(n)}`), [])
              },
            },
            JSON.stringify(r),
            { contentType: "text/plain", withCredentials: !0 },
          )
        }
      function b(e) {
        let t = e.map((e) => e.bidResponse)
        h(t, function (n, r) {
          if (n)
            (0, a.logError)(
              `Failed to save to the video cache: ${n}. Video bids will be discarded:`,
              t,
            )
          else
            e.length !== r.length
              ? (0, a.logError)(`expected ${e.length} cache IDs, got ${r.length} instead`)
              : r.forEach((t, n) => {
                  let { auctionInstance: r, bidResponse: i, afterBidAdded: o } = e[n]
                  if ("" === t.uuid)
                    (0, a.logWarn)(
                      "Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded.",
                    )
                  else {
                    var s
                    ;(m(i, ((s = t.uuid), `${c.$W.getConfig("cache.url")}?uuid=${s}`), t.uuid),
                      H(r, i),
                      o())
                  }
                })
        })
      }
      c.$W.getConfig("cache", (e) => {
        let { cache: t } = e
        ;((r = "number" == typeof t.batchSize && t.batchSize > 0 ? t.batchSize : 1),
          (i = "number" == typeof t.batchTimeout && t.batchTimeout > 0 ? t.batchTimeout : 0),
          t.useLocal &&
            !o &&
            (o = f.n.onExpiry((e) => {
              e.getBidsReceived().forEach((e) => {
                let t = g.get(e.videoCacheKey)
                ;(t && t.startsWith("blob") && URL.revokeObjectURL(t), g.delete(e.videoCacheKey))
              })
            })))
      })
      let y = (function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : setTimeout,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b,
          n = [[]],
          o = !1,
          a = (e) => e()
        return function (s, l, d) {
          let u = i > 0 ? e : a
          ;(n[n.length - 1].length >= r && n.push([]),
            n[n.length - 1].push({ auctionInstance: s, bidResponse: l, afterBidAdded: d }),
            o ||
              ((o = !0),
              u(() => {
                ;(n.forEach(t), (n = [[]]), (o = !1))
              }, i)))
        }
      })()
      var v = n(638),
        E = n(74689),
        w = n(27426),
        I = n(33622),
        A = n(33242),
        C = n(62504),
        S = n(16155),
        O = n(57788),
        T = n(16886),
        D = n(9423),
        k = n(76030),
        $ = n(44868),
        B = n(37292),
        R = n(39248),
        U = n(37830)
      let { syncUsers: x } = E.zt,
        j = "completed"
      C.on(O.qY.BID_ADJUSTMENT, function (e) {
        var t
        let n
        ;(n = (function (e, t, n) {
          let { index: r = f.n.index, bs: i = A.u } =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
          n = n || r.getBidRequest(t)
          let o = t?.adapterCode,
            s = t?.bidderCode || n?.bidder,
            l = i.get(t?.adapterCode, "adjustAlternateBids"),
            d = i.getOwn(s, "bidCpmAdjustment") || i.get(l ? o : s, "bidCpmAdjustment")
          if (d && "function" == typeof d)
            try {
              return d(e, Object.assign({}, t), n)
            } catch (e) {
              ;(0, a.logError)("Error during bid adjustment", e)
            }
          return e
        })((t = e).cpm, t)) >= 0 && (t.cpm = n)
      })
      let _ = {},
        P = {},
        q = [],
        N = (0, k.m)(),
        W = (0, w.A_)("sync", (e) => {})
      function M(e) {
        let t,
          n,
          r,
          i,
          {
            adUnits: o,
            adUnitCodes: s,
            callback: u,
            cbTimeout: h,
            labels: b,
            auctionId: y,
            ortb2Fragments: E,
            metrics: w,
          } = e
        w = (0, D.BO)(w)
        let A = y || (0, a.generateUUID)(),
          k = new Set(),
          R = (0, T.v6)(),
          U = (0, T.v6)(),
          M = [],
          Q = u,
          Y = [],
          X = (0, $.H)({
            startTime: (e) => e.responseTimestamp,
            ttl: (e) => (null == (0, B.S9)() ? null : 1e3 * Math.max((0, B.S9)(), e.ttl)),
          }),
          Z = [],
          et = [],
          en = []
        function er() {
          return {
            auctionId: A,
            timestamp: t,
            auctionEnd: n,
            auctionStatus: i,
            adUnits: o,
            adUnitCodes: s,
            labels: b,
            bidderRequests: Y,
            noBids: Z,
            bidsReceived: X.toArray(),
            bidsRejected: M,
            winningBids: et,
            timeout: h,
            metrics: w,
            seatNonBids: en,
          }
        }
        function ei(e) {
          if ((e ? C.Ic(O.qY.AUCTION_TIMEOUT, er()) : clearTimeout(r), void 0 === n)) {
            let t = []
            ;(e &&
              ((0, a.logMessage)(`Auction ${A} timedOut`),
              (t = Y.filter((e) => !k.has(e.bidderRequestId)).flatMap((e) => e.bids)).length &&
                C.Ic(O.qY.BID_TIMEOUT, t)),
              (i = j),
              (n = Date.now()),
              w.checkpoint("auctionEnd"),
              w.timeBetween("requestBids", "auctionEnd", "requestBids.total"),
              w.timeBetween("callBids", "auctionEnd", "requestBids.callBids"),
              R.resolve(),
              C.Ic(O.qY.AUCTION_END, er()),
              z(o, y, function () {
                try {
                  if (null != Q) {
                    let t = X.toArray()
                      .filter((e) => s.includes(e.adUnitCode))
                      .reduce(ee, {})
                    ;(Q.apply(N, [t, e, A]), (Q = null))
                  }
                } catch (e) {
                  ;(0, a.logError)("Error executing bidsBackHandler", null, e)
                } finally {
                  t.length && S.Ay.callTimedOutBidders(o, t, h)
                  let e = c.$W.getConfig("userSync") ?? {}
                  e.enableOverride || x(e.syncDelay)
                }
              }))
          }
        }
        function eo() {
          ;(c.$W.resetBidder(),
            (0, a.logInfo)(`Bids Received for Auction with id: ${A}`, X.toArray()),
            (i = j),
            ei(!1))
        }
        function ea(e) {
          k.add(e)
        }
        function es(e) {
          e.forEach((e) => {
            Y = Y.concat(e)
          })
          let t = {},
            n = {
              bidRequests: e,
              run: () => {
                ;(W(this),
                  (r = setTimeout(() => ei(!0), h)),
                  (i = "inProgress"),
                  C.Ic(O.qY.AUCTION_INIT, er()))
                let n = (function (e, t) {
                  let { index: n = f.n.index } =
                      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = 0,
                    i = !1,
                    o = new Set(),
                    s = {}
                  function u() {
                    ;(r--, i && 0 === r && e())
                  }
                  function h(e, t, n) {
                    return (
                      (s[t.requestId] = !0),
                      (function (e, t) {
                        let { index: n = f.n.index } =
                            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                          r = n.getAdUnit(e)
                        ;(J(e, { index: n }),
                          Object.assign(e, {
                            cpm: parseFloat(e.cpm) || 0,
                            bidder: e.bidder || e.bidderCode,
                            adUnitCode: t,
                          }),
                          r?.ttlBuffer != null && (e.ttlBuffer = r.ttlBuffer))
                      })(t, e),
                      r++,
                      n(u)
                    )
                  }
                  function b(e, r) {
                    h(e, r, (e) => {
                      let i = (function (e) {
                        let { index: t = f.n.index } =
                          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                        C.Ic(O.qY.BID_ADJUSTMENT, e)
                        let n = t.getAdUnit(e)
                        ;((e.instl = n?.ortb2Imp?.instl === 1), (e.element = n?.element))
                        let r = t.getBidRequest(e)?.renderer || n.renderer,
                          i = e.mediaType,
                          o = t.getMediaTypes(e),
                          a = o && o[i]
                        var s = a && a.renderer,
                          d = null
                        ;(s && s.render && !(!0 === s.backupOnly && e.renderer)
                          ? (d = s)
                          : r && r.render && !(!0 === r.backupOnly && e.renderer) && (d = r),
                          d &&
                            ((e.renderer = v.A4.install({
                              url: d.url,
                              config: d.options,
                              renderNow: null == d.url,
                            })),
                            e.renderer.setRender(d.render)))
                        let u = K(e.mediaType, o, c.$W.getConfig("mediaTypePriceGranularity")),
                          g = (0, l.j)(
                            e.cpm,
                            "object" == typeof u ? u : c.$W.getConfig("customPriceBucket"),
                            c.$W.getConfig("currency.granularityMultiplier"),
                          )
                        return (
                          (e.pbLg = g.low),
                          (e.pbMg = g.med),
                          (e.pbHg = g.high),
                          (e.pbAg = g.auto),
                          (e.pbDg = g.dense),
                          (e.pbCg = g.custom),
                          e
                        )
                      })(r)
                      "video" === i.mediaType || "audio" === i.mediaType
                        ? (function (e, t, n) {
                            let { index: r = f.n.index } =
                                arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                              i = !0,
                              o = r.getMediaTypes({
                                requestId: t.originalRequestId || t.requestId,
                                adUnitId: t.adUnitId,
                              })?.video,
                              s = o && o?.context,
                              l = o && o?.useCacheKey,
                              {
                                useLocal: d,
                                url: u,
                                ignoreBidderCacheKey: h,
                              } = c.$W.getConfig("cache") || {}
                            if (d) {
                              let e, n
                              ;((e = p(t)),
                                m(
                                  t,
                                  (n = URL.createObjectURL(new Blob([e], { type: "text/xml" }))),
                                ),
                                g.set(t.videoCacheKey, n))
                            } else
                              u &&
                                (l || s !== I.H6) &&
                                (!t.videoCacheKey || h
                                  ? ((i = !1), V(e, t, n, o))
                                  : t.vastUrl ||
                                    ((0, a.logError)(
                                      "videoCacheKey specified but not required vastUrl for video bid",
                                    ),
                                    (i = !1)))
                            i && (H(e, t), n())
                          })(t, i, e)
                        : ((0, d.l6)(i) && (0, d.gs)(i, n.getAdUnit(i)), H(t, i), e())
                    })
                  }
                  function y(e, n, r) {
                    return h(e, n, (e) => {
                      ;((n.rejectionReason = r),
                        (0, a.logWarn)(
                          `Bid from ${n.bidder || "unknown bidder"} was rejected: ${r}`,
                          n,
                        ),
                        C.Ic(O.qY.BID_REJECTED, n),
                        t.addBidRejected(n),
                        e())
                    })
                  }
                  function E() {
                    let n = t.getBidRequests(),
                      l = c.$W.getConfig("auctionOptions")
                    if ((o.add(this), l && !(0, a.isEmpty)(l))) {
                      let e = l.secondaryBidders
                      e &&
                        !n.every((t) => e.includes(t.bidderCode)) &&
                        (n = n.filter((t) => !e.includes(t.bidderCode)))
                    }
                    ;((i = n.every((e) => o.has(e))),
                      this.bids.forEach((e) => {
                        s[e.bidId] || (J(e), t.addNoBid(e), C.Ic(O.qY.NO_BID, e))
                      }),
                      i && 0 === r && e())
                  }
                  return {
                    addBidResponse: (function () {
                      function e(e, t) {
                        let n
                        L.call(
                          { dispatch: b },
                          e,
                          t,
                          ((n = !1),
                          (r) => {
                            n || (y(e, t, r), (n = !0))
                          }),
                        )
                      }
                      return ((e.reject = y), e)
                    })(),
                    adapterDone: function () {
                      F(T.U9.resolve()).finally(() => E.call(this))
                    },
                  }
                })(eo, this)
                ;(S.Ay.callBids(
                  o,
                  e,
                  n.addBidResponse,
                  n.adapterDone,
                  {
                    request(e, n) {
                      ;(u(_, n),
                        u(t, e),
                        P[e] || (P[e] = { SRA: !0, origin: n }),
                        t[e] > 1 && (P[e].SRA = !1))
                    },
                    done(e) {
                      ;(_[e]--, q[0] && s(q[0]) && q.shift())
                    },
                  },
                  h,
                  ea,
                  E,
                ),
                  U.resolve())
              },
            }
          function s(e) {
            let t = !0,
              n = c.$W.getConfig("maxRequestsPerOrigin") || 4
            return (
              e.bidRequests.some((e) => {
                let r = 1,
                  i = void 0 !== e.src && e.src === O.RW.SRC ? "s2s" : e.bidderCode
                return (
                  (!e.alwaysHasCapacity || !!c.$W.getConfig("forceMaxRequestsPerOrigin")) &&
                  (P[i] &&
                    (!1 === P[i].SRA && (r = Math.min(e.bids.length, n)),
                    _[P[i].origin] + r > n && (t = !1)),
                  !t)
                )
              }),
              t && e.run(),
              t
            )
          }
          function u(e, t) {
            void 0 === e[t] ? (e[t] = 1) : e[t]++
          }
          s(n) || ((0, a.logWarn)("queueing auction due to limited endpoint capacity"), q.push(n))
        }
        return (
          (0, B.lc)(() => X.refresh()),
          C.on(O.qY.PBS_ANALYTICS, (e) => {
            var t
            e.auctionId === A && null != e.seatnonbid && ((t = e.seatnonbid), (en = en.concat(t)))
          }),
          {
            addBidReceived: function (e) {
              X.add(e)
            },
            addBidRejected: function (e) {
              M = M.concat(e)
            },
            addNoBid: function (e) {
              Z = Z.concat(e)
            },
            callBids: function () {
              ;((i = "started"), (t = Date.now()))
              let e = w.measureTime("requestBids.makeRequests", () =>
                S.Ay.makeBidRequests(o, t, A, h, b, E, w),
              )
              ;((0, a.logInfo)(`Bids Requested for Auction with id: ${A}`, e),
                w.checkpoint("callBids"),
                e.length < 1
                  ? ((0, a.logWarn)("No valid bid requests returned for auction"), eo())
                  : G.call({ dispatch: es, context: this }, e))
            },
            addWinningBid: function (e) {
              ;((et = et.concat(e)),
                S.Ay.callBidWonBidder(e.adapterCode || e.bidder, e, o),
                e.deferBilling || S.Ay.triggerBilling(e))
            },
            setBidTargeting: function (e) {
              S.Ay.callSetTargetingBidder(e.adapterCode || e.bidder, e)
            },
            getWinningBids: () => et,
            getAuctionStart: () => t,
            getAuctionEnd: () => n,
            getTimeout: () => h,
            getAuctionId: () => A,
            getAuctionStatus: () => i,
            getAdUnits: () => o,
            getAdUnitCodes: () => s,
            getBidRequests: () => Y,
            getBidsReceived: () => X.toArray(),
            getNoBids: () => Z,
            getNonBids: () => en,
            getFPD: () => E,
            getMetrics: () => w,
            end: R.promise,
            requestsDone: U.promise,
            getProperties: er,
          }
        )
      }
      let L = (0, w.u2)(
          (0, w.A_)(
            "async",
            function (e, t, n) {
              var r
              let i
              ;((r = t), !(!(i = c.$W.getConfig("maxBid")) || !r.cpm || i >= Number(r.cpm)))
                ? n(O.Tf.PRICE_TOO_HIGH)
                : (0, R.io)(
                      U.it,
                      (0, S.sc)("bidder", t.bidder || t.bidderCode, {
                        bid: t,
                        ortb2: f.n.index.getOrtb2(t),
                        adUnit: f.n.index.getAdUnit(t),
                      }),
                    )
                  ? this.dispatch.call(null, e, t)
                  : n(O.Tf.BIDDER_DISALLOWED)
            },
            "addBidResponse",
          ),
        ),
        F = (0, w.A_)("sync", (e) => e, "responsesReady"),
        G = (0, w.A_)(
          "sync",
          function (e) {
            this.dispatch.call(this.context, e)
          },
          "addBidderRequests",
        ),
        z = (0, w.A_)(
          "async",
          function (e, t, n) {
            n && n()
          },
          "bidsBackCallback",
        )
      function H(e, t) {
        var n
        let r, i
        ;((n = t),
          (i = !0 === A.u.get(n.bidderCode, "allowZeroCpmBids") ? n.cpm >= 0 : n.cpm > 0),
          n.bidderCode &&
            (i || n.dealId) &&
            (r = (function (e, t) {
              let { index: n = f.n.index } =
                arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              if (!t) return {}
              let r = n.getBidRequest(t)
              var i = {}
              return (
                Z(i, X(t.mediaType, e), t, r),
                e &&
                  A.u.getOwn(e, O.iD.ADSERVER_TARGETING) &&
                  (Z(i, A.u.ownSettingsFor(e), t, r),
                  (t.sendStandardTargeting = A.u.get(e, "sendStandardTargeting"))),
                i
              )
            })(n.bidderCode, n)),
          (n.adserverTargeting = Object.assign(n.adserverTargeting || {}, r)),
          (0, D.BO)(t.metrics).timeSince("addBidResponse", "addBidResponse.total"),
          e.addBidReceived(t),
          C.Ic(O.qY.BID_RESPONSE, t))
      }
      let V = (0, w.A_)(
        "async",
        function (e, t, n, r) {
          y(e, t, n)
        },
        "callPrebidCache",
      )
      function J(e) {
        let { index: t = f.n.index } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.getBidderRequest(e),
          r = (n && n.start) || e.requestTimestamp
        ;(Object.assign(e, {
          responseTimestamp: e.responseTimestamp || (0, a.timestamp)(),
          requestTimestamp: e.requestTimestamp || r,
        }),
          (e.timeToRespond = e.responseTimestamp - e.requestTimestamp))
      }
      function K(e, t, n) {
        if (e && n) {
          if ("video" === e) {
            let e = t?.video?.context ?? "instream"
            if (n[`video-${e}`]) return n[`video-${e}`]
          }
          return n[e]
        }
      }
      let Q = function (e) {
        let { index: t = f.n.index } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = K(e.mediaType, t.getMediaTypes(e), c.$W.getConfig("mediaTypePriceGranularity"))
        return "string" == typeof e.mediaType && n
          ? "string" == typeof n
            ? n
            : "custom"
          : c.$W.getConfig("priceGranularity")
      }
      function Y(e, t) {
        return {
          key: e,
          val:
            "function" == typeof t
              ? function (e, n) {
                  return t(e, n)
                }
              : function (e) {
                  return e[t]
                },
        }
      }
      function X(e, t) {
        let n,
          r = Object.assign({}, A.u.settingsFor(null))
        if (
          (r[O.iD.ADSERVER_TARGETING] ||
            (r[O.iD.ADSERVER_TARGETING] = [
              Y(O.xS.BIDDER, "bidderCode"),
              Y(O.xS.AD_ID, "adId"),
              Y(O.xS.PRICE_BUCKET, (e) => {
                let t = n || Q(e)
                return t === O.UE.AUTO
                  ? e.pbAg
                  : t === O.UE.DENSE
                    ? e.pbDg
                    : t === O.UE.LOW
                      ? e.pbLg
                      : t === O.UE.MEDIUM
                        ? e.pbMg
                        : t === O.UE.HIGH
                          ? e.pbHg
                          : t === O.UE.CUSTOM
                            ? e.pbCg
                            : void 0
              }),
              Y(O.xS.SIZE, "size"),
              Y(O.xS.DEAL, "dealId"),
              Y(O.xS.SOURCE, "source"),
              Y(O.xS.FORMAT, "mediaType"),
              Y(O.xS.ADOMAIN, (e) =>
                e.meta && e.meta.advertiserDomains && e.meta.advertiserDomains.length > 0
                  ? [e.meta.advertiserDomains].flat()[0]
                  : "",
              ),
              Y(O.xS.ACAT, (e) => {
                let t = e?.meta?.primaryCatId
                return Array.isArray(t) ? t[0] || "" : t || ""
              }),
              Y(O.xS.DSP, (e) =>
                e.meta && (e.meta.networkId || e.meta.networkName)
                  ? e?.meta?.networkName || e?.meta?.networkId
                  : "",
              ),
              Y(O.xS.CRID, (e) => (e.creativeId ? e.creativeId : "")),
            ]),
          "video" === e)
        ) {
          let e = r[O.iD.ADSERVER_TARGETING].slice()
          if (
            ((r[O.iD.ADSERVER_TARGETING] = e),
            [O.xS.UUID, O.xS.CACHE_ID].forEach((t) => {
              void 0 === e.find((e) => e.key === t) && e.push(Y(t, "videoCacheKey"))
            }),
            c.$W.getConfig("cache.url") && (!t || !1 !== A.u.get(t, "sendStandardTargeting")))
          ) {
            let t = (0, a.parseUrl)(c.$W.getConfig("cache.url"))
            void 0 === e.find((e) => e.key === O.xS.CACHE_HOST) &&
              e.push(
                Y(O.xS.CACHE_HOST, function (e) {
                  return e?.adserverTargeting?.[O.xS.CACHE_HOST] || t.hostname
                }),
              )
          }
        }
        return r
      }
      function Z(e, t, n, r) {
        var i = t[O.iD.ADSERVER_TARGETING]
        return (
          (n.size = n.getSize()),
          (i || []).forEach(function (i) {
            var o = i.key,
              l = i.val
            if ((e[o] && (0, a.logWarn)("The key: " + o + " is being overwritten"), (0, s.fp)(l)))
              try {
                l = l(n, r)
              } catch (e) {
                ;(0, a.logError)("bidmanager", "ERROR", e)
              }
            ;((void 0 !== t.suppressEmptyKeys && !0 === t.suppressEmptyKeys) ||
              o === O.xS.DEAL ||
              o === O.xS.ACAT ||
              o === O.xS.DSP ||
              o === O.xS.CRID) &&
            ((0, a.isEmptyStr)(l) || null == l)
              ? (0, a.logInfo)("suppressing empty key '" + o + "' from adserver targeting")
              : (e[o] = l)
          }),
          e
        )
      }
      function ee(e, t) {
        return (
          e[t.adUnitCode] || (e[t.adUnitCode] = { bids: [] }),
          e[t.adUnitCode].bids.push(t),
          e
        )
      }
    },
    19539: function (e, t, n) {
      "use strict"
      n.d(t, {
        n: function () {
          return u
        },
      })
      var r = n(31360),
        i = n(7729)
      function o(e) {
        Object.assign(this, {
          getAuction(t) {
            let { auctionId: n } = t
            if (null != n) return e().find((e) => e.getAuctionId() === n)
          },
          getAdUnit(t) {
            let { adUnitId: n } = t
            if (null != n)
              return e()
                .flatMap((e) => e.getAdUnits())
                .find((e) => e.adUnitId === n)
          },
          getMediaTypes(e) {
            let { adUnitId: t, requestId: n } = e
            if (null != n) {
              let e = this.getBidRequest({ requestId: n })
              if (null != e && (null == t || e.adUnitId === t)) return e.mediaTypes
            } else if (null != t) {
              let e = this.getAdUnit({ adUnitId: t })
              if (null != e) return e.mediaTypes
            }
          },
          getBidderRequest(t) {
            let { requestId: n, bidderRequestId: r } = t
            if (null != n || null != r) {
              let t = e().flatMap((e) => e.getBidRequests())
              return (null != r && (t = t.filter((e) => e.bidderRequestId === r)), null == n)
                ? t[0]
                : t.find((e) => e.bids && null != e.bids.find((e) => e.bidId === n))
            }
          },
          getBidRequest(t) {
            let { requestId: n } = t
            if (null != n)
              return e()
                .flatMap((e) => e.getBidRequests())
                .flatMap((e) => e.bids)
                .find((e) => e && e.bidId === n)
          },
          getOrtb2(e) {
            return this.getBidderRequest(e)?.ortb2 || this.getAuction(e)?.getFPD()?.global?.ortb2
          },
        })
      }
      var a = n(57788),
        s = n(9423),
        l = n(44868),
        d = n(37292)
      let u = (function () {
        let e = (0, l.H)({
          startTime: (e) => e.end.then(() => e.getAuctionEnd()),
          ttl: (e) =>
            null == (0, d.S9)()
              ? null
              : e.end.then(
                  () => 1e3 * Math.max((0, d.S9)(), ...e.getBidsReceived().map((e) => e.ttl)),
                ),
        })
        ;(0, d.lc)(() => e.refresh())
        let t = { onExpiry: e.onExpiry }
        function n(t) {
          for (let n of e) if (n.getAuctionId() === t) return n
        }
        function u() {
          return e.toArray().flatMap((e) => e.getBidsReceived())
        }
        return (
          (t.addWinningBid = function (e) {
            let t = (0, s.BO)(e.metrics)
            ;(t.checkpoint("bidWon"),
              t.timeBetween("auctionEnd", "bidWon", "adserver.pending"),
              t.timeBetween("requestBids", "bidWon", "adserver.e2e"))
            let i = n(e.auctionId)
            i ? i.addWinningBid(e) : (0, r.logWarn)("Auction not found when adding winning bid")
          }),
          Object.entries({
            getAllWinningBids: { name: "getWinningBids" },
            getBidsRequested: { name: "getBidRequests" },
            getNoBids: {},
            getAdUnits: {},
            getBidsReceived: { pre: (e) => e.getAuctionStatus() === i.UZ },
            getAdUnitCodes: { post: r.uniques },
          }).forEach((n) => {
            let [r, { name: i = r, pre: o, post: a }] = n,
              s = null == o ? (e) => e[i]() : (e) => (o(e) ? e[i]() : []),
              l = null == a ? (e) => e : (e) => e.filter(a)
            t[r] = () => l(e.toArray().flatMap(s))
          }),
          (t.getAllBidsForAdUnitCode = function (e) {
            return u().filter((t) => t && t.adUnitCode === e)
          }),
          (t.createAuction = function (t) {
            var n
            let r = (0, i.mX)(t)
            return ((n = r), e.add(n), r)
          }),
          (t.findBidByAdId = function (e) {
            return u().find((t) => t.adId === e)
          }),
          (t.getStandardBidderAdServerTargeting = function () {
            return (0, i.HN)()[a.iD.ADSERVER_TARGETING]
          }),
          (t.setStatusForBids = function (e, r) {
            let i = t.findBidByAdId(e)
            if ((i && (i.status = r), i && r === a.tl.BID_TARGETING_SET)) {
              let e = n(i.auctionId)
              e && e.setBidTargeting(i)
            }
          }),
          (t.getLastAuctionId = function () {
            let t = e.toArray()
            return t.length && t[t.length - 1].getAuctionId()
          }),
          (t.clearAllAuctions = function () {
            e.clear()
          }),
          (t.index = new o(() => e.toArray())),
          t
        )
      })()
    },
    37292: function (e, t, n) {
      "use strict"
      n.d(t, {
        S9: function () {
          return u
        },
        cT: function () {
          return d
        },
        lc: function () {
          return c
        },
      })
      var r = n(41831),
        i = n(31360)
      let o = "minBidCacheTTL",
        a = 1,
        s = null,
        l = []
      function d(e) {
        return e.ttl - (e.hasOwnProperty("ttlBuffer") ? e.ttlBuffer : a)
      }
      function u() {
        return s
      }
      function c(e) {
        l.push(e)
      }
      ;(r.$W.getConfig("ttlBuffer", (e) => {
        "number" == typeof e.ttlBuffer
          ? (a = e.ttlBuffer)
          : (0, i.logError)("Invalid value for ttlBuffer", e.ttlBuffer)
      }),
        r.$W.getConfig(o, (e) => {
          s !== (s = "number" == typeof (s = e?.[o]) ? s : null) && l.forEach((e) => e(s))
        }))
    },
    33242: function (e, t, n) {
      "use strict"
      n.d(t, {
        u: function () {
          return s
        },
      })
      var r = n(17958),
        i = n(31360),
        o = n(76030),
        a = n(57788)
      let s = new (class {
        constructor(e, t) {
          ;((this.getSettings = e), (this.defaultScope = t))
        }
        get(e, t) {
          let n = this.getOwn(e, t)
          return (void 0 === n && (n = this.getOwn(null, t)), n)
        }
        getOwn(e, t) {
          return ((e = this.#f(e)), (0, r.A)(this.getSettings(), `${e}.${t}`))
        }
        getScopes() {
          return Object.keys(this.getSettings()).filter((e) => e !== this.defaultScope)
        }
        settingsFor(e) {
          return (0, i.mergeDeep)({}, this.ownSettingsFor(null), this.ownSettingsFor(e))
        }
        ownSettingsFor(e) {
          return ((e = this.#f(e)), this.getSettings()[e] || {})
        }
        #f(e) {
          return null == e ? this.defaultScope : e
        }
      })(() => (0, o.m)().bidderSettings || {}, a.iD.BD_SETTING_STANDARD)
    },
    21770: function (e, t, n) {
      "use strict"
      n.d(t, {
        O: function () {
          return o
        },
      })
      var r = n(31360)
      function i() {
        let {
          src: e = "client",
          bidder: t = "",
          bidId: n,
          transactionId: i,
          adUnitId: o,
          auctionId: a,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        ;(Object.assign(this, {
          bidderCode: t,
          width: 0,
          height: 0,
          adId: (0, r.getUniqueIdentifierStr)(),
          requestId: n,
          transactionId: i,
          adUnitId: o,
          auctionId: a,
          mediaType: "banner",
          source: e,
        }),
          (this.getSize = function () {
            return this.width + "x" + this.height
          }))
      }
      function o(e) {
        return new i(e)
      }
    },
    62435: function (e, t, n) {
      "use strict"
      n.d(t, {
        rT: function () {
          return o
        },
        uP: function () {
          return i
        },
        k: function () {
          return r
        },
      })
      function r() {
        return "pbjs"
      }
      function i() {
        return !0
      }
      function o() {
        return "https://cdn.jsdelivr.net/npm/prebid.js@11.1.0/dist/chunks/"
      }
    },
    41831: function (e, t, n) {
      "use strict"
      n.d(t, {
        $W: function () {
          return p
        },
        Ov: function () {
          return u
        },
      })
      var r = n(40198),
        i = n(31360),
        o = n(10208),
        a = n(17958),
        s = n(57788)
      let l = "TRUE" === (0, i.getParameterByName)(s.M).toUpperCase(),
        d = {},
        u = "random",
        c = {}
      ;((c[u] = !0), (c.fixed = !0))
      let f = {
        LOW: "low",
        MEDIUM: "medium",
        HIGH: "high",
        AUTO: "auto",
        DENSE: "dense",
        CUSTOM: "custom",
      }
      function g(e) {
        let t,
          n,
          a,
          s = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          l = s
            ? {
                priceGranularity: f.MEDIUM,
                customPriceBucket: {},
                mediaTypePriceGranularity: {},
                bidderSequence: u,
                auctionOptions: {},
              }
            : {},
          d =
            ((n = ["secondaryBidders"]),
            (a = []
              .concat(
                (t = [
                  "suppressStaleRender",
                  "suppressExpiredRender",
                  "legacyRender",
                  "rejectUnknownMediaTypes",
                  "rejectInvalidMediaTypes",
                ]),
              )
              .concat(n)),
            function (e) {
              if (!(0, o.Qd)(e)) return ((0, i.logWarn)("Auction Options must be an object"), !1)
              for (let r of Object.keys(e)) {
                if (!a.includes(r))
                  return ((0, i.logWarn)(`Auction Options given an incorrect param: ${r}`), !1)
                if (n.includes(r)) {
                  if (!(0, o.cy)(e[r]))
                    return ((0, i.logWarn)(`Auction Options ${r} must be of type Array`), !1)
                  else if (!e[r].every(o.O8))
                    return ((0, i.logWarn)(`Auction Options ${r} must be only string`), !1)
                } else if (t.includes(r) && !(0, o.Lm)(e[r]))
                  return ((0, i.logWarn)(`Auction Options ${r} must be of type boolean`), !1)
              }
              return !0
            })
        function g(e) {
          return l[e]
        }
        function p(t, n) {
          ;(l.hasOwnProperty(t) || Object.defineProperty(e, t, { enumerable: !0 }), (l[t] = n))
        }
        return (
          Object.defineProperties(
            e,
            Object.fromEntries(
              Object.entries({
                publisherDomain: {
                  set(e) {
                    ;(null != e &&
                      (0, i.logWarn)(
                        "publisherDomain is deprecated and has no effect since v7 - use pageUrl instead",
                      ),
                      p("publisherDomain", e))
                  },
                },
                priceGranularity: {
                  set(e) {
                    h(e) &&
                      ("string" == typeof e
                        ? p("priceGranularity", m(e) ? e : f.MEDIUM)
                        : (0, o.Qd)(e) &&
                          (p("customPriceBucket", e),
                          p("priceGranularity", f.CUSTOM),
                          (0, i.logMessage)("Using custom price granularity")))
                  },
                },
                customPriceBucket: {},
                mediaTypePriceGranularity: {
                  set(e) {
                    null != e &&
                      p(
                        "mediaTypePriceGranularity",
                        Object.keys(e).reduce(
                          (t, n) => (
                            h(e[n])
                              ? "string" == typeof e
                                ? (t[n] = m(e[n]) ? e[n] : l.priceGranularity)
                                : (0, o.Qd)(e) &&
                                  ((t[n] = e[n]),
                                  (0, i.logMessage)(`Using custom price granularity for ${n}`))
                              : (0, i.logWarn)(`Invalid price granularity for media type: ${n}`),
                            t
                          ),
                          {},
                        ),
                      )
                  },
                },
                bidderSequence: {
                  set(e) {
                    c[e]
                      ? p("bidderSequence", e)
                      : (0, i.logWarn)(`Invalid order: ${e}. Bidder Sequence was not set.`)
                  },
                },
                auctionOptions: {
                  set(e) {
                    d(e) && p("auctionOptions", e)
                  },
                },
              }).map((e) => {
                let [t, n] = e
                return [
                  t,
                  Object.assign(
                    {
                      get: g.bind(null, t),
                      set: p.bind(null, t),
                      enumerable: l.hasOwnProperty(t),
                      configurable: !l.hasOwnProperty(t),
                    },
                    n,
                  ),
                ]
              }),
            ),
          ),
          e
        )
        function m(e) {
          return Object.keys(f).find((t) => e === f[t])
        }
        function h(e) {
          if (!e)
            return ((0, i.logError)("Prebid Error: no value passed to `setPriceGranularity()`"), !1)
          if ("string" == typeof e)
            m(e) ||
              (0, i.logWarn)(
                "Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.",
              )
          else if ((0, o.Qd)(e) && !(0, r.q)(e))
            return (
              (0, i.logError)("Invalid custom price value passed to `setPriceGranularity()`"),
              !1
            )
          return !0
        }
      }
      let p = (function () {
        let e,
          t,
          n,
          r = [],
          s = null
        function u() {
          e = {}
          let r = g({
            debug: l,
            bidderTimeout: 3e3,
            enableSendAllBids: !0,
            useBidCache: !1,
            deviceAccess: !0,
            disableAjaxTimeout: !1,
            maxNestedIframes: 10,
            maxBid: 5e3,
            userSync: { topics: d },
          })
          ;(t && y(Object.keys(t).reduce((e, n) => (t[n] !== r[n] && (e[n] = r[n] || {}), e), {})),
            (t = r),
            (n = {}))
        }
        function c() {
          if (s && n && (0, o.Qd)(n[s])) {
            let e = n[s],
              r = new Set([...Object.keys(t), ...Object.keys(e)]),
              a = {}
            for (let n of r) {
              let r = t[n],
                s = e[n]
              a[n] =
                void 0 === s ? r : void 0 === r ? s : (0, o.Qd)(s) ? (0, i.mergeDeep)({}, r, s) : s
            }
            return a
          }
          return { ...t }
        }
        let [f, p] = [
            c,
            function () {
              let e = c()
              return (
                Object.defineProperty(e, "ortb2", {
                  get: function () {
                    throw Error("invalid access to 'orbt2' config - use request parameters instead")
                  },
                }),
                e
              )
            },
          ].map(
            (e) =>
              function () {
                if (
                  arguments.length <= 1 &&
                  "function" != typeof (arguments.length <= 0 ? void 0 : arguments[0])
                ) {
                  let t = arguments.length <= 0 ? void 0 : arguments[0]
                  return t ? (0, a.A)(e(), t) : c()
                }
                return (function (e, t) {
                  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    o = t
                  if (
                    ("string" != typeof e && ((o = e), (e = "*"), (n = t || {})),
                    "function" != typeof o)
                  )
                    return void (0, i.logError)("listener must be a function")
                  let a = { topic: e, callback: o }
                  return (
                    r.push(a),
                    n.init && o("*" === e ? p() : { [e]: p(e) }),
                    function () {
                      r.splice(r.indexOf(a), 1)
                    }
                  )
                })(...arguments)
              },
          ),
          [m, h] = [p, f].map(
            (e) =>
              function () {
                let t = e(...arguments)
                return (t && "object" == typeof t && (t = (0, o.Go)(t)), t)
              },
          )
        function b(n) {
          if (!(0, o.Qd)(n)) return void (0, i.logError)("setConfig options must be an object")
          let r = Object.keys(n),
            a = {}
          ;(r.forEach((r) => {
            let s = n[r]
            ;(0, o.Qd)(e[r]) && (0, o.Qd)(s) && (s = Object.assign({}, e[r], s))
            try {
              a[r] = t[r] = s
            } catch (e) {
              ;(0, i.logWarn)(`Cannot set config for property ${r} : `, e)
            }
          }),
            y(a))
        }
        function y(e) {
          let t = Object.keys(e)
          ;(r
            .filter((e) => t.includes(e.topic))
            .forEach((t) => {
              t.callback({ [t.topic]: e[t.topic] })
            }),
            r.filter((e) => "*" === e.topic).forEach((t) => t.callback(e)))
        }
        function v(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          try {
            ;((function (e) {
              if (!(0, o.Qd)(e)) throw Error("setBidderConfig bidder options must be an object")
              if (!(Array.isArray(e.bidders) && e.bidders.length))
                throw Error(
                  "setBidderConfig bidder options must contain a bidders list with at least 1 bidder",
                )
              if (!(0, o.Qd)(e.config))
                throw Error("setBidderConfig bidder options must contain a config object")
            })(e),
              e.bidders.forEach((r) => {
                ;(n[r] || (n[r] = g({}, !1)),
                  Object.keys(e.config).forEach((a) => {
                    let s = e.config[a],
                      l = n[r][a]
                    if ((0, o.Qd)(s) && (null == l || (0, o.Qd)(l))) {
                      let e = t ? i.mergeDeep : Object.assign
                      n[r][a] = e({}, l || {}, s)
                    } else n[r][a] = s
                  }))
              }))
          } catch (e) {
            ;(0, i.logError)(e)
          }
        }
        function E(e, t) {
          s = e
          try {
            return t()
          } finally {
            w()
          }
        }
        function w() {
          s = null
        }
        return (
          u(),
          {
            getCurrentBidder: function () {
              return s
            },
            resetBidder: w,
            getConfig: p,
            getAnyConfig: f,
            readConfig: m,
            readAnyConfig: h,
            setConfig: b,
            mergeConfig: function (e) {
              if (!(0, o.Qd)(e)) return void (0, i.logError)("mergeConfig input must be an object")
              let t = (0, i.mergeDeep)(c(), e)
              return (b({ ...t }), t)
            },
            setDefaults: function (n) {
              ;(0, o.Qd)(e)
                ? (Object.assign(e, n), Object.assign(t, n))
                : (0, i.logError)("defaults must be an object")
            },
            resetConfig: u,
            runWithBidder: E,
            callbackWithBidder: function (e) {
              return function (t) {
                return function () {
                  if ("function" == typeof t) {
                    for (var n = arguments.length, r = Array(n), o = 0; o < n; o++)
                      r[o] = arguments[o]
                    return E(e, t.bind(this, ...r))
                  }
                  ;(0, i.logWarn)("config.callbackWithBidder callback is not a function")
                }
              }
            },
            setBidderConfig: v,
            getBidderConfig: function () {
              return n
            },
            mergeBidderConfig: function (e) {
              return v(e, !0)
            },
          }
        )
      })()
    },
    98875: function (e, t, n) {
      "use strict"
      let r, i, o
      n.d(t, {
        B1: function () {
          return u
        },
        SL: function () {
          return y
        },
        ad: function () {
          return p
        },
        mW: function () {
          return f
        },
        o2: function () {
          return h
        },
        t6: function () {
          return g
        },
      })
      var a = n(31360),
        s = n(10208),
        l = n(16886),
        d = n(41831)
      let u = Object.freeze({})
      class c {
        #g
        #p
        #m
        #h
        #b = !0
        #y
        constructor() {
          this.reset()
        }
        #e(e) {
          ;((this.#h = !0), (this.#p = e), this.#m.resolve(e))
        }
        reset() {
          ;((this.#m = (0, l.v6)()),
            (this.#g = !1),
            (this.#p = null),
            (this.#h = !1),
            (this.generatedTime = null))
        }
        enable() {
          this.#g = !0
        }
        get enabled() {
          return this.#g
        }
        get ready() {
          return this.#h
        }
        get promise() {
          return this.#h ? l.U9.resolve(this.#p) : (this.#g || this.#e(null), this.#m.promise)
        }
        setConsentData(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, a.timestamp)()
          ;((this.generatedTime = t), (this.#b = !0), this.#e(e))
        }
        getConsentData() {
          return this.#g ? this.#p : null
        }
        get hash() {
          return (
            this.#b &&
              ((this.#y = (0, a.cyrb53Hash)(
                JSON.stringify(
                  this.#p && this.hashFields ? this.hashFields.map((e) => this.#p[e]) : this.#p,
                ),
              )),
              (this.#b = !1)),
            this.#y
          )
        }
      }
      let f = new (class extends c {
          hashFields = ["gdprApplies", "consentString"]
          getConsentMeta() {
            let e = this.getConsentData()
            if (e && e.vendorData && this.generatedTime)
              return {
                gdprApplies: e.gdprApplies,
                consentStringSize: (0, s.O8)(e.vendorData.tcString)
                  ? e.vendorData.tcString.length
                  : 0,
                generatedAt: this.generatedTime,
                apiVersion: e.apiVersion,
              }
          }
        })(),
        g = new (class extends c {
          getConsentMeta() {
            if (this.getConsentData() && this.generatedTime)
              return { generatedAt: this.generatedTime }
          }
        })(),
        p = new (class extends c {
          hashFields = ["applicableSections", "gppString"]
          getConsentMeta() {
            if (this.getConsentData() && this.generatedTime)
              return { generatedAt: this.generatedTime }
          }
        })(),
        m = (() => {
          function e() {
            return !!d.$W.getConfig("coppa")
          }
          return {
            getCoppa: e,
            getConsentData: e,
            getConsentMeta: e,
            reset() {},
            get promise() {
              return l.U9.resolve(e())
            },
            get hash() {
              return e() ? "1" : "0"
            },
          }
        })(),
        h =
          ((r = {}),
          (i = {}),
          (o = {}),
          {
            register(e, t, n) {
              n &&
                (((r[t] = r[t] || {})[e] = n),
                i.hasOwnProperty(t) ? i[t] !== n && (i[t] = o) : (i[t] = n))
            },
            get(e) {
              let t = { modules: r[e] || {} }
              return (i.hasOwnProperty(e) && i[e] !== o && (t.gvlid = i[e]), t)
            },
          }),
        b = { gdpr: f, usp: g, gpp: p, coppa: m },
        y = (function () {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
            t = Object.entries(e)
          return Object.assign(
            {
              get promise() {
                return l.U9.all(
                  t.map((e) => {
                    let [t, n] = e
                    return n.promise.then((e) => [t, e])
                  }),
                ).then((e) => Object.fromEntries(e))
              },
              get hash() {
                return (0, a.cyrb53Hash)(
                  t
                    .map((e) => {
                      let [t, n] = e
                      return n.hash
                    })
                    .join(":"),
                )
              },
            },
            Object.fromEntries(
              ["getConsentData", "getConsentMeta", "reset"].map((e) => [
                e,
                function () {
                  return Object.fromEntries(
                    t.map((t) => {
                      let [n, r] = t
                      return [n, r[e]()]
                    }),
                  )
                },
              ]),
            ),
          )
        })()
    },
    57788: function (e, t, n) {
      "use strict"
      n.d(t, {
        IY: function () {
          return E
        },
        M: function () {
          return i
        },
        RW: function () {
          return f
        },
        Tf: function () {
          return p
        },
        UE: function () {
          return l
        },
        Zh: function () {
          return u
        },
        _B: function () {
          return y
        },
        as: function () {
          return a
        },
        cA: function () {
          return s
        },
        h0: function () {
          return m
        },
        iD: function () {
          return r
        },
        jO: function () {
          return h
        },
        nl: function () {
          return v
        },
        oA: function () {
          return b
        },
        qY: function () {
          return o
        },
        tl: function () {
          return g
        },
        x5: function () {
          return c
        },
        xS: function () {
          return d
        },
      })
      let r = {
          PL_CODE: "code",
          PL_SIZE: "sizes",
          PL_BIDS: "bids",
          BD_BIDDER: "bidder",
          BD_ID: "paramsd",
          BD_PL_ID: "placementId",
          ADSERVER_TARGETING: "adserverTargeting",
          BD_SETTING_STANDARD: "standard",
        },
        i = "pbjs_debug",
        o = {
          AUCTION_INIT: "auctionInit",
          AUCTION_TIMEOUT: "auctionTimeout",
          AUCTION_END: "auctionEnd",
          BID_ADJUSTMENT: "bidAdjustment",
          BID_TIMEOUT: "bidTimeout",
          BID_REQUESTED: "bidRequested",
          BID_RESPONSE: "bidResponse",
          BID_REJECTED: "bidRejected",
          NO_BID: "noBid",
          BID_WON: "bidWon",
          BIDDER_DONE: "bidderDone",
          BIDDER_ERROR: "bidderError",
          SET_TARGETING: "setTargeting",
          BEFORE_REQUEST_BIDS: "beforeRequestBids",
          BEFORE_BIDDER_HTTP: "beforeBidderHttp",
          REQUEST_BIDS: "requestBids",
          AD_RENDER_FAILED: "adRenderFailed",
          AD_RENDER_SUCCEEDED: "adRenderSucceeded",
          TCF2_ENFORCEMENT: "tcf2Enforcement",
          AUCTION_DEBUG: "auctionDebug",
          BID_VIEWABLE: "bidViewable",
          STALE_RENDER: "staleRender",
          EXPIRED_RENDER: "expiredRender",
          BILLABLE_EVENT: "billableEvent",
          PBS_ANALYTICS: "pbsAnalytics",
          BEFORE_PBS_HTTP: "beforePBSHttp",
          BROWSI_INIT: "browsiInit",
          BROWSI_DATA: "browsiData",
          BROWSER_INTERVENTION: "browserIntervention",
        },
        a = {
          PREVENT_WRITING_ON_MAIN_DOCUMENT: "preventWritingOnMainDocument",
          NO_AD: "noAd",
          EXCEPTION: "exception",
          CANNOT_FIND_AD: "cannotFindAd",
          MISSING_DOC_OR_ADID: "missingDocOrAdid",
        },
        s = { bidWon: "adUnitCode" },
        l = {
          LOW: "low",
          MEDIUM: "medium",
          HIGH: "high",
          AUTO: "auto",
          DENSE: "dense",
          CUSTOM: "custom",
        },
        d = {
          BIDDER: "hb_bidder",
          AD_ID: "hb_adid",
          PRICE_BUCKET: "hb_pb",
          SIZE: "hb_size",
          DEAL: "hb_deal",
          SOURCE: "hb_source",
          FORMAT: "hb_format",
          UUID: "hb_uuid",
          CACHE_ID: "hb_cache_id",
          CACHE_HOST: "hb_cache_host",
          ADOMAIN: "hb_adomain",
          ACAT: "hb_acat",
          CRID: "hb_crid",
          DSP: "hb_dsp",
          VERSION: "hb_ver",
        },
        u = {
          BIDDER: "hb_bidder",
          AD_ID: "hb_adid",
          PRICE_BUCKET: "hb_pb",
          SIZE: "hb_size",
          DEAL: "hb_deal",
          FORMAT: "hb_format",
          UUID: "hb_uuid",
          CACHE_HOST: "hb_cache_host",
          VERSION: "hb_ver",
        },
        c = {
          title: "hb_native_title",
          body: "hb_native_body",
          body2: "hb_native_body2",
          privacyLink: "hb_native_privacy",
          privacyIcon: "hb_native_privicon",
          sponsoredBy: "hb_native_brand",
          image: "hb_native_image",
          icon: "hb_native_icon",
          clickUrl: "hb_native_linkurl",
          displayUrl: "hb_native_displayurl",
          cta: "hb_native_cta",
          rating: "hb_native_rating",
          address: "hb_native_address",
          downloads: "hb_native_downloads",
          likes: "hb_native_likes",
          phone: "hb_native_phone",
          price: "hb_native_price",
          salePrice: "hb_native_saleprice",
          rendererUrl: "hb_renderer_url",
          adTemplate: "hb_adTemplate",
        },
        f = {
          SRC: "s2s",
          DEFAULT_ENDPOINT: "https://prebid.adnxs.com/pbs/v1/openrtb2/auction",
          SYNCED_BIDDERS_KEY: "pbjsSyncs",
        },
        g = {
          BID_TARGETING_SET: "targetingSet",
          RENDERED: "rendered",
          BID_REJECTED: "bidRejected",
        },
        p = {
          INVALID: "Bid has missing or invalid properties",
          INVALID_REQUEST_ID: "Invalid request ID",
          BIDDER_DISALLOWED:
            "Bidder code is not allowed by allowedAlternateBidderCodes / allowUnknownBidderCodes",
          FLOOR_NOT_MET: "Bid does not meet price floor",
          CANNOT_CONVERT_CURRENCY: "Unable to convert currency",
          DSA_REQUIRED: "Bid does not provide required DSA transparency info",
          DSA_MISMATCH: "Bid indicates inappropriate DSA rendering method",
          PRICE_TOO_HIGH: "Bid price exceeds maximum value",
        },
        m = {
          body: "desc",
          body2: "desc2",
          sponsoredBy: "sponsored",
          cta: "ctatext",
          rating: "rating",
          address: "address",
          downloads: "downloads",
          likes: "likes",
          phone: "phone",
          price: "price",
          salePrice: "saleprice",
          displayUrl: "displayurl",
        },
        h = {
          sponsored: 1,
          desc: 2,
          rating: 3,
          likes: 4,
          downloads: 5,
          price: 6,
          saleprice: 7,
          phone: 8,
          address: 9,
          desc2: 10,
          displayurl: 11,
          ctatext: 12,
        },
        b = { ICON: 1, MAIN: 3 },
        y = ["privacyIcon", "clickUrl", "adTemplate", "rendererUrl", "type"],
        v = {
          REQUEST: "Prebid Request",
          RESPONSE: "Prebid Response",
          NATIVE: "Prebid Native",
          EVENT: "Prebid Event",
          INTERVENTION: "Prebid Intervention",
        },
        E = "__pb_locator__"
    },
    40198: function (e, t, n) {
      "use strict"
      n.d(t, {
        j: function () {
          return u
        },
        q: function () {
          return f
        },
      })
      var r = n(31360),
        i = n(41831)
      let o = { buckets: [{ max: 5, increment: 0.5 }] },
        a = { buckets: [{ max: 20, increment: 0.1 }] },
        s = { buckets: [{ max: 20, increment: 0.01 }] },
        l = {
          buckets: [
            { max: 3, increment: 0.01 },
            { max: 8, increment: 0.05 },
            { max: 20, increment: 0.5 },
          ],
        },
        d = {
          buckets: [
            { max: 5, increment: 0.05 },
            { max: 10, increment: 0.1 },
            { max: 20, increment: 0.5 },
          ],
        }
      function u(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          r = parseFloat(e)
        return (
          isNaN(r) && (r = ""),
          {
            low: "" === r ? "" : c(e, o, n),
            med: "" === r ? "" : c(e, a, n),
            high: "" === r ? "" : c(e, s, n),
            auto: "" === r ? "" : c(e, d, n),
            dense: "" === r ? "" : c(e, l, n),
            custom: "" === r ? "" : c(e, t, n),
          }
        )
      }
      function c(e, t, n) {
        let o = ""
        if (!f(t)) return o
        let a = t.buckets.reduce((e, t) => (e.max > t.max ? e : t), { max: 0 }),
          s = 0,
          l = t.buckets.find((t) => {
            if (e > a.max * n) {
              let e = t.precision
              ;(void 0 === e && (e = 2), (o = (t.max * n).toFixed(e)))
            } else {
              if (e <= t.max * n && e >= s * n) return ((t.min = s), t)
              s = t.max
            }
          })
        return (
          l &&
            (o = (function (e, t, n) {
              let o,
                a,
                s = void 0 !== t.precision ? t.precision : 2,
                l = t.increment * n,
                d = t.min * n,
                u = Math.floor,
                c = i.$W.getConfig("cpmRoundingFunction")
              "function" == typeof c && (u = c)
              let f = Math.pow(10, s + 2),
                g = (e * f - d * f) / (l * f)
              try {
                o = u(g) * l + d
              } catch (e) {
                a = !0
              }
              return (
                (a || "number" != typeof o) &&
                  ((0, r.logWarn)("Invalid rounding function passed in config"),
                  (o = Math.floor(g) * l + d)),
                (o = Number(o.toFixed(10))).toFixed(s)
              )
            })(e, l, n)),
          o
        )
      }
      function f(e) {
        if ((0, r.isEmpty)(e) || !e.buckets || !Array.isArray(e.buckets)) return !1
        let t = !0
        return (
          e.buckets.forEach((e) => {
            ;(e.max && e.increment) || (t = !1)
          }),
          t
        )
      }
    },
    9479: function (e, t, n) {
      "use strict"
      let r
      n.d(t, {
        xh: function () {
          return s
        },
        kj: function () {
          return l
        },
        HH: function () {
          return d
        },
      })
      var i = n(16886),
        o = n(31360),
        a = n(27426)
      let s = 3,
        l = (0, a.A_)("sync", function (e) {
          return '(()=>{"use strict";const e="Prebid Event",n="browserIntervention";window.render=function(t,r,i){let{ad:o,adUrl:s,width:d,height:c,instl:h}=t,{mkFrame:l,sendMessage:a}=r;if(function(){const t=window;if("ReportingObserver"in t)try{new t.ReportingObserver(t=>{var r;r=t[0],a(e,{event:n,intervention:r})},{buffered:!0,types:["intervention"]}).observe()}catch(e){}}(),!o&&!s){const e=new Error("Missing ad markup or URL");throw e.reason="noAd",e}{if(null==c){const e=i.document?.body;[e,e?.parentElement].filter(e=>null!=e?.style).forEach(e=>{e.style.height="100%"})}const e=i.document,n={width:d??"100%",height:c??"100%"};if(s&&!o?n.src=s:n.srcdoc=o,e.body.appendChild(l(e,n)),h&&i.frameElement){const e=i.frameElement.style;e.width=d?`${d}px`:"100vw",e.height=c?`${c}px`:"100vh"}}}})();'
        }),
        d =
          ((r = {}),
          function (e) {
            let t = l(e)
            return (
              r.hasOwnProperty(t) ||
                (r[t] = new i.U9((n) => {
                  let r = (0, o.createInvisibleIframe)()
                  r.srcdoc = `
            <script>${t}</script>
            <script>
              window.parent.postMessage(
                  { type: 'RENDERER_READY_${e.adId}' },
                  '*'
            );</script>`
                  let i = (t) => {
                    t.source === r.contentWindow &&
                      t.data?.type === `RENDERER_READY_${e.adId}` &&
                      (window.removeEventListener("message", i), n(r.contentWindow.render))
                  }
                  ;(window.addEventListener("message", i), document.body.appendChild(r))
                })),
              r[t]
            )
          })
    },
    61768: function (e, t, n) {
      "use strict"
      function r(e) {
        return (e ?? []).reduce((e, t) => {
          let { event: n, method: r, url: i } = t,
            o = (e[n] = e[n] ?? {})
          return ((o[r] = o[r] ?? []).push(i), e)
        }, {})
      }
      n.d(t, {
        $: function () {
          return r
        },
      })
    },
    62504: function (e, t, n) {
      "use strict"
      n.d(t, {
        AU: function () {
          return p
        },
        Ic: function () {
          return b
        },
        kQ: function () {
          return h
        },
        on: function () {
          return g
        },
      })
      var r = n(31360),
        i = n(57788),
        o = n(44868),
        a = n(41831)
      let s = "eventHistoryTTL",
        l = null,
        d = (0, o.H)({ monotonic: !0, ttl: () => l })
      a.$W.getConfig(s, (e) => {
        let t = l,
          n = e?.[s]
        t !== (l = "number" == typeof n ? 1e3 * n : null) && d.refresh()
      })
      let u = Object.values(i.qY),
        c = i.cA,
        f = (function () {
          let e = {}
          function t(e) {
            return u.includes(e)
          }
          return {
            has: t,
            on: function (n, i, o) {
              if (t(n)) {
                let t = e[n] || { que: [] }
                ;(o ? ((t[o] = t[o] || { que: [] }), t[o].que.push(i)) : t.que.push(i), (e[n] = t))
              } else r.logError("Wrong event name : " + n + " Valid event names :" + u)
            },
            emit: function (t) {
              let n, i, o, a
              for (var s, l = arguments.length, u = Array(l > 1 ? l - 1 : 0), f = 1; f < l; f++)
                u[f - 1] = arguments[f]
              ;(r.logMessage("Emitting event for: " + t),
                (i = (n = u[0] || {})[c[t]]),
                (s = Object.keys((o = e[t] || { que: [] }))),
                (a = []),
                d.add({ eventType: t, args: n, id: i, elapsedTime: r.getPerformanceNow() }),
                i && s.includes(i) && a.push(...o[i].que),
                a.push(...o.que),
                (a || []).forEach(function (e) {
                  if (e)
                    try {
                      e(...u)
                    } catch (e) {
                      r.logError("Error executing handler:", "events.js", e, t)
                    }
                }))
            },
            off: function (t, n, i) {
              let o = e[t]
              r.isEmpty(o) ||
                (r.isEmpty(o.que) && r.isEmpty(o[i])) ||
                (i && (r.isEmpty(o[i]) || r.isEmpty(o[i].que))) ||
                (i
                  ? (o[i].que || []).forEach(function (e) {
                      let t = o[i].que
                      e === n && t.splice(t.indexOf(e), 1)
                    })
                  : (o.que || []).forEach(function (e) {
                      let t = o.que
                      e === n && t.splice(t.indexOf(e), 1)
                    }),
                (e[t] = o))
            },
            get: function () {
              return e
            },
            addEvents: function (e) {
              u = u.concat(e)
            },
            getEvents: function () {
              return d.toArray().map((e) => Object.assign({}, e))
            },
          }
        })()
      r._setEventEmitter(f.emit.bind(f))
      let { on: g, off: p, get: m, getEvents: h, emit: b, addEvents: y, has: v } = f
    },
    64626: function (e, t, n) {
      "use strict"
      n.d(t, {
        wU: function () {
          return C
        },
      })
      var r = n(27426),
        i = n(91965),
        o = n(95654),
        a = n(31360),
        s = n(67166),
        l = n(17958),
        d = n(10208),
        u = n(78068),
        c = n(41831),
        f = n(16886)
      let g = ["architecture", "bitness", "model", "platformVersion", "fullVersionList"],
        p = ["brands", "mobile", "platform"],
        m = (function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : window.navigator?.userAgentData,
            t = e && p.some((t) => void 0 !== e[t]) ? Object.freeze(b(1, e)) : null
          return function () {
            return t
          }
        })(),
        h = (function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : window.navigator?.userAgentData,
            t = {},
            n = new WeakMap()
          return function () {
            let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g
            if (!n.has(r)) {
              let e = Array.from(r)
              ;(e.sort(), n.set(r, e.join("|")))
            }
            let i = n.get(r)
            if (!t.hasOwnProperty(i))
              try {
                t[i] = e
                  .getHighEntropyValues(r)
                  .then((e) => ((0, a.isEmpty)(e) ? null : Object.freeze(b(2, e))))
                  .catch(() => null)
              } catch (e) {
                t[i] = f.U9.resolve(null)
              }
            return t[i]
          }
        })()
      function b(e, t) {
        function n(e, t) {
          let n = { brand: e }
          return ((0, d.O8)(t) && !(0, a.isEmptyStr)(t) && (n.version = t.split(".")), n)
        }
        let r = { source: e }
        return (
          t.platform && (r.platform = n(t.platform, t.platformVersion)),
          (t.fullVersionList || t.brands) &&
            (r.browsers = (t.fullVersionList || t.brands).map((e) => {
              let { brand: t, version: r } = e
              return n(t, r)
            })),
          void 0 !== t.mobile && (r.mobile = +!!t.mobile),
          ["model", "bitness", "architecture"].forEach((e) => {
            let n = t[e]
            ;(0, d.O8)(n) && (r[e] = n)
          }),
          r
        )
      }
      let y = ["dooh", "app", "site"]
      function v(e, t) {
        return null != e[t] && Object.keys(e[t]).length > 0
      }
      var E = n(39248),
        w = n(25260),
        I = n(37830)
      let A = {
          getRefererInfo: i.EN,
          findRootDomain: o.S,
          getWindowTop: a.getWindowTop,
          getWindowSelf: a.getWindowSelf,
          getHighEntropySUA: h,
          getLowEntropySUA: m,
          getDocument: a.getDocument,
        },
        C = (0, r.A_)("sync", (e) => {
          let t,
            n = [
              e,
              (Array.isArray((t = c.$W.getConfig("firstPartyData.uaHints"))) && 0 !== t.length
                ? A.getHighEntropySUA(t)
                : f.U9.resolve(A.getLowEntropySUA())
              ).catch(() => null),
              f.U9.resolve(
                "cookieDeprecationLabel" in navigator &&
                  (0, E.io)(I.Ue, (0, w.s)("prebid", "cdep")) &&
                  navigator.cookieDeprecationLabel.getValue(),
              ).catch(() => null),
            ]
          return f.U9.all(n).then((e) => {
            var t
            let [n, r, o] = e,
              d = A.getRefererInfo()
            ;(Object.entries(T).forEach((e) => {
              let [t, r] = e,
                i = r(n, d)
              i && Object.keys(i).length > 0 && (n[t] = (0, a.mergeDeep)({}, i, n[t]))
            }),
              r && (0, s.J)(n, "device.sua", Object.assign({}, r, n.device.sua)),
              o && (0, s.J)(n, "device.ext", Object.assign({}, { cdep: o }, n.device.ext)))
            let u = A.getDocument().documentElement.lang
            if (
              u &&
              ((0, s.J)(n, "site.ext.data.documentLang", u), !(0, l.A)(n, "site.content.language"))
            ) {
              let e = u.split("-")[0]
              ;(0, s.J)(n, "site.content.language", e)
            }
            for (let e of ((t = n),
            y.reduce(
              (e, n) => (
                v(t, n) &&
                  (null != e
                    ? ((0, a.logWarn)(`FPD specifies both '${e}' and '${n}'; dropping the latter.`),
                      delete t[n])
                    : (e = n)),
                e
              ),
              null,
            ),
            (n = t),
            y))
              if (v(n, e)) {
                n[e] = (0, a.mergeDeep)(
                  {},
                  (function (e, t) {
                    let n = (0, i.gR)(t.page, { noLeadingWww: !0 }),
                      r = new Set()
                    return (
                      (c.$W.getConfig("firstPartyData.keywords.meta") ?? !0) &&
                        (k() ?? []).forEach((e) => r.add(e)),
                      (c.$W.getConfig("firstPartyData.keywords.json") ?? !0) &&
                        (D() ?? []).forEach((e) => r.add(e)),
                      O({
                        domain: n,
                        keywords: r.size > 0 ? Array.from(r.keys()).join(",") : void 0,
                        publisher: O({ domain: A.findRootDomain(n) }),
                      })
                    )
                  })(0, d),
                  n[e],
                )
                break
              }
            return n
          })
        })
      function S(e) {
        try {
          return e(A.getWindowTop())
        } catch (t) {
          return e(A.getWindowSelf())
        }
      }
      function O(e) {
        return (0, d.SH)(e, Object.keys(e))
      }
      let T = {
          site(e, t) {
            if (!y.filter((e) => "site" !== e).some(v.bind(null, e)))
              return O({ page: t.page, ref: t.ref })
          },
          device: () =>
            S((e) => {
              let t = (0, u.Ot)().screen.width,
                n = (0, u.Ot)().screen.height,
                { width: r, height: i } = (function () {
                  let e = (0, u.Ot)()
                  try {
                    let t =
                      e.innerHeight ||
                      e.document.documentElement.clientHeight ||
                      e.document.body.clientHeight ||
                      0
                    return {
                      width:
                        e.innerWidth ||
                        e.document.documentElement.clientWidth ||
                        e.document.body.clientWidth ||
                        0,
                      height: t,
                    }
                  } catch (e) {
                    return {}
                  }
                })()
              return {
                w: t,
                h: n,
                ua: e.navigator.userAgent,
                language: e.navigator.language.split("-").shift(),
                ext: { vpw: r, vph: i },
              }
            }),
          regs() {
            let e = {}
            S((e) => e.navigator.globalPrivacyControl) && (0, s.J)(e, "ext.gpc", "1")
            let t = c.$W.getConfig("coppa")
            return ("boolean" == typeof t && (e.coppa = +!!t), e)
          },
        },
        D = (0, a.memoize)(() =>
          S((e) => {
            let t = Array.from(e.document.querySelectorAll('script[type="application/ld+json"]')),
              n = []
            for (let e of t)
              try {
                let t = JSON.parse(e.textContent)
                for (let e of Array.isArray(t) ? t : [t])
                  if ("string" == typeof e.keywords) {
                    let t = e.keywords
                      .split(",")
                      .map((e) => e.trim())
                      .filter((e) => e.length > 0)
                    n.push(...t)
                  }
              } catch (e) {}
            return n
          }),
        ),
        k = (0, a.memoize)(() =>
          S((e) =>
            e.document
              .querySelector('meta[name="keywords"]')
              ?.content?.split(",")
              .map((e) => e.trim()),
          ),
        )
    },
    95654: function (e, t, n) {
      "use strict"
      n.d(t, {
        S: function () {
          return a
        },
      })
      var r = n(31360),
        i = n(98349)
      let o = (0, i.CK)("fpdEnrichment"),
        a = (0, r.memoize)(function () {
          let e,
            t,
            n =
              arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.host
          if (!o.cookiesAreEnabled()) return n
          let r = n.split(".")
          if (2 === r.length) return n
          let a = -2
          do
            ((e = r.slice(a).join(".")),
              (0, i.d_)(e, o) ? (t = !1) : ((a += -1), (t = Math.abs(a) <= r.length)))
          while (t)
          return e
        })
    },
    27426: function (e, t, n) {
      "use strict"
      let r
      n.d(t, {
        A_: function () {
          return s
        },
        Gc: function () {
          return d
        },
        Y6: function () {
          return p
        },
        Yn: function () {
          return u
        },
        bz: function () {
          return g
        },
        u2: function () {
          return m
        },
        xG: function () {
          return f
        },
      })
      var i = n(18114),
        o = n.n(i),
        a = n(16886)
      let s = o()({ ready: o().SYNC | o().ASYNC | o().QUEUE }),
        l = (0, a.v6)()
      ;((r = s.ready),
        (s.ready = function () {
          try {
            return r.apply(s)
          } finally {
            l.resolve()
          }
        }))
      let d = l.promise,
        u = s.get,
        c = {}
      function f(e, t) {
        let { postInstallAllowed: n = !1 } =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
        s(
          "async",
          function (r) {
            ;(r.forEach((e) => t(...e)), n && (c[e] = t))
          },
          e,
        )([])
      }
      function g(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
          n[r - 1] = arguments[r]
        let i = c[e]
        if (i) return i(...n)
        u(e).before((e, t) => {
          ;(t.push(n), e(t))
        })
      }
      function p(e, t) {
        return (
          Object.defineProperties(
            t,
            Object.fromEntries(
              ["before", "after", "getHooks", "removeAll"].map((t) => [t, { get: () => e[t] }]),
            ),
          ),
          t
        )
      }
      function m(e) {
        return p(e, function () {
          for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r]
          return (n.push(function () {}), e.apply(this, n))
        })
      }
    },
    62450: function (e, t, n) {
      "use strict"
      n.d(t, {
        Bm: function () {
          return h
        },
        IX: function () {
          return w
        },
        gs: function () {
          return y
        },
        l6: function () {
          return p
        },
        mT: function () {
          return u
        },
        nk: function () {
          return m
        },
        vO: function () {
          return b
        },
        yl: function () {
          return I
        },
      })
      var r = n(31360),
        i = n(10208),
        o = n(19539),
        a = n(57788),
        s = n(27410),
        l = n(9479),
        d = n(61768)
      let u = [],
        c = {
          image: {
            ortb: {
              ver: "1.2",
              assets: [
                { required: 1, id: 1, img: { type: 3, wmin: 100, hmin: 100 } },
                { required: 1, id: 2, title: { len: 140 } },
                { required: 1, id: 3, data: { type: 1 } },
                { required: 0, id: 4, data: { type: 2 } },
                { required: 0, id: 5, img: { type: 1, wmin: 20, hmin: 20 } },
              ],
            },
            image: { required: !0 },
            title: { required: !0 },
            sponsoredBy: { required: !0 },
            clickUrl: { required: !0 },
            body: { required: !1 },
            icon: { required: !1 },
          },
        },
        f = O(a.h0),
        g = O(a.jO)
      function p(e) {
        return null != e.native && "object" == typeof e.native
      }
      function m(e) {
        e.forEach((e) => {
          let t = e.nativeParams || e?.mediaTypes?.native
          ;(t &&
            (e.nativeParams = (function (e) {
              var t
              if (
                (e &&
                  e.type &&
                  (((t = e.type) && Object.keys(c).includes(t)) ||
                    ((0, r.logError)(`${t} nativeParam is not supported`), 0)) &&
                  (e = c[e.type]),
                !e ||
                  !e.ortb ||
                  (function (e) {
                    let t = e.assets
                    if (!Array.isArray(t) || 0 === t.length)
                      return (
                        (0, r.logError)(
                          "assets in mediaTypes.native.ortb is not an array, or it's empty. Assets: ",
                          t,
                        ),
                        !1
                      )
                    let n = t.map((e) => e.id)
                    return t.length !== new Set(n).size || n.some((e) => e !== parseInt(e, 10))
                      ? ((0, r.logError)(
                          "each asset object must have 'id' property, it must be unique and it must be an integer",
                        ),
                        !1)
                      : e.hasOwnProperty("eventtrackers") && !Array.isArray(e.eventtrackers)
                        ? ((0, r.logError)(
                            "ortb.eventtrackers is not an array. Eventtrackers: ",
                            e.eventtrackers,
                          ),
                          !1)
                        : t.every((e) =>
                            (function (e) {
                              if (!(0, i.Qd)(e))
                                return (
                                  (0, r.logError)("asset must be an object. Provided asset: ", e),
                                  !1
                                )
                              if (e.img) {
                                if (!(0, i.Et)(e.img.w) && !(0, i.Et)(e.img.wmin))
                                  return (
                                    (0, r.logError)(
                                      "for img asset there must be 'w' or 'wmin' property",
                                    ),
                                    !1
                                  )
                                if (!(0, i.Et)(e.img.h) && !(0, i.Et)(e.img.hmin))
                                  return (
                                    (0, r.logError)(
                                      "for img asset there must be 'h' or 'hmin' property",
                                    ),
                                    !1
                                  )
                              } else if (e.title) {
                                if (!(0, i.Et)(e.title.len))
                                  return (
                                    (0, r.logError)(
                                      "for title asset there must be 'len' property defined",
                                    ),
                                    !1
                                  )
                              } else if (e.data) {
                                if (!(0, i.Et)(e.data.type))
                                  return (
                                    (0, r.logError)(
                                      "for data asset 'type' property must be a number",
                                    ),
                                    !1
                                  )
                              } else if (
                                e.video &&
                                (!Array.isArray(e.video.mimes) ||
                                  !Array.isArray(e.video.protocols) ||
                                  !(0, i.Et)(e.video.minduration) ||
                                  !(0, i.Et)(e.video.maxduration))
                              )
                                return (
                                  (0, r.logError)("video asset is not properly configured"),
                                  !1
                                )
                              return !0
                            })(e),
                          )
                  })(e.ortb))
              )
                return e
            })(t)),
            e.nativeParams &&
              (e.nativeOrtbRequest =
                e.nativeParams.ortb ||
                (function (e) {
                  if (!e && !(0, i.Qd)(e))
                    return void (0, r.logError)(
                      "Native assets object is empty or not an object: ",
                      e,
                    )
                  let t = { ver: "1.2", assets: [] }
                  for (let n in e) {
                    if (a._B.includes(n)) continue
                    if (!a.x5.hasOwnProperty(n)) {
                      ;(0, r.logError)(
                        `Unrecognized native asset code: ${n}. Asset will be ignored.`,
                      )
                      continue
                    }
                    if ("privacyLink" === n) {
                      t.privacy = 1
                      continue
                    }
                    let o = e[n],
                      s = 0
                    o.required && (0, i.Lm)(o.required) && (s = Number(o.required))
                    let l = { id: t.assets.length, required: s }
                    if (n in a.h0)
                      ((l.data = { type: a.jO[a.h0[n]] }), o.len && (l.data.len = o.len))
                    else if ("icon" === n || "image" === n) {
                      if (
                        ((l.img = { type: "icon" === n ? a.oA.ICON : a.oA.MAIN }), o.aspect_ratios)
                      )
                        if ((0, i.cy)(o.aspect_ratios))
                          if (o.aspect_ratios.length) {
                            let { min_width: e, min_height: t } = o.aspect_ratios[0]
                            ;(0, i.Fq)(e) && (0, i.Fq)(t)
                              ? ((l.img.wmin = e), (l.img.hmin = t))
                              : (0, r.logError)(
                                  "image.aspect_ratios min_width or min_height are invalid: ",
                                  e,
                                  t,
                                )
                            let n = o.aspect_ratios
                              .filter((e) => e.ratio_width && e.ratio_height)
                              .map((e) => `${e.ratio_width}:${e.ratio_height}`)
                            n.length > 0 && (l.img.ext = { aspectratios: n })
                          } else
                            (0, r.logError)(
                              "image.aspect_ratios was passed, but it's empty:",
                              o.aspect_ratios,
                            )
                        else
                          (0, r.logError)(
                            "image.aspect_ratios was passed, but it's not a an array:",
                            o.aspect_ratios,
                          )
                      o.sizes &&
                        (2 === o.sizes.length && (0, i.Fq)(o.sizes[0]) && (0, i.Fq)(o.sizes[1])
                          ? ((l.img.w = o.sizes[0]),
                            (l.img.h = o.sizes[1]),
                            delete l.img.hmin,
                            delete l.img.wmin)
                          : (0, r.logError)(
                              "image.sizes was passed, but its value is not an array of integers:",
                              o.sizes,
                            ))
                    } else
                      "title" === n
                        ? (l.title = { len: o.len || 140 })
                        : "ext" === n && ((l.ext = o), delete l.required)
                    t.assets.push(l)
                  }
                  return t
                })(e.nativeParams)))
        })
      }
      function h(e) {
        let { index: t = o.n.index } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.getAdUnit(e)
        if (!n) return !1
        let i = n.nativeOrtbRequest
        return (function (e, t) {
          if (!e?.link?.url)
            return (
              (0, r.logError)("native response doesn't have 'link' property. Ortb response: ", e),
              !1
            )
          let n = t.assets.filter((e) => 1 === e.required).map((e) => e.id),
            i = e.assets.map((e) => e.id),
            o = n.every((e) => i.includes(e))
          return (
            o ||
              (0, r.logError)(
                `didn't receive a bid with all required assets. Required ids: ${n}, but received ids in response: ${i}`,
              ),
            o
          )
        })(e.native?.ortb || S(e.native, i), i)
      }
      function b(e, t) {
        let n = t.native.ortb || C(t.native)
        return (
          "click" === e.action
            ? (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                  { fetchURL: n = r.triggerPixel } =
                    arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                if (t) {
                  let r = (e.assets || [])
                      .filter((e) => e.link)
                      .reduce((e, t) => ((e[t.id] = t.link), e), {}),
                    i = e.link?.clicktrackers || [],
                    o = r[t],
                    a = i
                  ;(o && (a = o.clicktrackers || []), a.forEach((e) => n(e)))
                } else (e.link?.clicktrackers || []).forEach((e) => n(e))
              })(n, e?.assetId)
            : (function (e, t) {
                let {
                    runMarkup: n = (e) => (0, r.insertHtmlIntoIframe)(e),
                    fetchURL: i = r.triggerPixel,
                  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  a = (function (e, t) {
                    let n = (o.n.index.getMediaTypes(t) || {}).native || {},
                      r = n.ortb?.eventtrackers || [
                        { event: 1, methods: [1, 2] },
                        { event: 2, methods: [1, 2] },
                      ],
                      { eventtrackers: i = [] } = e || {}
                    return i.filter((e) =>
                      r.some((t) => t.event === e.event && t.methods.includes(e.method)),
                    )
                  })(e, t),
                  { 1: s = [], 2: l = [] } = (0, d.$)(a || [])[1] || {}
                ;(e.imptrackers && (s = s.concat(e.imptrackers)),
                  s.forEach((e) => i(e)),
                  (l = l.map((e) => `<script async src="${e}"></script>`)),
                  e.jstracker && (l = l.concat([e.jstracker])),
                  l.length && n(l.join("\n")))
              })(n, t),
          e.action
        )
      }
      function y(e, t) {
        let n = t?.nativeOrtbRequest,
          r = e.native?.ortb
        if (n && r) {
          let t = (function (e, t) {
            let n = {},
              r = t?.assets || []
            for (let t of ((n.clickUrl = e.link?.url),
            (n.privacyLink = e.privacy),
            e?.assets || [])) {
              let e = r.find((e) => t.id === e.id)
              t.title
                ? (n.title = t.title.text)
                : t.img
                  ? (n[e?.img?.type === a.oA.MAIN ? "image" : "icon"] = {
                      url: t.img.url,
                      width: t.img.w,
                      height: t.img.h,
                    })
                  : t.data && (n[f[g[e?.data?.type]]] = t.data.value)
            }
            n.impressionTrackers = []
            let i = []
            for (let t of (e.imptrackers && n.impressionTrackers.push(...e.imptrackers),
            e?.eventtrackers || []))
              (1 === t.event && 1 === t.method && n.impressionTrackers.push(t.url),
                1 === t.event && 2 === t.method && i.push(t.url))
            return (
              (i = i.map((e) => `<script async src="${e}"></script>`)),
              e?.jstracker && i.push(e.jstracker),
              i.length && (n.javascriptTrackers = i.join("\n")),
              n
            )
          })(r, n)
          Object.assign(e.native, t)
        }
        ;["rendererUrl", "adTemplate"].forEach((n) => {
          let r = t?.nativeParams?.[n]
          r && (e.native[n] = A(r))
        })
      }
      function v(e, t, n) {
        let { index: r = o.n.index } =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          d = { message: "assetResponse", adId: e.adId },
          u = (0, s.vd)(t).native
        if (u)
          ((d.native = Object.assign({}, u)),
            (d.renderer = (0, l.kj)(t)),
            (d.rendererVersion = l.xh),
            null != n &&
              (u.assets = u.assets.filter((e) => {
                let { key: t } = e
                return n.includes(t)
              })))
        else {
          var c
          let e
          ;((c = r.getAdUnit(t)),
            (e = {
              ...(0, i.SH)(t.native, ["rendererUrl", "adTemplate"]),
              assets: (function e(t, n) {
                let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                  i = []
                return (
                  Object.entries(t)
                    .filter((e) => {
                      let [t, i] = e
                      return i && ((!1 === r && "ext" === t) || null == n || n.includes(t))
                    })
                    .forEach((t) => {
                      let [o, s] = t
                      !1 === r && "ext" === o
                        ? i.push(...e(s, n, !0))
                        : (r || a.x5.hasOwnProperty(o)) && i.push({ key: o, value: A(s) })
                    }),
                  i
                )
              })(t.native, n),
              nativeKeys: a.x5,
            }),
            t.native.ortb
              ? (e.ortb = t.native.ortb)
              : c.mediaTypes?.native?.ortb && (e.ortb = S(t.native, c.nativeOrtbRequest)),
            (u = e))
        }
        return Object.assign(d, u)
      }
      let E = Object.fromEntries(
        Object.entries(a.x5).map((e) => {
          let [t, n] = e
          return [n, t]
        }),
      )
      function w(e, t) {
        let n = e.assets.map((e) => E[e])
        return v(e, t, n)
      }
      function I(e, t) {
        return v(e, t, null)
      }
      function A(e) {
        return e?.url || e
      }
      function C(e) {
        let t = { link: {}, eventtrackers: [] }
        return (
          Object.entries(e).forEach((e) => {
            let [n, r] = e
            switch (n) {
              case "clickUrl":
                t.link.url = r
                break
              case "clickTrackers":
                t.link.clicktrackers = Array.isArray(r) ? r : [r]
                break
              case "impressionTrackers":
                ;(Array.isArray(r) ? r : [r]).forEach((e) => {
                  t.eventtrackers.push({ event: 1, method: 1, url: e })
                })
                break
              case "javascriptTrackers":
                t.jstracker = Array.isArray(r) ? r.join("") : r
                break
              case "privacyLink":
                t.privacy = r
            }
          }),
          t
        )
      }
      function S(e, t) {
        let n = { ...C(e), assets: [] }
        function r(e, r) {
          let o = t.assets.find(e)
          null != o && (r((o = (0, i.Go)(o))), n.assets.push(o))
        }
        return (
          Object.keys(e)
            .filter((t) => !!e[t])
            .forEach((t) => {
              let n = A(e[t])
              switch (t) {
                case "title":
                  r(
                    (e) => null != e.title,
                    (e) => {
                      e.title = { text: n }
                    },
                  )
                  break
                case "image":
                case "icon":
                  let i = "image" === t ? a.oA.MAIN : a.oA.ICON
                  r(
                    (e) => null != e.img && e.img.type === i,
                    (e) => {
                      e.img = { url: n }
                    },
                  )
                  break
                default:
                  t in a.h0 &&
                    r(
                      (e) => null != e.data && e.data.type === a.jO[a.h0[t]],
                      (e) => {
                        e.data = { value: n }
                      },
                    )
              }
            }),
          n
        )
      }
      function O(e) {
        var t = {}
        for (var n in e) t[e[n]] = n
        return t
      }
    },
    52345: function (e, t, n) {
      "use strict"
      let r
      n.d(t, {
        xu: function () {
          return em
        },
        Ay: function () {
          return eD
        },
        gH: function () {
          return ew
        },
      })
      var i = n(76030),
        o = n(31360),
        a = n(10208),
        s = n(17958),
        l = n(67166),
        d = n(62450),
        u = n(57788),
        c = n(27410),
        f = n(9479),
        g = n(16886),
        p = n(9655),
        m = n(19539)
      let { REQUEST: h, RESPONSE: b, NATIVE: y, EVENT: v } = u.nl,
        E = {
          [h]: function (e, t, n) {
            ;(0, c.bw)({
              renderFn(t) {
                e(Object.assign({ message: b, renderer: (0, f.kj)(n), rendererVersion: f.xh }, t))
              },
              resizeFn: w(t.adId, n),
              options: t.options,
              adId: t.adId,
              bidResponse: n,
            })
          },
          [v]: function (e, t, n) {
            return null == n
              ? void (0, o.logError)(`Cannot find ad '${t.adId}' for x-origin event request`)
              : n.status !== u.tl.RENDERED
                ? void (0, o.logWarn)(
                    `Received x-origin event request without corresponding render request for ad '${n.adId}'`,
                  )
                : (0, c.Uc)(t, n)
          },
        }
      function w(e, t) {
        return function (n, r) {
          !(function (e) {
            var t
            let n,
              r,
              { instl: i, element: a, adId: s, adUnitCode: l, width: d, height: u } = e
            if (i) return
            function c(e) {
              if (e) {
                let t = e.style
                ;((t.width = I(d)), (t.height = I(u)))
              } else
                (0, o.logError)(
                  `Unable to locate matching page element for adUnitCode ${l}.  Can't resize it to ad's dimensions.  Please review setup.`,
                )
            }
            let f =
              ((t = 'iframe:not([style*="display: none"])'),
              (r =
                null ==
                (n = (function (e, t) {
                  var n, r
                  if ((0, o.isGptPubadsDefined)()) {
                    let t,
                      r =
                        ((n = e),
                        (t = window.googletag
                          .pubads()
                          .getSlots()
                          .find((e) =>
                            e.getTargetingKeys().find((t) => e.getTargeting(t).includes(n)),
                          ))
                          ? t.getSlotElementId()
                          : null)
                    if (r) return r
                  }
                  if ((0, o.isApnGetTagDefined)()) {
                    let e,
                      n = ((r = t), (e = window.apntag.getTag(r)) && e.targetId)
                    if (n) return n
                  }
                })(s, l))
                  ? (0, p.o)({ element: a, adUnitCode: l })
                  : document.getElementById(n)) && r.querySelector(t))
            c(f)
            let m = f?.closest("ins[data-anchor-status]")
            m
              ? new g.U9((e, t) => {
                  let n = 10,
                    r = setInterval(() => {
                      let i = !1
                      ;(Object.entries({ width: d, height: u }).forEach((e) => {
                        let [t, n] = e
                        ;/\d+px/.test(m.style[t]) && ((m.style[t] = I(n)), (i = !0))
                      }),
                        (i || 0 == n--) &&
                          (clearInterval(r), i ? e() : t(Error("Could not resize anchor"))))
                    }, 50)
                })
              : c(f?.parentElement)
          })({ ...t, width: n, height: r, adId: e })
        }
      }
      function I(e) {
        return e ? e + "px" : "100%"
      }
      Object.assign(E, {
        [y]: function (e, t, n) {
          if (null == n)
            return void (0, o.logError)(`Cannot find ad for x-origin event request: '${t.adId}'`)
          switch (t.action) {
            case "assetRequest":
              ;(0, c.Hh)(n, () => e((0, d.IX)(t, n)))
              break
            case "allAssetRequest":
              ;(0, c.Hh)(n, () => e((0, d.yl)(t, n)))
              break
            default:
              ;((0, c.vW)(t, n, { resizeFn: w(t.adId, n) }), (0, c.Pk)(n))
          }
        },
      })
      var A = n(74689),
        C = n(41831),
        S = n(47965),
        O = n(27426),
        T = n(21770),
        D = n(20095),
        k = n(638),
        $ = n(62435)
      let B = `__${(0, $.k)()}_debugging__`
      function R() {
        return (0, i.m)().installedModules.includes("debugging")
      }
      function U(e) {
        return new g.U9((t, n) => {
          ;(0, D.R)(e, "prebid", "debugging", { success: t, error: n })
        })
      }
      let x = (function () {
        let {
            load: e = (function () {
              let { alreadyInstalled: e = R, script: t = U } =
                  arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = null
              return function () {
                return (
                  null == n &&
                    (n = new g.U9((n, r) => {
                      setTimeout(() => {
                        if (e()) n()
                        else {
                          let e = `${(0, $.rT)()}debugging-standalone.js`
                          ;((0, o.logMessage)(
                            `Debugging module not installed, loading it from "${e}"...`,
                          ),
                            ((0, i.m)()._installDebugging = !0),
                            t(e)
                              .then(() => {
                                ;(0, i.m)()._installDebugging({
                                  DEBUG_KEY: B,
                                  hook: O.A_,
                                  config: C.$W,
                                  createBid: T.O,
                                  logger: (0, o.prefixLog)("DEBUG:"),
                                  utils: o,
                                  BANNER: "banner",
                                  NATIVE: "native",
                                  VIDEO: "video",
                                  Renderer: k.A4,
                                })
                              })
                              .then(n, r))
                        }
                      })
                    })),
                  n
                )
              }
            })(),
            hook: t = (0, O.Yn)("requestBids"),
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = null,
          r = !1
        function a(e) {
          for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
            r[i - 1] = arguments[i]
          return (n || g.U9.resolve())
            .catch((e) => {
              ;(0, o.logError)("Could not load debugging module", e)
            })
            .then(() => e.apply(this, r))
        }
        function s() {
          ;(t.getHooks({ hook: a }).remove(), (r = !1))
        }
        return {
          enable: function () {
            r || ((n = e()), t.before(a, 99), (r = !0))
          },
          disable: s,
          reset: function () {
            ;((n = null), s())
          },
        }
      })()
      ;(x.reset,
        C.$W.getConfig("debugging", function (e) {
          let { debugging: t } = e
          t?.enabled ? x.enable() : x.disable()
        }))
      var j = n(98349),
        _ = n(16155),
        P = n(62504),
        q = n(9423),
        N = n(64626),
        W = n(98875),
        M = n(95450),
        L = n(33622)
      let F = new Map([
        ["format", (e) => Array.isArray(e) && e.length > 0 && e.every((e) => "object" == typeof e)],
        ["w", a.Fq],
        ["h", a.Fq],
        ["btype", a.Uu],
        ["battr", a.Uu],
        ["pos", a.Fq],
        ["mimes", (e) => Array.isArray(e) && e.length > 0 && e.every((e) => "string" == typeof e)],
        ["topframe", (e) => [1, 0].includes(e)],
        ["expdir", a.Uu],
        ["api", a.Uu],
        ["id", a.O8],
        ["vcm", (e) => [1, 0].includes(e)],
      ])
      function G(e, t) {
        var n = this
        return function () {
          for (var r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a]
          return document.prerendering && e()
            ? new Promise((e) => {
                document.addEventListener(
                  "prerenderingchange",
                  () => {
                    ;((0, o.logInfo)("Auctions were suspended while page was prerendering"),
                      e(t.apply(n, i)))
                  },
                  { once: !0 },
                )
              })
            : Promise.resolve(t.apply(n, i))
        }
      }
      var z = n(20335)
      let H = (0, O.A_)("sync", function (e) {
        return (
          [
            V,
            J("source.schain", "source.ext.schain", "source.ext.schain"),
            J("device.sua", "device.ext.sua", "device.sua"),
            J("regs.gdpr", "regs.ext.gdpr", "regs.ext.gdpr"),
            J("user.consent", "user.ext.consent", "user.ext.consent"),
            J("regs.us_privacy", "regs.ext.us_privacy", "regs.ext.us_privacy"),
            J("regs.gpp", "regs.ext.gpp", "regs.gpp"),
            J("regs.gpp_sid", "regs.ext.gpp_sid", "regs.gpp_sid"),
          ].forEach((t) => {
            var n, r
            return (
              (n = t),
              void (((r = e).global = n(r.global, "global FPD")),
              Object.entries(r.bidder).forEach((e) => {
                let [t, i] = e
                r.bidder[t] = n(i, `bidder '${t}' FPD`)
              }))
            )
          }),
          e
        )
      })
      function V(e, t) {
        if (!e) return e
        let n = [],
          r = [
            ...(e?.user?.eids ?? []).map((e) => [0, e]),
            ...(e?.user?.ext?.eids ?? []).map((e) => [1, e]),
          ].filter((e) => {
            let [r, i] = e
            return n.findIndex((e) => {
              let [t, n] = e
              return r !== t && (0, o.deepEqual)(n, i)
            }) > -1
              ? ((0, o.logWarn)(`Found duplicate EID in user.eids and user.ext.eids (${t})`, i), !1)
              : (n.push([r, i]), !0)
          })
        return (
          r.length > 0 &&
            (0, l.J)(
              e,
              "user.ext.eids",
              r.map((e) => {
                let [t, n] = e
                return n
              }),
            ),
          delete e?.user?.eids,
          e
        )
      }
      function J(e, t, n) {
        if (n !== e && n !== t) throw Error("invalid argument")
        let r = (n === e ? t : e).split("."),
          i = r.pop(),
          a = r.join(".")
        return function (r, d) {
          if (!r) return r
          let u = (0, s.A)(r, e),
            c = (0, s.A)(r, t)
          ;(null == u ||
            null == c ||
            (0, o.deepEqual)(u, c) ||
            (0, o.logWarn)(`Conflicting ${e} and ${t} (${d}), preferring ${e}`, { [e]: u, [t]: c }),
            (u ?? c) != null && (0, l.J)(r, n, u ?? c))
          let f = (0, s.A)(r, a)
          return (null != f && "object" == typeof f && delete f[i], r)
        }
      }
      let K = "outstream",
        Q = new Map([
          [
            "mimes",
            (e) => Array.isArray(e) && e.length > 0 && e.every((e) => "string" == typeof e),
          ],
          ["minduration", a.Fq],
          ["maxduration", a.Fq],
          ["startdelay", a.Fq],
          ["maxseq", a.Fq],
          ["poddur", a.Fq],
          ["protocols", a.Uu],
          ["battr", a.Uu],
          ["maxextended", a.Fq],
          ["minbitrate", a.Fq],
          ["maxbitrate", a.Fq],
          ["delivery", a.Uu],
          ["api", a.Uu],
          ["companiontype", a.Uu],
          ["feed", a.Fq],
          ["stitched", a.Fq],
          ["nvol", a.Fq],
        ])
      ;(0, O.A_)(
        "sync",
        function (e, t, n, r, i) {
          if (n && (i || r !== K)) {
            let { url: t, useLocal: n } = C.$W.getConfig("cache") || {}
            return t || n || !e.vastXml || e.vastUrl
              ? !!(e.vastUrl || e.vastXml)
              : ((0, o.logError)(`
        This bid contains only vastXml and will not work when a prebid cache url is not specified.
        Try enabling either prebid cache with ${(0, $.k)()}.setConfig({ cache: {url: "..."} });
        or local cache with ${(0, $.k)()}.setConfig({ cache: { useLocal: true }});
      `),
                !1)
          }
          return r !== K || !!i || !!(e.renderer || (t && t.renderer) || n.renderer)
        },
        "checkAudioBidSetup",
      )
      var Y = n(31918)
      let X = (0, i.m)(),
        { triggerUserSyncs: Z } = A.zt,
        { REQUEST_BIDS: ee, SET_TARGETING: et } = u.qY,
        en = null
      try {
        en = window.sessionStorage
      } catch (e) {}
      if (null !== en) {
        let e = null
        try {
          e = en.getItem(B)
        } catch (e) {}
        null !== e && x.enable()
      }
      function er(e, t) {
        let n = []
        return (
          (0, a.cy)(e) &&
            (t ? e.length === t : e.length > 0) &&
            (e.every((e) => (0, a.Uu)(e, 2)) ? (n = e) : (0, a.Uu)(e, 2) && n.push(e)),
          n
        )
      }
      function ei(e, t) {
        let n = (0, s.A)(e, `ortb2Imp.${t}`),
          r = (0, s.A)(e, `mediaTypes.${t}`)
        if (!n && !r) return
        let i = { video: L.Zy, banner: F }[t]
        i &&
          [...i].forEach((n) => {
            let [r, i] = n,
              a = (0, s.A)(e, `mediaTypes.${t}.${r}`),
              d = (0, s.A)(e, `ortb2Imp.${t}.${r}`)
            ;(void 0 === a && void 0 === d) ||
              (void 0 === a
                ? (0, l.J)(e, `mediaTypes.${t}.${r}`, d)
                : void 0 === d
                  ? (0, l.J)(e, `ortb2Imp.${t}.${r}`, a)
                  : (0, o.deepEqual)(a, d) ||
                    ((0, o.logWarn)(
                      `adUnit ${e.code}: specifies conflicting ortb2Imp.${t}.${r} and mediaTypes.${t}.${r}, the latter will be ignored`,
                      e,
                    ),
                    (0, l.J)(e, `mediaTypes.${t}.${r}`, d)))
          })
      }
      function eo(e) {
        let t,
          n = (0, a.Go)(e),
          r = n.mediaTypes.banner,
          i = null == r.sizes ? null : er(r.sizes),
          s = e.ortb2Imp?.banner?.format ?? r?.format
        if (null != s) {
          ;((0, l.J)(n, "ortb2Imp.banner.format", s), (r.format = s))
          try {
            t = s
              .filter((t) => {
                let { w: n, h: r, wratio: i, hratio: a } = t
                return (n ?? r) != null && (i ?? a) != null
                  ? ((0, o.logWarn)(
                      "Ad unit banner.format specifies both w/h and wratio/hratio",
                      e,
                    ),
                    !1)
                  : (null != n && null != r) || (null != i && null != a)
              })
              .map((e) => {
                let { w: t, h: n, wratio: r, hratio: i } = e
                return [t ?? r, n ?? i]
              })
          } catch (t) {
            ;(0, o.logError)(`Invalid format definition on ad unit ${e.code}`, s)
          }
          null == t ||
            null == i ||
            (0, o.deepEqual)(i, t) ||
            (0, o.logWarn)(`Ad unit ${e.code} has conflicting sizes and format definitions`, e)
        }
        let d = t ?? i ?? [],
          u = e.ortb2Imp?.banner?.expdir ?? r.expdir
        return (
          null != u && ((r.expdir = u), (0, l.J)(n, "ortb2Imp.banner.expdir", u)),
          d.length > 0
            ? ((r.sizes = d), (n.sizes = d))
            : ((0, o.logError)(
                "Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request.",
              ),
              delete n.mediaTypes.banner),
          el(n, "banner"),
          ei(n, "banner"),
          n
        )
      }
      function ea(e) {
        let t = (0, a.Go)(e)
        return (el(t, "audio"), ei(t, "audio"), t)
      }
      function es(e) {
        let t = (0, a.Go)(e),
          n = t.mediaTypes.video
        if (n.playerSize) {
          let e = "number" == typeof n.playerSize[0] ? 2 : 1,
            r = er(n.playerSize, e)
          r.length > 0
            ? (2 === e &&
                (0, o.logInfo)(
                  "Transforming video.playerSize from [640,480] to [[640,480]] so it's in the proper format.",
                ),
              (n.playerSize = r),
              (t.sizes = r))
            : ((0, o.logError)(
                "Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request.",
              ),
              delete t.mediaTypes.video.playerSize)
        }
        return (el(t, "video"), ei(t, "video"), t)
      }
      function el(e, t, n) {
        let r = (e?.mediaTypes || {})[t],
          i = { banner: F, audio: Q, video: L.Zy }[t]
        ;(0, a.Qd)(r)
          ? null != r &&
            Object.entries(r).forEach((a) => {
              let [s, l] = a
              !i.has(s) ||
                i.get(s)(l) ||
                ("function" == typeof n
                  ? n(s, l, e)
                  : (delete r[s],
                    (0, o.logWarn)(
                      `Invalid prop in adUnit "${e.code}": Invalid value for mediaTypes.${t}.${s} ORTB property. The property has been removed.`,
                    )))
            })
          : (0, o.logWarn)(`validateOrtb${t}Fields: ${t}Params must be an object.`)
      }
      function ed(e) {
        function t(t) {
          return (
            (0, o.logError)(
              `Error in adUnit "${e.code}": ${t}. Removing native request from ad unit`,
              e,
            ),
            delete r.mediaTypes.native,
            r
          )
        }
        function n(e) {
          for (let t of ["types"])
            if (i.hasOwnProperty(t)) {
              let n = e(t)
              if (n) return n
            }
        }
        let r = (0, a.Go)(e),
          i = r.mediaTypes.native
        if (i.ortb) {
          if (i.ortb.assets?.some((e) => !(0, a.Et)(e.id) || e.id < 0 || e.id % 1 != 0))
            return t("native asset ID must be a nonnegative integer")
          if (n((e) => t(`ORTB native requests cannot specify "${e}"`))) return r
          let e = Object.keys(u.x5).filter((e) => u.x5[e].includes("hb_native_")),
            s = Object.keys(i).filter((t) => e.includes(t))
          s.length > 0 &&
            ((0, o.logError)(
              `when using native OpenRTB format, you cannot use legacy native properties. Deleting ${s} keys from request.`,
            ),
            s.forEach((e) => delete r.mediaTypes.native[e]))
        } else
          n((t) =>
            (0, o.logWarn)(
              `mediaTypes.native.${t} is deprecated, consider using native ORTB instead`,
              e,
            ),
          )
        return (
          i.image &&
            i.image.sizes &&
            !Array.isArray(i.image.sizes) &&
            ((0, o.logError)(
              "Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request.",
            ),
            delete r.mediaTypes.native.image.sizes),
          i.image &&
            i.image.aspect_ratios &&
            !Array.isArray(i.image.aspect_ratios) &&
            ((0, o.logError)(
              "Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request.",
            ),
            delete r.mediaTypes.native.image.aspect_ratios),
          i.icon &&
            i.icon.sizes &&
            !Array.isArray(i.icon.sizes) &&
            ((0, o.logError)(
              "Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request.",
            ),
            delete r.mediaTypes.native.icon.sizes),
          r
        )
      }
      function eu(e, t) {
        let n = e?.mediaTypes?.[t]?.pos
        if (!(0, a.Et)(n) || isNaN(n) || !isFinite(n)) {
          let n = `Value of property 'pos' on ad unit ${e.code} should be of type: Number`
          ;((0, o.logWarn)(n), delete e.mediaTypes[t].pos)
        }
        return e
      }
      function ec(e) {
        let t = (e) => `adUnit.code '${n.code}' ${e}`,
          n = e,
          r = n.mediaTypes,
          i = n.bids
        return null == i || (0, a.cy)(i)
          ? null == i && null == n.ortb2Imp
            ? ((0, o.logError)(
                t("has no 'adUnit.bids' and no 'adUnit.ortb2Imp'. Removing adUnit from auction"),
              ),
              null)
            : r && 0 !== Object.keys(r).length
              ? (null != n.ortb2Imp &&
                  (null == i || 0 === i.length) &&
                  ((n.bids = [{ bidder: null }]),
                  (0, o.logMessage)(
                    t(
                      "defines 'adUnit.ortb2Imp' with no 'adUnit.bids'; it will be seen only by S2S adapters",
                    ),
                  )),
                n)
              : ((0, o.logError)(
                  t(
                    "does not define a 'mediaTypes' object.  This is a required field for the auction, so this adUnit has been removed.",
                  ),
                ),
                null)
          : ((0, o.logError)(
              t("defines 'adUnit.bids' that is not an array. Removing adUnit from auction"),
            ),
            null)
      }
      ;((X.bidderSettings = X.bidderSettings || {}),
        (X.libLoaded = !0),
        (X.version = "v11.1.0"),
        (0, o.logInfo)("Prebid.js v11.1.0 loaded"),
        (X.adUnits = X.adUnits || []),
        (X.pageViewIdPerBidder = X.pageViewIdPerBidder || new Map()))
      let ef = { validateAdUnit: ec, validateBannerMediaType: eo, validateSizes: er }
      ;(Object.assign(ef, { validateNativeMediaType: ed }),
        Object.assign(ef, { validateVideoMediaType: es }),
        Object.assign(ef, { validateAudioMediaType: ea }))
      let eg = (0, O.A_)(
        "sync",
        function (e) {
          let t = []
          return (
            e.forEach((e) => {
              let n,
                r,
                i,
                o,
                a = ec(e)
              if (null == a) return
              let s = a.mediaTypes
              ;(s.banner && ((n = eo(a)), s.banner.hasOwnProperty("pos") && (n = eu(n, "banner"))),
                s.video &&
                  ((r = n ? es(n) : es(a)), s.video.hasOwnProperty("pos") && (r = eu(r, "video"))),
                s.native && (i = r ? ed(r) : n ? ed(n) : ed(a)),
                s.audio && (o = i ? ea(i) : ea(a)))
              let l = Object.assign({}, n, r, i, o)
              t.push(l)
            }),
            t
          )
        },
        "checkAdUnitSetup",
      )
      function ep(e, t) {
        return function () {
          for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i]
          return ((0, o.logInfo)(`Invoking ${(0, $.k)()}.${e}`, r), t.apply(this, r))
        }
      }
      function em(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2]
        ;(0, i.m)()[e] = n ? ep(e, t) : t
      }
      function eh(e) {
        return eb(e)[e]
      }
      function eb(e) {
        return S.iS.getAllTargeting(e)
      }
      function ey(e) {
        return (((e = e.slice()).bids = e), e)
      }
      function ev(e) {
        let t = m.n[e]().filter((e) => m.n.getAdUnitCodes().includes(e.adUnitCode)),
          n = m.n.getLastAuctionId()
        return t
          .map((e) => e.adUnitCode)
          .filter(o.uniques)
          .map((e) => t.filter((t) => t.auctionId === n && t.adUnitCode === e))
          .filter((e) => e && e[0] && e[0].adUnitCode)
          .map((e) => ({ [e[0].adUnitCode]: ey(e) }))
          .reduce((e, t) => Object.assign(e, t), {})
      }
      ;(em("triggerUserSyncs", Z),
        em("getAdserverTargetingForAdUnitCodeStr", function (e) {
          if (e) {
            let t = eh(e)
            return (0, o.transformAdServerTargetingObj)(t)
          }
          ;(0, o.logMessage)("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")
        }),
        em("getHighestUnusedBidResponseForAdUnitCode", function (e) {
          if (e) {
            let t = m.n.getAllBidsForAdUnitCode(e).filter(S.Yl)
            return t.length ? t.reduce(M.Vk) : null
          }
          ;(0, o.logMessage)(
            "Need to call getHighestUnusedBidResponseForAdUnitCode with adunitCode",
          )
        }),
        em("getAdserverTargetingForAdUnitCode", eh),
        em("getAdserverTargeting", eb),
        em("getConsentMetadata", function () {
          return W.SL.getConsentMeta()
        }),
        em("getNoBids", function () {
          return ev("getNoBids")
        }),
        em("getNoBidsForAdUnitCode", function (e) {
          return ey(m.n.getNoBids().filter((t) => t.adUnitCode === e))
        }),
        em("getBidResponses", function () {
          return ev("getBidsReceived")
        }),
        em("getBidResponsesForAdUnitCode", function (e) {
          return ey(m.n.getBidsReceived().filter((t) => t.adUnitCode === e))
        }),
        em("setTargetingForGPTAsync", function (e) {
          ;(0, o.isGptPubadsDefined)()
            ? S.iS.setTargetingForGPT(e)
            : (0, o.logError)("window.googletag is not defined on the page")
        }),
        em("setTargetingForAst", function (e) {
          S.iS.isApntagDefined()
            ? (S.iS.setTargetingForAst(e), P.Ic(et, S.iS.getAllTargeting()))
            : (0, o.logError)("window.apntag is not defined on the page")
        }),
        em("renderAd", function (e, t, n) {
          ;(0, c.BS)(e, t, n)
        }),
        em("removeAdUnit", function (e) {
          if (!e) {
            X.adUnits = []
            return
          }
          ;((0, a.cy)(e) ? e : [e]).forEach((e) => {
            for (let t = X.adUnits.length - 1; t >= 0; t--)
              X.adUnits[t].code === e && X.adUnits.splice(t, 1)
          })
        }))
      let eE = (function () {
        function e(e, t) {
          return (null == t || Array.isArray(t) || (t = [t]),
          null == t || (Array.isArray(t) && 0 === t.length))
            ? { included: e, excluded: [], adUnitCodes: e.map((e) => e.code).filter(o.uniques) }
            : Object.assign(
                { adUnitCodes: (t = t.filter(o.uniques)) },
                e.reduce(
                  (e, n) => {
                    let { included: r, excluded: i } = e
                    return ((t.includes(n.code) ? r : i).push(n), { included: r, excluded: i })
                  },
                  { included: [], excluded: [] },
                ),
              )
        }
        let t = (0, O.A_)(
          "async",
          function (t) {
            let {
                bidsBackHandler: n,
                timeout: r,
                adUnits: i,
                adUnitCodes: s,
                labels: l,
                auctionId: d,
                ttlBuffer: u,
                ortb2: c,
                metrics: f,
                defer: p,
              } = t ?? {},
              m = r || C.$W.getConfig("bidderTimeout")
            ;({ included: i, adUnitCodes: s } = e(i, s))
            let h = {
              global: (0, o.mergeDeep)({}, C.$W.getAnyConfig("ortb2") || {}, c || {}),
              bidder: Object.fromEntries(
                Object.entries(C.$W.getBidderConfig())
                  .map((e) => {
                    let [t, n] = e
                    return [t, (0, a.Go)(n.ortb2)]
                  })
                  .filter((e) => {
                    let [t, n] = e
                    return null != n
                  }),
              ),
            }
            ;((h = H(h)),
              (0, N.wU)(g.U9.resolve(h.global)).then(
                (e) => (
                  (h.global = e),
                  ew({
                    bidsBackHandler: n,
                    timeout: m,
                    adUnits: i,
                    adUnitCodes: s,
                    labels: l,
                    auctionId: d,
                    ttlBuffer: u,
                    ortb2Fragments: h,
                    metrics: f,
                    defer: p,
                  })
                ),
              ))
          },
          "requestBids",
        )
        return (0, O.Y6)(
          t,
          ep(
            "requestBids",
            G(
              () => !C.$W.getConfig("allowPrerendering"),
              function () {
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  r = n.adUnits || X.adUnits
                n.adUnits = Array.isArray(r) ? r.slice() : [r]
                let i = (0, q.K7)()
                i.checkpoint("requestBids")
                let { included: o, excluded: a, adUnitCodes: s } = e(r, n.adUnitCodes)
                P.Ic(ee, Object.assign(n, { adUnits: o, adUnitCodes: s }))
                let l = Object.assign({}, n, {
                  adUnits: n.adUnits.slice().concat(a),
                  adUnitCodes: s,
                  metrics: i,
                  defer: (0, g.v6)({ promiseFactory: (e) => new Promise(e) }),
                })
                return (t.call(this, l), l.defer.promise)
              },
            ),
          ),
        )
      })()
      em("requestBids", eE, !1)
      let ew = (0, O.A_)(
        "async",
        function () {
          let {
              bidsBackHandler: e,
              timeout: t,
              adUnits: n,
              ttlBuffer: r,
              adUnitCodes: i,
              labels: a,
              auctionId: s,
              ortb2Fragments: l,
              metrics: d,
              defer: u,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            c = (0, _.pX)(C.$W.getConfig("s2sConfig") || [])
          ;(n.forEach((e) => (0, L.V0)(e)), n.forEach((e) => {}))
          let f = (0, q.BO)(d).measureTime("requestBids.validate", () => eg(n))
          function g(t, n, r) {
            if ("function" == typeof e)
              try {
                e(t, n, r)
              } catch (e) {
                ;(0, o.logError)("Error executing bidsBackHandler", null, e)
              }
            u.resolve({ bids: t, timedOut: n, auctionId: r })
          }
          let p = {}
          if (
            (f.forEach((e) => {
              let t = Object.keys(e.mediaTypes || { banner: "banner" }),
                n = e.bids.map((e) => e.bidder).filter(Boolean),
                i = _.Ay.bidderRegistry,
                a = n.filter((e) => !c.has(e))
              e.adUnitId = (0, o.generateUUID)()
              let s = e.ortb2Imp?.ext?.tid
              ;(s &&
                (p.hasOwnProperty(e.code)
                  ? (0, o.logWarn)(
                      `Multiple distinct ortb2Imp.ext.tid were provided for twin ad units '${e.code}'`,
                    )
                  : (p[e.code] = s)),
                null == r || e.hasOwnProperty("ttlBuffer") || (e.ttlBuffer = r),
                a.forEach((n) => {
                  let r = i[n],
                    a = r && r.getSpec && r.getSpec(),
                    s = (a && a.supportedMediaTypes) || ["banner"]
                  t.some((e) => s.includes(e)) ||
                    ((0, o.logWarn)((0, o.unsupportedBidderMessage)(e, n)),
                    (e.bids = e.bids.filter((e) => e.bidder !== n)))
                }))
            }),
            f && 0 !== f.length)
          ) {
            f.forEach((e) => {
              let t = e.ortb2Imp?.ext?.tid || p[e.code] || (0, o.generateUUID)()
              ;(p.hasOwnProperty(e.code) || (p[e.code] = t), (e.transactionId = t))
            })
            let e = m.n.createAuction({
                adUnits: f,
                adUnitCodes: i,
                callback: g,
                cbTimeout: t,
                labels: a,
                auctionId: s,
                ortb2Fragments: l,
                metrics: d,
              }),
              n = f.length
            ;(n > 15 &&
              (0, o.logInfo)(`Current auction ${e.getAuctionId()} contains ${n} adUnits.`, f),
              i.forEach((t) => S.iS.setLatestAuctionForAdUnit(t, e.getAuctionId())),
              e.callBids())
          } else ((0, o.logMessage)("No adUnits configured. No bids requested."), g())
        },
        "startAuction",
      )
      ;(eE.before(function (e, t) {
        function n(e) {
          let t
          for (; (t = e.shift()); ) t()
        }
        ;(n(j.s0), n(eC), e.call(this, t))
      }, 49),
        em("addAdUnits", function (e) {
          X.adUnits.push(...(Array.isArray(e) ? e : [e]))
        }))
      let eI = {
        bidWon: (e) =>
          !!m.n
            .getBidsRequested()
            .map((e) => e.bids.map((e) => e.adUnitCode))
            .reduce(o.flatten)
            .filter(o.uniques)
            .includes(e) || void (0, o.logError)('The "' + e + '" placement is not defined.'),
      }
      function eA(e, t) {
        return eI.hasOwnProperty(e) && eI[e](t)
      }
      ;(em("onEvent", function (e, t, n) {
        ;(0, a.fp)(t)
          ? n && !eA(e, n)
            ? (0, o.logError)(
                'The id provided is not valid for event "' + e + '" and no handler was set.',
              )
            : P.on(e, t, n)
          : (0, o.logError)(
              'The event handler provided is not a function and was not set on event "' + e + '".',
            )
      }),
        em("offEvent", function (e, t, n) {
          ;(!n || eA(e, n)) && P.AU(e, t, n)
        }),
        em("getEvents", function () {
          return P.kQ()
        }),
        em("registerBidAdapter", function (e, t, n) {
          try {
            let r = n ? (0, z.xb)(n) : e()
            _.Ay.registerBidAdapter(r, t)
          } catch (e) {
            ;(0, o.logError)("Error registering bidder adapter : " + e.message)
          }
        }),
        em("registerAnalyticsAdapter", function (e) {
          try {
            _.Ay.registerAnalyticsAdapter(e)
          } catch (e) {
            ;(0, o.logError)("Error registering analytics adapter : " + e.message)
          }
        }))
      let eC = [],
        eS = (0, O.A_)(
          "async",
          function (e) {
            e && !(0, o.isEmpty)(e)
              ? _.Ay.enableAnalytics(e)
              : (0, o.logError)(`${(0, $.k)()}.enableAnalytics should be called with option {}`)
          },
          "enableAnalyticsCb",
        )
      function eO(e) {
        r.promise.then(() => {
          if ("function" == typeof e)
            try {
              e.call()
            } catch (e) {
              ;(0, o.logError)("Error processing command :", e.message, e.stack)
            }
          else
            (0, o.logError)(
              `Commands written into ${(0, $.k)()}.cmd.push must be wrapped in a function`,
            )
        })
      }
      function eT(e, t) {
        ;(0, Y.JE)(
          () => (0, i.m)().yield ?? !0,
          e.map(
            (e) => () =>
              (function (e) {
                if (void 0 === e.called)
                  try {
                    ;(e.call(), (e.called = !0))
                  } catch (e) {
                    ;(0, o.logError)("Error processing command :", "prebid.js", e)
                  }
              })(e),
          ),
          t,
        )
      }
      ;(em("enableAnalytics", function (e) {
        eC.push(eS.bind(this, e))
      }),
        em("aliasBidder", function (e, t, n) {
          e && t
            ? _.Ay.aliasBidAdapter(e, t, n)
            : (0, o.logError)(
                "bidderCode and alias must be passed as arguments",
                `${(0, $.k)()}.aliasBidder`,
              )
        }),
        (X.aliasRegistry = _.Ay.aliasRegistry),
        C.$W.getConfig("aliasRegistry", (e) => {
          "private" === e.aliasRegistry && delete X.aliasRegistry
        }),
        em("getAllWinningBids", function () {
          return m.n.getAllWinningBids()
        }),
        em("getAllPrebidWinningBids", function () {
          return (
            (0, o.logWarn)(
              "getAllPrebidWinningBids may be removed or renamed in a future version. This function returns bids that have won in prebid and have had targeting set but have not (yet?) won in the ad server. It excludes bids that have been rendered.",
            ),
            m.n.getBidsReceived().filter((e) => e.status === u.tl.BID_TARGETING_SET)
          )
        }),
        em("getHighestCpmBids", function (e) {
          return S.iS.getWinningBids(e)
        }),
        em("clearAllAuctions", function () {
          m.n.clearAllAuctions()
        }),
        em("markWinningBidAsUsed", function (e) {
          let t,
            { adId: n, adUnitCode: r, analytics: i = !1, events: a = !1 } = e
          ;(r && null == n
            ? (t = S.iS.getWinningBids(r))
            : n
              ? (t = m.n.getBidsReceived().filter((e) => e.adId === n))
              : (0, o.logWarn)(
                  "Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function.",
                ),
            t.length > 0 && (i || a ? (0, c.n6)(t[0]) : m.n.addWinningBid(t[0]), (0, c.qn)(t[0])))
        }),
        em("getConfig", C.$W.getAnyConfig),
        em("readConfig", C.$W.readAnyConfig),
        em("mergeConfig", C.$W.mergeConfig),
        em("mergeBidderConfig", C.$W.mergeBidderConfig),
        em("setConfig", C.$W.setConfig),
        em("setBidderConfig", C.$W.setBidderConfig),
        X.que.push(
          () =>
            void window.addEventListener(
              "message",
              function (e) {
                !(function (e, t) {
                  var n,
                    r,
                    i = e.message ? "message" : "data",
                    a = {}
                  try {
                    a = JSON.parse(e[i])
                  } catch (e) {
                    return
                  }
                  a &&
                    a.adId &&
                    a.message &&
                    E.hasOwnProperty(a.message) &&
                    (E[a.message](
                      ((n = a.adId),
                      (r =
                        null == e.origin && 0 === e.ports.length
                          ? function () {
                              let e =
                                "Cannot post message to a frame with null origin. Please update creatives to use MessageChannel, see https://github.com/prebid/Prebid.js/issues/7870"
                              throw ((0, o.logError)(e), Error(e))
                            }
                          : e.ports.length > 0
                            ? function (t) {
                                e.ports[0].postMessage(JSON.stringify(t))
                              }
                            : function (t) {
                                e.source.postMessage(JSON.stringify(t), e.origin)
                              }),
                      function (e) {
                        for (
                          var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), o = 1;
                          o < t;
                          o++
                        )
                          i[o - 1] = arguments[o]
                        return r(Object.assign({}, e, { adId: n }), ...i)
                      }),
                      a,
                      m.n.findBidByAdId(a.adId),
                    ),
                    t && t())
                })(e)
              },
              !1,
            ),
        ),
        (r = (0, g.v6)()),
        em(
          "processQueue",
          G(
            () => X.delayPrerendering,
            async function () {
              ;((X.que.push = X.cmd.push = eO),
                (0, c.XO)(),
                O.A_.ready(),
                eT(X.que, () => {
                  eT(X.cmd, () => {
                    r.resolve()
                  })
                }))
            },
          ),
          !1,
        ),
        em("triggerBilling", function (e) {
          let { adId: t, adUnitCode: n } = e
          m.n
            .getAllWinningBids()
            .filter((e) => e.adId === t || (null == t && e.adUnitCode === n))
            .forEach((e) => {
              ;(_.Ay.triggerBilling(e), (0, c.vB)(e))
            })
        }),
        em("refreshPageViewId", function () {
          for (let e of X.pageViewIdPerBidder.keys())
            X.pageViewIdPerBidder.set(e, (0, o.generateUUID)())
        }))
      var eD = X
    },
    76030: function (e, t, n) {
      "use strict"
      n.d(t, {
        E: function () {
          return s
        },
        m: function () {
          return a
        },
      })
      var r = n(62435)
      let i = (0, r.uP)() ? window : {},
        o = (i[(0, r.k)()] = i[(0, r.k)()] || {})
      function a() {
        return o
      }
      function s(e) {
        o.installedModules.push(e)
      }
      ;((o.cmd = o.cmd || []),
        (o.que = o.que || []),
        (o.installedModules = o.installedModules || []),
        i === window && ((i._pbjsGlobals = i._pbjsGlobals || []), i._pbjsGlobals.push((0, r.k)())))
    },
    91965: function (e, t, n) {
      "use strict"
      n.d(t, {
        EN: function () {
          return d
        },
        gR: function () {
          return s
        },
      })
      var r,
        i = n(41831),
        o = n(31360)
      function a(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window
        if (!e || /\w+:\/\//.exec(e)) return e
        let n = t.location.protocol
        try {
          n = t.top.location.protocol
        } catch (e) {}
        return /^\/\//.exec(e) ? n + e : `${n}//${e}`
      }
      function s(e) {
        let t,
          { noLeadingWww: n = !1, noPort: r = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        try {
          t = new URL(a(e))
        } catch (e) {
          return
        }
        return ((t = r ? t.hostname : t.host), n && t.startsWith("www.") && (t = t.substring(4)), t)
      }
      function l(e) {
        try {
          let t = e.querySelector("link[rel='canonical']")
          if (null !== t) return t.href
        } catch (e) {}
        return null
      }
      let d = (function (e) {
        let t,
          n,
          r,
          i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window
        return i.top !== i
          ? e
          : function () {
              let o = l(i.document),
                a = i.location.href
              return ((t !== o || a !== n) && ((t = o), (n = a), (r = e())), r)
            }
      })(
        ((r = window),
        function () {
          let e,
            t,
            n,
            d,
            u = [],
            c = (function (e) {
              try {
                if (!e.location.ancestorOrigins) return
                return e.location.ancestorOrigins
              } catch (e) {}
            })(r),
            f = i.$W.getConfig("maxNestedIframes"),
            g = !1,
            p = 0,
            m = !1,
            h = !1,
            b = !1
          do {
            let i,
              a = e,
              s = h,
              d = !1,
              f = null
            ;((h = !1), (e = e ? e.parent : r))
            try {
              i = e.location.href || null
            } catch (e) {
              d = !0
            }
            if (d)
              if (s) {
                let i = a.context
                try {
                  ;((t = f = i.sourceUrl),
                    (b = !0),
                    (m = !0),
                    e === r.top && (g = !0),
                    i.canonicalUrl && (n = i.canonicalUrl))
                } catch (e) {}
              } else {
                ;(0, o.logWarn)(
                  "Trying to access cross domain iframe. Continuing without referrer and location",
                )
                try {
                  let t = a.document.referrer
                  t && ((f = t), e === r.top && (g = !0))
                } catch (e) {}
                ;(!f && c && c[p - 1] && ((f = c[p - 1]), e === r.top && (b = !0)),
                  f && !m && (t = f))
              }
            else {
              if (i && ((t = f = i), (m = !1), e === r.top)) {
                g = !0
                let t = l(e.document)
                t && (n = t)
              }
              e.context && e.context.sourceUrl && (h = !0)
            }
            ;(u.push(f), p++)
          } while (e !== r.top && p < f)
          u.reverse()
          try {
            d = r.top.document.referrer
          } catch (e) {}
          let y = g || b ? t : null,
            v = i.$W.getConfig("pageUrl") || n || null,
            E = i.$W.getConfig("pageUrl") || y || a(v, r)
          return (
            y &&
              y.indexOf("?") > -1 &&
              -1 === E.indexOf("?") &&
              (E = `${E}${y.substring(y.indexOf("?"))}`),
            {
              reachedTop: g,
              isAmp: m,
              numIframes: p - 1,
              stack: u,
              topmostLocation: t || null,
              location: y,
              canonicalUrl: v,
              page: E,
              domain: s(E) || null,
              ref: d || null,
              legacy: {
                reachedTop: g,
                isAmp: m,
                numIframes: p - 1,
                stack: u,
                referer: t || null,
                canonicalUrl: v,
              },
            }
          )
        }),
      )
    },
    98349: function (e, t, n) {
      "use strict"
      let r
      n.d(t, {
        CK: function () {
          return y
        },
        X0: function () {
          return p
        },
        d_: function () {
          return v
        },
        le: function () {
          return h
        },
        p6: function () {
          return w
        },
        qk: function () {
          return g
        },
        s0: function () {
          return m
        },
        vM: function () {
          return b
        },
      })
      var i = n(31360),
        o = n(33242),
        a = n(39248),
        s = n(67085),
        l = n(37830),
        d = n(41831),
        u = n(27426),
        c = n(16155),
        f = n(25260)
      let g = "html5",
        p = "cookie",
        m = []
      function h() {
        let {
            moduleName: e,
            moduleType: t,
            advertiseKeys: n = !0,
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { isAllowed: r = a.io } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        function o(i, o, a, u) {
          let g = e,
            p = d.$W.getCurrentBidder()
          p && "bidder" === t && c.Ay.aliasRegistry[p] === e && (g = p)
          let m = { [s.Zw]: o, [s.OI]: u }
          return (n && null != a && (m[s.Ez] = a), i({ valid: r(l.Ue, (0, f.s)(t, g, m)) }))
        }
        function u(e, t, n, r, i) {
          if (!i || "function" != typeof i) return o(e, t, n, r)
          m.push(function () {
            i(o(e, t, n, r))
          })
        }
        function h(e) {
          let t = e.charAt(0).toUpperCase() + e.substring(1),
            n = () => window[e],
            r = function (t) {
              return u(
                function (t) {
                  if (t && t.valid)
                    try {
                      return !!n()
                    } catch (t) {
                      ;(0, i.logError)(`${e} api disabled`)
                    }
                  return !1
                },
                g,
                null,
                !1,
                t,
              )
            }
          return {
            [`has${t}`]: r,
            [`${e}IsEnabled`]: (e) =>
              u(
                function (e) {
                  if (e && e.valid)
                    try {
                      return (
                        n().setItem("prebid.cookieTest", "1"),
                        "1" === n().getItem("prebid.cookieTest")
                      )
                    } catch (e) {
                    } finally {
                      try {
                        n().removeItem("prebid.cookieTest")
                      } catch (e) {}
                    }
                  return !1
                },
                g,
                null,
                !1,
                e,
              ),
            [`setDataIn${t}`]: (e, t, i) =>
              u(
                function (i) {
                  i && i.valid && r() && n().setItem(e, t)
                },
                g,
                e,
                !0,
                i,
              ),
            [`getDataFrom${t}`]: (e, t) =>
              u(
                function (t) {
                  return t && t.valid && r() ? n().getItem(e) : null
                },
                g,
                e,
                !1,
                t,
              ),
            [`removeDataFrom${t}`]: (e, t) =>
              u(
                function (t) {
                  t && t.valid && r() && n().removeItem(e)
                },
                g,
                e,
                !0,
                t,
              ),
          }
        }
        return {
          setCookie: function (e, t, n, r, i, o) {
            return u(
              function (o) {
                if (o && o.valid) {
                  let o = i && "" !== i ? ` ;domain=${encodeURIComponent(i)}` : "",
                    a = n && "" !== n ? ` ;expires=${n}` : "",
                    s = r?.toLowerCase() === "none"
                  document.cookie = `${e}=${encodeURIComponent(t)}${a}; path=/${o}${r ? `; SameSite=${r}` : ""}${s ? "; Secure" : ""}`
                }
              },
              p,
              e,
              !0,
              o,
            )
          },
          getCookie: function (e, t) {
            return u(
              function (t) {
                if (t && t.valid) {
                  let t = window.document.cookie.match(
                    "(^|;)\\s*" + e + "\\s*=\\s*([^;]*)\\s*(;|$)",
                  )
                  return t ? decodeURIComponent(t[2]) : null
                }
                return null
              },
              p,
              e,
              !1,
              t,
            )
          },
          cookiesAreEnabled: function (e) {
            return u(
              function (e) {
                return !!e && !!e.valid && (0, i.checkCookieSupport)() && v()
              },
              p,
              null,
              !1,
              e,
            )
          },
          ...h("localStorage"),
          ...h("sessionStorage"),
          findSimilarCookies: function (e, t) {
            return u(
              function (t) {
                if (t && t.valid) {
                  let t = []
                  if ((0, i.hasDeviceAccess)()) {
                    let n = document.cookie.split(";")
                    for (; n.length; ) {
                      let r = n.pop(),
                        i = r.indexOf("=")
                      ;((i = i < 0 ? r.length : i),
                        decodeURIComponent(r.slice(0, i).replace(/^\s+/, "")).indexOf(e) >= 0 &&
                          t.push(decodeURIComponent(r.slice(i + 1))))
                    }
                  }
                  return t
                }
              },
              p,
              e,
              !1,
              t,
            )
          },
        }
      }
      function b() {
        let {
          moduleType: e,
          moduleName: t,
          bidderCode: n,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        function r() {
          throw Error(
            "Invalid invocation for getStorageManager: must set either bidderCode, or moduleType + moduleName",
          )
        }
        return (
          n ? (((e && "bidder" !== e) || t) && r(), (e = "bidder"), (t = n)) : (t && e) || r(),
          h({ moduleType: e, moduleName: t })
        )
      }
      function y(e) {
        return h({ moduleName: e, moduleType: "prebid" })
      }
      let v =
        ((r = y("storage")),
        (0, i.memoize)(function (e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
            n = new Date((0, i.timestamp)() + 1e4).toUTCString(),
            o = `_rdc${Date.now()}`,
            a = "writeable"
          return (
            t.setCookie(o, a, n, "Lax", e),
            t.getCookie(o) === a &&
              (t.setCookie(o, "", "Thu, 01 Jan 1970 00:00:01 GMT", void 0, e), !0)
          )
        }))
      function E() {
        if (!(0, i.hasDeviceAccess)()) return { allow: !1 }
      }
      ;((0, a.qB)(l.Ue, "deviceAccess config", E),
        (0, a.qB)(l.yg, "deviceAccess config", E),
        (0, a.qB)(l.Ue, "bidderSettings.*.storageAllowed", function (e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.u
          if ("bidder" !== e[s.Dk]) return
          let n = t.get(e[s.q7], "storageAllowed")
          if (n && !0 !== n) {
            let t = e[s.Zw]
            n = Array.isArray(n) ? n.some((e) => e === t) : n === t
          } else n = !!n
          if (!n) return { allow: n }
        }))
      let w = (0, u.A_)("sync", (e, t) => {})
    },
    47965: function (e, t, n) {
      "use strict"
      n.d(t, {
        Yl: function () {
          return I
        },
        iS: function () {
          return S
        },
        uW: function () {
          return w
        },
      })
      var r = n(19539),
        i = n(37292),
        o = n(33242),
        a = n(41831),
        s = n(57788),
        l = n(62504),
        d = n(27426),
        u = n(31360),
        c = n(10208),
        f = n(17958),
        g = n(95450),
        p = n(44868)
      let m = (function () {
        let e,
          t,
          n = (0, p.H)({ monotonic: !0, ttl: () => e, slack: 0 })
        a.$W.getConfig("targetingControls", (r) => {
          ;(({ lock: t, lockTimeout: e = 3e3 } = r.targetingControls ?? {}),
            null == t || Array.isArray(t) ? null == t && i() : (t = [t]),
            n.clear())
        })
        let [r, i] = (() => {
          let e = !1
          function r(e) {
            let { slot: r } = e
            t?.forEach((e) => r.getTargeting(e)?.forEach(n.delete))
          }
          return [
            () => {
              null != t &&
                !e &&
                (0, u.isGptPubadsDefined)() &&
                (googletag.pubads().addEventListener?.("slotRenderEnded", r), (e = !0))
            },
            () => {
              e &&
                (0, u.isGptPubadsDefined)() &&
                (googletag.pubads().removeEventListener?.("slotRenderEnded", r), (e = !1))
            },
          ]
        })()
        return {
          isLocked: (e) => t?.some((t) => null != e[t] && n.has(e[t])) ?? !1,
          lock(e) {
            ;(r(), t?.forEach((t) => null != e[t] && n.add(e[t])))
          },
        }
      })()
      var h = []
      let b = "targetingControls.allowTargetingKeys",
        y = "targetingControls.addTargetingKeys",
        v = `Only one of "${b}" or "${y}" can be set`,
        E = Object.keys(s.xS).map((e) => s.xS[e]),
        w = {
          isBidNotExpired: (e) => e.responseTimestamp + 1e3 * (0, i.cT)(e) > (0, u.timestamp)(),
          isUnusedBid: (e) => e && ((e.status && ![s.tl.RENDERED].includes(e.status)) || !e.status),
          isBidNotLocked: (e) => !m.isLocked(e.adserverTargeting),
        }
      function I(e) {
        return !Object.values(w).some((t) => !t(e))
      }
      let A = (0, d.A_)("sync", function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : u.sortByHighestCpm
        if (!r) {
          let r = [],
            o = a.$W.getConfig("sendBidsControl.dealPrioritization"),
            s = (0, u.groupBy)(e, "adUnitCode")
          return (
            Object.keys(s).forEach((e) => {
              let a = [],
                l = (0, u.groupBy)(s[e], "bidderCode")
              Object.keys(l).forEach((e) => {
                a.push(l[e].reduce(t))
              })
              let d = "object" == typeof n ? n[e] : n
              d
                ? ((a = o ? a.sort(C(!0)) : a.sort((e, t) => t.cpm - e.cpm)),
                  r.push(...a.slice(0, d)))
                : ((a = a.sort(i)), r.push(...a))
            }),
            r
          )
        }
        return e
      })
      function C() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
        return function (t, n) {
          return void 0 !== t.adserverTargeting.hb_deal && void 0 === n.adserverTargeting.hb_deal
            ? -1
            : void 0 === t.adserverTargeting.hb_deal && void 0 !== n.adserverTargeting.hb_deal
              ? 1
              : e
                ? n.cpm - t.cpm
                : n.adserverTargeting.hb_pb - t.adserverTargeting.hb_pb
        }
      }
      let S = (function (e) {
        let t = {},
          n = {
            setLatestAuctionForAdUnit(e, n) {
              t[e] = n
            },
            resetPresetTargetingAST(e) {
              i(e).forEach(function (e) {
                let t = window.apntag.getTag(e)
                if (t && t.keywords) {
                  let n = Object.keys(t.keywords),
                    r = {}
                  ;(n.forEach((e) => {
                    h.includes(e.toLowerCase()) || (r[e] = t.keywords[e])
                  }),
                    window.apntag.modifyTag(e, { keywords: r }))
                }
              })
            },
            getAllTargeting(t, l, d) {
              var f, m, I, S, O, T
              let D,
                k,
                $,
                B,
                R,
                U,
                x,
                j,
                _,
                P,
                q = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : g.Vk,
                N =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : u.sortByHighestCpm
              d ||= p(q, N)
              let W = i(t),
                M = (function (e, t) {
                  if (!a.$W.getConfig("enableSendAllBids")) return 0
                  let n = a.$W.getConfig("sendBidsControl.bidLimit"),
                    i = new Set(e),
                    o = {}
                  for (let e of r.n.getAdUnits())
                    i.has(e.code) && (o[e.code] = e?.bidLimit || t || n)
                  return o
                })(W, l),
                { customKeysByUnit: L, filteredBids: F } =
                  ((f = W),
                  (m = d),
                  (D = []),
                  (k = {}),
                  ($ = a.$W.getConfig("targetingControls.alwaysIncludeDeals")),
                  (B = a.$W.getConfig("bidTargetingExclusion")),
                  (R = m.filter((e) => {
                    let t = f.includes(e.adUnitCode),
                      n = !0 === o.u.get(e.bidderCode, "allowZeroCpmBids") ? e.cpm >= 0 : e.cpm > 0,
                      r = $ && e.dealId
                    return t && (r || n)
                  })).forEach((e) => {
                    let t,
                      n = !0
                    if ("function" == typeof B)
                      try {
                        n = B(e, R)
                      } catch (t) {
                        ;((0, u.logWarn)(
                          `Error in bidTargetingExclusion function - excluding bid ${e.bidderCode} [${e.adUnitCode}]`,
                        ),
                          (n = !1))
                      }
                    n &&
                      (D.push(e),
                      Object.keys(e.adserverTargeting)
                        .filter(
                          ((t = w()),
                          function (e) {
                            return -1 === t.indexOf(e)
                          }),
                        )
                        .forEach((t) => {
                          let n = t.substring(0, 20),
                            r = k[e.adUnitCode] || {},
                            i = [e.adserverTargeting[t]]
                          ;(r[n] ? (r[n] = r[n].concat(i).filter(u.uniques)) : (r[n] = i),
                            (k[e.adUnitCode] = r))
                        }))
                  }),
                  { filteredBids: D, customKeysByUnit: k }),
                G = (function (t, r, i) {
                  var o, l, d, u, f
                  let g,
                    p,
                    m,
                    b,
                    y = !0 === a.$W.getConfig("targetingControls.allBidsCustomTargeting"),
                    v = ((o = t),
                    (l = i),
                    (g = n.getWinningBids(l, o)),
                    (p = w()),
                    g.map((e) => ({
                      [e.adUnitCode]: Object.keys(e.adserverTargeting)
                        .filter(
                          (t) =>
                            void 0 === e.sendStandardTargeting ||
                            e.sendStandardTargeting ||
                            -1 === p.indexOf(t),
                        )
                        .reduce((t, n) => {
                          let r = [e.adserverTargeting[n]],
                            i = { [n.substring(0, 20)]: r }
                          return n === s.xS.DEAL
                            ? [...t, i, { [`${n}_${e.bidderCode}`.substring(0, 20)]: r }]
                            : [...t, i]
                        }, []),
                    })))
                      .concat(
                        ((b = a.$W.getConfig("targetingControls.alwaysIncludeDeals")),
                        (function (e) {
                          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            r = E.slice(),
                            i = a.$W.getConfig("targetingControls.allowSendAllBidsTargetingKeys"),
                            o = i ? i.map((e) => s.xS[e]) : r
                          return e.reduce((e, i) => {
                            if (t || (n && i.dealId)) {
                              var a
                              let t =
                                ((a = i),
                                r
                                  .filter(
                                    (e) =>
                                      void 0 !== i.adserverTargeting[e] &&
                                      (n || -1 !== o.indexOf(e)),
                                  )
                                  .reduce(
                                    (e, t) => (
                                      a.adserverTargeting[t] &&
                                        e.push({
                                          [`${t}_${a.bidderCode}`.substring(0, 20)]: [
                                            a.adserverTargeting[t],
                                          ],
                                        }),
                                      e
                                    ),
                                    [],
                                  ))
                              t && e.push({ [i.adUnitCode]: t })
                            }
                            return e
                          }, [])
                        })(t, a.$W.getConfig("enableSendAllBids"), b)),
                      )
                      .concat(
                        (function (t) {
                          function n(e) {
                            return e?.[s.iD.ADSERVER_TARGETING]
                          }
                          return e
                            .getAdUnits()
                            .filter((e) => t.includes(e.code) && n(e))
                            .reduce((e, t) => {
                              let r,
                                i = Object.keys((r = n(t))).map(function (e) {
                                  return (
                                    (0, c.O8)(r[e]) &&
                                      (r[e] = r[e].split(",").map((e) => e.trim())),
                                    (0, c.cy)(r[e]) || (r[e] = [r[e]]),
                                    { [e]: r[e] }
                                  )
                                })
                              return (i && e.push({ [t.code]: i }), e)
                            }, [])
                        })(i),
                      )
                      .concat(
                        ((d = i),
                        !1 === (m = a.$W.getConfig("targetingControls.version"))
                          ? []
                          : d.map((e) => ({ [e]: [{ [s.xS.VERSION]: [m ?? "1.17.2"] }] }))),
                      )
                  return (
                    y &&
                      v.push(
                        ...((u = t),
                        (f = r),
                        u.reduce((e, t) => {
                          let n = Object.assign({}, t),
                            r = f[n.adUnitCode],
                            i = []
                          return (
                            r &&
                              Object.keys(r).forEach((e) => {
                                e && r[e] && i.push({ [e]: r[e] })
                              }),
                            e.push({ [n.adUnitCode]: i }),
                            e
                          )
                        }, [])),
                      ),
                    v.forEach((e) => {
                      Object.keys(e).forEach((t) => {
                        e[t].forEach((e) => {
                          let t = Object.keys(e)
                          ;-1 === h.indexOf(t[0]) && (h = t.concat(h))
                        })
                      })
                    }),
                    v
                  )
                })(A(F, q, M, void 0, N), L, W),
                z = Object.keys(Object.assign({}, s.Zh)),
                H = a.$W.getConfig(b),
                V = a.$W.getConfig(y)
              if (null != V && null != H) throw Error(v)
              Array.isArray((H = null != V ? z.concat(V) : H || z)) &&
                H.length > 0 &&
                ((I = G),
                (S = H),
                (U = Object.assign({}, s.xS)),
                (x = Object.keys(s.xS)),
                (j = {}),
                (0, u.logInfo)(
                  `allowTargetingKeys - allowed keys [ ${S.map((e) => U[e]).join(", ")} ]`,
                ),
                I.forEach((e) => {
                  let t = Object.keys(e)[0],
                    n = e[t].filter((e) => {
                      let t = Object.keys(e)[0],
                        n =
                          0 === x.filter((e) => 0 === t.indexOf(U[e])).length ||
                          S.find((e) => {
                            let n = U[e]
                            return 0 === t.indexOf(n)
                          })
                      return ((j[t] = !n), n)
                    })
                  e[t] = n
                }),
                (_ = Object.keys(j).filter((e) => j[e])),
                (0, u.logInfo)(`allowTargetingKeys - removed keys [ ${_.join(", ")} ]`),
                (G = I.filter((e) => {
                  let t = Object.keys(e)[0]
                  return e[t].length > 0
                })))
              let J = G.map((e) => ({
                  [Object.keys(e)[0]]: e[Object.keys(e)[0]]
                    .map((e) => ({ [Object.keys(e)[0]]: e[Object.keys(e)[0]].join(",") }))
                    .reduce((e, t) => Object.assign(t, e), {}),
                })).reduce(function (e, t) {
                  var n = Object.keys(t)[0]
                  return ((e[n] = Object.assign({}, e[n], t[n])), e)
                }, {}),
                K = a.$W.getConfig("targetingControls.auctionKeyMaxChars")
              return (
                K &&
                  ((0, u.logInfo)(
                    `Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ${K} characters.  Running checks on auction keys...`,
                  ),
                  (O = J),
                  (T = K),
                  (J = Object.keys((P = (0, c.Go)(O)))
                    .map((e) => ({ adUnitCode: e, adserverTargeting: P[e] }))
                    .sort(C())
                    .reduce(function (e, t, n, r) {
                      var i
                      let o = Object.keys((i = t.adserverTargeting)).reduce(function (e, t) {
                        return e + `${t}%3d${encodeURIComponent(i[t])}%26`
                      }, "")
                      n + 1 === r.length && (o = o.slice(0, -3))
                      let a = t.adUnitCode,
                        s = o.length
                      return (
                        s <= T
                          ? ((T -= s),
                            (0, u.logInfo)(
                              `AdUnit '${a}' auction keys comprised of ${s} characters.  Deducted from running threshold; new limit is ${T}`,
                              P[a],
                            ),
                            (e[a] = P[a]))
                          : (0, u.logWarn)(
                              `The following keys for adUnitCode '${a}' exceeded the current limit of the 'auctionKeyMaxChars' setting.
The key-set size was ${s}, the current allotted amount was ${T}.
`,
                              P[a],
                            ),
                        n + 1 === r.length &&
                          0 === Object.keys(e).length &&
                          (0, u.logError)(
                            "No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting.",
                          ),
                        e
                      )
                    }, {}))),
                W.forEach((e) => {
                  ;(J[e] || (J[e] = {}),
                    1 === Object.keys(J[e]).length &&
                      null != J[e][s.xS.VERSION] &&
                      delete J[e][s.xS.VERSION])
                }),
                J
              )
            },
            setTargetingForGPT: (0, d.A_)(
              "sync",
              function (t) {
                let r = n.getAllTargeting(t),
                  i = Object.fromEntries(h.map((e) => [e, null]))
                ;(Object.entries(
                  (function (e) {
                    let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : () => window.googletag.pubads().getSlots()
                    return t().reduce(
                      (e, t) => (
                        Object.keys(e)
                          .filter((0, u.isAdUnitCodeMatchingSlot)(t))
                          .forEach((n) => e[n].push(t)),
                        e
                      ),
                      Object.fromEntries(e.map((e) => [e, []])),
                    )
                  })(Object.keys(r)),
                ).forEach((e) => {
                  let [t, n] = e
                  n.forEach((e) => {
                    ;(Object.keys(r[t]).forEach((e) => {
                      let n = r[t][e]
                      ;("string" == typeof n && -1 !== n.indexOf(",") && (n = n.split(",")),
                        (r[t][e] = n))
                    }),
                      (0, u.logMessage)(
                        `Attempting to set targeting-map for slot: ${e.getSlotElementId()} with targeting-map:`,
                        r[t],
                      ),
                      e.updateTargetingFromMap(Object.assign({}, i, r[t])),
                      m.lock(r[t]))
                  })
                }),
                  Object.keys(r).forEach((t) => {
                    Object.keys(r[t]).forEach((n) => {
                      "hb_adid" === n && e.setStatusForBids(r[t][n], s.tl.BID_TARGETING_SET)
                    })
                  }),
                  n.targetingDone(r),
                  l.Ic(s.qY.SET_TARGETING, r))
              },
              "setTargetingForGPT",
            ),
            targetingDone: (0, d.A_)(
              "sync",
              function (e) {
                return e
              },
              "targetingDone",
            ),
            getWinningBids(e, t) {
              let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g.Vk,
                r =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : u.sortByHighestCpm,
                a = t || p(n, r),
                s = i(e)
              return a
                .filter((e) => s.includes(e.adUnitCode))
                .filter((e) =>
                  !0 === o.u.get(e.bidderCode, "allowZeroCpmBids") ? e.cpm >= 0 : e.cpm > 0,
                )
                .map((e) => e.adUnitCode)
                .filter(u.uniques)
                .map((e) => a.filter((t) => (t.adUnitCode === e ? t : null)).reduce(g.Vk))
            },
            setTargetingForAst(e) {
              let t = n.getAllTargeting(e)
              try {
                n.resetPresetTargetingAST(e)
              } catch (e) {
                ;(0, u.logError)("unable to reset targeting for AST" + e)
              }
              Object.keys(t).forEach((e) => {
                ;(m.lock(t[e]),
                  Object.keys(t[e]).forEach((n) => {
                    if (
                      ((0, u.logMessage)(
                        `Attempting to set targeting for targetId: ${e} key: ${n} value: ${t[e][n]}`,
                      ),
                      (0, c.O8)(t[e][n]) || (0, c.cy)(t[e][n]))
                    ) {
                      let r = {}
                      ;(0 > n.search(/pt[0-9]/) ? (r[n.toUpperCase()] = t[e][n]) : (r[n] = t[e][n]),
                        window.apntag.setKeywords(e, r, { overrideKeyValue: !0 }))
                    }
                  }))
              })
            },
            isApntagDefined() {
              if (window.apntag && (0, c.fp)(window.apntag.setKeywords)) return !0
            },
          }
        function i(t) {
          return "string" == typeof t ? [t] : (0, c.cy)(t) ? t : e.getAdUnitCodes() || []
        }
        function p() {
          let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g.Bq,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0
          return A(
            e.getBidsReceived().reduce((e, n) => {
              let r = a.$W.getConfig("useBidCache"),
                i = a.$W.getConfig("bidCacheFilterFunction"),
                o = t[n.adUnitCode] === n.auctionId,
                s = !r || !!o || "function" != typeof i || !!i(n)
              return (
                (r || o) && s && I(n) && ((n.latestTargetedAuctionId = t[n.adUnitCode]), e.push(n)),
                e
              )
            }, []),
            n,
            void 0,
            void 0,
            r,
          )
        }
        function w() {
          return e
            .getStandardBidderAdServerTargeting()
            .map((e) => e.key)
            .concat(E)
            .filter(u.uniques)
        }
        return (
          a.$W.getConfig("targetingControls", function (e) {
            null != (0, f.A)(e, b) && null != (0, f.A)(e, y) && (0, u.logError)(v)
          }),
          n
        )
      })(r.n)
    },
    74689: function (e, t, n) {
      "use strict"
      n.d(t, {
        qh: function () {
          return c
        },
        zt: function () {
          return g
        },
      })
      var r = n(10208),
        i = n(31360),
        o = n(41831),
        a = n(98349),
        s = n(39248),
        l = n(37830),
        d = n(67085),
        u = n(25260)
      let c = {
        syncEnabled: !0,
        filterSettings: { image: { bidders: "*", filter: "include" } },
        syncsPerBidder: 5,
        syncDelay: 3e3,
        auctionDelay: 500,
      }
      o.$W.setDefaults({ userSync: (0, r.Go)(c) })
      let f = (0, a.CK)("usersync"),
        g = (function (e) {
          let t = {},
            n = g(),
            a = new Set(),
            s = {},
            c = { image: !0, iframe: !1 },
            f = e.config
          function g() {
            return { image: [], iframe: [] }
          }
          function p() {
            if (f.syncEnabled && e.browserSupportsCookies) {
              try {
                ;(c.iframe &&
                  m(n.iframe, (e) => {
                    var t, r
                    let [o, a] = e
                    ;((0, i.logMessage)(`Invoking iframe user sync for bidder: ${o}`),
                      (0, i.insertUserSyncIframe)(a),
                      (t = n),
                      (r = o),
                      (t.image = t.image.filter((e) => e[0] !== r)))
                  }),
                  c.image &&
                    m(n.image, (e) => {
                      let [t, n] = e
                      ;((0, i.logMessage)(`Invoking image pixel user sync for bidder: ${t}`),
                        (0, i.triggerPixel)(n))
                    }))
              } catch (e) {
                return (0, i.logError)("Error firing user syncs", e)
              }
              n = g()
            }
          }
          function m(e, t) {
            ;(0, i.shuffle)(e).forEach(t)
          }
          return (
            o.$W.getConfig("userSync", (e) => {
              if (e.userSync) {
                let t = e.userSync.filterSettings
                !(0, r.Qd)(t) ||
                  t.image ||
                  t.all ||
                  (e.userSync.filterSettings.image = { bidders: "*", filter: "include" })
              }
              f = Object.assign(f, e.userSync)
            }),
            e.regRule(l.Ml, "userSync config", (e) => {
              if (!f.syncEnabled) return { allow: !1, reason: "syncs are disabled" }
              if ("bidder" === e[d.Dk]) {
                let n = e[d.bt],
                  r = e[d.iK]
                if (!t.canBidderRegisterSync(n, r))
                  return { allow: !1, reason: `${n} syncs are not enabled for ${r}` }
              }
            }),
            (t.registerSync = (t, o, c) => {
              if (a.has(o))
                return (0, i.logMessage)(
                  `already fired syncs for "${o}", ignoring registerSync call`,
                )
              if (!f.syncEnabled || !(0, r.cy)(n[t]))
                return (0, i.logWarn)(`User sync type "${t}" not supported`)
              if (!o) return (0, i.logWarn)("Bidder is required for registering sync")
              if (0 !== f.syncsPerBidder && Number(s[o]) >= f.syncsPerBidder)
                return (0, i.logWarn)(`Number of user syncs exceeded for "${o}"`)
              if (e.isAllowed(l.Ml, (0, u.s)("bidder", o, { [d.bt]: t, [d.e3]: c }))) {
                var g
                ;(n[t].push([o, c]), (g = s)[o] ? (g[o] += 1) : (g[o] = 1), (s = g))
              }
            }),
            (t.bidderDone = a.add.bind(a)),
            (t.syncUsers = function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
              if (e) return setTimeout(p, Number(e))
              p()
            }),
            (t.triggerUserSyncs = () => {
              f.enableOverride && t.syncUsers()
            }),
            (t.canBidderRegisterSync = (e, t) =>
              !(
                f.filterSettings &&
                (function (e, t) {
                  let n = f.filterSettings
                  if (
                    (function (e, t) {
                      if (e.all && e[t])
                        return (
                          (0, i.logWarn)(
                            `Detected presence of the "filterSettings.all" and "filterSettings.${t}" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.`,
                          ),
                          !1
                        )
                      let n = e.all ? e.all : e[t],
                        o = e.all ? "all" : t
                      if (!n) return !1
                      let a = n.filter,
                        s = n.bidders
                      return a && "include" !== a && "exclude" !== a
                        ? ((0, i.logWarn)(
                            `UserSync "filterSettings.${o}.filter" setting '${a}' is not a valid option; use either 'include' or 'exclude'.`,
                          ),
                          !1)
                        : "*" === s ||
                            !!(
                              Array.isArray(s) &&
                              s.length > 0 &&
                              s.every((e) => (0, r.O8)(e) && "*" !== e)
                            ) ||
                            ((0, i.logWarn)(
                              `Detected an invalid setup in userSync "filterSettings.${o}.bidders"; use either '*' (to represent all bidders) or an array of bidders.`,
                            ),
                            !1)
                    })(n, e)
                  ) {
                    c[e] = !0
                    let r = n.all ? n.all : n[e],
                      i = "*" === r.bidders ? [t] : r.bidders
                    return { include: (e, t) => !e.includes(t), exclude: (e, t) => e.includes(t) }[
                      r.filter || "include"
                    ](i, t)
                  }
                  return !c[e]
                })(e, t)
              )),
            t
          )
        })(
          Object.defineProperties(
            { config: o.$W.getConfig("userSync"), isAllowed: s.io, regRule: s.qB },
            {
              browserSupportsCookies: {
                get: function () {
                  return !(0, i.isSafariBrowser)() && f.cookiesAreEnabled()
                },
              },
            },
          ),
        )
    },
    31360: function (e, t, n) {
      "use strict"
      let r, i, o
      ;(n.r(t),
        n.d(t, {
          _each: function () {
            return en
          },
          _map: function () {
            return ei
          },
          _setEventEmitter: function () {
            return v
          },
          binarySearch: function () {
            return e2
          },
          buildUrl: function () {
            return eH
          },
          canAccessWindowTop: function () {
            return M
          },
          checkCookieSupport: function () {
            return eU
          },
          cleanObj: function () {
            return eM
          },
          compareCodeAndSlot: function () {
            return eq
          },
          compressDataWithGZip: function () {
            return e4
          },
          contains: function () {
            return er
          },
          convertObjectToArray: function () {
            return e0
          },
          createIframe: function () {
            return Y
          },
          createInvisibleIframe: function () {
            return X
          },
          createTrackPixelHtml: function () {
            return eu
          },
          createTrackPixelIframeHtml: function () {
            return ef
          },
          cyrb53Hash: function () {
            return eK
          },
          debugTurnedOn: function () {
            return Q
          },
          deepAccess: function () {
            return u.A
          },
          deepClone: function () {
            return c.Go
          },
          deepEqual: function () {
            return eV
          },
          deepSetValue: function () {
            return f.J
          },
          delayExecution: function () {
            return ex
          },
          encodeMacroURI: function () {
            return ec
          },
          extractDomainFromHost: function () {
            return e6
          },
          flatten: function () {
            return ep
          },
          formatQS: function () {
            return eG
          },
          generateUUID: function () {
            return O
          },
          getBidIdParameter: function () {
            return T
          },
          getBidRequest: function () {
            return em
          },
          getBidderCodes: function () {
            return eb
          },
          getDefinedParams: function () {
            return c.SH
          },
          getDocument: function () {
            return W
          },
          getDomLoadingDuration: function () {
            return eB
          },
          getFallbackWindow: function () {
            return L
          },
          getParameterByName: function () {
            return Z
          },
          getPerformanceNow: function () {
            return e$
          },
          getPrebidInternal: function () {
            return A
          },
          getSafeframeGeometry: function () {
            return eC
          },
          getScreenOrientation: function () {
            return g.Vv
          },
          getUniqueIdentifierStr: function () {
            return S
          },
          getUnixTimestampFromNow: function () {
            return eZ
          },
          getUserConfiguredParams: function () {
            return eP
          },
          getValue: function () {
            return eh
          },
          getWinDimensions: function () {
            return g.Ot
          },
          getWindowLocation: function () {
            return N
          },
          getWindowSelf: function () {
            return q
          },
          getWindowTop: function () {
            return P
          },
          groupBy: function () {
            return ej
          },
          hasConsoleLogger: function () {
            return K
          },
          hasDeviceAccess: function () {
            return eR
          },
          hasNonSerializableProperty: function () {
            return function e(t) {
              let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Set()
              for (let r in t) {
                let i = t[r],
                  o = typeof i
                if (
                  void 0 === i ||
                  "function" === o ||
                  "symbol" === o ||
                  i instanceof RegExp ||
                  i instanceof Map ||
                  i instanceof Set ||
                  i instanceof Date ||
                  (null !== i && "object" === o && i.hasOwnProperty("toJSON"))
                )
                  return !0
                if (
                  null !== i &&
                  "object" === o &&
                  i.constructor === Object &&
                  (n.has(i) || (n.add(i), e(i, n)))
                )
                  return !0
              }
              return !1
            }
          },
          inIframe: function () {
            return eI
          },
          insertElement: function () {
            return eo
          },
          insertHtmlIntoIframe: function () {
            return el
          },
          insertUserSyncIframe: function () {
            return ed
          },
          internal: function () {
            return w
          },
          isA: function () {
            return c.KG
          },
          isAdUnitCodeMatchingSlot: function () {
            return eN
          },
          isApnGetTagDefined: function () {
            return ev
          },
          isArray: function () {
            return c.cy
          },
          isArrayOfNums: function () {
            return c.Uu
          },
          isBoolean: function () {
            return c.Lm
          },
          isEmpty: function () {
            return ee
          },
          isEmptyStr: function () {
            return et
          },
          isFn: function () {
            return c.fp
          },
          isGptPubadsDefined: function () {
            return ey
          },
          isGzipCompressionSupported: function () {
            return e5
          },
          isInteger: function () {
            return c.Fq
          },
          isNumber: function () {
            return c.Et
          },
          isPlainObject: function () {
            return c.Qd
          },
          isSafariBrowser: function () {
            return eS
          },
          isSafeFrameWindow: function () {
            return eA
          },
          isStr: function () {
            return c.O8
          },
          isValidMediaTypes: function () {
            return e_
          },
          logError: function () {
            return H
          },
          logInfo: function () {
            return G
          },
          logMessage: function () {
            return F
          },
          logWarn: function () {
            return z
          },
          memoize: function () {
            return eX
          },
          mergeDeep: function () {
            return eJ
          },
          parseGPTSingleSizeArray: function () {
            return U
          },
          parseGPTSingleSizeArrayToRtbSize: function () {
            return j
          },
          parseQS: function () {
            return eF
          },
          parseQueryStringParameters: function () {
            return D
          },
          parseSizesInput: function () {
            return B
          },
          parseUrl: function () {
            return ez
          },
          pick: function () {
            return eL
          },
          prefixLog: function () {
            return V
          },
          replaceAuctionPrice: function () {
            return eT
          },
          replaceClickThrough: function () {
            return eD
          },
          replaceMacros: function () {
            return eO
          },
          resetWinDimensions: function () {
            return g.Bp
          },
          safeJSONEncode: function () {
            return eY
          },
          safeJSONParse: function () {
            return eQ
          },
          setOnAny: function () {
            return e3
          },
          setScriptAttributes: function () {
            return e1
          },
          shuffle: function () {
            return ew
          },
          sizeTupleToRtbSize: function () {
            return x
          },
          sizeTupleToSizeString: function () {
            return R
          },
          sizesToSizeTuples: function () {
            return $
          },
          sortByHighestCpm: function () {
            return eE
          },
          timestamp: function () {
            return ek
          },
          transformAdServerTargetingObj: function () {
            return k
          },
          triggerNurlWithCpm: function () {
            return e8
          },
          triggerPixel: function () {
            return es
          },
          uniques: function () {
            return eg
          },
          unsupportedBidderMessage: function () {
            return eW
          },
          waitForElementToLoad: function () {
            return ea
          },
        }))
      var a,
        s = n(41831),
        l = n(57788),
        d = n(16886),
        u = n(17958),
        c = n(10208),
        f = n(67166),
        g = n(78068)
      let p = !!window.console,
        m = !!(p && window.console.log),
        h = !!(p && window.console.info),
        b = !!(p && window.console.warn),
        y = !!(p && window.console.error)
      function v(e) {
        r = e
      }
      function E() {
        null != r && r(...arguments)
      }
      let w = {
          checkCookieSupport: eU,
          createTrackPixelIframeHtml: ef,
          getWindowSelf: q,
          getWindowTop: P,
          canAccessWindowTop: M,
          getWindowLocation: N,
          insertUserSyncIframe: ed,
          insertElement: eo,
          isFn: c.fp,
          triggerPixel: es,
          logError: H,
          logWarn: z,
          logMessage: F,
          logInfo: G,
          parseQS: eF,
          formatQS: eG,
          deepEqual: eV,
        },
        I = {}
      function A() {
        return I
      }
      var C =
        ((a = 0),
        function () {
          return ++a
        })
      function S() {
        return C() + Math.random().toString(16).substr(2)
      }
      function O(e) {
        return e
          ? (
              e ^
              ((window && window.crypto && window.crypto.getRandomValues
                ? crypto.getRandomValues(new Uint8Array(1))[0] % 16
                : 16 * Math.random()) >>
                (e / 4))
            ).toString(16)
          : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, O)
      }
      function T(e, t) {
        return t?.[e] || ""
      }
      function D(e) {
        let t = ""
        for (var n in e) e.hasOwnProperty(n) && (t += n + "=" + encodeURIComponent(e[n]) + "&")
        return t.replace(/&$/, "")
      }
      function k(e) {
        return e && Object.getOwnPropertyNames(e).length > 0
          ? Object.keys(e)
              .map((t) => `${t}=${encodeURIComponent(e[t])}`)
              .join("&")
          : ""
      }
      function $(e) {
        return "string" == typeof e
          ? e
              .split(/\s*,\s*/)
              .map((e) => e.match(/^(\d+)x(\d+)$/i))
              .filter((e) => e)
              .map((e) => {
                let [t, n, r] = e
                return [parseInt(n, 10), parseInt(r, 10)]
              })
          : Array.isArray(e)
            ? _(e)
              ? [e]
              : e.filter(_)
            : []
      }
      function B(e) {
        return $(e).map(R)
      }
      function R(e) {
        return e[0] + "x" + e[1]
      }
      function U(e) {
        if (_(e)) return R(e)
      }
      function x(e) {
        return { w: e[0], h: e[1] }
      }
      function j(e) {
        if (_(e)) return x(e)
      }
      function _(e) {
        return (0, c.cy)(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1])
      }
      function P() {
        return window.top
      }
      function q() {
        return window.self
      }
      function N() {
        return window.location
      }
      function W() {
        return document
      }
      function M() {
        try {
          if (w.getWindowTop().location.href) return !0
        } catch (e) {
          return !1
        }
      }
      function L(e) {
        return e || (M() ? w.getWindowTop() : w.getWindowSelf())
      }
      function F() {
        Q() && m && console.log.apply(console, J(arguments, "MESSAGE:"))
      }
      function G() {
        Q() && h && console.info.apply(console, J(arguments, "INFO:"))
      }
      function z() {
        ;(Q() && b && console.warn.apply(console, J(arguments, "WARNING:")),
          E(l.qY.AUCTION_DEBUG, { type: "WARNING", arguments: arguments }))
      }
      function H() {
        ;(Q() && y && console.error.apply(console, J(arguments, "ERROR:")),
          E(l.qY.AUCTION_DEBUG, { type: "ERROR", arguments: arguments }))
      }
      function V(e) {
        function t(t) {
          return function () {
            for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            t(e, ...r)
          }
        }
        return { logError: t(H), logWarn: t(z), logMessage: t(F), logInfo: t(G) }
      }
      function J(e, t) {
        e = [].slice.call(e)
        let n = s.$W.getCurrentBidder()
        return (
          t && e.unshift(t),
          n && e.unshift(r("#aaa")),
          e.unshift(r("#3b88c3")),
          e.unshift("%cPrebid" + (n ? `%c${n}` : "")),
          e
        )
        function r(e) {
          return `display: inline-block; color: #fff; background: ${e}; padding: 1px 4px; border-radius: 3px;`
        }
      }
      function K() {
        return m
      }
      function Q() {
        return !!s.$W.getConfig("debug")
      }
      let Y =
        ((i = {
          border: "0px",
          hspace: "0",
          vspace: "0",
          marginWidth: "0",
          marginHeight: "0",
          scrolling: "no",
          frameBorder: "0",
          allowtransparency: "true",
        }),
        function (e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = e.createElement("iframe")
          return (Object.assign(r, Object.assign({}, i, t)), Object.assign(r.style, n), r)
        })
      function X() {
        return Y(
          document,
          { id: S(), width: 0, height: 0, src: "about:blank" },
          { display: "none", height: "0px", width: "0px", border: "0px" },
        )
      }
      function Z(e) {
        return eF(N().search)[e] || ""
      }
      function ee(e) {
        return !e || ((0, c.cy)(e) || (0, c.O8)(e) ? !(e.length > 0) : Object.keys(e).length <= 0)
      }
      function et(e) {
        return (0, c.O8)(e) && (!e || 0 === e.length)
      }
      function en(e, t) {
        if ((0, c.fp)(e?.forEach)) return e.forEach(t, this)
        Object.entries(e || {}).forEach((e) => {
          let [n, r] = e
          return t.call(this, r, n)
        })
      }
      function er(e, t) {
        return (0, c.fp)(e?.includes) && e.includes(t)
      }
      function ei(e, t) {
        return (0, c.fp)(e?.map)
          ? e.map(t)
          : Object.entries(e || {}).map((n) => {
              let [r, i] = n
              return t(i, r, e)
            })
      }
      function eo(e, t, n, r) {
        let i
        ;((t = t || document), (i = n ? t.getElementsByTagName(n) : t.getElementsByTagName("head")))
        try {
          if ((i = i.length ? i : t.getElementsByTagName("body")).length) {
            i = i[0]
            let t = r ? null : i.firstChild
            return i.insertBefore(e, t)
          }
        } catch (e) {}
      }
      function ea(e, t) {
        let n = null
        return new d.U9((r) => {
          let i = function () {
            ;(e.removeEventListener("load", i),
              e.removeEventListener("error", i),
              null != n && window.clearTimeout(n),
              r())
          }
          ;(e.addEventListener("load", i),
            e.addEventListener("error", i),
            null != t && (n = window.setTimeout(i, t)))
        })
      }
      function es(e, t, n) {
        let r = new Image()
        ;(t && w.isFn(t) && ea(r, n).then(t), (r.src = e))
      }
      function el(e) {
        var t
        if (!e) return
        let n = X()
        ;(w.insertElement(n, document, "body"),
          (t = n.contentWindow.document).open(),
          t.write(e),
          t.close())
      }
      function ed(e, t, n) {
        let r = w.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"),
          i = document.createElement("div")
        i.innerHTML = r
        let o = i.firstChild
        ;(t && w.isFn(t) && ea(o, n).then(t), w.insertElement(o, document, "html", !0))
      }
      function eu(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : encodeURI
        if (!e) return ""
        let n = t(e),
          r = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">'
        return r + ('<img src="' + n + '"></div>')
      }
      function ec(e) {
        return Array.from(e.matchAll(/\$({[^}]+})/g))
          .map((e) => e[1])
          .reduce((e, t) => e.replace("$" + encodeURIComponent(t), "$" + t), encodeURI(e))
      }
      function ef(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ""
        return e
          ? (t && (e = encodeURI(e)),
            n && (n = `sandbox="${n}"`),
            `<iframe ${n} id="${S()}"
      frameborder="0"
      allowtransparency="true"
      marginheight="0" marginwidth="0"
      width="0" hspace="0" vspace="0" height="0"
      style="height:0px;width:0px;display:none;"
      scrolling="no"
      src="${e}">
    </iframe>`)
          : ""
      }
      function eg(e, t, n) {
        return n.indexOf(e) === t
      }
      function ep(e, t) {
        return e.concat(t)
      }
      function em(e, t) {
        if (e)
          return t
            .flatMap((e) => e.bids)
            .find((t) => ["bidId", "adId", "bid_id"].some((n) => t[n] === e))
      }
      function eh(e, t) {
        return e[t]
      }
      function eb(e) {
        return e
          .map((e) => e.bids.map((e) => e.bidder).reduce(ep, []))
          .reduce(ep, [])
          .filter((e) => void 0 !== e)
          .filter(eg)
      }
      function ey() {
        if (
          window.googletag &&
          (0, c.fp)(window.googletag.pubads) &&
          (0, c.fp)(window.googletag.pubads().getSlots)
        )
          return !0
      }
      function ev() {
        if (window.apntag && (0, c.fp)(window.apntag.getTag)) return !0
      }
      let eE = (e, t) => t.cpm - e.cpm
      function ew(e) {
        let t = e.length
        for (; t > 0; ) {
          let n = Math.floor(Math.random() * t),
            r = e[--t]
          ;((e[t] = e[n]), (e[n] = r))
        }
        return e
      }
      function eI() {
        try {
          return w.getWindowSelf() !== w.getWindowTop()
        } catch (e) {
          return !0
        }
      }
      function eA() {
        if (!eI()) return !1
        let e = w.getWindowSelf()
        return !!(e.$sf && e.$sf.ext)
      }
      function eC() {
        try {
          let e = q()
          return "function" == typeof e.$sf.ext.geom ? e.$sf.ext.geom() : void 0
        } catch (e) {
          H("Error getting SafeFrame geometry", e)
          return
        }
      }
      function eS() {
        return /^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent)
      }
      function eO(e, t) {
        if (e)
          return Object.entries(t).reduce((e, t) => {
            let [n, r] = t
            return e.replace(RegExp("\\$\\{" + n + "\\}", "g"), r || "")
          }, e)
      }
      function eT(e, t) {
        return eO(e, { AUCTION_PRICE: t })
      }
      function eD(e, t) {
        if (e && t && "string" == typeof t) return e.replace(/\${CLICKTHROUGH}/g, t)
      }
      function ek() {
        return new Date().getTime()
      }
      function e$() {
        return (window.performance && window.performance.now && window.performance.now()) || 0
      }
      function eB(e) {
        let t = -1,
          n = (e = e || q()).performance
        if (e.performance?.timing && e.performance.timing.navigationStart > 0) {
          let e = n.timing.domLoading - n.timing.navigationStart
          e > 0 && (t = e)
        }
        return t
      }
      function eR() {
        return !1 !== s.$W.getConfig("deviceAccess")
      }
      function eU() {
        if (window.navigator.cookieEnabled || document.cookie.length) return !0
      }
      function ex(e, t) {
        if (t < 1) throw Error(`numRequiredCalls must be a positive number. Got ${t}`)
        let n = 0
        return function () {
          ++n === t && e.apply(this, arguments)
        }
      }
      function ej(e, t) {
        return e.reduce(function (e, n) {
          return ((e[n[t]] = e[n[t]] || []).push(n), e)
        }, {})
      }
      function e_(e) {
        let t = ["banner", "native", "video", "audio"]
        return (
          !!Object.keys(e).every((e) => t.includes(e)) &&
          (!e.video || !e.video.context || ["instream", "outstream"].includes(e.video.context))
        )
      }
      function eP(e, t, n) {
        return e
          .filter((e) => e.code === t)
          .flatMap((e) => e.bids)
          .filter((e) => e.bidder === n)
          .map((e) => e.params || {})
      }
      let eq = (e, t) => e.getAdUnitPath() === t || e.getSlotElementId() === t
      function eN(e) {
        let t = s.$W.getConfig("customGptSlotMatching"),
          n = (0, c.fp)(t) && t(e)
        return (0, c.fp)(n) ? n : (t) => eq(e, t)
      }
      function eW(e, t) {
        let n = Object.keys(e.mediaTypes || { banner: "banner" }).join(", ")
        return `
    ${e.code} is a ${n} ad unit
    containing bidders that don't support ${n}: ${t}.
    This bidder won't fetch demand.
  `
      }
      function eM(e) {
        return Object.fromEntries(
          Object.entries(e).filter((e) => {
            let [t, n] = e
            return void 0 !== n
          }),
        )
      }
      function eL(e, t) {
        return "object" != typeof e
          ? {}
          : t.reduce((n, r, i) => {
              if ("function" == typeof r) return n
              let o = r,
                a = r.match(/^(.+?)\sas\s(.+?)$/i)
              a && ((r = a[1]), (o = a[2]))
              let s = e[r]
              return (
                "function" == typeof t[i + 1] && (s = t[i + 1](s, n)),
                void 0 !== s && (n[o] = s),
                n
              )
            }, {})
      }
      function eF(e) {
        return e
          ? e
              .replace(/^\?/, "")
              .split("&")
              .reduce((e, t) => {
                let [n, r] = t.split("=")
                return (
                  /\[\]$/.test(n)
                    ? ((e[(n = n.replace("[]", ""))] = e[n] || []), e[n].push(r))
                    : (e[n] = r || ""),
                  e
                )
              }, {})
          : {}
      }
      function eG(e) {
        return Object.keys(e)
          .map((t) =>
            Array.isArray(e[t]) ? e[t].map((e) => `${t}[]=${e}`).join("&") : `${t}=${e[t]}`,
          )
          .join("&")
      }
      function ez(e, t) {
        let n = document.createElement("a")
        t && "noDecodeWholeURL" in t && t.noDecodeWholeURL
          ? (n.href = e)
          : (n.href = decodeURIComponent(e))
        let r = t && "decodeSearchAsString" in t && t.decodeSearchAsString
        return {
          href: n.href,
          protocol: (n.protocol || "").replace(/:$/, ""),
          hostname: n.hostname,
          port: +n.port,
          pathname: n.pathname.replace(/^(?!\/)/, "/"),
          search: r ? n.search : w.parseQS(n.search || ""),
          hash: (n.hash || "").replace(/^#/, ""),
          host: n.host || window.location.host,
        }
      }
      function eH(e) {
        return (
          (e.protocol || "http") +
          "://" +
          (e.host || e.hostname + (e.port ? `:${e.port}` : "")) +
          (e.pathname || "") +
          (e.search ? `?${w.formatQS(e.search || "")}` : "") +
          (e.hash ? `#${e.hash}` : "")
        )
      }
      function eV(e, t) {
        let { checkTypes: n = !1 } =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
        if (e === t) return !0
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1
        let r = Array.isArray(e),
          i = Array.isArray(t)
        if (r && i) {
          if (e.length !== t.length) return !1
          for (let r = 0; r < e.length; r++) if (!eV(e[r], t[r], { checkTypes: n })) return !1
          return !0
        }
        if (r || i || (n && e.constructor !== t.constructor)) return !1
        let o = Object.keys(e),
          a = Object.keys(t)
        if (o.length !== a.length) return !1
        for (let r of o)
          if (!Object.prototype.hasOwnProperty.call(t, r) || !eV(e[r], t[r], { checkTypes: n }))
            return !1
        return !0
      }
      function eJ(e) {
        for (let t = 0; t < (arguments.length <= 1 ? 0 : arguments.length - 1); t++) {
          let n = t + 1 < 1 || arguments.length <= t + 1 ? void 0 : arguments[t + 1]
          ;(0, c.Qd)(n) &&
            (function e(t, n) {
              if (!(0, c.Qd)(t) || !(0, c.Qd)(n)) return
              let r = Object.keys(n)
              for (let i = 0; i < r.length; i++) {
                let o = r[i]
                if ("__proto__" === o || "constructor" === o) continue
                let a = n[o]
                ;(0, c.Qd)(a)
                  ? (t[o] || (t[o] = {}), e(t[o], a))
                  : Array.isArray(a)
                    ? Array.isArray(t[o])
                      ? a.forEach((e) => {
                          t[o].some((t) => eV(t, e)) || t[o].push(e)
                        })
                      : (t[o] = [...a])
                    : (t[o] = a)
              }
            })(e, n)
        }
        return e
      }
      function eK(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = function (e, t) {
            if ((0, c.fp)(Math.imul)) return Math.imul(e, t)
            var n = (4194303 & e) * (t |= 0)
            return (0xffc00000 & e && (n += ((0xffc00000 & e) * t) | 0), 0 | n)
          },
          r = 0xdeadbeef ^ t,
          i = 0x41c6ce57 ^ t
        for (let t = 0, o; t < e.length; t++)
          ((r = n(r ^ (o = e.charCodeAt(t)), 0x9e3779b1)), (i = n(i ^ o, 0x5f356495)))
        return (
          (r = n(r ^ (r >>> 16), 0x85ebca6b) ^ n(i ^ (i >>> 13), 0xc2b2ae35)),
          (
            0x100000000 *
              (2097151 & (i = n(i ^ (i >>> 16), 0x85ebca6b) ^ n(r ^ (r >>> 13), 0xc2b2ae35))) +
            (r >>> 0)
          ).toString()
        )
      }
      function eQ(e) {
        try {
          return JSON.parse(e)
        } catch (e) {}
      }
      function eY(e) {
        try {
          return JSON.stringify(e)
        } catch (e) {
          return ""
        }
      }
      function eX(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : function (e) {
                  return e
                },
          n = new Map(),
          r = function () {
            let r = t.apply(this, arguments)
            return (n.has(r) || n.set(r, e.apply(this, arguments)), n.get(r))
          }
        return ((r.clear = n.clear.bind(n)), r)
      }
      function eZ() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "d"
        if (0 > ["m", "d"].indexOf(t)) return Date.now()
        let n = e / ("m" === t ? 1440 : 1)
        return Date.now() + (e && e > 0 ? 864e5 * n : 0)
      }
      function e0(e) {
        return Object.keys(e).map((t) => ({ [t]: e[t] }))
      }
      function e1(e, t) {
        Object.entries(t).forEach((t) => {
          let [n, r] = t
          return e.setAttribute(n, r)
        })
      }
      function e2(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (e) => e,
          r = 0,
          i = e.length && e.length - 1,
          o = n(t)
        for (; i - r > 1; ) {
          let t = r + Math.round((i - r) / 2)
          o > n(e[t]) ? (r = t) : (i = t)
        }
        for (; e.length > r && o > n(e[r]); ) r++
        return r
      }
      function e3(e, t) {
        for (let n = 0, r; n < e.length; n++) if ((r = (0, u.A)(e[n], t))) return r
      }
      function e6(e) {
        let t = null
        try {
          let n = /[-\w]+\.([-\w]+|[-\w]{3,}|[-\w]{1,3}\.[-\w]{2})$/i.exec(e)
          if (null != n && n.length > 0) {
            t = n[0]
            for (let e = 1; e < n.length; e++) n[e].length > t.length && (t = n[e])
          }
        } catch (e) {
          t = null
        }
        return t
      }
      function e8(e, t) {
        ;(0, c.O8)(e.nurl) &&
          "" !== e.nurl &&
          ((e.nurl = e.nurl.replace(/\${AUCTION_PRICE}/, t)), es(e.nurl))
      }
      let e5 = function () {
        if (void 0 !== o) return o
        try {
          void 0 === window.CompressionStream
            ? (o = !1)
            : (new window.CompressionStream("gzip"), (o = !0))
        } catch (e) {
          o = !1
        }
        return o
      }
      async function e4(e) {
        "string" != typeof e && (e = JSON.stringify(e))
        let t = new Blob([new TextEncoder().encode(e)])
            .stream()
            .pipeThrough(new window.CompressionStream("gzip")),
          n = await new Response(t).blob()
        return new Uint8Array(await n.arrayBuffer())
      }
    },
    9655: function (e, t, n) {
      "use strict"
      function r(e) {
        if (null != e.element) return e.element
        let t = e.adUnitCode ?? e.code
        return t ? document.getElementById(t) : null
      }
      n.d(t, {
        o: function () {
          return r
        },
      })
    },
    10208: function (e, t, n) {
      "use strict"
      function r(e) {
        return (
          (function e(t) {
            var n, r, i
            if (Array.isArray(t)) {
              for (r = Array((n = t.length)); n--; )
                r[n] = (i = t[n]) && "object" == typeof i ? e(i) : i
              return r
            }
            if ("[object Object]" === Object.prototype.toString.call(t)) {
              for (n in ((r = {}), t))
                "__proto__" === n
                  ? Object.defineProperty(r, n, {
                      value: e(t[n]),
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                    })
                  : (r[n] = (i = t[n]) && "object" == typeof i ? e(i) : i)
              return r
            }
            return t
          })(e) || {}
        )
      }
      function i(e, t) {
        return t.filter((t) => e[t]).reduce((t, n) => Object.assign(t, { [n]: e[n] }), {})
      }
      n.d(t, {
        Uu: function () {
          return p
        },
        SH: function () {
          return i
        },
        KG: function () {
          return a
        },
        cy: function () {
          return d
        },
        Lm: function () {
          return f
        },
        fp: function () {
          return s
        },
        Fq: function () {
          return g
        },
        O8: function () {
          return l
        },
        Et: function () {
          return u
        },
        Qd: function () {
          return c
        },
        Go: function () {
          return r
        },
      })
      let o = Object.prototype.toString
      function a(e, t) {
        return o.call(e) === "[object " + t + "]"
      }
      function s(e) {
        return a(e, "Function")
      }
      function l(e) {
        return a(e, "String")
      }
      let d = Array.isArray.bind(Array)
      function u(e) {
        return a(e, "Number")
      }
      function c(e) {
        return a(e, "Object")
      }
      function f(e) {
        return a(e, "Boolean")
      }
      let g = Number.isInteger.bind(Number)
      function p(e, t) {
        return d(e) && (!t || e.length === t) && e.every((e) => g(e))
      }
    },
    9423: function (e, t, n) {
      "use strict"
      let r, i, o, a, s, l
      n.d(t, {
        Ak: function () {
          return w
        },
        BO: function () {
          return y
        },
        K7: function () {
          return v
        },
      })
      var d = n(41831)
      let u = "performanceMetrics",
        c =
          window.performance && window.performance.now
            ? () => window.performance.now()
            : () => Date.now(),
        f = new WeakMap()
      function g(e, t, n) {
        return function () {
          t && t()
          try {
            for (var r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return e.apply(this, i)
          } finally {
            n && n()
          }
        }
      }
      function p() {
        let {
          now: e = c,
          mkNode: t = function e(t) {
            return {
              metrics: {},
              timestamps: {},
              groups: {},
              addParent(e, n) {
                t.push([e, n])
              },
              newSibling: () => e(t.slice()),
              dfWalk() {
                let e,
                  {
                    visit: n,
                    follow: r = () => !0,
                    visited: i = new Set(),
                    inEdge: o,
                  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                if (!i.has(this)) {
                  if ((i.add(this), null != (e = n(o, this)))) return e
                  for (let [a, s] of t)
                    if (
                      r(o, s) &&
                      null != (e = a.dfWalk({ visit: n, follow: r, visited: i, inEdge: s }))
                    )
                      return e
                }
              },
            }
          },
          mkTimer: n = m,
          mkRenamer: r = (e) => e,
          nodes: i = f,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return function () {
          return (function o(a) {
            let s =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : (e) => ({
                    forEach(t) {
                      t(e)
                    },
                  })
            s = r(s)
            let l = function (e) {
              return a.dfWalk({
                visit(t, n) {
                  let r = n.timestamps
                  if (r.hasOwnProperty(e)) return r[e]
                },
              })
            }
            function d(e, t) {
              let n = s(e)
              a.dfWalk({
                follow: (e, t) => t.propagate && (!e || !e.stopPropagation),
                visit(e, r) {
                  n.forEach((n) => {
                    null == e
                      ? (r.metrics[n] = t)
                      : (r.groups.hasOwnProperty(n) || (r.groups[n] = []), r.groups[n].push(t))
                  })
                },
              })
            }
            function u(t) {
              return n(e, (e) => d(t, e))
            }
            function c() {
              let e = {}
              return (
                a.dfWalk({
                  visit(t, n) {
                    e = Object.assign({}, !t || t.includeGroups ? n.groups : null, n.metrics, e)
                  },
                }),
                e
              )
            }
            let f = {
              startTiming: u,
              measureTime: function (e, t) {
                return u(e).stopAfter(t)()
              },
              measureHookTime: function (e, t, n) {
                let r,
                  i = u(e)
                return n(
                  (((r = i.stopBefore(t)).bail = t.bail && i.stopBefore(t.bail)),
                  (r.stopTiming = i),
                  (r.untimed = t),
                  r),
                )
              },
              checkpoint: function (t) {
                a.timestamps[t] = e()
              },
              timeSince: function (t, n) {
                let r = l(t),
                  i = null != r ? e() - r : null
                return (null != n && d(n, i), i)
              },
              timeBetween: function (e, t, n) {
                let r = l(e),
                  i = l(t),
                  o = null != r && null != i ? i - r : null
                return (null != n && d(n, o), o)
              },
              setMetric: d,
              getMetrics: c,
              fork: function () {
                let {
                  propagate: e = !0,
                  stopPropagation: n = !1,
                  includeGroups: r = !1,
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                return o(t([[a, { propagate: e, stopPropagation: n, includeGroups: r }]]), s)
              },
              join: function (e) {
                let {
                    propagate: t = !0,
                    stopPropagation: n = !1,
                    includeGroups: r = !1,
                  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  o = i.get(e)
                null != o && o.addParent(a, { propagate: t, stopPropagation: n, includeGroups: r })
              },
              newMetrics: function () {
                return o(a.newSibling(), s)
              },
              renameWith: function (e) {
                return o(a, e)
              },
              toJSON: () => c(),
            }
            return (i.set(f, a), f)
          })(t([]))
        }
      }
      function m(e, t) {
        let n = e(),
          r = !1
        function i() {
          r || (t(e() - n), (r = !0))
        }
        return ((i.stopBefore = (e) => g(e, i)), (i.stopAfter = (e) => g(e, null, i)), i)
      }
      let h =
          ((i = () => ({})),
          (o = { forEach: (r = function () {}) }),
          ((a = () => null).stopBefore = (e) => e),
          (a.stopAfter = (e) => e),
          (s = Object.defineProperties(
            { dfWalk: r, newSibling: () => s, addParent: r },
            Object.fromEntries(["metrics", "timestamps", "groups"].map((e) => [e, { get: i }])),
          )),
          p({
            now: () => 0,
            mkNode: () => s,
            mkRenamer: () => () => o,
            mkTimer: () => a,
            nodes: { get: r, set: r },
          })()),
        b = !0
      function y(e) {
        return (b && e) || h
      }
      d.$W.getConfig(u, (e) => {
        b = !!e[u]
      })
      let v =
        ((l = p()),
        function () {
          return b ? l() : h
        })
      function E(e, t) {
        return function (n, r) {
          var i = this
          return function (o) {
            for (var a = arguments.length, s = Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++)
              s[l - 1] = arguments[l]
            return y(t.apply(i, s)).measureHookTime(e + n, o, (e) => r.call(i, e, ...s))
          }
        }
      }
      let w = E("requestBids.", (e) => e.metrics)
      E("addBidResponse.", (e, t) => t.metrics)
    },
    16886: function (e, t, n) {
      "use strict"
      n.d(t, {
        U9: function () {
          return o
        },
        cb: function () {
          return a
        },
        v6: function () {
          return s
        },
      })
      var r = n(76030)
      let i = (0, r.m)().setTimeout ?? setTimeout,
        o = (0, r.m)().Promise ?? Promise
      function a() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
        return new o((t) => {
          i(t, e)
        })
      }
      function s() {
        var e, t
        let n,
          r,
          { promiseFactory: i = (e) => new o(e) } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return {
          promise: i((e, t) => {
            ;((n = e), (r = t))
          }),
          resolve: ((e = n), (t) => e(t)),
          reject: ((t = r), (e) => t(e)),
        }
      }
    },
    95450: function (e, t, n) {
      "use strict"
      function r(e, t) {
        return e === t ? 0 : e < t ? -1 : 1
      }
      function i() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (e) => e
        return (t, n) => r(e(t), e(n))
      }
      function o() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r
        return (t, n) => -e(t, n) || 0
      }
      function a() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]
        return function (e, n) {
          for (let r of t) {
            let t = r(e, n)
            if (0 !== t) return t
          }
          return 0
        }
      }
      function s() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r
        return (function () {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r
          return (t, n) => (0 > e(n, t) ? n : t)
        })(o(e))
      }
      n.d(t, {
        Bq: function () {
          return c
        },
        Vk: function () {
          return u
        },
      })
      let l = i((e) => e.cpm),
        d = i((e) => e.responseTimestamp),
        u = s(a(l, o(i((e) => e.timeToRespond)))),
        c = s(a(l, o(d)))
      s(a(l, d))
    },
    44868: function (e, t, n) {
      "use strict"
      n.d(t, {
        H: function () {
          return d
        },
      })
      var r = n(16886),
        i = n(31360)
      let o = null,
        a = 0,
        s = []
      function l(e, t) {
        let n = a,
          r = setTimeout(() => {
            a === n && null == o
              ? e()
              : null != o
                ? s.push({
                    callback: e,
                    startTime: n,
                    setTimerId(e) {
                      r = e
                    },
                  })
                : (r = l(e, a - n)())
          }, t)
        return () => r
      }
      function d() {
        let e,
          t,
          {
            startTime: n = i.timestamp,
            ttl: o = () => null,
            monotonic: a = !1,
            slack: s = 5e3,
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          d = new Map(),
          u = [],
          c = [],
          f = a
            ? (e) => c.push(e)
            : (e) =>
                c.splice(
                  (0, i.binarySearch)(c, e, (e) => e.expiry),
                  0,
                  e,
                )
        function g() {
          if ((t && clearTimeout(t), c.length > 0)) {
            let n = (0, i.timestamp)()
            t = l(
              () => {
                let e = (0, i.timestamp)(),
                  n = 0
                for (let t of c) {
                  if (t.expiry > e) break
                  ;(u.forEach((e) => {
                    try {
                      e(t.item)
                    } catch (e) {
                      ;(0, i.logError)(e)
                    }
                  }),
                    d.delete(t.item),
                    n++)
                }
                ;(c.splice(0, n), (t = null), g())
              },
              (e = Math.max(n, c[0].expiry + s)) - n,
            )
          } else t = null
        }
        let p = {}
        return {
          [Symbol.iterator]: () => d.keys(),
          add(i) {
            d.has(i) ||
              d.set(
                i,
                (function (i) {
                  let a,
                    l = {},
                    d = p,
                    [u, c] = Object.entries({ start: n, delta: o }).map((n) => {
                      let o,
                        [u, c] = n
                      return function () {
                        let n = (o = {})
                        r.U9.resolve(c(i)).then((r) => {
                          n === o &&
                            ((l[u] = r),
                            d === p &&
                              null != l.start &&
                              null != l.delta &&
                              ((a = l.start + l.delta), f(m), (null == t || e > a + s) && g()))
                        })
                      }
                    }),
                    m = {
                      item: i,
                      refresh: c,
                      get expiry() {
                        return a
                      },
                    }
                  return (u(), c(), m)
                })(i),
              )
          },
          has: (e) => d.has(e),
          delete(e) {
            let t = d.get(e)
            if (t) {
              for (let e = 0; e < c.length && c[e].expiry <= t.expiry; e++)
                if (c[e] === t) {
                  c.splice(e, 1)
                  break
                }
            }
            return d.delete(e)
          },
          clear() {
            ;((c.length = 0), g(), d.clear(), (p = {}))
          },
          toArray: () => Array.from(d.keys()),
          refresh() {
            for (let e of ((c.length = 0), g(), d.values())) e.refresh()
          },
          onExpiry: (e) => (
            u.push(e),
            () => {
              let t = u.indexOf(e)
              t >= 0 && u.splice(t, 1)
            }
          ),
        }
      }
      document.addEventListener("visibilitychange", function () {
        document.hidden
          ? (o = Date.now())
          : ((a += Date.now() - (o ?? 0)),
            (o = null),
            s.forEach((e) => {
              let { callback: t, startTime: n, setTimerId: r } = e
              return r(l(t, a - n)())
            }),
            (s = []))
      })
    },
    78068: function (e, t, n) {
      "use strict"
      let r
      n.d(t, {
        Vv: function () {
          return l
        },
        Ot: function () {
          return a
        },
        Bp: function () {
          return s
        },
      })
      var i = n(31360)
      let o = new (function e(t, n) {
          let r = {},
            i = {},
            o = []
          ;(Object.entries(n).forEach((n) => {
            let [a, s] = n
            if (null != s && "object" == typeof s) {
              let n = new e(() => t()?.[a], s)
              ;((r[a] = n.obj), o.push(n.reset))
            } else
              !0 === s &&
                Object.defineProperty(r, a, {
                  get: () => (i.hasOwnProperty(a) || (i[a] = t()?.[a]), i[a]),
                })
          }),
            (this.obj = r),
            (this.reset = function () {
              ;(o.forEach((e) => e()), (i = {}))
            }))
        })(
          () =>
            (0, i.canAccessWindowTop)() ? i.internal.getWindowTop() : i.internal.getWindowSelf(),
          {
            innerHeight: !0,
            innerWidth: !0,
            screen: { width: !0, height: !0 },
            visualViewport: { width: !0, height: !0 },
            document: {
              documentElement: { clientWidth: !0, clientHeight: !0, scrollTop: !0, scrollLeft: !0 },
              body: { scrollTop: !0, scrollLeft: !0, clientWidth: !0, clientHeight: !0 },
            },
          },
        ),
        a = function () {
          return ((!r || Date.now() - r > 20) && (o.reset(), (r = Date.now())), o.obj)
        }
      function s() {
        o.reset()
      }
      function l(e) {
        let t =
            e ??
            ((0, i.canAccessWindowTop)() ? i.internal.getWindowTop() : i.internal.getWindowSelf()),
          n = t?.screen ?? i.internal.getWindowSelf()?.screen ?? window?.screen,
          r = Number(n?.width),
          o = Number(n?.height)
        if (Number.isFinite(r) && Number.isFinite(o)) return o >= r ? "portrait" : "landscape"
      }
    },
    31918: function (e, t, n) {
      "use strict"
      n.d(t, {
        JE: function () {
          return a
        },
        o1: function () {
          return o
        },
      })
      var r = n(16886)
      function i(e, t) {
        if (e()) {
          let e
          ;((e = window.scheduler),
          "function" == typeof e?.yield ? e.yield() : r.U9.resolve()).then(t)
        } else t()
      }
      function o(e, t) {
        return function () {
          for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o]
          i(e, () => {
            t.apply(this, r)
          })
        }
      }
      function a(e, t, n) {
        var r, o
        let a
        ;((r = t.map((t) => (n) => {
          i(e, () => {
            ;(t(), n())
          })
        })),
          (o = n),
          (a = 0),
          (function e() {
            r.length > a ? r[(a += 1) - 1](e) : "function" == typeof o && o()
          })())
      }
    },
    33622: function (e, t, n) {
      "use strict"
      n.d(t, {
        H6: function () {
          return d
        },
        V0: function () {
          return c
        },
        Zy: function () {
          return u
        },
        vk: function () {
          return f
        },
      })
      var r = n(10208),
        i = n(31360),
        o = n(41831),
        a = n(27426),
        s = n(19539),
        l = n(62435)
      let d = "outstream",
        u = new Map([
          [
            "mimes",
            (e) => Array.isArray(e) && e.length > 0 && e.every((e) => "string" == typeof e),
          ],
          ["minduration", r.Fq],
          ["maxduration", r.Fq],
          ["startdelay", r.Fq],
          ["maxseq", r.Fq],
          ["poddur", r.Fq],
          ["protocols", r.Uu],
          ["w", r.Fq],
          ["h", r.Fq],
          ["podid", r.O8],
          ["podseq", r.Fq],
          ["rqddurs", r.Uu],
          ["placement", r.Fq],
          ["plcmt", r.Fq],
          ["linearity", r.Fq],
          ["skip", (e) => [1, 0].includes(e)],
          ["skipmin", r.Fq],
          ["skipafter", r.Fq],
          ["sequence", r.Fq],
          ["slotinpod", r.Fq],
          ["mincpmpersec", r.Et],
          ["battr", r.Uu],
          ["maxextended", r.Fq],
          ["minbitrate", r.Fq],
          ["maxbitrate", r.Fq],
          ["boxingallowed", r.Fq],
          ["playbackmethod", r.Uu],
          ["playbackend", r.Fq],
          ["delivery", r.Uu],
          ["pos", r.Fq],
          ["api", r.Uu],
          ["companiontype", r.Uu],
          ["poddedupe", r.Uu],
        ])
      function c(e) {
        let t = e?.mediaTypes?.video
        if (null != t) {
          null == t.plcmt &&
            (t.context === d || [2, 3, 4].includes(t.placement)
              ? (t.plcmt = 4)
              : t.playbackmethod?.some?.((e) => [2, 6].includes(e)) && (t.plcmt = 2))
          let n = (0, r.Uu)(t.playerSize, 2)
              ? t.playerSize
              : Array.isArray(t.playerSize) && (0, r.Uu)(t.playerSize[0])
                ? t.playerSize[0]
                : null,
            o = (0, r.Et)(t.w) && (0, r.Et)(t.h) ? [t.w, t.h] : null,
            a = !1
          ;(null == n
            ? null != o && (null != t.playerSize ? (a = !0) : (t.playerSize = [o]))
            : ["w", "h"].forEach((e, r) => {
                null != t[e] && t[e] !== n[r] ? (a = !0) : (t[e] = n[r])
              }),
            a && (0, i.logWarn)(`Ad unit "${e.code} has conflicting playerSize and w/h`, e))
        }
      }
      function f(e) {
        let { index: t = s.n.index } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.getMediaTypes(e)?.video,
          r = n && n?.context,
          i = n && n?.useCacheKey,
          o = t.getAdUnit(e)
        return g(e, o, n, r, i)
      }
      let g = (0, a.A_)(
        "sync",
        function (e, t, n, r, a) {
          if (n && (a || r !== d)) {
            let { url: t, useLocal: n } = o.$W.getConfig("cache") || {}
            return t || n || !e.vastXml || e.vastUrl
              ? !!(e.vastUrl || e.vastXml)
              : ((0, i.logError)(`
        This bid contains only vastXml and will not work when a prebid cache url is not specified.
        Try enabling either prebid cache with ${(0, l.k)()}.setConfig({ cache: {url: "..."} });
        or local cache with ${(0, l.k)()}.setConfig({ cache: { useLocal: true }});
      `),
                !1)
          }
          return r !== d || !!a || !!(e.renderer || (t && t.renderer) || n.renderer)
        },
        "checkVideoBidSetup",
      )
    },
    67166: function (e, t, n) {
      "use strict"
      function r(e, t, n) {
        t.split && (t = t.split("."))
        for (
          var r, i, o = 0, a = t.length, s = e;
          o < a && "__proto__" != (i = "" + t[o++]) && "constructor" !== i && "prototype" !== i;
        )
          s = s[i] =
            o === a
              ? n
              : typeof (r = s[i]) == typeof t
                ? r
                : 0 * t[o] != 0 || ~("" + t[o]).indexOf(".")
                  ? {}
                  : []
      }
      n.d(t, {
        J: function () {
          return r
        },
      })
    },
  },
])
//# sourceMappingURL=1897.0ec92f17.js.map
