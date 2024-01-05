import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const prisonPopulation = [{
  name: "Jail",
  value: 1600,
  color: "#FFF000",
},
{
  name: "Parole",
  value: 2000,
  color: "#A4E51B",
},
{
  name: "State Prison",
  value: 2100,
  color: "#E23110",
},
{
  name: "Probation",
  value: 3600,
  color: "#FF7A1A",
},
{
  name: "Federal Prison",
  value: 420,
  color: "#FF0000",
}] as const

type PrisonPopulation = typeof prisonPopulation[number]

export const useDataStore = defineStore('data', () => {
  const selectedPrisonPopulation = ref<PrisonPopulation | null>(null)
  const setSelectedPrisonPopulation = (value: PrisonPopulation | null) => {
    selectedPrisonPopulation.value = value
  }

  return {
    prisonPopulation,
    selectedPrisonPopulation,
    setSelectedPrisonPopulation,
  }
})
