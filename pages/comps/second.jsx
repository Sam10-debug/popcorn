import Link from 'next/link'

const Second = () => {
  return (
	<section>
        <div className="second">
        <h1>AN ODE TO MY WOMAN</h1>
        <p>Your beauty shines like a bright star</p>
        <p>Your smile warms my heart</p>
        <p>Your eyes, so deep and full of grace</p>
        <p>A true work of art, in every space.</p>
        
        <p>You light up my world with your inner glow</p>
        <p>And I&apos;ll never let you go, that I know</p>
        <p>With each passing day, you&apos;re more beautiful</p>
        <p>My love for you will always be full.</p>
        
        <p>You bring so much joy to my life</p>
        <p>You are my heart, my soul, my wife</p>
        <p>Your laughter fills the air with delight</p>
        <p>Together, we&apos;ll conquer all in sight.</p>
        
        <p>So here&apos;s a poem from my heart to you</p>
        <p>To show how much I truly love and appreciate you</p>
        <p>Forever and always, I&apos;ll be by your side</p>
        <p>Together we&apos;ll always enjoy the ride.</p>
        </div>
        <div class="btn-div">
		<Link href="/comps/homep"><button>PREVIOUS</button></Link>
		<Link href="/comps/third"><button>NEXT</button></Link>
        </div>
    </section>
  )
}

export default Second