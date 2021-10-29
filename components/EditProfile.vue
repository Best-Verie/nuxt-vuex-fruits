<template>
  <a-row>
  <a-col :lg ="6">
   <a-menu theme="dark" :default-selected-keys="['1']" mode="inline" class="menu">
      <a-menu-item key="1">
          <a-icon type="user" />
          <span class="nav-text">User Profile</span>
       
      </a-menu-item>
      <a-menu-item key="2" class="two">
        
          <a-icon type="key" />
          <span class="nav-text" @click="OpenEditProfileModal()"> Edit Profile</span>
          <EditProfileModal ref="modal"/>
        
      </a-menu-item>
    </a-menu>
  </a-col>
  <a-col :lg ="18">
  <a-card class="card">
     <a-row>
      <a-col :lg ="8">
      <div class="avatar">
      <ProfilePic/>
      </div>
      </a-col>
      <a-col :lg ="16">
      <EditProfileForm/>
      </a-col>
     </a-row>   
  </a-card>
  </a-col>

  </a-row>
</template>

<script>
export default {
   name: 'EditProfile', 
   data(){
     return {
       isModalVisible:false,
     }
   },
   methods:{

     OpenEditProfileModal(){
       this.$refs.modal.show()

     }
   }
}
</script>

<style scoped>

    .menu{
        margin-top: 30%;
        background-color: rgb(240,242,245);
        width: 90%;
    }
    .menu:hover{
        
        border-radius: 5px;
    }
    .nav-text{
        color: black;
    }
    
</style>