<template>
  <div>
    <div class="container pt-5 text-justify">
      <div class="pb-5 text-center font-weight-bold">
        <h2 class="text-uppercase display-4 font-weight-bold">
          Tražite električara?
        </h2>
        <c-call-us
          background="text-center py-3 font-weight-bold lead shadow bg-main" astyle="text-dark"
        />
      </div>
      <h2>O nama</h2>
      <c-about-us />
      <h2>Usluge</h2>
      <c-card
        img="air-conditioner.jpg"
        title="Usluge montaže klime"
        desc="Obavljamo usluge montaže klima uređaja i servisa sa mogučnošću nabave brenda po želji kupca."
      />
      <c-card
        img="electrician.jpg"
        title="Elektro instalacije"
        desc="Izvodimo elektro instalacije u građevini i zgradarstvu, sa vrhunskim materijalima i uslugom, koju obavljamo stručno i kvalitetno."
      />
      <c-card
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
import cAboutUs from "../components/cAboutUs.vue";
import cCard from "../components/cCard.vue";
import cCallUs from "../components/cCallUs.vue";
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
    cAboutUs,
    cCard,
    cCallUs,
  },
  data() {
    return {
      constants: this.$constants,
    };
  },
};
</script>