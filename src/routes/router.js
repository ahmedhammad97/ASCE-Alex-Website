import HomePage from '../components/Pages/HomePage.vue'
import AboutPage from '../components/Pages/AboutPage.vue'
import ConferencePage from '../components/Pages/Events/Conference.vue'
import VisitsPage from '../components/Pages/Events/Visits.vue'
import SeminarsPage from '../components/Pages/Events/Seminars.vue'
import CoursesPage from '../components/Pages/Events/Courses.vue'
import CompetitionsPage from '../components/Pages/Events/Competitions.vue'
import ActivitiesPage from '../components/Pages/Events/Activities.vue'
import VolunteersPage from '../components/Pages/VolunteersPage.vue'
import MagazinePage from '../components/Pages/MagazinePage.vue'
import NotFoundPage from '../components/Pages/NotFoundPage.vue'

export default [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/events/conference',
    component: ConferencePage
  },
  {
    path: '/events/visits',
    component: VisitsPage
  },
  {
    path: '/events/seminars',
    component: SeminarsPage
  },
  {
    path: '/events/courses',
    component: CoursesPage
  },
  {
    path: '/events/competitions',
    component: CompetitionsPage
  },
  {
    path: '/events/activities',
    component: ActivitiesPage
  },
  {
    path: '/volunteers',
    component: VolunteersPage
  },
  {
    path: '/magazine',
    component: MagazinePage
  },
  {
    path: '*',
    component: NotFoundPage
  }
]
