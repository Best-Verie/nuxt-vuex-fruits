<template>
  <a-form :form="form" class="editInvestorForm">
    <a-form-item
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      label="First name"
    >
      <a-input class="input"
        v-decorator="[
          'firstName',
          { 
            initialValue: 'Knowbee',
            rules: [{ required: true, message: 'Please input the first name' }] },
        ]"
      />
    </a-form-item>

    
    <a-form-item
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      label="Last name"
    >
      <a-input class="input"
        v-decorator="[
          'lastName',
          { 
            initialValue: 'Inc',
            rules: [{ required: true, message: 'Please input the last name' }] },
        ]"
      />
    </a-form-item>
    <a-form-item
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      label="email"
    >
      <a-input class="input"
        v-decorator="[
          'email',
          { 
            initialValue: 'knowbeeinc@yahoo.fr',
            rules: [{ required: true, message: 'Please input the email' }] },
        ]"
        
      />
    </a-form-item>

    <a-form-item
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      label="address"
    >
      <a-input class="input"
        v-decorator="[
          'address',
          { 
            initialValue: '3/02/2022',
            rules: [{ required: true, message: 'Please input the address' }] },
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
  name:'EditInvestor',
  data() {
    return {
      checkemail: false,
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
      this.checkemail = e.target.checked;
      this.checkaddress = e.target.checked;
      this.$nextTick(() => {
        this.form.validateFields(['email'], { force: true });
        this.form.validateFields(['address'], { force: true });
      });
    },
  },
};
</script>

<style scoped>
.editInvestorForm {
    /* background-color: green; */
    padding: 10px;
    margin-left: 2em;
}
.editInvestorForm .input{
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
  margin-left: 2em;
}
</style>