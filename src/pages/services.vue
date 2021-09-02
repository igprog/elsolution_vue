<template>
  <div class="container text-center pt-3">
    <h2>Usluge</h2>
    <div class="text-justify pt-3">
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
    </div>
  </div>
</template>

<script>
import cCard from "../components/cCard.vue";
export default {
  metaInfo: {
    titleTemplate: "%s | Usluge",
    meta: [
      {
        name: "description",
        content:
          "Montaža klima uređaja, elektro instalacije, instalacija kabela i opreme u industriji i robotici.",
      },
    ],
  },
  components: {
    cCard,
  },
  data() {
    return {
      d: null,
    };
  },
};
</script>