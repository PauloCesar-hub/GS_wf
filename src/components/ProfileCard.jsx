import React from 'react'

export default function ProfileCard({profile, onOpen}){
  return (
    <article className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md cursor-pointer" onClick={()=>onOpen(profile)}>
      <div className="flex gap-4 items-center">
        <img src={profile.foto} alt={profile.nome} className="w-16 h-16 rounded-full object-cover"/>
        <div>
          <h3 className="font-semibold">{profile.nome}</h3>
          <p className="text-sm">{profile.cargo}</p>
          <p className="text-xs mt-1 text-gray-500 dark:text-gray-400">{profile.localizacao} • {profile.area}</p>
          <div className="mt-2 flex flex-wrap gap-1">
            {profile.habilidadesTecnicas.slice(0,3).map((h,i)=> (
              <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">{h}</span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
