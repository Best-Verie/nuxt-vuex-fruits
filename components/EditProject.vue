<template>
  <a-form :form="form" class="addProjectForm">
    <a-form-item
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      label="Project Name"
    >
      <a-input class="input"
        v-decorator="[
          'projectName',
          { 
            initialValue: 'eco green',
            rules: [{ required: true, message: 'Please input the project name' }] },
        ]"
      />
    </a-form-item>
    <a-form-item
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      label="Target investment"
    >
      <a-input class="input"
        v-decorator="[
          'targetInvestment',
          { 
            initialValue: '$5000',
            rules: [{ required: true, message: 'Please input the target investment' }] },
        ]"
        
      />
    </a-form-item>

    <a-form-item
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      label="startDate"
    >
      <a-input class="input"
        v-decorator="[
          'startDate',
          { 
            initialValue: '3/02/2022',
            rules: [{ required: true, message: 'Please input the project start date' }] },
        ]"
      />
    </a-form-item>

    <a-form-item :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol">
      <a-button type="primary" @click="check" class="save-btn">
        Save
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};
export default {
  name:'EditProject',
  data() {
    return {
      checkTargetInvestment: false,
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this, { name: 'dynamic_rule' }),
    };
  },
  methods: {
    check() {
      this.form.validateFields(err => {
        if (!err) {
          console.info('success');
        }
      });
    },
    handleChange(e) {
      this.checkTargetInvestment = e.target.checked;
      this.checkstartDate = e.target.checked;
      this.$nextTick(() => {
        this.form.validateFields(['targetInvestment'], { force: true });
        this.form.validateFields(['startDate'], { force: true });
      });
    },
  },
};
</script>

<style scoped>
.addProjectForm {
    /* background-color: green; */
    padding: 10px;
    margin-left: 2em;
}
.addProjectForm .input{
  margin-left: 2em;
  width: 20em;
  padding: 10px;
}
.save-btn{
  margin-left: 2em;
  width: 20em;
  background-color: #001529;
  box-shadow: none;
  border: none;  
}
.ant-input {
  margin-left: 4em;
}
</style>