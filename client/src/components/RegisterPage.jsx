
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

export default function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("Staff");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handle(e) {
    e.preventDefault();
    setError("");
    if (!agree) return setError("Please accept terms");
    if (!name || !email || !password) return setError("Please fill required fields");
    if (password !== confirm) return setError("Passwords do not match");

    setLoading(true);
    try {
      await register({ name, email, password, role });
      navigate("/");
    } catch (err) {
      setError(err?.body?.error || err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#083b9a] via-[#0e57c7] to-[#275fd6] p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-extrabold text-slate-900 text-center mb-1">
          Create Account
        </h1>
        <p className="text-center text-sm text-slate-500 mb-6">Join Hostel Manager</p>

        <form onSubmit={handle} className="space-y-4">
          <div>
            <label className="block text-sm text-slate-600 mb-1">Full Name</label>
            <input
              className="w-full border border-slate-200 rounded-lg px-4 py-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-600 mb-1">Email Address</label>
            <input
              className="w-full border border-slate-200 rounded-lg px-4 py-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-600 mb-1">Phone Number</label>
            <input
              className="w-full border border-slate-200 rounded-lg px-4 py-3"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+1234567890"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-600 mb-1">Register As</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border border-slate-200 rounded-lg px-4 py-3"
            >
              <option>Staff</option>
              <option>Administrator</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-slate-600 mb-1">Password</label>
            <input
              className="w-full border border-slate-200 rounded-lg px-4 py-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-600 mb-1">Confirm Password</label>
            <input
              className="w-full border border-slate-200 rounded-lg px-4 py-3"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              type="password"
            />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
            <div className="text-sm text-slate-600">
              I agree to the{" "}
              <a className="text-blue-600 underline" href="/terms">Terms and Conditions</a> and{" "}
              <a className="text-blue-600 underline" href="/privacy">Privacy Policy</a>
            </div>
          </div>

          {error && <div className="text-sm text-red-600">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1976ff] text-white py-3 rounded-lg font-semibold"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-slate-500">
          Already have an account? <Link to="/login" className="text-blue-600">Sign in</Link>
        </div>
      </div>
    </div>
  );
}
