import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Homep = () => {
	useEffect(()=>{
		AOS.init({duration: 2000})
	})
  return (
	<section className="text-layer" data-aos="fade-left">
	<h1>Hey Babe,</h1>
	<p>This was meant to be easy but  funny how the hardest part of all of this wasn't writing the lines of codes to bring this to life it was actually finding the words that will do enough justice to describing how amazing you are and how much i love you</p>
	<p>Did I ever tell you that the hardest part of being with you is finding the perfect words to appreciate your entirety, time and time again, my lexicon fail me and no adjective is really doing enough to come close to qualifying you.</p>
	<p>I randomly remember you are my woman and i grin from ear to ear because sometimes, it still feels surreal that you are mine and I don't think I can ever say this enough, <h3>I LOVE YOU.</h3></p>  
	<div >
		<Link href="/comps/second"><button>NEXT</button></Link>
	</div>
</section>
  )
}

export default Homep