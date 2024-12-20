import { T as ensure_array_like, P as escape_html, v as pop, V as stringify, t as push, W as bind_props, Y as slot } from './index-DYLr4qAj.js';
import { p as path } from './path-ZqLufx6Z.js';
import { d as dataStore } from './store-CI2MmCxJ.js';
import { o as onDestroy } from './index-server-BX_gp4iS.js';
import { f as fallback } from './utils-p5k09QVL.js';
import { a as attr } from './attributes-Bu127xad.js';
import { C as CtaMessage } from './CtaMessage-DxVOSOyQ.js';
import { i as isEqual, g as get$1, c as cloneDeep } from './index-B22U-E-j.js';
import { h as html } from './html-FW6Ia4bL.js';
import { P as Process } from './Process-usEIR88F.js';
import { T as Team } from './Team-CGPBRIUX.js';
import './index3-CsTpgeW4.js';

const depsAreEqual = (deps1, deps2) => {
  return isEqual(deps1, deps2)
};

const getDepNames = (deps) => {
  return Object.keys(deps || {})
};

const getUpdatedDeps = (depNames, currentData) => {
  const updatedDeps = {};
  depNames.forEach((depName) => {
    updatedDeps[depName] = currentData[depName];
  });
  return updatedDeps
};

const createSubscription = () => {
  const subscribers = {};

  const memoDependency = (target, dep) => {
    const { watcherName, fn } = target;
    const { prop, value } = dep;

    if (!subscribers[watcherName]) {
      subscribers[watcherName] = {
        deps: {},
        fn,
      };
    }
    subscribers[watcherName].deps[prop] = value;
  };

  return {
    subscribers,
    subscribe(target, dep) {
      if (target) {
        memoDependency(target, dep);
      }
    },
    notify(data, prop) {
      Object.entries(subscribers).forEach(([watchName, { deps, fn }]) => {
        const depNames = getDepNames(deps);

        if (depNames.includes(prop)) {
          const updatedDeps = getUpdatedDeps(depNames, data);
          if (!depsAreEqual(deps, updatedDeps)) {
            subscribers[watchName].deps = updatedDeps;
            fn();
          }
        }
      });
    },
  }
};

const createTargetWatcher = () => {
  let target = null;

  return {
    targetWatcher(watcherName, fn) {
      target = {
        watcherName,
        fn,
      };
      target.fn();
      target = null;
    },
    getTarget() {
      return target
    },
  }
};

function simplyReactive(entities, options) {
  const data = get$1(entities, 'data', {});
  const watch = get$1(entities, 'watch', {});
  const methods = get$1(entities, 'methods', {});
  const onChange = get$1(options, 'onChange', () => {});

  const { subscribe, notify, subscribers } = createSubscription();
  const { targetWatcher, getTarget } = createTargetWatcher();

  let _data;
  const _methods = {};
  const getContext = () => ({
    data: _data,
    methods: _methods,
  });

  let callingMethod = false;
  const methodWithFlags = (fn) => (...args) => {
    callingMethod = true;
    const result = fn(...args);
    callingMethod = false;
    return result
  };

  // init methods before data, as methods may be used in data
  Object.entries(methods).forEach(([methodName, methodItem]) => {
    _methods[methodName] = methodWithFlags((...args) =>
      methodItem(getContext(), ...args)
    );
    Object.defineProperty(_methods[methodName], 'name', { value: methodName });
  });

  _data = new Proxy(cloneDeep(data), {
    get(target, prop) {
      if (getTarget() && !callingMethod) {
        subscribe(getTarget(), { prop, value: target[prop] });
      }
      return Reflect.get(...arguments)
    },
    set(target, prop, value) {
      // if value is the same, do nothing
      if (target[prop] === value) {
        return true
      }

      Reflect.set(...arguments);

      if (!getTarget()) {
        onChange && onChange(prop, value);
        notify(_data, prop);
      }

      return true
    },
  });

  Object.entries(watch).forEach(([watchName, watchItem]) => {
    targetWatcher(watchName, () => {
      watchItem(getContext());
    });
  });

  const output = [_data, _methods];
  output._internal = {
    _getSubscribers() {
      return subscribers
    },
  };

  return output
}

