<template>
  <div>
    <div class="container pt-5 text-justify">
      <h2>O nama</h2>
      <comp-aboutus />
      <h2>Usluge</h2>
      <card
        img="air-conditioner.jpg"
        title="Usluge montaže klime"
        desc="Obavljamo usluge montaže klima uređaja i servisa sa mogučnošću nabave brenda po želji kupca."
      />
      <card
        img="electrician.jpg"
        title="Elektro instalacije"
        desc="Izvodimo elektro instalacije u građevini i zgradarstvu, sa vrhunskim materijalima i uslugom, koju obavljamo stručno i kvalitetno."
      />
      <card
        img="instalation.jpg"
        title="Instalacija kabela"
        desc="Instalacija kabela i opreme u industrijskoj mehanizaciji i robotici."
      />
      <p class="lead">
        Svoju djelatnost obavljamo uglavnom na području Primorsko-Goranske
        županije i ali šire. Obavljamo poslove i u inozemstvu, po potrebi
        klijenata vodećih kompanija u autoindustriji te brodogradnji.
      </p>
    </div>
  </div>
</template>

<script>
import compAboutus from "../components/CompAboutus.vue";
import card from "../components/card.vue";
export default {
  metaInfo: {
    titleTemplate: "%s | Naslovna",
    meta: [
      {
        name: "description",
        content: "Obrt za instalacijske usluge - Rijeka.",
      },
    ],
  },
  components: {
    compAboutus,
    card,
  },
};
</script>