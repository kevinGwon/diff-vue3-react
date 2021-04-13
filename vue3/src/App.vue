<template>
  <div v-for="(label, index) in stateLabels" :key="index">
    <label :for="label">{{ label }}</label>
    <input type="checkbox" :value="label" @click="onChangeStates" :id="label" />
  </div>
  <br />
  <br />
  <br />
  <div v-for="(label, index) in categoryLabels" :key="index">
    <label :for="label">{{ label }}</label>
    <input
      type="checkbox"
      :value="label"
      @click="onChangeCategorys"
      :id="label"
    />
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, watchEffect } from 'vue';
import { useQueryParams } from './hooks/useQueryParams';

export default {
  name: 'App',
  setup() {
    const { params } = useQueryParams();

    const stateLabels = ['ongoing', 'pending', 'ended'];
    const selectedCategorys = ref([]);

    const categoryLabels = ['cooking', 'hair', 'design'];
    const selectedStates = ref([]);

    const onChangeCategorys = (event) => {
      const category = event.target.id;
      selectedCategorys.value = !selectedCategorys.value.includes(category)
        ? [...selectedCategorys.value, category]
        : selectedCategorys.value.filter((item) => item !== category);

      params.value = {
        ...params.value,
        category: selectedCategorys.value.join(','),
      };
    };

    const onChangeStates = (event) => {
      const category = event.target.id;
      selectedStates.value = !selectedStates.value.includes(category)
        ? [...selectedStates.value, category]
        : selectedStates.value.filter((item) => item !== category);

      params.value = {
        ...params.value,
        state: selectedStates.value.join(','),
      };
    };

    return {
      stateLabels,
      categoryLabels,
      selectedCategorys,
      selectedStates,
      onChangeCategorys,
      onChangeStates,
    };
  },
};
</script>

<style></style>
