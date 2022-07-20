export function initLocalStorage() {
  localStorage.setItem("users", JSON.stringify([
    {
      userName: "admin",
      email: "admin@admin.com"
    }
  ]))

}
export function setUser(user){
  localStorage.setItem("user", JSON.stringify(user))
}

export function deleteUser(){
  localStorage.removeItem("user")
}
