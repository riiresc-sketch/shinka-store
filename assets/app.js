const API_URL = 'https://api-shinka.vercel.app' // GANTI KE API KAMU
const API_KEY = 'shinkajier321'

function toggleTheme() {
    document.documentElement.classList.toggle('dark')
    localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}
if(localStorage.theme === 'light') document.documentElement.classList.remove('dark')

async function apiFetch(endpoint, options = {}) {
    try {
        let res = await fetch(API_URL + endpoint, options)
        return await res.json()
    } catch(e) {
        alert('Gagal konek ke API. Cek API_URL')
    }
}