<template>
    <div class="widget-editor-toolbar p-d-flex p-flex-row p-ai-center kn-flex">
        <div v-for="(option, index) in options" :key="index" class="kn-flex" style="min-height: min-content">
            <WidgetEditorStyleIcon :option="option" :prop-model="model" :disabled="disabled" @change="onChange" @openIconPicker="iconPickerDialogVisible = true"></WidgetEditorStyleIcon>
        </div>

        <WidgetEditorStyleIconPickerDialog v-if="iconPickerDialogVisible" :prop-model="model" @close="iconPickerDialogVisible = false" @save="onIconSelected"></WidgetEditorStyleIconPickerDialog>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IWidgetStyleToolbarModel, IIcon } from '@/modules/documentExecution/dashboard/Dashboard'
import WidgetEditorStyleIcon from './WidgetEditorStyleIcon.vue'
import WidgetEditorStyleIconPickerDialog from './WidgetEditorStyleIconPickerDialog.vue'

export default defineComponent({
    name: 'widget-editor-style-toolbar',
    components: { WidgetEditorStyleIcon, WidgetEditorStyleIconPickerDialog },
    props: { options: { type: Array as PropType<any[]>, required: true }, propModel: { type: Object as PropType<IWidgetStyleToolbarModel>, required: true }, disabled: { type: Boolean } },
    emits: ['change'],
    data() {
        return {
            model: null as IWidgetStyleToolbarModel | null,
            iconPickerDialogVisible: false
        }
    },
    watch: {
        propModel() {
            this.loadModel()
        }
    },
    created() {
        this.loadModel()
    },
    methods: {
        loadModel() {
            this.model = { ...this.propModel }
        },
        onChange() {
            this.$emit('change', this.model)
        },
        onIconSelected(icon: IIcon) {
            if (this.model) this.model.icon = icon.className
            this.iconPickerDialogVisible = false
            this.$emit('change', this.model)
        }
    }
})
</script>

<style lang="scss" scoped>
.widget-editor-toolbar {
    border: 1px solid #c2c2c2;
    border-radius: 3px;
    width: 100%;
    min-height: 40px;
}
</style>
