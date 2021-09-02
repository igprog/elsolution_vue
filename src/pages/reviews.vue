<template>
  <div class="container text-center py-3">
    <h2>Recenzije</h2>
    <div class="row pt-3">
      <div class="col-sm-4">
        <img src="../assets/img/review.jpg" class="img-fluid" alt="o nama" />
      </div>
      <div class="col-sm-8 text-justify lead">
        <ul>
          <li>
            Recenzije na portalu
            <a
              href="https://www.emajstor.hr/imenik/elektroinstalacije/rijeka"
              title="eMajstor.hr - Recenzije El. Solution"
              >eMajstor.hr</a
            >
          </li>
          <li>
            Recenzije na portalu
            <a
              href="https://www.trebam.hr/providers/el-solution-obrt-za-instalacijske-usluge-vl-marko-supica"
              title="trebam.hr - Recenzije El. Solution"
              >trebam.hr</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: "%s | Recenzije",
    meta: [
      {
        name: "description",
        content: "EL SOLUTION, Recenzije",
      },
    ],
  },
};
</script>
