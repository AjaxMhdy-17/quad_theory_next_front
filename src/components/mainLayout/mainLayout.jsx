
import { Roboto , Raleway } from 'next/font/google'

const raleway = Raleway({
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});


const MainLayout = ({children}) => {



  return (
    <div className={raleway.className}>
        {children}
        
    </div>
  )
}

export default MainLayout