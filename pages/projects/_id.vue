<template>
  <div class="view-one-pro">
    <a-row>
      <a-col :lg="24">
          <a-card :bordered="false">
            <h3>Eco-Green</h3>
            <img
              src="../../static/eco.jpg"
              alt=""
              srcset=""
              class="project-logo"
            />
          </a-card>
      </a-col>
    </a-row>
    <a-row>
      <a-col :lg="24" class="project-descr">
          <h3>About eco-green</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            quisquam.
          </p>
      </a-col>
    </a-row>
    <a-row>
      <a-col :lg="24">
        <a-card :bordered="false" class="chart-card">
          <ProjectChart />
        </a-card>
      </a-col>
    </a-row>

    <a-row>
      <a-col :lg="24">
        <ViewProjectInvestors />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { Vue, Component } from "nuxt-property-decorator";
@Component({
  layout: "dashboard",
})
export default class ViewProject extends Vue {}
</script>

<style scoped>
.project-logo {
  width: 10.5em;
}
.logo-col {
  border-right: 2px solid gainsboro;
}
.slogan-col p {
  margin-top: 3em;
  margin-left: 3em;
}
.chart-card {
  margin-top: 4em;
}
.project-descr{
  margin-top: 3em;
  width: 30em;
  margin-left: 3em;
}
</style>