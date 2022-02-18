<template>
  <main class="secondary" ref="main" style="overflow-y: auto; height: 100vh">
    <header class="px-4 px-md-8 px-lg-16 pb-16">
      <div class="primary--text text--darken-4">
        <h1 class="display mb-2">
          The best local coffee,
          <br />
          right at your doorstep.
        </h1>
        <h2 class="text--black" style="opacity: 0.87">
          Introducing <strong>MyBeans</strong>.
        </h2>

        <v-btn tile elevation="0" color="" outlined> Open the app </v-btn>
      </div>
    </header>
    <section
      class="primary darken-3 secondary--text text--lighten-1 px-4 px-md-8 px-lg-16 py-8"
    >
      <h2 class="display mb-8">What is MyBeans?</h2>
      <v-row class="secondary--text text--lighten-1">
        <v-col class="pr-sm-8" cols="12" sm="6">
          <h3 class="display mb-2">For coffee enthusiasts...</h3>
          <p class="mb-6">
            MyBeans is a platform for coffee enthusiasts to order from local
            coffee merchants.
          </p>
          <ul>
            <li class="d-flex align-end">
              <div class="d-inline-block" style="width: 48px">
                <v-icon large color="secondary"> mdi-check </v-icon>
              </div>
              <span class="secondary--text">
                Browse hundreds of coffee merchants.
              </span>
            </li>
            <li class="d-flex align-end">
              <div class="d-inline-block" style="width: 48px">
                <v-icon large color="secondary"> mdi-check </v-icon>
              </div>
              <span class="secondary--text">
                Have your orders delivered in 5 days or less.
              </span>
            </li>
            <li class="d-flex align-end">
              <div class="d-inline-block" style="width: 48px">
                <v-icon large color="secondary"> mdi-check </v-icon>
              </div>
              <span class="secondary--text">
                Your satisfaction guaranteed, or your money back.
              </span>
            </li>
          </ul>
        </v-col>
        <v-divider vertical />
        <v-col class="pl-sm-8" cols="12" sm="6">
          <h3 class="display mb-2">For coffee farmers...</h3>
          <p>
            MyBeans is a platform for coffee farmers to sell their coffee
            online.
          </p>
          <ul>
            <li class="d-flex align-end">
              <div class="d-inline-block" style="width: 48px">
                <v-icon large color="secondary"> mdi-check </v-icon>
              </div>
              <span class="secondary--text">
                Applying as a merchant takes only a few minutes.
              </span>
            </li>
            <li class="d-flex align-end">
              <div class="d-inline-block" style="width: 48px">
                <v-icon large color="secondary"> mdi-check </v-icon>
              </div>
              <span class="secondary--text">
                Sell your coffee to a wider range of customers.
              </span>
            </li>
            <li class="d-flex align-end">
              <div class="d-inline-block" style="width: 48px">
                <v-icon large color="secondary"> mdi-check </v-icon>
              </div>
              <span class="secondary--text">
                Not happy with the platform? Cancel your subscription anytime.
              </span>
            </li>
          </ul>
        </v-col>
      </v-row>
    </section>
    <section
      class="primary darken-3 secondary--text text--lighten-1 px-4 px-md-8 px-lg-16 py-8"
      style="padding-top: 128px !important"
    >
      <h2 class="display mb-8">How does it work?</h2>
      <v-row class="pb-8">
        <v-col
          style="border: 2px solid var(--v-secondary-lighten1)"
          cols="12"
          lg="4"
        >
          <h3 class="text-h3 mb-2">Register</h3>
          <p>Create a MyBeans account or link your socials.</p>
        </v-col>
        <v-col
          cols="12"
          lg="4"
          style="border: 2px solid var(--v-secondary-lighten1)"
        >
          <h3 class="text-h3 mb-2">Browse</h3>
          <p>Browse our catalog of coffee merchants.</p>
        </v-col>
        <v-col
          cols="12"
          lg="4"
          style="border: 2px solid var(--v-secondary-lighten1)"
        >
          <h3 class="text-h3 mb-2">Order</h3>
          <p>
            Place your order and get it delivered in 5 days or less. Your
            satisfaction guaranteed, or your money back.
          </p>
        </v-col>
      </v-row>
    </section>
    <footer class="px-4 px-md-8 px-lg-16 pb-16 py-16">
      <h2 class="display primary--text text--darken-4">Reach out to us</h2>
      <div class="w-100" style="height: 25vh">
        <l-map style="height: 100%; width: 100%" ref="map">
          <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" :attribution="attribution"></l-tile-layer>
        </l-map>
      </div>
    </footer>
  </main>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      scroll: null,
    };
  },
    mounted() {
this.$refs.map.map
    },
};
</script>

<style lang="stylus" scoped>
ul{
  padding-left 0 !important
  list-style-type : none;
}

p, li{
  font-size 24px
}

h1, h2, h3, h4, h5, h6{
  font-weight normal
}

header{
  min-height 50vh
  display flex
  padding-top: 12vh
}


@media(min-width: 768px){
  header{
    min-height 100vh
    padding-bottom: @padding-top
    display flex
    align-items center
  }

  header h1{
    font-size 6rem
    line-height calc(6rem + 16px)
  }
  h2{
    font-size 4rem
  }
  h3{
    font-size: 2.5rem
  }
}
</style>
