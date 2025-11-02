// Lightweight API client wrapper. Configure backend base URL with VITE_API_BASE_URL
const BASE = (import.meta as any)?.env?.VITE_API_BASE_URL || "";

type ReqOpts = { method?: string; body?: any; headers?: Record<string, string> };

async function request(path: string, { method = "GET", body, headers = {} }: ReqOpts = {}) {
  const url = `${BASE}${path}`;
  const options: any = { method, headers: { "Content-Type": "application/json", ...headers } };
  // attach token automatically from localStorage if present
  try {
    const token = localStorage.getItem("token");
    if (token) options.headers.Authorization = `Bearer ${token}`;
  } catch (e) {
    // ignore localStorage errors
  }
  if (body) options.body = JSON.stringify(body);

  const res = await fetch(url, options);
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    const err = new Error(`API error ${res.status} ${res.statusText} ${text}`);
    // attach response for debugging
    // @ts-ignore
    err.status = res.status;
    throw err;
  }
  // If there's no content
  if (res.status === 204) return null;
  const data = await res.json().catch(() => null);
  return data;
}

export const api = {
  auth: {
    login: async (email: string, password: string) => request(`/api/auth/login`, { method: "POST", body: { email, password } }),
    logout: async () => request(`/api/auth/logout`, { method: "POST" }),
    register: async (email: string, password: string, name: string) => request(`/api/auth/register`, { method: "POST", body: { email, password, name } }),
    me: async () => request(`/api/auth/me`),
  },

  tasks: {
    getAll: async () => request(`/api/tasks`),
    create: async (task: any) => request(`/api/tasks`, { method: "POST", body: task }),
    update: async (id: number | string, task: any) => request(`/api/tasks/${id}`, { method: "PUT", body: task }),
    delete: async (id: number | string) => request(`/api/tasks/${id}`, { method: "DELETE" }),
  },

  courses: {
    getAll: async () => request(`/api/courses`),
    getById: async (id: number | string) => request(`/api/courses/${id}`),
  },

  config: {
    getAll: async () => request(`/api/config`),
  },

  stats: {
    get: async () => request(`/api/stats`),
  },
};
