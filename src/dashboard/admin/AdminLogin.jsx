
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginSchema } from "../utils/loginSchema";

export default function AdminLogin() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (values) => {
    try {
      const { data } = await axios.get("http://localhost:5002/users");
      const user = data.find(
        (u) => u.email === values.email && u.password === values.password
      );
     

      if (user) {
        localStorage.setItem("authenticated", "true");
        navigate("/admin", { replace: true });
      } else {
        alert("Invalid email or password");
      }
    } catch (err) {
      console.error(err);
      alert("Server error — please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-2xl shadow-lg w-[600px] text-center"
      >
        <h1 className="text-3xl font-bold mb-6">Admin Login</h1>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="w-full p-4 border rounded-lg focus:outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="w-full p-4 border rounded-lg focus:outline-none"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 disabled:opacity-50"
        >
          {isSubmitting ? "Logging in…" : "Submit"}
        </button>
      </form>
    </div>
  );
}
