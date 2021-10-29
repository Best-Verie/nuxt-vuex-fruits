<template>
  <a-modal
    v-model="visible"
    title="Add an project"
    cancel-text="Cancel"
    ok-text="Save"
    @ok="handleSubmit"
    width="50vw"
  >
    <a-form ref="form" :form="form" :rules="rules">
      <a-form-item
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        label="project name"
      >
        <a-input
          v-decorator="rules.project_name"
          placeholder="Enter the project name"
        />
      </a-form-item>

      <a-form-item
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        label="target investment"
      >
        <a-input
          v-decorator="rules.target_investment"
          placeholder="Enter the target investment"
          type="number"
        />
      </a-form-item>

      <a-form-item
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        label="start date"
      >
        <a-input
          v-decorator="rules.start_date"
          placeholder="Enter the start date"
          type="date"
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
export default {
  name: "AddProject",
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
        project_name: [
          "project_name",
          {
            rules: [
              { required: true, min: 2, message: "Invalid  project name" },
            ],
          },
        ],
        target_investment: [
          "target_investment",
          {
            rules: [
              { required: true, min: 3, message: "Invalid target investment" },
            ],
          },
        ],

        start_date: [
          "start_date",
          {
            rules: [
              { type: "date", required: true, message: "invalid start date" },
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
<style scoped>
.ant-input {
  margin-left: 2em;
}
</style>