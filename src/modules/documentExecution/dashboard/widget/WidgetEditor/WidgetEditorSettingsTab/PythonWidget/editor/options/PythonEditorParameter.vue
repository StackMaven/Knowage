<template>
    <div class="p-field">
        <span class="p-float-label">
            <Dropdown v-model="selectedDriver" class="kn-material-input" :options="drivers" option-value="urlName" option-label="name" @change="onDriverValueChanged"> </Dropdown>
            <label class="kn-material-input-label"> {{ $t('common.parameter') }}</label>
        </span>
    </div>
</template>

<script lang="ts">
import { IDashboardDriver } from '@/modules/documentExecution/dashboard/Dashboard'
import { mapActions } from 'pinia'
import { defineComponent } from 'vue'
import dashboardStore from '@/modules/documentExecution/dashboard/Dashboard.store'
import Dropdown from 'primevue/dropdown'

export default defineComponent({
    name: 'python-editor-parameter',
    components: { Dropdown },
    props: { dashboardId: { type: String, required: true } },
    emits: ['insertChanged'],
    data() {
        return {
            selectedDriver: '',
            drivers: [] as IDashboardDriver[]
        }
    },
    created() {
        this.loadDrivers()
    },
    methods: {
        ...mapActions(dashboardStore, ['getDashboardDrivers']),
        loadDrivers() {
            this.drivers = this.getDashboardDrivers(this.dashboardId)
        },
        onDriverValueChanged() {
            const forInsert = `$P{${this.selectedDriver}}`
            this.$emit('insertChanged', forInsert)
        }
    }
})
</script>
