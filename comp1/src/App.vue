<template>
  <div>
    <!-- <the-header></the-header> -->
    <TheHeader />
    <!-- <BadgeList />
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></UserInfo>
    <course-goals>
      <template  #default="slotProps">
        <h2>{{ slotProps.item }}</h2> -->
        <!-- <h2>{{ slotProps['another-prop'] }}</h2> NOT WORKING IN VUE3 --> 
        <!-- <h2>{{ slotProps.anotherProp }}</h2> 
      </template>
    </course-goals> -->
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    
    <!-- Cycle through componentns -->
    <!-- <active-goals v-if="selectiveComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectiveComponent === 'manage-goals'"></manage-goals> -->

    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>

  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
// import CourseGoals from './components/CourseGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
  components: {
    // 'the-header': TheHeader
    // TheHeader: TheHeader
    TheHeader,
    // BadgeList,
    // UserInfo,
    // CourseGoals,
    ActiveGoals,
    ManageGoals
  },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Arnas',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(comp) {
      this.selectedComponent = comp;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>