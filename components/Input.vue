<template>
  <div>
    <label>{{ label }}</label>
    <input
      :type="type || 'text'"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="border p-2 w-full mt-2 rounded-xl border-gray-200 px-4 py-3 focus:outline-none"
    />
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
