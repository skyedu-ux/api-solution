const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","css/animate.css","css/bootstrap.css.map","css/bootstrap.min.css","css/bootstrap.min.css.map","css/font-awesome.css","css/magnific-popup.css","css/main.css","css/main.css.map","css/meanmenu.css","css/nice-select.css","css/output.css.map","css/slick.css","css/swiper-bundle.min.css","css/tailwind.css","favicon.png","fonts/fa-brands-400.eot","fonts/fa-brands-400.woff","fonts/fa-brands-400.woff2","fonts/fa-light-300.eot","fonts/fa-light-300.woff","fonts/fa-light-300.woff2","fonts/fa-regular-400.eot","fonts/fa-regular-400.woff","fonts/fa-regular-400.woff2","fonts/fa-solid-900.eot","fonts/fa-solid-900.woff","fonts/fa-solid-900.woff2","fonts/flaticon.eot","fonts/flaticon.woff","fonts/flaticon.woff2","img/.DS_Store","img/about/about-2.jpg","img/about/about-3.jpg","img/about/about-4.jpg","img/about/about-5.jpg","img/about/about-6.jpg","img/about/about-7.jpg","img/about/about.jpg","img/about/author.png","img/about/award.png","img/about/bar-2.png","img/about/bar.png","img/about/border-shape-2.png","img/about/border-shape.png","img/about/circle-2.png","img/about/circle.png","img/about/client-2.png","img/about/client.png","img/about/line.png","img/about/shape-image.png","img/about/signature.png","img/about/video.jpg","img/app-store.png","img/asterisk-2.svg","img/asterisk-3.svg","img/asterisk.svg","img/background-move.jpg","img/banner/01.jpg","img/bar-3.svg","img/brand/.DS_Store","img/brand/pic-1.png","img/brand/pic-10.png","img/brand/pic-11.png","img/brand/pic-12.png","img/brand/pic-13.png","img/brand/pic-14.png","img/brand/pic-2.png","img/brand/pic-3.png","img/brand/pic-4.png","img/brand/pic-5.png","img/brand/pic-6.png","img/brand/pic-7.png","img/brand/pic-8.png","img/brand/pic-9.png","img/breadcrumb.jpg","img/call.png","img/case-studies/01.jpg","img/case-studies/02.jpg","img/case-studies/03.jpg","img/case-studies/04.jpg","img/case-studies/05.jpg","img/case-studies/06.jpg","img/case-studies/07.jpg","img/choose/01.jpg","img/choose/02.jpg","img/choose/03.jpg","img/choose/04.jpg","img/choose/circle-shape.png","img/choose/feature.png","img/choose/shape.png","img/choose-us/01.jpg","img/choose-us/02.jpg","img/choose-us/03.jpg","img/circle.png","img/client.png","img/coaching/01.jpg","img/coaching/02.jpg","img/coaching/03.jpg","img/coaching/04.jpg","img/coaching/05.jpg","img/coaching/06.jpg","img/coaching/07.jpg","img/coaching/08.jpg","img/coaching/details-1.jpg","img/coaching/details-2.jpg","img/coaching/details-3.jpg","img/coaching/details-4.jpg","img/contact/01.jpg","img/contact/02.jpg","img/contact/bg-shape.png","img/contact/shape-img.png","img/contact-2.png","img/contact-bg.jpg","img/contact-shape.png","img/contact.png","img/counting.png","img/country/01.jpg","img/country/02.jpg","img/country/03.jpg","img/country/04.jpg","img/country/details-1.jpg","img/country/details-2.jpg","img/country/details-3.jpg","img/discuss.jpg","img/error.png","img/favicon.svg","img/feature/icon-1.svg","img/feature/icon-2.svg","img/feature/icon-3.svg","img/feature/trusted.jpg","img/flag/antigua-square.webp","img/flag/aus (2).png","img/flag/aus.jpg","img/flag/bra.png","img/flag/dominica-square.webp","img/flag/dubai.png","img/flag/eng-square.webp","img/flag/eng.png","img/flag/france.png","img/flag/ger.png","img/flag/grenada-square.webp","img/flag/india.png","img/flag/lines-waves1.png","img/flag/malaysia-square.webp","img/flag/russ.png","img/flag/saint-lucia.webp","img/flag/singapore-square.webp","img/flag/sip-square.webp","img/flag/turkey-square.webp","img/flag/turkey.png","img/flag/us.png","img/flag/vanuatu-square.webp","img/flag-1.jpg","img/flag-2.jpg","img/flag-3.jpg","img/flag.png","img/footer/arrow-shape-1.png","img/footer/arrow-shape-2.png","img/footer/gallery-1.jpg","img/footer/gallery-2.jpg","img/footer/gallery-3.jpg","img/footer/gallery-4.jpg","img/footer/gallery-5.jpg","img/footer/gallery-6.jpg","img/footer/post1.jpg","img/footer/post2.jpg","img/footer-shape-2.png","img/footer-shape.png","img/google-play.png","img/header/home-1.jpg","img/header/home-2.jpg","img/header/home-3.jpg","img/header/home-4.jpg","img/hero/bar.png","img/hero/circle-shape.png","img/hero/frame-1.png","img/hero/frame-2.png","img/hero/frame-3.png","img/hero/frame-shape.png","img/hero/hero-1.jpg","img/hero/hero-10.jpg","img/hero/hero-11.jpg","img/hero/hero-2.jpg","img/hero/hero-3.jpg","img/hero/hero-4.jpg","img/hero/hero-5.jpg","img/hero/hero-6.jpg","img/hero/hero-7.jpg","img/hero/hero-8.jpg","img/hero/hero-9.jpg","img/hero/icon-dots-8.png","img/hero/line-circle.png","img/hero/line.png","img/hero/object1.png","img/hero/right-shape.png","img/home-4/about/about2 - Copy.jpg","img/home-4/about/about2.jpg","img/home-4/about/about3.jpg","img/home-4/about/arrow-shape.png","img/home-4/about/bg-shape.png","img/home-4/about/circle-shape.png","img/home-4/about/icon/icon1.svg","img/home-4/about/icon/icon2.svg","img/home-4/banner1.jpg","img/home-4/case-study/arrow-shape.png","img/home-4/case-study/case-study1.jpg","img/home-4/case-study/case-study2.jpg","img/home-4/case-study/case-study3.jpg","img/home-4/case-study/icon/icon1.svg","img/home-4/case-study/icon/icon2.svg","img/home-4/case-study/icon/icon3.svg","img/home-4/faq-img.jpg","img/home-4/feature/arrow-shape.png","img/home-4/feature/arrow-shape2.png","img/home-4/feature/benefits-one-img-1.jpg","img/home-4/feature/benefits-one-img-2.jpg","img/home-4/feature/dot-shape.png","img/home-4/feature/feature.jpg","img/home-4/feature/feature2.jpg","img/home-4/feature/quote.png","img/home-4/feature-icon/icon1.svg","img/home-4/feature-icon/icon2.svg","img/home-4/feature-icon/icon3.svg","img/home-4/hero/circle.png","img/home-4/hero/hero-bg.jpg","img/home-4/hero/hero4.jpg","img/home-4/news/01.jpg","img/home-4/news/02.jpg","img/home-4/news/03.jpg","img/home-4/news/author.jpg","img/home-4/news/author2.jpg","img/home-4/news/author3.jpg","img/home-4/news/circle-shape.png","img/home-4/pricing/arrow.png","img/home-4/pricing/dot.png","img/home-4/pricing/dot2.png","img/home-4/pricing/icon1.svg","img/home-4/pricing/icon2.svg","img/home-4/pricing/icon3.svg","img/home-4/pricing/tag.png","img/home-4/service/arrow.png","img/home-4/service/arrow2.png","img/home-4/service/bg-shape.png","img/home-4/service/icon-1.svg","img/home-4/service/icon-2.svg","img/home-4/service/icon-3.svg","img/home-4/service/icon-4.svg","img/home-4/service/icon-5.svg","img/home-4/service/icon6.svg","img/home-4/service/icon7.svg","img/home-4/service/item-shape.png","img/home-4/service/item-shape2.png","img/home-4/service/line-shape.png","img/home-4/service/line-shape2.png","img/home-4/service/service-bg.jpg","img/home-4/service/service-provide-bg.jpg","img/home-4/team/team1.jpg","img/home-4/team/team2.jpg","img/home-4/team/team3.jpg","img/home-4/team/team4.jpg","img/home-4/team/team5.jpg","img/home-4/testimonial/bg.png","img/home-4/testimonial/client.png","img/home-4/testimonial/client2.png","img/home-4/testimonial/comma.png","img/home-4/testimonial/quote2.png","img/icon/icon-1.svg","img/icon/icon-2.svg","img/icon/icon-3.svg","img/icon/icon-4.svg","img/icon.png","img/immigration/A_Dien_tich_quoc_gia_42b865c0af.webp","img/immigration/B_Do_giau_co_d89069878c.webp","img/immigration/C_Don_vi_tien_te_032f3679bd.webp","img/immigration/D_Giao_duc_6920d1125c.webp","img/immigration/E_Khi_hau_b498f3ce95.webp","img/immigration/F_Mat_do_dan_so_e37ecb5913.webp","img/immigration/G_Muc_do_an_toan_and_hoa_nhap_xa_hoi_a1a56b8651.webp","img/immigration/H_Phuc_loi_xa_hoi_9bdf9ca256.webp","img/immigration/Han_ngach_1e42bedc66.webp","img/immigration/I_Quyen_luc_ho_chieu_b862f7be15-1.webp","img/immigration/J_Sinh_hoat_phi_551a98a660.webp","img/immigration/K_So_dan_nhap_cu_7329a66158.webp","img/immigration/M_Thoi_gian_bay_tu_VN_424a42ef1c.webp","img/immigration/O_Xep_hang_tong_tai_san_quoc_gia_16c0a5be3b.webp","img/immigration/P_Y_te_73afed5fd1.webp","img/immigration/spain-flag.webp","img/line.png","img/linepng.png","img/logo/.DS_Store","img/logo/footer-logo.svg","img/logo/logo-2.svg","img/logo/logo.svg","img/logo/white-logo.svg","img/news/01.jpg","img/news/02.jpg","img/news/03.jpg","img/news/04.jpg","img/news/05.jpg","img/news/06.jpg","img/news/07.jpg","img/news/08.jpg","img/news/09.jpg","img/news/10.jpg","img/news/11.jpg","img/news/12.jpg","img/news/author_img2.jpg","img/news/author_img3.jpg","img/news/author_img4.jpg","img/news/post-1.jpg","img/news/post-2.jpg","img/news/post-3.jpg","img/news/post-4.jpg","img/news/post-5.jpg","img/news/pp1.jpg","img/news/pp2.jpg","img/news/pp3.jpg","img/project/01.jpg","img/project/02.jpg","img/project/03.jpg","img/project/04.jpg","img/project/05.jpg","img/project/06.jpg","img/project/07.jpg","img/project/08.jpg","img/project/09.jpg","img/project/10.jpg","img/project/11.jpg","img/project/12.jpg","img/project/details-2.jpg","img/project/details-3.jpg","img/project/details-4.jpg","img/project/details.jpg","img/quotepost.png","img/service/01.jpg","img/service/02.jpg","img/service/03.jpg","img/service/04.jpg","img/service/bottom-shape.png","img/service/contact-bg.jpg","img/service/details-1.jpg","img/service/icon/01.svg","img/service/icon/02.svg","img/service/icon/03.svg","img/service/icon/04.svg","img/service/left-shape.png","img/service/line-shape-2.png","img/service/line-shape.png","img/service/right-shape.png","img/service/shape.png","img/shape-left.jpg","img/shape-left.png","img/shape-right.jpg","img/shape-right.png","img/shape.png","img/team/01.jpg","img/team/02.jpg","img/team/03.jpg","img/team/04.jpg","img/team/05.jpg","img/team/06.jpg","img/team/07.jpg","img/team/08.jpg","img/team/09.jpg","img/team/10.jpg","img/team/11.jpg","img/team/12.jpg","img/team/13.jpg","img/team/14.jpg","img/team/circle-shape.png","img/team/details-1.jpg","img/team/dot-shape-2.png","img/team/dot-shape.png","img/testimonial/01.png","img/testimonial/02.png","img/testimonial/03.png","img/testimonial/04.png","img/testimonial/05.png","img/testimonial/06.jpg","img/testimonial/07.jpg","img/testimonial/07.png","img/testimonial/08.jpg","img/testimonial/08.png","img/testimonial/09.jpg","img/testimonial/09.png","img/testimonial/quote.png","img/visa/01.jpg","img/visa/02.jpg","img/visa/03.jpg","js/ajax-mail.js","js/bootstrap.bundle.min.js","js/bootstrap.bundle.min.js.map","js/circle-progress.js","js/gsap/gsap-scroll-smoother.js","js/gsap/gsap-scroll-to-plugin.js","js/gsap/gsap-scroll-trigger.js","js/gsap/gsap-split-text.js","js/gsap/gsap.js","js/jquery-3.7.1.min.js","js/jquery.counterup.min.js","js/jquery.magnific-popup.min.js","js/jquery.meanmenu.min.js","js/jquery.nice-select.min.js","js/jquery.waypoints.js","js/main.js","js/slick-animation.min.js","js/slick.min.js","js/swiper-bundle.min.js","js/swiper-bundle.min.js.map","js/viewport.jquery.js","js/wow.min.js","scss/.DS_Store","scss/_about.scss","scss/_animation.scss","scss/_blog.scss","scss/_brand.scss","scss/_buttons.scss","scss/_coaching.scss","scss/_contact.scss","scss/_country.scss","scss/_cta.scss","scss/_faq.scss","scss/_feature.scss","scss/_footer.scss","scss/_header.scss","scss/_helping.scss","scss/_hero.scss","scss/_main-sidebar.scss","scss/_marquee.scss","scss/_meanmenu.scss","scss/_mixins.scss","scss/_news-addons.scss","scss/_preloader.scss","scss/_section.scss","scss/_team.scss","scss/_testimonial.scss","scss/_typography.scss","scss/_variables.scss","scss/_visa.scss","scss/main.scss","video/.DS_Store","video/logo.gif","video/sky-logo-video.mp4"]),
	mimeTypes: {".css":"text/css",".map":"application/json",".png":"image/png",".woff":"font/woff",".woff2":"font/woff2",".jpg":"image/jpeg",".svg":"image/svg+xml",".webp":"image/webp",".js":"text/javascript",".gif":"image/gif",".mp4":"video/mp4"},
	_: {
		client: {"start":"_app/immutable/entry/start.DG0syWkl.js","app":"_app/immutable/entry/app.DHMwQYyL.js","imports":["_app/immutable/entry/start.DG0syWkl.js","_app/immutable/chunks/entry.5HYBzXlr.js","_app/immutable/chunks/runtime.C4Zm_SMD.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/index.BPQfFJo-.js","_app/immutable/entry/app.DHMwQYyL.js","_app/immutable/chunks/runtime.C4Zm_SMD.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/render.CDLKzv1_.js","_app/immutable/chunks/events.0FsKVZzb.js","_app/immutable/chunks/template.DSd8qUyh.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/if.DE9gnGtz.js","_app/immutable/chunks/svelte-component.D7CgJo1-.js","_app/immutable/chunks/proxy.B9RwQzJ-.js","_app/immutable/chunks/this.Sxla89Nf.js","_app/immutable/chunks/props.BEAp8kY0.js","_app/immutable/chunks/store.DQ-wGMnx.js","_app/immutable/chunks/index-client.BQR9iTQS.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-DEpRoS2j.js')),
			__memo(() => import('./chunks/1-CJcD5Opd.js')),
			__memo(() => import('./chunks/2-CU03Yrjc.js')),
			__memo(() => import('./chunks/3-CvBxIESS.js')),
			__memo(() => import('./chunks/4-BvbND3HS.js')),
			__memo(() => import('./chunks/5-D-u6tTOZ.js')),
			__memo(() => import('./chunks/6-Du5an0o4.js')),
			__memo(() => import('./chunks/7-IBG4myaS.js')),
			__memo(() => import('./chunks/8-CGhQhFT6.js')),
			__memo(() => import('./chunks/9-BMZFd8Nt.js')),
			__memo(() => import('./chunks/10-ockFqMyw.js')),
			__memo(() => import('./chunks/11-BtzLvg0R.js')),
			__memo(() => import('./chunks/12-DMRvIYLe.js')),
			__memo(() => import('./chunks/13-DAM7ABTM.js')),
			__memo(() => import('./chunks/14-DqLfvgoR.js')),
			__memo(() => import('./chunks/15-ztdUokl1.js')),
			__memo(() => import('./chunks/16-B_ANQ3hE.js')),
			__memo(() => import('./chunks/17-CEJGPADc.js')),
			__memo(() => import('./chunks/18-QHLIprXO.js')),
			__memo(() => import('./chunks/19-Bo01-uZl.js')),
			__memo(() => import('./chunks/20-DJNy9_8o.js')),
			__memo(() => import('./chunks/21-CplKtV4-.js'))
		],
		routes: [
			{
				id: "/(user)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(user)/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(admin)/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(admin)/admin/blog",
				pattern: /^\/admin\/blog\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(admin)/admin/blog/create",
				pattern: /^\/admin\/blog\/create\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(admin)/admin/blog/edit/[id]",
				pattern: /^\/admin\/blog\/edit\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(admin)/admin/header",
				pattern: /^\/admin\/header\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(admin)/admin/home",
				pattern: /^\/admin\/home\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(admin)/admin/job",
				pattern: /^\/admin\/job\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(admin)/admin/job/add",
				pattern: /^\/admin\/job\/add\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(admin)/api",
				pattern: /^\/api\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-3PcsXlbx.js'))
			},
			{
				id: "/(user)/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(user)/blog/[id]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(user)/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/(user)/immigration",
				pattern: /^\/immigration\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/(user)/immigration/more",
				pattern: /^\/immigration\/more\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/(user)/immigration/[id]",
				pattern: /^\/immigration\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/(user)/job",
				pattern: /^\/job\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 21 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