function CircleProgress($$payload, $$props) {
  push();
  let text = fallback($$props["text"], "Progress");
  let percent = fallback($$props["percent"], 0);
  let displayedPercent = 0;
  let circumference = 0;
  let strokeDashoffset = 0;
  $$payload.out += `<div class="circular svelte-gciiz0"><svg width="100" height="100" class="svelte-gciiz0"><circle class="circle-bg svelte-gciiz0" cx="50" cy="50" r="40"></circle><circle class="circle-progress svelte-gciiz0" cx="50" cy="50" r="40"${attr("style", `stroke-dasharray: ${stringify(circumference)}; stroke-dashoffset: ${stringify(strokeDashoffset)};`)}></circle></svg> <div class="numb svelte-gciiz0"><div class="numb-title svelte-gciiz0">${escape_html(text)}</div> <div>${escape_html(displayedPercent)}%</div></div></div>`;
  bind_props($$props, { text, percent });
  pop();
}
function About($$payload, $$props) {
  push();
  let aboutData = void 0;
  let teamData = void 0;
  const unsubscribe = dataStore.subscribe((data) => {
    if (data) {
      aboutData = data.aboutData;
      teamData = data.teamData;
    }
  });
  onDestroy(() => {
    unsubscribe();
  });
  if (aboutData && teamData) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(aboutData.circleBars);
    const each_array_1 = ensure_array_like(aboutData.aboutList);
    $$payload.out += `<section class="about-section fix section-padding"><div class="container"><div class="about-wrapper"><div class="row"><div class="col-lg-6"><div class="about-image-items"><div class="border-shape"><img src="/img/about/border-shape.png" alt="shape-img"></div> <div class="about-image wow fadeInLeft bg-cover" data-wow-delay=".3s"${attr("style", `background-image: url('${aboutData.imgLarge}');`)}><div class="about-image-2 wow fadeInUp" data-wow-delay=".5s"><img class="w-[269px] h-[277px] object-cover"${attr("src", `${aboutData.img}`)} alt="about-img"></div></div></div></div> <div class="col-lg-6 mt-lg-0 mt-5"><div class="about-content"><div class="section-title"><span class="wow fadeInUp">About Company</span> <h2 class="title-anim">${escape_html(aboutData.title)}</h2></div> <p class="mt-md-0 wow fadeInUp mt-4" data-wow-delay=".5s">${escape_html(aboutData.description)}</p> <div class="circle-progress-bar-wrapper"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let circleBar = each_array[$$index];
      $$payload.out += `<div class="single-circle-bar wow fadeInUp" data-wow-delay=".3s">`;
      CircleProgress($$payload, { text: "", percent: circleBar.percent });
      $$payload.out += `<!----> <div class="content"><h6 class="circle-bar-title">${escape_html(circleBar?.title)}</h6></div></div>`;
    }
    $$payload.out += `<!--]--></div> <ul class="about-list wow fadeInUp" data-wow-delay=".5s"><!--[-->`;
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let item = each_array_1[$$index_1];
      $$payload.out += `<li><i class="far fa-check me-2"></i> ${escape_html(item)}</li>`;
    }
    $$payload.out += `<!--]--></ul> <div class="about-author"><div class="about-button wow fadeInUp" data-wow-delay=".8s"><a${attr("href", path.about.base())} class="theme-btn"><span>Learn More Us <i class="fas fa-chevron-right"></i></span></a></div></div></div></div></div></div></div></section>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function Dot($$payload, $$props) {
  let active = fallback($$props["active"], false);
  $$payload.out += `<button${attr("class", `sc-carousel-button sc-carousel-dot__dot svelte-yu7247 ${stringify([active ? "sc-carousel-dot__dot_active" : ""].filter(Boolean).join(" "))}`)}></button>`;
  bind_props($$props, { active });
}
function Dots($$payload, $$props) {
  push();
  let pagesCount = fallback($$props["pagesCount"], 1);
  let currentPageIndex = fallback($$props["currentPageIndex"], 0);
  const each_array = ensure_array_like(Array(pagesCount));
  $$payload.out += `<div class="sc-carousel-dots__container svelte-1oj5bge"><!--[-->`;
  for (let pageIndex = 0, $$length = each_array.length; pageIndex < $$length; pageIndex++) {
    each_array[pageIndex];
    $$payload.out += `<div class="sc-carousel-dots__dot-container svelte-1oj5bge">`;
    Dot($$payload, { active: currentPageIndex === pageIndex });
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { pagesCount, currentPageIndex });
  pop();
}
const PREV = "prev";
const NEXT = "next";
function Arrow($$payload, $$props) {
  let direction = fallback($$props["direction"], NEXT);
  let disabled = fallback($$props["disabled"], false);
  $$payload.out += `<button${attr("class", `sc-carousel-button sc-carousel-arrow__circle svelte-9ztt4p ${stringify([
    disabled ? "sc-carousel-arrow__circle_disabled" : ""
  ].filter(Boolean).join(" "))}`)}><i${attr("class", `sc-carousel-arrow__arrow svelte-9ztt4p ${stringify([
    direction === NEXT ? "sc-carousel-arrow__arrow-next" : "",
    direction === PREV ? "sc-carousel-arrow__arrow-prev" : ""
  ].filter(Boolean).join(" "))}`)}></i></button>`;
  bind_props($$props, { direction, disabled });
}
function Progress($$payload, $$props) {
  let width;
  const MAX_PERCENT = 100;
  let value = fallback($$props["value"], 0);
  width = Math.min(Math.max(value * MAX_PERCENT, 0), MAX_PERCENT);
  $$payload.out += `<div class="sc-carousel-progress__indicator svelte-nuyenl"${attr("style", ` width: ${stringify(width)}%; `)}></div>`;
  bind_props($$props, { value });
}
function getValueInRange(min, value, max) {
  return Math.max(min, Math.min(value, max));
}
function _getCurrentPageIndexByCurrentParticleIndexInfinite({
  currentParticleIndex,
  particlesCount,
  clonesCountHead,
  clonesCountTotal,
  particlesToScroll
}) {
  if (currentParticleIndex === particlesCount - clonesCountHead) return 0;
  if (currentParticleIndex === 0) return _getPagesCountByParticlesCountInfinite({
    particlesCountWithoutClones: particlesCount - clonesCountTotal,
    particlesToScroll
  }) - 1;
  return Math.floor((currentParticleIndex - clonesCountHead) / particlesToScroll);
}
function _getCurrentPageIndexByCurrentParticleIndexLimited({
  currentParticleIndex,
  particlesToScroll
}) {
  return Math.ceil(currentParticleIndex / particlesToScroll);
}
function getCurrentPageIndexByCurrentParticleIndex({
  currentParticleIndex,
  particlesCount,
  clonesCountHead,
  clonesCountTotal,
  infinite,
  particlesToScroll
}) {
  return infinite ? _getCurrentPageIndexByCurrentParticleIndexInfinite({
    currentParticleIndex,
    particlesCount,
    clonesCountHead,
    clonesCountTotal,
    particlesToScroll
  }) : _getCurrentPageIndexByCurrentParticleIndexLimited({
    currentParticleIndex,
    particlesToScroll
  });
}
function _getPagesCountByParticlesCountInfinite({
  particlesCountWithoutClones,
  particlesToScroll
}) {
  return Math.ceil(particlesCountWithoutClones / particlesToScroll);
}
function _getPagesCountByParticlesCountLimited({
  particlesCountWithoutClones,
  particlesToScroll,
  particlesToShow
}) {
  const partialPageSize = getPartialPageSize({
    particlesCountWithoutClones,
    particlesToScroll,
    particlesToShow
  });
  return Math.ceil(particlesCountWithoutClones / particlesToScroll) - partialPageSize;
}
function getPagesCountByParticlesCount({
  infinite,
  particlesCountWithoutClones,
  particlesToScroll,
  particlesToShow
}) {
  return infinite ? _getPagesCountByParticlesCountInfinite({
    particlesCountWithoutClones,
    particlesToScroll
  }) : _getPagesCountByParticlesCountLimited({
    particlesCountWithoutClones,
    particlesToScroll,
    particlesToShow
  });
}
function _getParticleIndexByPageIndexInfinite({
  pageIndex,
  clonesCountHead,
  clonesCountTail,
  particlesToScroll,
  particlesCount
}) {
  return getValueInRange(
    0,
    Math.min(clonesCountHead + pageIndex * particlesToScroll, particlesCount - clonesCountTail),
    particlesCount - 1
  );
}
function _getParticleIndexByPageIndexLimited({
  pageIndex,
  particlesToScroll,
  particlesCount,
  particlesToShow
}) {
  return getValueInRange(
    0,
    Math.min(pageIndex * particlesToScroll, particlesCount - particlesToShow),
    particlesCount - 1
  );
}
function getParticleIndexByPageIndex({
  infinite,
  pageIndex,
  clonesCountHead,
  clonesCountTail,
  particlesToScroll,
  particlesCount,
  particlesToShow
}) {
  return infinite ? _getParticleIndexByPageIndexInfinite({
    pageIndex,
    clonesCountHead,
    clonesCountTail,
    particlesToScroll,
    particlesCount
  }) : _getParticleIndexByPageIndexLimited({
    pageIndex,
    particlesToScroll,
    particlesCount,
    particlesToShow
  });
}
function applyParticleSizes({
  particlesContainerChildren,
  particleWidth
}) {
  for (let particleIndex = 0; particleIndex < particlesContainerChildren.length; particleIndex++) {
    particlesContainerChildren[particleIndex].style.minWidth = `${particleWidth}px`;
    particlesContainerChildren[particleIndex].style.maxWidth = `${particleWidth}px`;
  }
}
function getPartialPageSize({
  particlesToScroll,
  particlesToShow,
  particlesCountWithoutClones
}) {
  const overlap = particlesToScroll - particlesToShow;
  let particlesCount = particlesToShow;
  while (true) {
    const diff = particlesCountWithoutClones - particlesCount - overlap;
    if (diff < particlesToShow) {
      return Math.max(diff, 0);
    }
    particlesCount += particlesToShow + overlap;
  }
}
function createResizeObserver(onResize) {
  return new ResizeObserver((entries) => {
    onResize({
      width: entries[0].contentRect.width
    });
  });
}
function getClonesCount({
  infinite,
  particlesToShow,
  partialPageSize
}) {
  const clonesCount = infinite ? {
    // need to round with ceil as particlesToShow, particlesToShow can be floating (e.g. 1.5, 3.75)
    head: Math.ceil(partialPageSize || particlesToShow),
    tail: Math.ceil(particlesToShow)
  } : {
    head: 0,
    tail: 0
  };
  return {
    ...clonesCount,
    total: clonesCount.head + clonesCount.tail
  };
}
const get = (object, fieldName, defaultValue) => {
  if (object && object.hasOwnProperty(fieldName)) {
    return object[fieldName];
  }
  return defaultValue;
};
const switcher = (description) => (key) => {
  description[key] && description[key]();
};
function getIndexesOfParticlesWithoutClonesInPage({
  pageIndex,
  particlesToShow,
  particlesToScroll,
  particlesCount
}) {
  const overlap = pageIndex === 0 ? 0 : particlesToShow - particlesToScroll;
  const from = pageIndex * particlesToShow - pageIndex * overlap;
  const to = from + Math.max(particlesToShow, particlesToScroll) - 1;
  const indexes = [];
  for (let i = from; i <= Math.min(particlesCount - 1, to); i++) {
    indexes.push(i);
  }
  return indexes;
}
function getAdjacentIndexes({
  infinite,
  pageIndex,
  pagesCount,
  particlesCount,
  particlesToShow,
  particlesToScroll
}) {
  const _pageIndex = getValueInRange(0, pageIndex, pagesCount - 1);
  let rangeStart = _pageIndex - 1;
  let rangeEnd = _pageIndex + 1;
  rangeStart = infinite ? rangeStart < 0 ? pagesCount - 1 : rangeStart : Math.max(0, rangeStart);
  rangeEnd = infinite ? rangeEnd > pagesCount - 1 ? 0 : rangeEnd : Math.min(pagesCount - 1, rangeEnd);
  const pageIndexes = [.../* @__PURE__ */ new Set([
    rangeStart,
    _pageIndex,
    rangeEnd,
    // because of these values outputs for infinite/non-infinites are the same
    0,
    // needed to clone first page particles
    pagesCount - 1
    // needed to clone last page particles
  ])].sort((a, b) => a - b);
  const particleIndexes = pageIndexes.flatMap(
    (pageIndex2) => getIndexesOfParticlesWithoutClonesInPage({
      pageIndex: pageIndex2,
      particlesToShow,
      particlesToScroll,
      particlesCount
    })
  );
  return {
    pageIndexes,
    particleIndexes: [...new Set(particleIndexes)].sort((a, b) => a - b)
  };
}
const setIntervalImmediate = (fn, ms) => {
  fn();
  return setInterval(fn, ms);
};
const STEP_MS = 35;
const MAX_VALUE = 1;
class ProgressManager {
  constructor({ onProgressValueChange }) {
    this._onProgressValueChange = onProgressValueChange;
    this._autoplayDuration;
    this._onProgressValueChange;
    this._interval;
    this._paused = false;
  }
  setAutoplayDuration(autoplayDuration) {
    this._autoplayDuration = autoplayDuration;
  }
  start(onFinish) {
    return new Promise((resolve) => {
      this.reset();
      const stepMs = Math.min(STEP_MS, Math.max(this._autoplayDuration, 1));
      let progress = -stepMs;
      this._interval = setIntervalImmediate(async () => {
        if (this._paused) {
          return;
        }
        progress += stepMs;
        const value = progress / this._autoplayDuration;
        this._onProgressValueChange(value);
        if (value > MAX_VALUE) {
          this.reset();
          await onFinish();
          resolve();
        }
      }, stepMs);
    });
  }
  pause() {
    this._paused = true;
  }
  resume() {
    this._paused = false;
  }
  reset() {
    clearInterval(this._interval);
    this._onProgressValueChange(MAX_VALUE);
  }
}
function createCarousel(onChange) {
  const progressManager = new ProgressManager({
    onProgressValueChange: (value) => {
      onChange("progressValue", 1 - value);
    }
  });
  const reactive = simplyReactive(
    {
      data: {
        particlesCountWithoutClones: 0,
        particlesToShow: 1,
        // normalized
        particlesToShowInit: 1,
        // initial value
        particlesToScroll: 1,
        // normalized
        particlesToScrollInit: 1,
        // initial value
        particlesCount: 1,
        currentParticleIndex: 1,
        infinite: false,
        autoplayDuration: 1e3,
        clonesCountHead: 0,
        clonesCountTail: 0,
        clonesCountTotal: 0,
        partialPageSize: 1,
        currentPageIndex: 1,
        pagesCount: 1,
        pauseOnFocus: false,
        focused: false,
        autoplay: false,
        autoplayDirection: "next",
        disabled: false,
        // disable page change while animation is in progress
        durationMsInit: 1e3,
        durationMs: 1e3,
        offset: 0,
        particleWidth: 0,
        loaded: []
      },
      watch: {
        setLoaded({ data: data2 }) {
          data2.loaded = getAdjacentIndexes({
            infinite: data2.infinite,
            pageIndex: data2.currentPageIndex,
            pagesCount: data2.pagesCount,
            particlesCount: data2.particlesCountWithoutClones,
            particlesToShow: data2.particlesToShow,
            particlesToScroll: data2.particlesToScroll
          }).particleIndexes;
        },
        setCurrentPageIndex({ data: data2 }) {
          data2.currentPageIndex = getCurrentPageIndexByCurrentParticleIndex({
            currentParticleIndex: data2.currentParticleIndex,
            particlesCount: data2.particlesCount,
            clonesCountHead: data2.clonesCountHead,
            clonesCountTotal: data2.clonesCountTotal,
            infinite: data2.infinite,
            particlesToScroll: data2.particlesToScroll
          });
        },
        setPartialPageSize({ data: data2 }) {
          data2.partialPageSize = getPartialPageSize({
            particlesToScroll: data2.particlesToScroll,
            particlesToShow: data2.particlesToShow,
            particlesCountWithoutClones: data2.particlesCountWithoutClones
          });
        },
        setClonesCount({ data: data2 }) {
          const { head, tail } = getClonesCount({
            infinite: data2.infinite,
            particlesToShow: data2.particlesToShow,
            partialPageSize: data2.partialPageSize
          });
          data2.clonesCountHead = head;
          data2.clonesCountTail = tail;
          data2.clonesCountTotal = head + tail;
        },
        setProgressManagerAutoplayDuration({ data: data2 }) {
          progressManager.setAutoplayDuration(data2.autoplayDuration);
        },
        toggleProgressManager({ data: { pauseOnFocus, focused } }) {
          if (pauseOnFocus) {
            if (focused) {
              progressManager.pause();
            } else {
              progressManager.resume();
            }
          }
        },
        initDuration({ data: data2 }) {
          data2.durationMs = data2.durationMsInit;
        },
        applyAutoplay({ data: data2, methods: { _applyAutoplayIfNeeded } }) {
          data2.autoplay && _applyAutoplayIfNeeded(data2.autoplay);
        },
        setPagesCount({ data: data2 }) {
          data2.pagesCount = getPagesCountByParticlesCount({
            infinite: data2.infinite,
            particlesCountWithoutClones: data2.particlesCountWithoutClones,
            particlesToScroll: data2.particlesToScroll,
            particlesToShow: data2.particlesToShow
          });
        },
        setParticlesToShow({ data: data2 }) {
          data2.particlesToShow = getValueInRange(
            1,
            data2.particlesToShowInit,
            data2.particlesCountWithoutClones
          );
        },
        setParticlesToScroll({ data: data2 }) {
          data2.particlesToScroll = getValueInRange(
            1,
            data2.particlesToScrollInit,
            data2.particlesCountWithoutClones
          );
        }
      },
      methods: {
        _prev({ data: data2 }) {
          data2.currentParticleIndex = getParticleIndexByPageIndex({
            infinite: data2.infinite,
            pageIndex: data2.currentPageIndex - 1,
            clonesCountHead: data2.clonesCountHead,
            clonesCountTail: data2.clonesCountTail,
            particlesToScroll: data2.particlesToScroll,
            particlesCount: data2.particlesCount,
            particlesToShow: data2.particlesToShow
          });
        },
        _next({ data: data2 }) {
          data2.currentParticleIndex = getParticleIndexByPageIndex({
            infinite: data2.infinite,
            pageIndex: data2.currentPageIndex + 1,
            clonesCountHead: data2.clonesCountHead,
            clonesCountTail: data2.clonesCountTail,
            particlesToScroll: data2.particlesToScroll,
            particlesCount: data2.particlesCount,
            particlesToShow: data2.particlesToShow
          });
        },
        _moveToParticle({ data: data2 }, particleIndex) {
          data2.currentParticleIndex = getValueInRange(
            0,
            particleIndex,
            data2.particlesCount - 1
          );
        },
        toggleFocused({ data: data2 }) {
          data2.focused = !data2.focused;
        },
        async _applyAutoplayIfNeeded({ data: data2, methods: methods2 }) {
          if (!data2.infinite && (data2.autoplayDirection === NEXT && data2.currentParticleIndex === data2.particlesCount - 1 || data2.autoplayDirection === PREV && data2.currentParticleIndex === 0)) {
            progressManager.reset();
            return;
          }
          if (data2.autoplay) {
            const onFinish = () => switcher({
              [NEXT]: async () => methods2.showNextPage(),
              [PREV]: async () => methods2.showPrevPage()
            })(data2.autoplayDirection);
            await progressManager.start(onFinish);
          }
        },
        // makes delayed jump to 1st or last element
        async _jumpIfNeeded({ data: data2, methods: methods2 }) {
          let jumped = false;
          if (data2.infinite) {
            if (data2.currentParticleIndex === 0) {
              await methods2.showParticle(
                data2.particlesCount - data2.clonesCountTotal,
                {
                  animated: false
                }
              );
              jumped = true;
            } else if (data2.currentParticleIndex === data2.particlesCount - data2.clonesCountTail) {
              await methods2.showParticle(data2.clonesCountHead, {
                animated: false
              });
              jumped = true;
            }
          }
          return jumped;
        },
        async changePage({ data: data2, methods: methods2 }, updateStoreFn, options) {
          progressManager.reset();
          if (data2.disabled) return;
          data2.disabled = true;
          updateStoreFn();
          await methods2.offsetPage({ animated: get(options, "animated", true) });
          data2.disabled = false;
          const jumped = await methods2._jumpIfNeeded();
          !jumped && methods2._applyAutoplayIfNeeded();
        },
        async showNextPage({ data: data2, methods: methods2 }, options) {
          if (data2.disabled) return;
          await methods2.changePage(methods2._next, options);
        },
        async showPrevPage({ data: data2, methods: methods2 }, options) {
          if (data2.disabled) return;
          await methods2.changePage(methods2._prev, options);
        },
        async showParticle({ methods: methods2 }, particleIndex, options) {
          await methods2.changePage(
            () => methods2._moveToParticle(particleIndex),
            options
          );
        },
        _getParticleIndexByPageIndex({ data: data2 }, pageIndex) {
          return getParticleIndexByPageIndex({
            infinite: data2.infinite,
            pageIndex,
            clonesCountHead: data2.clonesCountHead,
            clonesCountTail: data2.clonesCountTail,
            particlesToScroll: data2.particlesToScroll,
            particlesCount: data2.particlesCount,
            particlesToShow: data2.particlesToShow
          });
        },
        async showPage({ methods: methods2 }, pageIndex, options) {
          const particleIndex = methods2._getParticleIndexByPageIndex(pageIndex);
          await methods2.showParticle(particleIndex, options);
        },
        offsetPage({ data: data2 }, options) {
          const animated = get(options, "animated", true);
          return new Promise((resolve) => {
            data2.durationMs = animated ? data2.durationMsInit : 0;
            data2.offset = -data2.currentParticleIndex * data2.particleWidth;
            setTimeout(() => {
              resolve();
            }, data2.durationMs);
          });
        }
      }
    },
    {
      onChange
    }
  );
  const [data, methods] = reactive;
  return [{ data, progressManager }, methods, reactive._internal];
}
function Carousel($$payload, $$props) {
  push();
  let loaded = [];
  let currentPageIndex;
  let progressValue;
  let offset = 0;
  let durationMs = 0;
  let pagesCount = 1;
  const tmp = createCarousel((key, value) => {
    switcher({
      "currentPageIndex": () => currentPageIndex = value,
      "progressValue": () => progressValue = value,
      "offset": () => offset = value,
      "durationMs": () => durationMs = value,
      "pagesCount": () => pagesCount = value,
      "loaded": () => loaded = value
    })(key);
  }), data = tmp[0].data, progressManager = tmp[0].progressManager, methods = tmp[1];
  let timingFunction = fallback($$props["timingFunction"], "ease-in-out");
  let arrows = fallback($$props["arrows"], true);
  let infinite = fallback($$props["infinite"], true);
  let initialPageIndex = fallback($$props["initialPageIndex"], 0);
  let duration = fallback($$props["duration"], 500);
  let autoplay = fallback($$props["autoplay"], false);
  let autoplayDuration = fallback($$props["autoplayDuration"], 3e3);
  let autoplayDirection = fallback($$props["autoplayDirection"], NEXT);
  let pauseOnFocus = fallback($$props["pauseOnFocus"], false);
  let autoplayProgressVisible = fallback($$props["autoplayProgressVisible"], false);
  let dots = fallback($$props["dots"], true);
  let swiping = fallback($$props["swiping"], true);
  let particlesToShow = fallback($$props["particlesToShow"], 1);
  let particlesToScroll = fallback($$props["particlesToScroll"], 1);
  async function goTo(pageIndex, options) {
    const animated = get(options, "animated", true);
    if (typeof pageIndex !== "number") {
      throw new Error("pageIndex should be a number");
    }
    await methods.showPage(pageIndex, { animated });
  }
  async function goToPrev(options) {
    const animated = get(options, "animated", true);
    await methods.showPrevPage({ animated });
  }
  async function goToNext(options) {
    const animated = get(options, "animated", true);
    await methods.showNextPage({ animated });
  }
  let pageWindowWidth = 0;
  let particlesContainer;
  const pageWindowElementResizeObserver = createResizeObserver(({ width }) => {
    pageWindowWidth = width;
    data.particleWidth = pageWindowWidth / data.particlesToShow;
    applyParticleSizes({
      particlesContainerChildren: particlesContainer.children,
      particleWidth: data.particleWidth
    });
    methods.offsetPage({ animated: false });
  });
  onDestroy(() => {
    pageWindowElementResizeObserver.disconnect();
    progressManager.reset();
  });
  async function handlePageChange(pageIndex) {
    await methods.showPage(pageIndex, { animated: true });
  }
  {
    data.infinite = infinite;
  }
  {
    data.durationMsInit = duration;
  }
  {
    data.autoplay = autoplay;
  }
  {
    data.autoplayDuration = autoplayDuration;
  }
  {
    data.autoplayDirection = autoplayDirection;
  }
  {
    data.pauseOnFocus = pauseOnFocus;
  }
  {
    data.particlesToShowInit = particlesToShow;
  }
  {
    data.particlesToScrollInit = particlesToScroll;
  }
  $$payload.out += `<div class="sc-carousel__carousel-container svelte-uwo0yk"><div class="sc-carousel__content-container svelte-uwo0yk">`;
  if (arrows) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "prev", { showPrevPage: methods.showPrevPage }, () => {
      $$payload.out += `<div class="sc-carousel__arrow-container svelte-uwo0yk">`;
      Arrow($$payload, {
        direction: "prev",
        disabled: !infinite && currentPageIndex === 0
      });
      $$payload.out += `<!----></div>`;
    });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="sc-carousel__pages-window svelte-uwo0yk"><div class="sc-carousel__pages-container svelte-uwo0yk"${attr("style", ` transform: translateX(${stringify(offset)}px); transition-duration: ${stringify(durationMs)}ms; transition-timing-function: ${stringify(timingFunction)}; `)}><!---->`;
  slot($$payload, $$props, "default", { loaded, currentPageIndex }, null);
  $$payload.out += `<!----></div> `;
  if (autoplayProgressVisible) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="sc-carousel-progress__container svelte-uwo0yk">`;
    Progress($$payload, { value: progressValue });
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> `;
  if (arrows) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "next", { showNextPage: methods.showNextPage }, () => {
      $$payload.out += `<div class="sc-carousel__arrow-container svelte-uwo0yk">`;
      Arrow($$payload, {
        direction: "next",
        disabled: !infinite && currentPageIndex === pagesCount - 1
      });
      $$payload.out += `<!----></div>`;
    });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> `;
  if (dots) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<!---->`;
    slot(
      $$payload,
      $$props,
      "dots",
      {
        currentPageIndex,
        pagesCount,
        showPage: handlePageChange
      },
      () => {
        Dots($$payload, { pagesCount, currentPageIndex });
      }
    );
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, {
    timingFunction,
    arrows,
    infinite,
    initialPageIndex,
    duration,
    autoplay,
    autoplayDuration,
    autoplayDirection,
    pauseOnFocus,
    autoplayProgressVisible,
    dots,
    swiping,
    particlesToShow,
    particlesToScroll,
    goTo,
    goToPrev,
    goToNext
  });
  pop();
}
function Hero($$payload, $$props) {
  push();
  let heroData = void 0;
  const unSubscribe = dataStore.subscribe((data) => {
    heroData = data.heroData;
  });
  onDestroy(() => {
    unSubscribe();
  });
  $$payload.out += `<section class="hero-section hero-1"><div class="swiper-dot"><div class="dot"></div></div> <div class="swiper hero-slider">`;
  Carousel($$payload, {
    arrows: false,
    autoplay: true,
    autoplayDuration: 4e3,
    children: ($$payload2) => {
      const each_array = ensure_array_like(heroData?.slides || []);
      $$payload2.out += `<!--[-->`;
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let slide = each_array[$$index];
        $$payload2.out += `<div class="swiper-slide"><div class="shape-image" data-animation="fadeInLeft" data-delay="2.1s"><img src="/img/hero/object1.png" alt="shape-img"></div> <div class="shape-image-2 fadeInRight animated" data-animation="fadeInRight" data-delay="2.3s"><img src="/img/hero/right-shape.png" alt="shape-img"></div> <div class="hero-image bg-cover"${attr("style", `background-image: url('${slide.background}')`)}></div> <div class="container"><div class="row g-4"><div class="col-lg-8"><div class="hero-content"><h6 data-animation="slideInRight" data-duration="2s" data-delay=".3s">${escape_html(slide.tag)}</h6> <h1 data-animation="slideInRight" data-duration="2s" data-delay=".5s">${html(slide.title)}</h1> <p data-animation="slideInRight" data-duration="2s" data-delay=".7s">${html(slide.description)}</p></div></div></div></div></div>`;
      }
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></section>`;
  pop();
}
function Service($$payload, $$props) {
  push();
  let serviceData = void 0;
  const unsubscribe = dataStore.subscribe((data) => {
    if (data) {
      serviceData = data.serviceData;
    }
  });
  onDestroy(() => {
    unsubscribe();
  });
  if (serviceData) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(serviceData.services);
    $$payload.out += `<section class="service-section fix section-padding pt-0"><div class="container"><div class="section-title text-center"><span class="wow fadeInUp">${escape_html(serviceData.title)}</span> <h2 class="title-anim">${html(serviceData.heading)}</h2></div></div> <div class="service-wrapper"><div class="flex flex-wrap gap-2 justify-evenly"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let service = each_array[$$index];
      $$payload.out += `<div class="wow fadeInUp max-w-[360px]" data-wow-delay=".2s"><div class="service-card-items"><h3><a href="service-details.html" class="svelte-1qzkm0r">${escape_html(service.title)}</a></h3> <p class="h-[120px]">${escape_html(service.description)}</p> <div class="service-thumb"><img${attr("src", service.image)} alt="img"></div> <a${attr("href", service.link)} class="link-btn svelte-1qzkm0r"><span>read more</span> <i class="fas fa-chevron-right"></i></a></div></div>`;
    }
    $$payload.out += `<!--]--></div></div></section>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function Testimonial($$payload, $$props) {
  push();
  let testimonialData = {};
  dataStore.subscribe((data) => {
    testimonialData = data.testimonialData;
  });
  $$payload.out += `<section class="testimonial-section section-padding"><div class="container"><div class="section-title text-center"><span class="wow fadeInUp">${escape_html(testimonialData.title)}</span> <h2 class="title-anim">${html(testimonialData.heading)}</h2></div> <div>`;
  Carousel($$payload, {
    arrows: false,
    autoplay: true,
    autoplayDuration: 3e3,
    children: ($$payload2) => {
      const each_array = ensure_array_like(testimonialData.users);
      $$payload2.out += `<!--[-->`;
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let user = each_array[$$index];
        $$payload2.out += `<div class="testimonial-card-items"><div class="author-items"><div class="author-image bg-cover" style="background-image: url('/img/testimonial/01.png');"></div> <div class="author-content"><h5>${escape_html(user.name)}</h5> <span>${escape_html(user.job)}</span></div></div> <p>${escape_html(user.text)}</p> <ul><li>${escape_html(user.date)}</li></ul></div>`;
      }
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div></section>`;
  pop();
}
function Banner($$payload) {
  $$payload.out += `<div><div class="cta-banner-section section-padding bg-cover" style="background-image: url('/img/background-move.jpg');"><div class="container"><div class="cta-banner-wrapper section-padding pt-0"><div class="video-box"><a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" class="video-buttton ripple video-popup"><i class="fas fa-play"></i></a></div></div></div></div> <section class="feature-icon-box-area bg-[#16171a]"><div class="container"><div class="feature-icon-box-wrapper"><div class="row g-4"><div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s"><div class="icon-box-items"><div class="icon"><i class="flaticon-passport-5"></i></div> <div class="content"><h3>Quy Trình Xin Visa</h3> <p>Hỗ trợ toàn diện từ khi bắt đầu cho đến khi bạn nhận được visa.</p></div></div></div> <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s"><div class="icon-box-items active"><div class="icon"><i class="flaticon-visa-2"></i></div> <div class="content"><h3>Tỷ Lệ Phê Duyệt Visa 99%</h3> <p>Tỷ lệ phê duyệt visa cao giúp bạn an tâm trong hành trình của mình.</p></div></div></div> <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s"><div class="icon-box-items"><div class="icon"><i class="flaticon-immigration-law"></i></div> <div class="content"><h3>Định Cư Toàn Cầu</h3> <p>Hỗ trợ định cư ở các quốc gia phát triển và trở thành công dân toàn cầu.</p></div></div></div></div></div></div></section></div>`;
}
function Brand($$payload) {
  const arr = Array.from({ length: 13 }, (_, i) => i + 1);
  const each_array = ensure_array_like(arr);
  $$payload.out += `<div class="brand-section fix section-padding pt-0"><div class="container"><div class="brand-wrapper"><h6 class="wow fadeInUp text-center" data-wow-delay=".3s">1K+ BRANDS TRUST US</h6> <div class="brand-carousel-active gap-8 flex justify-evenly flex-wrap"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out += `<div class="brand-image"><img class="h-[100px] max-w-[260px] object-cover"${attr("src", `/img/brand/pic-${stringify(item)}.png`)} alt="brand-img"></div>`;
  }
  $$payload.out += `<!--]--></div></div></div></div>`;
}
function Countries($$payload) {
  const countriest = [
    {
      name: "turkey",
      image: "/img/flag/turkey.png",
      link: ""
    },
    {
      name: "france",
      image: "/img/flag/france.png",
      link: ""
    },
    {
      name: "Australia",
      image: "/img/flag/aus.jpg",
      link: ""
    },
    {
      name: "United States",
      image: "/img/flag/us.png",
      link: ""
    },
    {
      name: "India",
      image: "/img/flag/india.png",
      link: ""
    },
    {
      name: "Dubai",
      image: "/img/flag/dubai.png",
      link: ""
    }
  ];
  const each_array = ensure_array_like(countriest);
  $$payload.out += `<section class="countries-section fix section-padding pt-0"><div class="container"><div class="section-title text-center"><span class="wow fadeInUp">Countries we offer</span> <h2 class="title-anim">Các Quốc Gia Chúng Tôi <br> Hỗ Trợ Định Cư.</h2></div> <div class="row"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let country = each_array[$$index];
    $$payload.out += `<div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s"><div class="countries-card-items"><div class="thumb"><img${attr("src", country.image)} alt="img"></div> <div class="content"><h3><a${attr("href", country.link)}>${escape_html(country.name)}</a></h3> <p>Average time to resolve a cyber.</p></div></div></div>`;
  }
  $$payload.out += `<!--]--></div></div></section>`;
}
function Stat($$payload) {
  $$payload.out += `<section class="counter-section section-padding section-bg"><div class="container"><div class="counter-wrapper"><div class="row g-4"><div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s"><div class="counter-items text-center"><div class="icon center"><i class="flaticon-around"></i></div> <div class="content"><h2><span class="count">35</span>+</h2> <p>Countries <br> Represented</p></div></div></div> <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s"><div class="counter-items text-center"><div class="icon center"><i class="flaticon-visa-2"></i></div> <div class="content"><h2><span class="count">853</span>+</h2> <p>Completed <br> Visa Passport</p></div></div></div> <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s"><div class="counter-items text-center"><div class="icon center"><i class="flaticon-money"></i></div> <div class="content"><h2><span class="count">55</span>M+</h2> <p>Revenew <br> In per year</p></div></div></div> <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".9s"><div class="counter-items text-center"><div class="icon center"><i class="flaticon-immigration-officer"></i></div> <div class="content"><h2><span class="count">35</span>+</h2> <p>Experience <br> immigration officer</p></div></div></div></div></div></div></section>`;
}
function _page($$payload) {
  Hero($$payload);
  $$payload.out += `<!----> `;
  About($$payload);
  $$payload.out += `<!----> `;
  Service($$payload);
  $$payload.out += `<!----> `;
  Brand($$payload);
  $$payload.out += `<!----> `;
  Countries($$payload);
  $$payload.out += `<!----> `;
  Banner($$payload);
  $$payload.out += `<!----> `;
  Team($$payload);
  $$payload.out += `<!----> `;
  Stat($$payload);
  $$payload.out += `<!----> `;
  Testimonial($$payload);
  $$payload.out += `<!----> `;
  CtaMessage($$payload);
  $$payload.out += `<!----> `;
  Process($$payload);
  $$payload.out += `<!---->`;
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BN2IwXfB.js.map
