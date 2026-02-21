import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Award, Sparkles, ShieldCheck, Settings } from "lucide-react"

export const metadata: Metadata = {
  title: "Hakkımızda | Bella Saç & Güzellik Salonu",
  description:
    "Bella Saç & Güzellik Salonu hikayesi, misyonumuz, vizyonumuz ve uzman ekibimiz hakkında bilgi edinin.",
}

const values = [
  {
    icon: Sparkles,
    title: "Kaliteli Ürün",
    description:
      "Yalnızca dünyaca ünlü ve kalitesi kanıtlanmış profesyonel saç bakım ürünleri kullanıyoruz.",
  },
  {
    icon: Award,
    title: "Uzman Ekip",
    description:
      "Alanında yılların deneyimine sahip, sürekli eğitim alan profesyonel ekibimiz.",
  },
  {
    icon: ShieldCheck,
    title: "Hijyen",
    description:
      "En yüksek hijyen standartlarına uygun, steril ve güvenli bir çalışma ortamı sağlıyoruz.",
  },
  {
    icon: Settings,
    title: "Modern Ekipman",
    description:
      "Son teknoloji cihazlar ve araçlarla en iyi sonuçları elde ediyoruz.",
  },
]

const team = [
  {
    name: "Elif Aydın",
    title: "Kurucu & Baş Stilist",
    bio: "15 yıllık deneyimiyle saç kesim ve tasarım konusunda uzmanlaşmış olan Elif, Bella Salon'un kurucu ortağıdır. Milano ve Paris'te eğitim almıştır.",
    image: "/images/team-1.jpg",
  },
  {
    name: "Emre Kılıç",
    title: "Renk Uzmanı",
    bio: "Renk teorisi ve modern boyama teknikleri konusunda uzman olan Emre, balyaj ve ombre uygulamalarında sektörün en iyileri arasında yer almaktadır.",
    image: "/images/team-2.jpg",
  },
  {
    name: "Seda Öztürk",
    title: "Bakım & Keratin Uzmanı",
    bio: "Saç bakım tedavileri ve keratin uygulamalarında 10 yıllık deneyime sahip Seda, müşterilerin saç sağlığını ön planda tutmaktadır.",
    image: "/images/team-3.jpg",
  },
]

export default function HakkimizdaPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Hakkımızda
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold text-primary-foreground md:text-5xl text-balance">
            Hikayemiz
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/70">
            {`2014'ten bu yana güzellik ve bakım alanında fark yaratan bir yolculuk.`}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src="/images/about-salon.jpg"
                alt="Bella Salon İç Mekan"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
                Güzelliğe Adanmış Bir Tutku
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {`Bella Saç & Güzellik Salonu, 2014 yılında İstanbul Nişantaşı'nda kapılarını açmıştır. Kurucu stilistimiz Elif Aydın'ın Milano ve Paris'te aldığı eğitimler ve yılların birikimi ile şekillenen salonumuz, kısa sürede İstanbul'un en prestijli güzellik merkezlerinden biri haline gelmiştir.`}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {`İlk günden bugüne kadar değişmeyen prensibimiz; her müşterimize kişiye özel, kaliteli ve profesyonel bir hizmet sunmaktır. Saçlarınızın sağlığını ve güzelliğini ön planda tutarak, sizin için en doğru bakım programını oluşturuyoruz.`}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {`Bugün 15 kişilik uzman kadromuz, binlerce mutlu müşteri ve sürekli güncellenen tekniklerimizle sektörde öncü olmaya devam ediyoruz.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-10">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
                Misyonumuz
              </p>
              <h3 className="mt-3 font-serif text-2xl font-bold text-foreground">
                Kendinize Olan Güveninizi Yeniliyoruz
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Her müşterimizin kendini özel ve güzel hissetmesini sağlamak, saç sağlığını koruyarak en iyi görünümü elde etmelerine yardımcı olmak ve güzellik deneyimini unutulmaz kılmak.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-10">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
                Vizyonumuz
              </p>
              <h3 className="mt-3 font-serif text-2xl font-bold text-foreground">
                {`Türkiye'nin En Güvenilir Salonu`}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {`Kalite, yenilikçilik ve müşteri memnuniyeti odaklı yaklaşımımızla Türkiye'nin en güvenilir ve tercih edilen saç bakım merkezi olmak. Sektöre yön veren trendleri belirlemek ve yeni nesil stilistler yetiştirmek.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Değerlerimiz
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              Temel Değerlerimiz
            </h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Ekibimiz
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              Uzman Kadromuz
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Deneyimli ve tutkulu ekibimizle tanışın.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="group overflow-hidden rounded-lg border border-border bg-card"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-accent">
                    {member.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Ekibimizle Tanışmak İster misiniz?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Salonumuzu ziyaret edin veya hemen online randevu alarak uzman ekibimizle tanışın.
          </p>
          <Link
            href="/randevu"
            className="mt-8 inline-block rounded-sm bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all duration-200 hover:opacity-90"
          >
            Randevu Al
          </Link>
        </div>
      </section>
    </>
  )
}
