
document.addEventListener("DOMContentLoaded", () => {
  fetch("/includes/header.html")
    .then(r => r.text())
    .then(html => {
      const h = document.getElementById("header");
      if (h) h.innerHTML = html;
    });

  fetch("/includes/footer.html")
    .then(r => r.text())
    .then(html => {
      const f = document.getElementById("footer");
      if (f) f.innerHTML = html;
    });

  const supabaseUrl = "https://uwnongvbesdmztixsfnl.supabase.co";
  const supabaseAnonKey = "YOUR_PUBLIC_ANON_KEY";
  window.supabase = window.supabase.createClient(supabaseUrl, supabaseAnonKey);
});
