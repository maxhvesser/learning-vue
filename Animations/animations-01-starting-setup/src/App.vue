<template>
  <router-view v-slot="slotProps">
    <transition name="fade-button" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>

export default {
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      paragraphIsVisible: false,
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    animateBlock() {
      this.animatedBlock = true;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    toggleParagraph() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    beforeEnter(element) {
      console.log('beforeEnter()');
      console.log(element);

      element.style.opacity = 0;
    },
    beforeLeave(element) {
      console.log('beforeLeave()');
      console.log(element);

      element.style.opacity = 1;
    },
    enter(element, done) {
      console.log('enter()');
      console.log(element);

      let round = 1;
      this.enterInterval = setInterval(() => {
        element.style.opacity = round * 0.1;
        round++;

        if (round > 10) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20)
    },
    afterEnter(element) {
      console.log('afterEnter()');
      console.log(element);
    },
    leave(element, done) {
      console.log('leave()');
      console.log(element);

      let round = 10;
      this.leaveInterval = setInterval(() => {
        element.style.opacity = round * 0.1;
        round--;

        if (round <= 0) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },
    afterLeave(element) {
      console.log('afterLeave()');
      console.log(element);
    },
    enterCancelled() {
      console.log('enterCancelled()');
      clearInterval(this.enterInterval);
    },
    leaveCancelled() {
      console.log('leaveCancelled()');
      clearInterval(this.leaveInterval);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}

.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /*transition: transform 0.3s ease-out;*/
}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /*transform: translateX(-150px);*/
  animation: slide-fade 0.3s ease-out forwards;
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

.route-enter-from {

}

.route-enter-active {
  animation: slide-fade 0.4s ease-out;
}

.route-enter-to {

}

.route-leave-active {
  animation: slide-fade 0.4s ease-in;
}

@Keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>