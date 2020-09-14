// let header = {};
// const token = "";

export function call_setToken() {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${window.localStorage.getItem("token")}`,
  };
}

export async function call_getSoftwares() {
  const headers = call_setToken();

  const res = await fetch("/api/softwares", {
    headers,
  });

  if (res.status > 299) {
    return Promise.reject("not authorised to read this page");
  }

  return await res.json();
}


export async function call_deleteSoftwares() {
  const headers = call_setToken();

  const res = await fetch("/api/softwares", {
    headers,
  });

  if (res.status > 299) {
    return Promise.reject("not authorised to read this page");
  }

  return await res.json();
}
export async function call_login(data) {
  const response = await fetch(`/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  console.log("response logging", response);

  if (response.status > 300) {
    return Promise.reject("incorrect login");
  }

  return await response.json();
}

export async function call_signUp(data) {
  const response = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status > 300) {
    return Promise.reject("incorrect login");
  }

  return await response.json();
}
