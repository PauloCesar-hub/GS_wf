import React, {useState} from 'react'

export default function ProfileModal({profile, onClose}){
  const [recoCount, setRecoCount] = useState(0)
  const [message, setMessage] = useState('')
  const [showToast, setShowToast] = useState(false)

  if(!profile) return null

  function recommend(){
    setRecoCount(c=>c+1)
    setShowToast(true)
    setTimeout(()=>setShowToast(false), 1800)
  }

  function sendMessage(e){
    e.preventDefault()
    alert(`Mensagem enviada para ${profile.nome}: ${message}`)
    setMessage('')
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-40 p-4">
      <div className="bg-white dark:bg-gray-900 w-full max-w-3xl rounded-lg p-6 relative">
        <button className="absolute right-3 top-3" onClick={onClose}>✕</button>
        <div className="flex gap-6">
          <img src={profile.foto} alt="" className="w-28 h-28 rounded-full object-cover"/>
          <div>
            <h2 className="text-xl font-semibold">{profile.nome}</h2>
            <p className="text-sm">{profile.cargo} • {profile.localizacao}</p>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{profile.resumo}</p>
            <div className="mt-4 flex gap-2">
              <button className="px-3 py-2 rounded bg-blue-600 text-white" onClick={recommend}>Recomendar profissional ({recoCount})</button>
              <button className="px-3 py-2 rounded border" onClick={()=>{document.getElementById('msg-box').scrollIntoView({behavior:'smooth'})}}>Enviar mensagem</button>
            </div>
          </div>
        </div>

        <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Experiências</h3>
            {profile.experiencias.map((e,i)=> (
              <div key={i} className="mt-2 text-sm">
                <div className="font-medium">{e.cargo} — {e.empresa}</div>
                <div className="text-xs text-gray-500">{e.inicio} — {e.fim}</div>
                <div className="mt-1">{e.descricao}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-semibold">Formação & Certificações</h3>
            {profile.formacao.map((f,i)=> (
              <div key={i} className="mt-2 text-sm">{f.curso} — {f.instituicao} ({f.ano})</div>
            ))}
            <div className="mt-3">
              {profile.certificacoes.map((c,i)=>(<div key={i} className="text-sm">• {c}</div>))}
            </div>
          </div>
        </section>

        <form id="msg-box" onSubmit={sendMessage} className="mt-6">
          <label className="block text-sm font-medium">Mensagem para {profile.nome}</label>
          <textarea value={message} onChange={e=>setMessage(e.target.value)} className="w-full mt-2 p-2 rounded border h-24 dark:bg-gray-800" placeholder="Escreva uma mensagem..." required />
          <div className="mt-2 flex gap-2">
            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Enviar mensagem</button>
            <button type="button" onClick={()=>{setMessage('')}} className="px-4 py-2 border rounded">Limpar</button>
          </div>
        </form>

        {showToast && <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded">Recomendado!</div>}
      </div>
    </div>
  )
}
