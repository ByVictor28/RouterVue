import { createRouter,createWebHashHistory } from "vue-router"


import ListPage from "@/modules/pokemon/pages/ListPage"
import PokemonPage from "@/modules/pokemon/pages/PokemonPage"
import NoPageFound from "@/modules/shared/pages/NoPageFound"
import isAuthenticatedGuard from "./auth-guard"


const routes = [
  { 
    path: '/', 
    redirect:"/pokemon"
  },
  {
    path:"/pokemon",
    component: () => import(/*webpackChunkName: "PokemonLayout" */ "@/modules/pokemon/layouts/PokemonLayout"),
    children:[
      { 
        path: 'home', 
        component: ()=>import(/*webpackChunkName: "ListPage" */ "@/modules/pokemon/pages/ListPage")
      },
      { 
        path: 'about', 
        component: ()=>import(/*webpackChunkName: "AboutPage" */ "@/modules/pokemon/pages/AboutPage") 
      },
      { 
        path: 'pokemon/:id', 
        component:()=>import(/*webpackChunkName: "DetailsPage" */ "@/modules/pokemon/pages/PokemonPage"),
        props:(route)=>{
          console.log(route)
          // lo que se ret orna son las properties del componente
          const {id} = route.params
          return {
            idPokemon:isNaN(Number(id))?1:Number(id),
          }
        }
      },

    ]
  },
  {
    path:"/dragonball",
    component:()=>import( /*webpackChunckName: "DBZLayout" */ "@/modules/dbz/layouts/DragonBallLayout"),
    beforeEnter:[ isAuthenticatedGuard ],
    children:[
      {
        path:"about",
        component:()=>import(/*webpackChunckName:"DBZAboutPage"*/ "@/modules/dbz/pages/About")
      },{
        path:"characters",
        component:()=>import(/* webpackChunckName:"DBZCharacterPage" */ "@/modules/dbz/pages/Characters")
      }
    ]
  },
  { 
    path: '/:pathMatch(.*)*', 
    component:()=>import(/*webpackChunkName: "NotFoundPage" */ "@/modules/shared/pages/NoPageFound")
  }
]

const router =createRouter({
  history: createWebHashHistory(),
  routes, 
})

// GUARD GLOBAL - SINCRONO
// router.beforeEach((to,from,next) => {
//   const random = Math.random() * 100
//   if(random > 50){
//     console.log("Autenticado")
//     next()
//   }else{
//     console.log(random , "bloqueado por el GUARD")
//     next("/")
//   }
// })


// GUARD GLOBAL - ASINCRONO
// const canAcces = () => {
//   return new Promise(resolve => {
//     const random = Math.random() * 100
//     if(random > 50){
//       console.log("Autenticado")
//       resolve(true)
//     }else{
//       console.log(random , "bloqueado por el GUARD")
//       resolve(false)
//     }
//   })

// }


// router.beforeEach( async (to,from,next)=> {
//   const authorized = await canAcces()

//   authorized ? next():next("/")

// })
export default router