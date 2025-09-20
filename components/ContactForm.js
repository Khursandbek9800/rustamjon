import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name:'', phone:'', service:'', message:'', honeypot:'' })
  const [status, setStatus] = useState({ loading:false, ok:null, error:null })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ loading:true, ok:null, error:null })
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok && data.ok) {
        setStatus({ loading:false, ok:true, error:null })
        setForm({ name:'', phone:'', service:'', message:'', honeypot:'' })
      } else {
        setStatus({ loading:false, ok:false, error: data.error || 'Failed' })
      }
    } catch (err) {
      setStatus({ loading:false, ok:false, error: 'Network error' })
    }
  }

  return (
    <div id="contact" className="grid md:grid-cols-3 gap-6">
      <form onSubmit={submit} className="md:col-span-2 card">
        <h3 className="text-lg font-semibold">Request a quote</h3>
        <div className="mt-4 grid md:grid-cols-2 gap-3">
          <div>
            <label className="text-sm text-slate-600">Name</label>
            <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full p-2 border rounded-md" />
          </div>
          <div>
            <label className="text-sm text-slate-600">Phone</label>
            <input name="phone" value={form.phone} onChange={handleChange} required className="mt-1 w-full p-2 border rounded-md" placeholder="+971 4 576 1731" />
          </div>
        </div>

        <div className="mt-3">
          <label className="text-sm text-slate-600">Service</label>
          <input name="service" value={form.service} onChange={handleChange} className="mt-1 w-full p-2 border rounded-md" placeholder="e.g. Appliance repair" />
        </div>

        {/* honeypot */}
        <input name="honeypot" value={form.honeypot} onChange={handleChange} className="hidden" />

        <div className="mt-3">
          <label className="text-sm text-slate-600">Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} className="mt-1 w-full p-2 border rounded-md" />
        </div>

        <div className="mt-4 flex items-center gap-3">
          <button type="submit" disabled={status.loading} className="btn">
            {status.loading ? 'Sending...' : 'Send request'}
          </button>
          {status.ok && <div className="text-sm text-green-600">Thanks — we will contact you soon.</div>}
          {status.error && <div className="text-sm text-red-600">{status.error}</div>}
        </div>
      </form>

      <aside className="card">
        <h4 className="font-semibold">Contact info</h4>
        <div className="mt-2 text-slate-600">
          <div>Address:</div>
          <div className="mt-1 text-sm">
Office 405, H.H. SH Saud Bin Saqar BLDGs
Sheikh Saud Street, Dubai, UAE</div>

          <div className="mt-3">Phone: <a href="tel:+97145761731" className="text-primary">+971 4 576 1731</a></div>
          <div className="mt-1">Email: <a href="mailto:Rustamjonovichsupport@gmail.com" className="text-primary">Rustamjonovichsupport@gmail.com</a></div>
        </div>

        <div className="mt-4 small-muted">Hours: Mon–Sat 9:00–18:00</div>

        <a className="btn mt-4 inline-block" href="mailto:Rustamjonovichsupport@gmail.com">Email us</a>
      </aside>
    </div>
  )
}
