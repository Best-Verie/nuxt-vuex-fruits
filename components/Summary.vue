<template>
  <div class="site-card-wrapper">
    <a-row :gutter="16">
      <a-col :span="8">
        <investments />
      </a-col>
      <a-col :span="8">
        <projects />
      </a-col>
      <a-col :span="8">
        <investors />
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  methods: {},
};
</script>
<style scoped>
.site-card-wrapper {
  margin-bottom: 2rem;
}
.ant-card {
  height: 200px;
}
.ant-row {
  display: flex;
  justify-content: space-between;
}
</style>
