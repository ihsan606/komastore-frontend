<template>
  <main class="c-main" style="background-color: #c3e9ff">
    <div class="container-fluid">
      <div class="fade-in mx-4">
        <div class="welcome d-flex justify-content-start">
          <h2 :data-text="'Halo,' + user.name">Halo,{{ user.name }}</h2>
        </div>
        <div class="row">
          <div class="col">
            <h4>Status Transaksi</h4>
            <div class="row">
              <!-- Pending Card -->
              <div class="col-6 col-lg-6">
                <div class="card border-0">
                  <div class="card-body p-0 d-flex align-items-center">
                    <div
                      class="py-2 px-3 mfe-3 rounded shadow-card-pending"
                      style="background-color: #783efd"
                    >
                      <span style="font-size: 30px; color: white">
                        <i class="far fa-clock"></i>
                      </span>
                    </div>
                    <div>
                      <div
                        class="text-value text-primary"
                        style="font-family: 'Tomorrow', sans-serif"
                      >
                        {{ statistic.pending }}
                      </div>
                      <div
                        class="text-muted text-uppercase font-weight-bold small"
                        style="font-family: 'Arimo', sans-serif; color: black"
                      >
                        PENDING
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Success Card -->
              <div class="col-6 col-lg-6">
                <div class="card border-0">
                  <div class="card-body p-0 d-flex align-items-center">
                    <div
                      class="py-2 px-3 mfe-3 rounded shadow-card-success"
                      style="background-color: #4fdfb1"
                    >
                      <span style="font-size: 30px; color: white">
                        <i class="fas fa-check-circle"></i>
                      </span>
                    </div>
                    <div>
                      <div
                        class="text-value text-primary"
                        style="font-family: 'Tomorrow', sans-serif"
                      >
                        {{ statistic.success }}
                      </div>
                      <div
                        class="text-muted text-uppercase font-weight-bold small"
                        style="font-family: 'Arimo', sans-serif; color: black"
                      >
                        SUCCESS
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Expired -->
              <div class="col-6 col-lg-6">
                <div class="card border-0">
                  <div class="card-body p-0 d-flex align-items-center">
                    <div
                      class="py-2 px-3 mfe-3 rounded shadow-card-success"
                      style="background-color: #fe8f65"
                    >
                      <span style="font-size: 30px; color: white">
                        <i class="fas fa-exclamation-triangle"></i>
                      </span>
                    </div>
                    <div>
                      <div
                        class="text-value text-primary"
                        style="font-family: 'Tomorrow', sans-serif"
                      >
                        {{ statistic.expired }}
                      </div>
                      <div
                        class="text-muted text-uppercase font-weight-bold small"
                        style="font-family: 'Arimo', sans-serif; color: black"
                      >
                        EXPIRED
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Failed -->
              <div class="col-6 col-lg-6">
                <div class="card border-0">
                  <div class="card-body p-0 d-flex align-items-center">
                    <div
                      class="py-2 px-3 mfe-3 rounded shadow-card-failed"
                      style="background-color: #ff4269"
                    >
                      <span style="font-size: 30px; color: white">
                        <i class="fas fa-times-circle"></i>
                      </span>
                    </div>
                    <div>
                      <div
                        class="text-value text-primary"
                        style="font-family: 'Tomorrow', sans-serif"
                      >
                        {{ statistic.failed }}
                      </div>
                      <div
                        class="text-muted text-uppercase font-weight-bold small"
                        style="font-family: 'Arimo', sans-serif; color: black"
                      >
                        FAILED
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col sm-4">
            <h4>Income</h4>
            <div class="row mr-4">
              <div class="col">
                <div
                  class="card shadow-card-income"
                  style="background-color: #b9a1f9"
                >
                  <div class="card-body">
                    <h5 class="card-title">Income Hari Ini</h5>
                    <h6 class="card-subtitle mb-2 text-muted"></h6>
                    <br />
                    <p
                      class="card-text"
                      style="
                        font-family: 'Tomorrow', sans-serif;
                        font-size: 25px;
                      "
                    >
                      Rp. {{formatPrice(statistic.todays_profit)}}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div
                  class="card shadow-card-tincome pt-1 solid white"
                  style="background-color: #f9d475"
                >
                  <div class="card-body">
                    <h5 class="card-title">Total Income</h5>
                    <h6 class="card-subtitle mb-2 text-muted"></h6>
                    <br />
                    <p
                      class="card-text"
                      style="
                        font-family: 'Tomorrow', sans-serif;
                        font-size: 25px;
                      "
                    >
                      Rp. 1,254,345.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <!-- statistics - section -->
        <div class="row">
          <div class="col-md-12">
            <div
              class="card border-0 rounded shadow-sm border-top-orange"
              style="background-color: white"
            >
              <div class="card-header">
                <span class="font-weight-bold"
                  ><i class="fa fa-chart-bar"></i> GRAFIK PENDAPATAN
                  {{ new Date().getFullYear() }}</span
                >
              </div>
              <div class="card-body">
                <client-only>
                  <line-chart
                    :data="chart.chartData"
                    :chart-options="chartOptions"
                  ></line-chart>
                </client-only>
              </div>
            </div>
          </div>
        </div>
        <!-- end statistic section -->
      </div>
    </div>
  </main>
