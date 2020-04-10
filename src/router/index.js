import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'

import AboutIcwrer from '@/pages/aboutIcwrer/aboutIcwrer'
import AboutIcwrerKeynoteSpeakers from '@/pages/aboutIcwrer/aboutIcwrerKeynoteSpeakers'
import AboutIcwrerCommittes from '@/pages/aboutIcwrer/aboutIcwrerCommittes'
import AboutIcwrerConferenceVenue from '@/pages/aboutIcwrer/aboutIcwrerConferenceVenue'

import Submissions from '@/pages/submissions/submissions'
import SubmissionsTopics from '@/pages/submissions/submissionsTopics'
import SubmissionsPublications from '@/pages/submissions/submissionsPublications'

import Agenda from '@/pages/agenda'
import Registration from '@/pages/registration'
import HotelAndTravel from '@/pages/hotelAndTravel'
import ContacUs from '@/pages/contacUs'

Vue.use(Router)

export default new Router({
  // 指定自定义class
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/aboutIcwrer',
      name: 'AboutIcwrer',
      component: AboutIcwrer
    },
    {
      path: '/submissions',
      name: 'Submissions',
      component: Submissions
    },
    {
      path: '/agenda',
      name: 'Agenda',
      component: Agenda
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/hotelAndTravel',
      name: 'HotelAndTravel',
      component: HotelAndTravel
    },
    {
      path: '/contacUs',
      name: 'ContacUs',
      component: ContacUs
    },


    {
      path: '/aboutIcwrerKeynoteSpeakers',
      name: 'AboutIcwrerKeynoteSpeakers',
      component: AboutIcwrerKeynoteSpeakers
    },
    {
      path: '/aboutIcwrerCommittes',
      name: 'AboutIcwrerCommittes',
      component: AboutIcwrerCommittes
    },
    {
      path: '/aboutIcwrerConferenceVenue',
      name: 'AboutIcwrerConferenceVenue',
      component: AboutIcwrerConferenceVenue
    },

    {
      path: '/submissionsTopics',
      name: 'SubmissionsTopics',
      component: SubmissionsTopics
    },
    {
      path: '/submissionsPublications',
      name: 'SubmissionsPublications',
      component: SubmissionsPublications
    },
  ]
})
