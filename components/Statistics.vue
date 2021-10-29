<template>
  <a-card :cardTitle="cardTitle" :bordered="false">
    <a-row :gutter="16">
      <a-col :span="8">
        <a-statistic
         :statTitle = "statTitle"
          :statValue="statValue"
          :precision="0"
          :statValue-style="{ color: '#3f8600' }"
          style="margin-right: 50px"
        >
          <template #prefix>
            <a-icon type="arrow-up" />
          </template>
        </a-statistic>
      </a-col>
      <a-col :span="8">
        <a-statistic
         :statTitle = "New"
          :statValue="statValue"
          class="demo-class"
          :statValue-style="{ color: '#cf1322' }"
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
export default {
  name: 'Statistics',
  props: {
    cardTitle: {
      type: String,
      default: '',
    },
    statTitle: {
      type: Number,
      default: 0,
    },
    statValue: {
      type: Object,
      default: () => ({}),
    },
  }
};
</script>