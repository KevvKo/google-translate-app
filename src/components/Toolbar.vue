<script setup lang="ts">
import { store } from '@/store/store';

</script>

<template>
    <div>
        <select name="sourceLanguage">
            <option 
                v-for="language in store.languages" 
                :selected="language === store.sourceLanguage"
                value="store.language"
            >{{ language }}</option>
        </select>
        <select name="targetLanguage">
            <option 
                v-for="language in store.languages" 
                :selected="language === store.targetLanguage"
                value="store.language"
            >{{ language }}</option>
        </select>
    </div>
</template>