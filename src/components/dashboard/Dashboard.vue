<template>
  <div id="dashboard-bar">
    <div class="side_menu">
      <div class="sidebar-top"><font-awesome-icon icon="address-card" class="icon" />ダッシュボード</div>
      <!-- アカウント -->
      <div class="sidebar-title">
        <div class="sidebar-content" v-b-toggle.collapse-1 variant="primary"><font-awesome-icon icon="user" class="icon" />個人設定
          <span class="select-icon" v-show="this.account_accordion_flg === true"><font-awesome-icon icon="chevron-up" /></span>
          <span class="select-icon" v-show="this.account_accordion_flg === false"><font-awesome-icon icon="chevron-down" /></span>
        </div>
        <b-collapse id="collapse-1" class="mt-2">
          <b-link to="/account"><span class="card-text" @click="isSelect('1')" :class="{'active': isActive === '1'}">LINE-ID:設定</span></b-link>
        </b-collapse>
      </div>
      <!-- PDCA -->
      <div class="sidebar-title">
        <div class="sidebar-content" v-b-toggle.collapse-2 variant="primary"><font-awesome-icon icon="file-alt" class="icon" />マスターキーフォーマット
          <span class="select-icon" v-show="this.report_accordion_flg === true"><font-awesome-icon icon="chevron-up" /></span>
          <span class="select-icon" v-show="this.report_accordion_flg === false"><font-awesome-icon icon="chevron-down" /></span>
        </div>
        <b-collapse id="collapse-2" class="mt-2">
          <b-link to="/report"><span class="card-text" @click="isSelect('2')" :class="{'active': isActive === '2'}">フォーマット:新規作成</span></b-link>
        </b-collapse>
      </div>
      <!-- リポートミーについて -->
      <div class="sidebar-title">
        <div class="sidebar-content" v-b-toggle.collapse-3 variant="primary"><font-awesome-icon icon="question-circle" class="icon" />マスターキーリーディングとは
          <span class="select-icon" v-show="this.about_flg === true"><font-awesome-icon icon="chevron-up" /></span>
          <span class="select-icon" v-show="this.about_flg === false"><font-awesome-icon icon="chevron-down" /></span>
        </div>
        <b-collapse id="collapse-3" class="mt-2">
          <b-link to="/about"><span class="card-text" @click="isSelect('3')" :class="{'active': isActive === '3'}">REPORT MEのコンセプト</span></b-link><br>
          <b-link to="/about"><span class="card-text" @click="isSelect('4')" :class="{'active': isActive === '4'}">使い方について</span></b-link>
        </b-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      account_accordion_flg: false,
      report_accordion_flg: false,
      about_flg: false,
      isActive: '0'
    }
  },
  methods: {
    peso() {
      console.log(this.flg)
    },
    isSelect (v) {
      this.isActive = v
    }
  },
  mounted() {
    this.$root.$on('bv::collapse::state', (collapseId, isJustShown) => {
      if (collapseId === "collapse-1") {
        this.account_accordion_flg = isJustShown
      }
      if (collapseId === "collapse-2") {
        this.report_accordion_flg = isJustShown
      }
      if (collapseId === "collapse-3") {
        this.about_flg = isJustShown
      }
    })
  }
}
</script>
<style scoped>
</style>
<style>
#dashboard-bar {
  color: #282c37;
  background: #9baec8;
  border-right: 1px solid #004e66;
  position: absolute;
  min-height: calc(100vh - 4.0625rem);
  height: calc(100% - 4.0625rem);
  width: 100%;
  left: 0;
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
  overflow-y: auto;
  text-align: left;
}
#dashboard-bar .side_menu {
    max-height: 100%;
    margin-bottom: 0;
    list-style: none;
    padding-left: 0;
}
#dashboard-bar .sidebar-top {
  padding: 1rem 1rem 2rem 1rem;
}

#dashboard-bar .sidebar-content {
    padding-left: 1rem;
    cursor: pointer;
}

#dashboard-bar .sidebar-content:hover {
    color: #007bbb;
    opacity: 0.8;
    text-decoration: none;
}

#dashboard-bar .select-icon {
  position: absolute;
  right: 1rem;
}

#dashboard-bar .icon {
  font-size: 16px;
  margin-right: 10px;
}
#dashboard-bar .mt-2 {
  margin-left: 3rem;
   cursor: pointer;

}
#dashboard-bar .sidebar-title {
  margin-bottom: 1rem;
  font-size: 12px;
}
#dashboard-bar .card-text {
  display: inline-block;
  margin: .1rem 0 .1rem 0;
  color: #282c37;
}
#dashboard-bar .card-text:hover {
    color: #007bbb;
    opacity: 0.8;
    text-decoration: none;
}
#dashboard-bar .active {
  font-weight: bold;
  color: blue;
  text-decoration:underline solid blue;
}
</style>
