import { useCookie } from '#app'

// Exercice redirection !
// ne pas tout commenter sinon fail
export default defineNuxtRouteMiddleware((to, from) => {
  console.log("middleware !!")
  const lastVisitCookieName = 'lastVisitDate'

  // On récupère la date actuelle locale (année-mois-jour)
  const today = new Date().toLocaleDateString()

  // Lecture du cookie, disponible côté serveur et client
  const lastVisitDate = useCookie(lastVisitCookieName).value

  // Si pas encore visité aujourd'hui, on redirige vers /welcome
  if (lastVisitDate !== today) {
    // On met à jour le cookie avec la date du jour
    useCookie(lastVisitCookieName).value = today

    // Pour éviter boucle de redirection
    if (to.path !== '/welcome') {
      return navigateTo('/welcome')
    }
  }

  // Sinon on laisse passer
})
