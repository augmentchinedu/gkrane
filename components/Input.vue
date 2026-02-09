<template>
  <div>
    <label>{{ label }}</label>
    <input :type="type || 'text'" :placeholder="placeholder" :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class=" w-full border p-2 px-4 mt-2 rounded-sm py-3 focus:outline-none" />
  </div>
</template>

<script setup>
defineProps({
  label: String,
  placeholder: String,
  type: String,
  modelValue: String,
});
</script>
