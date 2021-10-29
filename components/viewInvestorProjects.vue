<template>
<a-row :gutter="16">
    <a-col :span="6">
      <a-card :bordered="false">
        <div class="projects">
          <a-row>
            <a-col :span="18">
              <a-tag> Xoo-Topia </a-tag>
              <a-progress type="dashboard" class="progress" :percent="45" />
            </a-col>
            <a-col :span="6">
              <a-icon
                type="eye"
                class="eye-icon"
                @click="OpenViewProject()"
              ></a-icon>
            </a-col>
          </a-row>
        </div>
      </a-card>
    </a-col>
    <a-col :span="6">
      <a-card :bordered="false">
        <div class="projects">
          <a-row>
            <a-col :span="18">
              <a-tag> Eco-Trace </a-tag>
              <a-progress type="dashboard" class="progress" :percent="75" />
            </a-col>
            <a-col :span="6">
              <a-icon
                type="eye"
                class="eye-icon"
                @click="OpenViewProject()"
              ></a-icon>
            </a-col>
          </a-row>
        </div>
      </a-card>
    </a-col>
    <a-col :span="6">
      <a-card :bordered="false">
        <div class="projects">
          <a-row>
            <a-col :span="18">
              <a-tag> Eco Green </a-tag>
              <a-progress type="dashboard" class="progress" :percent="25" />
            </a-col>
            <a-col :span="6">
              <a-icon
                type="eye"
                class="eye-icon"
                @click="OpenViewProject()"
              ></a-icon>
            </a-col>
          </a-row>
        </div>
      </a-card>
    </a-col>
    <a-col :span="6">
      <a-card :bordered="false">
        <div class="projects">
          <a-row>
            <a-col :span="18">
              <a-tag> Green life </a-tag>
              <a-progress type="dashboard" class="progress" :percent="95" />
            </a-col>
            <a-col :span="6">
              <a-icon
                type="eye"
                class="eye-icon"
                @click="OpenViewProject()"
              ></a-icon>
            </a-col>
          </a-row>
        </div>
      </a-card>
    </a-col>
  </a-row>
</template>
<script>
export default {
  name: 'viewInvestorProjects',
  methods:{
    OpenViewProject(){
      this.$router.push('/projects/2');
    }
  }
}
</script>

<style scoped>
.eye-icon {
  color: #001529;
  font-size: 1.3em;
}
.ant-tag{
 color:green;
 border-color: green;
}
.progress{
  margin-top: 1.2em;
}
</style>