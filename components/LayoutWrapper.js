import Footer from './Footer'
import Header from './Header'

// height coded ing globals.css

const LayoutWrapper = ({ children }) => {
  return (
    <div className='max-w-full bg-slate-400'>
      <div className='container flex flex-col min-h-screen mx-auto bg-slate-50'>
        <Header />
        <main role='main'>
          {children}
        </main>
        <Footer />
      </div>
    </div>

  )
}

export default LayoutWrapper
