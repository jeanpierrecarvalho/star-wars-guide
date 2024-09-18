import PageTitle from '@/components/Page/PageTitle'
import Menu from '@/components/Menu'

export default function Home() {
  return (
    <>
      <main
        role="main"
        aria-labelledby="page-title"
      >
        <PageTitle title="home" />
        <Menu />
      </main>
    </>
  )
}
