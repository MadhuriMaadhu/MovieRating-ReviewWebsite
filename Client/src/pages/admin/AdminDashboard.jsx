
import AdminShowMovies from "./AdminShowMovies";

export default function AdminDashboard() {


  return (

    <div className="border-2 border-red-600 mx-2 mt-5">
       <h3 className="text-3xl font-bold text-red-600 pt-5 custom-text-shadow">WELCOME TO ADMIN DASHBOAD</h3>
      <section>
        <AdminShowMovies />
      </section>
    </div>
  )
}
