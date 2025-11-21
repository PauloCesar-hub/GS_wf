import React, {useMemo} from 'react'

export default function SearchFilters({profiles, q, setQ, filters, setFilters}){
  const areas = useMemo(()=> Array.from(new Set(profiles.map(p=>p.area))),[profiles])
  const locais = useMemo(()=> Array.from(new Set(profiles.map(p=>p.localizacao))),[profiles])

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Buscar por nome ou skill..." className="w-full p-2 rounded border dark:bg-gray-700" />
      <div className="mt-3 grid grid-cols-2 gap-2">
        <select value={filters.area} onChange={e=>setFilters(f=>({...f, area: e.target.value}))} className="p-2 rounded border dark:bg-gray-700">
          <option value="">Todas áreas</option>
          {areas.map(a=> <option key={a} value={a}>{a}</option>)}
        </select>
        <select value={filters.localizacao} onChange={e=>setFilters(f=>({...f, localizacao: e.target.value}))} className="p-2 rounded border dark:bg-gray-700">
          <option value="">Todos locais</option>
          {locais.map(l=> <option key={l} value={l}>{l}</option>)}
        </select>
      </div>
    </div>
  )
}
