import './style.css'

const app = document.querySelector('#app')

app.innerHTML = `
<div class="app-shell">
  <header class="topbar">
    <div class="brand">
      <div class="brand-icon">✦</div>
      <div>
        <h2>NEXUS <span>AI</span></h2>
        <small>INTELLIGENCE REDEFINED</small>
      </div>
    </div>
    <button class="profile" id="profile">N</button>
  </header>

  <main id="screen">
    <section class="welcome">
      <div class="gold-orb">✧</div>
      <div class="eyebrow">YOUR PERSONAL AI</div>
      <h1>Welcome to<br><span>NEXUS AI</span></h1>
      <p>اكتشف قوة الذكاء الاصطناعي في عالم واحد</p>
      <div class="status"><i></i> SYSTEM ONLINE</div>
    </section>

    <section class="chat-card">
      <div class="section-heading">
        <div>
          <small>INTELLIGENT ASSISTANT</small>
          <h2>كيف يمكنني مساعدتك؟</h2>
        </div>
        <span class="spark">✦</span>
      </div>
      <div id="messages" class="messages">
        <div class="ai-message">مرحباً بك في NEXUS AI. أنا مساعدك الذكي، اكتب رسالتك للبدء.</div>
      </div>
      <form id="chat-form">
        <input id="prompt" placeholder="اكتب رسالتك هنا..." autocomplete="off">
        <button type="submit">➤</button>
      </form>
      <small class="demo-note">واجهة تجريبية — يتطلب الرد الذكي ربط خدمة AI</small>
    </section>

    <section class="tools">
      <div class="section-heading">
        <div>
          <small>EXPLORE NEXUS</small>
          <h2>أدواتك الذكية</h2>
        </div>
      </div>
      <div class="tool-grid">
        <button class="tool" data-tool="الكتابة الذكية">
          <span>✎</span><b>الكتابة الذكية</b><small>AI WRITER</small>
        </button>
        <button class="tool" data-tool="تحليل المعلومات">
          <span>⌕</span><b>تحليل المعلومات</b><small>AI ANALYSIS</small>
        </button>
        <button class="tool" data-tool="الإبداع والأفكار">
          <span>✧</span><b>الإبداع والأفكار</b><small>AI CREATIVE</small>
        </button>
        <button class="tool" data-tool="المساعد الشخصي">
          <span>♙</span><b>المساعد الشخصي</b><small>AI ASSISTANT</small>
        </button>
      </div>
    </section>

    <section class="premium">
      <span>✦ NEXUS PREMIUM</span>
      <h2>ارتقِ بتجربتك</h2>
      <p>عالم متكامل من الإمكانيات الذكية.</p>
      <button id="premium-btn">اكتشف المزيد ←</button>
    </section>
  </main>

  <nav class="bottom-nav">
    <button class="active" data-page="home"><span>⌂</span>الرئيسية</button>
    <button data-page="chat"><span>✧</span>المساعد</button>
    <button data-page="tools"><span>▦</span>الأدوات</button>
    <button data-page="profile"><span>♙</span>حسابي</button>
  </nav>
</div>
`

const messages = document.querySelector('#messages')
const prompt = document.querySelector('#prompt')

function sendMessage(value) {
  const text = value.trim()
  if (!text) return

  messages.insertAdjacentHTML('beforeend',
    `<div class="user-message"></div>`)
  messages.lastElementChild.textContent = text

  messages.insertAdjacentHTML('beforeend',
    `<div class="ai-message">تم استلام رسالتك. لتمكين الإجابات الذكية الفعلية، سنربط NEXUS AI بمحرك ذكاء اصطناعي في المرحلة التالية.</div>`)

  prompt.value = ''
  messages.scrollTop = messages.scrollHeight
}

document.querySelector('#chat-form').addEventListener('submit', e => {
  e.preventDefault()
  sendMessage(prompt.value)
})

document.querySelectorAll('[data-tool]').forEach(button => {
  button.addEventListener('click', () => {
    prompt.value = `أريد استخدام ${button.dataset.tool}`
    prompt.focus()
    document.querySelector('.chat-card').scrollIntoView({behavior:'smooth'})
  })
})

document.querySelectorAll('[data-page]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-page]').forEach(b => b.classList.remove('active'))
    button.classList.add('active')

    const page = button.dataset.page
    if (page === 'chat') {
      document.querySelector('.chat-card').scrollIntoView({behavior:'smooth'})
    } else if (page === 'tools') {
      document.querySelector('.tools').scrollIntoView({behavior:'smooth'})
    } else if (page === 'home') {
      window.scrollTo({top:0,behavior:'smooth'})
    } else {
      alert('NEXUS AI — صفحة الحساب الشخصي')
    }
  })
})

document.querySelector('#profile').addEventListener('click', () => {
  alert('NEXUS AI — حساب المستخدم')
})

document.querySelector('#premium-btn').addEventListener('click', () => {
  alert('NEXUS PREMIUM — قريباً')
})
