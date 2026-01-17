
window.dataSdk = {
  async init(handler){
    const res = await fetch("/api/data");
    const data = await res.json();
    handler.onDataChanged(data);
    return { isOk: true };
  },
  async create(obj){
    const res = await fetch("/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj)
    });
    return res.ok ? { isOk: true } : { isOk: false };
  }
};
