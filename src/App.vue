<template>
  <div>
    <md-steppers :md-active-step.sync="active" md-linear>
      <md-step id="first" md-label="First Step" md-description="Optional" :md-done.sync="first">
        <md-field :class="messageClass">
          <label>Full Name</label>
          <md-input v-model.trim="fullName" placeholder="write your full name" required></md-input>
          <span class="md-error">This is required field</span>
        </md-field>

        <md-field :class="messageClass">
          <label>Your Birthday</label>
          <md-input v-model.trim="birthday" placeholder="write your birthday" required></md-input>
          <span class="md-error">This is required field</span>
        </md-field>

        <md-button class="md-raised md-primary" @click="setDone('first', 'second')">Continue</md-button>
      </md-step>

      <md-step id="second" md-label="Second Step" :md-error="secondStepError" :md-done.sync="second">
        <md-button class="md-raised md-primary" @click="setDone('second', 'third')">Continue</md-button>
        <md-button class="md-raised md-primary" @click="setError()">Set error!</md-button>
      </md-step>

      <md-step id="third" md-label="Third Step" :md-done.sync="third">
        <md-button class="md-raised md-primary" @click="setDone('third')">Done</md-button>
      </md-step>
    </md-steppers>
  </div>
</template>

<script>
export default {
  name: 'StepperLinear',
  data: () => ({
    active: 'first',
    first: false,
    second: false,
    third: false,
    secondStepError: null,
    fullName: '',
    birthday: '',
    hasMessages: false,
  }),
  methods: {
    setDone (id, index) {
      this[id] = true

      this.secondStepError = null

      if (index) {
        this.active = index
      }
    },
    setError () {
      this.secondStepError = 'This is an error!'
    },
  },
  computed: {
    messageClass () {
      return {
        'md-invalid': this.hasMessages
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.md-steppers {

}
</style>