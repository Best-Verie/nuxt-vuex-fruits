<template>
<Fruits/>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
@Component({
  layout: "dashboard",
})
export default class Home extends Vue {}
</script>
