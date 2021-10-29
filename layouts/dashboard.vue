<template>
  <a-layout id="components-layout-demo-responsive">
    <Sider />
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <Nuxt />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {};
</script>

<style>
#components-layout-demo-responsive .logo {
  background: rgba(180, 176, 176, 0.2);
  margin: 16px;
}

#components-layout-demo-responsive {
  height: 100vh;
}
</style>
