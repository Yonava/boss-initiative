import {
  watch,
  ref,
  type Ref
} from 'vue'

export const useCounter = (inputNumber: Ref<number>, durationMs: number = 700) => {
  const outputNumber = ref(inputNumber.value)
  const exactNumber = ref(inputNumber.value)

  const runAnimation = (newValue: number, oldValue: number) => {
    const change = newValue - oldValue
    const updateIntervalMs = 10
    const incrementBy = change / durationMs * updateIntervalMs

    for (let i = 0; i < durationMs / updateIntervalMs; i++) {
      setTimeout(() => {
        exactNumber.value += incrementBy
        outputNumber.value = Math.round(exactNumber.value)
      }, updateIntervalMs * i)
    }

    outputNumber.value = newValue
  };

  watch(inputNumber, runAnimation)

  return outputNumber
}
