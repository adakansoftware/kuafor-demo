import type { Metadata } from "next"
import { BookingForm } from "@/components/booking-form"
import { Phone, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Randevu Al | Bella Saç & Güzellik Salonu",
  description:
    "Online randevu alarak uzman ekibimizle tanışın. Saç kesim, boyama, keratin bakımı ve daha fazlası için hemen randevu oluşturun.",
}

export default function RandevuPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Randevu
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold text-primary-foreground md:text-5xl text-balance">
            Online Randevu Al
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/70">
            Aşağıdaki formu doldurarak kolayca randevu oluşturabilirsiniz. Ekibimiz en kısa sürede sizinle iletişime geçecektir.
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              <BookingForm />
            </div>

            {/* Sidebar Info */}
            <div className="flex flex-col gap-6">
              {/* Contact Card */}
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-serif text-lg font-bold text-foreground">
                  İletişim Bilgileri
                </h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Telefon</p>
                      <a
                        href="tel:+902125550088"
                        className="text-sm text-muted-foreground hover:text-accent"
                      >
                        +90 (212) 555 00 88
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Adres</p>
                      <p className="text-sm text-muted-foreground">
                        {`Nişantaşı Mah. Abdi İpekçi Cad. No:42, Şişli / İstanbul`}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Çalışma Saatleri
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Pzt - Cmt: 09:00 - 21:00
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Pazar: 10:00 - 18:00
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Note Card */}
              <div className="rounded-lg border border-accent/20 bg-accent/5 p-6">
                <h3 className="font-serif text-lg font-bold text-foreground">
                  Bilgilendirme
                </h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  <li>
                    {`• Randevunuzu en az 24 saat öncesinden iptal veya değiştirebilirsiniz.`}
                  </li>
                  <li>
                    {`• İlk ziyaretinize özel %10 indirim uygulanmaktadır.`}
                  </li>
                  <li>
                    {`• Randevu saatinizden 10 dakika önce salonumuzda olmanızı rica ederiz.`}
                  </li>
                  <li>
                    {`• Sorularınız için bizi aramaktan çekinmeyin.`}
                  </li>
                </ul>
              </div>

              {/* Map */}
              <div className="overflow-hidden rounded-lg border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.8541428440346!2d28.98742!3d41.04861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7175e22bf43%3A0x726d431e947c8c49!2sNi%C5%9Fanta%C5%9F%C4%B1%2C%20%C5%9Ei%C5%9Fli%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bella Salon Konum"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
