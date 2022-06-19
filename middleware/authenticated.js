export default function ({ $auth, redirect }) {
  //check loggedIn "true"
  if ($auth.loggedIn) {
    //check role admin
    if ($auth.strategy.name == "admin") {
      return redirect("/admin/dashboard");
    }
  }
}
