

import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import MainLayout from '@/components/mainLayout/mainLayout'
import BoxLayout from "@/components/boxLayout/boxLayout"
import Slider from '@/components/slider/slider'
import { CtxAndProvider } from '@/CtxAndReducer/CtxAndReducer'
import CardList from "@/components/cardList/cardList";
import fetchItems from "@/lib/fetchItems";
import AddItemForm from '@/components/addItemForm/addItemForm'
import Overlay from '@/components/modal/Overlay'


export default async function Home() {
  const data = await fetchItems()


  const popular = data.Items.filter(item => item.IsPopular === true)
  const recomended = data.Items.filter(item => item.IsRecommended === true)

  return (
    <main>
      <CtxAndProvider>
        <MainLayout>
          <BoxLayout>
            <Header />
            <Slider />
            <CardList data={popular} heading="popular" />
            <CardList data={recomended} heading="recomended" />
          </BoxLayout>
          <Overlay>
            <AddItemForm />
          </Overlay>
          <Footer />
        </MainLayout>
      </CtxAndProvider>
    </main>
  )
}
