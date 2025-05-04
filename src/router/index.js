import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/HomeView.vue'),
      meta: {
        title: 'Home',
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: {
        title: 'Login',
      },
    },
    {
      path: '/:catchAll(.*)', //Catches all undefined Routes
      name: 'NotFound',
      component: () => import('../views/NotFound.vue'), 
      meta: {
        title: '404 Page Not Found!'
      }
    },
  ],
})

router.beforeEach((to, from, next) => {
    // Check if the route has a title in the meta field
    if (to.meta.title) {
      document.title = to.meta.title; // Set the document title
    } else {
      document.title = 'Default Title'; // Fallback title if no title is set
    }
    next(); // Proceed to the next middleware or route
});
export default router
