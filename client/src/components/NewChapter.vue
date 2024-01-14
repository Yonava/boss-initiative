<template>
  <div class="w-full text-center bg-gray-200 flex justify-center items-center flex-col py-[150px] gap-[150px]">
    <h1 class="font-extrabold text-8xl">
      We Help Formerly Incarcerated Individuals Start A New <span class="text-blue-600">Chapter</span>
    </h1>

    <div class="flex justify-around px-[100px] w-full">
      <div
        v-for="(phase, i) in phases"
        :key="i"
        class="flex flex-col items-center"
      >
        <div :class="`text-8xl font-extrabold w-44 h-44 bg-blue-${i + 6}00 rounded-full grid place-items-center text-gray-100 shadow-xl`">
          {{ i + 1 }}
        </div>
        <h3 class="mt-5 text-3xl font-extrabold">
          {{ phase.title }}
        </h3>
      </div>
    </div>

    <div class="w-[74.5%] flex gap-12 flex-col">
      <div
        v-for="(phase, i) in phases"
        :key="i"
        class="flex w-full min-h-[400px]"
      >

        <div :class="`flex flex-col w-2/3 text-left ${i % 2 ? 'order-2' : ''}`">
          <div class="flex gap-6 w-full">
            <div
              :class="`text-8xl font-extrabold min-w-44 h-44 bg-blue-${i + 6}00 rounded-full grid place-items-center text-gray-100 shadow-xl`"
            >
              {{ i + 1 }}
            </div>
            <div class="max-w-1/3">
              <h3 class="font-light text-3xl">
                Month {{ phase.months }}
              </h3>
              <h1 class="font-extrabold text-6xl">
                {{ phase.title }}
              </h1>
            </div>
          </div>
          <p class="mt-5 text-2xl">
            {{ phase.content }}
          </p>
        </div>

        <div class="w-1/2">

        </div>

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

const phases = [
  {
    title: 'Intake and Goal Setting',
    months: '1',
    content: 'Upon intake and assessment, participants begin the process of adjusting to the program’s expectations and goal-setting objectives as they enter this life-altering phase. Empowerment coaches work closely with all participants, providing orientation and needs-assessment, and designing individualized success plans.'
  },
  {
    title: 'Career Training',
    months: '2-4',
    content: 'Participants are introduced to career opportunities and training while further developing peer-to-peer journeymen skills. The Boss Crew endeavor to beautify the streets of our Queen City/Manchester. Through stipend initiatives, participants have opportunities to improve the city streets, parks, and sidewalks, taking pride in a community that believes in them.'
  },
  {
    title: 'Workforce Transition',
    months: '5-8',
    content: 'Participants select career paths based on individual interests, ambitions, and abilities. After completing the Boss Crew work program, participants begin the transition into workforce opportunities. The Boss Crew develop their resumes and prepare for job interviews.'
  },
  {
    title: 'Extended Support',
    months:'9-12',
    content: 'The B.O.S.S. crew works closely with housing specialists and empowerment coaches to secure full-time employment and permanent housing. B.O.S.S maintains ongoing contact with graduates, providing extended career development, employment opportunities, and higher education support to those who need it.'
  }
]

</script>