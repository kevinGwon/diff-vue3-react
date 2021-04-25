<template>
  <form @submit="onSubmit">
    <fieldset>
      <legend>State</legend>
      <div
        v-for="(state, index) in ['ongoing', 'pending', 'ended']"
        :key="index"
      >
        <label :for="state">{{ state }}</label>
        <input
          type="checkbox"
          :id="state"
          :value="state"
          :checked="selectedStates.includes(state)"
          @click="onChangeStates"
        />
      </div>
      <br />
      <strong>Selected: {{ params.state }}</strong>
    </fieldset>
    <fieldset>
      <legend>Category</legend>
      <div
        v-for="(category, index) in ['cooking', 'hair', 'design']"
        :key="index"
      >
        <label :for="category">{{ category }}</label>
        <input
          type="checkbox"
          :id="category"
          :value="category"
          :checked="selectedCategorys.includes(category)"
          @click="onChangeCategorys"
        />
      </div>
      <br />
      <strong>Selected: {{ params.category }}</strong>
    </fieldset>
    <br />
    <button type="submit">전송</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import useQueryParams from '@/hooks/useQueryParams';

export default {
  name: 'Params',
  setup() {
    const params = useQueryParams();

    const selectedStates = ref(params.state ? params.state.split(',') : []);

    const selectedCategorys = ref(
      params.category ? params.category.split(',') : []
    );

    const onChangeStates = (event) => {
      const category = event.target.id;

      selectedStates.value = selectedStates.value.includes(category)
        ? selectedStates.value.filter((item) => item !== category)
        : [...selectedStates.value, category];

      params.state = selectedStates.value.join(',');
    };

    const onChangeCategorys = (event) => {
      const category = event.target.id;

      selectedCategorys.value = selectedCategorys.value.includes(category)
        ? selectedCategorys.value.filter((item) => item !== category)
        : [...selectedCategorys.value, category];

      params.category = selectedCategorys.value.join(',');
    };

    const onSubmit = (event) => {
      event.preventDefault();
      console.log(params);
    };

    return {
      params,
      selectedCategorys,
      selectedStates,
      onChangeCategorys,
      onChangeStates,
      onSubmit,
    };
  },
};
</script>

<style></style>
