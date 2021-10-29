<template>
  <EditProfile/>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
@Component({
  layout: "dashboard",
})
export default class Profile extends Vue {}
</script>


