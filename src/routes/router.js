import HomePage from '../components/Pages/HomePage.vue'
import AboutPage from '../components/Pages/AboutPage.vue'
import EventsPage from '../components/Pages/EventsPage.vue'
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
    path: '/events',
    component: EventsPage
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
