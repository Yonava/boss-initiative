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

const prisonRates = [{
    year: 1980,
    value: 450,
  },
  {
    year: 1985,
    value: 730,
  },
  {
    year: 1990,
    value: 1260,
  },
  {
    year: 1995,
    value: 2110,
  },
  {
    year: 2000,
    value: 2340,
  },
  {
    year: 2005,
    value: 2460,
  },
  {
    year: 2010,
    value: 2745,
  },
  {
    year: 2015,
    value: 2745,
  },
  {
    year: 2020,
    value: 2300,
}] as const


type PrisonRate = typeof prisonRates[number]
type Year = PrisonRate['year']
type PrisonPopulation = typeof prisonPopulation[number]

export const useDataStore = defineStore('data', () => {
  const selectedPrisonPopulation = ref<PrisonPopulation | null>(null)
  const setSelectedPrisonPopulation = (value: PrisonPopulation | null) => {
    selectedPrisonPopulation.value = value
  }

  const selectedYear = ref<Year | null>(null)
  const setSelectedYear = (value: Year | null) => {
    selectedYear.value = value
  }

  return {
    prisonPopulation,
    selectedPrisonPopulation,
    setSelectedPrisonPopulation,
    selectedYear,
    setSelectedYear,
    prisonRates,
  }
})
