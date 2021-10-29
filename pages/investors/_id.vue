<template>
  <div>
    <div class="profile-card">
      <a-row :gutter="16">
        <a-col :span="24">
          <a-card :bordered="false">
            <a-row>
              <a-col :span="8" class="profile_col">
                <div class="profile">
                  <img
                    src="https://ui-avatars.com/api/?name=Knowbee+Inc/?&background=3F75F4&color=fff"
                    alt=""
                    srcset=""
                  />
                </div>
              </a-col>
              <a-col :span="8" class="profile_col">
                <div class="personal-profile">
                  <p>Name: <span></span> Knowbee Inc</p>
                  <p>Email: <span></span> Knowbeeinc@yahoo.fr</p>
                  <p>Phone: <span></span> +250787313219</p>
                  <p>Address: <span></span> Kigali Rwanda</p>
                </div>
              </a-col>
              <a-col :span="8" class="profile_col">
                <div class="bio">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum ut sapiente architecto error vel, ad molestiae
                    pariatur ratione eius! Dolorem assumenda atque et magni.
                    Incidunt assumenda perferendis nisi quos consequatur!
                  </p>
                </div>
              </a-col>
            </a-row>
          </a-card>
        </a-col>
      </a-row>
    </div>
    <div class="projects_card">
      <h3>Investments</h3>
  <viewInvestorProjects/>
  
    </div>
  </div>
</template>
<script>
import { Vue, Component } from "nuxt-property-decorator";
@Component({
  layout: "dashboard",
})
export default class ViewInvestor extends Vue {}
</script>
<style scoped>
.investor-img {
  margin-top: 3em;
  width: 20em;
}
.profile-card .profile_col {
  padding: 10px;
  border-right: 1px solid gainsboro;
}
.personal-profile,
.bio {
  margin-top: 2em;
}
.short-profile {
  margin-left: 3em;
}
.projects_card {
  margin-top: 3em;
}
.profile {
  padding: 20px;
}
.profile img {
  width: 10em;
  border-radius: 50%;
}

</style>

