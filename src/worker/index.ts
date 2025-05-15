import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.html(`
<script>
document.addEventListener("DOMContentLoaded", function () {
    const oldURL = 'https://crawler.tachthongtin.com/youtube?isRedirect=true&url=';
    const newURL = 'https://giare68.com/wp-content/youtube.php?url=';

    // Thay thế trong <a href="">
    document.querySelectorAll('a[href]').forEach(el => {
        if (el.href.includes(oldURL)) {
            el.href = el.href.replace(oldURL, newURL);
        }
    });

    // Thay trong nội dung HTML (text, embed, iframe...)
    document.querySelectorAll('*').forEach(el => {
        if (el.innerHTML.includes(oldURL)) {
            el.innerHTML = el.innerHTML.replaceAll(oldURL, newURL);
        }
    });

    // Thay trong thuộc tính src
    document.querySelectorAll('[src]').forEach(el => {
        if (el.src.includes(oldURL)) {
            el.src = el.src.replace(oldURL, newURL);
        }
    });
});
</script>

  `);
});

app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

export default app;
