import { T as ensure_array_like, P as escape_html, v as pop, t as push } from './index-DYLr4qAj.js';
import { d as dataStore } from './store-CI2MmCxJ.js';
import { o as onDestroy } from './index-server-BX_gp4iS.js';
import { h as html } from './html-FW6Ia4bL.js';
import { a as attr } from './attributes-Bu127xad.js';

function Team($$payload, $$props) {
  push();
  let teamData = void 0;
  const unsubscribe = dataStore.subscribe((data) => {
    if (data) {
      teamData = data.teamData;
    }
  });
  onDestroy(() => {
    unsubscribe();
  });
  if (teamData) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(teamData.members);
    $$payload.out += `<section class="team-section section-padding section-bg-3"><div class="container"><div class="section-title text-center"><span class="wow fadeInUp">${escape_html(teamData.title)}</span> <h2 class="title-anim text-white">${html(teamData.heading)}</h2></div> <div class="flex gap-4 flex-wrap justify-evenly align-items-center"><!--[-->`;
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let member = each_array[index];
      $$payload.out += `<div class="max-w-[315px] wow fadeInUp"${attr("data-wow-delay", index * 0.2)}><div class="single-team-items"><div class="team-image"><img${attr("src", member.avatar || "https://placehold.co/315x340")} alt="team-img"> <div class="social-profile"><span class="plus-btn"><i class="fas fa-share-alt"></i></span> <ul><li><a${attr("href", member.facebookLink)} aria-label="Facebook" class="svelte-11suql8"><i class="fab fa-facebook-f"></i></a></li> <li><a aria-label="Twitter"${attr("href", member.twitterLink)} class="svelte-11suql8"><i class="fab fa-twitter"></i></a></li> <li><a aria-label="Linkedin"${attr("href", member.linkdinLink)} class="svelte-11suql8"><i class="fab fa-linkedin-in"></i></a></li></ul></div></div> <div class="team-content text-center"><h5><a${attr("href", member.link)} class="svelte-11suql8">${escape_html(member.name)}</a></h5> <p>${escape_html(member.role)}</p></div></div></div>`;
    }
    $$payload.out += `<!--]--></div></div></section>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}

export { Team as T };
//# sourceMappingURL=Team-CGPBRIUX.js.map
