export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">About me</h1>

      <p className="text-gray-700">
        Ik ben Sam Van de Woestijne en welkom in mijn creatief lab.
        Momenteel ben ik nog een student grafische en digitale media. 
        Ik heb al een bachelorsdiploma communicatie maar ik ben verder gaan studeren
        omdat ik mij wou verdiepen in de creatieve wereld.  
        Op deze website vind je mijn portfolio van al mijn werk van de afgelopen jaren.
      </p>

      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>visual</li>
        <li>motion</li>
        <li>branding</li>
      </ul>

{/* Flexbox image layout – 2 foto's */}
<div className="flex flex-col md:flex-row gap-4">
  <div className="flex-1 aspect-[4/3]">
    <img
      src="/img/foto1.jpg"
      alt=""
      className="w-full h-full object-cover rounded-xl"
    />
  </div>

  <div className="flex-1 aspect-[4/3]">
    <img
      src="/img/foto2.jpg"
      alt=""
      className="w-full h-full object-cover rounded-xl"
    />
  </div>
</div>


    
      </div>
  
  )
}

