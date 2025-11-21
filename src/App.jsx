import React, {useEffect, useState} from 'react'
import ProfileCard from './components/ProfileCard'
import ProfileModal from './components/ProfileModal'
import SearchFilters from './components/SearchFilters'
import profilesData from './data/profiles.json'

export default function App(){
  const [profiles] = useState(profilesData)
  const [q, setQ] = useState('')
  const [filters, setFilters] = useState({area:'', localizacao:''})
  const [selected, setSelected] = useState(null)
  const [dark, setDark] = useState(()=> localStorage.getItem('theme')==='dark')

  useEffect(()=>{
    if(dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', dark? 'dark':'light')
  },[dark])

  const results = profiles.filter(p=>{
    const qLower = q.toLowerCase()
    const matchQ = !q || p.nome.toLowerCase().includes(qLower) || p.habilidadesTecnicas.join(' ').toLowerCase().includes(qLower)
    const matchArea = !filters.area || p.area === filters.area
    const matchLocal = !filters.localizacao || p.localizacao === filters.localizacao
    return matchQ && matchArea && matchLocal
  })

  return (
    <div className="min-h-screen p-6">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Futuro do Trabalho — Rede de Talentos</h1>
        <div className="flex items-center gap-3">
          <button onClick={()=>setDark(d=>!d)} className="px-3 py-1 border rounded">{dark? 'Light' : 'Dark'}</button>
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <aside className="lg:col-span-1">
          <SearchFilters profiles={profiles} q={q} setQ={setQ} filters={filters} setFilters={setFilters} />
        </aside>

        <section className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {results.map(p=> (
              <ProfileCard key={p.id} profile={p} onOpen={setSelected} />
            ))}
          </div>
          <div className="mt-6 text-sm text-gray-500">{results.length} profissionais encontrados</div>
        </section>
      </main>

      {selected && <ProfileModal profile={selected} onClose={()=>setSelected(null)} />}
    </div>
  )
}
