_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [6],
  {
    BMP1: function (e, t, n) {
      'use strict'
      var r = n('284h')(n('IKlv'))
      ;(window.next = r), (0, r.default)().catch(console.error)
    },
    DqTX: function (e, t, n) {
      'use strict'
      ;(t.__esModule = !0),
        (t.default = function () {
          var e = null
          return {
            mountedInstances: new Set(),
            updateHead: function (t) {
              var n = (e = Promise.resolve().then(function () {
                if (n === e) {
                  e = null
                  var r = {}
                  t.forEach(function (e) {
                    var t = r[e.type] || []
                    t.push(e), (r[e.type] = t)
                  })
                  var o = r.title ? r.title[0] : null,
                    i = ''
                  if (o) {
                    var u = o.props.children
                    i = 'string' === typeof u ? u : u.join('')
                  }
                  i !== document.title && (document.title = i),
                    ['meta', 'base', 'link', 'style', 'script'].forEach(
                      function (e) {
                        !(function (e, t) {
                          var n = document.getElementsByTagName('head')[0],
                            r = n.querySelector('meta[name=next-head-count]')
                          0
                          for (
                            var o = Number(r.content),
                              i = [],
                              u = 0,
                              c = r.previousElementSibling;
                            u < o;
                            u++, c = c.previousElementSibling
                          )
                            c.tagName.toLowerCase() === e && i.push(c)
                          var s = t.map(a).filter(function (e) {
                            for (var t = 0, n = i.length; t < n; t++) {
                              if (i[t].isEqualNode(e)) return i.splice(t, 1), !1
                            }
                            return !0
                          })
                          i.forEach(function (e) {
                            return e.parentNode.removeChild(e)
                          }),
                            s.forEach(function (e) {
                              return n.insertBefore(e, r)
                            }),
                            (r.content = (o - i.length + s.length).toString())
                        })(e, r[e] || [])
                      }
                    )
                }
              }))
            },
          }
        })
      var r = {
        acceptCharset: 'accept-charset',
        className: 'class',
        htmlFor: 'for',
        httpEquiv: 'http-equiv',
      }
      function a(e) {
        var t = e.type,
          n = e.props,
          a = document.createElement(t)
        for (var o in n)
          if (
            n.hasOwnProperty(o) &&
            'children' !== o &&
            'dangerouslySetInnerHTML' !== o &&
            void 0 !== n[o]
          ) {
            var i = r[o] || o.toLowerCase()
            a.setAttribute(i, n[o])
          }
        var u = n.children,
          c = n.dangerouslySetInnerHTML
        return (
          c
            ? (a.innerHTML = c.__html || '')
            : u && (a.textContent = 'string' === typeof u ? u : u.join('')),
          a
        )
      }
    },
    FYa8: function (e, t, n) {
      'use strict'
      var r
      ;(t.__esModule = !0), (t.HeadManagerContext = void 0)
      var a = ((r = n('q1tI')) && r.__esModule
        ? r
        : { default: r }
      ).default.createContext({})
      t.HeadManagerContext = a
    },
    IKlv: function (e, t, n) {
      'use strict'
      var r = n('o0o1'),
        a = n('yXPU'),
        o = n('lwsE'),
        i = n('W8MJ'),
        u = n('7W2i'),
        c = n('a1gu'),
        s = n('Nsbk'),
        l = n('J4zp')
      function f(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' === typeof Proxy) return !0
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = s(e)
          if (t) {
            var a = s(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return c(this, n)
        }
      }
      var d = n('284h'),
        p = n('TqRt')
      ;(t.__esModule = !0),
        (t.render = te),
        (t.renderError = re),
        (t.default = t.emitter = t.router = t.version = void 0)
      var h = p(n('pVnL')),
        m = (p(n('284h')), p(n('q1tI'))),
        v = p(n('i8i4')),
        g = n('FYa8'),
        y = p(n('dZ6Y')),
        _ = n('qOIg'),
        w = n('elyg'),
        S = n('/jkW'),
        E = d(n('3WeD')),
        P = d(n('yLiY')),
        T = n('g/15'),
        b = p(n('DqTX')),
        x = d(n('zmvN')),
        R = p(n('bGXG')),
        C = n('nOHt')
      'finally' in Promise.prototype || (Promise.prototype.finally = n('Z577'))
      var N = JSON.parse(document.getElementById('__NEXT_DATA__').textContent)
      window.__NEXT_DATA__ = N
      t.version = '9.5.3'
      var k = N.props,
        M = N.err,
        A = N.page,
        I = N.query,
        D = N.buildId,
        F = N.assetPrefix,
        L = N.runtimeConfig,
        B = N.dynamicIds,
        q = N.isFallback,
        j = F || ''
      ;(n.p = ''.concat(j, '/_next/')),
        P.setConfig({ serverRuntimeConfig: {}, publicRuntimeConfig: L || {} })
      var H = (0, T.getURL)()
      ;(0, w.hasBasePath)(H) && (H = (0, w.delBasePath)(H))
      var U = new x.default(D, j, A),
        O = function (e) {
          var t = l(e, 2),
            n = t[0],
            r = t[1]
          return U.registerPage(n, r)
        }
      window.__NEXT_P &&
        window.__NEXT_P.map(function (e) {
          return setTimeout(function () {
            return O(e)
          }, 0)
        }),
        (window.__NEXT_P = []),
        (window.__NEXT_P.push = O)
      var W,
        X,
        G,
        Y,
        J,
        V,
        Z,
        z = (0, b.default)(),
        K = document.getElementById('__next')
      t.router = G
      var Q = (function (e) {
          u(n, e)
          var t = f(n)
          function n() {
            return o(this, n), t.apply(this, arguments)
          }
          return (
            i(n, [
              {
                key: 'componentDidCatch',
                value: function (e, t) {
                  this.props.fn(e, t)
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  this.scrollToHash(),
                    G.isSsr &&
                      (q ||
                        (N.nextExport &&
                          ((0, S.isDynamicRoute)(G.pathname) ||
                            location.search)) ||
                        (k && k.__N_SSG && location.search)) &&
                      G.replace(
                        G.pathname +
                          '?' +
                          String(
                            E.assign(
                              E.urlQueryToSearchParams(G.query),
                              new URLSearchParams(location.search)
                            )
                          ),
                        H,
                        { _h: 1, shallow: !q }
                      )
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this.scrollToHash()
                },
              },
              {
                key: 'scrollToHash',
                value: function () {
                  var e = location.hash
                  if ((e = e && e.substring(1))) {
                    var t = document.getElementById(e)
                    t &&
                      setTimeout(function () {
                        return t.scrollIntoView()
                      }, 0)
                  }
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.props.children
                },
              },
            ]),
            n
          )
        })(m.default.Component),
        $ = (0, y.default)()
      t.emitter = $
      var ee = (function () {
        var e = a(
          r.mark(function e() {
            var n,
              a,
              o,
              i,
              u,
              c,
              s = arguments
            return r.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        s.length > 0 && void 0 !== s[0] ? s[0] : {},
                        (e.next = 4),
                        U.loadPage('/_app')
                      )
                    case 4:
                      return (
                        (n = e.sent),
                        (a = n.page),
                        (o = n.mod),
                        (V = a),
                        o &&
                          o.reportWebVitals &&
                          (Z = function (e) {
                            var t,
                              n = e.id,
                              r = e.name,
                              a = e.startTime,
                              i = e.value,
                              u = e.duration,
                              c = e.entryType,
                              s = e.entries,
                              l = ''
                                .concat(Date.now(), '-')
                                .concat(
                                  Math.floor(8999999999999 * Math.random()) +
                                    1e12
                                )
                            s && s.length && (t = s[0].startTime),
                              o.reportWebVitals({
                                id: n || l,
                                name: r,
                                startTime: a || t,
                                value: null == i ? u : i,
                                label:
                                  'mark' === c || 'measure' === c
                                    ? 'custom'
                                    : 'web-vital',
                              })
                          }),
                        (i = M),
                        (e.prev = 10),
                        (e.next = 14),
                        U.loadPage(A)
                      )
                    case 14:
                      ;(u = e.sent),
                        (Y = u.page),
                        (J = u.styleSheets),
                        (e.next = 21)
                      break
                    case 21:
                      e.next = 26
                      break
                    case 23:
                      ;(e.prev = 23), (e.t0 = e.catch(10)), (i = e.t0)
                    case 26:
                      if (!window.__NEXT_PRELOADREADY) {
                        e.next = 30
                        break
                      }
                      return (e.next = 30), window.__NEXT_PRELOADREADY(B)
                    case 30:
                      return (
                        (t.router = G = (0, C.createRouter)(A, I, H, {
                          initialProps: k,
                          pageLoader: U,
                          App: V,
                          Component: Y,
                          initialStyleSheets: J,
                          wrapApp: se,
                          err: i,
                          isFallback: Boolean(q),
                          subscription: function (e, t) {
                            return te({
                              App: t,
                              Component: e.Component,
                              styleSheets: e.styleSheets,
                              props: e.props,
                              err: e.err,
                            })
                          },
                        })),
                        te(
                          (c = {
                            App: V,
                            Component: Y,
                            styleSheets: J,
                            props: k,
                            err: i,
                          })
                        ),
                        e.abrupt('return', $)
                      )
                    case 38:
                      return e.abrupt('return', {
                        emitter: $,
                        render: te,
                        renderCtx: c,
                      })
                    case 39:
                    case 'end':
                      return e.stop()
                  }
              },
              e,
              null,
              [[10, 23]]
            )
          })
        )
        return function () {
          return e.apply(this, arguments)
        }
      })()
      function te(e) {
        return ne.apply(this, arguments)
      }
      function ne() {
        return (ne = a(
          r.mark(function e(t) {
            return r.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!t.err) {
                        e.next = 4
                        break
                      }
                      return (e.next = 3), re(t)
                    case 3:
                      return e.abrupt('return')
                    case 4:
                      return (e.prev = 4), (e.next = 7), le(t)
                    case 7:
                      e.next = 16
                      break
                    case 9:
                      if (
                        ((e.prev = 9), (e.t0 = e.catch(4)), !e.t0.cancelled)
                      ) {
                        e.next = 13
                        break
                      }
                      throw e.t0
                    case 13:
                      return (
                        (e.next = 16), re((0, h.default)({}, t, { err: e.t0 }))
                      )
                    case 16:
                    case 'end':
                      return e.stop()
                  }
              },
              e,
              null,
              [[4, 9]]
            )
          })
        )).apply(this, arguments)
      }
      function re(e) {
        var t = e.App,
          n = e.err
        return (
          console.error(n),
          U.loadPage('/_error').then(function (r) {
            var a = r.page,
              o = r.styleSheets,
              i = se(t),
              u = {
                Component: a,
                AppTree: i,
                router: G,
                ctx: { err: n, pathname: A, query: I, asPath: H, AppTree: i },
              }
            return Promise.resolve(
              e.props ? e.props : (0, T.loadGetInitialProps)(t, u)
            ).then(function (t) {
              return le(
                (0, h.default)({}, e, {
                  err: n,
                  Component: a,
                  styleSheets: o,
                  props: t,
                })
              )
            })
          })
        )
      }
      t.default = ee
      var ae = 'function' === typeof v.default.hydrate
      function oe() {
        T.ST &&
          (performance.mark('afterHydrate'),
          performance.measure(
            'Next.js-before-hydration',
            'navigationStart',
            'beforeRender'
          ),
          performance.measure(
            'Next.js-hydration',
            'beforeRender',
            'afterHydrate'
          ),
          Z && performance.getEntriesByName('Next.js-hydration').forEach(Z),
          ue())
      }
      function ie() {
        if (T.ST) {
          performance.mark('afterRender')
          var e = performance.getEntriesByName('routeChange', 'mark')
          e.length &&
            (performance.measure(
              'Next.js-route-change-to-render',
              e[0].name,
              'beforeRender'
            ),
            performance.measure(
              'Next.js-render',
              'beforeRender',
              'afterRender'
            ),
            Z &&
              (performance.getEntriesByName('Next.js-render').forEach(Z),
              performance
                .getEntriesByName('Next.js-route-change-to-render')
                .forEach(Z)),
            ue(),
            ['Next.js-route-change-to-render', 'Next.js-render'].forEach(
              function (e) {
                return performance.clearMeasures(e)
              }
            ))
        }
      }
      function ue() {
        ;['beforeRender', 'afterHydrate', 'afterRender', 'routeChange'].forEach(
          function (e) {
            return performance.clearMarks(e)
          }
        )
      }
      function ce(e) {
        var t = e.children
        return m.default.createElement(
          Q,
          {
            fn: function (e) {
              return re({ App: V, err: e }).catch(function (e) {
                return console.error('Error rendering page: ', e)
              })
            },
          },
          m.default.createElement(
            _.RouterContext.Provider,
            { value: (0, C.makePublicRouterInstance)(G) },
            m.default.createElement(
              g.HeadManagerContext.Provider,
              { value: z },
              t
            )
          )
        )
      }
      var se = function (e) {
        return function (t) {
          var n = (0, h.default)({}, t, { Component: Y, err: M, router: G })
          return m.default.createElement(
            ce,
            null,
            m.default.createElement(e, n)
          )
        }
      }
      function le(e) {
        var t = e.App,
          n = e.Component,
          r = e.props,
          a = e.err,
          o = e.styleSheets
        ;(n = n || W.Component), (r = r || W.props)
        var i = (0, h.default)({}, r, { Component: n, err: a, router: G })
        W = i
        var u,
          c = !1,
          s = new Promise(function (e, t) {
            X && X(),
              (u = function () {
                ;(X = null), e()
              }),
              (X = function () {
                ;(c = !0), (X = null)
                var e = new Error('Cancel rendering route')
                ;(e.cancelled = !0), t(e)
              })
          })
        var l,
          f,
          d = m.default.createElement(
            fe,
            {
              callback: function () {
                if (!ae && !c) {
                  for (
                    var e = new Set(
                        o.map(function (e) {
                          return e.href
                        })
                      ),
                      t = (0, x.looseToArray)(
                        document.querySelectorAll('style[data-n-href]')
                      ),
                      n = t.map(function (e) {
                        return e.getAttribute('data-n-href')
                      }),
                      r = 0;
                    r < n.length;
                    ++r
                  )
                    e.has(n[r])
                      ? t[r].removeAttribute('media')
                      : t[r].setAttribute('media', 'x')
                  var a = document.querySelector('noscript[data-n-css]')
                  a &&
                    o.forEach(function (e) {
                      var t = e.href,
                        n = document.querySelector(
                          'style[data-n-href="'.concat(t, '"]')
                        )
                      n &&
                        (a.parentNode.insertBefore(n, a.nextSibling), (a = n))
                    }),
                    (0, x.looseToArray)(
                      document.querySelectorAll('link[data-n-p]')
                    ).forEach(function (e) {
                      e.parentNode.removeChild(e)
                    }),
                    getComputedStyle(document.body, 'height')
                }
                u()
              },
            },
            m.default.createElement(ce, null, m.default.createElement(t, i))
          )
        return (
          (function () {
            if (ae) return !1
            var e = (0, x.looseToArray)(
                document.querySelectorAll('style[data-n-href]')
              ),
              t = new Set(
                e.map(function (e) {
                  return e.getAttribute('data-n-href')
                })
              )
            o.forEach(function (e) {
              var n = e.href,
                r = e.text
              if (!t.has(n)) {
                var a = document.createElement('style')
                a.setAttribute('data-n-href', n),
                  a.setAttribute('media', 'x'),
                  document.head.appendChild(a),
                  a.appendChild(document.createTextNode(r))
              }
            })
          })(),
          (l = d),
          (f = K),
          T.ST && performance.mark('beforeRender'),
          ae
            ? (v.default.hydrate(l, f, oe),
              (ae = !1),
              Z && T.ST && (0, R.default)(Z))
            : v.default.render(l, f, ie),
          s
        )
      }
      function fe(e) {
        var t = e.callback,
          n = e.children
        return (
          m.default.useLayoutEffect(
            function () {
              return t()
            },
            [t]
          ),
          n
        )
      }
    },
    Lab5: function (e, t, n) {
      'use strict'
      ;(t.__esModule = !0),
        (t.default = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : '',
            n =
              '/' === e
                ? '/index'
                : /^\/index(\/|$)/.test(e)
                ? '/index'.concat(e)
                : ''.concat(e)
          return n + t
        })
    },
    Z577: function (e, t) {
      Promise.prototype.finally = function (e) {
        if ('function' != typeof e) return this.then(e, e)
        var t = this.constructor || Promise
        return this.then(
          function (n) {
            return t.resolve(e()).then(function () {
              return n
            })
          },
          function (n) {
            return t.resolve(e()).then(function () {
              throw n
            })
          }
        )
      }
    },
    bGXG: function (e, t, n) {
      'use strict'
      ;(t.__esModule = !0), (t.default = void 0)
      var r = n('w6Sm')
      t.default = function (e) {
        ;(0, r.getCLS)(e),
          (0, r.getFID)(e),
          (0, r.getFCP)(e),
          (0, r.getLCP)(e),
          (0, r.getTTFB)(e)
      }
    },
    fcRV: function (e, t, n) {
      'use strict'
      ;(t.__esModule = !0),
        (t.default = function (e) {
          return e.replace(/[/#?]/g, function (e) {
            return encodeURIComponent(e)
          })
        })
    },
    pVnL: function (e, t) {
      function n() {
        return (
          (e.exports = n =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
            }),
          n.apply(this, arguments)
        )
      }
      e.exports = n
    },
    w6Sm: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'getCLS', function () {
          return h
        }),
        n.d(t, 'getFCP', function () {
          return v
        }),
        n.d(t, 'getFID', function () {
          return g
        }),
        n.d(t, 'getLCP', function () {
          return _
        }),
        n.d(t, 'getTTFB', function () {
          return w
        })
      var r,
        a,
        o = function () {
          return ''
            .concat(Date.now(), '-')
            .concat(Math.floor(8999999999999 * Math.random()) + 1e12)
        },
        i = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1
          return {
            name: e,
            value: t,
            delta: 0,
            entries: [],
            id: o(),
            isFinal: !1,
          }
        },
        u = function (e, t) {
          try {
            if (PerformanceObserver.supportedEntryTypes.includes(e)) {
              var n = new PerformanceObserver(function (e) {
                return e.getEntries().map(t)
              })
              return n.observe({ type: e, buffered: !0 }), n
            }
          } catch (e) {}
        },
        c = !1,
        s = !1,
        l = function (e) {
          c = !e.persisted
        },
        f = function () {
          addEventListener('pagehide', l),
            addEventListener('unload', function () {})
        },
        d = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          s || (f(), (s = !0)),
            addEventListener(
              'visibilitychange',
              function (t) {
                var n = t.timeStamp
                'hidden' === document.visibilityState &&
                  e({ timeStamp: n, isUnloading: c })
              },
              { capture: !0, once: t }
            )
        },
        p = function (e, t, n, r) {
          var a
          return function () {
            n && t.isFinal && n.disconnect(),
              t.value >= 0 &&
                (r || t.isFinal || 'hidden' === document.visibilityState) &&
                ((t.delta = t.value - (a || 0)),
                (t.delta || t.isFinal || void 0 === a) && (e(t), (a = t.value)))
          }
        },
        h = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = i('CLS', 0),
            r = function (e) {
              e.hadRecentInput || ((n.value += e.value), n.entries.push(e), o())
            },
            a = u('layout-shift', r),
            o = p(e, n, a, t)
          d(function (e) {
            var t = e.isUnloading
            a && a.takeRecords().map(r), t && (n.isFinal = !0), o()
          })
        },
        m = function () {
          return (
            void 0 === r &&
              ((r = 'hidden' === document.visibilityState ? 0 : 1 / 0),
              d(function (e) {
                var t = e.timeStamp
                return (r = t)
              }, !0)),
            {
              get timeStamp() {
                return r
              },
            }
          )
        },
        v = function (e) {
          var t = i('FCP'),
            n = m(),
            r = u('paint', function (e) {
              'first-contentful-paint' === e.name &&
                e.startTime < n.timeStamp &&
                ((t.value = e.startTime),
                (t.isFinal = !0),
                t.entries.push(e),
                a())
            }),
            a = p(e, t, r)
        },
        g = function (e) {
          var t = i('FID'),
            n = m(),
            r = function (e) {
              e.startTime < n.timeStamp &&
                ((t.value = e.processingStart - e.startTime),
                t.entries.push(e),
                (t.isFinal = !0),
                o())
            },
            a = u('first-input', r),
            o = p(e, t, a)
          d(function () {
            a && (a.takeRecords().map(r), a.disconnect())
          }, !0),
            a ||
              (window.perfMetrics &&
                window.perfMetrics.onFirstInputDelay &&
                window.perfMetrics.onFirstInputDelay(function (e, r) {
                  r.timeStamp < n.timeStamp &&
                    ((t.value = e),
                    (t.isFinal = !0),
                    (t.entries = [
                      {
                        entryType: 'first-input',
                        name: r.type,
                        target: r.target,
                        cancelable: r.cancelable,
                        startTime: r.timeStamp,
                        processingStart: r.timeStamp + e,
                      },
                    ]),
                    o())
                }))
        },
        y = function () {
          return (
            a ||
              (a = new Promise(function (e) {
                return ['scroll', 'keydown', 'pointerdown'].map(function (t) {
                  addEventListener(t, e, { once: !0, passive: !0, capture: !0 })
                })
              })),
            a
          )
        },
        _ = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = i('LCP'),
            r = m(),
            a = function (e) {
              var t = e.startTime
              t < r.timeStamp
                ? ((n.value = t), n.entries.push(e))
                : (n.isFinal = !0),
                c()
            },
            o = u('largest-contentful-paint', a),
            c = p(e, n, o, t),
            s = function () {
              n.isFinal || (o && o.takeRecords().map(a), (n.isFinal = !0), c())
            }
          y().then(s), d(s, !0)
        },
        w = function (e) {
          var t,
            n = i('TTFB')
          ;(t = function () {
            try {
              var t =
                performance.getEntriesByType('navigation')[0] ||
                (function () {
                  var e = performance.timing,
                    t = { entryType: 'navigation', startTime: 0 }
                  for (var n in e)
                    'navigationStart' !== n &&
                      'toJSON' !== n &&
                      (t[n] = Math.max(e[n] - e.navigationStart, 0))
                  return t
                })()
              ;(n.value = n.delta = t.responseStart),
                (n.entries = [t]),
                (n.isFinal = !0),
                e(n)
            } catch (e) {}
          }),
            'complete' === document.readyState
              ? setTimeout(t, 0)
              : addEventListener('pageshow', t)
        }
    },
    yLiY: function (e, t, n) {
      'use strict'
      var r
      ;(t.__esModule = !0),
        (t.setConfig = function (e) {
          r = e
        }),
        (t.default = void 0)
      t.default = function () {
        return r
      }
    },
    zmvN: function (e, t, n) {
      'use strict'
      var r = n('lwsE'),
        a = n('W8MJ'),
        o = n('TqRt')
      ;(t.__esModule = !0), (t.default = t.looseToArray = void 0)
      var i = o(n('dZ6Y')),
        u = n('elyg'),
        c = o(n('fcRV')),
        s = o(n('Lab5')),
        l = n('/jkW'),
        f = n('hS4m'),
        d = n('3WeD'),
        p = n('gguc'),
        h = n('YTqd'),
        m = function (e) {
          return [].slice.call(e)
        }
      function v(e, t) {
        try {
          return document.createElement('link').relList.supports(e)
        } catch (n) {}
      }
      function g(e) {
        return (0, u.markLoadingError)(new Error('Error loading '.concat(e)))
      }
      t.looseToArray = m
      var y = v('preload') && !v('prefetch') ? 'preload' : 'prefetch',
        _ = v('preload') ? 'preload' : y
      document.createElement('script')
      function w(e) {
        if ('/' !== e[0])
          throw new Error(
            'Route name should start with a "/", got "'.concat(e, '"')
          )
        return '/' === e ? e : e.replace(/\/$/, '')
      }
      function S(e, t, n, r) {
        return new Promise(function (a, o) {
          ;(r = document.createElement('link')),
            n && (r.as = n),
            (r.rel = t),
            (r.crossOrigin = void 0),
            (r.onload = a),
            (r.onerror = o),
            (r.href = e),
            document.head.appendChild(r)
        })
      }
      var E = (function () {
        function e(t, n, a) {
          r(this, e),
            (this.initialPage = void 0),
            (this.buildId = void 0),
            (this.assetPrefix = void 0),
            (this.pageCache = void 0),
            (this.pageRegisterEvents = void 0),
            (this.loadingRoutes = void 0),
            (this.promisedBuildManifest = void 0),
            (this.promisedSsgManifest = void 0),
            (this.promisedDevPagesManifest = void 0),
            (this.initialPage = a),
            (this.buildId = t),
            (this.assetPrefix = n),
            (this.pageCache = {}),
            (this.pageRegisterEvents = (0, i.default)()),
            (this.loadingRoutes = { '/_app': !0 }),
            '/_error' !== a && (this.loadingRoutes[a] = !0),
            (this.promisedBuildManifest = new Promise(function (e) {
              window.__BUILD_MANIFEST
                ? e(window.__BUILD_MANIFEST)
                : (window.__BUILD_MANIFEST_CB = function () {
                    e(window.__BUILD_MANIFEST)
                  })
            })),
            (this.promisedSsgManifest = new Promise(function (e) {
              window.__SSG_MANIFEST
                ? e(window.__SSG_MANIFEST)
                : (window.__SSG_MANIFEST_CB = function () {
                    e(window.__SSG_MANIFEST)
                  })
            }))
        }
        return (
          a(e, [
            {
              key: 'getPageList',
              value: function () {
                return this.promisedBuildManifest.then(function (e) {
                  return e.sortedPages
                })
              },
            },
            {
              key: 'getDependencies',
              value: function (e) {
                var t = this
                return this.promisedBuildManifest.then(function (n) {
                  return n[e]
                    ? n[e].map(function (e) {
                        return ''
                          .concat(t.assetPrefix, '/_next/')
                          .concat(encodeURI(e))
                      })
                    : Promise.reject(g(e))
                })
              },
            },
            {
              key: 'getDataHref',
              value: function (e, t, n) {
                var r,
                  a = this,
                  o = (0, f.parseRelativeUrl)(e),
                  i = o.pathname,
                  m = o.searchParams,
                  v = o.search,
                  g = (0, d.searchParamsToUrlQuery)(m),
                  y = (0, f.parseRelativeUrl)(t).pathname,
                  _ = w(i),
                  S = function (e) {
                    var t = (0, s.default)(e, '.json')
                    return (0, u.addBasePath)(
                      '/_next/data/'
                        .concat(a.buildId)
                        .concat(t)
                        .concat(n ? '' : v)
                    )
                  },
                  E = (0, l.isDynamicRoute)(_)
                if (E) {
                  var P = (0, h.getRouteRegex)(_),
                    T = P.groups,
                    b = (0, p.getRouteMatcher)(P)(y) || g
                  ;(r = _),
                    Object.keys(T).every(function (e) {
                      var t = b[e] || '',
                        n = T[e],
                        a = n.repeat,
                        o = n.optional,
                        i = '['.concat(a ? '...' : '').concat(e, ']')
                      return (
                        o && (i = ''.concat(t ? '' : '/', '[').concat(i, ']')),
                        a && !Array.isArray(t) && (t = [t]),
                        (o || e in b) &&
                          (r =
                            r.replace(
                              i,
                              a ? t.map(c.default).join('/') : (0, c.default)(t)
                            ) || '/')
                      )
                    }) || (r = '')
                }
                return E ? r && S(r) : S(_)
              },
            },
            {
              key: 'prefetchData',
              value: function (e, t) {
                var n = this,
                  r = w((0, f.parseRelativeUrl)(e).pathname)
                return this.promisedSsgManifest.then(function (a, o) {
                  return (
                    a.has(r) &&
                    (o = n.getDataHref(e, t, !0)) &&
                    !document.querySelector(
                      'link[rel="'.concat(y, '"][href^="').concat(o, '"]')
                    ) &&
                    S(o, y, 'fetch').catch(function () {})
                  )
                })
              },
            },
            {
              key: 'loadPage',
              value: function (e) {
                var t = this
                return (
                  (e = w(e)),
                  new Promise(function (n, r) {
                    var a = t.pageCache[e]
                    if (a) 'error' in a ? r(a.error) : n(a)
                    else {
                      var o = function a(o) {
                        t.pageRegisterEvents.off(e, a),
                          delete t.loadingRoutes[e],
                          'error' in o ? r(o.error) : n(o)
                      }
                      if ((t.pageRegisterEvents.on(e, o), !t.loadingRoutes[e]))
                        (t.loadingRoutes[e] = !0),
                          t
                            .getDependencies(e)
                            .then(function (e) {
                              var t = []
                              return (
                                e.forEach(function (e) {
                                  e.endsWith('.js') &&
                                    !document.querySelector(
                                      'script[src^="'.concat(e, '"]')
                                    ) &&
                                    t.push(
                                      (function (e) {
                                        return new Promise(function (t, n) {
                                          var r = document.createElement(
                                            'script'
                                          )
                                          ;(r.crossOrigin = void 0),
                                            (r.src = e),
                                            (r.onload = t),
                                            (r.onerror = function () {
                                              return n(g(e))
                                            }),
                                            document.body.appendChild(r)
                                        })
                                      })(e)
                                    ),
                                    e.endsWith('.css') &&
                                      !document.querySelector(
                                        'link[rel="'
                                          .concat(_, '"][href^="')
                                          .concat(e, '"]')
                                      ) &&
                                      S(e, _, 'fetch').catch(function () {})
                                }),
                                Promise.all(t)
                              )
                            })
                            .catch(function (n) {
                              ;(t.pageCache[e] = { error: n }), o({ error: n })
                            })
                    }
                  })
                )
              },
            },
            {
              key: 'registerPage',
              value: function (e, t) {
                var n = this
                var r = e === this.initialPage
                ;('/_app' === e
                  ? Promise.resolve([])
                  : (r
                      ? Promise.resolve(
                          m(document.querySelectorAll('link[data-n-p]')).map(
                            function (e) {
                              return e.getAttribute('href')
                            }
                          )
                        )
                      : this.getDependencies(e).then(function (e) {
                          return e.filter(function (e) {
                            return e.endsWith('.css')
                          })
                        })
                    ).then(function (e) {
                      return Promise.all(
                        e.map(function (e) {
                          return (
                            (t = e),
                            fetch(t).then(function (e) {
                              if (!e.ok) throw g(t)
                              return e.text().then(function (e) {
                                return { href: t, text: e }
                              })
                            })
                          )
                          var t
                        })
                      ).catch(function (e) {
                        if (r)
                          return m(document.styleSheets)
                            .filter(function (e) {
                              return (
                                e.ownerNode &&
                                'LINK' === e.ownerNode.tagName &&
                                e.ownerNode.hasAttribute('data-n-p')
                              )
                            })
                            .map(function (e) {
                              return {
                                href: e.ownerNode.getAttribute('href'),
                                text: m(e.cssRules)
                                  .map(function (e) {
                                    return e.cssText
                                  })
                                  .join(''),
                              }
                            })
                        throw e
                      })
                    })
                ).then(
                  function (r) {
                    return (function (r) {
                      try {
                        var a = t(),
                          o = { page: a.default || a, mod: a, styleSheets: r }
                        ;(n.pageCache[e] = o), n.pageRegisterEvents.emit(e, o)
                      } catch (i) {
                        ;(n.pageCache[e] = { error: i }),
                          n.pageRegisterEvents.emit(e, { error: i })
                      }
                    })(r)
                  },
                  function (t) {
                    ;(n.pageCache[e] = { error: t }),
                      n.pageRegisterEvents.emit(e, { error: t })
                  }
                )
              },
            },
            {
              key: 'prefetch',
              value: function (e, t) {
                var n,
                  r,
                  a = this
                if (
                  (n = navigator.connection) &&
                  (n.saveData || /2g/.test(n.effectiveType))
                )
                  return Promise.resolve()
                if (t) r = e
                else;
                return Promise.all(
                  document.querySelector(
                    'link[rel="'.concat(y, '"][href^="').concat(r, '"]')
                  )
                    ? []
                    : [
                        r && S(r, y, r.endsWith('.css') ? 'fetch' : 'script'),
                        !t &&
                          this.getDependencies(e).then(function (e) {
                            return Promise.all(
                              e.map(function (e) {
                                return a.prefetch(e, !0)
                              })
                            )
                          }),
                      ]
                ).then(
                  function () {},
                  function () {}
                )
              },
            },
          ]),
          e
        )
      })()
      t.default = E
    },
  },
  [['BMP1', 0, 2, 1]],
])
