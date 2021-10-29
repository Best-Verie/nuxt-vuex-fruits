<template>
  <a-modal v-model="visible" title="Edit Profile" cancel-text="Cancel" ok-text="Save" @ok="handleSubmit">
    <a-form ref="form" :form="form" :rules="rules">
    <a-form-item label="User Name">
      <a-input
        v-decorator="['user_name', { rules: [{ message: 'User Name' }] }]"
      />
    </a-form-item>
    <a-form-item label="Email">
      <a-input
        v-decorator="['email', { rules: [{ message: 'Email' }] }]"
      />
    </a-form-item>
    <a-form-item label="Gender">
      <a-select
        v-decorator="[
          'gender',
          { rules: [{ message: 'Please select your gender!' }] },
        ]"
        placeholder="Select a option and change input text above"
        @change="handleSelectChange"
      >
        <a-select-option value="male">
          Male
        </a-select-option>
        <a-select-option value="female">
          Female
        </a-select-option>
        <a-select-option value="other">
          Other
        </a-select-option>
      </a-select>
    </a-form-item>
    
    <a-form-item label="Password">
     
      <a-input-password
        v-decorator="['password', { rules: [{ message: 'Password'}]}]"  />
    </a-form-item>
    </a-form>
  </a-modal>
</template>
<script>
export default {
  name: "EditProfileModal",
  data() {
    return {
      visible: false,
      form: this.$form.createForm(this),
      plainOptions: ["A", "B", "C"],
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
  },
  methods: {
    show() {
      this.visible = true;
    },
    handleSubmit() {
      const {
        form: { validateFields },
      } = this;
      validateFields((err, values) => {
        if (!err) {
          this.form.resetFields();
        }
      });
    },
  },
};
</script>