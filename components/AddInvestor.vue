<template>
  <a-modal
    v-model="visible"
    title="Add an Investor"
    cancel-text="Cancel"
    ok-text="Save"
    @ok="handleSubmit"
    width="50vw"
  >
    <a-form ref="form" :form="form" :rules="rules">
      <a-form-item :label-col="labelCol" :wrapper-col="wrapperCol" label="First Name">
        <a-input
          v-decorator="rules.first_name"
          placeholder="Enter the first name"
        />
      </a-form-item>

      <a-form-item :label-col="labelCol" :wrapper-col="wrapperCol" label="Last Name">
        <a-input
          v-decorator="rules.last_name"
          placeholder="Enter the last name"
          type="text"
        />
      </a-form-item>

      <a-form-item
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        label="Email"
      >
        <a-input
          v-decorator="rules.email"
          placeholder="Enter the email"
          type="email"
        />
      </a-form-item>
       <a-form-item
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        label="Address"
      >
        <a-input
          v-decorator="rules.address"
          placeholder="Enter the address"
          type="text"
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
export default {
  name: "AddInvestor",
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

      rules: {
        first_name: [
          "first_name",
          {
            rules: [{ required: true, min: 2, message: "Invalid  first name" }],
          },
        ],
        last_name: [
          "last_name",
          {
            rules: [{ required: true, min: 3, message: "Invalid last name" }],
          },
        ],
       
        email: [
          "email",
          {
            rules: [{ type: "email",required: true, message: "invalid email" }],
          },
        ],
         address: [
          "address",
          {
            rules: [
              { required: true, message: "invalid address" },

            ],
          },
        ],
        
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
