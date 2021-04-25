<template>
  <form @submit="onSubmit">
    <fieldset>
      <legend>User</legend>
      <div class="input-item">
        <label for="name">name</label>
        <input type="text" id="name" v-model="form.name" />
      </div>
      <div class="input-item">
        <label for="age">age</label>
        <input type="text" id="age" v-model="form.age" />
      </div>
      <div class="input-item">
        <label for="address">address</label>
        <input type="text" id="address" v-model="form.address" />
      </div>
    </fieldset>
    <br />
    <button type="submit">전송</button>
  </form>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'Inputs',
  setup() {
    const form = reactive({
      name: '',
      age: '',
      address: '',
    });
    const onSubmit = (event) => {
      event.preventDefault();
      console.log(form);
    };
    return { form, onSubmit };
  },
};
</script>

<style></style>
