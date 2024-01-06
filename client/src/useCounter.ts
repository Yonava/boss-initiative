import {
  watch,
  ref,
  type Ref
} from 'vue'

export const useCounter = (inputNumber: Ref<number>, durationMs: number = 500) => {
  const outputNumber = ref(inputNumber.value)
  const exactNumber = ref(inputNumber.value)
  let tick: ReturnType<typeof setInterval>

  const runAnimation = (newValue: number, oldValue: number) => {

    const change = newValue - oldValue
    if (change === 0) return

    clearInterval(tick)
    const incrementBy = change / durationMs * 10
    const withinMargin = (a: number, b: number, margin = incrementBy) => Math.abs(a - b) < Math.abs(margin)

    tick = setInterval(() => {
      exactNumber.value += incrementBy
      outputNumber.value = Math.round(exactNumber.value)
      if (withinMargin(exactNumber.value, newValue)) {
        outputNumber.value = newValue
        clearInterval(tick)
      }
    }, 10)
  };

  watch(inputNumber, runAnimation)

  return outputNumber
}
