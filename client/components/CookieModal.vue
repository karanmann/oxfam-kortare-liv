<script setup>

import { onMounted, ref } from 'vue'

const emit = defineEmits(['close', 'accept', 'decline'])
const showModal = ref(false)
const COOKIE_NAME = 'gtm'
const cookiesStatus = ref({
  analytics: true
})

onMounted(() => {
  // Parse stored cookies looking for saved preferences
  const cookieStrings = document.cookie.split(';')
  const keyValPairs = cookieStrings.map(str => str.trim().split('='))
  const consentCookie = keyValPairs.find(([key]) => key === COOKIE_NAME)

  if (consentCookie) {
    cookiesStatus.value = JSON.parse(consentCookie[1])
    emit('accept', cookieStrings.value)
    emit('close')
  }

  // Prevent showing modal until cookies are searched
  showModal.value = true
})

const close = () => {
  emit('close')
}

const accept = (value) => {
  // Save preferences to cookie
  document.cookie = `${COOKIE_NAME}=${JSON.stringify(
    cookiesStatus.value
  )}; expires=Fri, 31 Dec 2099 23:59:59 GMT;`

  emit('accept', value)
  close()
}

const decline = () => {
  emit('decline', cookiesStatus.value)
  close()
}

</script>

<template>
  <transition name="modal-fade">
    <div v-if="showModal" class="modal-backdrop">
      <div
        class="cookie_modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <section id="modalDescription" class="modal-body">
          <p>
            {{ $t("cookies_integritetspolicy_copy") }} <span><a class="integritetspolicy" :href=" $t('cookies_integritetspolicy')" target="_blank">integritetspolicy</a></span>.
          </p>
        </section>

        <div class="btn-group">
          <Button
            class="btn-accept"
            aria-label="Accept cookies"
            @click="accept"
          >
            <h3 class="btn-tillat">
              Tillåt cookies
            </h3>
          </Button>
          <Button
            class="btn-decline"
            aria-label="Decline cookies"
            @click="decline"
          >
            <h3 class="btn-avvisa">
              Avvisa cookies
            </h3>
          </Button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #c6c6c64d;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.cookie_modal {
  width: 100%;
  background: #ffffff;
  box-shadow: #c0c0c195 0px 7px 29px 0px;
  overflow-x: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.modal-body {
  position: relative;
  color: black;
  text-align: center;
  padding: 20px 30px;
  padding: 30px 40px 10px 40px;
}

.modal-body > p {
  font-family: 'roboto';
  font-weight: 100;
  font-size: 0.85rem;
  max-width: 600px;
  line-height: 16px;
}

.integritetspolicy {
  font-family: 'roboto';
  font-size: 0.9rem;
}

.btn-group  {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
}

.btn-group button {
  padding: 15px 30px;
  margin: 10px;
  cursor: pointer;
  width: 280px;
}

.btn-tillat {
  font-size: 0.9rem;
  color: white;
}

.btn-avvisa {
  font-size: 0.9rem;
}

.btn-accept {
  color: white;
  background: black;
  border: 1px solid black;
  border-radius: 4px;
}

.btn-decline {
  color: black;
  background: white;
  border: 1px solid black;
  border-radius: 4px;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0.2;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}

label {
  color: black;
}
</style>
