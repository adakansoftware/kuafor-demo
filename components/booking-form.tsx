"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { CalendarDays, Clock, User, Phone, Mail, CheckCircle2 } from "lucide-react"

const services = [
  "Saç Kesim & Tasarım",
  "Saç Boyama",
  "Keratin Bakımı",
  "Fön & Şekillendirme",
  "Kaynak İşlemleri",
]

const timeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
]

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-card p-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
          <CheckCircle2 className="h-8 w-8 text-accent" />
        </div>
        <h3 className="mt-6 font-serif text-2xl font-bold text-foreground">
          Randevunuz Alındı!
        </h3>
        <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
          Sayın <span className="font-medium text-foreground">{formData.name}</span>, randevunuz başarıyla oluşturuldu. En kısa sürede sizinle iletişime geçeceğiz.
        </p>
        <div className="mt-6 rounded-lg bg-secondary p-4">
          <div className="grid gap-2 text-sm">
            <p>
              <span className="text-muted-foreground">Hizmet:</span>{" "}
              <span className="font-medium text-foreground">{formData.service}</span>
            </p>
            <p>
              <span className="text-muted-foreground">Tarih:</span>{" "}
              <span className="font-medium text-foreground">{formData.date}</span>
            </p>
            <p>
              <span className="text-muted-foreground">Saat:</span>{" "}
              <span className="font-medium text-foreground">{formData.time}</span>
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            setSubmitted(false)
            setFormData({ service: "", date: "", time: "", name: "", phone: "", email: "" })
          }}
          className="mt-8 rounded-sm bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:opacity-90"
        >
          Yeni Randevu Al
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-border bg-card p-8 md:p-10"
    >
      <div className="grid gap-6">
        {/* Service Selection */}
        <div>
          <label
            htmlFor="service"
            className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground"
          >
            <CalendarDays className="h-4 w-4 text-accent" />
            Hizmet Seçimi
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
          >
            <option value="" disabled>
              Bir hizmet seçin
            </option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        {/* Date & Time */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="date"
              className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <CalendarDays className="h-4 w-4 text-accent" />
              Tarih Seçimi
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              min={new Date().toISOString().split("T")[0]}
              className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </div>
          <div>
            <label
              htmlFor="time"
              className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <Clock className="h-4 w-4 text-accent" />
              Saat Seçimi
            </label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
            >
              <option value="" disabled>
                Saat seçin
              </option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground"
          >
            <User className="h-4 w-4 text-accent" />
            Ad Soyad
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Adınızı ve soyadınızı girin"
            className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
          />
        </div>

        {/* Phone & Email */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="phone"
              className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <Phone className="h-4 w-4 text-accent" />
              Telefon
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="05XX XXX XX XX"
              className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <Mail className="h-4 w-4 text-accent" />
              E-posta
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="ornek@email.com"
              className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className={cn(
            "mt-2 w-full rounded-sm bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all duration-200 hover:opacity-90",
          )}
        >
          Randevuyu Onayla
        </button>
      </div>
    </form>
  )
}
