// const isAuthenticatedGuard = (to,from,next)=> {
//   console.log({to,from,next})
// }

const isAuthenticatedGuard =async (to,from,next)=> {
    return new Promise(() => {
      const random = Math.random() * 100
      if(random > 50){
        console.log("Autenticado para db")
        next()
      }else{
        console.log(random , "bloqueado por el GUARD para db")
        next("/")
      }
    })
}
export default isAuthenticatedGuard