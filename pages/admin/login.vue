<template>
  <div class="form auth-boxed">
    <div class="form-container outer">
      <div class="form-form">
        <div class="form-form-wrap">
          <div class="form-container">
            <div class="form-content">
              <h1 class="">Sign In</h1>
              <p class="">Log in to your account to continue.</p>

              <div v-if="validation.message" class="mt-2">
                <b-alert show variant="danger">{{
                  validation.message
                }}</b-alert>
              </div>

              <b-form
                @submit.prevent="login"
                class="text-left"
                id="input-large"
              >
                <div class="form">
                  <div id="username-field" class="field-wrapper input">
                    <label for="username">EMAIL</label>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-user"
                    >
                      <path
                        d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                      ></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <b-input
                      v-model="user.email"
                      :class="{ 'is-invalid': validation.email }"
                      type="email"
                      placeholder="Email Address"
                    ></b-input>
                  </div>
                  <div v-if="validation.email" class="mt-2">
                    <b-alert show variant="danger">{{
                      validation.email[0]
                    }}</b-alert>
                  </div>

                  <div id="password-field" class="field-wrapper input mb-2">
                    <div class="d-flex justify-content-between">
                      <label for="password">PASSWORD</label>
                      <router-link
                        to="/auth/pass-recovery-boxed"
                        class="forgot-pass-link"
                        >Forgot Password?</router-link
                      >
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-lock"
                    >
                      <rect
                        x="3"
                        y="11"
                        width="18"
                        height="11"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    <b-input
                      :type="pwd_type"
                      v-model="user.password"
                      placeholder="Password"
                    ></b-input>
                    <svg
                      @click="set_pwd_type"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      id="toggle-password"
                      class="feather feather-eye"
                    >
                      <path
                        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                      ></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </div>
                  <div v-if="validation.password" class="mt-2">
                    <b-alert show variant="danger">{{
                      validation.password[0]
                    }}</b-alert>
                  </div>
                  <div class="d-sm-flex justify-content-between">
                    <div class="field-wrapper">
                      <b-button type="submit" variant="primary" value=""
                        >Log In</b-button
                      >
                    </div>
                  </div>

                  <div class="division">
                    <span>OR</span>
                  </div>

                  <div class="social">
                    <a href="javascript:void(0);" class="btn social-fb">
                      <i class="fab fa-facebook-f"></i>
                      <span class="">Facebook</span>
                    </a>
                    <a href="javascript:void(0);" class="btn social-github">
                      <i class="fab fa-google"></i>
                      <span class="brand-name">Google</span>
                    </a>
                  </div>

                  <p class="signup-link">
                    Not registered ?
                    <router-link to="/auth/register-boxed"
                      >Create an account</router-link
                    >
                  </p>
                </div>
              </b-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import "@/assets/sass/bootstrap.min.css";

// import "@/assets/sass/authentication/auth-boxed.scss";
// import "@/assets/sass/style.scss";

export default {
  //middleware
  middleware: "authenticated",

  //meta
  head() {
    return {
      title: "Login - Admin",
    };
  },
  data() {
    return {
      pwd_type: "password",
      user: {
        email: "",
        password: "",
      },
      //validation
      validation: [],
    };
  },
  mounted() {},
  methods: {
    async login() {
      await this.$auth
        .loginWith("admin", {
          data: {
            email: this.user.email,
            password: this.user.password,
          },
        })

        .then(() => {
          //redirect
          this.$router.push({
            name: "admin-dashboard",
          });
        })

        .catch((error) => {
          //assign validation
          this.validation = error.response.data;
        });
    },
    set_pwd_type() {
      if (this.pwd_type == "password") {
        this.pwd_type = "text";
      } else {
        this.pwd_type = "password";
      }
    },
  },
};
</script>
