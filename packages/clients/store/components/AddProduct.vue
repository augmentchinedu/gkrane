<template>
    <div class="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-end" @click.self="$emit('close')">
        <div class="w-full bg-background-dark rounded-t-3xl p-6 pb-10 animate-slide-up">
            <!-- HEADER -->
            <div class="flex items-center justify-between mb-6">
                <h2 class="text-lg font-bold text-white">Add Product</h2>
                <button class="w-9 h-9 rounded-full glass-card flex items-center justify-center"
                    @click="$emit('close')">
                    ✕
                </button>
            </div>

            <div class="space-y-6">
                <!-- PRODUCT NAME -->
                <input class="w-full glass-card p-4 rounded-xl text-white outline-none" placeholder="Product name" />

                <!-- PRICE -->
                <input class="w-full glass-card p-4 rounded-xl text-white outline-none" placeholder="Price"
                    type="number" />

                <!-- PRODUCT TYPE -->
                <div>
                    <p class="text-xs font-bold text-white/50 uppercase tracking-widest mb-3">
                        Product Type
                    </p>

                    <div class="flex flex-wrap gap-2">
                        <button v-for="type in types" :key="type" @click="selectedType = type"
                            class="px-4 py-2 rounded-full text-sm font-semibold transition-all" :class="selectedType === type
                                ? 'bg-primary text-background-dark'
                                : 'glass-card text-white/60'
                                ">
                            {{ type }}
                        </button>

                        <!-- ADD TYPE BUTTON -->
                        <button v-if="!showAddType" @click="showAddType = true"
                            class="px-4 py-2 rounded-full glass-card text-primary font-bold">
                            + Add type
                        </button>
                    </div>

                    <!-- ADD TYPE INPUT -->
                    <div v-if="showAddType" class="flex gap-2 mt-3">
                        <input v-model="newType" class="flex-1 glass-card p-3 rounded-xl text-white outline-none"
                            placeholder="New type" @keyup.enter="addType" />
                        <button @click="addType" class="px-4 rounded-xl bg-primary text-background-dark font-bold">
                            Add
                        </button>
                    </div>
                </div>

                <!-- SAVE -->
                <button class="w-full bg-primary text-background-dark py-4 rounded-xl font-bold"
                    :disabled="!selectedType">
                    Save Product
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from '@/store/index.js'

defineEmits(['close'])

const { store } = useStore()

const types = ref([
    'Digital',
    'Physical',
    'Service',
])

const selectedType = ref(null)
const showAddType = ref(false)
const newType = ref('')

async function addType() {
    if (!newType.value.trim()) return

    const value = newType.value.trim()

    if (!types.value.includes(value)) {
        await store.addProductType(value)
        types.value.push(value)
    }

    selectedType.value = value
    newType.value = ''
    showAddType.value = false
}
</script>

<style scoped>
@keyframes slide-up {
    from {
        transform: translateY(100%);
    }

    to {
        transform: translateY(0);
    }
}

.animate-slide-up {
    animation: slide-up 0.25s ease-out;
}
</style>
