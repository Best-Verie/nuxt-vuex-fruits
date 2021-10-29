<template>
  <a-layout-sider breakpoint="lg" collapsed-width="0">
    <div class="logo" />
    <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
      <a-menu-item key="1">
          <NuxtLink to="/">
                 <a-icon type="bar-chart" />
          <span class="nav-text">Overview</span>
          </NuxtLink>
      </a-menu-item>
      <a-menu-item key="2">
        <NuxtLink to="/projects">
          <a-icon type="folder" />
          <span class="nav-text">Projects</span>
        </NuxtLink>
      </a-menu-item>
      <a-menu-item key="3">
        <NuxtLink to="/investors">
          <a-icon type="dollar" />
          <span class="nav-text">Investors</span>
        </NuxtLink>
      </a-menu-item>
      <a-menu-item key="4">
        <NuxtLink to="/profile">
          <a-icon type="user" />
          <span class="nav-text">Profile</span>
        </NuxtLink>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
<script lang="ts">
export default {};
</script>

<style scoped>

</style>
