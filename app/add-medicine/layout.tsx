import Footer from "@/components/Footer";
import Header from "@/components/Header";


export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
        <Header/>
        <div className="mt-2"></div>
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer/>
    </div>
  )
}
