<template>
    <main class="bg-background-light dark:bg-background-dark text-white min-h-screen flex flex-col">
        <!-- Top Navigation -->
        <div class="flex items-center bg-transparent p-4 pb-2 justify-between">
            <div class="flex size-12 shrink-0 items-center justify-start">
                <Icon icon="mdi:close" class="text-white text-2xl cursor-pointer hover:opacity-70 transition" />
            </div>

            <h2 class="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
                Store Created
            </h2>
        </div>

        <!-- Main Content Area -->
        <div class="flex-1 flex flex-col items-center justify-center px-6 py-8">
            <!-- Success Icon -->
            <div class="mb-8 flex items-center justify-center">
                <div
                    class="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center glow-effect border-2 border-primary/50">
                    <Icon icon="mdi:check-circle" class="text-primary text-5xl" />
                </div>
            </div>

            <!-- Headline -->
            <h1 class="tracking-tight text-[32px] font-bold leading-tight text-center pb-2">
                {{ $route.query.name }} is Live!
            </h1>

            <p class="text-white/70 text-base font-normal leading-normal px-8 text-center mb-10">
                Congratulations! Your {{ $route.query.type }} storefront is ready to reach customers
                worldwide.
            </p>

            <!-- Profile Mockup Card -->
            <div
                class="w-full max-w-sm glass-card rounded-xl p-8 flex flex-col items-center gap-4 relative overflow-hidden">
                <div
                    class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50">
                </div>

                <!-- Avatar -->
                <div class="relative">
                    <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-24 w-24 border-4 border-background-dark/50"
                        style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAdUHSivPUhBnqHzprxpHOyHRslxPqm0ZAc33NS9dzHz1KlYgzhFFhZlZjojeJvMs_o7_L_cpi6ibx5tZV1L0j1queB9NHQENYglTlntnv273-BI9B6En79qJQ5btdgB_FxoVav4dx3OpUENwOFJQtPkRD_-9imqcNTWixNDFET7om3IKJGCo5NCBO-kCoqe47R-T8qBtl_q7_KqvhuNj4I77s_IIEusLlWXGCb3Qltu-8nuRw4LHgEyThkmcn5D7uzZ2Q5GmM6l8M");'>
                    </div>

                    <!-- Verified badge -->
                    <div
                        class="absolute bottom-1 right-1 bg-primary w-5 h-5 rounded-full border-2 border-background-dark flex items-center justify-center">
                        <Icon icon="mdi:check-decagram" class="text-black text-[10px]" />
                    </div>
                </div>

                <!-- Store Info -->
                <div class="flex flex-col items-center justify-center text-center">
                    <p class="text-2xl font-bold leading-tight tracking-[-0.015em]">
                        {{ $route.query.name }}
                    </p>

                    <p class="text-primary text-base font-medium">
                        @{{ $route.query.handle }}
                    </p>

                    <div class="flex items-center gap-1.5 mt-2 bg-primary/10 px-3 py-1 rounded-full">
                        <Icon icon="mdi:flash" class="text-primary text-xs" />
                        <p class="text-primary text-xs font-bold uppercase tracking-wider">
                            Live on The Marketplace
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bottom Action Buttons -->
        <div class="w-full p-6 pb-12">
            <div class="flex flex-col gap-3 max-w-[480px] mx-auto">
                <button
                    class="flex items-center justify-center rounded-xl h-14 px-5 bg-primary text-background-dark text-lg font-bold w-full active:scale-[0.98] transition-transform">
                    Add First Product
                </button>

                <button
                    class="flex items-center justify-center rounded-xl h-14 px-5 bg-white/5 border border-white/10 text-white text-lg font-bold w-full active:scale-[0.98] transition-transform">
                    Go to Dashboard
                </button>
            </div>
        </div>

        <!-- Background Orbs -->
        <div class="fixed top-1/4 -left-20 w-64 h-64 bg-primary/10 blur-[100px] -z-10 rounded-full"></div>
        <div class="fixed bottom-1/4 -right-20 w-80 h-80 bg-primary/5 blur-[120px] -z-10 rounded-full"></div>
    </main>
</template>
