<template>
  <a-card title="Investors" :bordered="false">
    <a-row :gutter="16">
      <a-col :span="8">
        <a-statistic
          title="Active"
          :value="10"
          :precision="0"
          :value-style="{ color: '#3f8600' }"
          style="margin-right: 50px"
        >
          <template #prefix>
            <a-icon type="arrow-up" />
          </template>
        </a-statistic>
      </a-col>
      <a-col :span="8">
        <a-statistic
          title="Idle"
          :value="9"
          :precision="2"
          class="demo-class"
          :value-style="{ color: '#cf1322' }"
          style="margin-right: 50px"
        >
          <template #prefix>
            <a-icon type="arrow-down" />
          </template>
        </a-statistic>
      </a-col>
    </a-row>
  </a-card>
</template>
<script lang="ts">
export default {};
</script>