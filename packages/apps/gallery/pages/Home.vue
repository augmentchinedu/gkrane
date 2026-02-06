<template>
  <div class="min-h-screen bg-white px-6 pt-8">
    <!-- Status bar spacer -->
    <div class="h-6"></div>

    <!-- Profile header -->
    <div class="flex flex-col items-center text-center">
      <!-- Avatar -->
      <div class="relative mb-4">
        <div
          class="w-28 h-28 rounded-full bg-gradient-to-tr from-purple-500 to-blue-400 p-[3px]"
        >
          <img
            src="https://i.pravatar.cc/100"
            alt="Profile"
            class="w-full h-full rounded-full object-cover bg-white"
          />
        </div>

        <!-- Verified badge -->
        <div class="absolute -right-1 bottom-2 bg-blue-500 rounded-full p-1">
          <svg
            class="w-3 h-3 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-7.778 7.778a1 1 0 01-1.414 0L3.293 10.9a1 1 0 011.414-1.414l3.1 3.1 7.071-7.071a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>

      <!-- Name -->
      <h1 class="text-xl font-semibold text-gray-900 flex items-center gap-2">
        Raindew Menich
      </h1>

      <!-- Bio -->
      <p class="text-gray-500 text-sm max-w-xs mt-2">
        I design products and websites for startup companies
      </p>
    </div>

    <!-- Stats -->
    <div class="flex justify-between text-center mt-8">
      <div class="flex-1">
        <p class="text-2xl font-semibold text-gray-900">20</p>
        <p class="text-xs tracking-wide text-gray-400 uppercase">Posts</p>
      </div>
      <div class="w-px bg-gray-200"></div>
      <div class="flex-1">
        <p class="text-2xl font-semibold text-gray-900">120</p>
        <p class="text-xs tracking-wide text-gray-400 uppercase">Followers</p>
      </div>
      <div class="w-px bg-gray-200"></div>
      <div class="flex-1">
        <p class="text-2xl font-semibold text-gray-900">100</p>
        <p class="text-xs tracking-wide text-gray-400 uppercase">Following</p>
      </div>
    </div>

    <!-- Actions -->
    <div class="flex gap-4 mt-8">
      <button
        class="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-xl font-medium"
      >
        Follow
      </button>
      <button
        class="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-medium"
      >
        Message
      </button>
    </div>

    <!-- Tabs -->
    <div class="flex justify-around mt-10 border-b text-center">
      <button class="w-10 h-10 flex items-center justify-center text-gray-400">
        <Icon icon="material-symbols:auto-read-play" />
      </button>

      <button
        class="w-10 h-10 flex items-center justify-center text-purple-600 border-b-2 border-purple-600"
      >
        <Icon icon="material-symbols:grid-on" />
      </button>

      <button class="w-10 h-10 flex items-center justify-center text-gray-400">
        <Icon icon="material-symbols:cycle" />
      </button>

      <button class="w-10 h-10 flex items-center justify-center text-gray-400">
        <Icon icon="material-symbols:account-box" />
      </button>
    </div>

    <!-- Posts grid -->
    <div class="grid grid-cols-3 gap-3 mt-6 pb-8">
      <div
        v-for="i in 83"
        :key="i"
        class="aspect-square rounded-xl overflow-hidden bg-gray-100"
      >
        <img :src="getImg()" alt="" class="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</template>

<script setup>
function getImg() {
  return `https://picsum.photos/300/300`;
}
</script>
