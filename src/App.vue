<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Динамческие и асинхронные компоненты</h2>

      <app-button
        :color="oneColor"
        @action="active = 'one'"
      >One
      </app-button>
      <app-button
        :color="twoColor"
        @action="active = 'two'"
      >Two
      </app-button>
    </div>
    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>
  </div>
</template>

<script>
import AppTextOne from '@/components/AppTextOne'
import AppTextTwo from '@/components/AppTextTwo'
import AppMixin from '@/mixins/AppMixin'

export default {
  mixins: [AppMixin],
  components: {
    AppTextOne,
    AppTextTwo
  }
}
</script>

<style>
</style>
