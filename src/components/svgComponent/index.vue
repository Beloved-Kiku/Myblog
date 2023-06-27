<template>
<div class="box" style="width: 20px; height: 20px;">
        <svg aria-hidden="true" style="width: 100%; height: 100%;" >
            <use :xlink:href="symbolId" :fill="color" />
        </svg>
</div>
</template>
<script setup lang="ts">
import  {computed} from 'vue'
const props =  defineProps({
    prefix: {
        type: String,
        default:'icon'
    },
    name:{
        type:String,
        required:true,
    },
    color:{
        type:String,
        default:"#333"
    }
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
console.log(symbolId);

</script>