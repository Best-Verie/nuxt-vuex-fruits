<template>
 
  <div class="personal-profile">
                  <p>First Name: <span></span> Knowbee Inc</p>
                  <p>Last Name: <span></span> Knowbee Incredible</p>
                  <p>Email: <span></span> Knowbeeinc@yahoo.fr</p>
                  <p>Gender: <span></span> Female </p>
                  <p>Phone: <span></span> +250787313219</p>
                  <p>Address: <span></span> Kigali Rwanda</p>
  </div>
</template>

<script>
export default {
    name:'EditProfileForm',
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      });
    },
  },
};
</script>

<style scoped>
  .personal-profile{
    margin-top: 3rem;
  }
</style>