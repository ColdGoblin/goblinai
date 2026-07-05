document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const tabs = document.querySelector(".tabs");

  if (toggle && tabs) {
    toggle.addEventListener("click", () => {
      tabs.classList.toggle("open");
    });
  }

  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".tabs a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === current) a.classList.add("active");
  });

  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const status = document.querySelector("#form-status");
      const isHebrew = document.documentElement.lang === "he";
      const submitBtn = form.querySelector(".submit");

      status.textContent = isHebrew ? "שולח..." : "Sending...";
      if (submitBtn) submitBtn.disabled = true;

      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(form),
        });
        const result = await res.json();

        if (result.success) {
          status.textContent = isHebrew
            ? "תודה! ההודעה נשלחה בהצלחה, אחזור אליך בהקדם."
            : "Thanks! Your message was sent — I'll get back to you soon.";
          form.reset();
        } else {
          throw new Error(result.message || "Submission failed");
        }
      } catch (err) {
        status.textContent = isHebrew
          ? "משהו השתבש בשליחה. אפשר לנסות שוב או לשלוח מייל ישירות ל-kirgas@gmail.com."
          : "Something went wrong. Please try again or email kirgas@gmail.com directly.";
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }

  document.querySelectorAll("details").forEach((d) => {
    d.addEventListener("toggle", () => {
      if (d.open) {
        document.querySelectorAll("details").forEach((other) => {
          if (other !== d) other.open = false;
        });
      }
    });
  });

  // Scroll-reveal animation
  const revealTargets = document.querySelectorAll(
    ".card, .case-card, .section-head, .timeline-item, .banner-photo, .logo-strip"
  );
  revealTargets.forEach((el) => el.classList.add("reveal"));

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealTargets.forEach((el) => io.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add("visible"));
  }

  // Easter egg #1: console message for curious visitors
  const isHebrew = document.documentElement.lang === "he";
  console.log(
    "%c👺 Goblin spotted in the console!",
    "font-size:16px; font-weight:bold; color:#35e6e0;"
  );
  console.log(
    isHebrew
      ? "%cמסתכלים מתחת למכסה המנוע? יפה. עידן ישמח לדבר גם עם גובלינים סקרנים: kirgas@gmail.com"
      : "%cPoking around under the hood? Nice. Idan's happy to talk to curious goblins too: kirgas@gmail.com",
    "font-size:13px; color:#b478ff;"
  );

  // Easter egg #2: click the logo 5 times for a little magic
  const logo = document.querySelector(".brand .mark");
  if (logo) {
    let clicks = 0;
    let clickTimer = null;
    logo.style.cursor = "pointer";
    logo.addEventListener("click", (e) => {
      e.preventDefault();
      clicks += 1;
      clearTimeout(clickTimer);
      clickTimer = setTimeout(() => { clicks = 0; }, 1200);
      logo.style.transition = "transform 0.4s ease";
      logo.style.transform = `rotate(${clicks * 72}deg)`;
      if (clicks >= 5) {
        clicks = 0;
        showGoblinToast(
          isHebrew ? "✨ קסם גובלינים הופעל!" : "✨ Goblin magic activated!"
        );
        logo.style.transform = "rotate(0deg)";
      }
    });
  }

  function showGoblinToast(message) {
    let toast = document.querySelector(".goblin-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "goblin-toast";
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2400);
  }
});
