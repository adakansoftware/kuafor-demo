import { Award, Users, ShieldCheck, Sparkles, Heart, Clock } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Uzman Kadro",
    description:
      "Alanında yılların deneyimine sahip, sürekli kendini geliştiren profesyonel ekibimizle hizmetinizdeyiz.",
  },
  {
    icon: Sparkles,
    title: "Premium Ürünler",
    description:
      "Saçınızın sağlığı için yalnızca dünyaca ünlü ve kalitesi kanıtlanmış ürünler kullanıyoruz.",
  },
  {
    icon: ShieldCheck,
    title: "Hijyen Garantisi",
    description:
      "En yüksek hijyen standartlarıyla çalışarak güvenli ve sağlıklı bir ortam sağlıyoruz.",
  },
  {
    icon: Heart,
    title: "Kişiye Özel Bakım",
    description:
      "Her müşterimizin ihtiyaçlarına uygun, kişiselleştirilmiş bakım programları oluşturuyoruz.",
  },
  {
    icon: Users,
    title: "Müşteri Memnuniyeti",
    description:
      "Binlerce mutlu müşterimiz ve yüksek değerlendirme puanlarımızla fark yaratıyoruz.",
  },
  {
    icon: Clock,
    title: "Modern Ekipman",
    description:
      "Son teknoloji cihazlar ve modern tekniklerle en iyi sonuçları elde ediyoruz.",
  },
]

export function WhyUsSection() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Farkımız
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Neden Bizi Tercih Etmelisiniz?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Kaliteli hizmet anlayışımız ve profesyonel yaklaşımımızla her zaman en iyisini sunuyoruz.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group rounded-lg border border-border bg-card p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                <reason.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