</template>

<script>
export default {
  //layout
  layout: "admin",
  //computed
  computed: {
    user() {
      return this.$auth.user;
    },
  },

  //meta
  head() {
    return {
      title: "Dashboard - Admin",
    };
  },

  data() {
    return {
      chartOptions: {
        responsive: true,
      },
    };
  },

  //ambil data dari rest api
  async asyncData({ $axios }) {
    //fetching dashboard
    const dashboard = await $axios.$get("/api/admin/dashboard");

    //statistic
    const statistic = {
      pending: dashboard.data.count.pending,
      success: dashboard.data.count.success,
      expired: dashboard.data.count.expired,
      failed: dashboard.data.count.failed,
      todays_profit : dashboard.data.count.todays_sales,
    };

    //cart
    const chart = {
      chartData: {
        labels: dashboard.data.chart.month_name,
        datasets: [
          {
            label: `STATISTIK PENDAPATAN : ${new Date().getFullYear()}`,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
            data: dashboard.data.chart.grand_total,
          },
        ],
      },
    };

    return {
      statistic,
      chart,
    };
  },
};
</script>

<style>
h2 {
  position: relative;
  text-align: center;
  font-size: 3vw;
  font-weight: 400;
  color: #17b486;
  letter-spacing: 0.1em;
}
h2::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  color: #c3e9ff;
  -webkit-text-stroke: 0.1vw #c3e9ff;
  border-right: 0.3vw solid white;
  overflow: hidden;
  animation: animate 6s linear infinite;
}
@keyframes animate {
  0% {
    width: 0;
  }
  80% {
    width: 100%;
  }
}
.card {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: #c3e9ff;
  border-radius: 12px;
}
.shadow-card-pending {
  box-shadow: 9px 7px 33px 0px rgba(120, 62, 253, 0.27);
  -webkit-box-shadow: 9px 7px 33px 0px rgba(120, 62, 253, 0.27);
  -moz-box-shadow: 9px 7px 33px 0px rgba(120, 62, 253, 0.27);
}
.shadow-card-success {
  box-shadow: 9px 7px 33px 0px rgba(79, 223, 177, 0.28);
  -webkit-box-shadow: 9px 7px 33px 0px rgba(79, 223, 177, 0.28);
  -moz-box-shadow: 9px 7px 33px 0px rgba(79, 223, 177, 0.28);
}
.shadow-card-failed {
  box-shadow: 9px 7px 33px 0px rgba(255, 66, 105, 0.28);
  -webkit-box-shadow: 9px 7px 33px 0px rgba(255, 66, 105, 0.28);
  -moz-box-shadow: 9px 7px 33px 0px rgba(255, 66, 105, 0.28);
}
.shadow-card-expired {
  box-shadow: 9px 7px 33px 0px rgba(254, 143, 101, 0.28);
  -webkit-box-shadow: 9px 7px 33px 0px rgba(254, 143, 101, 0.28);
  -moz-box-shadow: 9px 7px 33px 0px rgba(254, 143, 101, 0.28);
}
.shadow-card-tincome {
  box-shadow: 14px 12px 39px 5px rgba(249, 212, 117, 0.23);
  -webkit-box-shadow: 14px 12px 39px 5px rgba(249, 212, 117, 0.23);
  -moz-box-shadow: 14px 12px 39px 5px rgba(249, 212, 117, 0.23);
}
.shadow-card-income {
  box-shadow: 14px 12px 39px 5px rgba(185, 161, 249, 0.42);
  -webkit-box-shadow: 14px 12px 39px 5px rgba(185, 161, 249, 0.42);
  -moz-box-shadow: 14px 12px 39px 5px rgba(185, 161, 249, 0.42);
}
</style>
