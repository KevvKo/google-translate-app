<script setup lang="ts">
import { ref } from 'vue';
import { store } from '@/store/store';

import SelectLanguage from './SelectLanguage.vue';
import SwitchIcon from "@/components/icons/SwitchIcon.vue"

const isRotated = ref(false);

function handleClickSwitch(){
    isRotated.value = !isRotated.value;

    const sourceLanguage = store.sourceLanguage;
    const targetLanguage = store.targetLanguage;

    store.setSourceLanguage(targetLanguage);
    store.setTargetLanguage(sourceLanguage);

}

</script>

<template>
    <div class="flex items-center justify-between">
        <SelectLanguage
            name="sourceLanguage"
            :languages="store.languages"
            :sourceLanguage="store.sourceLanguage"
        />
        <div>
            <button 
                class="ease-in duration-100 hover:bg-gray-200 active:bg-gray-300 rounded-full p-2"
                :class="{ 'rotate-180': isRotated }"
                @click="handleClickSwitch"    
            >
                <SwitchIcon />
            </button>
        </div>
        <SelectLanguage
            name="sourceLanguage"
            :languages="store.languages"
            :sourceLanguage="store.sourceLanguage"
        />
    </div>
</template>