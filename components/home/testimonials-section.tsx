"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "Ayşe Yılmaz",
    text: "Bella Salon'a gitmeye başladığımdan beri saçlarım hiç bu kadar sağlıklı ve güzel olmamıştı. Ekip gerçekten işinin uzmanı ve her zaman beklentilerimin üzerinde sonuçlar alıyorum.",
    rating: 5,
  },
  {
    name: "Zeynep Kara",
    text: "Keratin bakımı için gittim ve sonuç inanılmazdı! Saçlarım ipek gibi oldu. Salondaki hijyen ve ilgi de harika. Herkese gönül rahatlığıyla tavsiye ediyorum.",
    rating: 5,
  },
  {
    name: "Elif Demir",
    text: "Balyaj yaptırmak istiyordum ve tam istediğim tonu yakaladılar. Renk geçişleri çok doğal oldu. Ayrıca kullandıkları ürünlerin kalitesi gerçekten fark yaratıyor.",
    rating: 5,
  },
  {
    name: "Selin Çelik",
    text: "Yıllardır aradığım kuaförü sonunda buldum! Hem profesyonel hem de samimi bir ortam. Saç kesiminden çok memnun kaldım, artık düzenli müşteriyim.",
    rating: 5,
  },
  {
    name: "Merve Aktaş",
    text: "Kaynak saç uygulaması için gittim ve sonuç muhteşemdi. Çok doğal bir görünüm elde ettik. Ekip çok titiz ve özenli çalışıyor, kesinlikle tavsiye ederim.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [next])

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Müşteri Yorumları
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Müşterilerimiz Ne Diyor?
          </h2>
        </div>

        <div className="relative mt-16">
          {/* Testimonial Card */}
          <div className="mx-auto max-w-3xl overflow-hidden">
            <div className="rounded-lg border border-border bg-card p-8 text-center md:p-12">
              {/* Stars */}
              <div className="mb-6 flex items-center justify-center gap-1">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {`"${testimonials[current].text}"`}
              </p>

              {/* Name */}
              <p className="mt-6 font-serif text-lg font-semibold text-foreground">
                {testimonials[current].name}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-accent hover:text-accent-foreground hover:border-accent"
              aria-label="Önceki yorum"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    index === current
                      ? "w-8 bg-accent"
                      : "w-2 bg-border hover:bg-muted-foreground"
                  )}
                  aria-label={`Yorum ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-accent hover:text-accent-foreground hover:border-accent"
              aria-label="Sonraki yorum"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
