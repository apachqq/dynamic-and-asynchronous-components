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
import AppButton from './AppButton'
import AppTextOne from './AppTextOne'
import AppTextTwo from './AppTextTwo'

export default {
  data () {
    return {
      active: 'one' // two
    }
  },
  computed: {
    // componentName () {
    //   return 'app-text-' + this.active
    // },
    componentName: {
      get () {
        return 'app-text-' + this.active
      },
      set (value) {

      }
    },
    oneColor () {
      return this.active === 'one' ? 'primary' : ''
    },
    twoColor () {
      return this.active === 'two' ? 'primary' : ''
    }
  },
  components: {
    AppButton,
    AppTextOne,
    AppTextTwo
  }
}
</script>

<style>
  hr {
    margin: 1rem 0;
  }

  strong,
  .bold {
    font-weight: 500;
  }

  ol,
  p,
  ul {
    line-height: 1.7;
  }

  a {
    color: #3eaf7c;
    font-weight: 500;
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
    line-height: 1.45;
  }

  h1 {
    font-size: 2.2rem;
    font-weight: 600;
  }

  h2 {
    font-size: 1.65rem;
    padding-bottom: 0.3rem;
    border-bottom: 1px solid #eaecef;
  }

  h3 {
    font-size: 1.35rem;
  }

  .primary {
    color: #42b983;
  }

  .btn {
    color: #42b983;
    position: relative;
    place-content: center;
    place-items: center;
    width: fit-content;
    border-radius: 99px;
    letter-spacing: 0.05em;
    border: 1px solid #42b983;
    text-decoration: none;
    text-transform: uppercase;
    margin-right: 10px;
    padding: 0.5rem 1.5rem;
    white-space: nowrap;
    font-weight: 700;
    outline: none;
    background: #fff;
    transition: all 0.22s;
  }

  .btn:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  .btn:active {
    box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
  }

  .btn.primary {
    background: #42b983;
    color: #fff;
  }

  .btn.warning {
    background: #c25205;
    color: #fff;
    border-color: #c25205;
  }

  .container {
    margin: 0 auto;
    max-width: 1000px;
  }

  .pt-1 {
    padding-top: 1rem;
  }

  .form-control input {
    margin: 0;
    outline: none;
    border: 2px solid #ccc;
    display: block;
    width: 100%;
    color: #2c3e50;
    padding: 0.5rem 1.5rem;
    border-radius: 3px;
    font-size: 1rem;
  }

  .form-control label {
    display: block;
    margin: 0 0 0.3rem 0.3rem;
    font-weight: 500;
  }

  .form-control input:active,
  .form-control input:focus {
    transition: border 0.22s;
    border: 2px solid #42b983;
  }

  .card {
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 10px;
    box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
    background: #fff;
  }

  .card.marked {
    border: 4px solid #42b983;
  }

  .card.center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

</style>
