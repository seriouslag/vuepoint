<template>
    <div
        :class="{ 'is-active': value }"
        class="modal"
    >
        <div
            class="modal-background"
            @click.self="handleBackdropClick()"
        ></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">
                    <slot name="header" />
                </p>
                <button
                    v-if="!disableClose"
                    class="delete"
                    aria-label="close"
                    @click="handleBackdropClick()"
                >
                </button>
            </header>
            <section class="modal-card-body">
                <slot />
            </section>
            <footer class="modal-card-foot">
                <slot name="footer" />
            </footer>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component
export default class Modal extends Vue {
    @Prop({
        required: true,
        default: false,
    })
    private value!: boolean;

    @Prop({
        required: false,
        default: false,
    })
    private disableClose!: boolean;

    @Emit('input')
    private handleBackdropClick() {
        if (!this.disableClose) {
            return false;
        }
    }
}
</script>

